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
        "@type": ["MarketingAgency", "LocalBusiness"],
        "@id": `${CONTACT_INFO.website}/#agency`,
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
          "latitude": 18.480682998115928,
          "longitude": 73.80476268274838
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "10:00",
            "closes": "15:00"
          }
        ],
        "areaServed": [
          { "@type": "City", "name": "Pune" },
          { "@type": "City", "name": "Mumbai" },
          { "@type": "City", "name": "Nashik" },
          { "@type": "City", "name": "Bangalore" },
          { "@type": "Country", "name": "India" }
        ],
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
