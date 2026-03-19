import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Eye,
  Heart,
  MessageCircle,
  Tag,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";
import { BLOG_POSTS, getPostBySlug, getRelatedPosts } from "@/lib/blog/data";
import {
  formatDate,
  formatNumber,
  getInitials,
  stringToColor,
} from "@/lib/blog/utils";
import { POST_CONTENT } from "@/lib/blog/content";
import { CategoryBadge } from "@/components/Blog/BlogCard";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import RelatedPosts from "@/components/Blog/RelatedPosts";

// Lazily load interactive-only widgets - they are below the fold and
// do not appear in the initial server-rendered HTML, so splitting them
// reduces the JS payload parsed on page load.
const ReadingProgress = dynamic(
  () => import("@/components/Blog/ReadingProgress"),
);
const ShareButtons = dynamic(() => import("@/components/Blog/ShareButtons"));
const NewsletterForm = dynamic(
  () => import("@/components/Blog/NewsletterForm"),
);

// ─── Generate Static Params ───────────────────────────────────────────────────

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found | Growthik Media" };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags.map((t) => t.name).join(", "),
    authors: [{ name: post.author.name }],
    alternates: {
      canonical: `${CONTACT_INFO.website}/blog/${slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${CONTACT_INFO.website}/blog/${slug}`,
      siteName: "Growthik Media",
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author.name],
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.featuredImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.featuredImage],
      creator: "@growthikmedia",
    },
  };
}

