import Link from 'next/link';
import { ArrowRight, Search, Globe, Share2, Target, Zap } from 'lucide-react';

type Category = 'branding' | 'web' | 'marketing' | 'social' | 'performance';

const SERVICES_BY_CAT: Record<Category, any[]> = {
  branding: [
    { name: 'Brand Identity', href: '/services/brand-identity/', icon: Target },
    { name: 'Branding Design', href: '/services/branding-design/', icon: Zap },
    { name: 'Logo Design', href: '/services/logo-design/', icon: Target },
  ],
  web: [
    { name: 'Next.js Dev', href: '/services/website-development/nextjs/', icon: Globe },
    { name: 'Full Stack', href: '/services/website-development/full-stack/', icon: Globe },
    { name: 'Maintenance', href: '/services/website-maintenance/', icon: Zap },
  ],
  marketing: [
    { name: 'SEO Audit', href: '/services/seo/', icon: Search },
    { name: 'Content Strategy', href: '/services/content-marketing/', icon: Share2 },
    { name: 'Email Marketing', href: '/services/email-marketing/', icon: Target },
  ],
  social: [
    { name: 'Social Media', href: '/services/social-media-marketing/', icon: Share2 },
    { name: 'Meta Ads', href: '/services/meta-ads/', icon: Share2 },
    { name: 'LinkedIn Ads', href: '/services/social-media-promotions/', icon: Target },
  ],
  performance: [
    { name: 'Google Ads', href: '/services/ppc-google-ads/', icon: Target },
    { name: 'Lead Gen', href: '/services/lead-generation/', icon: Zap },
    { name: 'Media Planning', href: '/services/media-planning-buying/', icon: Search },
  ],
};

export default function RelatedServices({ category }: { category: Category }) {
  const related = SERVICES_BY_CAT[category] || [];

  return (
    <div className="py-12 bg-linear-to-b from-white to-gray-50/50 rounded-3xl mt-16 px-6 sm:px-12 border border-gray-100 shadow-sm">
      <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
        <div className="w-1.5 h-8 bg-(--color-primary) rounded-full" />
        Recommended Services
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((service, idx) => (
          <Link
            key={idx}
            href={service.href}
            className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-(--color-primary) hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 transform hover:-translate-y-1 block"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-red-50 text-(--color-primary) rounded-xl flex items-center justify-center group-hover:bg-(--color-primary) group-hover:text-white transition-colors duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-(--color-primary) group-hover:translate-x-1 transition-all" />
            </div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-(--color-primary) transition-colors">{service.name}</h4>
            <p className="text-sm text-gray-500 mt-2">Explore targeted growth strategies for your business.</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
