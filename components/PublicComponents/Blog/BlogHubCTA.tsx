import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogHubCTA({
  title = "Need help growing your business online?",
  description = "Get practical SEO, Google Ads and digital marketing support from Growthik Media.",
  href = "/contact/",
  label = "Talk to Growthik Media",
  secondaryHref = "/blog/",
  secondaryLabel = "Browse more articles",
}: {
  title?: string;
  description?: string;
  href?: string;
  label?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <aside className="relative overflow-hidden rounded-3xl border border-(--color-primary)/20 bg-(--surface) p-6 md:p-8">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-(--color-primary)/8 blur-3xl" />
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-(--color-primary)">
        Related next step
      </p>
      <h2 className="mt-2 max-w-xl text-xl font-black text-(--text-primary) md:text-2xl">{title}</h2>
      <p className="mt-2 max-w-2xl text-sm font-medium leading-relaxed text-(--text-secondary)">
        {description}
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Link
          href={href}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-(--color-primary) px-5 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
        >
          {label}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <Link
          href={secondaryHref}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-(--border) px-5 py-3 text-sm font-bold text-(--text-primary) transition-colors hover:border-(--color-primary)/40"
        >
          {secondaryLabel}
        </Link>
      </div>
    </aside>
  );
}
