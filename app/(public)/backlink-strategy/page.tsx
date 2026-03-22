import { Metadata } from "next";
import { CONTACT_INFO } from "@/constants/contact";
import Link from "next/link";
import { 
  Lightbulb, 
  Globe, 
  Send, 
  Link as LinkIcon, 
  ShieldCheck, 
  TrendingUp, 
  MapPin, 
  Rocket 
} from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.growthikmedia.com/services/backlink-strategy/" },
  title: "AI-Powered SEO & Backlink Strategy for Pune Businesses | Growthik Media",
  description: "Boost your Pune-based business with our AI-driven SEO strategy. Explore high-quality backlink ideas, guest posting sites, and outreach templates tailored for Pune, AI, and SEO.",
  openGraph: {
    title: "AI-Powered SEO & Backlink Strategy for Pune Businesses",
    description: "The ultimate guide to generating high-authority backlinks for Pune-based AI and SEO services.",
    images: ["/og-image.png"],
  },
};

export default function BacklinkStrategyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI-Powered SEO & Backlink Strategy",
    "description": "Comprehensive backlink and SEO strategy for Pune-based AI and digital marketing companies.",
    "publisher": {
      "@type": "Organization",
      "name": CONTACT_INFO.companyName,
      "logo": {
        "@type": "ImageObject",
        "url": `${CONTACT_INFO.website}/logo.png`,
      },
    },
  };

  const blogIdeas = [
    { title: "The Future of AI in Pune's Tech Ecosystem", topic: "AI + Pune" },
    { title: "How Pune Startups are Using SEO to Scale Internationally", topic: "SEO + Pune" },
    { title: "AI-Driven Marketing: Why Pune is the Next Hub", topic: "AI + Marketing" },
    { title: "Top 10 SEO Strategies for Pune Real Estate Developers", topic: "Local SEO" },
    { title: "Integrating AI into your E-commerce Business (Pune Case Study)", topic: "AI + E-commerce" },
  ];

  const guestPostingSites = [
    { name: "Pune Mirror (Digital)", category: "Local News", authority: "High" },
    { name: "Sakal News (Tech Section)", category: "Regional News", authority: "High" },
    { name: "Pune.News", category: "Community", authority: "Medium" },
    { name: "The Tech Portal India", category: "Technology", authority: "High" },
    { name: "Marketing Minds India", category: "Marketing", authority: "Medium" },
  ];

  const outreachTemplates = [
    {
      title: "Guest Post Pitch",
      subject: "Guest Post Idea: How AI is Transforming Pune's Startup Landscape",
      body: `Hi [Editor Name],\n\nI've been following [Site Name] for a while and love your coverage on Pune's tech scene. I'm writing a detailed piece on how AI is specifically helping local businesses scale. Would you be interested in a guest post for your tech section?\n\nBest regards,\n[Your Name]`,
    },
    {
      title: "Broken Link Building",
      subject: "Link Fix for [Page Title]",
      body: `Hi [Name],\n\nI was reading your article on [Topic] and noticed a link that seems to be broken. I recently published a comprehensive guide on the same topic that could serve as a great replacement. Check it out here: [Link].\n\nCheers,\n[Your Name]`,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-red-900/20 via-black to-black -z-10" />
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6 animate-pulse">
            <Rocket className="w-4 h-4 text-red-500" />
            <span className="text-red-500 text-sm font-medium">Elevate Your Authority</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-b from-white to-gray-400">
            Backlink Strategy <br />
            <span className="text-red-500 italic font-outline-2">For AI & SEO</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10">
            A data-driven roadmap to building high-authority backlinks for Pune-based technology and marketing companies using AI-powered insights.
          </p>
        </div>
      </section>

      {/* Grid Content */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          
          {/* Blog Ideas Card */}
          <div className="p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-red-500/30 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-500/20 rounded-xl group-hover:scale-110 transition-transform">
                <Lightbulb className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold">Pune + AI + SEO Ideas</h2>
            </div>
            <ul className="space-y-4">
              {blogIdeas.map((idea, i) => (
                <li key={i} className="flex flex-col p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                  <span className="text-white font-medium">{idea.title}</span>
                  <span className="text-xs text-red-500/70 uppercase mt-1 tracking-widest">{idea.topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Guest Posting Card */}
          <div className="p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-red-500/30 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-500/20 rounded-xl group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold">Targeted Guest Posting</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="text-gray-500 text-sm border-b border-white/10">
                  <tr>
                    <th className="py-3">Website</th>
                    <th className="py-3">Category</th>
                    <th className="py-3">Authority</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {guestPostingSites.map((site, i) => (
                    <tr key={i} className="group/row hover:bg-white/5 transition-colors">
                      <td className="py-4 font-medium group-hover/row:text-red-500 transition-colors uppercase">{site.name}</td>
                      <td className="py-4 text-gray-400">{site.category}</td>
                      <td className="py-4">
                        <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded-full border border-green-500/20">
                          {site.authority}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Outreach Templates */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <Send className="w-8 h-8 text-red-500" />
            <h2 className="text-3xl font-bold text-center">Proven Outreach Templates</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {outreachTemplates.map((template, i) => (
              <div key={i} className="p-6 rounded-2xl bg-neutral-900 border border-white/5 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                   <ShieldCheck className="w-12 h-12 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-red-500 mb-2">{template.title}</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Subject:</span>
                    <p className="mt-1 text-gray-300 font-medium italic">"{template.subject}"</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Body:</span>
                    <p className="mt-1 text-gray-400 whitespace-pre-wrap text-sm leading-relaxed bg-black/30 p-4 rounded-lg">
                      {template.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategies Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-linear-to-br from-neutral-900 to-black border border-white/5">
            <LinkIcon className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="text-xl font-bold mb-2 uppercase">Internal Linking</h3>
            <p className="text-gray-400 text-sm">
              Map your "Money Pages" (Services) to high-traffic blog posts. Use descriptive anchor text like "SEO Agency Pune" over "click here".
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-linear-to-br from-neutral-900 to-black border border-white/5">
            <TrendingUp className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="text-xl font-bold mb-2 uppercase">Competitor Analysis</h3>
            <p className="text-gray-400 text-sm">
              Use tools like Ahrefs or Semrush to find where your top Pune competitors are getting their backlinks from and aim for those targets.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-linear-to-br from-neutral-900 to-black border border-white/5">
            <MapPin className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="text-xl font-bold mb-2 uppercase">Local Citations</h3>
            <p className="text-gray-400 text-sm">
              Ensure your NAP (Name, Address, Phone) is consistent across Justdial, Sulekha, and Google Business Profile for Pune regional authority.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center p-12 rounded-3xl border border-red-500/20 bg-linear-to-b from-red-500/5 to-transparent">
          <h2 className="text-4xl font-bold mb-6 uppercase">Ready to Dominate Search?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Let our senior engineers build your automated SEO engine and backlink profile. Start your growth journey today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/audit" 
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-all uppercase tracking-widest shadow-lg shadow-red-500/20"
            >
              Get Free SEO Audit
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all border border-white/10 uppercase tracking-widest"
            >
              Schedule Strategy Call
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Decoration */}
      <div className="h-2 w-full bg-linear-to-r from-red-600 via-transparent to-red-600 opacity-20" />
    </div>
  );
}
