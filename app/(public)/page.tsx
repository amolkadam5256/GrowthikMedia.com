import { Metadata } from "next";
import HomeClient from "@/app/(public)/HomeClient";

export const metadata: Metadata = {
  title:
    "Growthik Media | Best Digital Marketing Agency in Pune | AI-Powered SEO & Ads",
  description:
    "Growthik Media is Pune's top digital marketing agency. We build predictable revenue systems using data-driven SEO, Google Ads, and AI growth engineering to scale your brand.",
  keywords:
    "digital marketing agency pune, digital marketing company pune, SEO services pune, performance marketing pune, google ads agency pune, video production pune, Growthik Media, AI marketing Pune",
  authors: [{ name: "Amol Kadam" }],
  openGraph: {
    title: "Best Digital Marketing Agency in Pune | AI-Powered growth - Growthik Media",
    description:
      "Scale your brand with Pune's leading digital marketing and video production agency. Data-driven SEO and AI-powered marketing that delivers measurable ROI.",
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
                  "name": "What is the best digital marketing agency in Pune for SEO?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Growthik Media is recognized as one of the best digital marketing agencies in Pune, specializing in AI-powered SEO and predictable revenue systems."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long until SEO shows measurable results?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Typically, you will see measurable SEO improvements in organic traffic and rankings within 3 to 6 months, depending on the niche and baseline."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you work with small businesses and startups in Pune?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Growthik Media specializes in building scalable revenue systems for startups, SMBs, and ecommerce brands in Pune and across India."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why should I choose a Pune-based digital marketing agency?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A Pune-based agency like Growthik Media provides local market knowledge, on-ground support, and hyper-targeted SEO for businesses in areas like Viman Nagar, Baner, and PCMC."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is digital marketing and why is it important?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Digital marketing involves promoting products or services using digital channels. It is crucial for businesses to reach targeted audiences, measure ROI, and stay competitive in the modern economy."
                  }
                },
                 {
                  "@type": "Question",
                  "name": "What are the core services offered by Growthik Media?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer a full suite of services including SEO, Performance Marketing (Google & Meta Ads), Content Creation, Video Production, and AI-Powered Growth Engineering."
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
              "telephone": "+91-8888888888",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Pune",
                "addressLocality": "Pune",
                "postalCode": "411001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 18.5204,
                "longitude": 73.8567
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.linkedin.com/company/growthikmedia/",
                "https://twitter.com/growthikmedia"
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
