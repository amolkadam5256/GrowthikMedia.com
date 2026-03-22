'use client';

import { useState } from 'react';
import PortfolioCard from './PortfolioCard';
import { PortfolioProject } from '@/lib/data/portfolio';

// All Categories we want as filter tabs
const categories = ['website-dev', 'digital-marketing', 'full-stack', 'real-estate', 'education'];

export default function ClientPortfolioGrid({ initialData }: { initialData: PortfolioProject[] }) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredData = initialData.filter(project => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Pune') return project.location === 'pune';
    if (activeCategory === 'Dubai') return project.location === 'dubai';
    if (activeCategory === 'real-estate') return project.industry === 'Real Estate';
    if (activeCategory === 'education') return project.industry === 'Education';
    return project.category === activeCategory;
  });

  return (
    <>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredData.map(project => (
          <PortfolioCard key={project.id} project={project} />
        ))}
        {filteredData.length === 0 && (
          <div className="col-span-full py-20 text-center">
            <p className="text-gray-500 text-lg">No projects found for this category yet.</p>
            <button onClick={() => setActiveCategory('All')} className="mt-4 text-red-600 hover:underline">View All Projects</button>
          </div>
        )}
      </div>
    </>
  );
}
