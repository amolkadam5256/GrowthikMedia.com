import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Trophy, BarChart, Target, Zap } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Client Success Stories & Case Studies | Growthik Media",
  description: "Detailed case studies of how Growthik Media helped Pune businesses scale with SEO, Web Development, and Performance Marketing strategies.",
  alternates: { canonical: "/portfolio/case-studies/" },
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen py-32 px-6 lg:px-12 bg-(--background)">
      <div className="max-w-5xl mx-auto">
        <header className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-sm font-bold text-(--color-primary) mb-6 uppercase tracking-widest">
            <Trophy className="w-4 h-4" /> Proven Results
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight uppercase leading-[1.1]">
            Our Client <br /> <span className="text-(--color-primary)">Success Stories</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We don't just deliver services; we build predictable growth engines. Explore how we've helped brands in Pune and beyond achieve market dominance.
          </p>
        </header>

        <div className="space-y-12">
          {/* Case Study 1: SEO */}
          <section className="p-8 md:p-12 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="lg:w-2/3">
                <div className="flex items-center gap-3 mb-4 text-sm font-black text-blue-600 uppercase tracking-widest">
                  <BarChart className="w-5 h-5" /> SEO & Organic Growth
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight">Real Estate Portal: 400% Traffic Growth</h2>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  <strong>The Challenge:</strong> A prominent real estate aggregator in Pune was struggling with stagnant organic traffic and high dependency on paid ads. Their technical foundation was weak, with thousands of duplicate pages and broken canonicals.
                </p>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  <strong>Our Solution:</strong> We implemented a multi-phase Technical SEO recovery, fixing indexation issues and restructuring their internal linking using a siloing approach. We then launched a localized content strategy targeting high-intent "flats for sale in [area]" keywords.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-8 border-y border-gray-100">
                  <div>
                    <div className="text-2xl font-black text-gray-900">412%</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Traffic Increase</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gray-900">120+</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Top 3 Rankings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gray-900">65%</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Lead Boost</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Study 2: Web Dev */}
          <section className="p-8 md:p-12 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="lg:w-2/3">
                <div className="flex items-center gap-3 mb-4 text-sm font-black text-green-600 uppercase tracking-widest">
                  <Zap className="w-5 h-5" /> Web Development (Next.js)
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight">E-commerce Brand: Sub-Second Load Times</h2>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  <strong>The Challenge:</strong> A boutique fashion brand was losing 40% of their mobile visitors due to a slow WordPress-based storefront that took 7 seconds to load.
                </p>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  <strong>Our Solution:</strong> We rebuilt their entire storefront using Next.js and Headless Shopify. This allowed for lightning-fast page transitions and a superior mobile experience. We optimized Core Web Vitals to hit 99+ scores across the board.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-8 border-y border-gray-100">
                  <div>
                    <div className="text-2xl font-black text-gray-900">0.8s</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">LCP Speed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gray-900">22%</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Conv. Rate Lift</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gray-900">3.5x</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Mobile Sales</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Study 3: Social Media */}
          <section className="p-8 md:p-12 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="lg:w-2/3">
                <div className="flex items-center gap-3 mb-4 text-sm font-black text-purple-600 uppercase tracking-widest">
                  <Target className="w-5 h-5" /> Performance Marketing
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight">B2B SaaS: ₹5.2 Crore Pipeline Generated</h2>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  <strong>The Challenge:</strong> A SaaS startup in Hinjewadi had a great product but zero brand reach among decision-makers in the US and Europe.
                </p>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  <strong>Our Solution:</strong> We created a hyper-targeted LinkedIn Ads campaign combined with an automated Email Outreach sequence. We used data-backed ABM (Account Based Marketing) to reach only C-level executives at Fortune 500 companies.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-8 border-y border-gray-100">
                  <div>
                    <div className="text-2xl font-black text-gray-900">₹5.2Cr</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Pipeline Value</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gray-900">8x</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">ROAS</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gray-900">45%</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Meeting Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-24 p-12 rounded-[2rem] bg-linear-to-r from-gray-900 to-black text-white text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/20 blur-[100px]" />
          <h2 className="text-3xl font-black mb-6 uppercase tracking-tight relative z-10">Start Your Success Story Today</h2>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto relative z-10">
            Join 200+ businesses that have scaled their revenue with Growthik Media's digital marketing and AI expertise.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-(--color-primary) text-white font-black rounded-2xl hover:bg-white hover:text-black transition-all duration-300 relative z-10 shadow-xl shadow-red-500/20 uppercase tracking-widest">
            Book My Strategy Call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
