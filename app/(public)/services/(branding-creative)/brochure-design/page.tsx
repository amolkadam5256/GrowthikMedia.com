import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Monitor,
  Smartphone,
  Zap,
  LayoutTemplate,
  Shield,
  Search,
  Settings,
  Target,
  Users,
  Award,
  TrendingUp,
  MapPin,
  ChevronDown,
  ArrowRight,
  Code,
  Globe,
} from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Brochure Designing Services in Pune | Growthik Media",
  description:
    "Looking for a professional Brochure Designing company in Pune? We provide custom, SEO-optimized, Brochure Designing services for businesses. Call Now!",
  keywords:
    "Brochure Designing Company in Pune, SEO Company in Pune, Digital Marketing Agency in Pune, Custom Brochure Designing Pune",
  alternates: {
    canonical: `${CONTACT_INFO.website}/services/brochure-design`,
  },
};

export default function ServicePage() {
  return (
    <main className="bg-(--background) min-h-screen pt-24 overflow-hidden text-(--text-primary) font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative px-6 lg:px-12 py-20 lg:py-32 flex flex-col items-center text-center bg-(--surface) overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-(--color-primary)/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--background) border border-(--border) shadow-sm shadow-black/5 mb-6 text-sm font-bold text-(--color-primary) tracking-wide">
            <Globe className="w-4 h-4" />
            Brochure Designing Services Pune
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 tracking-tighter leading-[1.1] uppercase text-(--text-primary)">
            Best Brochure Designing Services in Pune –{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-(--color-primary) to-(--color-primary-light)">
              Custom, SEO-Friendly & Conversion-Focused
            </span>
          </h1>
          <p className="text-lg md:text-xl text-(--text-secondary) font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
            Looking for professional Brochure Designing in Pune? We create
            custom, data-driven, SEO-optimized solutions that help
            businesses generate leads, increase visibility, and grow revenue. As
            a leading Digital Marketing Agency in Pune, we don’t just deliver
            services — we build high-performance digital assets that rank on
            Google and convert visitors into customers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`tel:${CONTACT_INFO.phone.primary.replace(/\s+/g, "")}`}
              className="px-8 py-4 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-black transition-all duration-300 shadow-lg shadow-(--color-primary)/30 flex items-center justify-center gap-2 w-full sm:w-auto transform hover:-translate-y-1"
            >
              Call Now: {CONTACT_INFO.phone.primary}
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-(--surface) text-(--text-primary) font-bold rounded-xl border border-(--border) hover:border-(--color-primary) transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Get Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US */}
      <section className="px-6 lg:px-12 py-20 bg-(--background)">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight text-(--text-primary)">
              Professional Brochure Designing for Modern Businesses
            </h2>
            <div className="w-20 h-1.5 bg-(--color-primary) mx-auto mb-6"></div>
            <p className="text-(--text-secondary) font-medium text-lg max-w-2xl mx-auto">
              Your digital presence is your storefront. If it’s slow, outdated,
              or poorly executed, you lose customers instantly. We deliver
              Brochure Designing services that look premium and perform exceptionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: LayoutTemplate, title: "Modern Design & Strategy" },
              { icon: Search, title: "SEO-Optimized Execution" },
              { icon: Smartphone, title: "Mobile-Responsive Solutions" },
              { icon: Zap, title: "High-Speed Performance" },
              { icon: Target, title: "Conversion-Focused" },
              { icon: Shield, title: "Secure & Scalable" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-(--surface) border border-(--border) hover:border-(--color-primary)/50 transition-all duration-300 group shadow-sm hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-(--color-primary)/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-(--color-primary) group-hover:text-white text-(--color-primary) transition-colors">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-(--text-primary)">{feature.title}</h3>
                <p className="text-(--text-secondary) text-sm font-medium">
                  We ensure our services meet the highest standard of modern
                  digital marketing practices.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SEO OPTIMIZED */}
      <section className="px-6 lg:px-12 py-20 bg-(--surface) border-t border-(--border)">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight text-(--text-primary)">
              Brochure Designing with Built-In ROI Advantage
            </h2>
            <div className="w-20 h-1.5 bg-(--color-primary) mb-6"></div>
            <div className="bg-(--background) border-l-4 border-(--color-primary) p-4 mb-8">
              <p className="text-lg text-(--text-primary) font-bold">
                Most agencies deliver basic services.{" "}
                <span className="text-(--color-primary)">
                  We engineer predictable growth systems.
                </span>
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Targeted audience research",
                "Data-driven strategies",
                "High-performance execution",
                "Technical optimization",
                "Detailed reporting",
                "Continuous A/B testing",
                "Conversion rate focus",
                "Competitive analysis",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-(--text-secondary) font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-(--color-primary) shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
             <div className="p-6 bg-(--background) rounded-xl border border-(--border)">
              <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-(--text-primary)">
                We help you rank for:
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Brochure Designing Company in Pune",
                  "SEO Company in Pune",
                  "Digital Marketing Agency in Pune",
                  "Top Brochure Designing Services",
                ].map((kw, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-(--surface) border border-(--border) rounded-full text-xs font-bold text-(--text-secondary)"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-(--color-primary)/20 to-transparent rounded-3xl transform rotate-3 scale-105 pointer-events-none"></div>
            <div className="relative bg-(--background) border border-(--border) rounded-3xl p-8 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-3 border-b border-(--border) pb-4 mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="bg-(--surface) text-xs px-4 py-2 rounded-full font-mono text-(--text-secondary) w-full text-center flex items-center justify-center font-bold truncate">
                  <Globe className="w-3 h-3 mr-2 hidden sm:block" /> growthikmedia.com
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-8 bg-(--surface) rounded-md w-3/4"></div>
                <div className="h-4 bg-(--surface) opacity-70 rounded-md w-full"></div>
                <div className="h-4 bg-(--surface) opacity-70 rounded-md w-5/6"></div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="h-28 bg-(--surface) border border-(--border) rounded-xl"></div>
                  <div className="h-28 bg-(--surface) border border-(--border) rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. IMPORTANCE & 6. PROCESS */}
      <section className="px-6 lg:px-12 py-20 bg-(--background)">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Importance */}
          <div>
            <h2 className="text-3xl font-black mb-4 uppercase tracking-tight text-(--text-primary)">
              Importance of Brochure Designing for Business Growth
            </h2>
            <div className="w-16 h-1.5 bg-(--color-primary) mb-8"></div>
            <div className="space-y-6">
              {[
                {
                  title: "Brand Authority Building",
                  desc: "Establish trust and credibility in your market.",
                },
                {
                  title: "Enhanced User Engagement",
                  desc: "Keep your audience interested and active.",
                },
                {
                  title: "Higher Conversion Rate",
                  desc: "Turn visitors into leads and paying customers.",
                },
                {
                  title: "Scalable Growth",
                  desc: "Expand your reach as your business operations grow.",
                },
                {
                  title: "Competitive Edge",
                  desc: "Stay ahead of competitors in Pune’s digital market.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="mt-1 w-10 h-10 rounded-full bg-(--surface) border border-(--border) flex items-center justify-center shrink-0 group-hover:bg-(--color-primary) group-hover:text-white transition-colors text-(--color-primary)">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-(--text-primary)">{item.title}</h3>
                    <p className="text-(--text-secondary) font-medium text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="bg-(--surface) p-8 md:p-10 rounded-3xl shadow-xl border border-(--border)">
            <h2 className="text-3xl font-black mb-4 uppercase tracking-tight text-(--text-primary)">
              Our Execution Process
            </h2>
            <div className="w-16 h-1.5 bg-(--color-primary) mb-8"></div>
            <div className="space-y-4">
              {[
                "Requirement & Goal Analysis",
                "Market & Competitor Research",
                "Strategy Formulation",
                "Creative Asset Development",
                "Campaign Deployment",
                "Continuous Optimization",
                "Data Analysis & Reporting",
                "Scaling & Retargeting",
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-(--background) rounded-xl border border-(--border) hover:border-(--color-primary)/30 transition-colors"
                >
                  <div className="w-8 h-8 bg-(--surface) border border-(--border) text-(--color-primary) rounded-full flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                    {idx + 1}
                  </div>
                  <span className="font-bold text-(--text-primary) text-sm">{step}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-(--text-secondary) text-center font-bold tracking-widest uppercase">
              We ensure every campaign is data-backed, monitored, and
              optimized for maximum ROI.
            </p>
          </div>
        </div>
      </section>

      {/* 7. WHY WE ARE THE BEST & 8. LOCAL */}
      <section className="px-6 lg:px-12 py-20 bg-black text-white border-t border-(--border)">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 justify-between">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight text-white">
              Why We Are the Best Brochure Designing Company in Pune
            </h2>
            <p className="text-(--color-primary-light) font-bold text-xl mb-10 tracking-wide">
              We are not just agency vendors — we are your growth partners.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Monitor, stat: "350+", label: "Projects Delivered" },
                { icon: Users, stat: "400+", label: "Happy Clients" },
                { icon: Award, stat: "7+ Years", label: "Experience" },
                { icon: Target, stat: "40+", label: "Expert Team Members" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-[#111] p-4 rounded-xl border border-gray-800"
                >
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800 shrink-0 text-(--color-primary)">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-black leading-none text-white">
                      {item.stat}
                    </div>
                    <div className="text-xs text-gray-400 mt-1 font-bold uppercase tracking-wider">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/3 bg-[#111] text-white p-8 rounded-3xl shadow-2xl border border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-(--color-primary) w-8 h-8" />
              <h3 className="text-2xl font-black uppercase">Local Expertise</h3>
            </div>
            <p className="text-gray-400 font-medium mb-6">
              We serve businesses across Pune:
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Baner",
                "Wakad",
                "Hinjewadi",
                "Aundh",
                "Kothrud",
                "Hadapsar",
                "Viman Nagar",
                "PCMC",
              ].map((loc, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-black border border-gray-800 rounded-lg text-xs font-bold uppercase tracking-wider text-gray-300"
                >
                  {loc}
                </span>
              ))}
            </div>
            <p className="mt-8 pt-6 border-t border-gray-800 text-sm font-black text-(--color-primary-light) uppercase tracking-widest text-center">
              Helping businesses dominate Pune’s digital space.
            </p>
          </div>
        </div>
      </section>

      {/* 9. CASE STUDIES & RESULTS */}
      <section className="px-6 lg:px-12 py-20 bg-(--background)">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight text-(--text-primary)">
            Case Studies & Results
          </h2>
          <div className="w-20 h-1.5 bg-(--color-primary) mx-auto mb-12"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stat: "3x",
                label: "Average ROI Increase",
                icon: TrendingUp,
              },
              { stat: "40%", label: "Decrease in CPA", icon: Target },
              {
                stat: "85%",
                label: "Client Retention Rate",
                icon: Users,
              },
              {
                stat: "#1",
                label: "Market Positioning",
                icon: Search,
              },
            ].map((res, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-(--border) bg-(--surface) hover:-translate-y-2 hover:border-(--color-primary)/50 transition-all duration-300 group shadow-sm"
              >
                <div className="w-16 h-16 bg-(--background) rounded-full flex items-center justify-center mx-auto mb-6 border border-(--border) group-hover:scale-110 transition-transform">
                  <res.icon className="w-8 h-8 text-(--color-primary)" />
                </div>
                <div className="text-4xl font-black mb-3 text-(--text-primary)">
                  {res.stat}
                </div>
                <p className="text-(--text-secondary) font-bold text-sm tracking-wide">
                  {res.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PRICING & 11. FAQ */}
      <section className="px-6 lg:px-12 py-20 bg-(--surface) border-t border-(--border)">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Pricing */}
          <div className="bg-(--background) p-8 md:p-12 rounded-3xl border border-(--border) shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-(--color-primary)/5 rounded-bl-full pointer-events-none" />
            
            <h2 className="text-3xl font-black mb-4 uppercase tracking-tight text-(--text-primary)">
              Brochure Designing Pricing in Pune
            </h2>
            <div className="w-16 h-1.5 bg-(--color-primary) mb-8"></div>
            <p className="text-(--text-primary) mb-6 font-bold text-lg">
              Project costs depend on several key factors:
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Scope of work",
                "Custom feature requests",
                "Campaign duration",
                "Target geographic reach",
                "Resource allocation required",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium text-(--text-secondary)">
                  <CheckCircle2 className="w-5 h-5 text-(--color-primary)" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-(--text-secondary) font-medium mb-8">
              We offer affordable, transparent packages customized for startups,
              SMEs, and enterprises.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-black transition-colors w-full sm:w-auto shadow-lg shadow-(--color-primary)/20"
            >
              Get a Customized Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-3xl font-black mb-4 uppercase tracking-tight text-(--text-primary)">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1.5 bg-(--color-primary) mb-8"></div>
            <div className="space-y-4">
              {[
                {
                  q: `What does Brochure Designing include?`,
                  a: `Our Brochure Designing involves comprehensive planning, execution, and continuous optimization tailored to maximize business impact.`,
                },
                {
                  q: "How long does it take to see results?",
                  a: "Initial improvements are typically seen within the first month, with substantial compounding growth visible after 3-6 months depending on the specific service package.",
                },
                {
                  q: "Is SEO integrated with this service?",
                  a: "Yes. All our digital strategies place a strong emphasis on SEO best practices from the foundational level up.",
                },
                {
                  q: "Do you provide ongoing support?",
                  a: "Absolutely. We offer robust ongoing maintenance, reporting, and strategic support to ensure continued success.",
                },
              ].map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-(--background) p-6 rounded-2xl border border-(--border) cursor-pointer [&_summary::-webkit-details-marker]:hidden transition-all hover:border-(--color-primary)/30"
                >
                  <summary className="flex justify-between items-center font-bold text-lg outline-none text-(--text-primary)">
                    {faq.q}
                    <span className="transition group-open:rotate-180 bg-(--surface) p-2 rounded-full border border-(--border)">
                      <ChevronDown className="w-4 h-4 text-(--text-secondary)" />
                    </span>
                  </summary>
                  <p className="text-(--text-secondary) font-medium mt-4 leading-relaxed bg-(--surface) p-4 rounded-xl border border-(--border)/50">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. CTA SECTION */}
      <section className="px-6 lg:px-12 py-24 bg-(--color-primary) relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply pattern-grid-lg"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            Ready to Supercharge Your Business?
          </h2>
          <p className="text-xl text-white/90 font-medium mb-12">
            Partner with the leading growth engineering company in Pune and transform
            your digital trajectory immediately.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            <Link
              href={`tel:${CONTACT_INFO.phone.primary.replace(/\s+/g, "")}`}
              className="flex items-center justify-center w-full sm:w-auto gap-3 px-8 py-5 bg-black text-white rounded-xl font-bold hover:scale-105 transition-transform shadow-2xl"
            >
              Call: {CONTACT_INFO.phone.primary}
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center w-full sm:w-auto gap-3 px-8 py-5 bg-white text-black rounded-xl font-bold hover:bg-gray-100 hover:scale-105 transition-transform"
            >
              Book Free Consultation
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm font-bold uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-white" /> Baner, Pune
            </div>
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5 text-white" /> Get Instant Quote
            </div>
            <a
              href={`mailto:${CONTACT_INFO.email.info}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <MailIcon className="w-5 h-5 text-white" />{" "}
              {CONTACT_INFO.email.info}
            </a>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS (SEO Strategy) */}
      <section className="px-6 lg:px-12 py-8 bg-black text-center text-xs font-bold uppercase tracking-widest">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-3">
          <Link
            href="/services/seo"
            className="text-gray-400 hover:text-(--color-primary) transition-colors"
          >
            SEO Services
          </Link>
          <span className="text-gray-800">•</span>
          <Link
            href="/services"
            className="text-gray-400 hover:text-(--color-primary) transition-colors"
          >
            Digital Marketing
          </Link>
          <span className="text-gray-800">•</span>
          <Link
            href="/services/wordpress-development"
            className="text-gray-400 hover:text-(--color-primary) transition-colors"
          >
            WordPress
          </Link>
          <span className="text-gray-800">•</span>
          <Link
            href="/services/ecommerce-development"
            className="text-gray-400 hover:text-(--color-primary) transition-colors"
          >
            E-Commerce
          </Link>
        </div>
      </section>
    </main>
  );
}

// Inline Mail icon helper
function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
