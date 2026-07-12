import type { Metadata } from "next";
import { CONTACT_INFO } from "@/constants/contact";

export const SITE_CONFIG = {
  name: CONTACT_INFO.companyName,
  baseUrl: CONTACT_INFO.website,
  title: "Growthik Media | AI-Powered SEO, Google Ads & Web Development",
  description:
    "Growthik Media helps modern businesses grow with performance SEO, paid media, web development, branding and AI-powered marketing systems.",
  locale: "en_IN",
  keywords: [
    "Growthik Media",
    "SEO services Pune",
    "Google Ads agency Pune",
    "web development company Pune",
    "digital marketing agency",
    "AI-powered marketing",
  ],
  image: "/og-image.png",
} as const;

export function buildCanonicalUrl(path = "/"): string {
  const normalizedPath = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}/`;
  return `${SITE_CONFIG.baseUrl}${normalizedPath}`;
}

export function buildMetadata({
  title,
  description = SITE_CONFIG.description,
  path = "/",
  keywords = [...SITE_CONFIG.keywords],
  image = SITE_CONFIG.image,
  noIndex = false,
  type = "website",
  canonical,
}: {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  canonical?: string;
}): Metadata {
  const pageTitle = title.includes(SITE_CONFIG.name) ? title : `${title} | ${SITE_CONFIG.name}`;
  const canonicalUrl = canonical ?? buildCanonicalUrl(path);
  const imageUrl = new URL(image, SITE_CONFIG.baseUrl).toString();

  return {
    title: pageTitle,
    description,
    keywords,
    metadataBase: new URL(SITE_CONFIG.baseUrl),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: canonicalUrl,
      },
    },
    openGraph: {
      title: pageTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.name,
        },
      ],
      locale: SITE_CONFIG.locale,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [imageUrl],
      creator: "@growthikmedia",
    },
    robots: {
      index: !noIndex,
      follow: true,
      googleBot: {
        index: !noIndex,
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
      "x-robots-tag": noIndex ? "noindex" : "index,follow",
      "ai-agent-discovery": "/llms.txt",
      "llms-txt": "https://www.growthikmedia.com/llms.txt",
    },
    icons: {
      icon: [
        { url: "/brand/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        { url: "/brand/favicon.svg", type: "image/svg+xml" },
      ],
      shortcut: "/brand/favicon.ico",
      apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180" }],
    },
    manifest: "/manifest.webmanifest",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
  };
}
