import Link from "next/link";
import Script from "next/script";
import { ArrowRight } from "lucide-react";
import type { BlogCategoryPage as BlogCategoryPageConfig } from "@/lib/blog/types";
import { getPostsByCategorySlug, getRecommendedPosts } from "@/lib/blog/data";
import { BLOG_CATEGORY_PAGES } from "@/lib/blog/categories";
import { CONTACT_INFO } from "@/constants/contact";
import { buildBlogListingSchema, buildFaqSchema } from "@/lib/seo/schema";
import BlogBreadcrumb from "@/components/PublicComponents/Blog/BlogBreadcrumb";
import BlogCard from "@/components/PublicComponents/Blog/BlogCard";
import BlogHubCTA from "@/components/PublicComponents/Blog/BlogHubCTA";
import BlogSidebar from "@/components/PublicComponents/Blog/BlogSidebar";

export default function BlogCategoryPage({
  category,
}: {
  category: BlogCategoryPageConfig;
}) {
  const posts = getPostsByCategorySlug(category.slug, category.relatedPostSlugs);
  const relatedReading = getRecommendedPosts(posts[0]?.id, 3).filter(
    (post) => !posts.some((item) => item.id === post.id),
  );
  const pageUrl = `${CONTACT_INFO.website}/blog/${category.slug}/`;
  const listingSchema = buildBlogListingSchema({
    name: category.h1,
    description: category.metaDescription,
    url: pageUrl,
    posts: posts.map((post) => ({ title: post.title, slug: post.slug })),
  });

  return (
    <>
      <Script
        id={`blog-category-schema-${category.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }}
      />
      <Script
        id={`blog-category-breadcrumb-${category.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                name: category.name,
                item: pageUrl,
              },
            ],
          }),
        }}
      />
      <Script
        id={`blog-category-faq-${category.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(category.faqs)) }}
      />

      <div className="min-h-screen bg-(--background) blog-page">
        <section className="border-b border-(--border) bg-(--background) py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <BlogBreadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog/" },
                { label: category.name },
              ]}
            />
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-(--color-primary)">
              {category.eyebrow}
            </p>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-(--text-primary) md:text-5xl">
              {category.h1}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-(--text-secondary)">
              {category.intro}
            </p>
            <p className="mt-4 max-w-3xl text-base font-medium leading-relaxed text-(--text-primary)">
              {category.directAnswer}
            </p>
            <Link
              href={category.serviceHref}
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-(--color-primary)"
            >
              {category.serviceCta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <nav aria-label="Blog categories" className="mt-8 flex flex-wrap gap-2.5">
              <Link
                href="/blog/"
                className="rounded-full border border-(--border) bg-(--surface) px-4 py-2 text-sm font-bold text-(--text-primary)"
              >
                All
              </Link>
              {BLOG_CATEGORY_PAGES.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}/`}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                    item.slug === category.slug
                      ? "bg-(--text-primary) text-(--background)"
                      : "border border-(--border) bg-(--surface) text-(--text-primary) hover:bg-(--background)"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_300px] lg:gap-14">
            <div>
              <p className="mb-6 text-sm font-medium text-(--text-secondary)">
                Showing{" "}
                <span className="font-black text-(--text-primary)">{posts.length}</span>{" "}
                {posts.length === 1 ? "article" : "articles"}
              </p>

              {posts.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {posts.map((post, idx) => (
                    <BlogCard key={post.id} post={post} variant="default" priority={idx < 2} />
                  ))}
                </div>
              ) : (
                <p className="rounded-2xl border border-(--border) bg-(--surface) p-6 text-sm text-(--text-secondary)">
                  More {category.name.toLowerCase()} guides are being added. Start with the related
                  reading below or the {category.serviceLabel.toLowerCase()} page.
                </p>
              )}

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href={category.serviceHref}
                  className="inline-flex items-center gap-2 rounded-xl bg-(--color-primary) px-8 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
                >
                  {category.serviceLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/blog/"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-(--border) px-8 py-3.5 text-sm font-bold text-(--text-primary) transition-all hover:border-(--color-primary)/50"
                >
                  Show more articles
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-10">
                <BlogHubCTA
                  title={`Need ${category.name} help in Pune?`}
                  description={`Growthik Media can help you apply this ${category.name.toLowerCase()} guidance across your website, campaigns and lead flow.`}
                  href={category.serviceHref}
                  label={category.serviceLabel}
                  secondaryHref="/blog/"
                  secondaryLabel="Browse all articles"
                />
              </div>

              {relatedReading.length > 0 && (
                <section className="mt-12">
                  <h2 className="text-2xl font-black text-(--text-primary)">Related reading</h2>
                  <p className="mt-1 text-sm text-(--text-secondary)">
                    Guides from other topics that pair well with {category.name.toLowerCase()}.
                  </p>
                  <div className="mt-6 grid grid-cols-1 gap-4">
                    {relatedReading.map((post) => (
                      <BlogCard key={`related-${post.id}`} post={post} variant="horizontal" />
                    ))}
                  </div>
                </section>
              )}

              <section className="mt-12">
                <h2 className="text-2xl font-black text-(--text-primary)">Common questions</h2>
                <div className="mt-5 space-y-4">
                  {category.faqs.map((faq) => (
                    <div key={faq.question} className="rounded-xl border border-(--border) bg-(--surface) p-5">
                      <h3 className="font-bold text-(--text-primary)">{faq.question}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            <BlogSidebar variant="listing" />
          </div>
        </div>
      </div>
    </>
  );
}
