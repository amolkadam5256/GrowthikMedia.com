"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return null;
  }

  const items = [{ label: "Home", href: "/" }, ...segments.map((segment, index) => ({
    label: segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    href: `/${segments.slice(0, index + 1).join("/")}/`,
  }))];

  return (
    <nav aria-label="Breadcrumb" className="border-b border-slate-200 bg-white/80 px-4 py-3 text-sm backdrop-blur sm:px-6 lg:px-8">
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 text-slate-600">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index < items.length - 1 ? (
              <>
                <Link href={item.href} className="transition hover:text-red-600">
                  {item.label}
                </Link>
                <span aria-hidden="true">/</span>
              </>
            ) : (
              <span className="font-semibold text-slate-900">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
