"use client";
import React, { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Sparkles } from "lucide-react";
import type { BlogFilters } from "@/lib/blog/types";
import {
  BLOG_POSTS,
  getFeaturedPosts,
  filterAndSortPosts,
  CATEGORIES,
} from "@/lib/blog/data";
import BlogCard from "@/components/PublicComponents/Blog/BlogCard";
import SearchAndFilter from "@/components/PublicComponents/Blog/SearchAndFilter";

// Sidebar content is off-screen on mobile and non-critical on desktop first paint.
const BlogSidebar = dynamic(() => import("@/components/PublicComponents/Blog/BlogSidebar"), {
  ssr: false,
});

const POSTS_PER_PAGE = 6;

const DEFAULT_FILTERS: BlogFilters = {
  search: "",
  category: "",
  tag: "",
  author: "",
  sort: "newest",
  readingTime: "any",
};

export default function BlogListingPage() {
  const [filters, setFilters] = useState<BlogFilters>(DEFAULT_FILTERS);
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const featured = useMemo(() => getFeaturedPosts().slice(0, 1)[0], []);

  // Apply filters
  const filteredPosts = useMemo(() => {
    const isFiltered =
      filters.search || filters.category || filters.tag || filters.author;
    const posts = isFiltered
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.id !== featured?.id);
    return filterAndSortPosts(posts, filters);
  }, [filters, featured]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;
  const isFiltered = useMemo(
    () =>
      !!(filters.search || filters.category || filters.tag || filters.author),
    [filters.search, filters.category, filters.tag, filters.author],
  );

  const handleFiltersChange = useCallback((newFilters: BlogFilters) => {
    setFilters(newFilters);
    setVisibleCount(POSTS_PER_PAGE);
  }, []);

  return (
    <div className="min-h-screen bg-(--background) pt-18">
      {/* ──────────────── HERO SECTION ──────────────── */}
      <section className="relative overflow-hidden border-b border-(--border) bg-(--background) py-20 lg:py-32">
        {/* Abstract animated background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-(--color-primary)/30 to-rose-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-10000" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 to-purple-600/10 rounded-full blur-[100px] mix-blend-screen" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
          <div
            className="absolute inset-0 opacity-20 dark:opacity-20 opacity-50"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
              backgroundSize: "4rem 4rem",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          {/* Top label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--surface) border border-(--border) shadow-sm dark:shadow-xl mb-8 text-sm font-bold text-(--text-primary) tracking-wide uppercase">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Growthik Media Insights
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left text */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 text-(--text-primary)">
                Master the Art of{" "}
                <span className="text-(--color-primary)">Digital Growth</span>
              </h1>
              <p className="text-lg md:text-xl text-(--text-secondary) font-medium leading-relaxed mb-10 max-w-lg">
                Actionable playbooks on SEO, performance marketing, and revenue
                infrastructure. Built for founders who want to scale.
              </p>

              {/* Category pills */}
              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="/blog"
                  className="px-5 py-2.5 rounded-full bg-(--text-primary) text-(--background) text-sm font-black hover:scale-105 transition-transform"
                >
                  All Topics
                </Link>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() =>
                      handleFiltersChange({
                        ...DEFAULT_FILTERS,
                        category: cat.slug,
                      })
                    }
                    className="px-5 py-2.5 rounded-full text-sm font-bold border border-(--border) bg-(--surface) text-(--text-primary) hover:bg-(--background) transition-colors"
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Right - Featured Hero Post */}
            {featured && !isFiltered && (
              <div className="relative lg:ml-auto w-full max-w-lg group">
                <div className="absolute -inset-4 bg-gradient-to-r from-(--color-primary) to-orange-500 rounded-[2.5rem] opacity-20 group-hover:opacity-30 blur-2xl transition-opacity duration-500" />
                <div className="relative transform transition-transform duration-500 group-hover:-translate-y-2">
                  <BlogCard post={featured} variant="featured" priority />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ──────────────── MAIN CONTENT ──────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        {/* Search + Filters */}
        <div className="mb-8">
          <SearchAndFilter
            filters={filters}
            onFiltersChange={handleFiltersChange}
            totalResults={filteredPosts.length}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-14 items-start">
          {/* ── Blog Grid (Left) ── */}
          <div className="order-2 lg:order-1">
            {visiblePosts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-5xl mb-4">🔍</p>
                <h3 className="text-xl font-black text-(--text-primary) mb-2">
                  No articles found
                </h3>
                <p className="text-(--text-secondary) font-medium mb-6">
                  Try adjusting your search or filters
                </p>
                <button
                  onClick={() => handleFiltersChange(DEFAULT_FILTERS)}
                  className="px-6 py-3 bg-(--color-primary) text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <>
                {/* Results count */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-sm text-(--text-secondary) font-medium">
                    Showing{" "}
                    <span className="font-black text-(--text-primary)">
                      {Math.min(visibleCount, filteredPosts.length)}
                    </span>{" "}
                    of{" "}
                    <span className="font-black text-(--text-primary)">
                      {filteredPosts.length}
                    </span>{" "}
                    articles
                  </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {visiblePosts.map((post, idx) => (
                    <BlogCard
                      key={post.id}
                      post={post}
                      variant="default"
                      priority={idx < 2}
                    />
                  ))}
                </div>

                {/* Load More */}
                {hasMore && (
                  <div className="mt-10 text-center">
                    <button
                      onClick={() => setVisibleCount((c) => c + POSTS_PER_PAGE)}
                      className="px-10 py-4 border-2 border-(--border) text-(--text-primary) font-bold rounded-xl text-sm hover:border-(--color-primary)/50 hover:bg-(--surface) transition-all group inline-flex items-center gap-2"
                    >
                      Load More Articles
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* ── Sidebar (Right) ── */}
          <div className="order-1 lg:order-2 sticky top-28">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
