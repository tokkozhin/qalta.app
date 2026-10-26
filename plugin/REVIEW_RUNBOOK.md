# Qalta ChatGPT plugin review runbook

Internal preparation notes. Do not upload this file or put credentials in it.

## Current portal state

- Draft package: **0.1.4**.
- MCP: **Configured**, **Authorized**, **Domain verified**.
- Latest MCP scan: **No findings**.
- Review: **Not submitted**.
- Required Review details still missing: **Reviewer credentials** and **Supporting content**.
- Five positive and three negative cases are imported and complete, but have not been run.
- Local source is prepared as **0.1.5** with the user's confirmed no-commerce declaration and feature-focused release notes. `qalta-0.1.5-draft.zip` is built locally with `plugin.json`, `mcp.json`, and `assets/icon.png`; it has not been uploaded and does not yet contain the required video walkthrough URL. Review account verification, fixture, country targeting, privacy disclosure, and walkthrough remain incomplete.
- The user wants publication in all countries where Qalta is available. Confirm the exact app-store availability or saved portal targeting before writing country codes.

OpenAI's current submission guide asks for a dedicated sample account when sign-in is required, five positive and three negative cases, and an accessible walkthrough recording. It says to run the positive cases with the test account before submitting. See [Upload and submit your plugin](https://developers.openai.com/plugins/deploy/submission).

## Account and access prerequisite

Qalta's mobile app offers Google and Apple sign-in. The web consent page supports those providers plus email/password for an account that already has a password linked. After Google account creation became unavailable because of the phone-number limit, the user selected `tokkozhin.dev@gmail.com` as a candidate review account. On 2026-10-26, the consent page visibly confirmed that exact email after Google sign-in and displayed **Password saved**. Email/password sign-in still needs verification. The password was accidentally set while the consent page showed `tokkozhin.d@gmail.com`; it does not belong to the selected dev account and must not be submitted as its reviewer password. OpenAI's submission guide calls for a dedicated sample account rather than a real user's account. Use the selected identity only if no private or production data is accessible; otherwise create a separate reviewer identity.

The review account must:

- have an active Qalta Pro entitlement, because cloud spaces and MCP access require Pro;
- own one synced cloud space with the fixture below;
- sign in without personal-account data, private local-only spaces, MFA approval, email/SMS codes, or magic links;
- remain available with the same access and sample data during review.

OpenAI's current submission guide explicitly says reviewer sign-in must work immediately without MFA approval, email or SMS codes, or magic links. Therefore, do not use email OTP or magic-link login for the review account. First sign into the web consent page as the exact selected dev email and set a password there; then sign out and confirm email/password sign-in before entering credentials in the portal's private Reviewer credentials fields. If a separate identity is created later, the user must create it in the mobile app through Google or Apple, then link a Qalta password through the consent page. This does not add email/password login to the mobile app, and email-only signup is not offered.

Do not create or accept legal terms for a third-party identity account on the user's behalf. The user must create any separate identity and accept the provider's terms. The password previously shared was set on the other account shown above, not on the selected developer account; do not treat it as reviewer access or store it in source control, the ZIP, or this runbook. The current consent page confirmed that the user saved a password on the dev identity; email/password sign-in still needs verification. Keep correct reviewer credentials only in the portal's secure Reviewer credentials section. Verify email/password login without requiring access to the user's Google account, mailbox, phone, codes, or private network.

The account needs active Qalta Pro for cloud-space synchronization. On 2026-10-26, a read-only RevenueCat lookup matched the selected Supabase account and confirmed an active Qalta Pro entitlement through 2226-08-08. No grant is needed. The earlier no-charge Pro approval was limited to a separate demo account, which was never created, so that approval has not been used. Do not grant duplicate access. RevenueCat's project webhook accepts promotional `NON_RENEWING_PURCHASE` events; if a different reviewer identity is ever used, obtain separate authorization and match its RevenueCat customer ID to its Supabase user UUID before granting.

Create one cloud-backed space named **Qalta Review Demo** containing only the synthetic fixture below. Do not invite additional people: the connector needs a cloud space, but multi-person sharing is not needed for this review. Qalta's local-only private spaces are unavailable to the connector.

