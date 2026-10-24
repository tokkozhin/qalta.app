import { APP_STORE_URL, LANGUAGES, SITE, SUPPORT_EMAIL, appStoreUrl } from "../config.mjs";
import { absUrl, attr, fill, footer, head, header, html, jsonLd, localPath, plain } from "./layout.mjs";

const ICONS = `  <svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">
    <symbol id="i-mic" viewBox="0 0 24 24"><path d="M12 19v3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><rect x="9" y="2" width="6" height="13" rx="3"/></symbol>
    <symbol id="i-scan" viewBox="0 0 24 24"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/></symbol>
    <symbol id="i-lock" viewBox="0 0 24 24"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></symbol>
    <symbol id="i-wallet-cards" viewBox="0 0 24 24"><path d="M3 11h3.75a2 2 0 0 1 1.6.8l.45.6a4 4 0 0 0 6.4 0l.45-.6a2 2 0 0 1 1.6-.8H21"/><path d="M3 7h18"/><rect x="3" y="3" width="18" height="18" rx="2"/></symbol>
    <symbol id="i-bell" viewBox="0 0 24 24"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></symbol>
    <symbol id="i-pointer" viewBox="0 0 24 24"><path d="M22 14a8 8 0 0 1-8 8"/><path d="M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1"/><path d="M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10"/><path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></symbol>
    <symbol id="i-hand-coins" viewBox="0 0 24 24"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></symbol>
    <symbol id="i-goal" viewBox="0 0 24 24"><path d="M12 13V2l8 4-8 4"/><path d="M20.561 10.222a9 9 0 1 1-12.55-5.29"/><path d="M8.002 9.997a5 5 0 1 0 8.9 2.02"/></symbol>
    <symbol id="i-import" viewBox="0 0 24 24"><path d="M12 3v12"/><path d="m8 11 4 4 4-4"/><path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"/></symbol>
    <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></symbol>
    <symbol id="i-link" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></symbol>
    <symbol id="i-sync" viewBox="0 0 24 24"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></symbol>
    <symbol id="i-history" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></symbol>
    <symbol id="i-layers" viewBox="0 0 24 24"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></symbol>
  </svg>
`;

function structuredData(ctx) {
  const { lang, t } = ctx;
  const h = t.home;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: `${SITE}/`,
        name: "Qalta",
        description: h.ld.websiteDescription,
        inLanguage: LANGUAGES.map((l) => l.code),
        publisher: { "@id": `${SITE}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${absUrl(lang, "/")}#webpage`,
        url: absUrl(lang, "/"),
        name: h.meta.title,
        description: h.meta.description,
        inLanguage: lang,
        isPartOf: { "@id": `${SITE}/#website` },
        about: { "@id": `${SITE}/#app` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE}/#organization`,
        name: "Qalta",
        url: `${SITE}/`,
        logo: `${SITE}/assets/home/icon.webp`,
        email: SUPPORT_EMAIL,
        founder: { "@id": `${SITE}/#founder` },
        sameAs: [APP_STORE_URL],
      },
      { "@type": "Person", "@id": `${SITE}/#founder`, name: "Daniel Tokkozhin" },
      {
        "@type": "MobileApplication",
        "@id": `${SITE}/#app`,
        name: "Qalta: Budget, Expense Tracker",
        alternateName: ["Qalta", "Qalta Money Manager"],
        url: absUrl(lang, "/"),
        description: h.ld.appDescription,
        applicationCategory: "FinanceApplication",
        applicationSubCategory: h.ld.subCategory,
        operatingSystem: "iOS 16.4 or later",
        downloadUrl: appStoreUrl(lang),
        installUrl: appStoreUrl(lang),
        image: `${SITE}/assets/home/icon.webp`,
        screenshot: ["hero-home", "voice", "scan", "insights"].map((n) => `${SITE}/assets/home/${n}.webp`),
        inLanguage: LANGUAGES.map((l) => l.code),
        author: { "@id": `${SITE}/#founder` },
        publisher: { "@id": `${SITE}/#organization` },
        featureList: h.ld.featureList,
        offers: [
          [h.ld.offerFree, "0"],
          [h.ld.offerProMonthly, "3.99"],
          [h.ld.offerProAnnual, "29.99"],
          [h.ld.offerFamilyMonthly, "5.99"],
          [h.ld.offerFamilyAnnual, "49.99"],
        ].map(([name, price]) => ({ "@type": "Offer", name, price, priceCurrency: "USD" })),
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.6", ratingCount: "15", bestRating: "5" },
      },
      {
        "@type": "FAQPage",
        "@id": `${absUrl(lang, "/")}#faq`,
        inLanguage: lang,
        mainEntity: h.faq.items.map((item) => ({
          "@type": "Question",
          name: plain(item.q),
          acceptedAnswer: { "@type": "Answer", text: plain(item.a) },
        })),
      },
    ],
  };
}

