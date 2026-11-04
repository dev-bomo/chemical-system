import Link from "next/link";

export type Crumb = { href?: string; label: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-2">
            {i > 0 && <span className="text-steel-400">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-steel-900">
                {item.label}
              </Link>
            ) : (
              <span className="text-steel-800">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
