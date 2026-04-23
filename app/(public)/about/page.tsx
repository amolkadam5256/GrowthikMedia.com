import { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { CONTACT_INFO, STRUCTURED_DATA_IDS } from "@/constants/contact";

const AboutHeroSection = dynamic(
  () => import("@/components/PublicComponents/AboutPageComp/AboutHeroSection"),
  { ssr: true },
);
const TrustProofSection = dynamic(
  () => import("@/components/PublicComponents/AboutPageComp/TrustProofSection"),
  { ssr: true },
);
const AboutFounderSection = dynamic(
  () =>
    import("@/components/PublicComponents/AboutPageComp/AboutFounderSection"),
  { ssr: true },
);
const WhyDifferentSection = dynamic(
  () =>
    import("@/components/PublicComponents/AboutPageComp/WhyDifferentSection"),
  { ssr: true },
);
const AboutGrowthFrameworkSection = dynamic(
  () =>
    import("@/components/PublicComponents/AboutPageComp/AboutGrowthFrameworkSection"),
  { ssr: true },
);
const TechStackSection = dynamic(
  () => import("@/components/PublicComponents/AboutPageComp/TechStackSection"),
  { ssr: true },
);
const AIPhilosophySection = dynamic(
  () =>
    import("@/components/PublicComponents/AboutPageComp/AIPhilosophySection"),
  { ssr: true },
);
const QualificationBlockSection = dynamic(
  () =>
    import("@/components/PublicComponents/AboutPageComp/QualificationBlockSection"),
  { ssr: true },
);
const AboutFinalCTASection = dynamic(
  () =>
    import("@/components/PublicComponents/AboutPageComp/AboutFinalCTASection"),
  { ssr: true },
);

export const metadata: Metadata = {
  title: "About Growthik Media | Pune SEO & Performance Marketing",
  description: "Meet Growthik Media, a Pune digital partner building SEO, Google Ads and high-performance web systems that turn traffic into leads.",
  keywords:
    "about digital marketing agency Pune, SEO experts Pune, performance marketing Pune, Growthik Media team, Amol Kadam founder, reliable digital agency Pune, web development Pune, grow business online Pune",
  alternates: {
    canonical: "https://www.growthikmedia.com/about/",
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
    title:
      "About Growthik Media - Digital Marketing Agency in Pune",
    description:
      "Growthik Media is Pune's results-focused digital growth partner helping brands scale through AI-driven SEO, performance marketing and web engineering. Meet our team.",
    url: `${CONTACT_INFO.website}/about/`,
    siteName: "Growthik Media",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Growthik Media - Digital Marketing Agency Pune",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Growthik Media - Digital Marketing Agency in Pune",
    description:
      "Pune's AI-powered digital marketing agency. Meet the team behind ROI-driven SEO, Google Ads & high-performance web development.",
    images: ["/og-image.png"],
    creator: "@growthikmedia",
  },
};

// JSON-LD structured data for Organization
const getOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": STRUCTURED_DATA_IDS.organization,
    name: "Growthik Media",
    alternateName: "Growthik Media Pune",
    url: CONTACT_INFO.website,
    logo: `${CONTACT_INFO.website}/brand/growthik-media-transparent-logo.png`,
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
      jobTitle: "Founder & Digital Strategist",
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
          text: "Growthik Media is Pune's leading performance marketing agency that focuses on ROI-driven strategies, combining AI-powered SEO, precision paid media and high-conversion web engineering to deliver predictable growth.",
        },
      },
      {
        "@type": "Question",
        name: "How is Growthik different from other agencies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlike traditional agencies that focus on simple marketing campaigns and vanity metrics, Growthik Media is a growth engineering company. We build predictable revenue systems using AI automation, data analytics and performance engineering to ensure sustainable business growth.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer SEO services for Pune businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we specialize in high-performance SEO for local businesses. We don't just 'do SEO' - we build search strategies that capture high-intent traffic and turn it into leads for businesses in Baner, Wakad and beyond.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Growthik Media located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Growthik Media is based in Warje, Pune and serves clients across Hinjewadi, Baner, Wakad, PCMC, Kothrud and throughout Maharashtra and India.",
        },
      },
    ],
  };
};

// JSON-LD structured data for AboutPage
const getAboutPageSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${CONTACT_INFO.website}/about/#webpage`,
    name: "About Growthik Media",
    description:
      "Growthik Media is an AI-powered growth engineering company and performance marketing agency in Pune.",
    url: `${CONTACT_INFO.website}/about/`,
    isPartOf: {
      "@id": STRUCTURED_DATA_IDS.website,
    },
    mainEntity: {
      "@type": "Organization",
      "@id": STRUCTURED_DATA_IDS.organization,
    },
  };
};

// JSON-LD structured data for Person (Founder)
const getPersonSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${CONTACT_INFO.website}/#amol-kadam`,
    name: "Amol Kadam",
    jobTitle: "Founder & Growth Architect",
    url: "https://www.linkedin.com/in/amolkadam77/",
    worksFor: {
      "@type": "Organization",
      "@id": STRUCTURED_DATA_IDS.organization,
    },
    knowsAbout: [
      "Digital Marketing",
      "Performance Marketing",
      "Next.js Web Architecture",
      "Search Engine Optimization",
      "AI Growth Automation",
    ],
    sameAs: ["https://www.linkedin.com/in/amolkadam77/"],
  };
};

export default function About() {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationSchema(),
      getAboutPageSchema(),
      getFAQSchema(),
      getPersonSchema(),
    ],
  };

  return (
    <main className="bg-[--background] min-h-screen pt-20 overflow-hidden">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />

      {/* 1. HERO SECTION */}
      <AboutHeroSection />

      {/* 2. TRUST PROOF */}
      <TrustProofSection />

      {/* 3. FOUNDER AUTHORITY (WITH TEAM SECTION) */}
      <AboutFounderSection />

      {/* 4. WHY GROWTHIK IS DIFFERENT (AI Architecture + Local Expertise) */}
      <WhyDifferentSection />

      {/* 5. 4-STEP FRAMEWORK */}
      <AboutGrowthFrameworkSection />

      {/* 6. TECHNOLOGY STACK */}
      <TechStackSection />

      {/* 8. JOURNEY TIMELINE */}
      <AIPhilosophySection />

      {/* 9. QUALIFICATION BLOCK */}
      <QualificationBlockSection />

      {/* 10. FINAL CTA SECTION */}
      <AboutFinalCTASection />
    </main>
  );
}
