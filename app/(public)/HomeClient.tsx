"use client";

import HomeHeroSection from "@/components/PublicComponents/HomePageComp/HeroSection/HomeHeroSection";
import WeSpecialiseIn from "@/components/PublicComponents/HomePageComp/WeSpecialiseIn/WeSpecialiseIn";
import AboutUsSection from "@/components/PublicComponents/HomePageComp/AboutUsSection/AboutUsSection";

export default function HomeClient() {
  return (
    <main className="w-full">
      <HomeHeroSection />
      <WeSpecialiseIn />
      <AboutUsSection />
    </main>
  );
}
