const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/chemical-system";

/** Prefix a public asset path with the app basePath (needed for unoptimized images). */
export function assetPath(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (!basePath || basePath === "/") return normalized;
  return `${basePath.replace(/\/$/, "")}${normalized}`;
}

export const siteConfig = {
  name: "Chemical System Corporation",
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
    phone: "0722 300 065",
    phoneHref: "tel:+40722300065",
    phoneE164: "+40722300065",
    email: "office.cscm@gmail.com",
    emailHref: "mailto:office.cscm@gmail.com",
  },
  registry: {
    cui: "11332692",
    j: "J35/1270/1998",
  },
  logo: assetPath("/logo.png"),
  logoMark: assetPath("/logo-mark.png"),
  ogImage: "/og-image.png",
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

export type QuoteContext = {
  from?: string;
  product?: string;
  category?: string;
};

export function quoteHref(ctx: QuoteContext = {}) {
  const params = new URLSearchParams();
  if (ctx.from) params.set("from", ctx.from);
  if (ctx.product) params.set("produs", ctx.product);
  if (ctx.category) params.set("categorie", ctx.category);
  const query = params.toString();
  return query ? `/ro/cerere-oferta/?${query}` : "/ro/cerere-oferta/";
}

export function quoteDraft(ctx: QuoteContext) {
  const intro = ctx.product
    ? `Aș dori o ofertă pentru ${ctx.product}${ctx.category ? ` (${ctx.category})` : ""}.`
    : ctx.category
      ? `Aș dori o ofertă pentru produse din categoria ${ctx.category}.`
      : "Aș dori o ofertă pentru diluanți / solvenți / antigel.";

  return [
    "Bună ziua,",
    "",
    intro,
    "",
    "Aplicație / materiale folosite: ",
    "Cantitate estimată: ",
    "Termen / locație livrare: ",
    "",
    "Mulțumesc.",
  ].join("\n");
}