// ─── Author Avatar ────────────────────────────────────────────────────────────
function AuthorAvatar({ name, size = 48 }: { name: string; size?: number }) {
  const bg = stringToColor(name);
  return (
    <div
      className="rounded-full flex items-center justify-center text-white font-black shrink-0"
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

// ─── Page Component ───────────────────────────────────────────────────────────

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
    return null;
  }

  const related = getRelatedPosts(post, 3);
  const pageUrl = `${CONTACT_INFO.website}/blog/${slug}`;

  // Schema markup
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: post.featuredImage,
    datePublished: post.publishDate,
    dateModified: post.updatedDate || post.publishDate,
    url: pageUrl,
    keywords: post.tags.map((t) => t.name).join(", "),
    wordCount: post.readingTime * 200,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      worksFor: {
        "@type": "Organization",
        name: CONTACT_INFO.companyName,
        url: CONTACT_INFO.website,
      },
    },
    publisher: {
      "@type": "Organization",
      name: CONTACT_INFO.companyName,
      url: CONTACT_INFO.website,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    articleSection: post.category.name,
  };

  const content = POST_CONTENT[slug];

  return (
    <>
      <Script
        id={`schema-blog-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Reading progress bar */}
      <ReadingProgress />

      <div className="min-h-screen bg-(--background) pt-24">
        <header className="bg-(--background) pt-12 pb-8 border-b border-(--border)/50">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm text-(--text-secondary) font-medium mb-8">
              <Link
                href="/"
                className="hover:text-(--color-primary) transition-colors"
              >
                Home
              </Link>
              <ArrowRight className="w-3 h-3 text-(--border)" />
              <Link
                href="/blog"
                className="hover:text-(--color-primary) transition-colors"
              >
                Blog
              </Link>
              <ArrowRight className="w-3 h-3 text-(--border)" />
              <span className="text-(--text-primary) truncate max-w-[200px]">
                {post.title}
              </span>
            </nav>

            {/* Category + Trending */}
            <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
              <span
                className="inline-block text-xs font-bold px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: `${post.category.color}15`,
                  color: post.category.color,
                  border: `1px solid ${post.category.color}30`,
                }}
              >
                {post.category.name}
              </span>
              {post.trending && (
                <span className="bg-(--color-primary)/10 text-(--color-primary) border border-(--color-primary)/20 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                  Trending
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-(--text-primary) leading-[1.1] tracking-tight mb-8">
              {post.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-(--text-secondary) font-medium py-4 border-y border-(--border)/50">
              <div className="flex items-center gap-2">
                <AuthorAvatar name={post.author.name} size={32} />
                <span className="font-bold text-(--text-primary)">
                  {post.author.name}
                </span>
              </div>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(post.publishDate)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readingTime} min read
              </span>
              <span className="flex items-center gap-1.5">
                <Eye className="w-4 h-4" />
                {formatNumber(post.views)} views
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="max-w-6xl mx-auto px-6 mt-12">
            <div className="relative aspect-video lg:aspect-21/9 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
              <Image
                src={post.featuredImage}
                alt={post.featuredImageAlt}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 border border-black/10 dark:border-white/10 rounded-3xl pointer-events-none" />
            </div>
          </div>
        </header>

        {/* ──────────── MAIN CONTENT ──────────── */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 lg:gap-14 items-start">
            {/* Sticky Sidebar (Left) */}
            <div className="order-2 lg:order-1 sticky top-28">
              <BlogSidebar currentPostId={post.id} />
            </div>

            {/* Article (Right) */}
            <article className="order-1 lg:order-2">
              {/* Share buttons - top */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-(--border) flex-wrap gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-bold text-(--color-primary) hover:opacity-70 transition-opacity"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Link>
                <ShareButtons url={pageUrl} title={post.title} />
              </div>

              {/* Article body */}
              {content ? (
                <div className="blog-body">{content}</div>
              ) : (
                /* Fallback for posts without content override */
                <div className="blog-body">
                  <p className="lead">{post.excerpt}</p>
                  <p className="text-(--text-secondary) font-medium leading-relaxed">
                    Full article content for this post is being prepared by our
                    editorial team and will be published shortly. In the
                    meantime, feel free to explore our other articles or contact
                    us for expert advice.
                  </p>
                  <div className="flex gap-4 mt-8">
                    <Link
                      href="/contact"
                      className="px-6 py-3 bg-(--color-primary) text-white font-bold rounded-xl text-sm hover:opacity-90 transition-all"
                    >
                      Get Free Consultation
                    </Link>
                    <Link
                      href="/blog"
                      className="px-6 py-3 border border-(--border) text-(--text-primary) font-bold rounded-xl text-sm hover:border-(--color-primary)/50 transition-all"
                    >
                      Browse All Articles
                    </Link>
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-(--border)">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="flex items-center gap-1.5 text-sm font-bold text-(--text-secondary)">
                    <Tag className="w-4 h-4" /> Tags:
                  </span>
                  {post.tags.map((tag) => (
                    <Link
                      key={tag.id}
                      href={`/blog?tag=${tag.slug}`}
                      className="px-3 py-1.5 rounded-full text-xs font-bold bg-(--surface) border border-(--border) text-(--text-secondary) hover:border-(--color-primary)/50 hover:text-(--color-primary) transition-all"
                    >
                      #{tag.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Share buttons - bottom */}
              <div className="mt-8 pt-8 border-t border-(--border)">
                <ShareButtons url={pageUrl} title={post.title} />
              </div>

              {/* Author Card */}
              <div className="mt-10 p-6 bg-(--surface) border border-(--border) rounded-2xl">
                <div className="flex gap-4 items-start">
                  <AuthorAvatar name={post.author.name} size={56} />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-(--color-primary) uppercase tracking-wider mb-0.5">
                      Written by
                    </p>
                    <h3 className="text-lg font-black text-(--text-primary)">
                      {post.author.name}
                    </h3>
                    <p className="text-sm font-semibold text-(--text-secondary) mb-3">
                      {post.author.role}
                    </p>
                    <p className="text-sm text-(--text-secondary) font-medium leading-relaxed">
                      {post.author.bio}
                    </p>
                    <div className="flex items-center gap-3 mt-4">
                      {post.author.socialLinks.linkedin && (
                        <a
                          href={post.author.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:opacity-70 transition-opacity"
                        >
                          <ExternalLink className="w-3 h-3" /> LinkedIn
                        </a>
                      )}
                      {post.author.socialLinks.website && (
                        <a
                          href={post.author.socialLinks.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-bold text-(--color-primary) hover:opacity-70 transition-opacity"
                        >
                          <ExternalLink className="w-3 h-3" /> Website
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Banner */}
              <div className="mt-10 rounded-2xl overflow-hidden bg-linear-to-br from-(--color-primary) via-rose-600 to-rose-700 p-6 md:p-8 text-white relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm font-black uppercase tracking-wider opacity-90">
                      Free Offer
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black mb-2">
                    Get a Free Website & SEO Audit
                  </h3>
                  <p className="text-sm text-white/85 font-medium mb-6 max-w-lg">
                    Let our experts audit your website for performance, SEO, and
                    conversion opportunities - completely free, no strings
                    attached.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/audit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-(--color-primary) font-black rounded-xl text-sm hover:opacity-90 transition-opacity shadow-lg"
                    >
                      Start Free Audit <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/20 border border-white/30 text-white font-bold rounded-xl text-sm hover:bg-white/30 transition-all"
                    >
                      Talk to an Expert
                    </Link>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              <RelatedPosts posts={related} />
            </article>
          </div>
        </div>

        {/* Newsletter section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <NewsletterForm />
        </section>
      </div>
    </>
  );
}
