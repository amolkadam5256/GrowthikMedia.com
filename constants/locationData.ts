import {
  Monitor,
  Globe,
  Search,
  Target,
  Zap,
  BarChart,
  LucideIcon,
} from "lucide-react";

export interface LocationData {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  area: string;
  city: string;
  primaryService: string;
  headline: string;
  subheadline: string;
  areaDescription: string;
  services: { icon: LucideIcon; name: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const locationMapping: Record<string, LocationData> = {
  "services/website-design-company-pune": {
    title: "Best Web Design Company in Aundh Pune | Growthik Media",
    description:
      "Top web design company in Aundh, Pune. We build fast, SEO-optimized, conversion-focused websites for local businesses. Get a free quote today.",
    keywords:
      "website design company in aundh, web design aundh pune, website development aundh, best web design company aundh",
    ogTitle: "Best Web Design Company in Aundh Pune | Growthik Media",
    ogDescription:
      "Top-rated website design company in Aundh, Pune - fast, SEO-optimized websites that convert visitors into customers.",
    area: "Aundh",
    city: "Pune",
    primaryService: "Website Design Company",
    headline: "Best Website Design Company in Aundh",
    subheadline:
      "We design and develop high-performance, SEO-ready websites for businesses in Aundh, Pune that rank on Google and turn visitors into leads - guaranteed.",
    areaDescription:
      "Aundh is one of Pune's most vibrant business hubs, home to IT firms, retail shops, clinics, coaching institutes, and restaurants. With increasing digital competition, having a professional website isn't enough - you need a site that loads fast, ranks high, and converts. Growthik Media has built 350+ websites for Pune businesses, and we understand exactly what the Aundh audience expects from an online experience.",
    services: [
      {
        icon: Monitor,
        name: "Custom Website Design",
        desc: "Pixel-perfect, mobile-first designs built specifically for your brand and Aundh audience.",
      },
      {
        icon: Globe,
        name: "WordPress Development",
        desc: "Scalable WordPress websites with powerful admin panels easy for your team to manage.",
      },
      {
        icon: Search,
        name: "SEO-Optimized Development",
        desc: "Sites built from day one with Core Web Vitals, schema markup, and on-page SEO best practices.",
      },
      {
        icon: Target,
        name: "Landing Page Design",
        desc: "High-converting landing pages designed to capture leads from Google Ads and social media campaigns.",
      },
      {
        icon: Zap,
        name: "Next.js Web Apps",
        desc: "Lightning-fast web applications built with Next.js for superior performance scores.",
      },
      {
        icon: BarChart,
        name: "eCommerce Websites",
        desc: "Online stores with payment gateway integration, product catalogs, and order management systems.",
      },
    ],
    faqs: [
      {
        q: "How much does a website cost for a business in Aundh?",
        a: "Website costs in Aundh vary from ₹15,000 for a simple brochure site to ₹1,50,000+ for a custom business website. eCommerce sites start from ₹80,000. We offer transparent pricing with no hidden charges - contact us for a detailed quote.",
      },
      {
        q: "How long does it take to build a website?",
        a: "A standard business website typically takes 3–5 weeks from discovery to launch. eCommerce sites take 6–10 weeks. We provide a clear project timeline before we begin.",
      },
      {
        q: "Will my website rank on Google?",
        a: "Every website we build includes on-page SEO setup, schema markup, Core Web Vitals optimization, and Google Search Console integration. We also offer ongoing SEO services to continuously improve your rankings in Aundh and across Pune.",
      },
      {
        q: "Do you offer website maintenance after launch?",
        a: "Yes, we offer monthly maintenance packages covering security updates, content edits, performance optimization, and technical support so your website stays fast, secure, and up-to-date.",
      },
    ],
  },
  "services/website-design-company-pune": {
    title: "Web Design Company in Baner Pune | Growthik Media",
    description:
      "Best web design company in Baner, Pune. We build fast, SEO-optimized, and conversion-focused websites for local businesses. Get a free quote today.",
    keywords:
      "website design company baner, web design baner pune, website development baner, best web design company baner pune",
    ogTitle: "Web Design Company in Baner Pune | Growthik Media",
    ogDescription:
      "Best website design company in Baner, Pune - premium websites for startups, agencies, and businesses in Baner & Balewadi area.",
    area: "Baner",
    city: "Pune",
    primaryService: "Website Design Company",
    headline: "Top Website Design Company in Baner",
    subheadline:
      "Premium website design and development for startups, agencies, restaurants, clinics, and retail businesses in Baner and Balewadi - built to rank, designed to convert.",
    areaDescription:
      "Baner is at the heart of Pune's entrepreneurial ecosystem - a thriving mix of tech startups, boutique agencies, premium restaurants, fitness studios, healthcare clinics, and upscale retail. Businesses in Baner serve one of Pune's most digitally active and affluent audiences. A poorly designed or slow-loading website is a competitive disadvantage you can't afford. Growthik Media creates stunning, lightning-fast websites for Baner businesses that make an exceptional first impression and rank prominently in Google's search results for high-intent local keywords.",
    services: [
      {
        icon: Monitor,
        name: "Startup Website Design",
        desc: "Modern, investor-ready website designs for Baner startups - built to impress and convert from day one.",
      },
      {
        icon: Globe,
        name: "Restaurant & Hospitality Websites",
        desc: "Visually rich, mobile-optimized websites for Baner's restaurants, cafes, and hospitality businesses with online reservations.",
      },
      {
        icon: Search,
        name: "Local SEO & Baner Rankings",
        desc: "Dominate 'near me' searches for your business category in Baner, Balewadi, and surrounding areas.",
      },
      {
        icon: Target,
        name: "Agency & Professional Websites",
        desc: "Portfolio-led websites for agencies, consultants, and professional service firms in the Baner/Aundh corridor.",
      },
      {
        icon: Zap,
        name: "Performance-First Development",
        desc: "Industry-leading 90+ PageSpeed scores, zero CLS, and sub-2-second load times on every website we build.",
      },
      {
        icon: BarChart,
        name: "Conversion Optimization",
        desc: "Strategic UX, CTAs, and landing page design that turns Baner's web traffic into qualified business leads.",
      },
    ],
    faqs: [
      {
        q: "What makes Growthik Media the best website design company in Baner?",
        a: "We combine three things that most agencies in Baner lack: premium design quality, technical performance excellence (90+ PageSpeed), and SEO built into every website from day one. We also offer transparent pricing and dedicated account management.",
      },
      {
        q: "Do you design websites for restaurants and cafes in Baner?",
        a: "Yes. We have experience building visually stunning websites for restaurants and hospitality businesses in Baner - complete with menu displays, photo galleries, online reservations, Google Maps integration, and local SEO for food-related searches.",
      },
      {
        q: "What is the cost of a website for a startup in Baner?",
        a: "Startup websites typically cost ₹25,000–₹1,50,000 depending on the features required. We offer startup-friendly packages that include product/service pages, an about page, team section, contact form, and basic SEO setup.",
      },
      {
        q: "Can you help with digital marketing beyond just the website?",
        a: "Absolutely. We offer a full suite of digital marketing services - SEO, Google Ads, Meta Ads, social media management, and content marketing - making us a single-vendor solution for your entire digital presence in Baner.",
      },
    ],
  },
  "services/website-design-company-pune": {
    title: "Website Development in Hadapsar Pune | Growthik Media",
    description:
      "Expert website development in Hadapsar, Pune. Custom, SEO-optimized websites for businesses in Hadapsar. Fast delivery, transparent pricing. Get a free quote.",
    keywords:
      "website development hadapsar, web design hadapsar pune, website design company hadapsar, best web development hadapsar pune",
    ogTitle: "Website Development in Hadapsar Pune | Growthik Media",
    ogDescription:
      "Expert website development in Hadapsar, Pune - custom, SEO-ready websites for businesses of all sizes. Free quote available.",
    area: "Hadapsar",
    city: "Pune",
    primaryService: "Website Development",
    headline: "Professional Website Development in Hadapsar",
    subheadline:
      "We develop powerful, fast, and SEO-driven websites for businesses in Hadapsar - built to rank on Google, handle real traffic, and convert every visitor into a business opportunity.",
    areaDescription:
      "Hadapsar is one of Pune's rapidly developing corridors, home to Magarpatta City, SP Infocity, manufacturing units, residential societies, and a growing retail ecosystem. The digital transformation of Hadapsar's business landscape is accelerating - and companies that invest in quality web development now will enjoy first-mover advantage in Google rankings. Growthik Media provides premium website development services for Hadapsar businesses of all sizes, with a focus on performance, scalability, and local search dominance.",
    services: [
      {
        icon: Monitor,
        name: "Custom Web Development",
        desc: "Fully custom-coded websites using Next.js or WordPress - built for performance, scalability, and long-term maintainability.",
      },
      {
        icon: Globe,
        name: "Corporate Website Development",
        desc: "Enterprise-grade corporate websites for Hadapsar's IT companies, manufacturing firms, and professional service providers.",
      },
      {
        icon: Search,
        name: "SEO-Integrated Development",
        desc: "Technical SEO baked into development - proper heading hierarchy, schema markup, canonical URLs, and Core Web Vitals optimization.",
      },
      {
        icon: Target,
        name: "eCommerce Development",
        desc: "WooCommerce and Next.js eCommerce solutions with Razorpay payment integration, inventory management, and order tracking.",
      },
      {
        icon: Zap,
        name: "Web App Development",
        desc: "High-performance web applications for complex business processes - portals, dashboards, booking systems, and SaaS products.",
      },
      {
        icon: BarChart,
        name: "Website Redesign",
        desc: "Transform your outdated website into a modern, fast, conversion-optimized platform without losing your existing SEO rankings.",
      },
    ],
    faqs: [
      {
        q: "What technologies do you use for website development in Hadapsar?",
        a: "We primarily build with Next.js (React) for high-performance web apps and WordPress for content-managed websites. We choose the technology stack based on your specific requirements, budget, and long-term maintenance needs.",
      },
      {
        q: "Can you develop a website for a manufacturing or industrial company in Hadapsar?",
        a: "Yes. We have experience building B2B and manufacturing websites with product catalogs, industrial specification pages, ISO certification showcases, and inquiry management systems - all optimized for Google B2B searches.",
      },
      {
        q: "How long does website development take?",
        a: "A standard 10-15 page business website takes 3–5 weeks. Complex web applications or eCommerce sites take 8–14 weeks. We provide a detailed project timeline during the proposal phase.",
      },
      {
        q: "Do you guarantee website speed and performance?",
        a: "Yes. Every website we develop is optimized to achieve 90+ Google PageSpeed scores on mobile and desktop, with zero Cumulative Layout Shift (CLS), fast Largest Contentful Paint (LCP), and excellent Core Web Vitals - a critical ranking factor in 2025.",
      },
    ],
  },
  "services/website-design-company-pune": {
    title: "Web Design Company in Kothrud Pune | Growthik Media",
    description:
      "Best web design company in Kothrud, Pune. We create modern, fast, and SEO-optimized websites for local businesses. Get a free quote today.",
    keywords:
      "website design company kothrud, web design kothrud pune, website development kothrud, best web design company kothrud pune",
    ogTitle: "Web Design Company in Kothrud Pune | Growthik Media",
    ogDescription:
      "Best website design company in Kothrud, Pune - modern, fast, SEO-ready websites that convert. Free consultation available.",
    area: "Kothrud",
    city: "Pune",
    primaryService: "Website Design Company",
    headline: "Best Website Design Company in Kothrud",
    subheadline:
      "We build high-performance, beautifully designed websites for Kothrud businesses that rank on Google, engage visitors, and convert them into loyal customers.",
    areaDescription:
      "Kothrud is one of Pune's most densely populated and commercially active areas - home to educational institutions, healthcare clinics, coaching centers, retail outlets, and professional services. It's a market with strong local search behavior, where 'near me' Google searches drive significant footfall. Growthik Media has built several websites for Kothrud-based businesses and understands what local customers in this market respond to. Our websites combine clean modern design with technical SEO excellence to put your business front and center when locals search for your services.",
    services: [
      {
        icon: Monitor,
        name: "Custom Website Design",
        desc: "Beautiful, brand-aligned website designs tailored for Kothrud businesses - from clinics and coaching centers to retail and professional services.",
      },
      {
        icon: Globe,
        name: "WordPress Development",
        desc: "Easy-to-manage WordPress websites with all the features your Kothrud business needs.",
      },
      {
        icon: Search,
        name: "Local SEO Optimization",
        desc: "Rank in Google's Map Pack and organic results for Kothrud-specific searches.",
      },
      {
        icon: Target,
        name: "Landing Page Design",
        desc: "Targeted landing pages for specific services or campaigns - optimized to convert Kothrud visitors.",
      },
      {
        icon: Zap,
        name: "Performance-First Development",
        desc: "90+ PageSpeed scores, zero CLS, and optimal Core Web Vitals on every site we build.",
      },
      {
        icon: BarChart,
        name: "Conversion Rate Optimization",
        desc: "UX analysis and A/B testing to maximize the percentage of visitors who contact or purchase from you.",
      },
    ],
    faqs: [
      {
        q: "Which types of businesses in Kothrud do you typically work with?",
        a: "We work with a wide range of Kothrud businesses: clinics and hospitals, coaching institutes, law firms, restaurants, real estate agencies, retail shops, coaching classes, and professional service providers.",
      },
      {
        q: "Does the website you build appear in local Kothrud searches?",
        a: "Yes. Our process includes Google Business Profile setup and optimization, local schema markup, Kothrud-specific keyword targeting, and NAP consistency across directories - giving your site maximum visibility for local searches.",
      },
      {
        q: "What is the cost of a website in Kothrud?",
        a: "A professional website for a Kothrud business starts at ₹15,000 for a simple 5-page site and can go up to ₹1,50,000+ for a fully custom solution. We tailor our proposals to your specific needs and budget.",
      },
      {
        q: "Do you provide content writing for the website?",
        a: "Yes, we offer professional copywriting and content creation as part of our website packages. Our content is SEO-optimized, conversion-driven, and written in a tone that resonates with your target audience.",
      },
    ],
  },
  "services/website-design-company-pune": {
    title: "Website Design in PCMC Pune | Growthik Media",
    description:
      "Professional website design in PCMC (Pimpri Chinchwad). We build high-performance, SEO-ready websites for PCMC businesses. Get a free website audit today.",
    keywords:
      "website design pcmc, web design pimpri chinchwad, website development pcmc pune, best website design company pcmc",
    ogTitle: "Website Design in PCMC Pune | Growthik Media",
    ogDescription:
      "Professional website design in PCMC (Pimpri Chinchwad) - fast, SEO-optimized websites for local businesses. Free consultation available.",
    area: "PCMC",
    city: "Pune",
    primaryService: "Website Design",
    headline: "Professional Website Design in PCMC",
    subheadline:
      "We design and develop powerful, SEO-optimized websites for businesses in Pimpri Chinchwad Municipal Corporation (PCMC) - from manufacturing companies to retail shops and service providers.",
    areaDescription:
      "PCMC (Pimpri-Chinchwad) is one of Maharashtra's fastest-growing industrial and residential zones, spanning areas like Pimpri, Chinchwad, Akurdi, Nigdi, and Bhosari. With a massive mix of manufacturing industries, auto ancillary companies, IT firms, and consumer businesses, competition for online visibility is intensifying rapidly. Growthik Media brings enterprise-level website design and digital marketing capabilities to PCMC businesses at competitive pricing, helping you establish a strong digital presence that generates real business results.",
    services: [
      {
        icon: Monitor,
        name: "Business Website Design",
        desc: "Professional, mobile-first website designs for manufacturers, traders, service firms, and retailers in PCMC.",
      },
      {
        icon: Globe,
        name: "Industrial & B2B Websites",
        desc: "Specialized website design for manufacturing and B2B companies in PCMC's industrial zones - with product catalogs and inquiry forms.",
      },
      {
        icon: Search,
        name: "Local SEO for PCMC",
        desc: "Rank your business on Google Maps and organic results for PCMC-specific searches.",
      },
      {
        icon: Target,
        name: "eCommerce Development",
        desc: "Sell your products online with a fully integrated eCommerce website - Razorpay, inventory management, and GST billing included.",
      },
      {
        icon: Zap,
        name: "Speed & Performance",
        desc: "All websites we build achieve 90+ PageSpeed scores, zero CLS, and fast LCP - critical for both rankings and user experience.",
      },
      {
        icon: BarChart,
        name: "Analytics Setup",
        desc: "Google Analytics 4, Search Console, and conversion tracking configured so you measure what matters.",
      },
    ],
    faqs: [
      {
        q: "Do you serve businesses across all of PCMC - Pimpri, Chinchwad, Akurdi, Nigdi?",
        a: "Yes. We work with businesses across all of PCMC including Pimpri, Chinchwad, Akurdi, Nigdi, Bhosari, Kalewadi, and Wakad areas. We also serve the broader Pune region.",
      },
      {
        q: "Can you create a website for a manufacturing company?",
        a: "Absolutely. We have experience building B2B and industrial websites with product catalogs, material specifications, inquiry forms, and certification showcases. These are designed to rank on Google for industry-specific keywords.",
      },
      {
        q: "How much does website design cost in PCMC?",
        a: "A professional business website for PCMC companies typically costs ₹18,000–₹1,20,000 depending on complexity. We provide a transparent, itemized quote. No hidden charges.",
      },
      {
        q: "Will my PCMC website rank on Google?",
        a: "Every website includes on-page SEO setup, Google Business Profile optimization, local schema markup, and Core Web Vitals optimization. We also offer ongoing SEO services for sustained ranking growth.",
      },
    ],
  },
  "services/website-design-company-pune": {
    title: "Web Design in Viman Nagar Pune | Growthik Media",
    description:
      "Professional web design in Viman Nagar, Pune. We build fast, beautiful, and conversion-focused websites for businesses in Viman Nagar. Get a free quote.",
    keywords:
      "web design viman nagar, website design company viman nagar pune, website development viman nagar, best web design viman nagar",
    ogTitle: "Web Design in Viman Nagar Pune | Growthik Media",
    ogDescription:
      "Professional web design in Viman Nagar, Pune - high-performance, SEO-optimized websites that grow your business.",
    area: "Viman Nagar",
    city: "Pune",
    primaryService: "Web Design",
    headline: "Expert Web Design in Viman Nagar",
    subheadline:
      "Premium website design services for businesses in Viman Nagar - crafted to rank on Google, load in under 2 seconds, and convert visitors into paying customers.",
    areaDescription:
      "Viman Nagar is Pune's cosmopolitan hub - a blend of corporate offices, upscale residences, premium retail, and thriving restaurants. Businesses here serve a digitally sophisticated audience that expects best-in-class online experiences. Growthik Media designs websites for Viman Nagar businesses that match the premium expectations of this market, combining cutting-edge design with high-performance Next.js or WordPress development and deep local SEO expertise.",
    services: [
      {
        icon: Monitor,
        name: "Custom Web Design",
        desc: "Bespoke, brand-driven website designs that perfectly represent your Viman Nagar business online.",
      },
      {
        icon: Globe,
        name: "eCommerce Development",
        desc: "Sell online with powerful eCommerce stores - fully integrated with Razorpay, Shiprocket, and GST billing.",
      },
      {
        icon: Search,
        name: "Local SEO Setup",
        desc: "Rank for 'near me' searches in Viman Nagar with Google Business Profile optimization and local schema markup.",
      },
      {
        icon: Target,
        name: "UI/UX Design",
        desc: "User-centric interface designs that reduce bounce rate and guide visitors naturally toward conversion.",
      },
      {
        icon: Zap,
        name: "Performance Optimization",
        desc: "Technical optimization for 90+ PageSpeed scores, fast LCP, and zero layout shift (CLS = 0).",
      },
      {
        icon: BarChart,
        name: "Analytics & Reporting",
        desc: "Google Analytics 4 and Search Console setup so you always know how your website performs.",
      },
    ],
    faqs: [
      {
        q: "How much does web design cost in Viman Nagar?",
        a: "Web design in Viman Nagar typically costs ₹20,000–₹1,50,000 for a business website depending on the number of pages, custom features, and complexity. We provide a detailed, transparent quote before any work begins.",
      },
      {
        q: "Can you redesign my existing website?",
        a: "Absolutely. We handle complete website redesigns - improving the design, performance, and SEO while preserving your existing content and rankings. Our average redesign client sees a 40% improvement in Google PageSpeed scores.",
      },
      {
        q: "Do you build websites that rank on Google in Viman Nagar?",
        a: "Yes. Every website we build includes on-page SEO, local schema markup, Core Web Vitals optimization, and Google Business Profile setup - giving your business the best foundation for ranking in Viman Nagar and Pune.",
      },
      {
        q: "What is your design process?",
        a: "We follow a structured 5-step process: Discovery → Wireframing → Design Mockups → Development → Testing & Launch. You're involved at every stage with clear communication and scheduled review meetings.",
      },
    ],
  },
  "services/website-design-company-pune": {
    title: "Web Design Company in Wakad Pune | Growthik Media",
    description:
      "Top web design company in Wakad, Pune. Fast, SEO-optimized websites for IT companies, startups, and local businesses. Get a free consultation.",
    keywords:
      "website design company wakad, web design wakad pune, website development wakad, best web design company wakad pune",
    ogTitle: "Web Design Company in Wakad Pune | Growthik Media",
    ogDescription:
      "Top website design company in Wakad, Pune - SEO-optimized, conversion-focused websites for Wakad businesses. Free consultation.",
    area: "Wakad",
    city: "Pune",
    primaryService: "Website Design Company",
    headline: "Best Website Design Company in Wakad",
    subheadline:
      "We build premium, performance-first websites for businesses in Wakad - from IT companies and real estate agencies to restaurants and professional service providers.",
    areaDescription:
      "Wakad has transformed into one of Pune's fastest-growing mixed-use localities - a blend of IT professionals, young families, startups, healthcare providers, and thriving local businesses. With its proximity to Hinjewadi IT Park and excellent connectivity, Wakad's businesses are increasingly competing for digital visibility. Growthik Media delivers enterprise-quality website design to Wakad businesses at competitive pricing, with a strong focus on local search rankings, user experience, and conversion rate optimization.",
    services: [
      {
        icon: Monitor,
        name: "Business Website Design",
        desc: "Professional, mobile-first website designs for Wakad's diverse business landscape - from IT companies to local shops.",
      },
      {
        icon: Globe,
        name: "Real Estate Websites",
        desc: "Property showcase websites for Wakad real estate agents and builders - with listing pages, virtual tours, and lead capture forms.",
      },
      {
        icon: Search,
        name: "Wakad Local SEO",
        desc: "Rank your business for location-specific searches in Wakad, Hinjewadi, and surrounding areas.",
      },
      {
        icon: Target,
        name: "eCommerce Websites",
        desc: "Sell products online with a fully featured eCommerce site - Razorpay integration, GST billing, and mobile-optimized shopping.",
      },
      {
        icon: Zap,
        name: "Speed Optimization",
        desc: "Every website we build is optimized for sub-2-second load times, 90+ PageSpeed scores, and zero CLS on all devices.",
      },
      {
        icon: BarChart,
        name: "Lead Generation Pages",
        desc: "Targeted landing pages that capture leads from Google Ads and organic search for Wakad-based businesses.",
      },
    ],
    faqs: [
      {
        q: "Do you work with IT companies and startups in Wakad?",
        a: "Yes, we have significant experience building websites for IT companies, software agencies, and tech startups in Wakad and the Hinjewadi corridor. Our Next.js development capabilities are particularly well-suited for tech businesses.",
      },
      {
        q: "Can you create a real estate website for Wakad properties?",
        a: "Absolutely. We build specialized real estate websites with property listings, filter/search functionality, virtual tour embedding, inquiry forms, EMI calculators, and local area guides - all optimized for Google real estate searches.",
      },
      {
        q: "How much does a website cost in Wakad?",
        a: "Our website packages for Wakad businesses start at ₹18,000 for a 5-page brochure site and go up to ₹1,50,000+ for custom web applications. Contact us for a detailed, transparent quote tailored to your requirements.",
      },
      {
        q: "How quickly can you build a website?",
        a: "Our typical turnaround for a 10-15 page business website is 3-4 weeks. Rush projects can be accommodated with priority development. We always provide a clear, agreed-upon timeline before we begin work.",
      },
    ],
  },
  "services/seo": {
    title: "SEO Company in Hinjewadi Pune | Growthik Media",
    description:
      "SEO services for IT companies and startups in Hinjewadi Pune. Rank higher and generate more B2B leads. Get a free SEO audit today.",
    keywords:
      "seo company in hinjewadi, seo services hinjewadi pune, seo for it companies hinjewadi, best seo agency hinjewadi",
    ogTitle: "SEO Company in Hinjewadi Pune | Growthik Media",
    ogDescription:
      "Top-rated SEO agency in Hinjewadi, Pune - specialized in B2B lead generation for IT companies and startups.",
    area: "Hinjewadi",
    city: "Pune",
    primaryService: "SEO Company",
    headline: "SEO Company in Hinjewadi Pune",
    subheadline:
      "We provide specialized SEO services for IT companies, software firms, and startups in Hinjewadi - designed to rank you globally and locally for high-intent B2B keywords.",
    areaDescription:
      "Hinjewadi is the IT heart of Pune, housing hundreds of global technology giants and fast-growing startups. For businesses in Hinjewadi, local competition isn't just about footfall - it's about being found by decision-makers looking for specialized tech services. Growthik Media understands the unique SEO needs of Hinjewadi-based businesses. We don't just focus on ranking; we focus on 'Quality Lead Generation' by targeting keywords that developers, CEOs, and CTOs are searching for.",
    services: [
      {
        icon: Search,
        name: "Technical SEO Audit",
        desc: "Deep analysis of your website's architecture, indexing, and Core Web Vitals to ensure a solid foundation for ranking.",
      },
      {
        icon: Globe,
        name: "Global & B2B SEO",
        desc: "Expanding your reach beyond Pune to international markets, specifically targeting B2B tech keywords.",
      },
      {
        icon: Target,
        name: "Content Marketing",
        desc: "Strategic blog posts, whitepapers, and case studies that establish your authority in the Hinjewadi tech ecosystem.",
      },
      {
        icon: Zap,
        name: "Local SEO Hinjewadi",
        desc: "Optimizing for Hinjewadi-specific searches to ensure local talent and partners find you easily.",
      },
      {
        icon: Monitor,
        name: "On-Page Optimization",
        desc: "Perfecting your meta tags, heading hierarchy, and internal linking to maximize keyword relevance.",
      },
      {
        icon: BarChart,
        name: "Lead Tracking & Analytics",
        desc: "Setting up GA4 and Search Console to measure exactly which keywords are driving your B2B inquiries.",
      },
    ],
    faqs: [
      {
        q: "Why does my IT company in Hinjewadi need specialized SEO?",
        a: "General SEO often misses the nuances of B2B tech searches. In Hinjewadi, you're competing for global keywords. We specialize in identifying the 'Long-tail' keywords that high-value clients use when looking for software partners.",
      },
      {
        q: "How long does it take to see results from SEO in Hinjewadi?",
        a: "SEO is a marthon. Typically, you'll see initial movement in 3 months, with significant ranking improvements and lead flow between 6–9 months. We provide monthly transparent reports to track this progress.",
      },
      {
        q: "Do you focus on international SEO or just Pune?",
        a: "For tech companies in Hinjewadi, we almost always implement Global SEO strategies alongside local optimization, ensuring you rank for your services in markets like the USA, UK, and Europe.",
      },
      {
        q: "Will you provide a free SEO audit for my website?",
        a: "Yes. We offer a comprehensive free SEO audit for Hinjewadi-based businesses to identify current bottlenecks and growth opportunities before we start any engagement.",
      },
    ],
  },
  "website-design-company-pune": {
    title: "Website Design Company in Pune | Growthik Media",
    description: "Leading website design company in Pune. We create stunning, mobile-responsive, and conversion-focused designs.",
    keywords: "website design company pune, web design pune, best website design pune",
    ogTitle: "Website Design Company in Pune | Growthik Media",
    ogDescription: "Leading website design company in Pune. We create stunning, mobile-responsive, and conversion-focused designs.",
    area: "Pune",
    city: "Pune",
    primaryService: "Website Design",
    headline: "Creative Website Design Company in Pune",
    subheadline: "Stunning visual identities and user-centric designs that differentiate your brand in the Pune market.",
    areaDescription: "Design is not just about aesthetics; it's about business results. Our designs are engineered to engage, convince, and convert your target audience in Pune.",
    services: [
      {
        icon: Target,
        name: "UI/UX Strategy",
        desc: "User journeys mapped out to maximize engagement and lead capture.",
      },
      {
        icon: Globe,
        name: "Brand Identity",
        desc: "Cohesive visual language that builds trust and authority within your local niche.",
      },
    ],
    faqs: [
      { q: "Do you provide website redesign?", a: "Yes, we specialize in modernizing legacy websites with a focus on improving UI/UX and current SEO standards." },
    ],
  },
};
