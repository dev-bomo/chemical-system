import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-6xl flex-col items-start justify-center px-4 py-20 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-blue">
        404
      </p>
      <h1 className="mt-2 font-serif text-4xl text-steel-900">
        Pagina nu a fost găsită
      </h1>
      <p className="mt-3 max-w-md text-muted">
        Verificați adresa sau reveniți la catalogul de produse.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/ro/"
          className="bg-brand-red px-5 py-3 text-sm font-semibold text-white hover:bg-amber-400"
        >
          Acasă
        </Link>
        <Link
          href="/ro/prod/"
          className="border border-steel-800/20 px-5 py-3 text-sm font-semibold text-steel-800"
        >
          Catalog
        </Link>
      </div>
    </div>
  );
}
