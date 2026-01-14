import { Metadata } from "next";
import HomeClient from "@/app/(public)/HomeClient";

export const metadata: Metadata = {
  title: "Growthik Media - Digital Marketing & Video Production Agency in Pune",
  description:
    "Growthik Media is a leading digital marketing and video production agency in Pune. We specialize in SEO, social media marketing, content creation, and professional video production services.",
  keywords:
    "digital marketing agency pune, video production pune, content creation, social media marketing, SEO services, growthik media",
  authors: [{ name: "Growthik Media" }],
  openGraph: {
    title: "Growthik Media - Digital Marketing & Video Production Agency",
    description:
      "Transform your brand with professional digital marketing and video production services in Pune.",
    url: "https://www.growthikmedia.com",
    siteName: "Growthik Media",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Growthik Media - Digital Marketing Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growthik Media - Digital Marketing & Video Production Agency",
    description:
      "Transform your brand with professional digital marketing and video production services in Pune.",
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
  alternates: {
    canonical: "https://www.growthikmedia.com",
  },
};

export default function Home() {
  return <HomeClient />;
}
