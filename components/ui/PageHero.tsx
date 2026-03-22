import React from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function PageHero({ eyebrow, title, description, ctaText, ctaLink }: PageHeroProps) {
  return (
    <section className="text-center md:text-left mb-16 flex flex-col md:flex-row items-end justify-between gap-8 pt-8">
      <div className="max-w-2xl">
        <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-3 block">
          {eyebrow}
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          {title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          {description}
        </p>
      </div>
      
      {ctaText && ctaLink && (
        <a 
          href={ctaLink} 
          className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-md transition-all whitespace-nowrap"
        >
          {ctaText}
        </a>
      )}
    </section>
  );
}
