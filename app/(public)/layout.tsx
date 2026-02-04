import { Metadata } from "next";
import "../assets/styles/globals.css";
import "../assets/styles/fonts.css";

import Header from "../../components/comman/header/Header";
import Footer from "../../components/comman/Footer";
import SEO from "../../components/comman/SEO";
import PageViewTracker from "../../components/comman/PageViewTracker";
import GTM from "../../components/comman/GTM";
import AOSInit from "../../components/comman/AOSInit";
import FloatingSocials from "../../components/comman/FloatingSocials";
import FloatingWhatsApp from "../../components/comman/FloatingWhatsApp";
import { CONTACT_INFO } from "@/constants/contact";

import ThemeProviderWrapper from "../../components/comman/ThemeProviderWrapper";

export const metadata: Metadata = {
  metadataBase: new URL(CONTACT_INFO.website),
  title: {
    default: `${CONTACT_INFO.companyName} – Digital Marketing Agency`,
    template: `%s | ${CONTACT_INFO.companyName}`,
  },
  description: `${CONTACT_INFO.companyName} helps businesses grow with SEO, Google Ads, Social Media, and Web Development.`,
  keywords: [
    "Digital Marketing",
    "SEO",
    "Google Ads",
    "Social Media Marketing",
    "Web Development",
    "Pune",
    "India",
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
    title: CONTACT_INFO.companyName,
    description: "Digital marketing & SEO agency in Pune",
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
    title: CONTACT_INFO.companyName,
    description: "Digital marketing & SEO agency in Pune",
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
    canonical: CONTACT_INFO.website,
  },
  verification: {
    google: "ybGEytV5_yuay3YAScOKEMjM1ZsreR4YgA1ex4oqEMs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <ThemeProviderWrapper>
          <AOSInit />
          <PageViewTracker />
          <GTM />
          <SEO />
          <Header />
          <FloatingSocials />
          <FloatingWhatsApp />
          <main>{children}</main>
          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