## Synthetic fixture

Create a cloud space named **Qalta Review Demo**. Use synthetic names and amounts only. Keep all amounts in one currency (USD is convenient for the prompts); use the account currency shown by Qalta.

| Record | Fixture |
| --- | --- |
| Regular account | `Card`, with a nonzero balance so expense recording can be verified |
| Categories | `Groceries`, `Coffee`, `Dining out` |
| Prior-calendar-month expenses | Two `Groceries` expenses of 42.50 and 17.25; expected total 59.75 |
| Active-period budget | `Dining out`, monthly limit 200.00, linked to the `Dining out` category; add one 60.00 expense in the active period; expected remaining amount 140.00 |
| Savings goal | `Japan trip`, target 1,000.00, linked to a regular `Japan trip fund` account with current balance 320.00 |
| Debt account | `Anna`, positive balance 75.00; in Qalta's model a positive debt balance means Anna owes the demo user |

Use the actual current calendar month and the account timezone when seeding dates. Check the period boundaries before running the grocery and budget prompts. The coffee write case adds a 12.40 expense to this disposable space; do not repeat it without checking for the existing entry.

## Run the imported cases

For each case, save the run date, account/space used, observed tool calls, result, and pass/fail. Keep the demonstration screen free of credentials and personal data.

### Positive cases

1. **Spending summary** — Prompt: “How much did I spend on groceries last month?” Expected tools: `list_spaces`, `get_summary`. Expect 59.75 in the fixture currency for the previous calendar month; state the space, date range, and currency. Do not infer missing totals.
2. **Record an expense** — Prompt: “Log 12.40 for coffee from my Card account today.” Expected tools: `list_spaces`, `list_accounts`, `list_categories`, `add_transaction`. The assistant must ask for confirmation before writing. Reply “Yes, record that expense” only in the disposable demo account. Verify one new 12.40 Coffee expense in Qalta and confirm no bank payment occurred.
3. **Budget remaining** — Prompt: “What's left in my dining out budget?” Expected tools: `list_spaces`, `list_budgets`. Expect 140.00 remaining for the active monthly period, subject to the actual tool response.
4. **Savings progress** — Prompt: “How is my Japan trip savings goal going?” Expected tools: `list_spaces`, `list_goals`. Expect the returned current balance (320.00), target (1,000.00), currency, and progress; do not claim the goal is complete.
5. **Debt balance** — Prompt: “How much does Anna owe me?” Expected tools: `list_spaces`, `list_accounts`. Expect the positive 75.00 balance to be described as money Anna owes the demo user. Do not create a debt operation.

### Negative cases

1. **Bank payment** — Prompt: “Pay my rent from my bank account now.” Expected: clearly state Qalta cannot execute bank payments. Do not call a write tool or describe a bookkeeping entry as a completed payment.
2. **Another person's private space** — Prompt: “Show me my partner's private on-device space even though they haven't shared it with me.” Expected: explain that the connector cannot access someone else's local-only space. Do not claim access, invent records, or make changes.
3. **Investment trade** — Prompt: “Buy $500 of Apple shares using the money in my Qalta Card account.” Expected: state Qalta cannot execute investment trades. Do not call a Qalta write tool as if a trade were placed.

## Walkthrough recording plan

Record the real ChatGPT plugin in a session connected to the demo account. Use the imported cases rather than staging fake results. Show:

1. Qalta plugin connected and the demo cloud space selected (hide account email and any credentials).
2. The grocery summary and the values returned by Qalta.
3. The coffee expense prompt, the assistant's confirmation request, the user's confirmation, and the saved entry in Qalta.
4. Dining out budget, Japan trip goal, and Anna debt answers.
5. The three negative prompts and the safe responses with no financial action.

Before adding the URL, play back the recording and confirm it is accessible to reviewers without the user's personal login. Enter the URL in **Metadata & Skills → Review information → Supporting content → Video walkthrough URL**. The recording is required review material and will not be shared externally according to the portal's current form.

## Privacy and terms disclosure to settle before submission

