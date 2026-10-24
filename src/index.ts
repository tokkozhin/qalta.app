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

function redirect(url: URL, pathname: string, status: 301 | 302, vary = false) {
  const target = new URL(pathname + url.search, url);
  const headers = new Headers({ Location: target.toString() });
  if (vary) {
    headers.set("Vary", "Accept-Language, Cookie");
    headers.set("Cache-Control", "private, no-store");
  }
  return new Response(null, { status, headers });
}

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);
    const { pathname } = url;

    const legacy = LEGACY_REDIRECTS[pathname];
    if (legacy) return redirect(url, legacy, 301);

    const first = pathname.split("/")[1];
    if (first === DEFAULT_LANG) return redirect(url, pathname.slice(3) || "/", 301);

    const localized = isLang(first);
    const page = (request.method === "GET" || request.method === "HEAD") && isPage(pathname);
    // The OAuth consent screen is a fixed English/Russian page; do not send
    // /oauth/consent to the localized routes.
    const isConsent =
      pathname === "/oauth/consent" || pathname.startsWith("/oauth/consent/");

    if (page && !localized && !isConsent) {
      const lang = cookieLang(request) ?? acceptLang(request);
      if (lang !== DEFAULT_LANG) return redirect(url, `/${lang}${pathname}`, 302, true);
    }

    const response = await env.ASSETS.fetch(request);
    if (!page || localized) return response;
    const varied = new Response(response.body, response);
    varied.headers.append("Vary", "Accept-Language, Cookie");
    return varied;
  },
} satisfies ExportedHandler<Env>;
