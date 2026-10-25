import { SUPPORT_EMAIL } from "../config.mjs";
import { footer, head, header, localPath } from "./layout.mjs";

// Support content is available in English and Russian. Other site languages use English.
export function renderSupport(ctx) {
  const ru = ctx.lang === "ru";
  const title = ru ? "Поддержка Qalta" : "Qalta Support";
  const description = ru
    ? "Помощь с Qalta, подключением ИИ-ассистентов, аккаунтом и данными."
    : "Get help with Qalta, AI assistant connections, your account, and your data.";
  const page = { path: "/support", title, description, ogImage: "home.png", ogImageAlt: "Qalta", stylesheet: "/site.css" };
  const body = ru ? `
    <p>Поможем с приложением, подключением ИИ-ассистентов и вопросами о ваших данных. Поддержка доступна на русском и английском.</p>
    <h2>Связаться с нами</h2>
    <p>Напишите на <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a>. Укажите версию Qalta и iOS, название ассистента, время ошибки и шаги для её повторения. Скриншот с закрытыми личными данными поможет разобраться.</p>
    <p>Не отправляйте пароли, коды входа, токены доступа или полные финансовые выписки.</p>
    <h2>Подключить ИИ-ассистента</h2>
    <ol><li>Войдите в Qalta и убедитесь, что нужное облачное пространство синхронизируется. Локальные приватные пространства недоступны коннектору.</li><li>Если ваш ассистент поддерживает собственные MCP-коннекторы, укажите адрес <code>https://mcp.qalta.app/mcp</code>.</li><li>Пройдите вход через Qalta и проверьте разрешения перед подтверждением доступа.</li><li>Начните с запроса на чтение, например: «Сколько я потратил на продукты в этом месяце?»</li></ol>
    <h2>Если что-то не работает</h2>
    <p>При ошибке входа отключите коннектор и подключите его снова. Если пространство не видно, проверьте аккаунт и синхронизацию в Qalta. Если операция не появилась, сначала проверьте записи в приложении, прежде чем повторять запрос: это поможет избежать дубликатов.</p>
    <h2>Отключить доступ</h2>
    <p>Откройте <a href="/oauth/consent/">подключённые ИИ-агенты</a>, войдите в аккаунт Qalta и нажмите «Отключить» у нужного агента. Также удалите подключение в настройках ассистента. Отключение не отменяет уже сохранённые операции.</p>
    <h2>Аккаунт и данные</h2>
    <p>По вопросам удаления аккаунта, конфиденциальности или неправильных изменений данных напишите нам. Удаление аккаунта также доступно в приложении. Подробнее — в <a href="${localPath(ctx.lang, "/privacy-policy")}">политике конфиденциальности</a> и <a href="${localPath(ctx.lang, "/terms-and-conditions")}">условиях использования</a>.</p>
    <p>Инструкции по автоматизации расходов доступны в <a href="${localPath(ctx.lang, "/tutorials/")}">руководствах Qalta</a>.</p>
  ` : `
    <p>Get help with the app, AI assistant connections, and your data. Support is available in English and Russian.</p>
    <h2>Contact us</h2>
    <p>Email <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a>. Include your Qalta and iOS versions, the assistant you use, when the issue happened, and steps to reproduce it. Screenshots with personal information hidden can help.</p>
    <p>Do not send passwords, sign-in codes, access tokens, or full financial statements.</p>
    <h2>Connect an AI assistant</h2>
    <ol><li>Sign in to Qalta and check that the cloud space you want to use is syncing. Private spaces stored only on your device are not available to the connector.</li><li>If your assistant supports custom MCP connectors, enter <code>https://mcp.qalta.app/mcp</code> as the server URL.</li><li>Sign in through Qalta and review the permissions before approving access.</li><li>Start with a read request, such as “How much did I spend on groceries this month?”</li></ol>
    <h2>Troubleshooting</h2>
    <p>If sign-in fails, disconnect the connector and connect again. If a space is missing, check your account and syncing in Qalta. If a change does not appear, check your records in the app before repeating the request to avoid duplicates.</p>
    <h2>Disconnect access</h2>
    <p>Open <a href="/oauth/consent/">Connected AI agents</a>, sign in to your Qalta account, and choose Revoke for the agent. Also remove the connection in your assistant’s settings. Disconnecting does not undo changes already saved.</p>
    <h2>Your account and data</h2>
    <p>Contact us about account deletion, privacy, or incorrect changes to your data. You can also delete your account in the app. Read our <a href="${localPath(ctx.lang, "/privacy-policy")}">Privacy Policy</a> and <a href="${localPath(ctx.lang, "/terms-and-conditions")}">Terms &amp; Conditions</a> for details.</p>
    <p>For expense automation instructions, see the <a href="${localPath(ctx.lang, "/tutorials/")}">Qalta tutorials</a>.</p>
  `;
  return `${head(ctx, page)}<body>
${header(ctx)}
  <main class="doc container" lang="${ru ? "ru" : "en"}">
    <h1>${title}</h1>
${body}
  </main>
${footer(ctx, page.path)}</body></html>\n`;
}
