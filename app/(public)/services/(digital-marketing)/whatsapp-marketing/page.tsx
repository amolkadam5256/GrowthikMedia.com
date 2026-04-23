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
  title: "Top WhatsApp Marketing Services Pune | Growthik Media",
  description: "Boost sales with top WhatsApp marketing services in Pune. Growthik Media offers official WhatsApp Business API integration and bulk messaging for high ROI.",
  alternates: {
    canonical: "https://www.growthikmedia.com/services/whatsapp-marketing/",
  },
  openGraph: {
    title: "Top WhatsApp Marketing Services Pune | Growthik Media",
    description: "Boost sales with top WhatsApp marketing services in Pune. Growthik Media offers official WhatsApp Business API integration and bulk messaging for high ROI.",
    url: `${CONTACT_INFO.website}/services/whatsapp-marketing/`,
    siteName: "Growthik Media",
    locale: "en_IN",
    type: "website",
  },
};

export default function WhatsappMarketingPage() {
  const serviceName = "WhatsApp Marketing";
  const h1 = "Top WhatsApp Marketing Services Pune";

  return (
    <>
      <Script
        id="schema-whatsapp-marketing"
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
              With over 500 million active users in India, WhatsApp has become the primary communication tool for almost every household and business. At Growthik Media, we design conversational marketing experiences that drive results.
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
              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight">Unleashing the Power of WhatsApp Marketing in Pune</h2>
              <p className="text-(--text-secondary) leading-relaxed">
                For brands in Pune, this represents an unprecedented opportunity to engage customers in a space they already trust. Our WhatsApp marketing Pune services leverage the official WhatsApp Business API to provide secure, scalable and automated communication. This isn&apos;t just about sending notifications; it&apos;s about building &quot;WhatsApp-First&quot; business models. From automated product catalogs to AI-powered chatbots that handle FAQs for your Pune-based storefront, we help you transform a simple chat app into a powerful revenue-generating machine.
              </p>

              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mt-12">Official WhatsApp Business API Integration for Scale</h2>
              <p className="text-(--text-secondary) leading-relaxed">
                While many local vendors offer &quot;bulk messaging&quot; using unofficial methods, Growthik Media focuses on the official WhatsApp Business API to protect your brand&apos;s reputation and ensure account longevity. We help businesses in Pune obtain the &quot;Green Tick&quot; verification, which instantly builds trust and credibility. API integration allows for advanced features like multi-agent support, automated abandoned cart recovery and interactive buttons that drive users directly to your checkout page.
              </p>

              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mt-12">Conversational Commerce: The Future of Pune Businesses</h2>
              <p className="text-(--text-secondary) leading-relaxed">
                The modern customer expects instant gratification. WhatsApp allows your business to offer real-time support and personalized shopping assistance that traditional channels cannot match. Our WhatsApp bulk messaging strategies are tailored to the specific demographics of Pune, ensuring that your tone and timing are perfect for the local market. By segmenting your audience based on their past interactions, we ensure that every message sent is relevant, leading to significantly higher engagement rates.
              </p>
            </div>

            <div className="border-t border-(--border) pt-16">
              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mb-8 text-center">Frequently Asked Questions</h2>
              <div className="grid gap-8">
                <div>
                  <h3 className="text-xl font-bold text-(--text-primary) mb-3 text-center">Is bulk WhatsApp messaging legal for my business in Pune?</h3>
                  <p className="text-(--text-secondary) text-center">Yes, when done through the official WhatsApp Business API and with proper user opt-in, it is a fully compliant and legal marketing channel. We assist Pune businesses in navigating these regulations.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-(--text-primary) mb-3 text-center">Can I integrate WhatsApp with my existing CRM or Website?</h3>
                  <p className="text-(--text-secondary) text-center">Absolutely. Our technical team specializes in connecting the WhatsApp Business API with popular CRMs and E-commerce platforms like Shopify and WooCommerce to automate your lead management.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-(--text-primary) mb-3 text-center">What is a WhatsApp Chatbot and do I need one?</h3>
                  <p className="text-(--text-secondary) text-center">A WhatsApp Chatbot is an automated program that can answer queries, book appointments, or showcase products 24/7. It is highly recommended for Pune businesses looking to scale service without increasing headcount.</p>
                </div>
              </div>
            </div>

            <div className="bg-(--surface) p-8 md:p-12 rounded-4xl border border-(--border) text-center">
              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-(--text-secondary) mb-8 max-w-2xl mx-auto font-medium">
                Stop using outdated communication methods and meet your customers where they are. Growthik Media is the leading partner for WhatsApp marketing services in Pune.
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
