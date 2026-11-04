import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-steel-950 text-white">
      <div className="absolute inset-0">
        {siteConfig.heroImages.map((src, i) => (
          <div
            key={src}
            className="hero-bg-slide absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${src})`,
              animationDelay: `${i * 6}s`,
            }}
            aria-hidden
          />
        ))}
        <div className="hero-overlay absolute inset-0" />
        <div className="texture-grid absolute inset-0 opacity-40" />
      </div>

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
        <p className="animate-fade-up font-serif text-4xl tracking-tight text-white sm:text-6xl md:text-7xl">
          Chemical System
        </p>
        <h1 className="animate-fade-up-delay mt-5 max-w-2xl font-serif text-2xl leading-snug text-steel-100 sm:text-3xl md:text-4xl">
          Diluanți și antigel formulate pe măsură, din 1998
        </h1>
        <p className="animate-fade-up-delay-2 mt-4 max-w-xl text-base leading-relaxed text-steel-300 sm:text-lg">
          Ne deplasăm la sediul clientului, analizăm materialele folosite și
          propunem soluția optimă — când ai nevoie de ea.
        </p>
        <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-3">
          <Link
            href="/ro/cerere-oferta/"
            className="bg-amber-500 px-5 py-3 text-sm font-semibold text-steel-950 transition hover:bg-amber-400"
          >
            Solicită ofertă
          </Link>
          <Link
            href="/ro/prod/"
            className="border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Vezi catalogul
          </Link>
          <a
            href={siteConfig.contact.phoneHref}
            className="px-5 py-3 text-sm font-semibold text-amber-300 transition hover:text-amber-200"
          >
            {siteConfig.contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
