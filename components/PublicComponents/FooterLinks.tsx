import Link from 'next/link';

const LINKS = {
  Web: [
    { name: 'Website Development', href: '/services/website-development/' },
    { name: 'Next.js Development', href: '/services/website-development/nextjs/' },
    { name: 'React Development', href: '/services/website-development/react/' },
    { name: 'Full Stack Development', href: '/services/website-development/full-stack/' },
    { name: 'Ecommerce Solution', href: '/services/ecommerce-development/' },
    { name: 'Web Application', href: '/services/web-application/' },
    { name: 'Website Maintenance', href: '/services/website-maintenance/' },
    { name: 'Website Design Pune', href: '/services/website-design-company-pune/' },
  ],
  Marketing: [
    { name: 'SEO Services', href: '/services/seo/' },
    { name: 'PPC & Google Ads', href: '/services/ppc-google-ads/' },
    { name: 'Performance Marketing', href: '/services/performance-marketing/' },
    { name: 'Content Marketing', href: '/services/content-marketing/' },
    { name: 'Lead Generation', href: '/services/lead-generation/' },
    { name: 'Email Marketing', href: '/services/email-marketing/' },
    { name: 'SMS Marketing', href: '/services/sms-marketing/' },
    { name: 'WhatsApp Marketing', href: '/services/whatsapp-marketing/' },
  ],
  Social: [
    { name: 'Social Media Marketing', href: '/services/social-media-marketing/' },
    { name: 'Meta Ads', href: '/services/meta-ads/' },
    { name: 'Social Promotions', href: '/services/social-media-promotions/' },
    { name: 'Influencer Management', href: '/services/influencer-management/' },
    { name: 'YouTube SEO', href: '/services/youtube-seo/' },
    { name: 'Media Planning/Buying', href: '/services/media-planning-buying/' },
    { name: 'Political Marketing', href: '/services/political-digital-marketing/' },
  ],
  Branding: [
    { name: 'Branding Consulting', href: '/services/branding-consulting/' },
    { name: 'Brand Identity', href: '/services/brand-identity/' },
    { name: 'Brand Strategy', href: '/services/brand-strategy/' },
    { name: 'Brand Name', href: '/services/brand-name/' },
    { name: 'Branding Design', href: '/services/branding-design/' },
    { name: 'Logo Design', href: '/services/logo-design/' },
    { name: 'Brochure Design', href: '/services/brochure-design/' },
    { name: 'Business Card Design', href: '/services/business-card-design/' },
    { name: 'Letterhead Design', href: '/services/letterhead-design/' },
  ],
};

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-t border-gray-100 mt-16">
      {Object.entries(LINKS).map(([category, items]) => (
        <div key={category}>
          <h4 className="font-black text-gray-900 mb-6 flex items-center gap-2">
             <div className="w-1 h-4 bg-(--color-primary) rounded-full" />
             {category}
          </h4>
          <ul className="space-y-3">
            {items.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-500 hover:text-(--color-primary) transition-all text-sm font-medium hover:pl-1"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
