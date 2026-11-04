import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { categories, products, categoryHref, productHref } from "@/lib/content";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chemical System — Diluanți, solvenți și antigel",
  description:
    "Producător românesc de diluanți vopsele, diluanți specifici și antigel din 1998. Formulare custom după analiza materialelor la sediul clientului.",
  alternates: { canonical: absoluteUrl("/ro/") },
};

export default function HomePage() {
  const featured = products.slice(0, 6);

  return (
    <>
      <OrganizationJsonLd />
      <Hero />

      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-500">
              De ce Chemical System
            </p>
            <h2 className="mt-3 font-serif text-3xl text-steel-900 sm:text-4xl">
              Soluții individualizate, nu rețete generice
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Înființată în {siteConfig.founded}, {siteConfig.name} este o
              societate cu capital privat românesc. Am început cu solvenți de uz
              general și am dezvoltat o producție specializată pe diluanți
              specifici — aproape orice tip de diluant.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted">
              {siteConfig.differentiator}
            </p>
          </div>
          <ul className="space-y-4 border-l-2 border-amber-500/50 pl-6 text-steel-800">
            <li>Diluanți vopsele și rășini poliesterice</li>
            <li>Diluanți pentru utilizări speciale</li>
            <li>Antigel pentru instalații de încălzire</li>
            <li>Antigel pentru instalații solare</li>
            <li>Materii prime chimice și solvenți</li>
          </ul>
        </div>
      </section>

      <section className="bg-steel-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-500">
                Catalog
              </p>
              <h2 className="mt-2 font-serif text-3xl text-steel-900">
                Categorii de produse
              </h2>
            </div>
            <Link
              href="/ro/prod/"
              className="text-sm font-semibold text-steel-800 underline-offset-4 hover:underline"
            >
              Vezi catalogul complet →
            </Link>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={categoryHref(cat)}
                className="group block border-t border-steel-800/20 pt-5 transition hover:border-amber-500"
              >
                <h3 className="font-serif text-xl text-steel-900 group-hover:text-steel-700">
                  {cat.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {cat.description}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-amber-600">
                  Explorează →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-serif text-3xl text-steel-900">Produse reprezentative</h2>
          <p className="mt-2 max-w-2xl text-muted">
            Selecție din portofoliul activ. Pentru fișe tehnice și formulări
            personalizate, solicitați ofertă.
          </p>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {featured.map((p) => (
              <li key={p.slug}>
                <Link
                  href={productHref(p)}
                  className="flex flex-col gap-4 py-5 transition hover:bg-steel-50/80 sm:flex-row sm:items-center"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-steel-100">
                    {p.image && (
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover"
                        unoptimized
                        sizes="80px"
                      />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wider text-amber-600">
                      {p.categoryName}
                    </p>
                    <p className="font-serif text-lg text-steel-900">{p.name}</p>
                    <p className="mt-1 line-clamp-2 text-sm text-muted">
                      {p.summary}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-steel-700">
                    Detalii →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden bg-steel-900 text-white">
        <div className="texture-grid absolute inset-0 opacity-30" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="font-serif text-3xl">Pregătiți o comandă sau o formulare?</h2>
            <p className="mt-2 max-w-xl text-steel-300">
              Spuneți-ne aplicația și materialele folosite — revenim cu o propunere
              tehnică.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/ro/cerere-oferta/"
              className="bg-amber-500 px-5 py-3 text-sm font-semibold text-steel-950 hover:bg-amber-400"
            >
              Solicită ofertă
            </Link>
            <a
              href={siteConfig.contact.phoneHref}
              className="border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5"
            >
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
