import { Metadata } from "next";
import HomeClient from "@/app/(public)/HomeClient";

export const metadata: Metadata = {
  title:
    "Top Digital Marketing Agency in Pune | AI-Powered SEO & Ads - Growthik Media",
  description:
    "Growthik Media is Pune's top digital marketing agency. We build predictable revenue systems using data-driven SEO, Google Ads, and AI to scale your brand.",
  keywords:
    "digital marketing agency pune, digital marketing company pune, video production pune, SEO services pune, content creation, social media marketing, growthik media",
  authors: [{ name: "Growthik Media" }],
  openGraph: {
    title: "Top Digital Marketing Agency in Pune | AI-Powered SEO & Ads",
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
    title: "Top Digital Marketing Agency in Pune | Growthik Media",
    description:
      "Scale your brand with Pune's leading digital marketing agency. SEO, Social Media and Video Production driving growth.",
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long until SEO shows measurable results?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Typically, you will see measurable SEO improvements in organic traffic and rankings within 3 to 6 months depending on the niche and baseline.",
                },
              },
              {
                "@type": "Question",
                name: "Do you work with small businesses and startups?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we specialize in building scalable revenue systems for startups and ecommerce brands.",
                },
              },
              {
                "@type": "Question",
                name: "Why should I choose a Pune-based digital marketing agency?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We provide deep local market knowledge and on-ground support, allowing for hyper-targeted SEO and localized campaigns.",
                },
              },
            ],
          }),
        }}
      />
      <HomeClient />
    </>
  );
}
