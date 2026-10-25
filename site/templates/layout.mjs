import { DEFAULT_LANG, LANGUAGES, SITE, appStoreUrl } from "../config.mjs";

export const localPath = (lang, path) => (lang === DEFAULT_LANG ? path : `/${lang}${path}`);
export const absUrl = (lang, path) => `${SITE}${localPath(lang, path)}`;

export const fill = (s, vars) => s.replace(/\{([a-zA-Z]+)\}/g, (m, k) => (k in vars ? vars[k] : m));
/** Dictionary strings are trusted HTML; only bare ampersands need escaping. */
export const html = (s) => s.replace(/&(?!#?\w+;)/g, "&amp;");
export const attr = (s) => html(s).replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
export const plain = (s) =>
  s
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .replace(/\s+([.,;:!?)])/g, "$1")
    .trim();

export function jsonLd(data) {
  const json = JSON.stringify(data, null, 2).replace(/</g, "\\u003c");
  return `  <script type="application/ld+json">\n${json.replace(/^/gm, "  ")}\n  </script>\n`;
}

export function head(ctx, page) {
  const { lang, t } = ctx;
  const current = LANGUAGES.find((l) => l.code === lang);
  const title = attr(page.title);
  const description = attr(page.description);
  const ogTitle = attr(page.ogTitle ?? page.title);
  const ogDescription = attr(page.ogDescription ?? page.description);
  const image = `${SITE}/assets/og/${page.ogImage}`;
  const alternates = LANGUAGES.map(
    (l) => `  <link rel="alternate" hreflang="${l.code}" href="${absUrl(l.code, page.path)}" />`,
  ).join("\n");
  const localeAlternates = LANGUAGES.filter((l) => l.code !== lang)
    .map((l) => `  <meta property="og:locale:alternate" content="${l.ogLocale}" />`)
    .join("\n");

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${absUrl(lang, page.path)}" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <meta name="apple-itunes-app" content="app-id=6756010294" />
${alternates}
  <link rel="alternate" hreflang="x-default" href="${absUrl(DEFAULT_LANG, page.path)}" />
${page.extraMeta ?? ""}  <meta property="og:site_name" content="Qalta" />
  <meta property="og:locale" content="${current.ogLocale}" />
${localeAlternates}
  <meta property="og:type" content="${page.ogType ?? "article"}" />
  <meta property="og:url" content="${absUrl(lang, page.path)}" />
  <meta property="og:title" content="${ogTitle}" />
  <meta property="og:description" content="${ogDescription}" />
  <meta property="og:image" content="${image}" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="${attr(page.ogImageAlt)}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${ogTitle}" />
  <meta name="twitter:description" content="${ogDescription}" />
  <meta name="twitter:image" content="${image}" />
  <meta name="twitter:image:alt" content="${attr(page.ogImageAlt)}" />
  <meta name="color-scheme" content="light dark" />
  <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
  <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000000" />
  <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
${page.extraHead ?? ""}  <link rel="stylesheet" href="${page.stylesheet}" />
</head>
`;
}

export function header(ctx) {
  const { lang, t } = ctx;
  return `  <header class="top">
    <div class="container top__inner">
      <a class="brand" href="${localPath(lang, "/")}">
        <img class="brand__mark" src="/assets/vector_logo.svg" width="38" height="35" alt="" />
        <span class="brand__text">
          <span class="brand__name">Qalta</span>
          <span class="brand__tag">${html(t.common.brandTag)}</span>
        </span>
      </a>
      <a class="pill pill--outline" href="${appStoreUrl(lang)}" target="_blank" rel="noopener noreferrer"><span class="top-cta__full">${html(t.common.openInAppStore)}</span><span class="top-cta__short">${html(t.common.appStoreShort)}</span></a>
    </div>
  </header>
`;
}

export function footer(ctx, pagePath) {
  const { lang, t } = ctx;
  const nav = t.common.nav;
  const langs = LANGUAGES.map((l) => {
    const current = l.code === lang ? ' aria-current="true"' : "";
    return `        <a href="${localPath(l.code, pagePath)}" hreflang="${l.code}" lang="${l.code}" data-set-lang="${l.code}"${current}>${l.name}</a>`;
  }).join("\n");
  return `  <footer class="foot">
    <div class="container foot__inner">
      <nav class="foot__links" aria-label="${attr(t.common.footerNavLabel)}">
        <a href="${localPath(lang, "/tutorials/")}">${html(nav.tutorials)}</a>
        <a href="${localPath(lang, "/support")}">${html(nav.support)}</a>
        <a href="${localPath(lang, "/privacy-policy")}">${html(nav.privacy)}</a>
        <a href="${localPath(lang, "/terms-and-conditions")}">${html(nav.terms)}</a>
      </nav>
      <p>© <span data-year>2026</span> Daniel Tokkozhin</p>
    </div>
    <div class="container">
      <nav class="langs" aria-label="${attr(t.common.languageLabel)}">
        <svg class="langs__icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
${langs}
      </nav>
    </div>
  </footer>
  <script>
    document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
    document.addEventListener("click", function (e) {
      var link = e.target.closest && e.target.closest("[data-set-lang]");
      if (link) document.cookie = "lang=" + link.getAttribute("data-set-lang") + "; path=/; max-age=31536000; samesite=lax";
    });
  </script>
`;
}
