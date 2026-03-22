import { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Client Testimonials | Growthik Media',
  description: 'What our clients in Real Estate and Healthcare say about us.',
};

export default function TestimonialsPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-black overflow-hidden relative">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <PageHero
          eyebrow="Testimonials"
          title="Voices from the Ground."
          description="Read genuine thoughts from Founders and Sales Heads scaling through Growthik's integrations."
          ctaText="Leave a Review"
          ctaLink="/contact"
        />

        <div className="py-20 text-center border-t border-gray-200 dark:border-gray-800">
           <h2 className="text-3xl text-gray-500 font-bold mb-4">Coming Soon</h2>
           <p className="text-gray-400">We are currently gathering up-to-date video testimonials to feature here.</p>
        </div>
      </main>
    </div>
  );
}
