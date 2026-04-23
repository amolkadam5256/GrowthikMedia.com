import { Metadata } from "next";
import ContactClient from "./ContactClient";
import Script from "next/script";
import { CONTACT_INFO, STRUCTURED_DATA_IDS } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Growthik Media | Book a Free Strategy Call With Our Pune Experts",
  description:
    "Connect with Growthik Media for SEO, Google Ads and high-performance websites in Pune. Book your free growth strategy call today.",
  keywords:
    "contact digital marketing agency Pune, hire SEO agency Pune, Growthik Media contact, digital marketing consultation Pune, best digital marketing company Pune, SEO services contact Pune, Google Ads agency Pune, free digital marketing audit Pune",
  authors: [{ name: "Growthik Media" }],
  openGraph: {
    title: "Request a Digital Strategy Call | Growthik Media Pune",
    description:
      "Connect with Growthik Media for clear, result-driven SEO, Google Ads and high-performance websites in Pune.",
    url: "https://www.growthikmedia.com/contact/",
    siteName: "Growthik Media",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Growthik Media - Digital Marketing Agency Pune",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Digital Marketing Agency in Pune | Growthik Media",
    description:
      "Connect with Growthik Media - Pune's top digital marketing agency for SEO, Google Ads, social media & web design. Book your free strategy consultation today!",
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
    canonical: "https://www.growthikmedia.com/contact/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly will you respond to inquiries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our team typically responds within 12-24 hours during business days. For urgent enquiries, you can also call us directly at +91 80557 54054.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer free consultations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide a free digital marketing strategy consultation for new clients. Book your free session to get a customised growth plan for your business.",
      },
    },
    {
      "@type": "Question",
      name: "What services does Growthik Media provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Growthik Media offers SEO, Social Media Marketing, PPC/Google Ads, Website Development, Branding & Design and E-Commerce Solutions to businesses across Pune and India.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with businesses outside Pune?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we scale businesses across India and internationally. While we are based in Pune, our digital marketing services are available to clients in Mumbai, Delhi, Bangalore and globally.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost of digital marketing services in Pune?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our digital marketing packages are customised based on your business goals, competition and channels required. Contact us for a free consultation and we'll provide a tailored proposal.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see results from digital marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO typically shows measurable results in 3-6 months. PPC and Google Ads campaigns can deliver leads within 2-4 weeks. Social media growth depends on content strategy and ad spend.",
      },
    },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${CONTACT_INFO.website}/contact/#webpage`,
  name: "Contact Growthik Media - Digital Marketing Agency Pune",
  url: `${CONTACT_INFO.website}/contact/`,
  description:
    "Contact page for Growthik Media, Pune's leading digital marketing agency specialising in SEO, Google Ads, social media marketing and web development.",
  isPartOf: {
    "@id": STRUCTURED_DATA_IDS.website,
  },
  about: {
    "@id": STRUCTURED_DATA_IDS.organization,
  },
  mainEntity: {
    "@id": STRUCTURED_DATA_IDS.localBusiness,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${CONTACT_INFO.website}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: `${CONTACT_INFO.website}/contact/`,
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ContactClient />
    </>
  );
}
