const PUBLIC_ORIGIN = "https://mcp.qalta.app";
const UPSTREAM = "https://vxlheojdtnvspecwxkbx.supabase.co/functions/v1/mcp";
const AUTH_SERVER = "https://vxlheojdtnvspecwxkbx.supabase.co/auth/v1";
const METADATA_PATH = "/.well-known/oauth-protected-resource/mcp";
const DISCOVERY_PATHS = new Set([
  METADATA_PATH,
  "/.well-known/oauth-protected-resource",
  "/mcp/.well-known/oauth-protected-resource",
  "/mcp/oauth-protected-resource",
]);

/** Only the MCP host reaches this handler; website paths never become an open proxy. */
export async function handleMcp(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const pathname = url.pathname.replace(/\/$/, "") || "/";
  if (DISCOVERY_PATHS.has(pathname)) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response(null, { status: 405, headers: { Allow: "GET, HEAD" } });
    }
    return new Response(request.method === "HEAD" ? null : JSON.stringify({
      resource: `${PUBLIC_ORIGIN}/mcp`,
      authorization_servers: [AUTH_SERVER],
      bearer_methods_supported: ["header"],
    }), { headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-store",
    } });
  }
  if (pathname === "/" && (request.method === "GET" || request.method === "HEAD")) {
    return Response.redirect(`${PUBLIC_ORIGIN}/mcp`, 302);
  }
  if (pathname !== "/mcp") return new Response("Not found", { status: 404 });

  const headers = new Headers(request.headers);
  headers.delete("host");
  headers.delete("cookie");
  headers.delete("forwarded");
  headers.set("X-Forwarded-Host", "mcp.qalta.app");
  headers.set("X-Forwarded-Proto", "https");
  const upstreamRequest = new Request(`${UPSTREAM}${url.search}`, request);
  // Never follow an upstream redirect with a user's bearer token.
  const proxyRequest = new Request(upstreamRequest, { headers, redirect: "manual" });
  let upstream: Response;
  try {
    upstream = await fetch(proxyRequest);
  } catch {
    return Response.json({ error: "MCP_UPSTREAM_UNAVAILABLE" }, {
      status: 502, headers: { "Cache-Control": "no-store" },
    });
  }
  // Keep MCP/SSE bodies streaming, including session and protocol headers.
  const response = new Response(upstream.body, upstream);
  response.headers.set("Cache-Control", "no-store");
  response.headers.delete("set-cookie");
  if (response.status === 401) {
    response.headers.set("WWW-Authenticate", `Bearer resource_metadata="${PUBLIC_ORIGIN}${METADATA_PATH}"`);
  }
  return response;
}
