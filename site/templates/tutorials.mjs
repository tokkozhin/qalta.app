import { SITE } from "../config.mjs";
import { absUrl, attr, footer, head, header, html, jsonLd, localPath, plain } from "./layout.mjs";

export const GUIDE_GROUPS = [
  { title: "iOS 27", slugs: ["apple-pay-ios-27", "push-notification-ios-27"] },
  { title: "iOS 26", slugs: ["apple-pay-ios-26"] },
];

const breadcrumbs = (ctx, items) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: absUrl(ctx.lang, path),
  })),
});

export function renderTutorialsIndex(ctx) {
  const { lang, t } = ctx;
  const ix = t.tutorials.index;
  const path = "/tutorials/";
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${absUrl(lang, path)}#page`,
        name: ix.ogTitle,
        description: ix.description,
        url: absUrl(lang, path),
        inLanguage: lang,
        isPartOf: { "@id": `${SITE}/#website` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: GUIDE_GROUPS.flatMap((g) => g.slugs).map((slug, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: plain(t.tutorials.guides[slug].h1),
            url: absUrl(lang, `/tutorials/${slug}`),
          })),
        },
      },
      breadcrumbs(ctx, [["Qalta", "/"], [t.common.nav.tutorials, path]]),
    ],
  };
  const page = {
    path,
    title: `${ix.title} — Qalta`,
    description: ix.description,
    ogTitle: ix.ogTitle,
    ogImage: "tutorials.png",
    ogImageAlt: ix.ogImageAlt,
    ogType: "website",
    stylesheet: "/tutorials/tutorial.css",
    extraHead: jsonLd(data),
  };
  const groups = GUIDE_GROUPS.map(
    (g) => `    <h2>${g.title}</h2>
    <div class="cards">
${g.slugs
  .map(
    (slug) => `      <a class="card" href="${localPath(lang, `/tutorials/${slug}`)}">
        <h3>${html(ix.cards[slug].title)}</h3>
        <p>${html(ix.cards[slug].text)}</p>
      </a>`,
  )
  .join("\n")}
    </div>`,
  ).join("\n\n");

  return `${head(ctx, page)}<body>
${header(ctx)}
  <main class="doc container">

    <h1>${html(ix.h1)}</h1>
    <p class="lede">${html(ix.lede)}</p>

${groups}

  </main>

${footer(ctx, path)}</body>
</html>
`;
}

export function renderGuide(ctx, slug, config) {
  const { lang, t } = ctx;
  const g = t.tutorials.guides[slug];
  const shared = t.tutorials.shared;
  const local = config.localized[lang] ?? {};
  const imageDir = `/assets/${config.dir}/${local.imageDir ?? "en"}`;
  const video = local.video ?? config.video;
  const ogImage = local.ogImage ?? config.ogImage;
  const path = `/tutorials/${slug}`;
  const url = absUrl(lang, path);

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        "@id": `${url}#howto`,
        name: plain(g.h1),
        description: g.description,
        image: `${SITE}/assets/og/${ogImage}`,
        inLanguage: lang,
        url,
        tool: [
          { "@type": "HowToTool", name: "Qalta" },
          { "@type": "HowToTool", name: "Apple Shortcuts" },
        ],
        about: { "@type": "MobileApplication", "@id": `${SITE}/#app`, name: "Qalta", operatingSystem: "iOS" },
        publisher: { "@type": "Organization", "@id": `${SITE}/#organization`, name: "Qalta", url: `${SITE}/` },
        video: {
          "@type": "VideoObject",
          name: plain(g.h1),
          description: g.videoLabel,
          contentUrl: `${SITE}/assets/${video}`,
          thumbnailUrl: `${SITE}/assets/og/${ogImage}`,
          uploadDate: "2026-09-29",
        },
        step: g.steps.map((step, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: plain(step.caption),
          text: plain(step.html.replace(/<\/(p|li)>/g, "$& ")),
          image: `${SITE}${imageDir}/${config.images[i]}`,
          url: `${url}#step-${i + 1}`,
        })),
      },
      breadcrumbs(ctx, [
        ["Qalta", "/"],
        [t.common.nav.tutorials, "/tutorials/"],
        [plain(g.h1), path],
      ]),
    ],
  };

  const page = {
    path,
    title: `${g.title} — Qalta`,
    description: g.description,
    ogTitle: g.ogTitle,
    ogImage,
    ogImageAlt: g.ogImageAlt,
    stylesheet: "/tutorials/tutorial.css",
    extraHead: jsonLd(data),
  };

  const steps = g.steps
    .map(
      (step, i) => `      <li id="step-${i + 1}">
        ${html(step.html)}
        <figure>
          <img src="${imageDir}/${config.images[i]}" alt="${attr(step.alt)}" loading="lazy" />
          <figcaption>${html(step.caption)}</figcaption>
        </figure>
      </li>`,
    )
    .join("\n");

  return `${head(ctx, page)}<body>
${header(ctx)}
  <main class="doc container">

    <h1>${html(g.h1)}</h1>
${g.intro.map((p) => `    <p class="lede">${html(p)}</p>`).join("\n")}

    <ol class="steps">
${steps}
    </ol>

    <section class="video-section" aria-labelledby="video-heading">
      <h2 id="video-heading">${html(shared.videoTitle)}</h2>
      <p>${html(shared.videoLede)}</p>
      <figure>
        <div class="player ${config.player}">
          <video
            controls
            playsinline
            preload="metadata"
            src="/assets/${video}"
            aria-label="${attr(g.videoLabel)}"
          ></video>
        </div>
        <figcaption>${html(g.videoCaption)}</figcaption>
      </figure>
    </section>

    <p><a class="home" href="${localPath(lang, "/tutorials/")}">${html(shared.allTutorials)}</a></p>

  </main>

${footer(ctx, path)}</body>
</html>
`;
}
