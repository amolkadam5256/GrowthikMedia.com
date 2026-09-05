'use client';

import { useState } from 'react';
import Link from 'next/link';
import PortfolioCard from './PortfolioCard';
import { PortfolioProject } from '@/lib/data/portfolio';

export default function ClientPortfolioGrid({ initialData }: { initialData: PortfolioProject[] }) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // If no data at all, show a static empty state (no filters needed)
  if (initialData.length === 0) {
    return (
      <div className="py-24 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-50 dark:bg-red-900/10 mb-6">
          <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">No Projects Here Yet</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-sm mx-auto">
          We&apos;re working on publishing more work in this category. Check back soon or browse all our projects.
        </p>
        <Link
          href="/portfolio"
          className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors"
        >
          View All Projects
        </Link>
      </div>
    );
  }

  // Derive categories dynamically from data
  const categories = Array.from(new Set(initialData.map(p => p.category)));
  const filteredData = initialData.filter(project => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Pune') return project.location === 'pune';
    if (activeCategory === 'Dubai') return project.location === 'dubai';

    // Fallback industry filters
    if (activeCategory === 'real-estate') return project.industry === 'Real Estate';
    if (activeCategory === 'education') return project.industry === 'Education';

    return project.category === activeCategory;
  });

  return (
    <>
      {/* Only show filter tabs if there are multiple categories or location filters make sense */}
      {categories.length > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 text-sm font-semibold transition-colors duration-300 rounded-lg ${
              activeCategory === 'All'
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-900 border dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800'
            }`}
          >
            All Works
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm font-semibold transition-colors duration-300 rounded-lg whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-900 border dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              {cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}

          <div className="hidden md:ml-auto md:flex space-x-2">
            <button
              onClick={() => setActiveCategory('Pune')}
              className={`px-4 py-2 text-sm font-bold border rounded-lg transition-colors ${activeCategory === 'Pune' ? 'border-red-600 bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400' : 'bg-white border-gray-200 text-gray-600 dark:bg-transparent dark:border-gray-800'}`}
            >
              📍 Pune Projects
            </button>
            <button
              onClick={() => setActiveCategory('Dubai')}
              className={`px-4 py-2 text-sm font-bold border rounded-lg transition-colors ${activeCategory === 'Dubai' ? 'border-red-600 bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400' : 'bg-white border-gray-200 text-gray-600 dark:bg-transparent dark:border-gray-800'}`}
            >
              📍 Dubai Projects
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredData.map(project => (
          <PortfolioCard key={project.id} project={project} />
        ))}
        {filteredData.length === 0 && (
          <div className="col-span-full py-20 text-center">
            <p className="text-gray-500 text-lg">No projects found for this filter.</p>
            <button onClick={() => setActiveCategory('All')} className="mt-4 text-red-600 hover:underline font-semibold">
              Show All Projects
            </button>
          </div>
        )}
      </div>
    </>
  );
}
