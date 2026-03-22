import { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Link from 'next/link';
import { portfolioData } from '@/lib/data/portfolio';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Client Success Stories | Growthik Media',
  description: 'Read exactly how we took brands to their peak scaling milestones globally.',
};

export default function SuccessStoriesPage() {
  // Let's grab some featured items to act as success stories
  const stories = portfolioData.filter((p) => p.featured || p.isClientWork).slice(0, 6);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-black overflow-hidden relative">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <PageHero
          eyebrow="Success Stories"
          title="Milestones Delivered."
          description="Behind every robust website and explosive search campaign is a client story breaking the ceiling of our imagination."
          ctaText="Begin Your Story"
          ctaLink="/contact"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map(project => (
            <Link key={project.id} href={`/portfolio/${project.slug}`} className="group block rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 shadow-sm hover:shadow-xl transition-all h-full">
               <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 bg-gray-100 dark:bg-gray-800">
                  <Image src={project.thumbnail} alt={project.title} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-500" />
               </div>
               <span className="text-red-600 font-bold text-xs uppercase tracking-wider">{project.industry}</span>
               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2 mb-3 leading-tight">{project.title}</h3>
               <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">{project.shortDesc}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
