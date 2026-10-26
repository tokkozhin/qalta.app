# Qalta OpenAI upload preparation

Source: `qalta/plugin.json`, `qalta/mcp.json`, and the original Qalta iOS icon in `qalta/assets/icon.png`.

This is a draft package for creating an OpenAI submission draft, not a completed review submission. The package has been uploaded to OpenAI; no review submission or directory publication has been performed.

## Current status — 2026-10-26

Version **0.1.4** is uploaded to the existing OpenAI draft. Domain verification and plain OAuth are complete: the portal shows **Configured**, **Authorized**, and **Domain verified**. The user explicitly approved the connection for their Qalta account. The Supabase token endpoint returned **HTTP 200** at `2026-10-26T09:25:12Z`, and OpenAI discovered the MCP tools. Supabase signing keys were not migrated.

The four update-tool annotation findings were corrected in MCP source commit `daa715ee`, deployed as Supabase Edge Function `mcp` version 3, and cleared by the latest OpenAI MCP scan: **No findings in the latest MCP scan**. The plugin remains a draft; review status is **Not submitted**, and publication is **Not published**.

OpenAI currently marks **Reviewer credentials** and **Supporting content** as required and missing. The package contains five positive and three negative test cases, but they have not been run. The separate test account requested by the user still needs to be created, with an active Qalta Pro entitlement and a populated cloud space. The consent page supports Apple and Google sign-in; use a dedicated test identity, never the user's personal login or financial data.

The published privacy policy currently says it applies to the mobile app and does not explicitly describe the AI assistant/MCP connector. The local audit found Cloudflare Workers Observability enabled with its default 100% invocation sampling; Supabase documents that its Edge Function invocation view can show request/response bodies. The Supabase plan and exact log retention/access settings remain unverified, so do not claim connector payloads are never logged or publish a numeric retention period yet. The policy/terms content has not been updated. The last known publisher verification state was **Identity in review**; check the current portal status. The exact test plan, fixture, video script, logging audit, and remaining steps are in [REVIEW_RUNBOOK.md](REVIEW_RUNBOOK.md).

The user subsequently authorized publication. On 2026-10-25, Worker `qalta-app` version `776b4276-37c8-40cc-a22e-101bdc5e276d` was deployed to `qalta.app` and `mcp.qalta.app`. Public checks confirmed the support page returned 200, OAuth protected-resource metadata returned 200 with `resource: https://mcp.qalta.app/mcp`, and unauthenticated MCP returned 401 with the public discovery URL. The OpenAI challenge route returned 404 as expected because no challenge token has been provided. The six local MCP/consent tests, i18n checks, and Wrangler deployment dry run passed before publication.

Cloudflare rejected Python's default urllib User-Agent with error 1010 during public checks; curl succeeded, including an OpenAI-Domain-Verification User-Agent request to the challenge path. If the portal encounters an edge-blocking error, inspect the actual Cloudflare event before changing any security settings.

## Portal setup on 2026-10-26

The domain challenge token was read from the user's existing OpenAI draft and deployed in Worker version `ab8665e0-d13a-4790-9c4d-90424102f12e`. The public challenge endpoint returned the exact token, and the portal confirmed **Domain verified**.

The user authorized the OAuth flow and approved the displayed ChatGPT access for their selected Qalta account. DCR and consent succeeded, but the token exchange returned HTTP 500. Supabase Auth logged `HS256 is not supported for ID token signing` at `2026-10-26T08:41:39Z` (request ID `01a1775f-54a3-71c3-8f81-1c8e92b116ad`). MCP connection and the tool scan have not completed. Affected integration: Supabase OAuth/OIDC, not domain verification.

Possible remedies: use explicit plain-OAuth configuration for this plugin, or separately plan an asymmetric signing-key migration. Do not rotate the project's keys without checking production dependencies: the live `openai`, `space_cloud`, and `delete_account` functions currently have gateway `verify_jwt: true`.

