import { Metadata } from "next";
import { CONTACT_INFO } from "@/constants/contact";
import AuditRequestForm from "@/components/comman/AuditRequestForm";
import { ShieldCheck, Zap, BarChart4 } from "lucide-react";

export const metadata: Metadata = {
  title: `Free SEO & Growth Audit Pune | ${CONTACT_INFO.companyName}`,
  description: `Get a professional digital marketing and SEO audit for your Pune-based business. Data-driven strategy to scale your brand and maximize ROI.`,
  alternates: {
    canonical: `${CONTACT_INFO.website}/audit/`,
  },
};

export default function GrowthAudit() {
  return (
    <div className="min-h-screen py-24 md:py-32 px-4 bg-linear-to-b from-(--background) via-(--surface) to-(--background)">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Copy & Social Proof Intro */}
        <div className="space-y-8 animate-in slide-in-from-left duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--color-primary)/10 text-(--color-primary) font-black text-xs uppercase tracking-[0.2em] mb-4">
             <Zap className="w-4 h-4 fill-current" /> Free Growth Audit
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-(--text-primary) leading-[1.1] uppercase tracking-tighter">
            Stop Guessing. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-primary) to-blue-600">Start Scaling.</span>
          </h1>
          <p className="text-lg md:text-xl text-(--text-secondary) leading-relaxed font-medium">
            Most businesses fly blind when it comes to their digital growth. Our experts manually analyze 50+ data points to build your roadmap to market dominance in Pune.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
             <div className="p-4 bg-(--background) border border-(--border) rounded-2xl">
                <ShieldCheck className="w-8 h-8 text-(--color-primary) mb-3" />
                <h3 className="font-bold text-sm text-(--text-primary)">Security & Tech Audit</h3>
             </div>
             <div className="p-4 bg-(--background) border border-(--border) rounded-2xl">
                <BarChart4 className="w-8 h-8 text-blue-500 mb-3" />
                <h3 className="font-bold text-sm text-(--text-primary)">Conversion (CRO) Audit</h3>
             </div>
             <div className="p-4 bg-(--background) border border-(--border) rounded-2xl">
                <Zap className="w-8 h-8 text-yellow-500 mb-3" />
                <h3 className="font-bold text-sm text-(--text-primary)">Speed & SEO Audit</h3>
             </div>
          </div>
        </div>

        {/* Right Side: Specialized Audit Form */}
        <div className="relative animate-in slide-in-from-right duration-700">
          <div className="absolute inset-0 bg-linear-to-r from-(--color-primary)/10 to-blue-600/10 blur-[120px] rounded-full" />
          <div className="relative p-8 md:p-12 rounded-[2.5rem] border border-(--border) bg-(--background)/80 backdrop-blur-xl shadow-2xl">
            <h2 className="text-2xl font-black text-(--text-primary) mb-8 uppercase tracking-tight text-center lg:text-left underline decoration-(--color-primary) decoration-4">Request Your Report</h2>
            <AuditRequestForm />
          </div>
        </div>
      </div>
    </div>
  );
}
