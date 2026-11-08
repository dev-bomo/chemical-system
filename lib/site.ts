const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/chemical-system";

/** Prefix a public asset path with the app basePath (needed for unoptimized images). */
export function assetPath(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (!basePath || basePath === "/") return normalized;
  return `${basePath.replace(/\/$/, "")}${normalized}`;
}

export const siteConfig = {
  name: "Chemical System",
  legalName: "S.C. Chemical System Corporation SRL",
  founded: 1998,
  address: {
    street: "Margina nr. 63",
    region: "Jud. Timiș",
    locality: "Margina",
    country: "RO",
  },
  contact: {
    person: "Cristian Moldovean",
    phone: "0744.317.074",
    phoneHref: "tel:+40744317074",
    phoneAlt: "0256/326.022",
    phoneAltHref: "tel:+40256326022",
    email: "office.cscm@gmail.com",
    emailHref: "mailto:office.cscm@gmail.com",
  },
  registry: {
    cui: "11332692",
    j: "J35/1270/1998",
  },
  logo: assetPath("/logo.png"),
  logoMark: assetPath("/logo-mark.png"),
  heroImages: [
    "https://www.chemicalsystem.ro/files/slideshow/27.png",
    "https://www.chemicalsystem.ro/files/slideshow/29.png",
    "https://www.chemicalsystem.ro/files/slideshow/31.png",
  ],
  siteUrl: "https://dev-bomo.github.io/chemical-system",
  basePath,
  differentiator:
    "Formulare custom: ne deplasăm la sediul clientului pentru a analiza materialele folosite și a oferi soluția optimă.",
} as const;

export function absoluteUrl(path = "/") {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
