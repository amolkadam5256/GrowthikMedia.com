import { Metadata } from 'next';
import PageHero from '@/components/PublicComponents/ui/PageHero';

export const metadata: Metadata = {
  title: 'Awards & Recognition | Growthik Media',
  description: 'Our agency accreditations from Google, HubSpot and Web Design institutions.',
  alternates: { canonical: 'https://www.growthikmedia.com/success-stories/awards/' },
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

        <div className="py-20 border-t border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-black mb-6 text-gray-900 dark:text-white">Our Commitment to Industry Standards</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                At Growthik Media, excellence isn't just a goal - it's our baseline. We consistently invest in certifications and training to ensure our Pune-based team remains at the bleeding edge of digital marketing and web engineering.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                From Google Ads Search and Display certifications to advanced Next.js architecture and UI/UX design awards, our recognition reflects our dedication to delivering measurable ROI for our clients globally.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-gray-200 dark:border-zinc-800 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-red-500">Why Certifications Matter</h3>
              <ul className="space-y-4">
                {[
                  "Guaranteed adherence to latest platform algorithms",
                  "Verified expertise in conversion rate optimization",
                  "Access to beta features and priority platform support",
                  "Proven track record in high-performance web engineering"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center bg-zinc-100 dark:bg-zinc-900/50 p-12 rounded-3xl border border-dashed border-gray-300 dark:border-zinc-800">
            <h2 className="text-2xl text-gray-500 font-bold mb-4 uppercase tracking-widest">Digital Accreditation Portal</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our full gallery of digital certificates from Google, HubSpot and Meta is currently being synchronized. This portal will allow you to verify our active credentials in real-time.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
