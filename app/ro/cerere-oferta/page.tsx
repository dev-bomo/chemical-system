import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadForm } from "@/components/LeadForm";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cerere ofertă",
  description:
    "Solicitați ofertă pentru diluanți, antigel sau materii prime chimice de la Chemical System. Formulare custom disponibile.",
  alternates: { canonical: absoluteUrl("/ro/cerere-oferta/") },
};

export default function QuotePage() {
  return (
    <div className="bg-steel-50">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <Breadcrumbs
          items={[
            { href: "/ro/", label: "Acasă" },
            { label: "Cerere ofertă" },
          ]}
        />
        <h1 className="mt-4 font-serif text-4xl text-steel-900">
          Solicită ofertă
        </h1>
        <p className="mt-3 text-muted">
          Spuneți-ne produsul, aplicația și cantitatea estimată. Pentru formulări
          speciale putem analiza materialele la sediul dumneavoastră.
        </p>

        <div className="mt-8 border border-line bg-white p-6 sm:p-8">
          <LeadForm kind="quote" />
        </div>

        <p className="mt-6 text-sm text-muted">
          Preferință telefon?{" "}
          <a
            href={siteConfig.contact.phoneHref}
            className="font-medium text-steel-800 hover:underline"
          >
            {siteConfig.contact.phone}
          </a>{" "}
          — {siteConfig.contact.person}
        </p>
      </div>
    </div>
  );
}
