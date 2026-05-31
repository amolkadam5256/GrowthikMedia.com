import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, BarChart2, Rocket, Code2, Zap } from "lucide-react";
import FAQSchema from "@/components/PublicComponents/structured-data/FAQSchema";
import { CONTACT_INFO } from "@/constants/contact";

const slug = "website-development";
const title = "Website Development Company in Pune | Next.js Experts | Growthik";
const description = "Top website development company in Pune. We build high-performance, SEO-optimized Next.js websites for startups & enterprises in Hinjewadi, Baner & Magarpatta.";
const h1 = "Website Development Company in Pune";
const canonical = `https://www.growthikmedia.com/services/${slug}/`;
const features = ["Next.js & React Apps", "Core Web Vitals Pass", "Technical SEO Architecture", "Headless CMS Solutions", "Mobile-First UI/UX", "API Integrations"];

export const metadata: Metadata = {
  title, description, alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: "Growthik Media",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Website Development Agency Pune" }]
  },
};

export default function WebsiteDevelopmentPage() {
  const service = "Website Development";
  return (
    <>
      <Script id={`schema-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Next.js Website Development Pune",
          "serviceType": service,
          "provider": { "@id": `${CONTACT_INFO.website}/#localbusiness` },
          "areaServed": { "@type": "City", name: "Pune" },
          "aggregateRating": { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "145" },
        })
      }} />
      <FAQSchema
        questions={[
          { q: "Why choose Next.js for our Pune business website?", a: "Next.js offers superior speed, automatic SEO optimization, and server-side rendering, which helps your brand rank faster and stay ahead of competitors in high-traffic Pune business hubs." },
          { q: "How long is the typical website development timeline?", a: "Most corporate sites launch in 4–8 weeks; complex web applications and e-commerce platforms can take 10–16 weeks depending on custom features." },
          { q: "Do you offer web design services near Baner and Hinjewadi?", a: "Yes, we are a local Pune agency providing end-to-end design and development services for startups in Baner, Hinjewadi IT Park, and Magarpatta City." },
          { q: "Will our new website be 100% SEO-friendly?", a: "Unlike generic agencies, Growthik Media builds websites with 'Technical SEO First' logic, including schema markup, fast LCP scores, and crawl-friendly structures." },
          { q: "Do you provide website maintenance in Pune?", a: "Yes, we offer monthly maintenance retainers to keep your site updated, secure, and performing at peak speeds (90+ on PageSpeed Insights)." },
          { q: "Is custom development better than WordPress?", a: "For brands that need scalability, high security, and extreme speed, a custom Next.js build is superior. However, we also provide optimized WordPress solutions for content-heavy sites." },
          { q: "What is the cost of website development in Pune?", a: "Professional business website development in Pune starts from ₹25,000 for WordPress and ₹65,000+ for custom Next.js applications." },
          { q: "Can you integrate our CRM and Google Ads tracking?", a: "Yes, we handle the full technical integration of CRM (Hubspot/Zoho), GTM, Meta Pixel, and Google Ads conversion tracking as part of our build process." }
        ]}
      />
      <main className="bg-(--background) min-h-screen pt-24 overflow-hidden text-(--text-primary) font-sans">
        <header className="relative px-6 lg:px-12 py-20 lg:py-32 flex flex-col items-center text-center bg-(--surface) overflow-hidden border-b border-(--border)">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-(--color-primary)/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--background) border border-(--border) shadow-sm mb-6 text-sm font-bold text-(--color-primary) tracking-wide uppercase">
              <Code2 className="w-4 h-4" /> Next-Gen Technology
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-[1.1] uppercase text-(--text-primary)">
              Build Your Digital Hub: <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-primary) to-blue-500">{h1}</span>
            </h1>
            <p className="text-lg md:text-xl text-(--text-secondary) font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
              We build more than just websites. We engineer high-performance revenue engines for startups in <strong>Pune IT hubs, Magarpatta, and Kharadi</strong> that load in under 2 seconds.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/contact" className="px-8 py-4 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-black transition-all duration-300 shadow-lg shadow-(--color-primary)/30 flex items-center justify-center gap-2 w-full sm:w-auto">Start Your Build <ArrowRight className="w-5 h-5" /></Link>
              <Link href="tel:+918055754054" className="px-8 py-4 bg-(--surface) text-(--text-primary) border border-(--border) font-bold rounded-xl hover:bg-(--border) transition-all flex items-center justify-center gap-2 w-full sm:w-auto">Consulting Call</Link>
            </div>
            <p className="text-sm text-(--text-secondary)">Standard Result: All our Next.js builds score 90+ on Mobile Lighthouse and pass Core Web Vitals (CWV) out-of-the-box.</p>
          </div>
        </header>

        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight text-(--text-primary)">Performance Engineering, Not Just Coding</h2>
              <div className="w-16 h-1.5 bg-(--color-primary) mb-8"></div>
              <p className="text-(--text-secondary) font-medium text-lg mb-6 leading-relaxed">
                A slow website costs you money. We specialize in <strong>Next.js, Server-Side Rendering, and Advanced Image Optimization</strong> to ensure your Pune business wins the search game.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Lighthouse Score", value: "98/100" },
                  { label: "Average LCP", value: "<1.5s" },
                  { label: "SEO Structured Data", value: "Fully Baked" },
                ].map((stat, idx) => (
                  <div key={idx} className="rounded-2xl border border-(--border) bg-(--surface) p-4 flex items-center gap-3">
                    <BarChart2 className="w-5 h-5 text-(--color-primary)" />
                    <div>
                      <div className="text-sm font-bold text-(--text-primary)">{stat.value}</div>
                      <div className="text-xs text-(--text-secondary)">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-(--surface) p-6 rounded-2xl border border-(--border) group hover:border-(--color-primary) transition-all">
                  <Zap className="w-10 h-10 text-(--color-primary) mb-4 opacity-70 group-hover:opacity-100" />
                  <h3 className="font-bold text-lg mb-2 text-(--text-primary)">{feature}</h3>
                  <p className="text-xs text-(--text-secondary)">Built with 2026 web standards for maximum longevity.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack section */}
        <section className="px-6 lg:px-12 py-24 bg-(--surface) border-y border-(--border)">
           <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-black mb-6">Built for Scaling, Powered by Next.js</h2>
              <p className="text-(--text-secondary) mb-12">Whether you're building a real estate portal for <strong>Kothrud</strong>, an edtech platform in <strong>Baner</strong>, or a service site for <strong>Wakad</strong>, we have the stack to scale your vision.</p>
              <div className="flex flex-wrap justify-center gap-6">
                 {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Headless CMS"].map(tech => (
                    <div key={tech} className="px-6 py-3 bg-(--background) rounded-full border border-(--border) font-bold text-sm shadow-sm">{tech}</div>
                 ))}
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-4xl mx-auto text-center border-2 border-dashed border-(--border) p-12 rounded-[2.5rem]">
            <h2 className="text-3xl font-black mb-6 uppercase">Ready to Own Your Space Online?</h2>
            <p className="text-lg text-(--text-secondary) mb-8">Get a technical audit of your current site or a roadmap for your new build.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-(--color-primary) text-white font-black rounded-2xl hover:scale-105 transition-all shadow-2xl">Get Free Project Roadmap <Rocket className="w-5 h-5" /></Link>
          </div>
        </section>
      </main>
    </>
  );
}
