import React from "react";
import Link from "next/link";
import {
  TrendingUp,
  Clock,
  Bookmark,
  Flame,
  ArrowRight,
  Tag,
  Mail,
  Rss,
} from "lucide-react";
import type { BlogPost } from "@/lib/blog/types";
import { getTrendingPosts, getLatestPosts, CATEGORIES, TAGS } from "@/lib/blog/data";
import { formatDate, formatNumber } from "@/lib/blog/utils";
import BlogCard from "./BlogCard";
import NewsletterForm from "./NewsletterForm";

interface BlogSidebarProps {
  currentPostId?: string;
}

// ─── Section Header ───────────────────────────────────────────────────────────
function SidebarSection({ title, icon: Icon, children }: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-(--surface) border border-(--border) rounded-2xl p-5">
      <h3 className="flex items-center gap-2 text-sm font-black text-(--text-primary) uppercase tracking-wider mb-4">
        <Icon className="w-4 h-4 text-(--color-primary)" />
        {title}
      </h3>
      {children}
    </div>
  );
}

// ─── Trending Posts ───────────────────────────────────────────────────────────
function TrendingPosts({ currentPostId }: { currentPostId?: string }) {
  const posts = getTrendingPosts()
    .filter((p) => p.id !== currentPostId)
    .slice(0, 3);

  return (
    <SidebarSection title="Trending" icon={Flame}>
      <div className="space-y-4">
        {posts.map((post, idx) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group flex gap-4 items-center p-2 -mx-2 rounded-xl hover:bg-(--background) transition-colors"
          >
            <span
              className="text-3xl font-black shrink-0 w-8 text-center"
              style={{
                color: idx === 0 ? "var(--color-primary)" : "var(--border)",
                opacity: idx === 0 ? 1 : 0.5,
              }}
            >
              {idx + 1}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: post.category.color }} />
                <p className="text-[10px] uppercase tracking-widest font-black text-(--text-secondary)">
                  {post.category.name}
                </p>
              </div>
              <p className="text-[13px] font-bold text-(--text-primary) leading-snug line-clamp-2 group-hover:text-(--color-primary) transition-colors mb-1 pr-2">
                {post.title}
              </p>
              <div className="flex items-center gap-2 text-[10px] text-(--text-secondary) font-medium">
                <Clock className="w-2.5 h-2.5" />
                {post.readingTime} min <span className="text-(--border)">•</span> {formatNumber(post.views)} views
              </div>
            </div>
          </Link>
        ))}
      </div>
    </SidebarSection>
  );
}

// ─── Latest Posts ─────────────────────────────────────────────────────────────
function LatestPosts({ currentPostId }: { currentPostId?: string }) {
  const posts = getLatestPosts()
    .filter((p) => p.id !== currentPostId)
    .slice(0, 4);

  return (
    <SidebarSection title="Latest Articles" icon={Rss}>
      <div className="space-y-4">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} variant="compact" />
        ))}
      </div>
    </SidebarSection>
  );
}

// ─── Categories ───────────────────────────────────────────────────────────────
function CategoriesWidget() {
  return (
    <SidebarSection title="Categories" icon={Bookmark}>
      <div className="space-y-2">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            href={`/blog?category=${cat.slug}`}
            className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-(--background) transition-colors group"
          >
            <span className="flex items-center gap-2 text-sm font-semibold text-(--text-primary) group-hover:text-(--color-primary) transition-colors">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: cat.color }}
              />
              {cat.name}
            </span>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-(--background) text-(--text-secondary) border border-(--border)">
              {cat.count}
            </span>
          </Link>
        ))}
        <Link
          href="/blog"
          className="flex items-center gap-1 text-xs font-bold text-(--color-primary) hover:opacity-70 transition-opacity mt-2 pt-2 border-t border-(--border)"
        >
          View all categories <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </SidebarSection>
  );
}


// ─── Main Sidebar ─────────────────────────────────────────────────────────────
export default function BlogSidebar({ currentPostId }: BlogSidebarProps) {
  return (
    <aside className="space-y-6">
      {/* Trending */}
      <TrendingPosts currentPostId={currentPostId} />

      {/* Latest */}
      <LatestPosts currentPostId={currentPostId} />

      {/* Categories */}
      <CategoriesWidget />
    </aside>
  );
}
