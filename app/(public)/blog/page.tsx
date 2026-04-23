import { Metadata } from "next";
import { CONTACT_INFO } from "@/constants/contact";
import BlogListingClient from "./BlogListingClient";
import Script from "next/script";

// Dynamic behavior allowed to process search parameters for proper canonical mapping
export const dynamic = "force-dynamic";

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }): Promise<Metadata> {
  const canonical = '/blog/';
  return {
    title: "Digital Marketing & SEO Blog Pune | Growthik Media",
    description:
      "Expert articles on SEO, Google Ads, web design & digital marketing strategies for Pune businesses. Written by the Growthik Media team. Read our latest insights!",
    keywords:
      "digital marketing blog pune, seo tips india, web design insights, google ads guide pune, content marketing india, SEO blog India, marketing strategies blog, social media marketing tips pune, digital marketing articles",
    authors: [{ name: "Growthik Media" }],
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: "Digital Marketing & SEO Blog Pune | Growthik Media",
      description:
        "Expert digital marketing, SEO and web design articles for Pune businesses. Fresh insights from the Growthik Media team.",
      url: canonical,
      siteName: "Growthik Media",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Growthik Media Blog - Digital Marketing & SEO Insights Pune",
        },
      ],
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: "Digital Marketing & SEO Blog Pune | Growthik Media",
      description:
        "Expert digital marketing and SEO insights for Pune businesses. Latest articles from Growthik Media.",
      images: ["/og-image.png"],
      creator: "@growthikmedia",
    },
  };
}

const blogSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://www.growthikmedia.com/blog/#blog",
      "name": "Growthik Media Blog - Digital Marketing & SEO Insights",
      "url": "https://www.growthikmedia.com/blog/",
      "description": "Expert articles on SEO, Google Ads, web design and digital marketing strategies for Pune and Indian businesses.",
      "publisher": {
        "@type": "Organization",
        "name": "Growthik Media",
        "logo": "https://www.growthikmedia.com/brand/growthik-media-transparent-logo.png",
        "url": "https://www.growthikmedia.com"
      },
      "author": {
        "@type": "Person",
        "name": "Amol Kadam",
        "jobTitle": "Founder & Growth Strategist",
        "url": "https://www.linkedin.com/in/amolkadam77/"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.growthikmedia.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.growthikmedia.com/blog/"
        }
      ]
    }
  ]
};

export default function BlogPage() {
  return (
    <>
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BlogListingClient />
    </>
  );
}
