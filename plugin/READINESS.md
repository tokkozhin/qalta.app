# Qalta OpenAI upload preparation

Source: `qalta/plugin.json`, `qalta/mcp.json`, and the original Qalta iOS icon in `qalta/assets/icon.png`.

This is a draft package for creating an OpenAI submission draft, not a completed review submission. No OpenAI upload, review submission, or directory publication has been performed.

Publisher name supplied by the user: **Tokkozhin**, recorded in both `author.name` and `extensions.com.openai.interface.developerName`. The user's subsequent screenshot shows **Identity in review**; verification approval is not yet confirmed. Check the approved identity and displayed publisher name in the portal before submission.

The user subsequently authorized publication. On 2026-10-25, Worker `qalta-app` version `776b4276-37c8-40cc-a22e-101bdc5e276d` was deployed to `qalta.app` and `mcp.qalta.app`. Public checks confirmed the support page returned 200, OAuth protected-resource metadata returned 200 with `resource: https://mcp.qalta.app/mcp`, and unauthenticated MCP returned 401 with the public discovery URL. The OpenAI challenge route returned 404 as expected because no challenge token has been provided. The six local MCP/consent tests, i18n checks, and Wrangler deployment dry run passed before publication.

Cloudflare rejected Python's default urllib User-Agent with error 1010 during public checks; curl succeeded, including an OpenAI-Domain-Verification User-Agent request to the challenge path. If the portal encounters an edge-blocking error, inspect the actual Cloudflare event before changing any security settings.

## Outstanding items

- Add the actual OpenAI challenge token once the portal issues it, deploy that value, and complete Verify Domain.
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
