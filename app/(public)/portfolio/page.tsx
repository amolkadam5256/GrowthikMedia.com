import { Metadata } from 'next';
import { portfolioData } from '@/lib/data/portfolio';
import ClientPortfolioGrid from '@/components/portfolio/ClientPortfolioGrid';

export const metadata: Metadata = {
  title: 'Our Work | 30+ Tech & Marketing Projects | Growthik Media',
  description: 'Explore our comprehensive portfolio of 30+ web development projects, marketing campaigns, healthcare platforms, and real estate solutions across Pune and Dubai.',
};

export default function PortfolioPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-black overflow-hidden relative">
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-red-600/10 to-transparent pointer-events-none" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Secton */}
        <section className="text-center md:text-left mb-16 flex flex-col md:flex-row items-end justify-between gap-8 pt-8">
          <div className="max-w-2xl">
            <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-3 block">
              Our Complete Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              Ideas Built into <br className="hidden md:block"/> Real-World Impact.
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Explore 30+ of our latest full-stack scalable web applications, real estate landing pages, SEO-optimised portals, and corporate structures connecting audiences globally.
            </p>
          </div>
          
          {/* Stats Bar Component */}
          <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-xl flex gap-8">
            <div className="text-center">
              <span className="block text-3xl font-black text-gray-900 dark:text-white">30+</span>
              <span className="text-xs text-gray-500 uppercase font-semibold">Projects Built</span>
            </div>
            <div className="w-px bg-gray-200 dark:bg-gray-800" />
            <div className="text-center">
              <span className="block text-3xl font-black text-gray-900 dark:text-white">10+</span>
              <span className="text-xs text-gray-500 uppercase font-semibold">Industries</span>
            </div>
            <div className="w-px bg-gray-200 dark:bg-gray-800" />
            <div className="text-center">
              <span className="block text-3xl font-black text-gray-900 dark:text-white">2</span>
              <span className="text-xs text-gray-500 uppercase font-semibold">Global Markets</span>
            </div>
          </div>
        </section>

        {/* Client Side Grid with Filtering */}
        <ClientPortfolioGrid initialData={portfolioData} />
        
      </main>
    </div>
  );
}
