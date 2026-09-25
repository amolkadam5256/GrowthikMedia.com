"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blog/types";
import { formatDate } from "@/lib/blog/utils";

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "featured" | "compact" | "horizontal";
  priority?: boolean;
}

function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="inline-block text-[11px] font-bold tracking-[0.14em] uppercase text-(--color-primary)">
      {label}
    </span>
  );
}

function DefaultCard({ post, priority }: { post: BlogPost; priority?: boolean }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-(--border) bg-(--surface) transition-all duration-300 hover:-translate-y-1 hover:border-(--color-primary)/30 hover:shadow-xl hover:shadow-black/5">
      <Link href={`/blog/${post.slug}/`} className="relative block overflow-hidden">
        <div className="relative aspect-video w-full">
          <Image
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            priority={priority}
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <CategoryBadge label={post.thumbnailLabel || post.category.name} />

        <h3 className="mt-2 line-clamp-2 text-base font-bold leading-snug text-(--text-primary) transition-colors group-hover:text-(--color-primary)">
          <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-(--text-secondary)">
          {post.excerpt}
        </p>

        <div className="mt-auto flex flex-col gap-3 pt-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <span className="flex flex-wrap items-center gap-2 text-(--text-secondary)">
            <span>{post.author.name}</span>
            <span className="text-(--border)" aria-hidden="true">·</span>
            <span>
              {post.updatedDate && post.updatedDate !== post.publishDate
                ? `Updated ${formatDate(post.updatedDate)}`
                : formatDate(post.publishDate)}
            </span>
            <span className="text-(--border)" aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {post.readingTime} min
            </span>
          </span>
          <Link
            href={`/blog/${post.slug}/`}
            className="inline-flex shrink-0 items-center gap-1 font-bold text-(--color-primary)"
          >
            Read guide
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function FeaturedCard({ post, priority }: { post: BlogPost; priority?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="group relative block aspect-video w-full overflow-hidden rounded-2xl"
    >
      <Image
        src={post.featuredImage}
        alt={post.featuredImageAlt}
        fill
        sizes="(max-width: 1280px) 100vw, 1200px"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        priority={priority}
      />
    </Link>
  );
}

function CompactCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}/`} className="group flex items-start gap-3">
      <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl">
        <Image
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          fill
          sizes="96px"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.14em] text-(--color-primary)">
          {post.thumbnailLabel || post.category.name}
        </p>
        <h4 className="mb-1 line-clamp-2 text-[13px] font-bold leading-snug text-(--text-primary) transition-colors group-hover:text-(--color-primary)">
          {post.title}
        </h4>
        <p className="text-[11px] font-medium text-(--text-secondary)">{formatDate(post.publishDate)}</p>
      </div>
    </Link>
  );
}

function HorizontalCard({ post, priority }: { post: BlogPost; priority?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="group flex gap-4 overflow-hidden rounded-2xl border border-(--border) bg-(--surface) p-4 transition-all duration-300 hover:border-(--color-primary)/30 hover:shadow-lg"
    >
      <div className="relative w-32 shrink-0 overflow-hidden rounded-xl md:w-40" style={{ minHeight: 96 }}>
        <Image
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          fill
          sizes="160px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
        <div>
          <CategoryBadge label={post.thumbnailLabel || post.category.name} />
          <h3 className="mt-2 line-clamp-2 text-sm font-bold leading-snug text-(--text-primary) transition-colors group-hover:text-(--color-primary) md:text-base">
            {post.title}
          </h3>
        </div>
        <p className="mt-2 text-xs text-(--text-secondary)">{formatDate(post.publishDate)}</p>
      </div>
    </Link>
  );
}

export default function BlogCard({ post, variant = "default", priority }: BlogCardProps) {
  if (variant === "featured") return <FeaturedCard post={post} priority={priority} />;
  if (variant === "compact") return <CompactCard post={post} />;
  if (variant === "horizontal") return <HorizontalCard post={post} priority={priority} />;
  return <DefaultCard post={post} priority={priority} />;
}

export { CategoryBadge };
