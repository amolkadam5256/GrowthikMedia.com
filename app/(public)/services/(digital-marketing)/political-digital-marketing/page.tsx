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
  title: "Top Political Digital Marketing Pune | Growthik Media",
  description: "Win elections with the top political digital marketing agency in Pune. Professional social media management, sentiment analysis, and voter outreach strategies.",
  alternates: {
    canonical: "https://www.growthikmedia.com/services/political-digital-marketing/",
  },
  openGraph: {
    title: "Top Political Digital Marketing Pune | Growthik Media",
    description: "Win elections with the top political digital marketing agency in Pune. Professional social media management, sentiment analysis, and voter outreach strategies.",
    url: `${CONTACT_INFO.website}/services/political-digital-marketing/`,
    siteName: "Growthik Media",
    locale: "en_IN",
    type: "website",
  },
};

export default function PoliticalDigitalMarketingPage() {
  const serviceName = "Political Digital Marketing";
  const h1 = "Top Political Digital Marketing Pune";

  return (
    <>
      <Script
        id="schema-political-digital-marketing"
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
              In today&apos;s political landscape, the battle for the ballot is fought on smartphone screens. We help candidates in Pune build a formidable online presence through data-driven strategies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/audit" className="px-8 py-4 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-black transition-all duration-300 shadow-lg shadow-(--color-primary)/30 flex items-center justify-center gap-2 w-full sm:w-auto">
                Request Private Growth Audit <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </header>

        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight">Modernizing Democracy: Political Digital Marketing in Pune</h2>
              <p className="text-(--text-secondary) leading-relaxed">
                At Growthik Media, we provide the most comprehensive political digital marketing in Pune. We understand the unique social fabric of Pune and Maharashtra, allowing us to craft localized messaging that resonates with specific voter demographics. Our approach is purely data-driven, combining sentiment analysis with hyper-local targeting to ensure your vision reaches every voter in your constituency.
              </p>

              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mt-12">Voter Outreach and Sentiment Analysis in the Digital Age</h2>
              <p className="text-(--text-secondary) leading-relaxed">
                Effective election struggle requires more than just rally photos. We implement advanced social listening tools to monitor public sentiment in real-time, allowing candidates to address local Pune issues as they arise. From WhatsApp broadcast management to Facebook and Instagram community building, we ensure your narrative is consistent and persuasive across every ward.
              </p>

              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mt-12">Reputation Management and Rapid Response Teams</h2>
              <p className="text-(--text-secondary) leading-relaxed">
                Politics is fast-paced, and digital narratives can change in an instant. Growthik Media provides a dedicated rapid response team that monitors for misinformation and negative campaigning, allowing for immediate course correction. We focus on building a positive, visionary brand for the candidate through high-quality storytelling and compliance with EC guidelines.
              </p>
            </div>

            <div className="border-t border-(--border) pt-16">
              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mb-8 text-center">Frequently Asked Questions</h2>
              <div className="grid gap-8">
                <div>
                  <h3 className="text-xl font-bold text-(--text-primary) mb-3 text-center">Is political digital marketing different from corporate marketing?</h3>
                  <p className="text-(--text-secondary) text-center">Yes. Political marketing in Pune involves shorter timelines, higher emotional engagement, and a focus on &quot;conversion&quot; to a vote rather than a product sale.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-(--text-primary) mb-3 text-center">How do you target specific voters in a Pune constituency?</h3>
                  <p className="text-(--text-secondary) text-center">We use advanced demographic data including age, location (down to the society level), and interest-based targeting to ensure your message reaches the right electorate.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-(--text-primary) mb-3 text-center">How do you handle fake news or negative campaigns?</h3>
                  <p className="text-(--text-secondary) text-center">We provide 24/7 monitoring and a response framework to debunk misinformation immediately with facts and positive narratives, protecting your reputation in Pune.</p>
                </div>
              </div>
            </div>

            <div className="bg-(--surface) p-8 md:p-12 rounded-4xl border border-(--border) text-center">
              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-(--text-secondary) mb-8 max-w-2xl mx-auto font-medium">
                The next election will be won on digital screens. Partner with Pune&apos;s most experienced political digital marketing agency to build a winning narrative.
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
