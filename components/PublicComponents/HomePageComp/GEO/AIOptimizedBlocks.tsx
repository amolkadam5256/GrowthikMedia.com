import React from "react";
import Link from "next/link";

const CORE_LINKS = [
  { href: "/services/seo/", label: "SEO Services in Pune" },
  { href: "/services/ppc-google-ads/", label: "Google Ads Management" },
  { href: "/services/meta-ads/", label: "Meta Ads" },
  { href: "/services/performance-marketing/", label: "Performance Marketing" },
  { href: "/services/website-development/", label: "Website Development" },
  { href: "/services/lead-generation/", label: "B2B Lead Generation" },
];

const AIOptimizedBlocks = () => {
  return (
    <section className="py-10 md:py-14 bg-(--background) border-b border-(--border)">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-black text-(--text-primary) tracking-tight mb-4">
          What does a digital marketing agency in Pune do?
        </h2>
        <p className="text-base md:text-lg text-(--text-secondary) leading-relaxed mb-6">
          A digital marketing agency in Pune helps businesses acquire customers
          through SEO, Google Ads, Meta Ads, content marketing and conversion
          optimization. Growthik Media combines these channels with analytics
          and website development to help Pune and PCMC businesses generate
          measurable leads and revenue.
        </p>
        <ul className="flex flex-wrap gap-3 list-none p-0">
          {CORE_LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-block px-4 py-2 text-sm font-bold border border-(--border) text-(--text-primary) hover:border-(--color-primary) hover:text-(--color-primary) transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AIOptimizedBlocks;
