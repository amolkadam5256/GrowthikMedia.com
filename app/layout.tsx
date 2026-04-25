import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Caveat } from "next/font/google";
import "./assets/styles/globals.css";
import "./assets/styles/fonts.css";

const rostex = localFont({
  src: [
    {
      path: "../public/fonts/Rostex-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Rostex-Oblique.ttf",
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
      path: "../public/fonts/Rostex-Outline.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Rostex-ObliqueOutline.ttf",
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

export const viewport: Viewport = {
  themeColor: "#d90b1c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.growthikmedia.com"),
  icons: {
    icon: [
      { url: "/brand/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/brand/favicon.ico",
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/brand/site.webmanifest",
};

import { Suspense } from "react";
import MetaPixel from "@/components/PublicComponents/Analytics/MetaPixel";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${rostex.variable} ${rostexOutline.variable} ${caveat.variable}`}
    >
      <body
        suppressHydrationWarning
        className="antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
      >
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
