"use client";

import React, { useMemo, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogFilters, BlogPost } from "@/lib/blog/types";
import { BLOG_CATEGORY_PAGES, BLOG_HUB_FAQS } from "@/lib/blog/categories";
import { filterAndSortPosts, getRecommendedPosts } from "@/lib/blog/data";
import BlogCard from "@/components/PublicComponents/Blog/BlogCard";
import BlogBreadcrumb from "@/components/PublicComponents/Blog/BlogBreadcrumb";
import BlogHubCTA from "@/components/PublicComponents/Blog/BlogHubCTA";
import BlogArticleIndex from "@/components/PublicComponents/Blog/BlogArticleIndex";
import SearchAndFilter from "@/components/PublicComponents/Blog/SearchAndFilter";
import BlogSidebar from "@/components/PublicComponents/Blog/BlogSidebar";
import { useBlogPostsWithStats } from "@/components/PublicComponents/Blog/useBlogStats";

const POSTS_PER_PAGE = 6;

const DEFAULT_FILTERS: BlogFilters = {
  search: "",
  category: "",
  tag: "",
  author: "",
  sort: "newest",
  readingTime: "any",
};

export default function BlogListingPage({ posts }: { posts: BlogPost[] }) {
  const [filters, setFilters] = useState<BlogFilters>(DEFAULT_FILTERS);
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const postsWithStats = useBlogPostsWithStats(posts);

  const filteredPosts = useMemo(
    () => filterAndSortPosts(postsWithStats, filters),
    [filters, postsWithStats],
  );

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;
  const recommended = useMemo(
    () =>
      getRecommendedPosts(undefined, 4).filter(
        (post) => !visiblePosts.some((visible) => visible.id === post.id),
      ).slice(0, 3),
    [visiblePosts],
  );

  const handleFiltersChange = useCallback((newFilters: BlogFilters) => {
    setFilters(newFilters);
    setVisibleCount(POSTS_PER_PAGE);
  }, []);

  return (
    <div className="blog-page min-h-screen bg-(--background)">
      <section className="border-b border-(--border) bg-(--background) py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <BlogBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-(--color-primary)">
            Blog / Insights
          </p>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-(--text-primary) md:text-5xl">
            Digital Marketing & SEO Insights for Pune Businesses
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-(--text-secondary)">
            Practical guides on SEO, Local SEO, Google Ads, Meta Ads, AI Search, websites and
            digital marketing for Pune businesses.
          </p>

          <nav aria-label="Blog categories" className="mt-8 flex flex-wrap gap-2.5">
            <Link
              href="/blog/"
              className="rounded-full bg-(--text-primary) px-4 py-2 text-sm font-bold text-(--background)"
            >
              All
            </Link>
            {BLOG_CATEGORY_PAGES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/${cat.slug}/`}
                className="rounded-full border border-(--border) bg-(--surface) px-4 py-2 text-sm font-bold text-(--text-primary) transition-colors hover:bg-(--background)"
              >
                {cat.name}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        <div className="mb-8">
          <SearchAndFilter
            filters={filters}
            onFiltersChange={handleFiltersChange}
            totalResults={filteredPosts.length}
            categoryAsLinks
          />
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_300px] lg:gap-14">
          <div>
            {filteredPosts.length === 0 ? (
              <div className="py-20 text-center">
                <h2 className="mb-2 text-xl font-black text-(--text-primary)">No articles found</h2>
                <p className="mb-6 font-medium text-(--text-secondary)">
                  Try adjusting your search or filters
                </p>
                <button
                  type="button"
                  onClick={() => handleFiltersChange(DEFAULT_FILTERS)}
                  className="rounded-xl bg-(--color-primary) px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6 text-sm font-medium text-(--text-secondary)">
                  Showing{" "}
                  <span className="font-black text-(--text-primary)">
                    {Math.min(visibleCount, filteredPosts.length)}
                  </span>{" "}
                  of{" "}
                  <span className="font-black text-(--text-primary)">{filteredPosts.length}</span>{" "}
                  articles
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {visiblePosts.map((post, idx) => (
                    <BlogCard
                      key={post.id}
                      post={post}
                      variant="default"
                      priority={idx < 2}
                    />
                  ))}
                </div>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  {hasMore && (
                    <button
                      type="button"
                      onClick={() => setVisibleCount((count) => count + POSTS_PER_PAGE)}
                      className="group inline-flex items-center gap-2 rounded-xl border-2 border-(--border) px-8 py-3.5 text-sm font-bold text-(--text-primary) transition-all hover:border-(--color-primary)/50 hover:bg-(--surface)"
                    >
                      Show more articles
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </button>
                  )}
                  <Link
                    href="/contact/"
                    className="inline-flex items-center gap-2 rounded-xl bg-(--color-primary) px-8 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
                  >
                    Talk to Growthik Media
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </>
            )}

            <div className="mt-12">
              <BlogHubCTA
                secondaryHref="/services/seo/"
                secondaryLabel="See SEO services"
              />
            </div>

            {recommended.length > 0 && (
              <section className="mt-14">
                <div className="mb-6 flex items-end justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-black text-(--text-primary)">Related reading</h2>
                    <p className="mt-1 text-sm text-(--text-secondary)">
                      Useful guides that are not already in the list above.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {recommended.map((post) => (
                    <BlogCard key={`recommended-${post.id}`} post={post} variant="horizontal" />
                  ))}
                </div>
              </section>
            )}

            <section className="mt-14">
              <h2 className="text-2xl font-black text-(--text-primary)">Common questions</h2>
              <div className="mt-5 space-y-4">
                {BLOG_HUB_FAQS.map((faq) => (
                  <div key={faq.question} className="rounded-xl border border-(--border) bg-(--surface) p-5">
                    <h3 className="font-bold text-(--text-primary)">{faq.question}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="mt-14">
              <BlogArticleIndex posts={posts} />
            </div>
          </div>

          <div className="lg:self-start">
            <BlogSidebar variant="listing" />
          </div>
        </div>
      </div>
    </div>
  );
}
