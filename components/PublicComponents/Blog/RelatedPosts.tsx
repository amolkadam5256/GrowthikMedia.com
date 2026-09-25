import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog/types";
import BlogCard from "./BlogCard";
import BlogHubCTA from "./BlogHubCTA";

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts.length) return null;

  return (
    <section>
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-(--color-primary)">
            Keep reading
          </p>
          <h2 className="mt-1 text-xl font-black text-(--text-primary) md:text-2xl">
            More marketing case studies and strategies
          </h2>
          <p className="mt-1 text-sm font-medium text-(--text-secondary)">
            Related guides that pair with this topic. No repeat of the same article.
          </p>
        </div>
        <Link
          href="/blog/"
          className="hidden items-center gap-1.5 text-sm font-bold text-(--color-primary) hover:opacity-70 sm:flex"
        >
          View all articles <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 3).map((post) => (
          <BlogCard key={post.id} post={post} variant="default" />
        ))}
      </div>

      <div className="mt-10">
        <BlogHubCTA
          title="Want help applying this to your business?"
          description="Growthik Media can connect the lesson in this article to SEO, ads or a better website."
          href="/contact/"
          label="Talk to Growthik Media"
          secondaryHref="/blog/"
          secondaryLabel="Browse all articles"
        />
      </div>

      <div className="mt-8 text-center sm:hidden">
        <Link
          href="/blog/"
          className="inline-flex items-center gap-2 rounded-xl border-2 border-(--border) px-6 py-3 text-sm font-bold text-(--text-primary) hover:border-(--color-primary)/50"
        >
          View all articles <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
