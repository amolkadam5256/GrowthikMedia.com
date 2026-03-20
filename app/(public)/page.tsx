import { Metadata } from "next";
import HomeClient from "@/app/(public)/HomeClient";

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency in Pune | Growthik Media",
  description: "Growthik Media is a leading digital marketing agency in Pune offering SEO, Google Ads, and AI-driven growth strategies to scale your business and maximize ROI.",
  keywords:
    "digital marketing agency pune, SEO services pune, performance marketing pune, google ads agency pune, Growthik Media, best digital marketing company pune, AI marketing Pune",
  authors: [{ name: "Amol Kadam" }],
  openGraph: {
    title: "Best Digital Marketing Agency in Pune | Growthik Media",
    description:
      "Scale your brand with Pune's premier AI-powered digital marketing agency. Data-driven SEO and performance marketing delivering measurable ROI.",
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
      "Scale your brand with Pune's leading digital marketing agency. AI-Powered SEO and Performance Marketing driving predictable growth.",
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
                    "text": "Growthik Media is one of the best digital marketing agencies in Pune, specializing in SEO, Google Ads, and AI-driven growth strategies."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What services does Growthik Media offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Growthik Media offers SEO, Google Ads, social media marketing, website development, and AI-driven growth strategies."
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
                "latitude": 18.5597,
                "longitude": 73.7799
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
