import { Metadata } from "next";
import { Monitor, Globe, Search, Target, Zap, BarChart } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";
import LocationPageTemplate from "@/app/(public)/_locationPage/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Web Design Company in Baner Pune | Growthik Media",
  description:
    "Best web design company in Baner, Pune. We build fast, SEO-optimized, and conversion-focused websites for local businesses. Get a free quote today.",
  keywords:
    "website design company baner, web design baner pune, website development baner, best web design company baner pune",
  alternates: {
    canonical: `${CONTACT_INFO.website}/website-design-company-in-baner`,
  },
  openGraph: {
    title: "Web Design Company in Baner Pune | Growthik Media",
    description:
      "Best website design company in Baner, Pune — premium websites for startups, agencies, and businesses in Baner & Balewadi area.",
    url: `${CONTACT_INFO.website}/website-design-company-in-baner`,
    siteName: "Growthik Media",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function WebsiteDesignBaner() {
  return (
    <LocationPageTemplate
      area="Baner"
      city="Pune"
      primaryService="Website Design Company"
      slug="website-design-company-in-baner"
      headline="Top Website Design Company in Baner"
      subheadline="Premium website design and development for startups, agencies, restaurants, clinics, and retail businesses in Baner and Balewadi — built to rank, designed to convert."
      areaDescription="Baner is at the heart of Pune's entrepreneurial ecosystem — a thriving mix of tech startups, boutique agencies, premium restaurants, fitness studios, healthcare clinics, and upscale retail. Businesses in Baner serve one of Pune's most digitally active and affluent audiences. A poorly designed or slow-loading website is a competitive disadvantage you can't afford. Growthik Media creates stunning, lightning-fast websites for Baner businesses that make an exceptional first impression and rank prominently in Google's search results for high-intent local keywords."
      services={[
        { icon: Monitor, name: "Startup Website Design", desc: "Modern, investor-ready website designs for Baner startups — built to impress and convert from day one." },
        { icon: Globe, name: "Restaurant & Hospitality Websites", desc: "Visually rich, mobile-optimized websites for Baner's restaurants, cafes, and hospitality businesses with online reservations." },
        { icon: Search, name: "Local SEO & Baner Rankings", desc: "Dominate 'near me' searches for your business category in Baner, Balewadi, and surrounding areas." },
        { icon: Target, name: "Agency & Professional Websites", desc: "Portfolio-led websites for agencies, consultants, and professional service firms in the Baner/Aundh corridor." },
        { icon: Zap, name: "Performance-First Development", desc: "Industry-leading 90+ PageSpeed scores, zero CLS, and sub-2-second load times on every website we build." },
        { icon: BarChart, name: "Conversion Optimization", desc: "Strategic UX, CTAs, and landing page design that turns Baner's web traffic into qualified business leads." },
      ]}
      faqs={[
        {
          q: "What makes Growthik Media the best website design company in Baner?",
          a: "We combine three things that most agencies in Baner lack: premium design quality, technical performance excellence (90+ PageSpeed), and SEO built into every website from day one. We also offer transparent pricing and dedicated account management.",
        },
        {
          q: "Do you design websites for restaurants and cafes in Baner?",
          a: "Yes. We have experience building visually stunning websites for restaurants and hospitality businesses in Baner — complete with menu displays, photo galleries, online reservations, Google Maps integration, and local SEO for food-related searches.",
        },
        {
          q: "What is the cost of a website for a startup in Baner?",
          a: "Startup websites typically cost ₹25,000–₹1,50,000 depending on the features required. We offer startup-friendly packages that include product/service pages, an about page, team section, contact form, and basic SEO setup.",
        },
        {
          q: "Can you help with digital marketing beyond just the website?",
          a: "Absolutely. We offer a full suite of digital marketing services — SEO, Google Ads, Meta Ads, social media management, and content marketing — making us a single-vendor solution for your entire digital presence in Baner.",
        },
      ]}
    />
  );
}
