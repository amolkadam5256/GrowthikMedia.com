"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, Clock, Heart, MessageCircle, BookmarkPlus } from "lucide-react";
import type { BlogPost } from "@/lib/blog/types";
import { formatDate, formatNumber, getInitials, stringToColor } from "@/lib/blog/utils";

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "featured" | "compact" | "horizontal";
  priority?: boolean;
}

// ─── Avatar Component ─────────────────────────────────────────────────────────
function AuthorAvatar({ name, size = 32 }: { name: string; size?: number }) {
  const bg = stringToColor(name);
  return (
    <div
      className="rounded-full flex items-center justify-center text-white font-bold shrink-0"
      style={{
        width: size,
        height: size,
        backgroundColor: bg,
        fontSize: size * 0.35,
        minWidth: size,
        minHeight: size,
      }}
      aria-label={name}
    >
      {getInitials(name)}
    </div>
  );
}

// ─── Category Badge ───────────────────────────────────────────────────────────
function CategoryBadge({ name, color }: { name: string; color: string }) {
  return (
    <span
      className="inline-block text-xs font-bold px-2.5 py-1 rounded-full"
      style={{ backgroundColor: `${color}18`, color }}
    >
      {name}
    </span>
  );
}

// ─── Default Card ─────────────────────────────────────────────────────────────
function DefaultCard({ post, priority }: { post: BlogPost; priority?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden border border-(--border) bg-(--surface) hover:border-(--color-primary)/30 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden" style={{ paddingBottom: "56.25%" }}>
        <Image
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority={priority}
        />
        {/* Trending badge */}
        {post.trending && (
          <div className="absolute top-3 left-3 bg-red-600/90 backdrop-blur-md text-white px-2.5 py-1 text-[10px] sm:text-xs font-black uppercase tracking-widest rounded-full border border-white/20 shadow-lg flex items-center gap-1.5 z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 animate-[pulse_1.5s_ease-in-out_infinite]"></span>
            Trending
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Category + Read time */}
        <div className="flex items-center justify-between mb-3">
          <CategoryBadge name={post.category.name} color={post.category.color} />
          <span className="flex items-center gap-1 text-xs font-medium text-(--text-secondary)">
            <Clock className="w-3 h-3" />
            {post.readingTime} min
          </span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-base leading-snug text-(--text-primary) group-hover:text-(--color-primary) transition-colors mb-2 line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-(--text-secondary) leading-relaxed line-clamp-2 mb-4 flex-1">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-(--border)">
          <div className="flex items-center gap-2 min-w-0">
            <AuthorAvatar name={post.author.name} size={28} />
            <div className="min-w-0">
              <p className="text-xs font-bold text-(--text-primary) truncate">{post.author.name}</p>
              <p className="text-xs text-(--text-secondary)">{formatDate(post.publishDate)}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs text-(--text-secondary) shrink-0">
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {formatNumber(post.views)}
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle className="w-3 h-3" />
              {post.commentsCount}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ─── Featured Hero Card ───────────────────────────────────────────────────────
function FeaturedCard({ post, priority }: { post: BlogPost; priority?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative rounded-2xl overflow-hidden block"
      style={{ minHeight: 480 }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          fill
          sizes="100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-10">
        <div className="flex items-center gap-3 mb-4">
          <CategoryBadge name={post.category.name} color={post.category.color} />
          <span className="text-white/70 text-xs font-medium flex items-center gap-1">
            <Clock className="w-3 h-3" /> {post.readingTime} min read
          </span>
          {post.trending && (
            <span className="bg-red-600/90 backdrop-blur-md text-white text-[10px] sm:text-xs font-black uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/20 shadow-lg flex items-center gap-1.5 z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 animate-[pulse_1.5s_ease-in-out_infinite]"></span>
              Trending
            </span>
          )}
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight mb-4 group-hover:text-(--color-primary-light) transition-colors">
          {post.title}
        </h2>

        <p className="text-white/75 text-sm md:text-base leading-relaxed mb-6 max-w-2xl line-clamp-2">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AuthorAvatar name={post.author.name} size={36} />
            <div>
              <p className="text-sm font-bold text-white">{post.author.name}</p>
              <p className="text-xs text-white/60">{formatDate(post.publishDate)}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-white/70 text-sm">
            <span className="flex items-center gap-1.5">
              <Eye className="w-4 h-4" />
              {formatNumber(post.views)}
            </span>
            <span className="flex items-center gap-1.5">
              <Heart className="w-4 h-4" />
              {formatNumber(post.likesCount)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ─── Compact Card ─────────────────────────────────────────────────────────────
function CompactCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex gap-3 items-start hover:opacity-80 transition-opacity"
    >
      <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
        <Image
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          fill
          sizes="64px"
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: post.category.color }} />
          <p className="text-[10px] font-black uppercase tracking-wider text-(--text-secondary)">
            {post.category.name}
          </p>
        </div>
        <h4 className="text-[13px] font-bold text-(--text-primary) leading-[1.3] line-clamp-2 group-hover:text-(--color-primary) transition-colors mb-1.5 pr-2">
          {post.title}
        </h4>
        <p className="text-[11px] text-(--text-secondary) font-medium">{formatDate(post.publishDate)}</p>
      </div>
    </Link>
  );
}

// ─── Horizontal Card ─────────────────────────────────────────────────────────
function HorizontalCard({ post, priority }: { post: BlogPost; priority?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex gap-4 rounded-2xl overflow-hidden border border-(--border) bg-(--surface) hover:border-(--color-primary)/30 hover:shadow-lg transition-all duration-300 p-4"
    >
      <div className="relative w-32 md:w-40 rounded-xl overflow-hidden shrink-0" style={{ minHeight: 96 }}>
        <Image
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          fill
          sizes="160px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority={priority}
        />
      </div>
      <div className="flex flex-col justify-between flex-1 min-w-0 py-1">
        <div>
          <CategoryBadge name={post.category.name} color={post.category.color} />
          <h3 className="font-bold text-sm md:text-base text-(--text-primary) leading-snug mt-2 line-clamp-2 group-hover:text-(--color-primary) transition-colors">
            {post.title}
          </h3>
        </div>
        <div className="flex items-center gap-3 text-xs text-(--text-secondary) mt-2">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> {post.readingTime} min
          </span>
          <span>·</span>
          <span>{formatDate(post.publishDate)}</span>
        </div>
      </div>
    </Link>
  );
}

// ─── BlogCard Selector ────────────────────────────────────────────────────────
export default function BlogCard({ post, variant = "default", priority }: BlogCardProps) {
  if (variant === "featured") return <FeaturedCard post={post} priority={priority} />;
  if (variant === "compact") return <CompactCard post={post} />;
  if (variant === "horizontal") return <HorizontalCard post={post} priority={priority} />;
  return <DefaultCard post={post} priority={priority} />;
}

export { AuthorAvatar, CategoryBadge };
