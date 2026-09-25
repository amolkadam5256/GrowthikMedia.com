import Link from "next/link";

export type BlogBreadcrumbItem = {
  label: string;
  href?: string;
};

export default function BlogBreadcrumb({ items }: { items: BlogBreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm font-medium text-(--text-secondary)">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {item.href && index < items.length - 1 ? (
              <Link href={item.href} className="transition-colors hover:text-(--color-primary)">
                {item.label}
              </Link>
            ) : (
              <span className="max-w-[240px] truncate text-(--text-primary)">{item.label}</span>
            )}
            {index < items.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