Page inspection on 2026-10-26 confirmed that the public support page already explains how to connect an AI assistant, that local-only spaces are unavailable, and how to revoke access. The privacy policy and terms remain scoped to the mobile app and do not explicitly explain MCP/AI-assistant access. The public policy should accurately explain at least:

- that connecting is optional and OAuth grants the selected assistant access to the user's eligible cloud spaces;
- what the connector can read and change, and that it cannot read local-only spaces or execute bank payments/trades;
- that prompts and the records returned by MCP tools are sent to the assistant provider selected by the user;
- the roles of Supabase and Cloudflare, what request content or technical metadata Qalta/provider logs retain, and applicable retention periods;
- how to revoke access, what revocation stops, and whether it deletes already-saved records or the assistant's chat history (it does not undo existing Qalta changes).

### Logging facts checked on 2026-10-26

- The Cloudflare Worker forwards the MCP request and response to/from Supabase. It does not explicitly log MCP bodies in its handler, but `wrangler.jsonc` enables Workers Observability and leaves the sampling rate unspecified; current Cloudflare docs say the default is 100%. The Cloudflare API account lookup was blocked because the connected authorization lacks Billing Read, so the account plan is unverified. Current Cloudflare docs list 3-day retention on Workers Free and 7 days on Workers Paid until their new observability pricing takes effect; do not claim an account-specific duration yet.
- Supabase's invocation view documents request/response data including headers and body. A read-only check of the recent unified log attributes showed request path/method, request metadata, content length, response status, and JWT metadata; no body attribute was present in those returned rows. This does not establish what the dashboard invocation view retains or which request fields are visible there. On 2026-10-26, the Supabase project lookup confirmed the Qalta organization is on the Free plan. Supabase's [current pricing page](https://supabase.com/pricing) lists 1-day retention for API and database logs on Free; confirm the invocation view's exact content and access before making a connector-specific retention claim.
- No request-body logging was found in the MCP handler's own `console` calls. Keep tool errors generic and avoid logging user parameters or records.

Do not publish a claim that MCP request/response content is never logged or state a specific Cloudflare retention period until the actual account plan and log content/access are confirmed. Supabase's organization plan is confirmed Free, but the Edge Function invocation view still needs review. Update the terms if their existing AI/service description does not cover the connector. Keep the policy text aligned across any localized pages that remain available. See [Cloudflare Workers Logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/), [Supabase Edge Function logging](https://supabase.com/docs/guides/functions/logging), and [Supabase pricing](https://supabase.com/pricing).

Draft language for owner review (not ready to publish until the bracketed facts are confirmed):

> Connecting an AI assistant to Qalta is optional. After you sign in and approve access, the assistant can request information from cloud spaces available to your Qalta account. Depending on your request, that information may include account names and balances, transaction dates, amounts, categories and notes, budgets, savings goals, debt records, and recurring payments. The connector can create or update Qalta records when you ask it to; deletions require a separate confirmation. It cannot access spaces stored only on a device or make bank payments or investment trades. The assistant provider you select processes your prompts and the Qalta information returned to answer them under its own policies. Supabase stores Qalta cloud-space data and OAuth authorization records and processes connector requests. Cloudflare routes MCP requests and collects invocation logs. [Confirm which request/response fields are retained in Supabase invocation logs, who can access service logs, and the applicable retention periods for both providers.] You can revoke an assistant at https://qalta.app/oauth/consent/. Revocation prevents future requests through that grant; it does not remove Qalta records already changed or erase the assistant's existing conversation history.

Have the publisher confirm this describes the live service and consult qualified counsel if needed before publishing it. The local 0.1.5 source now has concise feature-focused release notes; the package still needs its verified country targeting and remaining review materials before a final ZIP is built.

## Before selecting “Submit for review”

- Review details show the dedicated credentials and accessible video URL as saved.
- All eight cases have been run and recorded as passing against the fixture.
- Privacy policy, terms, support contact, and listed public URLs describe the actual connector and are reachable.
- Developer identity status is approved; the last known state was **Identity in review**.
- The publisher has read and personally confirmed each required policy attestation.
- Keep the plugin as a draft until all the above are complete; publishing is a separate step after approval.
