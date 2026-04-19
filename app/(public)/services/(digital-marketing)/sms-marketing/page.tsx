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
  title: "Bulk SMS Marketing Services in Pune | Growthik Media",
  description: "Scale your business with the best bulk SMS marketing services in Pune. Growthik Media delivers high-ROI promotional and transactional SMS campaigns that convert.",
  alternates: {
    canonical: "https://www.growthikmedia.com/services/sms-marketing/",
  },
  openGraph: {
    title: "Bulk SMS Marketing Services in Pune | Growthik Media",
    description: "Scale your business with the best bulk SMS marketing services in Pune. Growthik Media delivers high-ROI promotional and transactional SMS campaigns that convert.",
    url: `${CONTACT_INFO.website}/services/sms-marketing/`,
    siteName: "Growthik Media",
    locale: "en_IN",
    type: "website",
  },
};

export default function SmsMarketingPage() {
  const serviceName = "SMS Marketing";
  const h1 = "Bulk SMS Marketing Services in Pune";

  return (
    <>
      <Script
        id="schema-sms-marketing"
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
              In an era of digital noise, bulk SMS marketing remains one of the most reliable ways to reach your audience instantly. At Growthik Media, we provide end-to-end SMS marketing services in Pune that cut through the clutter.
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
              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight">Direct Engagement through Precision SMS Campaigns in Pune</h2>
              <p className="text-(--text-secondary) leading-relaxed">
                Text messages boast a 98% open rate, with most being read within three minutes of delivery. Our strategy focuses on timing, personalization, and clear calls to action (CTAs) to ensure your message doesn&apos;t just land but also leads to action. Whether you are a retail outlet in Kothrud or a real estate developer in Hinjewadi, our local Pune expertise allows us to craft messages that resonate with the regional demographic. We handle everything from database segmentation to DLT registration assistance, ensuring your promotional SMS service is compliant and effective from day one.
              </p>

              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mt-12">Strategic Bulk SMS Services for Business Growth</h2>
              <p className="text-(--text-secondary) leading-relaxed">
                Effective SMS campaigns in India require more than just a list of numbers; they require a data-driven approach. We specialize in both transactional and promotional SMS services, helping Pune businesses automate their customer journey. Our platforms provide real-time delivery reports and link-tracking capabilities, so you can measure the exact ROI of every campaign. We understand the Pune market&apos;s unique pulse-leveraging local festivals, shopping habits, and business cycles to schedule your broadcasts for maximum impact. By integrating SMS with your wider digital marketing funnel, we create a multi-touchpoint experience that keeps your brand top-of-mind.
              </p>

              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mt-12">Technical Excellence and DLT Compliance</h2>
              <p className="text-(--text-secondary) leading-relaxed">
                Navigating the regulatory landscape of SMS marketing in India can be complex. Growthik Media simplifies this by managing the technical hurdles of DLT (Distributed Ledger Technology) registration on your behalf. We ensure that your Sender IDs are verified and your templates are approved, preventing unnecessary delays or message blocks. Our infrastructure is built for high-volume throughput, ensuring that thousands of messages are delivered simultaneously without lag. For businesses in Pune looking for a professional identity in digital form, SMS is the fastest way to get your contact details into a prospect’s hand.
              </p>
            </div>

            <div className="border-t border-(--border) pt-16">
              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mb-8 text-center">Frequently Asked Questions</h2>
              <div className="grid gap-8">
                <div>
                  <h3 className="text-xl font-bold text-(--text-primary) mb-3 text-center">What is the difference between promotional and transactional SMS?</h3>
                  <p className="text-(--text-secondary) text-center">Promotional SMS is used for marketing offers and discounts during specific hours, while transactional SMS is used for alerts, OTPs, and order confirmations 24/7.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-(--text-primary) mb-3 text-center">How long does it take to set up an SMS campaign in Pune?</h3>
                  <p className="text-(--text-secondary) text-center">Once your DLT registration is complete and templates are approved, a campaign can be launched in minutes. We assist Pune business owners with the initial setup to ensure a smooth start.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-(--text-primary) mb-3 text-center">Can I track who clicked the links in my SMS?</h3>
                  <p className="text-(--text-secondary) text-center">Yes, our advanced bulk SMS platform includes link-shortening and tracking features, providing you with clear ROI data for your campaigns in Pune.</p>
                </div>
              </div>
            </div>

            <div className="bg-(--surface) p-8 md:p-12 rounded-4xl border border-(--border) text-center">
              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-(--text-secondary) mb-8 max-w-2xl mx-auto font-medium">
                Elevate your customer outreach with the most reliable bulk SMS marketing services in Pune. Don&apos;t let your business get lost in the digital shuffle-start reaching your clients directly today.
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
