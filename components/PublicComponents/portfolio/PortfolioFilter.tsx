'use client';
import { useState } from 'react';

interface PortfolioFilterProps {
  categories: string[];
  activeCategory: string;
  onFilterChange: (category: string) => void;
}

export default function PortfolioFilter({ categories, activeCategory, onFilterChange }: PortfolioFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12">
      <button
        onClick={() => onFilterChange('All')}
        className={`px-4 py-2 text-sm font-semibold transition-colors duration-300 rounded-lg ${
          activeCategory === 'All'
            ? 'bg-red-600 text-white shadow-md'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
        }`}
      >
        All Works
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-4 py-2 text-sm font-semibold transition-colors duration-300 rounded-lg whitespace-nowrap ${
            activeCategory === category
              ? 'bg-red-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
        </button>
      ))}
      
      <div className="hidden md:ml-auto md:flex space-x-2">
        <button 
          onClick={() => onFilterChange('Pune')}
          className={`px-3 py-1 text-xs border rounded-full transition-colors ${activeCategory === 'Pune' ? 'border-red-600 text-red-600' : 'border-gray-300 text-gray-500'}`}
        >
          📍 Pune
        </button>
        <button 
          onClick={() => onFilterChange('Dubai')}
          className={`px-3 py-1 text-xs border rounded-full transition-colors ${activeCategory === 'Dubai' ? 'border-red-600 text-red-600' : 'border-gray-300 text-gray-500'}`}
        >
          📍 Dubai
        </button>
      </div>
    </div>
  );
}
