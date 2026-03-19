"use client";

import React from "react";
import dynamic from "next/dynamic";
import HomeHeroSection from "@/components/PublicComponents/HomePageComp/HeroSection/HomeHeroSection";
import TrustStrip from "@/components/PublicComponents/HomePageComp/TrustStrip/TrustStrip";

// Code-split all below-fold sections.
// ssr:false in a "use client" component means Next.js emits these as separate
// JS chunks, loaded client-side only — reducing initial JS bundle & parse time.
const IndustriesWeServeSection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/IndustriesWeServe/IndustriesWeServeSection"),
  { ssr: false },
);
const ProblemSolutionSection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/ProblemSolution/ProblemSolutionSection"),
  { ssr: false },
);
const LeadMagnetSection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/LeadMagnet/LeadMagnetSection"),
  { ssr: false },
);
const AboutCompanySection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/AboutCompany/AboutCompanySection"),
  { ssr: false },
);
const FounderSection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/Founder/FounderSection"),
  { ssr: false },
);
const OurServicesSection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/OurServices/OurServicesSection"),
  { ssr: false },
);
const TechStackSection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/TechStack/TechStackSection"),
  { ssr: false },
);
const SEOAuthoritySection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/SEOAuthority/SEOAuthoritySection"),
  { ssr: false },
);
const LocalSEOAuthoritySection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/LocalSEOAuthority/LocalSEOAuthoritySection"),
  { ssr: false },
);
const PuneMarketInsightSection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/PuneMarketInsight/PuneMarketInsightSection"),
  { ssr: false },
);
const GrowthFrameworkSection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/OurApproach").then(
      (m) => m.GrowthFrameworkSection,
    ),
  { ssr: false },
);
const AIPositioningSection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/AIPositioning/AIPositioningSection"),
  { ssr: false },
);
const WhyChooseUsSection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/WhyChooseUs/WhyChooseUsSection"),
  { ssr: false },
);
const ComparisonSection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/Comparison/ComparisonSection"),
  { ssr: false },
);
const GrowthResourcesSection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/GrowthResources/GrowthResourcesSection"),
  { ssr: false },
);
const PortfolioHighlightsSection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/PortfolioHighlights").then(
      (m) => m.PortfolioHighlightsSection,
    ),
  { ssr: false },
);
const ClientSuccessMetricsSection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/ClientSuccessMetrics/ClientSuccessMetricsSection"),
  { ssr: false },
);
const PerformanceRoadmapSection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/PerformanceRoadmap/PerformanceRoadmapSection"),
  { ssr: false },
);
const InvestmentSection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/Investment/InvestmentSection"),
  { ssr: false },
);
const TestimonialSection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/Testimonials").then(
      (m) => m.TestimonialSection,
    ),
  { ssr: false },
);
const CircularRevealSection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/CircularRevealHero/CircularRevealSection"),
  { ssr: false },
);
const FAQSection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/FAQSection/FAQSection"),
  { ssr: false },
);
const FinalCTASection = dynamic(
  () =>
    import("@/components/PublicComponents/HomePageComp/FinalCTA/FinalCTASection"),
  { ssr: false },
);

const HomeClient = () => {
  return (
    <main className="relative bg-(--background)">
      {/* 1. Hero - First Impression & Value Proposition */}
      <HomeHeroSection />

      {/* 2. Trust Strip - Immediate Social Proof */}
      <TrustStrip />

      {/* 2.5 Industries We Serve - Industry Targeting & Semantic SEO */}
      <IndustriesWeServeSection />

      {/* 3. Problem → Solution - Identify Pain Points & Position Solution */}
      <ProblemSolutionSection />

      {/* 3.1 Lead Magnet - High Conversion Hook */}
      <LeadMagnetSection />

      {/* 4. About Company - Human Connection & Mission */}
      <AboutCompanySection />

      {/* 4.1 Founder Section - Personal Authority & Trust */}
      <FounderSection />

      {/* 5. Our Services - What We Offer */}
      <OurServicesSection />

      {/* 5.1 Tech Stack - Enterprise Grade Tools */}
      <TechStackSection />

      {/* 5.1 SEO Authority - Micro Expertise Block */}
      <SEOAuthoritySection />

      {/* 5.2 Local SEO Authority - Pune-Specific Expertise & E-E-A-T */}
      <LocalSEOAuthoritySection />

      {/* 5.3 Pune Market Insight - Local Data & Urgency */}
      <PuneMarketInsightSection />

      {/* 6. Growth Framework - How We Work (Process) */}
      <GrowthFrameworkSection />

      {/* 6.1 AI Positioning - Authority for 2026 */}
      <AIPositioningSection />

      {/* 7. Why Choose Us - USPs & Differentiators */}
      <WhyChooseUsSection />

      {/* 7.1 Comparison - Differentiator Proof */}
      <ComparisonSection />

      {/* 7.2 Growth Resources - Internal Linking & Content Authority */}
      <GrowthResourcesSection />

      {/* 8. Portfolio - Proof of Work & Results */}
      <PortfolioHighlightsSection />

      {/* 8.1 Client Success Metrics - E-E-A-T & Trust Building */}
      <ClientSuccessMetricsSection />

      {/* 8.2 Performance Roadmap - 90 Day Sprint to ROI */}
      <PerformanceRoadmapSection />

      {/* 8.2 Investment - Price Anchoring & Qualification */}
      <InvestmentSection />

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