const headline = (title, soft, id, cls = "headline") =>
  `<h2 class="${cls}" id="${id}">
            ${html(title)}
            <span class="headline__soft">${html(soft)}</span>
          </h2>`;

export function renderHome(ctx) {
  const { lang, t } = ctx;
  const h = t.home;
  const vars = { tutorialsUrl: localPath(lang, "/tutorials/") };
  const s = h.shared;
  const pointIcons = ["i-link", "i-sync", "i-history", "i-lock"];

  const page = {
    path: "/",
    title: h.meta.title,
    description: h.meta.description,
    ogTitle: h.meta.ogTitle,
    ogDescription: h.meta.ogDescription,
    ogImage: "home.png",
    ogImageAlt: h.meta.ogImageAlt,
    ogType: "website",
    stylesheet: "/home.css",
    extraMeta: `  <meta name="author" content="Daniel Tokkozhin" />
  <meta name="application-name" content="Qalta" />
  <link rel="alternate" type="text/markdown" title="Qalta for AI assistants" href="${SITE}/llms.txt" />
`,
    extraHead: `  <link rel="preload" as="image" href="/assets/home/hero-home.webp" type="image/webp" fetchpriority="high" />
  <script>document.documentElement.classList.add("js");</script>
${jsonLd(structuredData(ctx))}`,
  };

  return `${head(ctx, page)}<body class="page-home">
${ICONS}
${header(ctx)}
  <main>
    <section class="hero">
      <div class="container hero__grid">
        <div class="hero__copy">
          <h1 class="headline headline--hero">
            ${html(h.hero.title)}
            <span class="headline__soft">${html(h.hero.titleSoft)}</span>
          </h1>
          <p class="lede">${html(h.hero.lede)}</p>
          <ul class="chips" aria-label="${attr(h.hero.chipsLabel)}">
            <li class="chip"><svg class="icon" aria-hidden="true"><use href="#i-mic"/></svg>${html(h.hero.chipVoice)}</li>
            <li class="chip"><svg class="icon" aria-hidden="true"><use href="#i-scan"/></svg>${html(h.hero.chipScan)}</li>
            <li class="chip"><svg class="icon" aria-hidden="true"><use href="#i-lock"/></svg>${html(h.hero.chipPrivate)}</li>
          </ul>
          <div class="cta">
            <a class="pill pill--solid" href="${appStoreUrl(lang)}" target="_blank" rel="noopener noreferrer">${html(t.common.download)}</a>
          </div>
        </div>
        <div class="hero__phones">
          <img class="hero__phone hero__phone--side" src="/assets/home/hero-insights.webp" width="576" height="1024" decoding="async"
            alt="${attr(h.hero.altInsights)}" />
          <img class="hero__phone hero__phone--main" src="/assets/home/hero-home.webp" width="576" height="1024" fetchpriority="high" decoding="async"
            alt="${attr(h.hero.altHome)}" />
          <img class="hero__phone hero__phone--side" src="/assets/home/hero-add.webp" width="576" height="1024" decoding="async"
            alt="${attr(h.hero.altAdd)}" />
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="voice-title">
      <div class="container feature">
        <div class="feature__copy" data-reveal>
          ${headline(h.voice.title, h.voice.titleSoft, "voice-title")}
          <p class="lede">${html(h.voice.lede)}</p>
        </div>
        <div class="feature__media" data-reveal>
          <div class="shot shot--voice">
            <img src="/assets/home/voice.webp" width="1000" height="1464" loading="lazy" decoding="async"
              alt="${attr(h.voice.alt)}" />
          </div>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="scan-title">
      <div class="container feature feature--flip">
        <div class="feature__copy" data-reveal>
          ${headline(h.scan.title, h.scan.titleSoft, "scan-title")}
          <p class="lede">${html(h.scan.lede)}</p>
        </div>
        <div class="feature__media" data-reveal>
          <div class="shot shot--scan">
            <img src="/assets/home/scan.webp" width="1000" height="1464" loading="lazy" decoding="async"
              alt="${attr(h.scan.alt)}" />
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="shared" aria-labelledby="shared-title">
      <div class="container">
        <div class="section__head shared__head" data-reveal>
          ${headline(s.title, s.titleSoft, "shared-title")}
          <p class="lede">${html(s.lede)}</p>
        </div>
        <div class="shared" data-reveal>
          <div class="shared__media">
            <img src="/assets/home/shared.webp" width="1600" height="900" loading="lazy" decoding="async"
              alt="${attr(s.alt)}" />
          </div>
          <ul class="shared__points">
${s.points
  .map(
    (p, i) => `            <li>
              <span class="round round--sm" aria-hidden="true"><svg class="icon"><use href="#${pointIcons[i]}"/></svg></span>
              <div><h3>${html(p.title)}</h3><p>${html(p.text)}</p></div>
            </li>`,
  )
  .join("\n")}
          </ul>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="ways-title">
      <div class="container">
        <div class="section__head" data-reveal>
          ${headline(h.ways.title, h.ways.titleSoft, "ways-title")}
        </div>
        <div class="ways" data-reveal>
          <div class="ways__item">
            <span class="round" aria-hidden="true"><svg class="icon"><use href="#i-wallet-cards"/></svg></span>
            <h3>${html(h.ways.applePayTitle)}</h3>
            <p>${html(h.ways.applePayText)}</p>
          </div>
          <div class="ways__item">
            <span class="round" aria-hidden="true"><svg class="icon"><use href="#i-bell"/></svg></span>
            <h3>${html(h.ways.bankTitle)}</h3>
            <p>${html(h.ways.bankText)}</p>
          </div>
          <div class="ways__item">
            <span class="round" aria-hidden="true"><svg class="icon"><use href="#i-pointer"/></svg></span>
            <h3>${html(h.ways.shortcutsTitle)}</h3>
            <p>${html(h.ways.shortcutsText)}</p>
          </div>
        </div>
        <p class="ways__more" data-reveal>
          <a class="pill pill--outline" href="${localPath(lang, "/tutorials/")}">${html(h.ways.guides)}<svg class="icon icon--sm" aria-hidden="true"><use href="#i-arrow"/></svg></a>
        </p>
      </div>
    </section>

    <section class="section" aria-labelledby="insights-title">
      <div class="container">
        <div class="section__head" data-reveal>
          ${headline(h.insights.title, h.insights.titleSoft, "insights-title")}
          <p class="lede">${html(h.insights.lede)}</p>
        </div>
        <div class="bento" data-reveal>
          <div class="tile tile--insights">
            <img src="/assets/home/insights.webp" width="1000" height="1565" loading="lazy" decoding="async"
              alt="${attr(h.insights.altInsights)}" />
          </div>
          <div class="tile tile--stat">
            <div>
              <h3 class="tile__label">${html(h.insights.trend)}</h3>
              <p class="tile__note">${html(h.insights.trendNote)}</p>
            </div>
            <p class="tile__value is-income">−45%</p>
          </div>
          <div class="tile tile--stat">
            <div>
              <h3 class="tile__label">${html(h.insights.dailyAverage)}</h3>
            </div>
            <p class="tile__value">$28</p>
          </div>
          <div class="tile tile--stat tile--wide">
            <div>
              <h3 class="tile__label">${html(h.insights.saved)}</h3>
              <p class="tile__note">${html(h.insights.savedNote)}</p>
            </div>
            <p class="tile__value is-income">82%</p>
          </div>
          <div class="tile tile--analytics">
            <div class="tile__text">
              <h3 class="tile__label">${html(h.insights.analytics)}</h3>
              <p class="tile__note">${html(h.insights.analyticsNote)}</p>
            </div>
            <img src="/assets/home/analytics.webp" width="900" height="1400" loading="lazy" decoding="async"
              alt="${attr(h.insights.altAnalytics)}" />
          </div>
          <div class="tile tile--stat">
            <div>
              <h3 class="tile__label">${html(h.insights.largestExpense)}</h3>
              <p class="tile__note">${html(h.insights.largestExpenseNote)}</p>
            </div>
            <p class="tile__value is-expense">$210</p>
          </div>
          <div class="tile tile--stat">
            <div>
              <h3 class="tile__label">${html(h.insights.largestIncome)}</h3>
              <p class="tile__note">${html(h.insights.largestIncomeNote)}</p>
            </div>
            <p class="tile__value is-income">$3,200</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="tools-title">
      <div class="container">
        <div class="section__head" data-reveal>
          ${headline(h.tools.title, h.tools.titleSoft, "tools-title")}
        </div>
        <div class="band" data-reveal>
          <figure class="band__item">
            <div class="stage stage--shot">
              <img src="/assets/home/budgets.webp" width="900" height="1183" loading="lazy" decoding="async"
                alt="${attr(h.tools.budgetsAlt)}" />
            </div>
            <figcaption>
              <h3>${html(h.tools.budgetsTitle)}</h3>
              <p>${html(h.tools.budgetsText)}</p>
            </figcaption>
          </figure>
          <figure class="band__item">
            <div class="stage stage--rows">
              <img src="/assets/home/subscriptions.webp" width="900" height="559" loading="lazy" decoding="async"
                alt="${attr(h.tools.subscriptionsAlt)}" />
            </div>
            <figcaption>
              <h3>${html(h.tools.subscriptionsTitle)}</h3>
              <p>${html(h.tools.subscriptionsText)}</p>
            </figcaption>
          </figure>
          <figure class="band__item">
            <div class="stage stage--shot stage--wide-shot">
              <img src="/assets/home/currency.webp" width="900" height="1499" loading="lazy" decoding="async"
                alt="${attr(h.tools.currencyAlt)}" />
            </div>
            <figcaption>
              <h3>${html(h.tools.currencyTitle)}</h3>
              <p>${html(h.tools.currencyText)}</p>
            </figcaption>
          </figure>
        </div>

        <ul class="list" data-reveal>
          <li class="list__row">
            <span class="round round--sm is-debt" aria-hidden="true"><svg class="icon"><use href="#i-hand-coins"/></svg></span>
            <div><h3>${html(h.tools.debtsTitle)}</h3><p>${html(h.tools.debtsText)}</p></div>
          </li>
          <li class="list__row">
            <span class="round round--sm" aria-hidden="true"><svg class="icon"><use href="#i-goal"/></svg></span>
            <div><h3>${html(h.tools.goalsTitle)}</h3><p>${html(h.tools.goalsText)}</p></div>
          </li>
          <li class="list__row">
            <span class="round round--sm" aria-hidden="true"><svg class="icon"><use href="#i-layers"/></svg></span>
            <div><h3>${html(h.tools.spacesTitle)}</h3><p>${html(h.tools.spacesText)}</p></div>
          </li>
          <li class="list__row">
            <span class="round round--sm" aria-hidden="true"><svg class="icon"><use href="#i-import"/></svg></span>
            <div><h3>${html(h.tools.importTitle)}</h3><p>${html(h.tools.importText)}</p></div>
          </li>
        </ul>
      </div>
    </section>

    <section class="section section--narrow" aria-labelledby="privacy-title">
      <div class="container privacy" data-reveal>
        <span class="round" aria-hidden="true"><svg class="icon"><use href="#i-lock"/></svg></span>
        ${headline(h.privacy.title, h.privacy.titleSoft, "privacy-title")}
${h.privacy.lines.map((line) => `        <p class="lede">${html(line)}</p>`).join("\n")}
        <p class="privacy__link"><a class="text-link" href="${localPath(lang, "/privacy-policy")}">${html(h.privacy.link)}</a></p>
      </div>
    </section>

    <section class="section" aria-labelledby="themes-title">
      <div class="container">
        <div class="themes" data-reveal>
          <div class="themes__copy">
            <h2 class="headline" id="themes-title">
              <span class="headline__soft">${html(h.themes.titleSoft)}</span>
              ${html(h.themes.title)}
            </h2>
            <p class="lede">${html(h.themes.lede)}</p>
          </div>
          <img class="themes__img" src="/assets/home/themes.webp" width="1100" height="1952" loading="lazy" decoding="async"
            alt="${attr(h.themes.alt)}" />
        </div>
      </div>
    </section>

    <section class="section" id="faq" aria-labelledby="faq-title">
      <div class="container">
        <div class="section__head" data-reveal>
          ${headline(h.faq.title, h.faq.titleSoft, "faq-title")}
        </div>
        <div class="faq" data-reveal>
${h.faq.items
  .map(
    (item) => `          <details>
            <summary>${html(item.q)}</summary>
            <p>${html(fill(item.a, vars))}</p>
          </details>`,
  )
  .join("\n")}
        </div>
      </div>
    </section>

    <section class="section close" aria-labelledby="close-title">
      <div class="container close__inner" data-reveal>
        <img class="close__icon" src="/assets/home/icon.webp" width="256" height="256" loading="lazy" decoding="async" alt="${attr(h.close.iconAlt)}" />
        <h2 class="headline" id="close-title">${html(h.close.title)}</h2>
        <a class="pill pill--solid" href="${appStoreUrl(lang)}" target="_blank" rel="noopener noreferrer">${html(t.common.download)}</a>
      </div>
    </section>
  </main>

${footer(ctx, "/")}  <script>
    (function () {
      var items = document.querySelectorAll("[data-reveal]");
      if (!("IntersectionObserver" in window)) {
        items.forEach(function (el) { el.classList.add("is-in"); });
        return;
      }
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: "0px 0px -8% 0px" });
      items.forEach(function (el) { io.observe(el); });
    })();
  </script>
</body>
</html>
`;
}
