import React from 'react';
import { CONTACT_INFO } from '@/constants/contact';

/**
 * Growthik Media: Agency & Business Context Schema
 * Combines LocalBusiness and MarketingAgency for AI clarity.
 */

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MarketingAgency",
        "@id": `${CONTACT_INFO.website}/#agency`,
        "name": CONTACT_INFO.companyName,
        "url": CONTACT_INFO.website,
        "logo": `${CONTACT_INFO.website}/logo.png`,
        "image": `${CONTACT_INFO.website}/og-image.png`,
        "description": "Premium Digital Marketing Agency in Pune specialized in Predictable Revenue Systems through SEO, PPC, and High-Performance Web Development.",
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
        "sameAs": Object.values(CONTACT_INFO.social).filter(url => url.startsWith('http')),
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
