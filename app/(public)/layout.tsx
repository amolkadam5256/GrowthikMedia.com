import Header from "@/components/PublicComponents/common/header/Header";
import Footer from "@/components/PublicComponents/common/Footer";
import SEO from "@/components/PublicComponents/common/SEO";
import PageViewTracker from "@/components/PublicComponents/common/PageViewTracker";
import AOSInit from "@/components/PublicComponents/common/AOSInit";
import { CONTACT_INFO } from "@/constants/contact";
import { buildMetadata } from "@/lib/seo/metadata";
import ClientUtilities from "@/components/PublicComponents/common/ClientUtilities";
import SkipLink from "@/components/PublicComponents/common/SkipLink";
import Breadcrumbs from "@/components/PublicComponents/common/Breadcrumbs";
import { Metadata } from "next";

// The ClientUtilities component now handles the deferred loading of
// widgets (Chatbot, Floating Socials, WhatsApp, etc.) to keep layout.tsx
// clean and avoid SSR-related hydration mismatches or dynamic import errors.

export const metadata: Metadata = buildMetadata({
  title: `Top Digital Marketing Agency in Pune | AI-Powered SEO & Ads - ${CONTACT_INFO.companyName}`,
  description: `${CONTACT_INFO.companyName} is Pune's leading digital marketing agency helping businesses grow with professional SEO, Google Ads and smart marketing automation.`,
  path: "/",
  keywords: [
    "Digital Marketing Agency Pune",
    "Digital Marketing Company in Pune",
    "SEO Services Pune",
    "Video Production Company Pune",
    "Social Media Marketing Agency",
    "Google Ads Experts Pune",
    "Growth Engineering India",
  ],
  image: "/og-image.png",
  type: "website",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SEO />
      <ClientUtilities />
      <AOSInit />
      <PageViewTracker />
      <SkipLink />
      <Header />
      <Breadcrumbs />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
}
