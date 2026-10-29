import { fileURLToPath } from "node:url";

export const SITE = "https://qalta.app";
export const APP_STORE_URL = "https://apps.apple.com/app/id6756010294";

/** App Store page in the storefront that matches the page language. */
export const appStoreUrl = (lang) =>
  `https://apps.apple.com/${LANGUAGES.find((l) => l.code === lang).storefront}/app/id6756010294`;
export const SUPPORT_EMAIL = "help.qalta.app@outlook.com";

export const rootDir = fileURLToPath(new URL("..", import.meta.url));
export const siteDir = fileURLToPath(new URL(".", import.meta.url));
export const i18nDir = `${siteDir}i18n`;
export const publicDir = `${rootDir}public`;

export const DEFAULT_LANG = "en";

/** Keep in sync with `LANGS` in `src/index.ts`. */
export const LANGUAGES = [
  { code: "en", name: "English", ogLocale: "en_US", storefront: "us" },
  { code: "de", name: "Deutsch", ogLocale: "de_DE", storefront: "de" },
  { code: "es", name: "Español", ogLocale: "es_ES", storefront: "es" },
  { code: "fr", name: "Français", ogLocale: "fr_FR", storefront: "fr" },
  { code: "it", name: "Italiano", ogLocale: "it_IT", storefront: "it" },
  { code: "ja", name: "日本語", ogLocale: "ja_JP", storefront: "jp" },
  { code: "kk", name: "Қазақша", ogLocale: "kk_KZ", storefront: "kz" },
  { code: "ko", name: "한국어", ogLocale: "ko_KR", storefront: "kr" },
  { code: "pl", name: "Polski", ogLocale: "pl_PL", storefront: "pl" },
  { code: "pt", name: "Português", ogLocale: "pt_BR", storefront: "br" },
  { code: "ru", name: "Русский", ogLocale: "ru_RU", storefront: "ru" },
  { code: "th", name: "ไทย", ogLocale: "th_TH", storefront: "th" },
  { code: "tr", name: "Türkçe", ogLocale: "tr_TR", storefront: "tr" },
  { code: "uk", name: "Українська", ogLocale: "uk_UA", storefront: "ua" },
];
export const LANGS = LANGUAGES.map((l) => l.code);

export const PAGES_FILES = ["common", "home", "tutorials", "privacy", "terms", "support", "mcp", "consent"];
