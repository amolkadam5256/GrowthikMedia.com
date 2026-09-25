import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  Tag,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";
import { BLOG_POSTS, getPostBySlug, getRelatedPosts } from "@/lib/blog/data";
import {
  BLOG_CATEGORY_PAGES,
  getBlogCategoryPage,
  LEGACY_CATEGORY_REDIRECTS,
} from "@/lib/blog/categories";
import { redirect } from "next/navigation";
import BlogCategoryPage from "../BlogCategoryPage";
import BlogBreadcrumb from "@/components/PublicComponents/Blog/BlogBreadcrumb";
import {
  formatDate,
  getInitials,
  stringToColor,
} from "@/lib/blog/utils";
import { POST_CONTENT } from "@/lib/blog/content";
import { BLOG_FAQS } from "@/lib/blog/faqs";
import BlogArticleRail from "@/components/PublicComponents/Blog/BlogArticleRail";
import RelatedPosts from "@/components/PublicComponents/Blog/RelatedPosts";
import CommentSection from "@/components/PublicComponents/Blog/CommentSection";
import BlogViewCounter from "@/components/PublicComponents/Blog/BlogViewCounter";

// Lazily load interactive-only widgets - they are below the fold and
// do not appear in the initial server-rendered HTML, so splitting them
// reduces the JS payload parsed on page load.
const ReadingProgress = dynamic(
  () => import("@/components/PublicComponents/Blog/ReadingProgress"),
);
const ShareButtons = dynamic(() => import("@/components/PublicComponents/Blog/ShareButtons"));
const NewsletterForm = dynamic(
  () => import("@/components/PublicComponents/Blog/NewsletterForm"),
);

const toAbsoluteUrl = (url: string) =>
  url.startsWith("http") ? url : `${CONTACT_INFO.website}${url}`;

// ─── Generate Static Params ───────────────────────────────────────────────────

