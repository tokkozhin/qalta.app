import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.116.0/+esm";
import TEXT from "./translations.js";

// Public project values are generated into the committed config.js by
// `npm run consent:config`. Only a publishable key or legacy anon key is allowed.
const CONFIG = window.QALTA_AUTH_CONFIG;
const app = document.getElementById("app");
const params = new URLSearchParams(location.search);
const normalizeLanguage = (candidate) => {
  const code = String(candidate || "").trim().toLowerCase().split(/[-_]/)[0];
  return Object.hasOwn(TEXT, code) ? code : null;
};
const cookieLang = document.cookie.split(";").map((part) => part.trim()).find((part) => part.startsWith("lang="))?.slice(5);
const lang = normalizeLanguage(params.get("lang"))
  ?? normalizeLanguage(cookieLang)
  ?? navigator.languages?.map(normalizeLanguage).find(Boolean)
  ?? normalizeLanguage(navigator.language)
  ?? "en";
const t = TEXT[lang] || TEXT.en;
document.documentElement.lang = lang;
document.title = t.pageTitle;

function message(key, values = {}) {
  return Object.entries(values).reduce(
    (value, [name, replacement]) => value.replaceAll("{" + name + "}", replacement),
    t[key],
  );
}

if (!CONFIG?.supabaseUrl || !CONFIG?.supabasePublishableKey) {
  app.replaceChildren(
    brand(),
    Object.assign(document.createElement("p"), {
      className: "error",
      textContent: t.configurationError,
    }),
  );
  throw new Error("Missing QALTA_AUTH_CONFIG");
}

const SITE_URL = (CONFIG.siteUrl || "https://qalta.app").replace(/\/$/, "");
const CONSENT_PATH = "/oauth/consent/";
const authorizationId = params.get("authorization_id");
const supabase = createClient(CONFIG.supabaseUrl, CONFIG.supabasePublishableKey, {
  auth: { flowType: "pkce", detectSessionInUrl: true, persistSession: true },
});

function el(tag, props = {}, children = []) {
  const node = Object.assign(document.createElement(tag), props);
  node.append(...children);
  return node;
}

function brand() {
  return el("div", { className: "brand" }, [
    el("img", { src: "../../assets/vector_logo.svg", alt: "", width: 30, height: 30 }),
    el("span", { textContent: "Qalta" }),
  ]);
}

const SVG_NS = "http://www.w3.org/2000/svg";

function svgElement(tag, attributes) {
  const node = document.createElementNS(SVG_NS, tag);
  for (const [name, value] of Object.entries(attributes)) {
    node.setAttribute(name, value);
  }
  return node;
}

function providerIcon(provider) {
  const apple = provider === "apple";
  const icon = svgElement("svg", {
    class: "provider-icon",
    viewBox: apple ? "0 0 448 512" : "0 0 24 24",
    "aria-hidden": "true",
    focusable: "false",
  });
  const paths = apple
    ? [
        {
          d: "M318.7 268.7c-.2-36.7 16.4-64.3 50-84.8-18.8-26.8-47.3-41.5-85.3-44.4-35.9-2.8-75.1 21-89.5 21-15.3 0-49.9-20-77.3-20C59 140.6 0 184.8 0 274c0 26.3 4.8 53.4 14.4 81.4 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 76.2-17.9 32.1 0 48.6 17.9 76.7 17.9 48.7-.7 90.5-82.5 102.7-119.3-65.3-30.8-58.5-90.7-58.5-92.6zM262.5 104.4c27.6-32.8 25.1-62.6 24.3-73.4-24.4 1.4-52.6 16.6-68.6 35.4-17.7 20.1-28.1 45-25.9 73 26.4 2 50.5-11.5 70.2-35z",
          fill: "currentColor",
        },
      ]
    : [
        {
          d: "M24 12.276c0-.816-.073-1.604-.209-2.365H12v4.48h6.741a5.76 5.76 0 0 1-2.498 3.78v3.086h4.045C22.653 19.063 24 15.946 24 12.276z",
          fill: "#4285F4",
        },
        {
          d: "M12 24c3.24 0 5.957-1.077 7.943-2.743l-4.045-3.086c-1.077.72-2.452 1.145-3.898 1.145-2.994 0-5.532-2.021-6.435-4.744H1.383v3.183A12 12 0 0 0 12 24z",
          fill: "#34A853",
        },
        {
          d: "M5.565 14.572a7.18 7.18 0 0 1 0-5.144V6.245H1.383a12 12 0 0 0 0 11.51l4.182-3.183z",
          fill: "#FBBC05",
        },
        {
          d: "M12 4.684c1.765 0 3.35.606 4.6 1.793l3.45-3.45C17.953 1.152 15.235 0 12 0A12 12 0 0 0 1.383 6.245l4.182 3.183C6.468 6.705 9.006 4.684 12 4.684z",
          fill: "#EA4335",
        },
      ];
  for (const attributes of paths) {
    icon.append(svgElement("path", attributes));
  }
  return icon;
}

