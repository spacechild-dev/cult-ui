import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const heading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Geist({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const fonts = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

const baseURL = "https://daiquiri.dev";

const style = {
  theme: "system",
  neutral: "gray",
  brand: "emerald",
  accent: "emerald",
  solid: "contrast",
  solidStyle: "flat",
  border: "playful",
  surface: "filled",
  transition: "all",
  scaling: "100",
};

const dataStyle = {
  variant: "gradient",
  mode: "categorical",
  height: 24,
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false
  },
};

const effects = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: false,
    x: 50,
    y: 0,
    width: 100,
    height: 100,
    tilt: 0,
    colorStart: "brand-background-strong",
    colorEnd: "static-transparent",
    opacity: 50,
  },
  dots: {
    display: true,
    size: "2",
    color: "brand-on-background-weak",
    opacity: 40,
  },
  lines: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
    thickness: 1,
    angle: 45,
    size: "8",
  },
  grid: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
    width: "2",
    height: "2",
  },
};

const meta = {
  home: {
    path: "/",
    title: "Dağkan",
    description: "Yazılımcı değilim. Burada 'barely project' dediğim projelerimi paylaşıyorum.",
    image: "/images/og/home.jpg",
    canonical: "https://daiquiri.dev",
    robots: "index,follow",
    alternates: [{ href: "https://daiquiri.dev", hrefLang: "en" }],
  },
};

const schema = {
  logo: "",
  type: "Organization",
  name: "Dağkan",
  description: meta.home.description,
  email: "hello@daiquiri.dev",
};

const social = {
  twitter: "https://twitter.com/spacechild_dev",
  linkedin: "https://linkedin.com/in/dagkanbayramoglu",
};

export { baseURL, fonts, style, meta, schema, social, effects, dataStyle };
