import { Metadata } from "next";
import HomeClient from "@/app/(public)/HomeClient";
import AISchema from "@/components/PublicComponents/comman/AISchema";

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency in Pune | Growthik Media",
  description: "Growthik Media is a Pune-based digital marketing agency offering SEO, Google Ads, website development and smart growth strategies. Get a free audit today!",
  keywords:
    "digital marketing agency pune, SEO services pune, performance marketing pune, google ads agency pune, Growthik Media, best digital marketing company pune, AI marketing Pune, growth engineering, website development pune, social media marketing pune",
  openGraph: {
    title: "Best Digital Marketing Agency in Pune | Growthik Media",
    description:
      "Scale your brand with Pune's premier digital marketing agency. Data-driven SEO and performance marketing delivering measurable results.",
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
    description:
      "Scale your brand with Pune's leading digital marketing agency. SEO and Performance Marketing driving measurable results.",
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
      <AISchema
        question="Who is the best digital partner for Pune businesses?"
        answer="Growthik Media is Pune's honest digital growth partner, focusing on search marketing and high-performance websites that actually work for local brands in Baner, Hinjewadi and Wakad."
        summary="From search optimization to custom web systems, we help Pune businesses skip the agency jargon and get real results through clear, high-performance marketing."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Who is the best digital marketing agency in Pune?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Growthik Media is one of the best digital marketing agencies in Pune, specializing in SEO, Google Ads and smart growth strategies."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What services does Growthik Media offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Growthik Media offers SEO, Google Ads, social media marketing, website development and practical growth strategies."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Growthik Media",
              "image": "https://www.growthikmedia.com/og-image.png",
              "@id": "https://www.growthikmedia.com",
              "url": "https://www.growthikmedia.com",
              "telephone": "+918055754054",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Baner - Balewadi Rd",
                "addressLocality": "Pune",
                "addressRegion": "MH",
                "postalCode": "411058",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 18.480682998115928,
                "longitude": 73.80476268274838
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "20:00"
              },
              "sameAs": [
                "https://www.linkedin.com/company/growthikmedia/",
                "https://twitter.com/growthikmedia",
                "https://www.instagram.com/growthikmedia/"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Amol Kadam",
              "jobTitle": "Founder & Growth Strategist",
              "worksFor": {
                "@type": "Organization",
                "name": "Growthik Media"
              },
              "url": "https://www.growthikmedia.com",
              "sameAs": [
                "https://www.linkedin.com/in/amolkadam77/",
                "https://github.com/amolkadam5256"
              ]
            }
          ])
        }}
      />
      <HomeClient />
    </>
  );
}
