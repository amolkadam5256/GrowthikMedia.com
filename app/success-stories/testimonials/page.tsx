import { Metadata } from 'next';
import PageHero from '@/components/PublicComponents/ui/PageHero';

export const metadata: Metadata = {
  title: 'Client Testimonials | Growthik Media',
  description: 'What our clients in Real Estate and Healthcare say about us.',
  alternates: { canonical: 'https://www.growthikmedia.com/success-stories/testimonials/' },
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

        <div className="py-20 border-t border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-black mb-6 text-gray-900 dark:text-white">Real Partnerships. Real Results.</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Our clients aren't just names in a spreadsheet; they are partners in growth. We focus on building long-term relationships with businesses across Pune, helping them navigate the complexities of digital acquisition.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 font-medium italic border-l-4 border-red-500 pl-6">
                &quot;Growthik Media built our corporate gifting website and made it simple for Pune companies to understand our hampers and request a quotation.&quot; — Shraddha Kharate, Co-founder, Reet Foods
              </p>
            </div>
            <div className="bg-zinc-900 p-1 rounded-3xl overflow-hidden shadow-2xl">
              <div className="bg-black p-8 rounded-[22px] border border-white/10">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div key={s} className="w-5 h-5 bg-yellow-500 rounded-sm" />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Named client proof</h3>
                <p className="text-gray-400 text-sm">
                  Reet Foods (reetfoodsngiftings.com) is a live website we designed and developed. Additional campaign work is shared with client permission.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-zinc-100 dark:bg-zinc-900/50 p-12 rounded-3xl border border-dashed border-gray-300 dark:border-zinc-800">
            <h2 className="text-2xl text-gray-500 font-bold mb-4 uppercase tracking-widest">Video Testimonial Pipeline</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We are currently finalizing a series of video case studies featuring founders from Baner, Hinjewadi and Wakad. These "deep-dive" testimonials will showcase the exact workflows used to achieve their scaling milestones.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
