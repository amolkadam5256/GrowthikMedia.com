import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogInlineCTA({
  title,
  description,
  href = "/audit/",
  label = "Get a free SEO audit",
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  description: string;
  href?: string;
  label?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <aside className="my-10 rounded-2xl border border-(--color-primary)/20 bg-(--surface) p-5 md:p-6">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-(--color-primary)">
        Next step
      </p>
      <h3 className="mt-2 text-lg font-black text-(--text-primary)">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">{description}</p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <Link
          href={href}
          className="blog-cta-link blog-cta-primary inline-flex min-h-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-(--color-primary) px-5 py-3 text-sm font-bold text-white hover:opacity-90"
        >
          {label}
          <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
        </Link>
        {secondaryHref && secondaryLabel && (
          <Link
            href={secondaryHref}
            className="blog-cta-link inline-flex min-h-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-(--border) px-5 py-3 text-sm font-bold text-(--text-primary) hover:border-(--color-primary)/40"
          >
            {secondaryLabel}
          </Link>
        )}
      </div>
    </aside>
  );
}
