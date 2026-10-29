import { footer, head, header } from "./layout.mjs";

export function renderSupport(ctx) {
  const s = ctx.t.support;
  const title = s.title;
  const description = s.description;
  const page = { path: "/support", title, description, ogImage: "home.png", ogImageAlt: "Qalta", stylesheet: "/site.css" };
  return `${head(ctx, page)}<body>
${header(ctx)}
  <main class="doc container support" lang="${ctx.lang}">
    <h1>${title}</h1>
    <section class="support__contact" aria-labelledby="contact-title">
      <span class="support__eyebrow">${s.eyebrow}</span>
      <h2 id="contact-title">${s.contactTitle}</h2>
      <p>${s.contactBody}</p>
      <a class="support__email" href="mailto:${s.email}">${s.email}</a>
      <p class="support__note">${s.privacyNote}</p>
    </section>
  </main>
${footer(ctx, page.path)}</body></html>\n`;
}
