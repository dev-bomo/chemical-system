import { siteConfig } from "@/lib/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: siteConfig.legalName,
    url: siteConfig.siteUrl,
    logo: siteConfig.logo,
    foundingDate: String(siteConfig.founded),
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: siteConfig.contact.phoneE164,
      email: siteConfig.contact.email,
      availableLanguage: ["Romanian"],
      name: siteConfig.contact.person,
    },
    taxID: siteConfig.registry.cui,
    description:
      "Producător românesc de diluanți, solvenți și antigel. Formulare custom pe baza analizelor de la sediul clientului.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
