"use client";

import React from "react";
import dynamic from "next/dynamic";
import HomeHeroSection from "@/components/PublicComponents/HomePageComp/HeroSection/HomeHeroSection";
import TrustStrip from "@/components/PublicComponents/HomePageComp/TrustStrip/TrustStrip";

// Lazy load non-critical sections to reduce TBT and improve LCP
const ProblemSolutionSection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/ProblemSolution/ProblemSolutionSection"),
  { ssr: true },
);
const AboutCompanySection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/AboutCompany/AboutCompanySection"),
  { ssr: true },
);
const OurServicesSection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/OurServices/OurServicesSection"),
  { ssr: true },
);
const GrowthFrameworkSection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/OurApproach").then(
      (m) => m.GrowthFrameworkSection,
    ),
  { ssr: true },
);
const WhyChooseUsSection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/WhyChooseUs/WhyChooseUsSection"),
  { ssr: true },
);
const PortfolioHighlightsSection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/PortfolioHighlights").then(
      (m) => m.PortfolioHighlightsSection,
    ),
  { ssr: true },
);
const TestimonialSection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/Testimonials").then(
      (m) => m.TestimonialSection,
    ),
  { ssr: true },
);
const CircularRevealSection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/CircularRevealHero/CircularRevealSection"),
  { ssr: true },
);
const FAQSection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/FAQSection/FAQSection"),
  { ssr: true },
);
const FinalCTASection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/FinalCTA/FinalCTASection"),
  { ssr: true },
);

const HomeClient = () => {
  return (
    <main className="relative bg-(--background)">
      {/* 1. Hero - First Impression & Value Proposition */}
      <HomeHeroSection />

      {/* 2. Trust Strip - Immediate Social Proof */}
      <TrustStrip />

      {/* 3. Problem → Solution - Identify Pain Points & Position Solution */}
      <ProblemSolutionSection />

      {/* 4. About Company - Human Connection & Mission */}
      <AboutCompanySection />

      {/* 5. Our Services - What We Offer */}
      <OurServicesSection />

      {/* 6. Growth Framework - How We Work (Process) */}
      <GrowthFrameworkSection />

      {/* 7. Why Choose Us - USPs & Differentiators */}
      <WhyChooseUsSection />

      {/* 8. Portfolio - Proof of Work & Results */}
      <PortfolioHighlightsSection />

      {/* 9. Testimonials - Client Success Stories & Social Proof */}
      <TestimonialSection />

      {/* 10. Circular Reveal - Visual Engagement & Brand Messaging */}
      <CircularRevealSection />

      {/* 11. FAQ - Address Final Objections */}
      <FAQSection />

      {/* 12. Final CTA - Strong Closing & Conversion */}
      <FinalCTASection />
    </main>
  );
};

HomeClient.displayName = "HomeClient";
export default HomeClient;
