# Qalta - AI Expense Tracker

Website for [qalta.app](https://qalta.app), served by a Cloudflare Worker.

## Languages

Pages are generated from `site/templates/` and the dictionaries in `site/i18n/<lang>/`. English is served at the root, other languages under `/<lang>/`. The Worker in `src/index.ts` redirects unprefixed pages to the visitor's language (the `lang` cookie set by the footer switcher, then `Accept-Language`), falling back to English.

Do not edit the generated HTML in `public/` by hand. Edit the English strings in `site/i18n/en/`, update the other languages, then:

```sh
npm run check:i18n   # every language has the same keys, tags, and links as English
npm run build        # writes public/**/*.html and public/sitemap.xml
npm run dev          # build and serve locally
npm run deploy       # build and deploy
```

Deployment uses `wrangler.jsonc` for the existing `qalta-app` Worker and `qalta.app` custom domain. Run `npm run deploy:check` and `npm run test:consent` before `npm run deploy`. OAuth consent is served at `/oauth/consent/` without language redirects.
