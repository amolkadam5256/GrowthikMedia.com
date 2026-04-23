import { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Caveat } from "next/font/google";
import "../assets/styles/globals.css";

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

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

import Header from "@/components/PublicComponents/comman/header/Header";
import Footer from "@/components/PublicComponents/comman/Footer";
import SEO from "@/components/PublicComponents/comman/SEO";
import PageViewTracker from "@/components/PublicComponents/comman/PageViewTracker";
import GTM from "@/components/PublicComponents/comman/GTM";
import AOSInit from "@/components/PublicComponents/comman/AOSInit";
import Script from "next/script";
import { CONTACT_INFO } from "@/constants/contact";

import ClientUtilities from "@/components/PublicComponents/comman/ClientUtilities";
import ThemeProviderWrapper from "@/components/PublicComponents/comman/ThemeProviderWrapper";
import BreadcrumbSchema from "@/components/PublicComponents/structured-data/BreadcrumbSchema";
import LocalBusinessSchema from "@/components/PublicComponents/structured-data/LocalBusinessSchema";

// The ClientUtilities component now handles the deferred loading of
// widgets (Chatbot, Floating Socials, WhatsApp, etc.) to keep layout.tsx
// clean and avoid SSR-related hydration mismatches or dynamic import errors.

export const viewport: Viewport = {
  themeColor: "#d90b1c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.growthikmedia.com'),
  title: `Top Digital Marketing Agency in Pune | AI-Powered SEO & Ads - ${CONTACT_INFO.companyName}`,
  description: `${CONTACT_INFO.companyName} is Pune's leading digital marketing agency helping businesses grow with professional SEO, Google Ads and smart marketing automation.`,
  manifest: "/brand/site.webmanifest",
  icons: {
    icon: [
      { url: "/brand/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/brand/favicon.ico",
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180" }],
  },
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
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${rostex.variable} ${rostexOutline.variable} ${caveat.variable}`}
    >
      <head>
        <link rel="icon" type="image/png" href="/brand/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/brand/favicon.svg" />
        <link rel="shortcut icon" href="/brand/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/brand/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content={CONTACT_INFO.companyName} />
        <link rel="manifest" href="/brand/site.webmanifest" />
        {/* DNS prefetch for critical third-party origins */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        {/* Preconnect for Google Fonts if used */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Microsoft Clarity - deferred until after page hydration */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "vv92qw13z9");
            `,
          }}
        />
        <LocalBusinessSchema />
        <BreadcrumbSchema />
      </head>
      <body suppressHydrationWarning={true}>
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
      </body>
    </html>
  );
}
