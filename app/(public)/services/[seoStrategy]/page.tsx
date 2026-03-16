import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  CheckCircle2,
  Monitor,
  Target,
  Award,
  TrendingUp,
  MapPin,
  ArrowRight,
  Globe,
  BarChart,
} from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

// Next 15 requires awaiting params
export async function generateMetadata({
  params,
}: {
  params: Promise<{ seoStrategy: string }>;
}): Promise<Metadata> {
  const { seoStrategy } = await params;

  // Parse the generic slug (e.g. "seo-services-in-mumbai" or "google-ads-for-ecommerce")
  let service = "";
  let locationOrIndustry = "";
  let isLocal = false;

  if (seoStrategy.includes("-in-")) {
    const parts = seoStrategy.split("-in-");
    service = parts[0].replace(/-/g, " ");
    locationOrIndustry = parts[1].replace(/-/g, " ");
    isLocal = true;
  } else if (seoStrategy.includes("-for-")) {
    const parts = seoStrategy.split("-for-");
    service = parts[0].replace(/-/g, " ");
    locationOrIndustry = parts[1].replace(/-/g, " ");
  } else {
    // Fallback
    service = seoStrategy.replace(/-/g, " ");
    locationOrIndustry = "Pune";
    isLocal = true;
  }

  // Capitalize properly
  const titleCase = (str: string) =>
    str.replace(/\b\w/g, (l) => l.toUpperCase());
  service = titleCase(service);
  locationOrIndustry = titleCase(locationOrIndustry);

  const exactOverrides: Record<string, string> = {
    "lead-generation-company-in-pune": "Best Lead Generation Agency in Pune | Growthik Media",
  };

  const metaTitle = exactOverrides[seoStrategy] || (isLocal
    ? `Best ${service} Agency in ${locationOrIndustry} | Growthik Media`
    : `Expert ${service} for ${locationOrIndustry} Brands | Growthik Media`);

  const metaDescription = isLocal
    ? `Top-rated ${service} company in ${locationOrIndustry}. We guarantee data-driven growth, better rankings, and higher ROI. Get your free strategy call today.`
    : `Scale your ${locationOrIndustry} business with our specialized ${service}. Data-driven performance marketing tailored for your industry.`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: `${CONTACT_INFO.website}/services/${seoStrategy}`,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `${CONTACT_INFO.website}/services/${seoStrategy}`,
      siteName: "Growthik Media",
      type: "website",
    },
  };
}

export default async function ProgrammaticSeoPage({
  params,
}: {
  params: Promise<{ seoStrategy: string }>;
}) {
  const { seoStrategy } = await params;

  let service = "";
  let modifier = "";
  let type = "local"; // or "industry"

  if (seoStrategy.includes("-in-")) {
    const parts = seoStrategy.split("-in-");
    service = parts[0].replace(/-/g, " ");
    modifier = parts[1].replace(/-/g, " ");
    type = "local";
  } else if (seoStrategy.includes("-for-")) {
    const parts = seoStrategy.split("-for-");
    service = parts[0].replace(/-/g, " ");
    modifier = parts[1].replace(/-/g, " ");
    type = "industry";
  } else {
    service = seoStrategy.replace(/-/g, " ");
    modifier = "Pune";
    type = "local";
  }

  const titleCase = (str: string) =>
    str.replace(/\b\w/g, (l) => l.toUpperCase());
  service = titleCase(service);
  modifier = titleCase(modifier);

  // Dynamic Content variables
  const h1 =
    type === "local"
      ? `${service} in ${modifier}`
      : `${service} for ${modifier}`;

  const painPoint =
    type === "local"
      ? `standing out in the highly competitive ${modifier} market`
      : `scaling effectively in the ${modifier} industry without burning budget`;

  return (
    <>
      {/* Dynamic Schema specifically for this programmatic page */}
      {type === "local" && (
        <Script
          id={`schema-${seoStrategy}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: service,
              provider: { "@id": `${CONTACT_INFO.website}/#localbusiness` },
              areaServed: {
                "@type": "City",
                name: modifier,
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "138",
              },
            }),
          }}
        />
      )}

      <main className="bg-(--background) min-h-screen pt-24 overflow-hidden text-(--text-primary) font-sans">
        {/* HERO SECTION */}
        <header className="relative px-6 lg:px-12 py-20 lg:py-32 flex flex-col items-center text-center bg-(--surface) overflow-hidden border-b border-(--border)">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-(--color-primary)/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--background) border border-(--border) shadow-sm mb-6 text-sm font-bold text-(--color-primary) tracking-wide uppercase">
              <Award className="w-4 h-4" />
              Specialized Agency Services
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tighter leading-[1.1] uppercase text-(--text-primary)">
              Top Agency For <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-primary) to-blue-500">
                {h1}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-(--text-secondary) font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
              We understand that {painPoint} is your biggest hurdle. That's why
              Growthik Media builds data-driven revenue systems designed
              specifically for your needs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/contact"
                className="px-8 py-4 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-black transition-all duration-300 shadow-lg shadow-(--color-primary)/30 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Book Your Free Strategy Call <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm font-bold text-(--text-secondary) uppercase tracking-wider flex-wrap">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Guaranteed
                ROI
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Data-Driven
                Approach
              </span>
            </div>
          </div>
        </header>

        {/* CONTENT SECTION */}
        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight text-(--text-primary)">
                Scale Your Revenue With Precision {service}
              </h2>
              <div className="w-16 h-1.5 bg-(--color-primary) mb-8"></div>

              <p className="text-(--text-secondary) font-medium text-lg mb-6 leading-relaxed">
                Generic marketing doesn't work. As a specialist operating in
                this sector, we've engineered a predictable growth matrix. Our
                focus is entirely on increasing your customer acquisition while
                lowering your Cost Per Lead.
              </p>

              <div className="bg-(--surface) border-l-4 border-(--color-primary) p-6 rounded-r-xl shadow-sm">
                <p className="text-xl text-(--text-primary) font-bold">
                  Why Growthik Media?
                </p>
                <p className="mt-2 text-(--text-secondary) font-medium">
                  We replace guesswork with data. Our AI-powered strategies
                  ensure that your investment in {service} yields compounding
                  returns month over month.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: BarChart, title: "High-Intent Traffic" },
                { icon: Target, title: "Precision Targeting" },
                { icon: Monitor, title: "Conversion Optimization" },
                { icon: Globe, title: "Scalable Infrastructure" },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-(--surface) p-6 rounded-2xl border border-(--border)"
                >
                  <benefit.icon className="w-10 h-10 text-(--color-primary) mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-(--text-primary)">
                    {benefit.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
