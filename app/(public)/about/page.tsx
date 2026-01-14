import { Metadata } from "next";

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
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
          About Growthik Media
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-[var(--text-secondary)] mb-6">
            Welcome to Growthik Media - your trusted partner in digital
            marketing and video production. We are a team of passionate
            professionals dedicated to helping businesses grow through creative
            and effective digital solutions.
          </p>

          <h2
            className="text-3xl font-bold mt-12 mb-4"
            style={{ color: "var(--color-white)" }}
          >
            Our Mission
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-6">
            To empower businesses with innovative digital marketing strategies
            and compelling video content that drives growth and engagement.
          </p>

          <h2
            className="text-3xl font-bold mt-12 mb-4"
            style={{ color: "var(--color-white)" }}
          >
            Our Services
          </h2>
          <ul className="list-disc list-inside text-lg text-[var(--text-secondary)] mb-6 space-y-2">
            <li>Video Production & Editing</li>
            <li>Content Creation & Strategy</li>
            <li>Social Media Marketing</li>
            <li>SEO & Digital Marketing</li>
            <li>Brand Development</li>
          </ul>

          <h2
            className="text-3xl font-bold mt-12 mb-4"
            style={{ color: "var(--color-white)" }}
          >
            Why Choose Us?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-6">
            With years of experience and a proven track record, we deliver
            results that matter. Our team combines creativity with data-driven
            strategies to ensure your brand stands out in the digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
}
