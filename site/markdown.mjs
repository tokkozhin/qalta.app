import TurndownService from "turndown";

const SITE = "https://qalta.app";

/** Decode the few entities the build emits into plain text. */
const decodeEntities = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)));

/**
 * Builds the Markdown twin of a generated HTML page. Everything outside
 * <main> (head, header, footer, language switcher) is navigation chrome and
 * does not belong in an LLM's context. Links and image URLs are absolutized
 * because a Markdown file travels without a base URL.
 */
export function toMarkdown(html) {
  const grab = (re) => html.match(re)?.[1]?.trim();
  const title = decodeEntities(grab(/<title>([^<]*)<\/title>/) ?? "");
  const description = decodeEntities(grab(/<meta name="description" content="([^"]*)"/) ?? "");
  const canonical = grab(/<link rel="canonical" href="([^"]*)"/) ?? SITE;
  const main = grab(/<main[^>]*>([\s\S]*?)<\/main>/) ?? html;

  const turndown = new TurndownService({
    headingStyle: "atx",
    bulletListMarker: "-",
    emDelimiter: "*",
    codeBlockStyle: "fenced",
  });
  turndown.remove(["svg", "script", "style", "noscript", "template"]);
  turndown.addRule("figure", {
    filter: "figure",
    replacement: (content) => `\n\n${content.trim()}\n\n`,
  });
  turndown.addRule("figcaption", {
    filter: "figcaption",
    replacement: (content) => {
      const caption = content.trim();
      // Captions with block children (<h3>, <p>) lose nothing being unwrapped.
      return caption.includes("\n") ? `\n\n${caption}\n\n` : `\n*${caption}*\n`;
    },
  });
  turndown.addRule("details", {
    filter: "details",
    replacement: (content) => `\n\n${content.trim()}\n\n`,
  });
  turndown.addRule("summary", {
    filter: "summary",
    replacement: (content) => `\n**${content.trim()}**\n`,
  });

  const body = turndown
    .turndown(main)
    .replace(/\]\(\/(?!\/)/g, `](${SITE}/`) // root-relative links and image sources
    .replace(/[ \t]+$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return `---\ntitle: ${JSON.stringify(title)}\ndescription: ${JSON.stringify(description)}\nurl: ${canonical}\n---\n\n${body}\n`;
}
