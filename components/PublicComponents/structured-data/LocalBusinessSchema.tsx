import React from 'react';
import {
  BUSINESS_GEO,
  CONTACT_INFO,
  INDEXABLE_SOCIAL_PROFILES,
  OPENING_HOURS_SPECIFICATION,
  STRUCTURED_DATA_IDS,
} from '@/constants/contact';

/**
 * Growthik Media: Agency & Business Context Schema
 * Combines LocalBusiness and MarketingAgency for AI clarity.
 */

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": STRUCTURED_DATA_IDS.organization,
        "name": CONTACT_INFO.companyName,
        "url": CONTACT_INFO.website,
        "logo": `${CONTACT_INFO.website}/brand/growthik-media-transparent-logo.png`,
        "email": CONTACT_INFO.email.info,
        "telephone": CONTACT_INFO.phone.primary,
        "sameAs": INDEXABLE_SOCIAL_PROFILES
      },
      {
        "@type": ["MarketingAgency", "LocalBusiness"],
        "@id": STRUCTURED_DATA_IDS.localBusiness,
        "name": CONTACT_INFO.companyName,
        "url": CONTACT_INFO.website,
        "logo": `${CONTACT_INFO.website}/brand/growthik-media-transparent-logo.png`,
        "image": `${CONTACT_INFO.website}/og-image.png`,
        "description": "Premium Digital Marketing Agency in Pune specialized in helping brands grow through SEO, PPC, and High-Performance Web Development.",
        "telephone": CONTACT_INFO.phone.primary,
        "email": CONTACT_INFO.email.info,
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": CONTACT_INFO.address.line1 + ", " + CONTACT_INFO.address.line2,
          "addressLocality": "Pune",
          "addressRegion": CONTACT_INFO.address.state || "Maharashtra",
          "postalCode": CONTACT_INFO.address.pincode,
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": BUSINESS_GEO.latitude,
          "longitude": BUSINESS_GEO.longitude
        },
        "openingHoursSpecification": OPENING_HOURS_SPECIFICATION,
        "areaServed": [
          { "@type": "City", "name": "Pune" },
          { "@type": "City", "name": "Mumbai" },
          { "@type": "City", "name": "Nashik" },
          { "@type": "City", "name": "Bangalore" },
          { "@type": "Country", "name": "India" }
        ],
        "sameAs": INDEXABLE_SOCIAL_PROFILES,
        "parentOrganization": {
          "@id": STRUCTURED_DATA_IDS.organization
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Growth Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO & Organic Search Growth" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PPC & Google Ads Management" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Next.js Web Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Performance Marketing" } }
          ]
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
