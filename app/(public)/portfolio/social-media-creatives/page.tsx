import { Metadata } from 'next';
import { portfolioData } from '@/lib/data/portfolio';
import ClientPortfolioGrid from '@/components/portfolio/ClientPortfolioGrid';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Social Media Creatives & Ads | Growthik Media',
  description: 'High-performing social media campaigns bridging aesthetics and conversion.',
};

export default function SocialMediaPage() {
  // Let's filter digital marketing or anything tagged for social media
  const socials = portfolioData.filter((p) => p.category === 'digital-marketing');

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-black overflow-hidden relative">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <PageHero
          eyebrow="Social Media Creatives"
          title="Scroll-Stopping Content."
          description="A selection of high-impact visual campaigns built for Instagram, LinkedIn, and Facebook."
          ctaText="Discuss Campaigns"
          ctaLink="/contact"
        />

        <ClientPortfolioGrid initialData={socials} />
      </main>
    </div>
  );
}
