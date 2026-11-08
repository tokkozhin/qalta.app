import { handleMcp } from "./mcp.ts";

/** Keep in sync with `LANGUAGES` in `site/config.mjs`. */
const LANGS = ["en", "de", "es", "fr", "it", "ja", "kk", "ko", "pl", "pt", "ru", "th", "tr", "uk"] as const;
type Lang = (typeof LANGS)[number];

const DEFAULT_LANG: Lang = "en";
const COOKIE = "lang";

const LEGACY_REDIRECTS: Record<string, string> = {
  "/tutorials/apple-pay-ios-26-ru": "/ru/tutorials/apple-pay-ios-26",
  "/tutorials/apple-pay-ios-26-ru.html": "/ru/tutorials/apple-pay-ios-26",
};

const isLang = (value: string | undefined): value is Lang => LANGS.includes(value as Lang);

function cookieLang(request: Request): Lang | null {
  const match = request.headers.get("Cookie")?.match(/(?:^|;\s*)lang=([a-z]{2})/);
  return match && isLang(match[1]) ? match[1] : null;
}

/** Picks the first supported language in `Accept-Language` order, so a user who prefers English stays on English. */
function acceptLang(request: Request): Lang {
  const header = request.headers.get("Accept-Language");
  if (!header) return DEFAULT_LANG;
  const ranked = header
    .split(",")
    .map((part, index) => {
      const [tag, ...params] = part.trim().toLowerCase().split(";");
      const q = Number(params.find((p) => p.trim().startsWith("q="))?.split("=")[1] ?? 1);
      return { base: tag.split("-")[0], q: Number.isFinite(q) ? q : 0, index };
    })
    .filter((entry) => entry.base && entry.q > 0)
    .sort((a, b) => b.q - a.q || a.index - b.index);
  const match = ranked.find((entry) => isLang(entry.base));
  return match ? (match.base as Lang) : DEFAULT_LANG;
}

/** HTML pages only; assets keep the fast path. */
function isPage(pathname: string) {
  const last = pathname.split("/").pop() ?? "";
  return !last.includes(".") || last.endsWith(".html");
}

const MD_CONTENT_TYPE = "text/markdown; charset=utf-8";

/** `/` → `/index.md`, `/a/b` → `/a/b.md` */
function mdPathFor(pathname: string): string {
  return pathname.endsWith("/") ? `${pathname}index.md` : `${pathname}.md`;
}

/** Inverse of mdPathFor. */
function htmlPathFor(mdPath: string): string {
  return mdPath.endsWith("/index.md")
    ? mdPath.slice(0, mdPath.length - "index.md".length)
    : mdPath.replace(/\.md$/i, "");
}

const mdAlternate = (pathname: string) =>
  `<${mdPathFor(pathname)}>; rel="alternate"; type="text/markdown"`;
const htmlAlternate = (mdPath: string) =>
  `<${htmlPathFor(mdPath)}>; rel="alternate"; type="text/html"`;

type AcceptEntry = { type: string; q: number };

/** RFC 9110 quality values; an empty or absent header means `*\/*`. */
function parseAccept(accept: string): AcceptEntry[] {
  if (!accept.trim()) return [{ type: "*/*", q: 1 }];
  return accept
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((item) => {
      const [type, ...params] = item.split(";").map((s) => s.trim());
      let q = 1;
      for (const p of params) {
        const eq = p.indexOf("=");
        if (eq < 0 || p.slice(0, eq).trim().toLowerCase() !== "q") continue;
        const n = parseFloat(p.slice(eq + 1));
        if (Number.isFinite(n)) q = n;
      }
      return { type: type.toLowerCase(), q };
    });
}

function qualityFor(entries: AcceptEntry[], candidate: string): number {
  const [primary] = candidate.split("/");
  let bestSpec = -1;
  let bestQ = 0;
  for (const { type, q } of entries) {
    const spec =
      type === candidate ? 3 :
      type === `${primary}/*` ? 2 :
      type === "*/*" ? 1 : -1;
    if (spec < 0) continue;
    if (spec > bestSpec || (spec === bestSpec && q > bestQ)) {
      bestSpec = spec;
      bestQ = q;
    }
  }
  return bestQ;
}

function hasExplicitType(entries: AcceptEntry[], candidate: string): boolean {
  return entries.some((e) => e.type === candidate && e.q > 0);
}

