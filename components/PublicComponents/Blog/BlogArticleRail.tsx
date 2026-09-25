import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog/types";
import type { BlogCategoryPage } from "@/lib/blog/types";
import BlogCard from "./BlogCard";

export default function BlogArticleRail({
  related,
  category,
}: {
  related: BlogPost[];
  category?: BlogCategoryPage;
}) {
  return (
    <aside className="space-y-6 lg:sticky lg:top-28">
      <div className="rounded-2xl border border-(--border) bg-(--surface) p-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-(--color-primary)">
          On this page
        </p>
        <p className="mt-2 text-sm font-black text-(--text-primary)">
          Read the guide, then take a next step.
        </p>
        <div className="mt-4 space-y-2 text-sm font-semibold">
          <a href="#article-body" className="block text-(--text-secondary) hover:text-(--color-primary)">
            Article
          </a>
          <a href="#article-faq" className="block text-(--text-secondary) hover:text-(--color-primary)">
            Questions
          </a>
          <a href="#related-articles" className="block text-(--text-secondary) hover:text-(--color-primary)">
            Related reading
          </a>
        </div>
      </div>

      {related.length > 0 && (
        <div className="rounded-2xl border border-(--border) bg-(--surface) p-5">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-(--color-primary)">
            Related articles
          </p>
          <div className="space-y-4">
            {related.slice(0, 3).map((post) => (
              <BlogCard key={post.id} post={post} variant="compact" />
            ))}
          </div>
        </div>
      )}

      <div className="rounded-2xl border border-(--color-primary)/20 bg-(--surface) p-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-(--color-primary)">
          Next step
        </p>
        <p className="mt-2 text-base font-black text-(--text-primary)">
          {category ? `Need ${category.name} help?` : "Need help applying this?"}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">
          Get a free website and SEO audit from Growthik Media.
        </p>
        <Link
          href={category?.serviceHref || "/audit/"}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-(--color-primary)"
        >
          {category?.serviceLabel || "Get free audit"}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </aside>
  );
}
