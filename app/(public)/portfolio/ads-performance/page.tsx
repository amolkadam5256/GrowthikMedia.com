import { Metadata } from 'next';
import { portfolioData } from '@/lib/data/portfolio';
import ClientPortfolioGrid from '@/components/portfolio/ClientPortfolioGrid';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'PPC & Meta Ads Performance Portfolio | Growthik Media',
  description: 'View the metrics and direct lead structures of our most powerful Real Estate and Healthcare ad campaigns.',
};

export default function AdsPerformancePage() {
  const ads = portfolioData.filter((p) => p.industry === 'Real Estate' || p.category === 'digital-marketing');

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-black overflow-hidden relative">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <PageHero
          eyebrow="Ads Performance"
          title="Conversion by The Numbers."
          description="A selection of high-ROI paid media campaigns built securely over Facebook Meta, Google Ads, and Native placements."
          ctaText="Audit My Ad Campaigns"
          ctaLink="/contact"
        />

        <ClientPortfolioGrid initialData={ads} />
      </main>
    </div>
  );
}
