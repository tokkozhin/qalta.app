import { footer, head, header } from "./layout.mjs";

export function renderMcp(ctx) {
  const m = ctx.t.mcp;
  const title = m.title;
  const description = m.description;
  const page = { path: "/mcp", title, description, ogImage: "home.png", ogImageAlt: "Qalta", stylesheet: "/site.css" };
  const content = `
    <p class="lede">${m.lede}</p>
    <section class="mcp__section" aria-labelledby="mcp-connect-title">
      <h2 id="mcp-connect-title">${m.sectionTitle}</h2>
      <ol>
${m.steps.map((step) => `        <li>${step}</li>`).join("\n")}
      </ol>
    </section>
  `;
  return `${head(ctx, page)}<body>
${header(ctx)}
  <main class="doc container mcp" lang="${ctx.lang}">
    <h1>${m.h1}</h1>
${content}
  </main>
${footer(ctx, page.path)}</body></html>\n`;
}
