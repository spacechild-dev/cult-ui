export const siteConfig = {
  /* ───────────────── Brand & positioning ───────────────── */
  name: "Dağkan",
  description:
    "I am not a developer. Here, I share my 'barely projects' – projects that barely work, but are a labor of love.",
  url: "https://cult-ui.com",
  ogImage: "https://cult-ui.com/og.png",

  /* ───────────────── Social links ───────────────── */
  links: {
    github: "https://github.com/spacechild-dev",
    buyMeACoffee: "https://buymeacoffee.com/daiquiri",
  },
} as const

export type SiteConfig = typeof siteConfig
