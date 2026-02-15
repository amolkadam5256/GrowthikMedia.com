import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Growthik Media - Get in Touch",
  description:
    "Get in touch with Growthik Media for professional video production, content creationand digital marketing services. We're here to help bring your vision to life.",
  keywords:
    "contact growthik media, video production inquiry, content creation services, digital marketing contact, pune video production",
  authors: [{ name: "Growthik Media" }],
  openGraph: {
    title: "Contact Us | Growthik Media",
    description:
      "Get in touch with Growthik Media for professional video production and content creation services.",
    url: "https://www.growthikmedia.com/contact",
    siteName: "Growthik Media",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Growthik Media",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Growthik Media",
    description:
      "Get in touch with Growthik Media for professional video production and content creation services.",
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
    canonical: "https://www.growthikmedia.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
