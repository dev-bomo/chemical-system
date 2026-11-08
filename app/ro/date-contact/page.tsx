import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadForm } from "@/components/LeadForm";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Date contact",
  description: `Contact ${siteConfig.legalName}: ${siteConfig.contact.person}, ${siteConfig.contact.phone}, ${siteConfig.address.street}, ${siteConfig.address.region}.`,
  alternates: { canonical: absoluteUrl("/ro/date-contact/") },
};

export default function ContactPage() {
  return (
    <div className="bg-steel-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <Breadcrumbs
          items={[
            { href: "/ro/", label: "Acasă" },
            { label: "Date contact" },
          ]}
        />
        <h1 className="mt-4 font-serif text-4xl text-steel-900">Date contact</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Scrieți-ne sau sunați — răspundem pentru oferte, formulări custom și
          informații tehnice.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="border border-line bg-white p-6 sm:p-8">
            <p className="font-serif text-2xl text-steel-900">
              {siteConfig.legalName}
            </p>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wider text-brand-blue">
                  Adresă
                </dt>
                <dd className="mt-1 text-steel-800">
                  {siteConfig.address.street}, {siteConfig.address.region}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-brand-blue">
                  Persoană de contact
                </dt>
                <dd className="mt-1 text-steel-800">
                  {siteConfig.contact.person}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-brand-blue">
                  Telefon
                </dt>
                <dd className="mt-1 text-steel-800">
                  <a href={siteConfig.contact.phoneHref} className="hover:underline">
                    {siteConfig.contact.phone}
                  </a>
                  <br />
                  <a
                    href={siteConfig.contact.phoneAltHref}
                    className="hover:underline"
                  >
                    {siteConfig.contact.phoneAlt}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-brand-blue">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={siteConfig.contact.emailHref}
                    className="text-steel-800 hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-brand-blue">
                  Date societate
                </dt>
                <dd className="mt-1 text-steel-800">
                  CUI: {siteConfig.registry.cui}
                  <br />
                  {siteConfig.registry.j}
                  <br />
                  Înființată: {siteConfig.founded}
                </dd>
              </div>
            </dl>
            <div className="mt-8 aspect-[4/3] w-full overflow-hidden border border-line bg-steel-100">
              <iframe
                title="Hartă Chemical System — Margina"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Margina%20nr.%2063%2C%20Timi%C8%99&z=14&output=embed"
              />
            </div>
          </div>

          <div className="border border-line bg-white p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-steel-900">Formular contact</h2>
            <p className="mt-2 text-sm text-muted">
              Câmpurile marcate cu * sunt obligatorii.
            </p>
            <div className="mt-6">
              <LeadForm kind="contact" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
