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

const jsonHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": "no-store",
};

/** Only the MCP host reaches this handler; website paths never become an open proxy. */
export async function handleMcp(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const pathname = url.pathname.replace(/\/$/, "") || "/";
  // A separate OAuth discovery profile prevents clients from inheriting the
  // Supabase project's OIDC defaults. Supabase still handles DCR and tokens.
  if (pathname === "/.well-known/oauth-authorization-server") {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response(null, { status: 405, headers: { Allow: "GET, HEAD" } });
    }
    return new Response(request.method === "HEAD" ? null : JSON.stringify({
      issuer: PUBLIC_ORIGIN,
      authorization_endpoint: `${PUBLIC_ORIGIN}/oauth/authorize`,
      token_endpoint: `${AUTH_SERVER}/oauth/token`,
      registration_endpoint: `${AUTH_SERVER}/oauth/clients/register`,
      response_types_supported: ["code"],
      grant_types_supported: ["authorization_code", "refresh_token"],
      token_endpoint_auth_methods_supported: ["none"],
      code_challenge_methods_supported: ["S256"],
      scopes_supported: ["offline_access"],
    }), { headers: jsonHeaders });
  }
  // This endpoint deliberately implements the connector's plain-OAuth profile.
  // OpenAI's saved client can retain OIDC scopes after a package update. Narrow
  // the authorization request before Supabase issues a code; never alter codes,
  // tokens, redirect_uri, state, or the PKCE challenge.
  if (pathname === "/oauth/authorize") {
    if (request.method !== "GET") {
      return new Response(null, { status: 405, headers: { Allow: "GET" } });
    }
    const target = new URL(`${AUTH_SERVER}/oauth/authorize`);
    target.search = url.search;
    target.searchParams.set("scope", "offline_access");
    return new Response(null, { status: 302, headers: {
      Location: target.toString(),
      "Cache-Control": "no-store",
      "Referrer-Policy": "no-referrer",
    } });
  }
  if (DISCOVERY_PATHS.has(pathname)) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response(null, { status: 405, headers: { Allow: "GET, HEAD" } });
    }
    return new Response(request.method === "HEAD" ? null : JSON.stringify({
      resource: `${PUBLIC_ORIGIN}/mcp`,
      authorization_servers: [PUBLIC_ORIGIN],
      scopes_supported: ["offline_access"],
      bearer_methods_supported: ["header"],
    }), { headers: jsonHeaders });
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
