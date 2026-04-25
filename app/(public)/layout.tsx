import Header from "@/components/PublicComponents/comman/header/Header";
import Footer from "@/components/PublicComponents/comman/Footer";
import SEO from "@/components/PublicComponents/comman/SEO";
import PageViewTracker from "@/components/PublicComponents/comman/PageViewTracker";
import GTM from "@/components/PublicComponents/comman/GTM";
import AOSInit from "@/components/PublicComponents/comman/AOSInit";
import { CONTACT_INFO } from "@/constants/contact";

import ClientUtilities from "@/components/PublicComponents/comman/ClientUtilities";
import ThemeProviderWrapper from "@/components/PublicComponents/comman/ThemeProviderWrapper";
import { Metadata } from "next";

// The ClientUtilities component now handles the deferred loading of
// widgets (Chatbot, Floating Socials, WhatsApp, etc.) to keep layout.tsx
// clean and avoid SSR-related hydration mismatches or dynamic import errors.

export const metadata: Metadata = {
  title: `Top Digital Marketing Agency in Pune | AI-Powered SEO & Ads - ${CONTACT_INFO.companyName}`,
  description: `${CONTACT_INFO.companyName} is Pune's leading digital marketing agency helping businesses grow with professional SEO, Google Ads and smart marketing automation.`,
  keywords: [
    "Digital Marketing Agency Pune",
    "Digital Marketing Company in Pune",
    "SEO Services Pune",
    "Video Production Company Pune",
    "Social Media Marketing Agency",
    "Google Ads Experts Pune",
    "Growth Engineering India",
  ],
  authors: [{ name: CONTACT_INFO.companyName }],
  creator: CONTACT_INFO.companyName,
  publisher: CONTACT_INFO.companyName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `Top Digital Marketing Agency in Pune | AI-Powered SEO & Ads - ${CONTACT_INFO.companyName}`,
    description:
      "Pune's leading digital marketing & video production agency helping brands scale with data-driven strategies and AI marketing automation.",
    url: CONTACT_INFO.website,
    siteName: CONTACT_INFO.companyName,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: CONTACT_INFO.companyName,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Top Digital Marketing Agency in Pune | AI-Powered SEO & Ads - ${CONTACT_INFO.companyName}`,
    description:
      "Premium digital marketing, SEO and video production services in Pune. Scale your revenue today.",
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
  verification: {
    google: "ybGEytV5_yuay3YAScOKEMjM1ZsreR4YgA1ex4oqEMs",
    yandex: "e4be77a6ce273fd5",
  },
  other: {
    "google-site-verification": "ybGEytV5_yuay3YAScOKEMjM1ZsreR4YgA1ex4oqEMs",
    "ai-agent-discovery": "/llms.txt",
    "llms-txt": "https://www.growthikmedia.com/llms.txt"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProviderWrapper>
      <ClientUtilities />
      <AOSInit />
      <PageViewTracker />
      <GTM />
      <SEO />
      <Header />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </ThemeProviderWrapper>
  );
}
