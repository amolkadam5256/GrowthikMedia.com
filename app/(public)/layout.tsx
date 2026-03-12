import { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Caveat } from "next/font/google";
import "../assets/styles/globals.css";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

// Use next/font/local for optimized font loading
const rostex = localFont({
  src: [
    {
      path: "../../public/fonts/Rostex-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Rostex-Oblique.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-rostex",
  display: "swap",
});

const rostexOutline = localFont({
  src: [
    {
      path: "../../public/fonts/Rostex-Outline.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Rostex-ObliqueOutline.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-rostex-outline",
  display: "swap",
});

import Header from "../../components/comman/header/Header";
import Footer from "../../components/comman/Footer";
import SEO from "../../components/comman/SEO";
import PageViewTracker from "../../components/comman/PageViewTracker";
import GTM from "../../components/comman/GTM";
import AOSInit from "../../components/comman/AOSInit";
import FloatingSocials from "../../components/comman/FloatingSocials";
import FloatingWhatsApp from "../../components/comman/FloatingWhatsApp";
import { CONTACT_INFO } from "@/constants/contact";

import ClientUtilities from "../../components/comman/ClientUtilities";
import ThemeProviderWrapper from "../../components/comman/ThemeProviderWrapper";
import GrowthStrategistBot from "../../components/PublicComponents/AIChatBot/AIChatBot";

export const viewport: Viewport = {
  themeColor: "#d90b1c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(CONTACT_INFO.website),
  title: {
    default: `Top Digital Marketing Agency in Pune | AI-Powered SEO & Ads - ${CONTACT_INFO.companyName}`,
    template: `%s | ${CONTACT_INFO.companyName}`,
  },
  description: `${CONTACT_INFO.companyName} is Pune's leading digital marketing agency building predictable revenue systems with data-driven SEO, Google Ads, and AI growth engineering.`,
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "Digital Marketing Agency Pune",
    "Digital Marketing Company in Pune",
    "SEO Services Pune",
    "Video Production Company Pune",
    "Social Media Marketing",
    "Google Ads Pune",
    "Web Development India",
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
  // alternates: {
  //   canonical: "./",
  // },
  verification: {
    google: "ybGEytV5_yuay3YAScOKEMjM1ZsreR4YgA1ex4oqEMs",
    yandex: "e4be77a6ce273fd5",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${rostex.variable} ${rostexOutline.variable} ${caveat.variable}`}
    >
      <head>
        {/* Preload critical assets */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://growthikmedia.com/#organization",
                  name: "Growthik Media",
                  url: "https://growthikmedia.com",
                  logo: "https://growthikmedia.com/logo.png",
                  sameAs: [
                    "https://www.linkedin.com/company/growthikmedia/",
                    "https://twitter.com/growthikmedia",
                  ],
                },
                {
                  "@type": ["LocalBusiness", "MarketingAgency"],
                  "@id": "https://growthikmedia.com/#localbusiness",
                  name: "Growthik Media",
                  image: "https://growthikmedia.com/office.jpg",
                  telephone: "+91-8888888888",
                  url: "https://growthikmedia.com",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Pune",
                    addressLocality: "Pune",
                    addressRegion: "Maharashtra",
                    postalCode: "411001",
                    addressCountry: "IN",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: "18.5204",
                    longitude: "73.8567",
                  },
                  priceRange: "$$",
                },
              ],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        <ThemeProviderWrapper>
          <ClientUtilities />
          <AOSInit />
          <PageViewTracker />
          <GTM />
          <SEO />
          <Header />
          <FloatingSocials />
          <FloatingWhatsApp />
          <GrowthStrategistBot />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
