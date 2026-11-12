import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  categories,
  getProductsByCategory,
  categoryHref,
  productHref,
} from "@/lib/content";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Catalog produse",
  description:
    `Catalog ${siteConfig.name}: diluanți uz general, diluanți specifici, antigel, materii prime chimice și produse noi.`,
  alternates: { canonical: absoluteUrl("/ro/prod/") },
};

export default function CatalogPage() {
  return (
    <div className="bg-steel-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <Breadcrumbs
          items={[
            { href: "/ro/", label: "Acasă" },
            { label: "Catalog" },
          ]}
        />
        <h1 className="mt-4 font-serif text-4xl text-steel-900">
          Catalog produse
        </h1>
        <p className="mt-3 max-w-2xl text-muted">
          Portofoliu de diluanți, antigel și materii prime chimice. Selectați o
          categorie sau un produs pentru detalii tehnice.
        </p>

        <div className="mt-12 space-y-14">
          {categories.map((cat) => {
            const items = getProductsByCategory(cat.slug);
            return (
              <section key={cat.slug}>
                <div className="flex flex-wrap items-end justify-between gap-3 border-b border-steel-800/15 pb-3">
                  <div>
                    <h2 className="font-serif text-2xl text-steel-900">
                      <Link href={categoryHref(cat)} className="hover:text-steel-700">
                        {cat.name}
                      </Link>
                    </h2>
                    <p className="mt-1 text-sm text-muted">{cat.description}</p>
                  </div>
                  <Link
                    href={categoryHref(cat)}
                    className="text-sm font-medium text-brand-blue hover:text-brand-blue"
                  >
                    Vezi categoria →
                  </Link>
                </div>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={productHref(p)}
                        className="block py-2 text-steel-800 transition hover:text-brand-red"
                      >
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
