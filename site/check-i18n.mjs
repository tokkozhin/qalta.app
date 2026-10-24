import { existsSync, readFileSync } from "node:fs";
import { LANGS, PAGES_FILES, i18nDir } from "./config.mjs";

const tags = (s) => [...s.matchAll(/<\/?([a-z0-9]+)[^>]*>/gi)].map((m) => m[0].startsWith("</") ? `/${m[1]}` : m[1]);
const hrefs = (s) => [...s.matchAll(/href="([^"]*)"/g)].map((m) => m[1]);
const placeholders = (s) => [...s.matchAll(/\{[a-zA-Z]+\}/g)].map((m) => m[0]).sort();

function compare(en, tr, path, problems) {
  if (typeof en === "string") {
    if (typeof tr !== "string") return problems.push(`${path}: expected a string`);
    if (!tr.trim()) return problems.push(`${path}: empty`);
    if (tags(en).join() !== tags(tr).join()) problems.push(`${path}: HTML tags differ\n    en: ${tags(en).join(" ")}\n    tr: ${tags(tr).join(" ")}`);
    if (hrefs(en).join() !== hrefs(tr).join()) problems.push(`${path}: href values differ`);
    if (placeholders(en).join() !== placeholders(tr).join()) problems.push(`${path}: {placeholders} differ`);
    return;
  }
  if (Array.isArray(en)) {
    if (!Array.isArray(tr)) return problems.push(`${path}: expected an array`);
    if (en.length !== tr.length) problems.push(`${path}: array length ${tr.length}, expected ${en.length}`);
    en.forEach((v, i) => tr[i] !== undefined && compare(v, tr[i], `${path}[${i}]`, problems));
    return;
  }
  if (!tr || typeof tr !== "object") return problems.push(`${path}: expected an object`);
  for (const key of Object.keys(en)) {
    if (!(key in tr)) problems.push(`${path}.${key}: missing`);
    else compare(en[key], tr[key], `${path}.${key}`, problems);
  }
  for (const key of Object.keys(tr)) if (!(key in en)) problems.push(`${path}.${key}: unknown key`);
}

export function checkLang(lang) {
  const problems = [];
  for (const file of PAGES_FILES) {
    const trPath = `${i18nDir}/${lang}/${file}.json`;
    if (!existsSync(trPath)) {
      problems.push(`${file}.json: missing file`);
      continue;
    }
    let tr;
    try {
      tr = JSON.parse(readFileSync(trPath, "utf8"));
    } catch (error) {
      problems.push(`${file}.json: invalid JSON (${error.message})`);
      continue;
    }
    const en = JSON.parse(readFileSync(`${i18nDir}/en/${file}.json`, "utf8"));
    compare(en, tr, file, problems);
  }
  return problems;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const langs = process.argv.length > 2 ? process.argv.slice(2) : LANGS.filter((l) => l !== "en");
  let failed = false;
  for (const lang of langs) {
    const problems = checkLang(lang);
    if (problems.length) {
      failed = true;
      console.log(`${lang}: ${problems.length} problem(s)`);
      for (const p of problems) console.log(`  ${p}`);
    } else {
      console.log(`${lang}: OK`);
    }
  }
  process.exit(failed ? 1 : 0);
}
