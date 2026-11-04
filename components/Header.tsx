"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { categories } from "@/lib/content";
import { siteConfig } from "@/lib/site";

const nav = [
  { href: "/ro/", label: "Acasă" },
  { href: "/ro/prod/", label: "Catalog" },
  { href: "/ro/date-contact/", label: "Contact" },
  { href: "/ro/cerere-oferta/", label: "Solicită ofertă" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/ro/") return pathname === "/ro" || pathname === "/ro/";
    return pathname?.startsWith(href.replace(/\/$/, "")) ?? false;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-steel-950/90 text-steel-100 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/ro/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={160}
            height={48}
            className="h-10 w-auto object-contain sm:h-11"
            unoptimized
            priority
          />
          <span className="hidden font-serif text-lg tracking-tight text-white sm:block">
            Chemical System
          </span>
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
                      ? "text-amber-300"
                      : "text-steel-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
                {catalogOpen && (
                  <div className="absolute left-0 top-full min-w-56 border border-white/10 bg-steel-900 py-2 shadow-xl">
                    {categories.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/ro/prod/${c.slug}/`}
                        className="block px-4 py-2 text-sm text-steel-300 hover:bg-steel-800 hover:text-white"
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
                    ? "text-amber-300"
                    : "text-steel-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
          <a
            href={siteConfig.contact.phoneHref}
            className="ml-2 border border-amber-400/40 bg-amber-500/10 px-3 py-2 text-sm text-amber-300 transition hover:bg-amber-500/20"
          >
            {siteConfig.contact.phone}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center border border-white/15 px-3 py-2 text-sm text-white lg:hidden"
          aria-expanded={open}
          aria-label="Meniu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Închide" : "Meniu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-steel-950 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-2 py-2 text-steel-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <p className="mt-2 px-2 text-xs uppercase tracking-wider text-steel-400">
              Categorii
            </p>
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/ro/prod/${c.slug}/`}
                className="px-2 py-2 text-sm text-steel-300"
                onClick={() => setOpen(false)}
              >
                {c.name}
              </Link>
            ))}
            <a
              href={siteConfig.contact.phoneHref}
              className="mt-2 px-2 py-2 text-amber-300"
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
