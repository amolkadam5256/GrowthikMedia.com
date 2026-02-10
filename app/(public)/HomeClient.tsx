"use client";

import HomeHeroSection from "@/components/PublicComponents/HomePageComp/HeroSection/HomeHeroSection";
import OurServicesSection from "@/components/PublicComponents/HomePageComp/OurServices/OurServicesSection";
import FAQSection from "@/components/PublicComponents/HomePageComp/FAQSection/FAQSection";
import { GrowthFrameworkSection } from "@/components/PublicComponents/HomePageComp/OurApproach";
import { PortfolioHighlightsSection } from "@/components/PublicComponents/HomePageComp/PortfolioHighlights";
import CircularRevealSection from "@/components/PublicComponents/HomePageComp/CircularRevealHero/CircularRevealSection";
import { TestimonialSection } from "@/components/PublicComponents/HomePageComp/Testimonials";
import TrustStrip from "@/components/PublicComponents/HomePageComp/TrustStrip/TrustStrip";
import ProblemSolutionSection from "@/components/PublicComponents/HomePageComp/ProblemSolution/ProblemSolutionSection";
import WhyChooseUsSection from "@/components/PublicComponents/HomePageComp/WhyChooseUs/WhyChooseUsSection";
import AboutCompanySection from "@/components/PublicComponents/HomePageComp/AboutCompany/AboutCompanySection";
import FinalCTASection from "@/components/PublicComponents/HomePageComp/FinalCTA/FinalCTASection";

export default function HomeClient() {
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
}
