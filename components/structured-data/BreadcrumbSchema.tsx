"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { CONTACT_INFO } from '@/constants/contact';

/**
 * Growthik Media: Dynamic Breadcrumb Schema
 * Auto-generates BreadcrumbList schema based on the current URL path.
 * Helps bots navigate and structuralize the site hierarchy.
 */

export default function BreadcrumbSchema() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment !== '');

  const breadcrumbs = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": CONTACT_INFO.website
    },
    ...pathSegments.map((segment, index) => {
      const url = `${CONTACT_INFO.website}/${pathSegments.slice(0, index + 1).join('/')}/`;
      // Convert slug (e.g. "seo-analysis") to title (e.g. "Seo Analysis")
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      return {
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": url
      };
    })
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
