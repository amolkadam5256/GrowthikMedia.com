import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog/types";
import BlogCard from "./BlogCard";

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts.length) return null;

  return (
    <section className="mt-16 pt-12 border-t border-(--border)">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-(--text-primary)">
            Related Articles
          </h2>
          <p className="text-(--text-secondary) font-medium text-sm mt-1">
            Continue reading — you might enjoy these too
          </p>
        </div>
        <Link
          href="/blog"
          className="hidden sm:flex items-center gap-1.5 text-sm font-bold text-(--color-primary) hover:opacity-70 transition-opacity"
        >
          View all <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 3).map((post) => (
          <BlogCard key={post.id} post={post} variant="default" />
        ))}
      </div>

      <div className="text-center mt-8 sm:hidden">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-(--border) rounded-xl font-bold text-sm text-(--text-primary) hover:border-(--color-primary)/50 transition-all"
        >
          View all articles <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
