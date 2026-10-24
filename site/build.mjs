import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { checkLang } from "./check-i18n.mjs";
import { DEFAULT_LANG, LANGS, PAGES_FILES, i18nDir, publicDir, siteDir } from "./config.mjs";
import { renderHome } from "./templates/home.mjs";
import { absUrl } from "./templates/layout.mjs";
import { renderLegal } from "./templates/legal.mjs";
import { GUIDE_GROUPS, renderGuide, renderTutorialsIndex } from "./templates/tutorials.mjs";

const readJson = (path) => JSON.parse(readFileSync(path, "utf8"));
const guides = readJson(`${siteDir}guides.json`);

/** Missing keys fall back to English; arrays fall back whole when their length differs. */
function merge(base, override) {
  if (override === undefined) return base;
  if (typeof base === "string") return typeof override === "string" && override.trim() ? override : base;
  if (Array.isArray(base)) {
    return Array.isArray(override) && override.length === base.length ? base.map((v, i) => merge(v, override[i])) : base;
  }
  return Object.fromEntries(Object.keys(base).map((k) => [k, merge(base[k], override?.[k])]));
}

function dictionary(lang) {
  const t = {};
  for (const file of PAGES_FILES) {
    const en = readJson(`${i18nDir}/en/${file}.json`);
    const path = `${i18nDir}/${lang}/${file}.json`;
    t[file] = lang === DEFAULT_LANG || !existsSync(path) ? en : merge(en, readJson(path));
  }
  return t;
}

const pages = [
  { path: "/", out: "index.html", render: renderHome },
  { path: "/tutorials/", out: "tutorials/index.html", render: renderTutorialsIndex },
  ...GUIDE_GROUPS.flatMap((g) => g.slugs).map((slug) => ({
    path: `/tutorials/${slug}`,
    out: `tutorials/${slug}.html`,
    render: (ctx) => renderGuide(ctx, slug, guides[slug]),
  })),
  {
    path: "/privacy-policy",
    out: "privacy-policy.html",
    render: (ctx) => renderLegal(ctx, { key: "privacy", path: "/privacy-policy", ogImage: "privacy.png" }),
  },
  {
    path: "/terms-and-conditions",
    out: "terms-and-conditions.html",
    render: (ctx) => renderLegal(ctx, { key: "terms", path: "/terms-and-conditions", ogImage: "terms.png" }),
  },
];

for (const lang of LANGS) if (lang !== DEFAULT_LANG) rmSync(`${publicDir}/${lang}`, { recursive: true, force: true });
rmSync(`${publicDir}/tutorials/apple-pay-ios-26-ru.html`, { force: true });

const built = [];
for (const lang of LANGS) {
  if (lang !== DEFAULT_LANG) {
    const problems = checkLang(lang);
    if (problems.length) console.warn(`${lang}: ${problems.length} translation problem(s), English used where missing. Run: node site/check-i18n.mjs ${lang}`);
  }
  const ctx = { lang, t: dictionary(lang) };
  for (const page of pages) {
    const file = `${publicDir}/${lang === DEFAULT_LANG ? "" : `${lang}/`}${page.out}`;
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, page.render(ctx));
  }
  built.push(lang);
}

const today = new Date().toISOString().slice(0, 10);
const priority = (path) => (path === "/" ? "1.0" : path.startsWith("/tutorials") ? "0.7" : "0.3");
const urls = LANGS.flatMap((lang) =>
  pages.map((page) => {
    const links = [...LANGS.map((l) => [l, absUrl(l, page.path)]), ["x-default", absUrl(DEFAULT_LANG, page.path)]]
      .map(([l, href]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${href}" />`)
      .join("\n");
    return `  <url>
    <loc>${absUrl(lang, page.path)}</loc>
    <lastmod>${today}</lastmod>
    <priority>${priority(page.path)}</priority>
${links}
  </url>`;
  }),
);
writeFileSync(
  `${publicDir}/sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`,
);

console.log(`Built ${pages.length} pages × ${built.length} languages (${built.join(", ")}).`);
