# Qalta OpenAI upload preparation

Source: `qalta/plugin.json`, `qalta/mcp.json`, and the original Qalta iOS icon in `qalta/assets/icon.png`.

This is a draft package for creating an OpenAI submission draft, not a completed review submission. The package has been uploaded to OpenAI; no review submission or directory publication has been performed.

## Current status — 2026-10-26

Version **0.1.4** is uploaded to the existing OpenAI draft. Domain verification and plain OAuth are complete: the portal shows **Configured**, **Authorized**, and **Domain verified**. The user explicitly approved the new consent for their selected Qalta account. The Supabase token endpoint returned **HTTP 200** at `2026-10-26T09:25:12Z`, and OpenAI discovered the MCP tools. Supabase signing keys were not migrated, and the production Edge Function configuration was not changed.

The scan reported four annotation findings: `update_account`, `update_category`, `update_budget`, and `update_goal` are marked `destructiveHint: false` despite overwriting existing data. These require a separate MCP-server correction and rescan before review. Reviewer credentials, a real hosted demo recording, policy/monetization verification, and end-to-end review cases are still outstanding. The plugin is **not submitted** and **not published** in the directory.

Publisher name supplied by the user: **Tokkozhin**, recorded in both `author.name` and `extensions.com.openai.interface.developerName`. The user's subsequent screenshot shows **Identity in review**; verification approval is not yet confirmed. Check the approved identity and displayed publisher name in the portal before submission.

The user subsequently authorized publication. On 2026-10-25, Worker `qalta-app` version `776b4276-37c8-40cc-a22e-101bdc5e276d` was deployed to `qalta.app` and `mcp.qalta.app`. Public checks confirmed the support page returned 200, OAuth protected-resource metadata returned 200 with `resource: https://mcp.qalta.app/mcp`, and unauthenticated MCP returned 401 with the public discovery URL. The OpenAI challenge route returned 404 as expected because no challenge token has been provided. The six local MCP/consent tests, i18n checks, and Wrangler deployment dry run passed before publication.

Cloudflare rejected Python's default urllib User-Agent with error 1010 during public checks; curl succeeded, including an OpenAI-Domain-Verification User-Agent request to the challenge path. If the portal encounters an edge-blocking error, inspect the actual Cloudflare event before changing any security settings.

## Portal setup on 2026-10-26

The domain challenge token was read from the user's existing OpenAI draft and deployed in Worker version `ab8665e0-d13a-4790-9c4d-90424102f12e`. The public challenge endpoint returned the exact token, and the portal confirmed **Domain verified**.

The user authorized the OAuth flow and approved the displayed ChatGPT access for their selected Qalta account. DCR and consent succeeded, but the token exchange returned HTTP 500. Supabase Auth logged `HS256 is not supported for ID token signing` at `2026-10-26T08:41:39Z` (request ID `01a1775f-54a3-71c3-8f81-1c8e92b116ad`). MCP connection and the tool scan have not completed. Affected integration: Supabase OAuth/OIDC, not domain verification.

Possible remedies: use explicit plain-OAuth configuration for this plugin, or separately plan an asymmetric signing-key migration. Do not rotate the project's keys without checking production dependencies: the live `openai`, `space_cloud`, and `delete_account` functions currently have gateway `verify_jwt: true`.

The user selected plain OAuth. Version `0.1.2` was rebuilt and uploaded to the existing draft with `oidcEnabled: false`, `baseScopes: ["offline_access"]`, `defaultScopes: ["offline_access"]`, and `oidcScopesSupported: []`. The portal displayed these exact settings. However, attempts at `08:56:18Z` (0.1.1) and `09:01:40Z` (0.1.2) still failed with the same HS256 ID-token signing error. Read-only inspection of the resulting OAuth sessions showed `openid email offline_access profile phone`, despite the explicit package scopes. This remains unresolved; do not describe the integration as connected or the tools as scanned. Supabase signing keys and production functions were not changed.

Version `0.1.3` adds `authorizationUrl: https://mcp.qalta.app/oauth/authorize`. This narrow GET-only redirect was deployed in Worker version `17fd7e94-5850-43ed-96e6-07c25f699637`. It forwards to the fixed Supabase OAuth authorization endpoint, deliberately requesting only `offline_access` while preserving state, registered callback, resource, and PKCE parameters; codes and tokens are not intercepted. Seven local MCP/consent tests and the deployment dry run passed. A public non-authenticating HTTP probe confirmed the expected redirect and scope. The 0.1.3 ZIP was uploaded to the same OpenAI draft and the portal displayed the new authorization URL. The Connect action was then interrupted by the Mac locking; end-to-end verification was completed with version 0.1.4 below.

After unlock, the 0.1.3 attempt still used the original OIDC scopes and failed at `09:18:27Z`. Version `0.1.4` therefore adds a separate plain-OAuth authorization-server discovery profile at `https://mcp.qalta.app/.well-known/oauth-authorization-server` and points the resource metadata and package's `authorizationServerBase` to it. Supabase still handles token issuance and DCR directly; its signing keys are unchanged. This was deployed in Worker version `bd2c0a30-bbff-4aa3-bf40-5e3708ab7044`. Eight MCP/consent tests and the deploy dry run passed; public HTTP checks verified both discovery documents. Version 0.1.4 was uploaded to the existing OpenAI draft. A fresh authorization request contained **only `offline_access`**, with **S256 PKCE** and resource **`https://mcp.qalta.app/mcp`**, as confirmed by read-only inspection of that pending authorization. The user then approved the consent. The token exchange returned HTTP 200, the portal showed **Configured**, **Authorized**, and **Domain verified**, and OpenAI discovered the MCP tools. The four remaining tool-annotation findings are listed above.

## Outstanding items

- Correct the four update-tool annotation findings in the MCP backend and rescan the saved draft. OAuth and domain verification are complete.
- Confirm intended supported countries. Country targeting is intentionally omitted, not set to an empty list.
- Verify the published website, privacy policy, terms, and support content covers the connector and its actual data practices.
- Test the deployed tools' annotations and inspect the consent screen, Premium errors, and app guide for subscription promotions prohibited in the ChatGPT plugin.
- Prepare a dedicated populated demo account and verify reviewer sign-in and feature access. Credentials belong only in the secure portal fields.
- Run all five positive and three negative cases in the intended host. All cases in this draft are **Not run**; fixture descriptions are requirements, not evidence that the fixtures exist.
- Record and verify a real demonstration, host it at a reviewer-accessible URL, and add `extensions.com.openai.review.demo_recording_url`. No URL is fabricated in the source.
- After package preparation, upload a draft, configure reviewer access, verify the domain, complete OAuth and scans, and have the publisher complete attestations before submitting for review. Publication follows approval separately.

## Demo walkthrough to rehearse

Use the dedicated demo space. Show the spending summary, a confirmed coffee expense and its saved entry in Qalta, the Dining out budget, Japan trip savings progress, and Anna's debt balance. Also demonstrate refusal to execute a bank payment or investment trade. Hide credentials and tokens; do not use personal financial data. Record only actual prompts and results, then verify playback before adding the recording URL.

## Archive layout

Package only the contents of `qalta/`, with `plugin.json`, `mcp.json`, and `assets/icon.png` at archive root. Keep this readiness document and any credentials outside the archive. No `.app.json`, `apps` declarations, dependencies, or website source belong in the upload.
