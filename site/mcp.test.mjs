import assert from 'node:assert/strict';
import { test } from 'node:test';
import worker from '../src/index.ts';

const endpoint = 'https://mcp.qalta.app/mcp';
const metadata = 'https://mcp.qalta.app/.well-known/oauth-protected-resource/mcp';

test('plain OAuth redirect narrows scopes while preserving PKCE, state and registered callback', async () => {
  const params = new URLSearchParams({
    client_id: 'registered-client', redirect_uri: 'https://chatgpt.com/connector_platform/oauth/callback',
    response_type: 'code', state: 'state-with+special/chars=', code_challenge: 'pkce-challenge',
    code_challenge_method: 'S256', scope: 'openid email profile phone offline_access', resource: endpoint,
  });
  params.append('scope', 'openid');
  const response = await worker.fetch(new Request(`https://mcp.qalta.app/oauth/authorize?${params}`, {
    headers: { cookie: 'lang=ru', 'accept-language': 'ru' },
  }), {});
  assert.equal(response.status, 302);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  assert.equal(response.headers.get('referrer-policy'), 'no-referrer');
  const target = new URL(response.headers.get('location'));
  assert.equal(target.origin, 'https://vxlheojdtnvspecwxkbx.supabase.co');
  assert.equal(target.pathname, '/auth/v1/oauth/authorize');
  assert.deepEqual(target.searchParams.getAll('scope'), ['offline_access']);
  for (const key of ['client_id','redirect_uri','response_type','state','code_challenge','code_challenge_method','resource']) {
    assert.equal(target.searchParams.get(key), params.get(key));
  }
  const post = await worker.fetch(new Request('https://mcp.qalta.app/oauth/authorize', { method: 'POST' }), {});
  assert.equal(post.status, 405);
});

test('MCP discovery uses the canonical resource and bypasses language redirects', async () => {
  for (const path of ['/.well-known/oauth-protected-resource/mcp', '/.well-known/oauth-protected-resource', '/mcp/oauth-protected-resource', '/mcp/.well-known/oauth-protected-resource']) {
    const response = await worker.fetch(new Request(`https://mcp.qalta.app${path}`, { headers: { 'accept-language': 'ru', cookie: 'lang=kk' } }), {});
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), {
      resource: endpoint,
      authorization_servers: ['https://mcp.qalta.app'],
      scopes_supported: ['offline_access'],
      bearer_methods_supported: ['header'],
    });
  }
});

test('OAuth discovery advertises only the plain OAuth profile with Supabase token and registration endpoints', async () => {
  const url = 'https://mcp.qalta.app/.well-known/oauth-authorization-server';
  const response = await worker.fetch(new Request(url), {});
  assert.equal(response.status, 200);
  const data = await response.json();
  assert.equal(data.issuer, 'https://mcp.qalta.app');
  assert.equal(data.authorization_endpoint, 'https://mcp.qalta.app/oauth/authorize');
  assert.equal(data.token_endpoint, 'https://vxlheojdtnvspecwxkbx.supabase.co/auth/v1/oauth/token');
  assert.equal(data.registration_endpoint, 'https://vxlheojdtnvspecwxkbx.supabase.co/auth/v1/oauth/clients/register');
  assert.deepEqual(data.scopes_supported, ['offline_access']);
  assert.deepEqual(data.code_challenge_methods_supported, ['S256']);
  assert.deepEqual(data.token_endpoint_auth_methods_supported, ['none']);
  assert.equal((await worker.fetch(new Request(url, {method:'HEAD'}), {})).status, 200);
  assert.equal((await worker.fetch(new Request(url, {method:'POST'}), {})).status, 405);
  assert.equal((await worker.fetch(new Request('https://mcp.qalta.app/.well-known/openid-configuration'), {})).status, 404);
});

test('proxy preserves POST body, bearer and MCP headers; streams replies; rewrites 401 discovery', async (t) => {
  let reply = new Response('event: message\ndata: {}\n\n', {
    headers: { 'content-type': 'text/event-stream', 'mcp-session-id': 'session-1', 'set-cookie': 'upstream=value' },
  });
  let captured;
  t.mock.method(globalThis, 'fetch', async (request) => { captured = request; return reply; });
  const response = await worker.fetch(new Request(`${endpoint}?test=1`, {
    method: 'POST',
    body: '{"jsonrpc":"2.0","method":"initialize","id":1}',
    headers: { authorization: 'Bearer test-only', 'content-type': 'application/json', 'mcp-protocol-version': '2025-11-25', cookie: 'lang=ru', 'x-forwarded-host': 'attacker.example' },
  }), {});
  assert.equal(captured.url, 'https://vxlheojdtnvspecwxkbx.supabase.co/functions/v1/mcp?test=1');
  assert.equal(captured.method, 'POST');
  assert.equal(captured.redirect, 'manual');
  assert.equal(captured.headers.get('authorization'), 'Bearer test-only');
  assert.equal(captured.headers.get('mcp-protocol-version'), '2025-11-25');
  assert.equal(captured.headers.get('x-forwarded-host'), 'mcp.qalta.app');
  assert.equal(captured.headers.get('cookie'), null);
  assert.equal((await captured.json()).method, 'initialize');
  assert.equal(response.headers.get('mcp-session-id'), 'session-1');
  assert.equal(response.headers.get('content-type'), 'text/event-stream');
  assert.equal(response.headers.get('set-cookie'), null);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  assert.equal(await response.text(), 'event: message\ndata: {}\n\n');

  reply = new Response('{"error":"UNAUTHORIZED"}', { status: 401 });
  const denied = await worker.fetch(new Request(endpoint), {});
  assert.equal(denied.status, 401);
  assert.equal(denied.headers.get('www-authenticate'), `Bearer resource_metadata="${metadata}"`);
  assert.equal((await denied.json()).error, 'UNAUTHORIZED');
});

test('upstream failure produces 502 without leaking errors; unknown paths are not proxied', async (t) => {
  const mocked = t.mock.method(globalThis, 'fetch', async () => { throw new Error('private upstream detail'); });
  const response = await worker.fetch(new Request(endpoint), {});
  assert.equal(response.status, 502);
  assert.deepEqual(await response.json(), { error: 'MCP_UPSTREAM_UNAVAILABLE' });
  const notFound = await worker.fetch(new Request('https://mcp.qalta.app/auth/v1'), {});
  assert.equal(notFound.status, 404);
  assert.equal(mocked.mock.callCount(), 1);
});

test('verification returns the exact configured token on both hosts with no redirects', async () => {
  for (const host of ['qalta.app', 'mcp.qalta.app']) {
    const url = `https://${host}/.well-known/openai-apps-challenge`;
    const request = new Request(url, { headers: { 'accept-language': 'ru' } });
    assert.equal((await worker.fetch(request, {})).status, 404);
    const response = await worker.fetch(request, { OPENAI_APPS_CHALLENGE: 'exact-test-token\n' });
    assert.equal(response.status, 200);
    assert.equal(await response.text(), 'exact-test-token\n');
    assert.equal(response.headers.get('cache-control'), 'no-store');
    assert.equal(response.headers.get('location'), null);
    const head = await worker.fetch(new Request(url, { method: 'HEAD' }), { OPENAI_APPS_CHALLENGE: 'token' });
    assert.equal(head.status, 200);
    assert.equal(await head.text(), '');
  }
});
