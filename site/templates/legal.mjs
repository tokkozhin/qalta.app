import { DEFAULT_LANG } from "../config.mjs";
import { fill, footer, head, header, html, localPath } from "./layout.mjs";

export function renderLegal(ctx, { key, path, ogImage }) {
  const { lang, t } = ctx;
  const doc = t[key];
  const page = {
    path,
    title: `${doc.title} — Qalta`,
    description: doc.description,
    ogTitle: doc.ogTitle,
    ogImage,
    ogImageAlt: doc.ogImageAlt,
    stylesheet: "/site.css",
  };
  const vars = { privacyUrl: localPath(lang, "/privacy-policy"), termsUrl: localPath(lang, "/terms-and-conditions") };
  const blocks = doc.blocks
    .map((b) => `    ${html(fill(b, vars)).replace(/href="privacy-policy"/g, `href="${vars.privacyUrl}"`)}`)
    .join("\n");
  const notice =
    lang === DEFAULT_LANG
      ? ""
      : `    <p class="notice">${html(fill(t.common.legalNotice, { englishUrl: localPath(DEFAULT_LANG, path) }))}</p>\n`;

  return `${head(ctx, page)}<body>
${header(ctx)}
  <main class="doc container">

    <h1>${html(doc.h1)}</h1>
    <p class="updated">${html(doc.updated)}</p>
${notice}
${blocks}

  </main>

${footer(ctx, path)}</body>
</html>
`;
}
