"use client";

import React from "react";
import HeroSection from "@/components/PublicComponents/ContactPage/HeroSection";
import QuickContactCards from "@/components/PublicComponents/ContactPage/QuickContactCards";
import ContactForm from "@/components/PublicComponents/ContactPage/ContactForm";
import GoogleMapSection from "@/components/PublicComponents/ContactPage/GoogleMapSection";
import WhyChooseUs from "@/components/PublicComponents/ContactPage/WhyChooseUs";
import FreeConsultation from "@/components/PublicComponents/ContactPage/FreeConsultation";
import Testimonials from "@/components/PublicComponents/ContactPage/Testimonials";
import SocialMediaConnect from "@/components/PublicComponents/ContactPage/SocialMediaConnect";
import CareersSection from "@/components/PublicComponents/ContactPage/CareersSection";
import FAQSection from "@/components/PublicComponents/ContactPage/FAQSection";

export default function ContactClient() {
  return (
    <div className="min-h-screen bg-(--background) text-(--text-primary) pb-20 font-sans selection:bg-red-600 selection:text-white transition-colors duration-300">
      {/* 1. Sharp Hero Section */}
      <HeroSection />

      {/* 2. Quick Contact Cards */}
      <QuickContactCards />

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16">
          {/* Left Column: Contact Form */}
          <div className="xl:col-span-7 space-y-12">
            <ContactForm />
            <GoogleMapSection />
          </div>

          {/* Right Column */}
          <div className="xl:col-span-5 space-y-12">
            <WhyChooseUs />
            <FreeConsultation />
            <Testimonials />
            <SocialMediaConnect />
            <CareersSection />
          </div>
        </div>

        {/* 6. FAQ Section */}
        <FAQSection />
      </section>
    </div>
  );
}
