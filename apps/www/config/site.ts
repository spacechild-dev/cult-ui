export const siteConfig = {
  /* ───────────────── Brand & positioning ───────────────── */
  name: "Dağkan",
  description:
    "Yazılımcı değilim. Burada 'barely project' dediğim projelerimi paylaşıyorum.",
  url: "https://cult-ui.com",
  ogImage: "https://cult-ui.com/og.png",

  /* ───────────────── Social links ───────────────── */
  links: {
    github: "https://github.com/spacechild-dev",
    buyMeACoffee: "https://buymeacoffee.com/daiquiri",
  },
} as const

export type SiteConfig = typeof siteConfig
