import React from 'react';
import Link from 'next/link';

export default function FooterServicesLinks() {
  const sections = [
    {
      title: 'Web Services',
      links: [
        { label: 'Website Development', path: '/services/website-development/' },
        { label: 'Next.js Development', path: '/services/website-development/nextjs/' },
        { label: 'React Development', path: '/services/website-development/react/' },
        { label: 'Full-Stack Development', path: '/services/website-development/full-stack/' },
        { label: 'Web Applications', path: '/services/web-application/' },
        { label: 'E-commerce Dev', path: '/services/ecommerce-development/' },
        { label: 'Website Maintenance', path: '/services/website-maintenance/' },
      ]
    },
    {
      title: 'Marketing',
      links: [
        { label: 'SEO Services', path: '/services/seo/' },
        { label: 'PPC (Google Ads)', path: '/services/ppc-google-ads/' },
        { label: 'Performance Marketing', path: '/services/performance-marketing/' },
        { label: 'Meta (FB/IG) Ads', path: '/services/meta-ads/' },
        { label: 'Email Marketing', path: '/services/email-marketing/' },
        { label: 'SMS Marketing', path: '/services/sms-marketing/' },
        { label: 'WhatsApp Marketing', path: '/services/whatsapp-marketing/' },
        { label: 'Lead Generation', path: '/services/lead-generation/' },
      ]
    },
    {
      title: 'Social & Content',
      links: [
        { label: 'Social Media Mkt', path: '/services/social-media-marketing/' },
        { label: 'Influencer Management', path: '/services/influencer-management/' },
        { label: 'YouTube Video SEO', path: '/services/youtube-seo/' },
        { label: 'Social Promotions', path: '/services/social-media-promotions/' },
        { label: 'Media Planning', path: '/services/media-planning-buying/' },
        { label: 'Content Marketing', path: '/services/content-marketing/' },
      ]
    },
    {
      title: 'Branding',
      links: [
        { label: 'Brand Identity', path: '/services/brand-identity/' },
        { label: 'Brand Strategy', path: '/services/brand-strategy/' },
        { label: 'Brand Naming', path: '/services/brand-name/' },
        { label: 'Branding Design', path: '/services/branding-design/' },
        { label: 'Logo Design', path: '/services/logo-design/' },
        { label: 'Brochure Design', path: '/services/brochure-design/' },
        { label: 'Business Card Design', path: '/services/business-card-design/' },
        { label: 'Letterhead Design', path: '/services/letterhead-design/' },
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-t border-(--border)">
      {sections.map((section, idx) => (
        <div key={idx} className="space-y-6">
          <h4 className="text-sm font-black text-(--text-primary) uppercase tracking-widest border-b border-(--color-primary) inline-block pb-1">
            {section.title}
          </h4>
          <ul className="space-y-3">
            {section.links.map((link, linkIdx) => (
              <li key={linkIdx}>
                <Link 
                  href={link.path}
                  className="text-(--text-secondary) hover:text-(--color-primary) text-sm font-medium transition-colors hover:pl-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
