"use client";

import HomeHeroSection from "@/components/PublicComponents/HomePageComp/HeroSection/HomeHeroSection";
import OurServicesSection from "@/components/PublicComponents/HomePageComp/OurServices/OurServicesSection";
import WeSpecialiseIn from "@/components/PublicComponents/HomePageComp/WeSpecialiseIn/WeSpecialiseIn";
import AboutUsSection from "@/components/PublicComponents/HomePageComp/AboutUsSection/AboutUsSection";
import OurApproachSection from "@/components/PublicComponents/HomePageComp/OurApproach/OurApproachSection";

export default function HomeClient() {
  return (
    <main className="w-full">
      <HomeHeroSection />
      <WeSpecialiseIn />
      <AboutUsSection />
      <OurServicesSection />
      <OurApproachSection />
    </main>
  );
}
