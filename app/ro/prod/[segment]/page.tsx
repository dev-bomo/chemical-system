import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  categories,
  getCategory,
  getProductsByCategory,
  productHref,
} from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

type Params = Promise<{ segment: string }>;

export function generateStaticParams() {
  return categories.map((c) => ({ segment: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { segment } = await params;
  const cat = getCategory(segment);
  if (!cat) return {};
  return {
    title: cat.name,
    description: cat.description,
    alternates: { canonical: absoluteUrl(`/ro/prod/${cat.slug}/`) },
  };
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { segment } = await params;
  const cat = getCategory(segment);
  if (!cat || cat.slug !== segment) notFound();

  const items = getProductsByCategory(cat.slug);

  return (
    <div className="bg-steel-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <Breadcrumbs
          items={[
            { href: "/ro/", label: "Acasă" },
            { href: "/ro/prod/", label: "Catalog" },
            { label: cat.name },
          ]}
        />
        <h1 className="mt-4 font-serif text-4xl text-steel-900">{cat.name}</h1>
        <p className="mt-3 max-w-2xl text-muted">{cat.description}</p>

        <ul className="mt-10 divide-y divide-line border-y border-line bg-white">
          {items.map((p) => (
            <li key={p.slug}>
              <Link
                href={productHref(p)}
                className="flex flex-col gap-4 px-4 py-5 transition hover:bg-steel-50 sm:flex-row sm:items-center sm:px-6"
              >
                <div className="relative h-24 w-24 shrink-0 overflow-hidden bg-steel-100">
                  {p.image && (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover"
                      unoptimized
                      sizes="96px"
                    />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="font-serif text-xl text-steel-900">{p.name}</h2>
                  <p className="mt-1 line-clamp-2 text-sm text-muted">
                    {p.summary}
                  </p>
                </div>
                <span className="text-sm font-medium text-brand-blue">
                  Detalii →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Link
            href="/ro/cerere-oferta/"
            className="inline-block bg-brand-red px-5 py-3 text-sm font-semibold text-white hover:bg-amber-400"
          >
            Solicită ofertă pentru {cat.name.toLowerCase()}
          </Link>
        </div>
      </div>
    </div>
  );
}
