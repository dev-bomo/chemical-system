import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductBody } from "@/components/ProductBody";
import { getProduct, products, productHref } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

type Params = Promise<{ segment: string; pathSegment: string }>;

export function generateStaticParams() {
  return products.map((p) => ({
    segment: p.slug,
    pathSegment: p.pathSegment,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { segment, pathSegment } = await params;
  const product = getProduct(segment, pathSegment);
  if (!product) return {};
  return {
    title: product.name,
    description: product.metaDescription,
    alternates: {
      canonical: absoluteUrl(productHref(product)),
    },
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  const { segment, pathSegment } = await params;
  const product = getProduct(segment, pathSegment);
  if (!product) notFound();

  const related = products
    .filter(
      (p) =>
        p.categoryBase === product.categoryBase && p.slug !== product.slug,
    )
    .slice(0, 3);

  return (
    <div className="bg-steel-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <Breadcrumbs
          items={[
            { href: "/ro/", label: "Acasă" },
            { href: "/ro/prod/", label: "Catalog" },
            {
              href: `/ro/prod/${product.categorySlug}/`,
              label: product.categoryName,
            },
            { label: product.name },
          ]}
        />

        <div className="mt-8 grid gap-10 lg:grid-cols-[240px_1fr]">
          <div className="relative mx-auto aspect-square w-full max-w-[240px] overflow-hidden border border-line bg-white">
            {product.image && (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                unoptimized
                sizes="240px"
                priority
              />
            )}
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-600">
              {product.categoryName}
            </p>
            <h1 className="mt-2 font-serif text-4xl text-steel-900">
              {product.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              {product.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/ro/cerere-oferta/"
                className="bg-amber-500 px-5 py-3 text-sm font-semibold text-steel-950 hover:bg-amber-400"
              >
                Solicită ofertă
              </Link>
              {product.pdfs.map((pdf) => (
                <a
                  key={pdf.href}
                  href={pdf.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-steel-800/20 bg-white px-5 py-3 text-sm font-semibold text-steel-800 hover:border-steel-800/40"
                >
                  {pdf.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border border-line bg-white p-6 sm:p-8">
          <h2 className="font-serif text-2xl text-steel-900">
            Descriere tehnică
          </h2>
          <div className="mt-4">
            <ProductBody name={product.name} body={product.body} />
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="font-serif text-2xl text-steel-900">
              Produse asemănătoare
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={productHref(p)}
                    className="block border-t border-steel-800/15 pt-3 transition hover:border-amber-500"
                  >
                    <span className="font-medium text-steel-900">{p.name}</span>
                    <span className="mt-1 block line-clamp-2 text-sm text-muted">
                      {p.summary}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