export async function generateStaticParams() {
  return [
    ...BLOG_POSTS.map((post) => ({ slug: post.slug })),
    ...BLOG_CATEGORY_PAGES.map((category) => ({ slug: category.slug })),
  ];
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getBlogCategoryPage(slug);

  if (category) {
    const pageUrl = `${CONTACT_INFO.website}/blog/${category.slug}/`;
    return {
      title: category.metaTitle,
      description: category.metaDescription,
      authors: [{ name: "Amol Kadam" }, { name: "Growthik Media" }],
      alternates: { canonical: pageUrl },
      openGraph: {
        title: category.metaTitle,
        description: category.metaDescription,
        url: pageUrl,
        siteName: "Growthik Media",
        type: "website",
        images: [
          {
            url: "/og-image.png",
            width: 1200,
            height: 630,
            alt: category.h1,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: category.metaTitle,
        description: category.metaDescription,
        images: ["/og-image.png"],
      },
    };
  }

  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found | Growthik Media" };
  }

  const pageUrl = `${CONTACT_INFO.website}/blog/${slug}/`;
  const imageUrl = toAbsoluteUrl(post.featuredImage);
  const seoKeywords = post.seoKeywords ?? post.tags.map((t) => t.name);

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: seoKeywords.join(", "),
    authors: [{ name: post.author.name }],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: pageUrl,
      siteName: "Growthik Media",
      type: "article",
      publishedTime: post.publishDate,
      modifiedTime: post.updatedDate || post.publishDate,
      authors: [post.author.name],
      images: [
        {
          url: imageUrl,
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
      images: [imageUrl],
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

  if (LEGACY_CATEGORY_REDIRECTS[slug]) {
    redirect(`/blog/${LEGACY_CATEGORY_REDIRECTS[slug]}/`);
  }

  const categoryPage = getBlogCategoryPage(slug);
  if (categoryPage) {
    return <BlogCategoryPage category={categoryPage} />;
  }

  const post = getPostBySlug(slug);
  const contentSlug = slug === "importance-of-seo" ? "why-seo-is-important" : slug;

  if (!post) {
    notFound();
    return null;
  }

  const related = getRelatedPosts(post, 3);
  const serviceCategory = getBlogCategoryPage(post.category.slug);
  const pageUrl = `${CONTACT_INFO.website}/blog/${slug}/`;
  const imageUrl = toAbsoluteUrl(post.featuredImage);
  const logoUrl = `${CONTACT_INFO.website}/brand/growthik-media-transparent-logo.png`;
  const seoKeywords = post.seoKeywords ?? post.tags.map((t) => t.name);

  const liveViews = post.views;

  const faqs = BLOG_FAQS[contentSlug] || [];

  // Schema markup
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: imageUrl,
    datePublished: post.publishDate,
    dateModified: post.updatedDate || post.publishDate,
    url: pageUrl,
    keywords: seoKeywords.join(", "),
    wordCount: post.readingTime * 200,
    about: seoKeywords.slice(0, 6).map((keyword) => ({
      "@type": "Thing",
      name: keyword,
    })),
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      url: post.author.socialLinks.linkedin || CONTACT_INFO.website,
      sameAs: Object.values(post.author.socialLinks).filter(Boolean),
      worksFor: {
        "@type": "Organization",
        name: CONTACT_INFO.companyName,
        url: CONTACT_INFO.website,
      },
    },
    publisher: {
      "@type": "Organization",
      "@id": `${CONTACT_INFO.website}/#organization`,
      name: CONTACT_INFO.companyName,
      url: CONTACT_INFO.website,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    articleSection: post.category.name,
  };

  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  } : null;

  const content = POST_CONTENT[contentSlug];

  return (
    <>
      <Script
        id={`schema-blog-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {faqSchema && (
        <Script
          id={`schema-faq-${slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Script
        id={`schema-breadcrumb-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: `${CONTACT_INFO.website}/`,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: `${CONTACT_INFO.website}/blog/`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: post.category.name,
                  item: `${CONTACT_INFO.website}/blog/${post.category.slug}/`,
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: post.title,
                  item: pageUrl,
                },
              ],
            },
          ),
        }}
      />

      {/* Reading progress bar */}
      <ReadingProgress />

      <div className="blog-page min-h-screen bg-(--background)">
        <header className="border-b border-(--border)">
          <div className="mx-auto max-w-6xl px-5 py-8 md:px-8 lg:px-12 lg:py-10">
            <BlogBreadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog/" },
                { label: post.category.name, href: `/blog/${post.category.slug}/` },
                { label: post.title },
              ]}
            />

            <div className="flex flex-wrap items-center gap-2">
              <Link
                href={`/blog/${post.category.slug}/`}
                className="inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em]"
                style={{
                  backgroundColor: `${post.category.color}15`,
                  color: post.category.color,
                }}
              >
                {post.category.name}
              </Link>
            </div>

            <h1 className="mt-4 max-w-4xl text-[1.75rem] font-black leading-tight tracking-tight text-(--text-primary) md:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-(--text-secondary) md:text-lg">
              {post.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-(--border) pt-5">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-(--text-secondary)">
                <div className="flex items-center gap-2">
                  <AuthorAvatar name={post.author.name} size={36} />
                  <div>
                    <p className="font-bold text-(--text-primary)">{post.author.name}</p>
                    <p className="text-xs">{post.author.role}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  {formatDate(post.publishDate)}
                </span>
                {post.updatedDate && post.updatedDate !== post.publishDate && (
                  <span>Updated {formatDate(post.updatedDate)}</span>
                )}
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {post.readingTime} min
                </span>
                <BlogViewCounter slug={slug} initialViews={liveViews} />
              </div>
              <ShareButtons url={pageUrl} title={post.title} compact />
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-5 py-10 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-14">
            <article>
              <div className="relative mb-10 overflow-hidden rounded-2xl bg-(--surface) ring-1 ring-black/5">
                <Image
                  src={post.featuredImage}
                  alt={post.featuredImageAlt}
                  width={1200}
                  height={630}
                  quality={85}
                  sizes="(max-width: 1024px) 100vw, 760px"
                  className="h-auto w-full"
                  priority
                />
              </div>

              {content ? (
                <div id="article-body" className="blog-body">{content}</div>
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
                      className="blog-cta-link px-6 py-3 bg-(--color-primary) text-white font-bold rounded-xl text-sm hover:opacity-90 transition-all"
                    >
                      Get Free Consultation
                    </Link>
                    <Link
                      href="/blog/"
                      className="blog-cta-link px-6 py-3 border border-(--border) text-(--text-primary) font-bold rounded-xl text-sm hover:border-(--color-primary)/50 transition-all"
                    >
                      Browse All Articles
                    </Link>
                  </div>
                </div>
              )}

              {/* Dynamic FAQ Section */}
              {faqs.length > 0 && (
                <div id="article-faq" className="mt-12 pt-8 border-t border-(--border)">
                  <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
                    <HelpCircle className="w-6 h-6 text-(--color-primary)" />
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="p-5 bg-(--surface) rounded-xl border border-(--border)">
                        <h3 className="font-bold text-(--text-primary) mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-sm text-(--text-secondary) mb-0 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {serviceCategory && (
                <div className="mt-10 rounded-2xl border border-(--border) bg-(--surface) p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-(--color-primary)">
                    Continue to a service page
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">
                    If you want this applied to your Pune business, talk to Growthik Media about{" "}
                    <Link
                      href={serviceCategory.serviceHref}
                      className="font-bold text-(--color-primary)"
                    >
                      {serviceCategory.serviceLabel}
                    </Link>
                    .
                  </p>
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
                      href={
                        getBlogCategoryPage(tag.slug)
                          ? `/blog/${tag.slug}/`
                          : "/blog/"
                      }
                      className="px-3 py-1.5 rounded-full text-xs font-bold bg-(--surface) border border-(--border) text-(--text-secondary) hover:border-(--color-primary)/50 hover:text-(--color-primary) transition-all"
                    >
                      #{tag.name}
                    </Link>
                  ))}
                </div>
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
                    <div className="flex items-center gap-3 mt-4 flex-wrap">
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
                      <Link
                        href="/about/"
                        className="flex items-center gap-1.5 text-xs font-bold text-(--color-primary) hover:opacity-70 transition-opacity"
                      >
                        About Growthik Media
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Banner */}
              <div className="mt-10 rounded-3xl overflow-hidden bg-(--surface) border-2 border-(--color-primary)/20 p-6 md:p-8 text-(--text-primary) relative shadow-lg">
                <div className="absolute top-0 right-0 w-40 h-40 bg-(--color-primary)/5 rounded-full blur-3xl pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-(--color-primary)" />
                    <span className="text-sm font-black uppercase tracking-wider text-(--color-primary)">
                      Free Offer
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black mb-2 text-(--text-primary)">
                    Get a Free Website & SEO Audit
                  </h3>
                  <p className="text-sm text-(--text-secondary) font-medium mb-6 max-w-lg">
                    Let our experts audit your website for performance, SEO, and
                    conversion opportunities - completely free, no strings
                    attached.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/audit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--color-primary) text-white font-black rounded-xl text-sm hover:opacity-90 transition-opacity shadow-lg shadow-(--color-primary)/20"
                    >
                      Start Free Audit <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--surface) border border-(--border) text-(--text-primary) font-bold rounded-xl text-sm hover:border-(--color-primary)/50 transition-all"
                    >
                      Talk to an Expert
                    </Link>
                  </div>
                </div>
              </div>

              <CommentSection slug={slug} />
            </article>

            <BlogArticleRail related={related} category={serviceCategory} />
          </div>
        </div>

        <div id="related-articles" className="border-y border-(--border) bg-(--surface-secondary) py-14">
          <div className="mx-auto max-w-6xl px-5 md:px-8 lg:px-12">
            <RelatedPosts posts={related} />
          </div>
        </div>

        <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 lg:px-12">
          <NewsletterForm />
        </section>
      </div>
    </>
  );
}
