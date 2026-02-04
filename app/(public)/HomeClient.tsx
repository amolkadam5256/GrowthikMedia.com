"use client";

import HomeHeroSection from "@/components/PublicComponents/HomePageComp/HeroSection/HomeHeroSection";
import OurServicesSection from "@/components/PublicComponents/HomePageComp/OurServices/OurServicesSection";
import FAQSection from "@/components/PublicComponents/HomePageComp/FAQSection/FAQSection";
import { GrowthFrameworkSection } from "@/components/PublicComponents/HomePageComp/OurApproach";
import { PortfolioHighlightsSection } from "@/components/PublicComponents/HomePageComp/PortfolioHighlights";
import CircularRevealSection from "@/components/PublicComponents/HomePageComp/CircularRevealHero/CircularRevealSection";
import { TestimonialSection } from "@/components/PublicComponents/HomePageComp/Testimonials";

export default function HomeClient() {
  return (
    <main className="relative bg-(--background)">
      <HomeHeroSection />
      <OurServicesSection />
      <PortfolioHighlightsSection />
      <GrowthFrameworkSection />
      <TestimonialSection />
      <CircularRevealSection />
      <FAQSection />
    </main>
  );
}
