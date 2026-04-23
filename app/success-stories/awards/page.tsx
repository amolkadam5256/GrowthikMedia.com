import { Metadata } from 'next';
import PageHero from '@/components/PublicComponents/ui/PageHero';

export const metadata: Metadata = {
  title: 'Awards & Recognition | Growthik Media',
  description: 'Our agency accreditations from Google, HubSpot and Web Design institutions.',
};

export default function AwardsPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-black overflow-hidden relative">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <PageHero
          eyebrow="Awards"
          title="Certified Excellence."
          description="A selection of our certifications mapping globally recognized standards in UI/UX and Ads Performance."
          ctaText="Review Our Accreditations"
          ctaLink="/contact"
        />

        <div className="py-20 text-center border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl text-gray-500 font-bold mb-4">Content Updating</h2>
          <p className="text-gray-400">Certificates are currently being synchronized to our portal.</p>
        </div>
      </main>
    </div>
  );
}