function render(...children) {
  app.replaceChildren(...children);
}

function showError(message = t.failed) {
  app.append(el("p", { className: "error", textContent: message }));
}

function returnUrl() {
  const url = new URL(CONSENT_PATH, SITE_URL);
  for (const [key, value] of params) {
    if (key !== "code") url.searchParams.set(key, value);
  }
  return url.toString();
}

function hostOf(value) {
  try {
    return new URL(value).host;
  } catch {
    return null;
  }
}

function renderSignIn() {
  const signIn = (provider) => async () => {
    const options = { redirectTo: returnUrl() };
    if (provider === "google") {
      options.queryParams = { prompt: "select_account" };
    }
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options,
    });
    if (error) showError(t.signInFailed);
  };
  const email = el("input", {
    type: "email",
    name: "email",
    autocomplete: "username",
    inputMode: "email",
    required: true,
  });
  const password = el("input", {
    type: "password",
    name: "password",
    autocomplete: "current-password",
    required: true,
  });
  const submit = el("button", {
    className: "primary",
    type: "submit",
    textContent: t.emailSignIn,
  });
  const message = el("p", { className: "form-message" });
  message.setAttribute("aria-live", "polite");
  const emailForm = el("form", { className: "password-form" }, [
    inputField(t.email, email),
    inputField(t.password, password),
    submit,
    message,
  ]);
  emailForm.onsubmit = async (event) => {
    event.preventDefault();
    submit.disabled = true;
    message.className = "form-message";
    message.textContent = "";
    let data;
    try {
      ({ data } = await supabase.auth.signInWithPassword({
        email: email.value.trim(),
        password: password.value,
      }));
    } catch {
      data = null;
    }
    if (!data?.session) {
      message.className = "form-message error";
      message.textContent = t.emailSignInFailed;
      submit.disabled = false;
      return;
    }
    password.value = "";
    if (authorizationId) await renderConsent(data.session);
    else await renderGrants(data.session);
  };
  render(
    brand(),
    el("h1", { textContent: t.signInTitle }),
    el("p", { textContent: t.signInBody }),
    el("div", { className: "actions" }, [
      el(
        "button",
        { className: "provider-button primary", type: "button", onclick: signIn("apple") },
        [providerIcon("apple"), el("span", { textContent: t.apple })],
      ),
      el(
        "button",
        { className: "provider-button", type: "button", onclick: signIn("google") },
        [providerIcon("google"), el("span", { textContent: t.google })],
      ),
    ]),
    el("p", { className: "divider", textContent: t.or }),
    emailForm,
    el("p", { className: "hint", textContent: t.emailSignInHint }),
  );
}

function inputField(label, input) {
  return el("label", { className: "field" }, [el("span", { textContent: label }), input]);
}

function passwordSetup() {
  const details = el("details", { className: "password-setup" });
  const newPassword = el("input", {
    type: "password",
    name: "new-password",
    autocomplete: "new-password",
    minLength: 8,
    required: true,
  });
  const confirmPassword = el("input", {
    type: "password",
    name: "confirm-password",
    autocomplete: "new-password",
    minLength: 8,
    required: true,
  });
  const submit = el("button", {
    className: "primary",
    type: "submit",
    textContent: t.setPassword,
  });
  const message = el("p", { className: "form-message" });
  message.setAttribute("aria-live", "polite");
  const form = el("form", { className: "password-form" }, [
    inputField(t.newPassword, newPassword),
    inputField(t.confirmPassword, confirmPassword),
    submit,
    message,
  ]);
  form.onsubmit = async (event) => {
    event.preventDefault();
    message.className = "form-message error";
    if (newPassword.value.length < 8) {
      message.textContent = t.passwordTooShort;
      return;
    }
    if (newPassword.value !== confirmPassword.value) {
      message.textContent = t.passwordMismatch;
      return;
    }
    submit.disabled = true;
    message.textContent = "";
    let updated = false;
    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword.value });
      updated = !error;
    } catch {
      updated = false;
    }
    if (!updated) {
      message.textContent = t.passwordUpdateFailed;
      submit.disabled = false;
      return;
    }
    form.reset();
    message.className = "form-message success";
    message.textContent = t.passwordUpdated;
    submit.disabled = false;
  };
  details.append(
    el("summary", { textContent: t.passwordSetupTitle }),
    el("p", { className: "hint", textContent: t.passwordSetupBody }),
    form,
  );
  return details;
}

