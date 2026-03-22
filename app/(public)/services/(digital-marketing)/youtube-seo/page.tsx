import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { CheckCircle2, Award, ArrowRight } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "YouTube Video SEO Services in Pune | Growthik Media",
  description:
    "Dominate video search with expert YouTube Video SEO services in Pune. Growthik Media helps you rank higher, increase views, and grow your channel content.",
  alternates: {
    canonical: "https://www.growthikmedia.com/services/youtube-seo/",
  },
  openGraph: {
    title: "YouTube Video SEO Services in Pune | Growthik Media",
    description:
      "Dominate video search with expert YouTube Video SEO services in Pune. Growthik Media helps you rank higher, increase views, and grow your channel content.",
    url: `${CONTACT_INFO.website}/services/youtube-seo/`,
    siteName: "Growthik Media",
    locale: "en_IN",
    type: "website",
  },
};

export default function YoutubeSeoPage() {
  const serviceName = "YouTube SEO";
  const h1 = "YouTube Video SEO Services in Pune";

  return (
    <>
      <Script
        id="schema-youtube-seo"
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
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tighter leading-[1.1] uppercase text-(--text-primary)">
              {h1}
            </h1>
            <p className="text-lg md:text-xl text-(--text-secondary) font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
              YouTube is the world’s second-largest search engine. We don&apos;t
              just upload videos; we engineer them to rank and convert through
              data-driven SEO strategies for Pune businesses.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/audit"
                className="px-8 py-4 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-black transition-all duration-300 shadow-lg shadow-(--color-primary)/30 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Get Your Free Growth Audit <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </header>

        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight">
                Accelerate Your Brand Visibility with YouTube SEO in Pune
              </h2>
              <p className="text-(--text-secondary) leading-relaxed">
                In the current digital landscape, video is no longer optional.
                For businesses in Pune looking to establish authority, a
                well-optimized YouTube channel acts as a 24/7 lead generation
                engine. At Growthik Media, we analyze your competitors, identify
                high-intent keywords relevant to the Pune market, and implement
                a strategy that ensures your videos appear when your potential
                customers are looking for answers.
              </p>

              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mt-12">
                Data-Driven Video Optimization and Channel Growth
              </h2>
              <p className="text-(--text-secondary) leading-relaxed">
                The secret to YouTube channel growth in India lies in
                understanding two key metrics: Click-Through Rate (CTR) and
                Average View Duration (AVD). Our team specializes in crafting
                high-conversion thumbnails and &quot;hook&quot; scripts that
                grab attention immediately. We handle every aspect of the
                technical SEO process, including optimized titles, detailed
                descriptions, strategic tagging, and closed captions.
              </p>

              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mt-12">
                Engagement Engineering and Community Building
              </h2>
              <p className="text-(--text-secondary) leading-relaxed">
                Ranking is just the first step; building a loyal community is
                what creates long-term value. We help you implement interactive
                elements like Cards, End Screens, and Community Tab posts to
                keep viewers on your channel longer. Growthik Media is the
                leading YouTube video SEO partner in Pune for brands that want
                measurable, sustainable channel growth rather than just vanity
                metrics.
              </p>
            </div>

            <div className="border-t border-(--border) pt-16">
              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="grid gap-8">
                <div>
                  <h3 className="text-xl font-bold text-(--text-primary) mb-3 text-center">
                    How long does it take for YouTube SEO to show results?
                  </h3>
                  <p className="text-(--text-secondary) text-center">
                    While some optimizations can lead to an immediate jump in
                    traffic, significant search-driven growth typically takes
                    4-8 weeks as the algorithm collects data on your content
                    performance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-(--text-primary) mb-3 text-center">
                    Do I need a high-end camera for successful YouTube SEO?
                  </h3>
                  <p className="text-(--text-secondary) text-center">
                    Content quality and value are more important than cinematic
                    production. Many successful channels in Pune start with
                    basic equipment while focusing on technical SEO excellence.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-(--text-primary) mb-3 text-center">
                    Can YouTube SEO help my local Pune business?
                  </h3>
                  <p className="text-(--text-secondary) text-center">
                    Yes. By targeting &quot;near me&quot; or &quot;in Pune&quot;
                    keywords in your titles and descriptions, you can attract
                    local customers looking for specific services in their city.
                  </p>
                </div>
              </div>
            </div>

            <RelatedServices
              category="social"
            />

            <div className="bg-(--surface) p-8 md:p-12 rounded-4xl border border-(--border) text-center">
              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-(--text-secondary) mb-8 max-w-2xl mx-auto font-medium">
                Don&apos;t let your great video content go to waste in the
                depths of the algorithm. Partner with the most successful
                YouTube SEO agency in Pune.
              </p>
              <Link
                href="/audit"
                className="px-10 py-5 bg-(--color-primary) text-white font-black rounded-2xl hover:bg-black transition-all shadow-xl inline-flex items-center gap-2"
              >
                Claim Your Free Growth Audit <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
