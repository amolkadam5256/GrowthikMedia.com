import { Metadata } from "next";
import { redirect } from "next/navigation";
import Script from "next/script";
import BlogListingClient from "./BlogListingClient";
import { BLOG_HUB_FAQS, getBlogCategoryPage, resolveCategorySlug } from "@/lib/blog/categories";
import { BLOG_POSTS, getLatestPosts } from "@/lib/blog/data";
import { buildBlogListingSchema, buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo/schema";
import { CONTACT_INFO } from "@/constants/contact";

export const dynamic = "force-dynamic";

const CANONICAL = "/blog/";
const PAGE_TITLE = "Digital Marketing & SEO Blog Pune | Growthik Media";
const PAGE_DESCRIPTION =
  "Practical digital marketing and SEO insights for Pune businesses. Learn SEO, Local SEO, Google Ads, Meta Ads, AI Search, AEO and website growth strategies.";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

function firstParam(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const params = await searchParams;
  const hasFilterQuery = Boolean(
    firstParam(params.sort) || firstParam(params.tag) || firstParam(params.search),
  );

  return {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: [
      "digital marketing blog Pune",
      "SEO blog Pune",
      "digital marketing insights Pune",
      "Google Ads blog Pune",
      "local SEO Pune",
      "AI search optimization",
    ],
    authors: [{ name: "Amol Kadam" }, { name: "Growthik Media" }],
    alternates: {
      canonical: CANONICAL,
    },
    robots: {
      index: !hasFilterQuery,
      follow: true,
      googleBot: {
        index: !hasFilterQuery,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: CANONICAL,
      siteName: "Growthik Media",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Growthik Media Blog - Digital Marketing and SEO Insights for Pune Businesses",
        },
      ],
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      images: ["/og-image.png"],
      creator: "@growthikmedia",
    },
  };
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const requestedCategory = firstParam(params.category);

  if (requestedCategory) {
    const resolved = resolveCategorySlug(requestedCategory);
    if (getBlogCategoryPage(resolved)) {
      redirect(`/blog/${resolved}/`);
    }
  }

  const posts = getLatestPosts();
  const pageUrl = `${CONTACT_INFO.website}/blog/`;
  const listingSchema = buildBlogListingSchema({
    name: "Digital Marketing & SEO Insights for Pune Businesses",
    description: PAGE_DESCRIPTION,
    url: pageUrl,
    posts: posts.map((post) => ({ title: post.title, slug: post.slug })),
  });

  return (
    <>
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }}
      />
      <Script
        id="blog-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbSchema("/blog/")),
        }}
      />
      <Script
        id="blog-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(BLOG_HUB_FAQS)) }}
      />
      <BlogListingClient posts={BLOG_POSTS} />
    </>
  );
}
