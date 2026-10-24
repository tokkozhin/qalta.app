// Copy this file to config.js, or generate config.js with `pnpm consent:config`.
// The publishable key is public by design. Never put the service-role/secret key here.
window.QALTA_AUTH_CONFIG = {
  supabaseUrl: "https://YOUR-PROJECT-REF.supabase.co",
  supabasePublishableKey: "YOUR-PUBLISHABLE-KEY",
  // The public origin where this page is served. Must be in Supabase Auth's
  // redirect allowlist, e.g. https://qalta.app/oauth/consent/
  siteUrl: "https://qalta.app",
};
