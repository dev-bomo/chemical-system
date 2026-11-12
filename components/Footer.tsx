import Link from "next/link";
import { categories } from "@/lib/content";
import { quoteHref, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-brand-black text-steel-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-white">{siteConfig.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-steel-400">
            {siteConfig.legalName}
            <br />
            Producător de diluanți, solvenți și antigel din {siteConfig.founded}.
          </p>
          <p className="mt-4 text-sm text-steel-400">
            CUI: {siteConfig.registry.cui}
            <br />
            {siteConfig.registry.j}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-red">
            Catalog
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/ro/prod/${c.slug}/`}
                  className="hover:text-white"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              {siteConfig.address.street}, {siteConfig.address.region}
            </li>
            <li>{siteConfig.contact.person}</li>
            <li>
              <a
                href={siteConfig.contact.phoneHref}
                className="hover:text-white"
              >
                {siteConfig.contact.phone}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.contact.emailHref}
                className="hover:text-white"
              >
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="pt-2">
              <Link href={quoteHref({ from: "footer" })} className="font-medium text-brand-red hover:text-white">
                Solicită ofertă →
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-steel-600">
        © {new Date().getFullYear()} {siteConfig.legalName}
      </div>
    </footer>
  );
}
