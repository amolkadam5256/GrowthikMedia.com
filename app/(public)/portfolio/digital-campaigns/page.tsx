import { Metadata } from 'next';
import { portfolioData } from '@/lib/data/portfolio';
import ClientPortfolioGrid from '@/components/PublicComponents/portfolio/ClientPortfolioGrid';
import PageHero from '@/components/PublicComponents/ui/PageHero';
import { buildCollectionSchema, buildPortfolioItemListItems } from '@/lib/seo/collectionSchema';

export const metadata: Metadata = {
  title: 'Holistic Digital Campaigns | Growthik Media',
  description: 'Full-spectrum campaigns bridging Organic SEO, paid advertising and conversion funnels.',
  alternates: {
    canonical: 'https://www.growthikmedia.com/portfolio/digital-campaigns/',
  },
};

export default function DigitalCampaignsPage() {
  const campaigns = portfolioData.filter((p) => p.category === 'digital-marketing' || p.category === 'website-dev');
  const schema = buildCollectionSchema({
    path: '/portfolio/digital-campaigns/',
    name: 'Digital Campaign Portfolio | Growthik Media',
    description: 'Campaign-focused portfolio examples that combine SEO, paid media and conversion-ready web experiences.',
    breadcrumbName: 'Digital Campaigns',
    itemName: 'Digital Campaign Projects',
    items: buildPortfolioItemListItems(campaigns),
  });

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-black overflow-hidden relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <PageHero
          eyebrow="Digital Campaigns"
          title="360 Growth Execution."
          description="Looking beyond a single ad or website, our campaigns orchestrate search, social and web infrastructure directly together."
          ctaText="Let's Plan Your Growth"
          ctaLink="/contact"
        />

        <ClientPortfolioGrid initialData={campaigns} />
      </main>
    </div>
  );
}