/** Fetches a page's Markdown twin from static assets; null when it does not exist. */
async function serveMarkdown(
  request: Request,
  env: Env,
  url: URL,
  mdPath: string,
): Promise<Response | null> {
  const mdUrl = new URL(mdPath + url.search, url);
  const md = await env.ASSETS.fetch(new Request(mdUrl, request));
  if (!md.ok) return null;
  const res = new Response(md.body, md);
  res.headers.set("Content-Type", MD_CONTENT_TYPE);
  res.headers.set("Link", htmlAlternate(mdPath));
  res.headers.set("Vary", "Accept");
  return res;
}

function redirect(url: URL, pathname: string, status: 301 | 302, vary = false) {
  const target = new URL(pathname + url.search, url);
  const headers = new Headers({ Location: target.toString() });
  if (vary) {
    headers.set("Vary", "Accept-Language, Cookie, Accept");
    headers.set("Cache-Control", "private, no-store");
  }
  return new Response(null, { status, headers });
}

/** AI-oriented content paths worth a server-side trace in Workers Logs. */
const CONTENT_FETCH_PATH = /(?:\.md|\/llms(?:-full)?\.txt|\/robots\.txt)$/i;

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);
    const { pathname } = url;

    if (CONTENT_FETCH_PATH.test(pathname)) {
      // One JSON line per fetch; query Workers Logs for `"event":"content-fetch"`
      // and split AI crawlers from on-demand fetchers by User-Agent.
      console.log(JSON.stringify({
        event: "content-fetch",
        path: pathname,
        ua: request.headers.get("user-agent") ?? "",
        ref: request.headers.get("referer") ?? "",
        accept: request.headers.get("accept") ?? "",
      }));
    }

    if (pathname === "/.well-known/openai-apps-challenge") {
      if (request.method !== "GET" && request.method !== "HEAD") {
        return new Response(null, { status: 405, headers: { Allow: "GET, HEAD" } });
      }
      const challenge = env.OPENAI_APPS_CHALLENGE;
      return new Response(request.method === "HEAD" ? null : challenge || "Not configured", {
        status: challenge ? 200 : 404,
        headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
      });
    }
    if (url.hostname === "mcp.qalta.app") return handleMcp(request);

    // Direct access to a page's Markdown twin.
    if ((request.method === "GET" || request.method === "HEAD") && pathname.toLowerCase().endsWith(".md")) {
      const md = await serveMarkdown(request, env, url, pathname);
      if (md) return md;
      return new Response("Not Found", {
        status: 404,
        headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
      });
    }

    const legacy = LEGACY_REDIRECTS[pathname];
    if (legacy) return redirect(url, legacy, 301);

    const first = pathname.split("/")[1];
    if (first === DEFAULT_LANG) return redirect(url, pathname.slice(3) || "/", 301);

    const localized = isLang(first);
    const page = (request.method === "GET" || request.method === "HEAD") && isPage(pathname);
    // The OAuth consent screen is a fixed English/Russian page; do not send
    // /oauth/consent to the localized routes. It is a functional UI, not
    // content, so it gets no Markdown negotiation either.
    const isConsent =
      pathname === "/oauth/consent" || pathname.startsWith("/oauth/consent/");
    const negotiable = page && !isConsent;

    if (page && !localized && !isConsent) {
      const lang = cookieLang(request) ?? acceptLang(request);
      if (lang !== DEFAULT_LANG) return redirect(url, `/${lang}${pathname}`, 302, true);
    }

    if (negotiable) {
      // `Accept: text/markdown` content negotiation: coding agents ask for
      // Markdown at the same URL instead of the HTML page.
      const accept = parseAccept(request.headers.get("accept") ?? "");
      const mdQ = qualityFor(accept, "text/markdown");
      const htmlQ = qualityFor(accept, "text/html");
      const mdPath = mdPathFor(pathname);
      if (mdQ === 0 && htmlQ === 0) {
        return new Response("Not Acceptable", {
          status: 406,
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            Vary: "Accept",
            Link: `${htmlAlternate(mdPath)}, ${mdAlternate(pathname)}`,
          },
        });
      }
      if (hasExplicitType(accept, "text/markdown") && mdQ >= htmlQ) {
        const md = await serveMarkdown(request, env, url, mdPath);
        if (md) return md;
        // Missing Markdown twin: fall back to HTML rather than failing.
      }
    }

    const response = await env.ASSETS.fetch(request);
    if (!page) return response;
    const varied = new Response(response.body, response);
    if (negotiable) varied.headers.set("Link", mdAlternate(pathname));
    varied.headers.append(
      "Vary",
      localized
        ? "Accept"
        : negotiable
          ? "Accept-Language, Cookie, Accept"
          : "Accept-Language, Cookie",
    );
    return varied;
  },
} satisfies ExportedHandler<Env>;
