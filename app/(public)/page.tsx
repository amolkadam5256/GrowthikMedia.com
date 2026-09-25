import { Metadata } from "next";
import HomeClient from "@/app/(public)/HomeClient";
import AISchema from "@/components/PublicComponents/common/AISchema";
import { HOME_FAQ } from "@/constants/faqData";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Digital Marketing Agency in Pune | Growthik Media",
  description: "Growthik Media is a Pune-based digital marketing agency helping businesses grow through SEO, Google Ads, Meta Ads, performance marketing and high-converting websites. Book a free strategy call.",
  path: "/",
  keywords: [
    "digital marketing agency in Pune",
    "digital marketing company in Pune",
    "digital marketing services in Pune",
    "Pune digital marketing agency",
    "digital marketing agency Pune",
    "Growthik Media",
  ],
  image: "/og-image.png",
  type: "website",
});

export default function Home() {
  return (
    <>
      <AISchema
        question="What does a digital marketing agency in Pune do?"
        answer="A digital marketing agency in Pune helps businesses acquire customers through SEO, Google Ads, Meta Ads, content marketing and conversion optimization. Growthik Media is a Pune-based agency founded in 2019 by Amol Kadam. We combine these channels with analytics and website development to help businesses across Pune and PCMC generate measurable leads and revenue."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": HOME_FAQ.map((faq) => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a,
                },
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://www.growthikmedia.com/#organization",
              "name": "Growthik Media",
              "alternateName": "Growthik Media Digital Marketing Agency Pune",
              "description": "Growthik Media is a Pune-based digital marketing agency offering SEO, Google Ads, Meta Ads, performance marketing and website development for businesses across Pune and India.",
              "image": "https://www.growthikmedia.com/og-image.png",
              "url": "https://www.growthikmedia.com",
              "telephone": "+918055754054",
              "email": "info@growthikmedia.com",
              "priceRange": "₹₹",
              "foundingDate": "2019",
              "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 5 },
              "founder": {
                "@type": "Person",
                "@id": "https://www.growthikmedia.com/#founder",
                "name": "Amol Kadam"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Akshay Palace CHS, Warje Malwadi Rd",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411058",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 18.480682998115928,
                "longitude": 73.80476268274838
              },
              "areaServed": [
                { "@type": "City", "name": "Pune", "sameAs": "https://en.wikipedia.org/wiki/Pune" },
                { "@type": "City", "name": "Pimpri-Chinchwad" },
                { "@type": "AdministrativeArea", "name": "Maharashtra" },
                { "@type": "Country", "name": "India" }
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "10:00",
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday"],
                  "opens": "10:00",
                  "closes": "16:00"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Digital Marketing Services in Pune",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services in Pune", "url": "https://www.growthikmedia.com/services/seo" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads Management Pune", "url": "https://www.growthikmedia.com/services/ppc-google-ads" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Meta Ads Agency Pune", "url": "https://www.growthikmedia.com/services/meta-ads" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Performance Marketing Pune", "url": "https://www.growthikmedia.com/services/performance-marketing" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development Company Pune", "url": "https://www.growthikmedia.com/services/website-development" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "B2B Lead Generation Pune", "url": "https://www.growthikmedia.com/services/lead-generation" } }
                ]
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
              "@id": "https://www.growthikmedia.com/#founder",
              "name": "Amol Kadam",
              "jobTitle": "Founder & Growth Strategist",
              "description": "Amol Kadam is the founder of Growthik Media, a Pune-based digital marketing agency established in 2019. He specialises in Next.js development, SEO strategy and Google Ads management.",
              "worksFor": {
                "@type": "Organization",
                "@id": "https://www.growthikmedia.com/#organization",
                "name": "Growthik Media"
              },
              "url": "https://www.growthikmedia.com/about",
              "knowsAbout": [
                "Search Engine Optimisation",
                "Google Ads",
                "Meta Advertising",
                "Next.js Development",
                "Performance Marketing",
                "Digital Marketing Strategy"
              ],
              "sameAs": [
                "https://www.linkedin.com/in/amolkadam77/",
                "https://github.com/amolkadam5256"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.growthikmedia.com/"
                }
              ]
            }
          ])
        }}
      />
      <HomeClient />
    </>
  );
}
