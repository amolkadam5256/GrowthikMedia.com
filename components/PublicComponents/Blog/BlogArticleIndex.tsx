import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog/types";
import { CATEGORIES } from "@/lib/blog/data";
import { formatDate } from "@/lib/blog/utils";

export default function BlogArticleIndex({
  posts,
  title = "All articles",
  description = "A compact index of every guide. Use this to jump to a topic without scrolling the full card grid.",
}: {
  posts: BlogPost[];
  title?: string;
  description?: string;
}) {
  const grouped = CATEGORIES.map((category) => ({
    category,
    posts: posts.filter((post) => post.category.slug === category.slug),
  })).filter((group) => group.posts.length > 0);

  return (
    <nav aria-label={title} className="overflow-hidden rounded-3xl border border-(--border) bg-(--surface)">
      <div className="flex flex-col gap-3 border-b border-(--border) px-5 py-5 md:flex-row md:items-end md:justify-between md:px-6">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-(--color-primary)">
            Article index
          </p>
          <h2 className="mt-1 text-xl font-black text-(--text-primary)">{title}</h2>
          <p className="mt-1 max-w-2xl text-sm text-(--text-secondary)">{description}</p>
        </div>
        <p className="text-sm font-bold text-(--text-secondary)">
          {posts.length} guides
        </p>
      </div>

      <div className="divide-y divide-(--border)">
        {grouped.map(({ category, posts: categoryPosts }) => (
          <div key={category.id} className="px-5 py-5 md:px-6">
            <div className="mb-3 flex items-center justify-between gap-3">
              <Link
                href={`/blog/${category.slug}/`}
                className="inline-flex items-center gap-2 text-sm font-black text-(--text-primary) hover:text-(--color-primary)"
              >
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: category.color }}
                  aria-hidden="true"
                />
                {category.name}
              </Link>
              <Link
                href={`/blog/${category.slug}/`}
                className="text-xs font-bold text-(--color-primary)"
              >
                View {category.name}
              </Link>
            </div>
            <ul className="space-y-2">
              {categoryPosts.map((post) => (
                <li key={post.id}>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="group flex items-center justify-between gap-4 rounded-xl px-3 py-2.5 transition-colors hover:bg-(--background)"
                  >
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold text-(--text-primary) group-hover:text-(--color-primary)">
                        {post.title}
                      </span>
                      <span className="mt-0.5 block text-xs text-(--text-secondary)">
                        {formatDate(post.updatedDate || post.publishDate)} · {post.readingTime} min
                      </span>
                    </span>
                    <ArrowRight
                      className="h-4 w-4 shrink-0 text-(--text-secondary) transition-transform group-hover:translate-x-0.5 group-hover:text-(--color-primary)"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
