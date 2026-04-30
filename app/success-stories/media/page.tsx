import { Metadata } from 'next';
import PageHero from '@/components/PublicComponents/ui/PageHero';

export const metadata: Metadata = {
  title: 'Media Coverage | Growthik Media',
  description: 'Growthik in the press across digital marketing hubs.',
  alternates: { canonical: 'https://www.growthikmedia.com/success-stories/media/' },
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

        <div className="py-20 border-t border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
            <div>
              <h2 className="text-3xl font-black mb-6 text-gray-900 dark:text-white">Growthik Media in the Spotlight</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 font-medium">
                Our approach to "Growth Engineering" has caught the attention of leading tech and marketing publications. We believe in sharing our methodology with the broader Pune startup ecosystem.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Whether it's discussing the future of AI-powered marketing or detailing our technical SEO success stories, our team is frequently cited for their data-first perspective and engineering-led execution.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Scaling Startups in Pune's IT Corridor", pub: "Tech Insights India" },
                { title: "The Death of Traditional Agencies", pub: "Marketing Hub" },
                { title: "Next.js: The New Gold Standard for SEO", pub: "Dev Quarterly" }
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 flex justify-between items-center group cursor-pointer hover:border-red-500/50 transition-colors">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-red-500 transition-colors">{item.title}</h4>
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">{item.pub}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center bg-zinc-100 dark:bg-zinc-900/50 p-12 rounded-3xl border border-dashed border-gray-300 dark:border-zinc-800">
            <h2 className="text-2xl text-gray-500 font-bold mb-4 uppercase tracking-widest">Media Archive Synchronizing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our archive of interviews, press releases, and editorial features is currently being migrated to this new layout. We are ensuring all external links are verified for your seamless reading experience.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
