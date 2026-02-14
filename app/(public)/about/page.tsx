import { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/comman/header/Header";
import Footer from "@/components/comman/Footer";

const AboutTeamSection = dynamic(
  () => import("@/components/AboutPageComp/AboutTeamSection"),
  {
    ssr: true,
  },
);

export const metadata: Metadata = {
  title: "About Us | Growthik Media - Your Digital Marketing Partner",
  description:
    "Learn about Growthik Media, a leading digital marketing and video production agency in Pune. Discover our mission, values, and the team behind your success.",
  keywords:
    "about growthik media, digital marketing agency pune, video production company, our story, our team",
  authors: [{ name: "Growthik Media" }],
  openGraph: {
    title: "About Us | Growthik Media",
    description:
      "Learn about Growthik Media, your trusted partner for digital marketing and video production in Pune.",
    url: "https://www.growthikmedia.com/about",
    siteName: "Growthik Media",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Growthik Media",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Growthik Media",
    description:
      "Learn about Growthik Media, your trusted partner for digital marketing and video production in Pune.",
    images: ["/og-image.png"],
    creator: "@growthikmedia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.growthikmedia.com/about",
  },
};

export default function About() {
  return (
    <main className="bg-(--background) min-h-screen pt-20">
      {/* About Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-(--border)">
        <div className="absolute inset-0 bg-linear-to-b from-(--color-primary)/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-4 mb-6" data-aos="fade-up">
              <div className="w-12 h-[2px] bg-(--color-primary)" />
              <span className="text-(--color-primary) font-bold uppercase tracking-[0.3em] text-xs">
                Our Story
              </span>
              <div className="w-12 h-[2px] bg-(--color-primary)" />
            </div>

            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black text-(--text-primary) uppercase tracking-tighter mb-8 leading-none"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Architecting <br />
              <span className="text-(--color-primary)">Digital Alpha</span>
            </h1>

            <p
              className="text-xl md:text-2xl text-(--text-secondary) max-w-3xl font-medium leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We started with a simple belief: that high-performance marketing
              shouldn't be reserved for billion-dollar corporations. We bring
              enterprise-grade digital strategies to high-growth brands.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 border-b border-(--border)">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-black text-(--text-primary) uppercase tracking-tighter mb-8">
                More Than An Agency, <br />
                <span className="text-(--color-primary)">
                  We Are Your Partner
                </span>
              </h2>
              <div className="space-y-8">
                <div className="bg-(--surface) p-8 border border-(--border) hover:border-(--color-primary)/30 transition-all">
                  <h3 className="text-xl font-black text-(--text-primary) uppercase mb-3">
                    Our Mission
                  </h3>
                  <p className="text-(--text-secondary) leading-relaxed">
                    To empower businesses with innovative digital marketing
                    strategies and compelling video content that drives
                    exponential growth and genuine engagement.
                  </p>
                </div>
                <div className="bg-(--surface) p-8 border border-(--border) hover:border-(--color-primary)/30 transition-all">
                  <h3 className="text-xl font-black text-(--text-primary) uppercase mb-3">
                    Our Vision
                  </h3>
                  <p className="text-(--text-secondary) leading-relaxed">
                    To become the undisputed leader in performance marketing by
                    2026, setting the standard for AI-integrated growth
                    architectures.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6" data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-black text-(--text-primary) uppercase tracking-tighter mb-8">
                Human-Driven <br />
                <span className="text-(--color-primary)">Tech-Powered</span>
              </h2>
              <p className="text-lg text-(--text-secondary) leading-relaxed mb-8">
                At Growthik Media, we blend deep technical expertise with
                creative intuition. Our team is comprised of specialists who
                don't just use tools—they build the systems that drive modern
                commerce.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Performance First",
                  "Data Transparency",
                  "Aggressive Growth",
                  "Radical Innovation",
                ].map((value) => (
                  <div
                    key={value}
                    className="flex items-center gap-3 p-4 bg-(--background) border border-(--border)"
                  >
                    <div className="w-2 h-2 bg-(--color-primary)" />
                    <span className="text-xs font-black text-(--text-primary) uppercase tracking-widest">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <AboutTeamSection />
    </main>
  );
}
