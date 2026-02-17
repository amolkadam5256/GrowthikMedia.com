import { Metadata } from "next";
import { CONTACT_INFO } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Our Portfolio | Growthik Media - Success Stories",
  description:
    "Explore our diverse portfolio of successful digital marketing campaigns, stunning websitesand high-impact video productions.",
  keywords:
    "digital marketing portfolio, website portfolio, video production case studies, success stories",
  alternates: {
    canonical: `${CONTACT_INFO.website}/portfolio/`,
  },
  openGraph: {
    title: "Our Portfolio | Growthik Media - Success Stories",
    description:
      "Explore our diverse portfolio of successful digital marketing campaigns, stunning websitesand high-impact video productions.",
    url: `${CONTACT_INFO.website}/portfolio/`,
    siteName: "Growthik Media",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Growthik Media Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen py-32 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-linear-to-r from-(--color-primary) to-(--color-primary-light) bg-clip-text text-transparent uppercase tracking-wider">
          Our Portfolio
        </h1>
        <div className="w-32 h-1.5 bg-(--color-primary) mx-auto mb-16 rounded-full"></div>

        <p className="text-xl text-(--text-secondary) mb-16 max-w-3xl mx-auto">
          We have helped hundreds of businesses achieve their goals through
          creative and data-driven digital solutions. Check out some of our
          featured work below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="group relative overflow-hidden rounded-2xl aspect-video bg-(--card-background) border border-(--border-color) shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold mb-2">
                  Featured Project {item}
                </h3>
                <p className="text-gray-300 text-sm">
                  Full digital marketing & branding overhaul
                </p>
              </div>
              <div className="flex items-center justify-center h-full">
                <span className="text-(--text-secondary) italic">
                  Project Showcase Coming Soon
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg text-(--text-secondary)">
            More blog posts coming soon! Stay tuned for expert insights and
            industry updates.
          </p>
        </div>

        <div className="mt-24 p-12 rounded-3xl border border-(--border-color) bg-(--card-background) shadow-2xl backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Want to see more?
          </h2>
          <p className="text-lg text-(--text-secondary) mb-8 max-w-2xl mx-auto">
            We are in the process of migrating our extensive portfolio to this
            new platform. In the meantime, you can reach out to us for specific
            case studies in your industry.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-(--color-primary) text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Inquire About Our Work
          </a>
        </div>
      </div>
    </div>
  );
}
