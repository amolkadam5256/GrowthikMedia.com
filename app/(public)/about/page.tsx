import { Metadata } from "next";
import dynamic from "next/dynamic";
import { CONTACT_INFO } from "@/constants/contact";

const AboutHeroSection = dynamic(
  () => import("@/components/PublicComponents/AboutPageComp/AboutHeroSection"),
  { ssr: true },
);
const WhoWeAreSection = dynamic(
  () => import("@/components/PublicComponents/AboutPageComp/WhoWeAreSection"),
  { ssr: true },
);
const AboutFounderSection = dynamic(
  () =>
    import("@/components/PublicComponents/AboutPageComp/AboutFounderSection"),
  { ssr: true },
);
const AboutGrowthFrameworkSection = dynamic(
  () =>
    import("@/components/PublicComponents/AboutPageComp/AboutGrowthFrameworkSection"),
  { ssr: true },
);
const DifferentiatorsSection = dynamic(
  () =>
    import("@/components/PublicComponents/AboutPageComp/DifferentiatorsSection"),
  { ssr: true },
);
const LocalExpertiseSection = dynamic(
  () =>
    import("@/components/PublicComponents/AboutPageComp/LocalExpertiseSection"),
  { ssr: true },
);
const AIPhilosophySection = dynamic(
  () =>
    import("@/components/PublicComponents/AboutPageComp/AIPhilosophySection"),
  { ssr: true },
);
const AboutFinalCTASection = dynamic(
  () =>
    import("@/components/PublicComponents/AboutPageComp/AboutFinalCTASection"),
  { ssr: true },
);

export const metadata: Metadata = {
  title: "About Growthik Media – AI-Powered Growth Engineering Company in Pune",
  description:
    "Growthik Media is an AI-powered growth engineering company that builds predictable revenue systems — not just marketing campaigns. We help ambitious brands scale with ROI-driven performance engineering.",
  keywords:
    "Growthik Media, Growth Engineering Company Pune, AI-Powered Marketing Pune, Predictable Revenue Systems, Performance Marketing Pune, Digital Growth Agency India",
  alternates: {
    canonical: `${CONTACT_INFO.website}/about/`,
  },
  openGraph: {
    title:
      "About Growthik Media – Performance-Driven Digital Marketing Agency in Pune",
    description:
      "Growthik Media is a results-focused digital growth partner helping ambitious brands scale through AI-driven SEO, performance marketing, and conversion-focused web engineering.",
    url: `${CONTACT_INFO.website}/about/`,
    siteName: "Growthik Media",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Growthik Media",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

// JSON-LD structured data for Organization
const getOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Growthik Media",
    alternateName: "Growthik Media Pune",
    url: CONTACT_INFO.website,
    logo: `${CONTACT_INFO.website}/logo.png`,
    sameAs: [
      CONTACT_INFO.social.facebook,
      CONTACT_INFO.social.twitter,
      CONTACT_INFO.social.instagram,
      CONTACT_INFO.social.linkedin,
      CONTACT_INFO.social.youtube,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT_INFO.phone.primary,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi", "mr"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT_INFO.address.line1,
      addressLocality: CONTACT_INFO.address.city,
      addressRegion: CONTACT_INFO.address.state,
      postalCode: CONTACT_INFO.address.pincode,
      addressCountry: "IN",
    },
    founder: {
      "@type": "Person",
      name: "Amol Kadam",
      jobTitle: "Founder & Growth Architect",
      url: "https://www.linkedin.com/in/amolkadam77/",
    },
  };
};

// JSON-LD structured data for FAQ
const getFAQSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why choose Growthik Media in Pune?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Growthik Media is Pune's leading performance marketing agency that focuses on ROI-driven strategies, combining AI-powered SEO, precision paid media, and high-conversion web engineering to deliver predictable growth.",
        },
      },
      {
        "@type": "Question",
        name: "How is Growthik different from other agencies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlike traditional agencies that focus on simple marketing campaigns and vanity metrics, Growthik Media is a growth engineering company. We build predictable revenue systems using AI automation, data analytics, and performance engineering to ensure sustainable business growth.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer AI SEO services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we specialize in AI-driven SEO strategies that utilize semantic analysis and predictive algorithms to rank your business for high-intent keywords, ensuring sustainable organic traffic and lead generation.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Growthik Media located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Growthik Media is based in Warje, Pune, and serves clients across Hinjewadi, Baner, Wakad, PCMC, Kothrud, and throughout Maharashtra and India.",
        },
      },
    ],
  };
};

export default function About() {
  const organizationSchema = getOrganizationSchema();
  const faqSchema = getFAQSchema();

  return (
    <main className="bg-[--background] min-h-screen pt-20 overflow-hidden">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO SECTION — BRAND AUTHORITY INTRO */}
      <AboutHeroSection />

      {/* 2. WHO WE ARE — BRAND STORY SECTION */}
      <WhoWeAreSection />

      {/* 4. FOUNDER STORY — HIGH AUTHORITY SECTION */}
      <AboutFounderSection />

      {/* 5. OUR APPROACH — UNIQUE GROWTH METHODOLOGY */}
      <AboutGrowthFrameworkSection />

      {/* 6. WHAT MAKES US DIFFERENT */}
      <DifferentiatorsSection />

      {/* 8. LOCAL EXPERTISE SECTION */}
      <LocalExpertiseSection />

      {/* 9. AI & TECHNOLOGY PHILOSOPHY & Timeline */}
      <AIPhilosophySection />

      {/* 11. FINAL CTA SECTION */}
      <AboutFinalCTASection />
    </main>
  );
}
