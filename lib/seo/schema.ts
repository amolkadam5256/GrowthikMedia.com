import { BUSINESS_GEO, CONTACT_INFO, INDEXABLE_SOCIAL_PROFILES, STRUCTURED_DATA_IDS } from "@/constants/contact";

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": STRUCTURED_DATA_IDS.organization,
    name: CONTACT_INFO.companyName,
    alternateName: "Growthik",
    url: CONTACT_INFO.website,
    logo: `${CONTACT_INFO.website}/brand/growthik-media-transparent-logo.png`,
    description:
      "Growthik Media is an AI-powered growth engineering company that builds predictable revenue systems through SEO, paid media, branding and web development.",
    email: CONTACT_INFO.email.info,
    telephone: CONTACT_INFO.phone.primary,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${CONTACT_INFO.address.line1}, ${CONTACT_INFO.address.line2}`,
      addressLocality: CONTACT_INFO.address.city,
      addressRegion: CONTACT_INFO.address.state,
      postalCode: CONTACT_INFO.address.pincode,
      addressCountry: "IN",
    },
    sameAs: INDEXABLE_SOCIAL_PROFILES,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT_INFO.phone.primary,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi", "mr"],
    },
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": STRUCTURED_DATA_IDS.website,
    name: CONTACT_INFO.companyName,
    url: CONTACT_INFO.website,
    publisher: { "@id": STRUCTURED_DATA_IDS.organization },
    potentialAction: {
      "@type": "SearchAction",
      target: `${CONTACT_INFO.website}/blog?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: CONTACT_INFO.companyName,
    image: `${CONTACT_INFO.website}/brand/growthik-media-transparent-logo.png`,
    "@id": STRUCTURED_DATA_IDS.localBusiness,
    url: CONTACT_INFO.website,
    telephone: CONTACT_INFO.phone.primary,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${CONTACT_INFO.address.line1}, ${CONTACT_INFO.address.line2}`,
      addressLocality: CONTACT_INFO.address.city,
      addressRegion: CONTACT_INFO.address.state,
      postalCode: CONTACT_INFO.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_GEO.latitude,
      longitude: BUSINESS_GEO.longitude,
    },
    sameAs: INDEXABLE_SOCIAL_PROFILES,
    parentOrganization: {
      "@id": STRUCTURED_DATA_IDS.organization,
    },
  };
}

export function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Digital Marketing, SEO, Web Development and Branding",
    provider: {
      "@type": "Organization",
      "@id": STRUCTURED_DATA_IDS.organization,
      name: CONTACT_INFO.companyName,
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Growth Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Design" } },
      ],
    },
  };
}

export function buildBreadcrumbSchema(pathname: string) {
  const pathSegments = pathname.split("/").filter(Boolean);
  const items = [
    { name: "Home", item: CONTACT_INFO.website },
    ...pathSegments.map((segment, index) => ({
      name: segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      item: `${CONTACT_INFO.website}/${pathSegments.slice(0, index + 1).join("/")}/`,
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function buildFaqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image ? [image] : undefined,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: CONTACT_INFO.companyName,
      logo: `${CONTACT_INFO.website}/brand/growthik-media-transparent-logo.png`,
    },
    datePublished,
    dateModified: dateModified ?? datePublished,
    mainEntityOfPage: url,
  };
}
