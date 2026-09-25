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
  title: `Digital Marketing Agency in Pune | ${CONTACT_INFO.companyName}`,
  description: `${CONTACT_INFO.companyName} is a Pune-based digital marketing agency helping businesses grow with SEO, Google Ads, Meta Ads and high-converting websites.`,
  path: "/",
  keywords: [
    "digital marketing agency in Pune",
    "digital marketing company in Pune",
    "digital marketing services in Pune",
    "Pune digital marketing agency",
    "Growthik Media",
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
