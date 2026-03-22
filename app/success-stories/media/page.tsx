import { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Media Coverage | Growthik Media',
  description: 'Growthik in the press across digital marketing hubs.',
};

export default function MediaPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-black overflow-hidden relative">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <PageHero
          eyebrow="Media Coverage"
          title="In the Press."
          description="A selection of publications detailing our exponential growth systems and scaling capabilities."
          ctaText="Press Inquiries"
          ctaLink="/contact"
        />

        <div className="py-20 text-center border-t border-gray-200 dark:border-gray-800">
           <h2 className="text-3xl text-gray-500 font-bold mb-4">Press Syncing</h2>
           <p className="text-gray-400">Our latest press releases are currently being populated.</p>
        </div>
      </main>
    </div>
  );
}
