import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  CheckCircle2,
  Award,
  ArrowRight,
} from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Expert Media Planning and Buying Pune | Growthik Media",
  description: "Maximize your ad spend with expert media planning and buying in Pune. Our data-driven digital media strategy ensures your brand reaches the right audience.",
  alternates: {
    canonical: "https://www.growthikmedia.com/services/media-planning-buying/",
  },
  openGraph: {
    title: "Expert Media Planning and Buying Pune | Growthik Media",
    description: "Maximize your ad spend with expert media planning and buying in Pune. Our data-driven digital media strategy ensures your brand reaches the right audience.",
    url: `${CONTACT_INFO.website}/services/media-planning-buying/`,
    siteName: "Growthik Media",
    locale: "en_IN",
    type: "website",
  },
};

export default function MediaPlanningBuyingPage() {
  const serviceName = "Media Planning & Buying";
  const h1 = "Expert Media Planning and Buying Pune";

  return (
    <>
      <Script
        id="schema-media-planning-buying"
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
              Don&apos;t just spend money on ads; invest it in growth. Our media planning Pune team ensures that every rupee in your marketing budget works toward your business objectives.
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
              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight">Strategic Media Allocation for Maximum Market Penetration in Pune</h2>
              <p className="text-(--text-secondary) leading-relaxed">
                Modern media planning is about finding the &quot;sweet spot&quot; between reach and frequency. As a specialized media buying agency India, we help Pune businesses navigate the complex landscape of digital and traditional media. We don’t just look at CPMs (Cost Per Mille); we look at outcomes. Our team analyzes your audience’s media consumption habits in Pune to determine the optimal mix of platforms, whether it&apos;s hyper-targeted LinkedIn ads for a B2B startup or high-visibility programmatic display for an e-commerce brand.
              </p>

              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mt-12">Data-Backed Media Buying and Negotiation</h2>
              <p className="text-(--text-secondary) leading-relaxed">
                Securing the best ad placements at the lowest possible price requires both data and industry relationships. At Growthik Media, our digital media strategy includes real-time bidding optimization to ensure you are never overpaying for impressions. We leverage our agency scale to negotiate better rates across social platforms, search engines, and local Pune publications, passing those savings directly to our clients. 
              </p>

              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mt-12">Multi-Channel Attribution and ROI Monitoring</h2>
              <p className="text-(--text-secondary) leading-relaxed">
                The biggest mistake in media planning is failing to track the customer journey across channels. We implement advanced attribution modeling to understand how your YouTube ad in the morning influenced a search conversion in the evening. Our Pune-based analysts provide transparent, real-time reporting, allowing you to see exactly how your investment is performing and enabling us to pivot the strategy based on live data.
              </p>
            </div>

            <div className="border-t border-(--border) pt-16">
              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mb-8 text-center">Frequently Asked Questions</h2>
              <div className="grid gap-8">
                <div>
                  <h3 className="text-xl font-bold text-(--text-primary) mb-3 text-center">How do you decide which media platforms are right for my Pune business?</h3>
                  <p className="text-(--text-secondary) text-center">We start with an intensive audience research phase to identify where your potential customers spend their time online and offline in Pune, ensuring we target the most effective channels.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-(--text-primary) mb-3 text-center">What is the difference between media planning and media buying?</h3>
                  <p className="text-(--text-secondary) text-center">Media planning is the strategic phase of identifying the best channels, while media buying is the execution phase where we negotiate and purchase the actual ad space.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-(--text-primary) mb-3 text-center">Can you manage small media budgets for local startups in Pune?</h3>
                  <p className="text-(--text-secondary) text-center">Yes. We specialize in budget efficiency, ensuring that even small-scale campaigns are optimized for maximum reach and conversion within the local Pune market.</p>
                </div>
              </div>
            </div>

            <div className="bg-(--surface) p-8 md:p-12 rounded-4xl border border-(--border) text-center">
              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-(--text-secondary) mb-8 max-w-2xl mx-auto font-medium">
                Stop guessing and start growing with a scientific approach to media allocation. Partner with the top media planning agency in Pune today.
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
