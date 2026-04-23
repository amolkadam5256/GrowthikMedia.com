import { Metadata } from 'next';
import { portfolioData } from '@/lib/data/portfolio';
import ClientPortfolioGrid from '@/components/PublicComponents/portfolio/ClientPortfolioGrid';
import PageHero from '@/components/PublicComponents/ui/PageHero';

export const metadata: Metadata = {
  title: 'In-Depth Case Studies | Growthik Media',
  description: 'A deep dive into how we constructed robust software solutions and scaled digital agencies.',
  alternates: {
    canonical: 'https://www.growthikmedia.com/portfolio/case-studies/',
  },
};

export default function CaseStudiesPage() {
  const caseStudies = portfolioData.filter((p) => p.featured || p.category === 'full-stack');

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-black overflow-hidden relative">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <PageHero
          eyebrow="Case Studies"
          title="See The Deep Method."
          description="Read full architectural breakdowns and growth stories for our biggest projects in Real Estate, E-Commerce, and Healthcare."
          ctaText="Discuss Complex Tech"
          ctaLink="/contact"
        />

        <ClientPortfolioGrid initialData={caseStudies} />
      </main>
    </div>
  );
}
