import { Metadata } from 'next';
import { portfolioData } from '@/lib/data/portfolio';
import ClientPortfolioGrid from '@/components/portfolio/ClientPortfolioGrid';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Website Development Projects | Growthik Media',
  description: '14+ website development projects spanning real estate, healthcare, education, logistics, and more.',
};

export default function WebsiteProjectsPage() {
  const websites = portfolioData.filter((p) => p.category === 'website-dev');

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-black overflow-hidden relative">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <PageHero
          eyebrow="Website Projects"
          title="Digital Experiences Crafted for Growth."
          description="We've built 14+ high-converting websites connecting businesses in Pune and Dubai with their ideal customers. From Real Estate to Logistics, our solutions scale."
          ctaText="Start Your Web Project"
          ctaLink="/contact"
        />

        {/* Since ClientPortfolioGrid filters from initial data, we pass only 'website-dev' ones to narrow it. */}
        <ClientPortfolioGrid initialData={websites} />
      </main>
    </div>
  );
}
