# Qalta AI connector consent page

Served at **https://qalta.app/oauth/consent/**. It is the OAuth consent screen
for the MCP connector: sign in with Apple, Google, or an email/password already
linked to the Qalta account, review the agent's access, and approve or deny. A
signed-in user can add or change the password for that same account. The same
URL without `?authorization_id=` lists connected agents and lets the user revoke
them.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Static markup with a meta CSP |
| `consent.css` | Light/dark styles |
| `consent.js` | OAuth consent, sign-in and grants UI |
| `config.example.js` | Template for the public Supabase config |
| `config.js` | Generated public values; committed with the page |

The Worker in `src/index.ts` serves `public/` and skips the language redirect for
`/oauth/consent`, so the page is not rewritten to `/<lang>/oauth/consent`.

## Build and deploy

`config.js` contains the public Supabase URL and publishable key. It is
committed because both values are public and already shipped in the app. To
regenerate it after a project or key change:

```bash
cp .env.example .env       # once, fill in the public values
npm run consent:config
npm run build
npm run deploy
```

`site/build-consent.mjs` reads `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY`
from the environment (or `.env`/`.env.local`) and accepts only a publishable key or a legacy JWT with `role=anon`. Secret keys,
including legacy `service_role` JWTs, are rejected.
The normal site build does not require those variables; it uses the committed
`config.js`.

`public/_headers` sets `X-Frame-Options`, `nosniff`, `Referrer-Policy` and
`no-store` for `config.js`. If the site already has a root `_headers`, keep
these rules merged there.

The page is static; no Worker route is required. Cloudflare's asset handling
serves `public/oauth/consent/index.html` for `/oauth/consent/` and redirects
`/oauth/consent` to the trailing-slash URL.

## Supabase Auth settings

1. **Authentication → URL Configuration**
   - Site URL: `https://qalta.app`
   - Redirect URLs: `https://qalta.app/oauth/consent`,
     `https://qalta.app/oauth/consent/`, and
     `https://<project-ref>.supabase.co/auth/v1/callback`.
2. **Authentication → OAuth Server**
   - Enable the OAuth 2.1 server.
   - Authorization path: `/oauth/consent`.
   - Enable dynamic client registration.
   - Add an asymmetric signing key (ES256/RS256). Keep the legacy HS256 secret
     during the rotation window; the MCP function supports both.
3. **Providers**
   - Google: Web OAuth client with redirect
     `https://<project-ref>.supabase.co/auth/v1/callback`.
   - Apple: Services ID (not the iOS bundle ID), “Sign in with Apple” enabled,
     domain `qalta.app`, return URL
     `https://<project-ref>.supabase.co/auth/v1/callback`, plus Team ID, Key ID
     and the `.p8` key in Supabase.
   - Host Apple's domain association file at
     `https://qalta.app/.well-known/apple-developer-domain-association.txt`.

## Test

- signed out → Apple and Google buttons plus email/password form;
- sign in with Google, set a password on the same account, sign out, then sign in with that email/password;
- wrong email/password → generic error; no sign-up or email-code flow is offered here;
- free account → “Qalta Pro required”, approve disabled;
- Pro account → scopes, redirect host, allow/deny;
- approve → the MCP client receives the code;
- `/oauth/consent/` without `authorization_id` → grants list and revoke.

## Logout impact

This page only creates a browser session on qalta.app. It does not touch the
mobile app's session. Revoking a grant logs out only that MCP client. Do not
rotate/remove the project's JWT signing key as part of deploying this page.
