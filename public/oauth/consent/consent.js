import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.116.0/+esm";

// Public project values are generated into the committed config.js by
// `npm run consent:config`. Only a publishable key or legacy anon key is allowed.
const CONFIG = window.QALTA_AUTH_CONFIG;
const app = document.getElementById("app");

if (!CONFIG?.supabaseUrl || !CONFIG?.supabasePublishableKey) {
  app.replaceChildren(
    Object.assign(document.createElement("p"), {
      className: "error",
      textContent:
        "This page is not configured. Run `pnpm consent:config` and deploy config.js.",
    }),
  );
  throw new Error("Missing QALTA_AUTH_CONFIG");
}

const SITE_URL = (CONFIG.siteUrl || "https://qalta.app").replace(/\/$/, "");
const CONSENT_PATH = "/oauth/consent/";
const TEXT = {
  en: {
    signInTitle: "Sign in to Qalta",
    signInBody: "Use the same account you use in the Qalta app.",
    apple: "Continue with Apple",
    google: "Continue with Google",
    consentTitle: (client) => `Allow ${client} to access Qalta?`,
    consentBody: "The agent will act on your behalf in your Qalta cloud spaces:",
    scopes: [
      "Read spaces, accounts, balances, categories, budgets, goals, transactions and recurring payments",
      "Create and edit categories, budgets, goals and regular accounts",
      "Add income, expenses and transfers, including batches of transactions",
      "Create debt accounts and record lending, borrowing and repayments",
      "Delete transactions, categories, budgets, goals and accounts only after a separate confirmation step",
    ],
    warning:
      "Changes are real and sync to all your devices and to members of shared spaces. Whether the agent asks before each change depends on the agent and its settings. You are responsible for what you let it do. Local-only spaces stay on your phone.",
    redirectHost: (host) =>
      `After approval the agent receives access at ${host}. Check that you trust this app.`,
    approve: "Allow access",
    deny: "Deny",
    signedInAs: (email) => `Signed in as ${email}`,
    switchAccount: "Use another account",
    proRequired:
      "AI agents need Qalta Pro with cloud spaces. Subscribe in the app, then connect again.",
    grantsTitle: "Connected AI agents",
    grantsEmpty: "No agents are connected.",
    revoke: "Revoke",
    grantedAt: (date) => `Connected ${date}`,
    missing: "This link is incomplete. Start connecting from your AI agent again.",
    failed: "Something went wrong. Try again.",
    signInFailed: "Could not start sign-in. Try again.",
  },
  ru: {
    signInTitle: "Вход в Qalta",
    signInBody: "Используйте тот же аккаунт, что и в приложении Qalta.",
    apple: "Продолжить с Apple",
    google: "Продолжить с Google",
    consentTitle: (client) => `Разрешить ${client} доступ к Qalta?`,
    consentBody: "Агент будет действовать от вашего имени в облачных пространствах Qalta:",
    scopes: [
      "Читать пространства, счета, балансы, категории, бюджеты, цели, транзакции и регулярные платежи",
      "Создавать и редактировать категории, бюджеты, цели и обычные счета",
      "Добавлять доходы, расходы и переводы, в том числе пакетами",
      "Создавать долговые счета и записывать займы, долги и возвраты",
      "Удалять транзакции, категории, бюджеты, цели и счета только после отдельного подтверждения",
    ],
    warning:
      "Изменения настоящие: они синхронизируются на все ваши устройства и участникам общих пространств. Спрашивает ли агент подтверждение перед каждым изменением, зависит от агента и его настроек. Вы сами отвечаете за то, что ему разрешаете. Локальные пространства остаются только на телефоне.",
    redirectHost: (host) =>
      `После подтверждения агент получит доступ на ${host}. Убедитесь, что доверяете этому приложению.`,
    approve: "Разрешить доступ",
    deny: "Отклонить",
    signedInAs: (email) => `Вы вошли как ${email}`,
    switchAccount: "Другой аккаунт",
    proRequired:
      "Для ИИ-агентов нужна Qalta Pro с облачными пространствами. Оформите подписку в приложении и подключитесь снова.",
    grantsTitle: "Подключённые ИИ-агенты",
    grantsEmpty: "Нет подключённых агентов.",
    revoke: "Отключить",
    grantedAt: (date) => `Подключён ${date}`,
    missing: "Ссылка неполная. Начните подключение заново из вашего ИИ-агента.",
    failed: "Что-то пошло не так. Попробуйте ещё раз.",
    signInFailed: "Не удалось начать вход. Попробуйте ещё раз.",
  },
};

const lang = navigator.language?.toLowerCase().startsWith("ru") ? "ru" : "en";
const t = TEXT[lang];
document.documentElement.lang = lang;

const params = new URLSearchParams(location.search);
const authorizationId = params.get("authorization_id");
const supabase = createClient(CONFIG.supabaseUrl, CONFIG.supabasePublishableKey, {
  auth: { flowType: "pkce", detectSessionInUrl: true, persistSession: true },
});

function el(tag, props = {}, children = []) {
  const node = Object.assign(document.createElement(tag), props);
  node.append(...children);
  return node;
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
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: returnUrl() },
    });
    if (error) showError(t.signInFailed);
  };
  render(
    el("h1", { textContent: t.signInTitle }),
    el("p", { textContent: t.signInBody }),
    el("div", { className: "actions" }, [
      el("button", { className: "primary", textContent: t.apple, onclick: signIn("apple") }),
      el("button", { textContent: t.google, onclick: signIn("google") }),
    ]),
  );
}

function accountFooter(email) {
  return el("p", { className: "account" }, [
    `${t.signedInAs(email ?? "")} · `,
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
    el("h1", { textContent: t.consentTitle(client) }),
    el("p", { textContent: t.consentBody }),
    el(
      "ul",
      {},
      t.scopes.map((scope) => el("li", { textContent: scope })),
    ),
    ...(redirectHost ? [el("p", { className: "redirect", textContent: t.redirectHost(redirectHost) })] : []),
    el("div", {
      className: "warning",
      textContent: isPremium === true ? t.warning : t.proRequired,
    }),
    el("div", { className: "actions" }, [approve, deny]),
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
      el("div", {}, [name, el("small", { textContent: t.grantedAt(date) })]),
      revoke,
    ]);
  });
  render(
    el("h1", { textContent: t.grantsTitle }),
    ...(rows.length ? rows : [el("p", { textContent: t.grantsEmpty })]),
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