function accountFooter(email) {
  return el("p", { className: "account" }, [
    `${message("signedInAs", { email: email ?? "" })} · `,
    el("button", {
      className: "link",
      textContent: t.switchAccount,
      onclick: async () => {
        await supabase.auth.signOut();
        renderSignIn();
      },
    }),
  ]);
}

async function decide(approve, buttons) {
  buttons.forEach((button) => (button.disabled = true));
  const { data, error } = approve
    ? await supabase.auth.oauth.approveAuthorization(authorizationId, {
        skipBrowserRedirect: true,
      })
    : await supabase.auth.oauth.denyAuthorization(authorizationId, {
        skipBrowserRedirect: true,
      });
  if (error || !data?.redirect_url) {
    buttons.forEach((button) => (button.disabled = false));
    return showError();
  }
  location.assign(data.redirect_url);
}

async function renderConsent(session) {
  const { data, error } = await supabase.auth.oauth.getAuthorizationDetails(authorizationId);
  if (error) return render(el("p", { className: "error", textContent: t.failed }));
  if (data.redirect_url) return location.assign(data.redirect_url);

  const { data: isPremium } = await supabase.rpc("mcp_is_premium");
  const client = data.client?.name || "AI agent";
  const redirectHost = hostOf(data.redirect_uri);
  const approve = el("button", { className: "primary", textContent: t.approve });
  const deny = el("button", { textContent: t.deny });
  approve.onclick = () => decide(true, [approve, deny]);
  deny.onclick = () => decide(false, [approve, deny]);
  approve.disabled = isPremium !== true;

  render(
    brand(),
    el("h1", { textContent: message("consentTitle", { client }) }),
    el("p", { textContent: t.consentBody }),
    el(
      "ul",
      {},
      t.scopes.map((scope) => el("li", { textContent: scope })),
    ),
    ...(redirectHost ? [el("p", { className: "redirect", textContent: message("redirectHost", { host: redirectHost }) })] : []),
    el("div", {
      className: "warning",
      textContent: isPremium === true ? t.warning : t.proRequired,
    }),
    el("div", { className: "actions" }, [approve, deny]),
    passwordSetup(),
    accountFooter(session.user.email),
  );
}

async function renderGrants(session) {
  const { data, error } = await supabase.auth.oauth.listGrants();
  if (error) return render(el("p", { className: "error", textContent: t.failed }));
  const rows = (data ?? []).map((grant) => {
    const name = grant.client?.name || grant.client?.id;
    const revoke = el("button", { textContent: t.revoke });
    revoke.onclick = async () => {
      revoke.disabled = true;
      const { error: revokeError } = await supabase.auth.oauth.revokeGrant({
        clientId: grant.client.id,
      });
      if (revokeError) {
        revoke.disabled = false;
        return showError();
      }
      await renderGrants(session);
    };
    const date = new Date(grant.granted_at).toLocaleDateString(lang);
    return el("div", { className: "grant" }, [
      el("div", {}, [name, el("small", { textContent: message("grantedAt", { date }) })]),
      revoke,
    ]);
  });
  render(
    brand(),
    el("h1", { textContent: t.grantsTitle }),
    ...(rows.length ? rows : [el("p", { textContent: t.grantsEmpty })]),
    passwordSetup(),
    accountFooter(session.user.email),
  );
}

async function start() {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) return renderSignIn();
  if (authorizationId) return renderConsent(session);
  return renderGrants(session);
}

start().catch((error) => {
  console.error(error);
  render(el("p", { className: "error", textContent: t.failed }));
});
