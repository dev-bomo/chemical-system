import type { MetadataRoute } from "next";
import { categories, products, categoryHref, productHref } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/ro/", "/ro/prod/", "/ro/date-contact/", "/ro/cerere-oferta/"];

  return [
    ...staticRoutes.map((path) => ({
      url: absoluteUrl(path),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "/ro/" || path === "/" ? 1 : 0.8,
    })),
    ...categories.map((c) => ({
      url: absoluteUrl(categoryHref(c)),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...products.map((p) => ({
      url: absoluteUrl(productHref(p)),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
