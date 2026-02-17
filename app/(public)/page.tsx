import { Metadata } from "next";
import HomeClient from "@/app/(public)/HomeClient";

export const metadata: Metadata = {
  title: "Growthik Media: AI-Powered Growth Engineering Company",
  description:
    "Growthik Media is an AI-powered growth engineering company that builds predictable revenue systems — not just marketing campaigns. We help ambitious brands scale with ROI-driven performance.",
  keywords:
    "digital marketing agency pune, video production pune, SEO services pune, content creation, social media marketing, growthik media",
  authors: [{ name: "Growthik Media" }],
  openGraph: {
    title: "Growthik Media: Digital Marketing & Video Production Pune",
    description:
      "Scale your brand with Pune's leading digital marketing and video production agency. Data-driven SEO and creative content that delivers ROI.",
    url: "https://www.growthikmedia.com/",
    siteName: "Growthik Media",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Growthik Media - Digital Marketing Agency Pune",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growthik Media: Digital Marketing Agency in Pune",
    description:
      "Scale your brand with Pune's leading digital marketing agency. SEO, Social Mediaand Video Production that driving growth.",
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
    canonical: "https://www.growthikmedia.com/",
  },
};

export default function Home() {
  return <HomeClient />;
}
