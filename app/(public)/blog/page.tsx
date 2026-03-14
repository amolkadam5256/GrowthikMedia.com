import { Metadata } from "next";
import { CONTACT_INFO } from "@/constants/contact";
import BlogListingClient from "./BlogListingClient";

export const metadata: Metadata = {
  title: "Blog | Digital Marketing, SEO & Web Design Insights | Growthik Media",
  description:
    "Expert articles on SEO, web design, Google Ads, and digital marketing strategies tailored for Pune businesses. Written by the Growthik Media team.",
  keywords:
    "digital marketing blog pune, seo tips, web design insights, google ads guide, content marketing india",
  authors: [{ name: "Growthik Media" }],
  alternates: {
    canonical: `${CONTACT_INFO.website}/blog`,
  },
  openGraph: {
    title: "Blog | Growthik Media — Digital Marketing Insights",
    description:
      "Expert digital marketing, SEO, and web design articles for Pune businesses.",
    url: `${CONTACT_INFO.website}/blog`,
    siteName: "Growthik Media",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Growthik Media Blog",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Growthik Media",
    description: "Expert digital marketing and SEO insights for Pune businesses.",
    images: ["/og-image.png"],
    creator: "@growthikmedia",
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
};

export default function BlogPage() {
  return <BlogListingClient />;
}
