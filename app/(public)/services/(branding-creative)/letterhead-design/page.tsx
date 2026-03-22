import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Award, CheckCircle2, ArrowRight } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Professional Letterhead Design Pune | Growthik Media",
  description: "Establish corporate authority with professional letterhead design in Pune. Custom corporate stationery and digital letterhead templates for your brand.",
  alternates: {
    canonical: "https://www.growthikmedia.com/services/letterhead-design/",
  },
  openGraph: {
    title: "Professional Letterhead Design Pune | Growthik Media",
    description: "Establish corporate authority with professional letterhead design in Pune. Custom corporate stationery and digital letterhead templates for your brand.",
    url: `${CONTACT_INFO.website}/services/letterhead-design/`,
    siteName: "Growthik Media",
    locale: "en_IN",
    type: "website",
  },
};

export default function LetterheadDesignPage() {
  const serviceName = "Letterhead Design";
  const h1 = "Professional Letterhead Design Pune";

  return (
    <>
      <Script
        id="schema-letterhead-design"
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
              Every piece of correspondence is an opportunity to reinforce your brand. We design professional letterheads in Pune that communicate trust and corporate excellence.
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
              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight">Reinforcing Brand Authority through Letterhead Design in Pune</h2>
              <p className="text-(--text-secondary) leading-relaxed">
                In the professional world, the quality of your official documents speaks volumes about your attention to detail. At Growthik Media, our letterhead design Pune services focus on creating a visual hierarchy that highlights your corporate identity while maintaining readability. For businesses in Pune, from legal firms in Shivaji Nagar to IT giants in Hinjawadi, a well-designed letterhead is more than just a logo on a page—it&apos;s a statement of professionalism. We ensure that your brand fonts, colors, and layout are standardized to create a cohesive experience across all your physical and digital correspondence.
              </p>

              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mt-12">Full-Suite Corporate Stationery and Kit Design</h2>
              <p className="text-(--text-secondary) leading-relaxed">
                Letterhead design is often part of a larger corporate identity strategy. We provide comprehensive stationery kits including matching envelopes, business cards, and invoice templates. Our corporate stationery design India experts understand the technical requirements for both printing and digital use. Whether you need a high-resolution PDF for official emails or a design optimized for offset printing in Pune, we deliver files that are versatile and high-impact. We also specialize in creating MS Word templates of your letterhead, allowing your team to easily generate professional documents in-house.
              </p>

              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mt-12">Digital-First Stationery for Modern Professionalism</h2>
              <p className="text-(--text-secondary) leading-relaxed">
                As more business moves online, having a digital letterhead is essential. We create designs that look just as good on a smartphone screen as they do on premium 100gsm paper. Growthik Media is the preferred letterhead design company Pune for brands that want to modernize their professional communication. We integrate interactive elements like clickable links and social icons for your digital versions while ensuring the layout remains clean and professional. Our designs are engineered to build trust and ensure your brand is taken seriously in every interaction.
              </p>
            </div>

            <div className="border-t border-(--border) pt-16">
              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mb-8 text-center">Frequently Asked Questions</h2>
              <div className="grid gap-8">
                <div>
                  <h3 className="text-xl font-bold text-(--text-primary) mb-3 text-center">Do you provide lettershead templates for Microsoft Word?</h3>
                  <p className="text-(--text-secondary) text-center">Yes. We provide editable .docx templates alongside your primary design files so you can easily type and print your own letters in Pune.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-(--text-primary) mb-3 text-center">What is the standard size for a professional letterhead in India?</h3>
                  <p className="text-(--text-secondary) text-center">The standard size is A4 (210mm x 297mm). We design with standard margins in mind to ensure your text fits perfectly on the page.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-(--text-primary) mb-3 text-center">Can you design matching envelopes with the letterhead?</h3>
                  <p className="text-(--text-secondary) text-center">Absolutely. We offer complete stationery design packages in Pune to ensure all your brand touchpoints are consistent and professional.</p>
                </div>
              </div>
            </div>

            <div className="bg-(--surface) p-8 md:p-12 rounded-4xl border border-(--border) text-center">
              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-(--text-secondary) mb-8 max-w-2xl mx-auto font-medium">
                Standardize your corporate communication with a design that reflects your excellence. Partner with Pune&apos;s leading branding experts today.
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
