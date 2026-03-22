import React from 'react';
import Link from 'next/link';
import { 
  Globe, Code, Layout, Settings, ShoppingCart, 
  Search, Target, BarChart, Facebook, Mail, 
  MessageSquare, Smartphone, Zap, 
  Users, Youtube, Share2, Presentation, Layers,
  Palette, PenTool, Type, FileText, CreditCard, Award
} from 'lucide-react';

const CATEGORIES = [
  {
    name: 'Web & Tech',
    icon: Globe,
    services: [
      { title: 'Website Development', path: '/services/website-development/', icon: Code },
      { title: 'Next.js Experts', path: '/services/website-development/nextjs/', icon: Zap },
      { title: 'React JS Apps', path: '/services/website-development/react/', icon: Layout },
      { title: 'Full-Stack Labs', path: '/services/website-development/full-stack/', icon: Settings },
      { title: 'Web Applications', path: '/services/web-application/', icon: Layout },
      { title: 'E-commerce Dev', path: '/services/ecommerce-development/', icon: ShoppingCart },
      { title: 'Website Maintenance', path: '/services/website-maintenance/', icon: Settings },
    ]
  },
  {
    name: 'Search & Performance',
    icon: Target,
    services: [
      { title: 'Advanced SEO', path: '/services/seo/', icon: Search },
      { title: 'Google Ads (PPC)', path: '/services/ppc-google-ads/', icon: Target },
      { title: 'Performance Mkt', path: '/services/performance-marketing/', icon: BarChart },
      { title: 'Meta Ads', path: '/services/meta-ads/', icon: Facebook },
      { title: 'Email Marketing', path: '/services/email-marketing/', icon: Mail },
      { title: 'SMS Marketing', path: '/services/sms-marketing/', icon: Smartphone },
      { title: 'WhatsApp Mkt', path: '/services/whatsapp-marketing/', icon: MessageSquare },
      { title: 'Lead Generation', path: '/services/lead-generation/', icon: Zap },
    ]
  },
  {
    name: 'Social & Video',
    icon: Share2,
    services: [
      { title: 'Social Media Mkt', path: '/services/social-media-marketing/', icon: Share2 },
      { title: 'Influencer Mgmt', path: '/services/influencer-management/', icon: Users },
      { title: 'YouTube SEO', path: '/services/youtube-seo/', icon: Youtube },
      { title: 'Social Promotions', path: '/services/social-media-promotions/', icon: Share2 },
      { title: 'Media Planning', path: '/services/media-planning-buying/', icon: Presentation },
      { title: 'Political Marketing', path: '/services/political-digital-marketing/', icon: Layers },
    ]
  },
  {
    name: 'Branding & Design',
    icon: Palette,
    services: [
      { title: 'Brand Identity', path: '/services/brand-identity/', icon: Palette },
      { title: 'Brand Strategy', path: '/services/brand-strategy/', icon: Target },
      { title: 'Brand Naming', path: '/services/brand-name/', icon: Type },
      { title: 'Branding Design', path: '/services/branding-design/', icon: PenTool },
      { title: 'Logo Design', path: '/services/logo-design/', icon: Palette },
      { title: 'Brochure Design', path: '/services/brochure-design/', icon: FileText },
      { title: 'Business Cards', path: '/services/business-card-design/', icon: CreditCard },
      { title: 'Letterhead Design', path: '/services/letterhead-design/', icon: Award },
    ]
  }
];

export default function ServicesGrid() {
  return (
    <div className="space-y-20">
      {CATEGORIES.map((category, catIdx) => (
        <div key={catIdx} className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-(--color-primary)/10 text-(--color-primary) rounded-2xl">
              <category.icon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-(--text-primary)">
              {category.name}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.services.map((service, srvIdx) => (
              <Link 
                key={srvIdx}
                href={service.path}
                className="group p-6 bg-(--surface) rounded-3xl border border-(--border) hover:border-(--color-primary) transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-(--background) text-(--text-secondary) group-hover:text-(--color-primary) transition-colors rounded-xl">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm lg:text-base text-(--text-primary) leading-tight group-hover:text-(--color-primary) transition-colors">
                    {service.title}
                  </h4>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-(--text-secondary) group-hover:text-(--color-primary) transition-colors">
                    View Service
                  </span>
                  <div className="w-6 h-6 rounded-full bg-(--background) border border-(--border) flex items-center justify-center group-hover:bg-(--color-primary) group-hover:border-(--color-primary) transition-all">
                    <Zap className="w-3 h-3 text-(--text-secondary) group-hover:text-white transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
