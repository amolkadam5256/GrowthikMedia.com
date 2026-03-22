import { MetadataRoute } from 'next';

const DOMAIN = 'https://www.growthikmedia.com';

const SERVICES = [
  '/services/seo/',
  '/services/ppc-google-ads/',
  '/services/social-media-marketing/',
  '/services/website-development/',
  '/services/website-development/nextjs/',
  '/services/website-development/react/',
  '/services/website-development/full-stack/',
  '/services/ecommerce-development/',
  '/services/website-design-company-pune/',
  '/services/branding-consulting/',
  '/services/brand-identity/',
  '/services/brand-strategy/',
  '/services/brand-name/',
  '/services/branding-design/',
  '/services/brand-marketing-communications/',
  '/services/content-marketing/',
  '/services/performance-marketing/',
  '/services/meta-ads/',
  '/services/email-marketing/',
  '/services/whatsapp-marketing/',
  '/services/sms-marketing/',
  '/services/lead-generation/',
  '/services/influencer-management/',
  '/services/media-planning-buying/',
  '/services/political-digital-marketing/',
  '/services/youtube-seo/',
  '/services/web-application/',
  '/services/website-maintenance/',
  '/services/logo-design/',
  '/services/brochure-design/',
  '/services/business-card-design/',
  '/services/letterhead-design/',
  '/services/social-media-promotions/',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: `${DOMAIN}/`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${DOMAIN}/about/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${DOMAIN}/contact/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${DOMAIN}/audit/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${DOMAIN}/portfolio/`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${DOMAIN}/portfolio/case-studies/`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
  ];

  const serviceRoutes = SERVICES.map(path => ({
    url: `${DOMAIN}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Note: Blog posts would typically be fetched from a DB/CMS here.
  // We'll add the core blog route.
  const coreRoutes = [
    { url: `${DOMAIN}/blog/`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.8 },
  ];

  return [...routes, ...serviceRoutes, ...coreRoutes];
}
