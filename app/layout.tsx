import type { Metadata, Viewport } from "next";
import { Inter, Caveat } from "next/font/google";
import { buildMetadata } from "@/lib/seo/metadata";
import "./assets/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#d90b1c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = buildMetadata({
  title: "Growthik Media | SEO, Ads, Branding & Web Development",
  description:
    "AI-powered digital growth for modern brands with SEO, Google Ads, web development and performance marketing.",
  path: "/",
  type: "website",
});

import { Suspense } from "react";
import MetaPixel from "@/components/PublicComponents/Analytics/MetaPixel";
import GTM from "@/components/PublicComponents/common/GTM";
import ConsentBanner from "@/components/PublicComponents/common/ConsentBanner";
import ThemeProviderWrapper from "@/components/PublicComponents/common/ThemeProviderWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${caveat.variable}`}
    >
      <head>
        <meta name="google-adsense-account" content="ca-pub-6335044286537508" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6335044286537508"
          crossOrigin="anonymous"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}
      >
        {/* Blocking script: sets 'dark' class before first paint  -  no FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme:dark)').matches);if(d)document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
        {/* GTM Consent Mode V2 Default */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('consent', 'default', { 'ad_storage': 'denied', 'analytics_storage': 'denied', 'ad_user_data': 'denied', 'ad_personalization': 'denied' });`,
          }}
        />
        <GTM />
        <ThemeProviderWrapper>
          <Suspense fallback={null}>
            <MetaPixel />
          </Suspense>
          {children}
          <ConsentBanner />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
