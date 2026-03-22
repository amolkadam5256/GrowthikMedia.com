import { Metadata } from 'next';
import { portfolioData } from '@/lib/data/portfolio';
import ClientPortfolioGrid from '@/components/PublicComponents/portfolio/ClientPortfolioGrid';
import PageHero from '@/components/PublicComponents/ui/PageHero';

export const metadata: Metadata = {
  title: 'Branding Work | Creative Identity | Growthik Media',
  description: 'View creative branding campaigns and corporate identity designs for our international clients.',
};

export default function BrandingWorkPage() {
  const branding = portfolioData.filter((p) => p.category === 'branding');

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-black overflow-hidden relative">
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
