import { Metadata } from 'next';
import { portfolioData } from '@/lib/data/portfolio';
import ClientPortfolioGrid from '@/components/PublicComponents/portfolio/ClientPortfolioGrid';
import PageHero from '@/components/PublicComponents/ui/PageHero';
import { buildCollectionSchema, buildPortfolioItemListItems } from '@/lib/seo/collectionSchema';

export const metadata: Metadata = {
  title: 'Branding Work | Creative Identity | Growthik Media',
  description: 'View creative branding campaigns and corporate identity designs for our international clients.',
  alternates: {
    canonical: 'https://www.growthikmedia.com/portfolio/branding-work/',
  },
};

export default function BrandingWorkPage() {
  const branding = portfolioData.filter((p) => p.category === 'branding');
  const schema = buildCollectionSchema({
    path: '/portfolio/branding-work/',
    name: 'Branding Work Portfolio | Growthik Media',
    description: 'Brand identity, creative and communications work delivered by Growthik Media for client brands.',
    breadcrumbName: 'Branding Work',
    itemName: 'Branding Projects',
    items: buildPortfolioItemListItems(branding),
  });

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-black overflow-hidden relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <PageHero
          eyebrow="Branding Work"
          title="Identities That Stick."
          description="We conceptualize minimal, impactful brand structures that convey trust instantaneously."
          ctaText="Inquire About Branding"
          ctaLink="/contact"
        />

        <ClientPortfolioGrid initialData={branding} />
      </main>
    </div>
  );
}
