import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Award, CheckCircle2, ArrowRight } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Business Card Design Company Pune | Growthik Media",
  description: "Make a powerful first impression with the best business card design in Pune. Premium, professional visiting card designs that reflect your brand identity.",
  alternates: {
    canonical: "https://www.growthikmedia.com/services/business-card-design/",
  },
  openGraph: {
    title: "Business Card Design Company Pune | Growthik Media",
    description: "Make a powerful first impression with the best business card design in Pune. Premium, professional visiting card designs that reflect your brand identity.",
    url: `${CONTACT_INFO.website}/services/business-card-design/`,
    siteName: "Growthik Media",
    locale: "en_IN",
    type: "website",
  },
};

export default function BusinessCardDesignPage() {
  const serviceName = "Business Card Design";
  const h1 = "Business Card Design Company Pune";

  return (
    <>
      <Script
        id="schema-business-card-design"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: serviceName,
            provider: { "@id": `${CONTACT_INFO.website}/#localbusiness` },
            areaServed: { "@type": "City", name: "Pune" },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "138",
            },
          }),
        }}
      />
      <main className="bg-(--background) min-h-screen pt-24 overflow-hidden text-(--text-primary) font-sans">
        <header className="relative px-6 lg:px-12 py-20 lg:py-32 flex flex-col items-center text-center bg-(--surface) overflow-hidden border-b border-(--border)">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-(--color-primary)/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--background) border border-(--border) shadow-sm mb-6 text-sm font-bold text-(--color-primary) tracking-wide uppercase">
              <Award className="w-4 h-4" /> Specialized Agency Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tighter leading-[1.1] uppercase text-(--text-primary)">{h1}</h1>
            <p className="text-lg md:text-xl text-(--text-secondary) font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
              In a world of digital connections, a physical business card remains your most potent networking tool. We create premium visiting cards that leave a lasting impact on your prospects in Pune.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/audit" className="px-8 py-4 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-black transition-all duration-300 shadow-lg shadow-(--color-primary)/30 flex items-center justify-center gap-2 w-full sm:w-auto">
                Get Your Free Growth Audit <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </header>

        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight">The Psychology of the First Impression: Business Card Design Pune</h2>
              <p className="text-(--text-secondary) leading-relaxed">
                Your business card is often the first tangible piece of your brand a prospect touches. At Growthik Media, we specialize in professional visiting card design that communicates authority and trust. For businesses in Pune, where networking is the backbone of growth, having a card that stands out is crucial. We focus on typography, color theory, and tactile finishes to ensure your card isn&apos;t just kept, but remembered. From minimalist corporate card design India styles to bold, creative layouts, we tailor each design to your specific industry and personality.
              </p>

              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mt-12">Premium Finishes and Custom Layouts for Discerning Brands</h2>
              <p className="text-(--text-secondary) leading-relaxed">
                A great design deserves a great finish. We go beyond basic layouts to recommend premium options like spot UV, foil stamping, embossing, and velvet-touch lamination. Our Pune design studio ensures that every element of your business card-from the paper weight to the edge-painting-reflects the quality of your services. Whether you need double-sided designs for maximum information or die-cut shapes for a unique creative identity, our experts guide you through the latest trends in the Indian corporate landscape.
              </p>

              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mt-12">Integrating Digital and Physical Identity</h2>
              <p className="text-(--text-secondary) leading-relaxed">
                Modern business cards are a bridge to your digital presence. We integrate QR codes, social media handles, and clean CTAs to ensure your physical card leads directly to your digital portfolio or website. Growthik Media is the leading business card design company Pune for professionals who want to merge traditional networking with modern marketing technology. We ensure your brand consistency is maintained across all stationery, making your corporate identity seamless and professional.
              </p>
            </div>

            <div className="border-t border-(--border) pt-16">
              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mb-8 text-center">Frequently Asked Questions</h2>
              <div className="grid gap-8">
                <div>
                  <h3 className="text-xl font-bold text-(--text-primary) mb-3 text-center">How long does it take for a custom business card design in Pune?</h3>
                  <p className="text-(--text-secondary) text-center">Our standard design process takes 3-5 business days, including iterations based on your feedback to ensure the final visiting card is perfect.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-(--text-primary) mb-3 text-center">Do you also handle the printing of the business cards?</h3>
                  <p className="text-(--text-secondary) text-center">While we are primarily a design agency, we partner with premium printing services in Pune to ensure the final physical product matches our high resolution designs.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-(--text-primary) mb-3 text-center">Should I choose a horizontal or vertical card layout?</h3>
                  <p className="text-(--text-secondary) text-center">Horizontal is classic and professional, while vertical is modern and creative. We help Pune business owners choose the layout that best suits their brand archetype.</p>
                </div>
              </div>
            </div>

            <div className="bg-(--surface) p-8 md:p-12 rounded-4xl border border-(--border) text-center">
              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-(--text-secondary) mb-8 max-w-2xl mx-auto font-medium">
                Elevate your professional networking with a card that speaks volumes about your brand. Work with Pune&apos;s leading design team today.
              </p>
              <Link href="/audit" className="px-10 py-5 bg-(--color-primary) text-white font-black rounded-2xl hover:bg-black transition-all shadow-xl inline-flex items-center gap-2">
                Claim Your Free Growth Audit <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
