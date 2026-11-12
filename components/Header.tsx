"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { categories } from "@/lib/content";
import { quoteHref, siteConfig } from "@/lib/site";

const nav = [
  { href: "/ro/", label: "Acasă" },
  { href: "/ro/prod/", label: "Catalog" },
  { href: "/ro/date-contact/", label: "Contact" },
  { href: quoteHref({ from: "header" }), label: "Solicită ofertă" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);

  const isActive = (href: string) => {
    const path = href.split("?")[0];
    if (path === "/ro/") return pathname === "/ro" || pathname === "/ro/";
    return pathname?.startsWith(path.replace(/\/$/, "")) ?? false;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 text-steel-900 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/ro/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src={siteConfig.logo}
            alt={siteConfig.legalName}
            width={280}
            height={48}
            className="h-9 w-auto object-contain sm:h-10"
            unoptimized
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.href === "/ro/prod/" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setCatalogOpen(true)}
                onMouseLeave={() => setCatalogOpen(false)}
              >
                <Link
                  href={item.href}
                  className={`rounded px-3 py-2 text-sm transition ${
                    isActive(item.href)
                      ? "font-semibold text-brand-red"
                      : "text-steel-700 hover:text-brand-black"
                  }`}
                >
                  {item.label}
                </Link>
                {catalogOpen && (
                  <div className="absolute left-0 top-full min-w-56 border border-line bg-white py-2 shadow-xl">
                    {categories.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/ro/prod/${c.slug}/`}
                        className="block px-4 py-2 text-sm text-steel-700 hover:bg-steel-50 hover:text-brand-black"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded px-3 py-2 text-sm transition ${
                  isActive(item.href)
                    ? "font-semibold text-brand-red"
                    : "text-steel-700 hover:text-brand-black"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
          <a
            href={siteConfig.contact.phoneHref}
            className="ml-2 border border-brand-blue/30 bg-brand-blue/5 px-3 py-2 text-sm font-medium text-brand-blue transition hover:bg-brand-blue/10"
          >
            {siteConfig.contact.phone}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center border border-line px-3 py-2 text-sm text-brand-black lg:hidden"
          aria-expanded={open}
          aria-label="Meniu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Închide" : "Meniu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-2 py-2 text-steel-800"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <p className="mt-2 px-2 text-xs uppercase tracking-wider text-brand-blue">
              Categorii
            </p>
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/ro/prod/${c.slug}/`}
                className="px-2 py-2 text-sm text-steel-700"
                onClick={() => setOpen(false)}
              >
                {c.name}
              </Link>
            ))}
            <a
              href={siteConfig.contact.phoneHref}
              className="mt-2 px-2 py-2 font-medium text-brand-blue"
              onClick={() => setOpen(false)}
            >
              Sună: {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