The user selected plain OAuth. Version `0.1.2` was rebuilt and uploaded to the existing draft with `oidcEnabled: false`, `baseScopes: ["offline_access"]`, `defaultScopes: ["offline_access"]`, and `oidcScopesSupported: []`. The portal displayed these exact settings. However, attempts at `08:56:18Z` (0.1.1) and `09:01:40Z` (0.1.2) still failed with the same HS256 ID-token signing error. Read-only inspection of the resulting OAuth sessions showed `openid email offline_access profile phone`, despite the explicit package scopes. This remains unresolved; do not describe the integration as connected or the tools as scanned. Supabase signing keys and production functions were not changed.

Version `0.1.3` adds `authorizationUrl: https://mcp.qalta.app/oauth/authorize`. This narrow GET-only redirect was deployed in Worker version `17fd7e94-5850-43ed-96e6-07c25f699637`. It forwards to the fixed Supabase OAuth authorization endpoint, deliberately requesting only `offline_access` while preserving state, registered callback, resource, and PKCE parameters; codes and tokens are not intercepted. Seven local MCP/consent tests and the deployment dry run passed. A public non-authenticating HTTP probe confirmed the expected redirect and scope. The 0.1.3 ZIP was uploaded to the same OpenAI draft and the portal displayed the new authorization URL. The Connect action was then interrupted by the Mac locking; end-to-end verification was completed with version 0.1.4 below.

After unlock, the 0.1.3 attempt still used the original OIDC scopes and failed at `09:18:27Z`. Version `0.1.4` therefore adds a separate plain-OAuth authorization-server discovery profile at `https://mcp.qalta.app/.well-known/oauth-authorization-server` and points the resource metadata and package's `authorizationServerBase` to it. Supabase still handles token issuance and DCR directly; its signing keys are unchanged. This was deployed in Worker version `bd2c0a30-bbff-4aa3-bf40-5e3708ab7044`. Eight MCP/consent tests and the deploy dry run passed; public HTTP checks verified both discovery documents. Version 0.1.4 was uploaded to the existing OpenAI draft. A fresh authorization request contained **only `offline_access`**, with **S256 PKCE** and resource **`https://mcp.qalta.app/mcp`**, as confirmed by read-only inspection of that pending authorization. The user then approved the consent. The token exchange returned HTTP 200, the portal showed **Configured**, **Authorized**, and **Domain verified**, and OpenAI discovered the MCP tools. The initial scan found four update-tool annotation issues; they were corrected in MCP source commit `daa715ee` and cleared by the subsequent scan.

## Outstanding items

- Create a dedicated Google test identity and Qalta account. The user authorized a no-charge RevenueCat `Qalta Pro` grant for that demo account only. Before granting, match its RevenueCat customer ID to the authenticated Supabase user UUID; the configured RevenueCat webhook accepts the promotional `NON_RENEWING_PURCHASE` event. Give it a bounded review-period expiration, then populate the account only with synthetic data. Do not put credentials in the package or chat; enter them in the secure Review details fields.
- Run the five imported positive cases and three negative cases in ChatGPT using that account. Record actual results and correct any mismatches before submission.
- Record the walkthrough from the prepared runbook and enter its reviewer-accessible URL in Supporting content.
- Update and publish the connector disclosure in the privacy policy (and align the terms where needed) only after confirming processors, request/log handling, retention, access revocation, and the user's data controls.
- Check the current publisher identity verification state. OpenAI requires a verified identity for directory publication; the last known status was **Identity in review**.
- Review the imported details and personally confirm every policy attestation at submission. Publication follows approval separately.

## Demo walkthrough to rehearse

Use the dedicated demo space. Show the spending summary, a confirmed coffee expense and its saved entry in Qalta, the Dining out budget, Japan trip savings progress, and Anna's debt balance. Also demonstrate refusal to execute a bank payment or investment trade. Hide credentials and tokens; do not use personal financial data. Record only actual prompts and results, then verify playback before adding the recording URL.

## Archive layout

Package only the contents of `qalta/`, with `plugin.json`, `mcp.json`, and `assets/icon.png` at archive root. Keep this readiness document and any credentials outside the archive. No `.app.json`, `apps` declarations, dependencies, or website source belong in the upload.
