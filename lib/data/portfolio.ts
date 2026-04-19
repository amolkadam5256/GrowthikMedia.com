export type ProjectCategory =
  | 'website-dev'
  | 'digital-marketing'
  | 'branding'
  | 'full-stack'
  | 'real-estate'
  | 'education'
  | 'travel'

export type ProjectLocation = 'pune' | 'dubai' | 'india' | 'global'

export type ProjectStatus = 'live' | 'completed' | 'in-progress'

export type PortfolioProject = {
  id: string
  slug: string
  title: string
  client: string
  industry: string
  shortDesc: string
  fullDesc: string
  challenge?: string
  solution?: string
  category: ProjectCategory
  location: ProjectLocation
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  thumbnail: string
  featured: boolean
  isClientWork: boolean
  isCaseStudy: boolean
  status: ProjectStatus
  completedDate: string
  results?: { metric: string; value: string }[]
  testimonial?: {
    name: string
    role: string
    company: string
    text: string
    rating: number
  }
}

export const portfolioData: PortfolioProject[] = [

  // ── REAL ESTATE (6 projects) ──────────────────────────

  {
    id: 're-01',
    slug: 'ardy-real-estate-dubai',
    title: 'Ardy Real Estates - Dubai Property Agency',
    client: 'Ardy Real Estates',
    industry: 'Real Estate',
    shortDesc: "A high-performance property platform for the Dubai market, bridging the gap between local listings and international investors.",
    fullDesc: "We built Ardy Real Estates more than just a website; we built a lead-generation machine for the competitive Dubai property market. From Downtown skyscrapers to calm JVC villas, the platform offers an intuitive search experience for both local residents and NRI investors. With WhatsApp integration and localized SEO, the site turns global interest into real estate inquiries.",
    challenge: "Creating a platform that feels 'local' to Dubai residents while remaining easy to navigate for Indian investors looking for the same properties.",
    solution: "A mobile-first, lighting-fast React platform with dedicated investment guides and instant chat features that break down the barriers between interest and inquiry.",
    category: 'real-estate',
    location: 'dubai',
    techStack: ['React.js', 'JavaScript', 'CSS3', 'SEO', 'Responsive Design'],
    githubUrl: 'https://github.com/amolkadam5256/ardyrealestates',
    thumbnail: '/images/portfolio/ardy-real-estate-dubai.jpg',
    featured: true,
    isClientWork: true,
    isCaseStudy: true,
    status: 'live',
    completedDate: 'Dec 2025',
    results: [
      { metric: 'Properties listed', value: '50+' },
      { metric: 'Monthly enquiries', value: '30+' },
      { metric: 'Page load time', value: 'Under 2s' },
    ],
  },

  {
    id: 're-02',
    slug: 'majestic-realties-pune',
    title: 'Majestic Realties - Land Development Website',
    client: 'Majestic Realties',
    industry: 'Real Estate & Land Development',
    shortDesc: "A unified digital home for Pune's fastest-growing land developer, showcasing premium residential projects with a focus on trust.",
    fullDesc: "Majestic Realties needed a way to showcase multiple large-scale projects without losing the unique identity of each. We created a 'Digital Showroom' that houses Royal Casa, Mount Castle, and Royal Greens. Each project gets its own stage, complete with amenity highlights and transparent pricing, all under one powerful brand umbrella.",
    challenge: "Marketing three distinctly different residential projects without making the website feel cluttered or confusing for a potential buyer.",
    solution: "We engineered a 'Hub-and-Spoke' architecture-a single corporate brand hub that leads into dedicated project microsites, each with its own lead capture logic.",
    category: 'real-estate',
    location: 'pune',
    techStack: ['React.js', 'JavaScript', 'CSS3', 'SEO', 'Lead Generation'],
    githubUrl: 'https://github.com/amolkadam5256/majestic-realties-website',
    thumbnail: '/images/portfolio/majestic-realties-pune.jpg',
    featured: true,
    isClientWork: true,
    isCaseStudy: false,
    status: 'live',
    completedDate: 'Dec 2025',
  },

  {
    id: 're-03',
    slug: 'mount-castle-hilltop-plots',
    title: 'Mount Castle - Premium Hilltop Plot Landing Page',
    client: 'Majestic Realties',
    industry: 'Real Estate - Residential Plots',
    shortDesc: "A high-conversion landing page for premium hilltop land, built to build trust and simplify the buying process.",
    fullDesc: "Mount Castle isn't just about selling plots; it's about selling a lifestyle. We designed this landing page to be the first point of contact for premium buyers, combining stunning visuals with transparent legal documentation. It's a focused, trust-heavy experience that turns Google searchers into site-visit bookers.",
    challenge: "Standing out in a crowded real estate market by focusing on the unique hilltop value proposition rather than just price.",
    solution: "A minimalist, high-speed landing page that leads with scenic videos and RERA transparency, removing every possible distraction from the lead capture flow.",
    category: 'real-estate',
    location: 'pune',
    techStack: ['React.js', 'JavaScript', 'Tailwind CSS', 'Google Ads Integration', 'Lead Capture'],
    thumbnail: '/images/portfolio/mount-castle-hilltop-plots.jpg',
    featured: false,
    isClientWork: true,
    isCaseStudy: false,
    status: 'live',
    completedDate: 'Aug 2025',
  },

  {
    id: 're-04',
    slug: 'nandavan-park-bhugaon',
    title: 'Nandavan Park Bhugaon - Commercial Shops',
    client: 'Nandavan Park',
    industry: 'Real Estate - Commercial',
    shortDesc: "Establishing a digital presence for commercial growth in Pune's suburban micro-markets.",
    fullDesc: "For Nandavan Park, we focused on hyper-local visibility. We built a platform that speaks directly to business owners looking for the perfect retail space in Bhugaon. By combining clear shop specifications with instant WhatsApp connectivity, we made it easier for local entrepreneurs to take the next step in their business journey.",
    challenge: "Creating digital awareness for a commercial project in a suburban area where potential buyers often rely on offline searches.",
    solution: "A local-SEO powerhouse site that targets specific neighborhood keywords and places a WhatsApp chat button just a thumb-tap away.",
    category: 'real-estate',
    location: 'pune',
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Lead Generation', 'Local SEO'],
    githubUrl: 'https://github.com/amolkadam5256/Nandavan-Park-Bhugaon',
    thumbnail: '/images/portfolio/nandavan-park-bhugaon.jpg',
    featured: false,
    isClientWork: true,
    isCaseStudy: false,
    status: 'live',
    completedDate: 'Jan 2026',
  },

  {
    id: 're-05',
    slug: 'pune-dream-homes',
    title: 'Pune Dream Homes - Property Listing Website',
    client: 'Pune Dream Homes',
    industry: 'Real Estate',
    shortDesc: "A local property marketplace that simplifies the home-buying journey across Pune.",
    fullDesc: "Pune Dream Homes is built on the idea that finding a home shouldn't be stressful. We created a clean, filtered search experience that helps families skip the clutter and find properties in the neighborhoods they love. It's local expertise, delivered through a modern digital lens.",
    challenge: "Building a property portal that feels as fast and feature-rich as a national platform, but with the personal touch of a local agent.",
    solution: "A high-performance listing engine with integrated EMI calculators and locality guides, all optimized for mobile searching on the go.",
    category: 'real-estate',
    location: 'pune',
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Local SEO', 'Responsive Design'],
    githubUrl: 'https://github.com/amolkadam5256/Pune-Dream-Homes',
    thumbnail: '/images/portfolio/pune-dream-homes.jpg',
    featured: false,
    isClientWork: true,
    isCaseStudy: false,
    status: 'completed',
    completedDate: 'Jan 2026',
  },

  {
    id: 're-06',
    slug: 'naukri-india-dubai-jobs',
    title: 'NaukriInDubai - India to UAE Jobs Portal',
    client: 'NaukriInDubai',
    industry: 'Jobs & Recruitment',
    shortDesc: "A targeted career portal bridging the gap between Indian talent and UAE opportunities.",
    fullDesc: "NaukriInDubai was built with a single mission: to make international job hunting safer and simpler. We designed a portal that focuses exclusively on the India-to-Dubai corridor, providing job seekers with vetted opportunities and direct access to employers through a mobile-first interface.",
    challenge: "Competing in a massive job-portal market by focusing on a specific, high-intent niche of international job seekers.",
    solution: "A hyper-focused user journey that combines job listings with essential visa guidance and instant WhatsApp application features.",
    category: 'website-dev',
    location: 'dubai',
    techStack: ['React.js', 'JavaScript', 'CSS3', 'Job Listings', 'Mobile-First'],
    githubUrl: 'https://github.com/amolkadam5256/naukriindubai',
    thumbnail: '/images/portfolio/naukri-india-dubai-jobs.jpg',
    featured: false,
    isClientWork: true,
    isCaseStudy: false,
    status: 'live',
    completedDate: 'Nov 2025',
  },

  // ── CORPORATE & BUSINESS WEBSITES (5 projects) ─────────

  {
    id: 'corp-01',
    slug: 'autobat-manufacturing-website',
    title: 'Autobat Accumulator - Corporate Manufacturing Website',
    client: 'Autobat Accumulator Pvt. Ltd.',
    industry: 'Battery Manufacturing',
    shortDesc: "Elevating a legacy manufacturing brand with a modern, trust-focused corporate presence.",
    fullDesc: "For Autobat, we translated decades of engineering excellence into a digital experience. The new corporate site serves as a global showroom for their battery technology, communicating reliability to B2B buyers through detailed specifications and international certification highlights.",
    challenge: "Moving a traditional manufacturing brand from 'offline-only' to a digital-first strategy that commands respect in international markets.",
    solution: "A documentation-heavy corporate site that prioritizes quality certifications and technical specifications, matching the professional standard of the battery industry.",
    category: 'website-dev',
    location: 'pune',
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    thumbnail: '/images/portfolio/autobat-manufacturing-website.jpg',
    featured: false,
    isClientWork: true,
    isCaseStudy: false,
    status: 'live',
    completedDate: 'Feb 2026',
  },

  {
    id: 'corp-02',
    slug: 'dubai-business-connect-uae',
    title: 'Dubai Business Connect - UAE Company Setup Portal',
    client: 'Dubai Business Connect',
    industry: 'Business Consultancy',
    shortDesc: "The ultimate guide for entrepreneurs looking to build their future in the UAE.",
    fullDesc: "Dubai Business Connect is more than a portal; it's a consultant in your pocket. We built this platform to simplify the complex world of UAE company formation for Indian SMEs, providing clear cost breakdowns and step-by-step guidance for every free zone and mainland setup.",
    challenge: "Turning the confusing process of international company registration into a simple, followable digital roadmap.",
    solution: "An education-first strategy using comparison tables and cost calculators to build trust before leading users into a high-value consultation funnel.",
    category: 'website-dev',
    location: 'dubai',
    techStack: ['React.js', 'JavaScript', 'CSS3', 'RAKEZ Integration', 'Lead Generation'],
    githubUrl: 'https://github.com/amolkadam5256/Dubai-Business-Connect---UAE-Company-Setup-Portal-with-RAKEZ',
    thumbnail: '/images/portfolio/dubai-business-connect-uae.jpg',
    featured: true,
    isClientWork: true,
    isCaseStudy: false,
    status: 'live',
    completedDate: 'Nov 2025',
    results: [
      { metric: 'Business activities', value: '200+ listed' },
      { metric: 'Free zone partner', value: 'RAKEZ' },
    ],
  },

  {
    id: 'corp-03',
    slug: 'zeus-manpower-recruitment',
    title: 'Zeus Manpower - Workforce Solutions Website',
    client: 'Zeus Manpower',
    industry: 'HR & Recruitment',
    shortDesc: "A dual-purpose recruitment hub designed to find the right talent for the right teams.",
    fullDesc: "Zeus Manpower needed a digital home that could talk to two different audiences at once. We designed a site that makes job hunting as intuitive as talent acquisition, using clear conversion paths to ensure that every visitor-whether an employer or a seeker-finds exactly what they need.",
    challenge: "Serving two distinct users (employers and candidates) without making the homepage feel cluttered or the navigation confusing.",
    solution: "A 'Fork-in-the-road' navigation design that immediately splits the user journey into two specialized, high-conversion pipelines.",
    category: 'website-dev',
    location: 'india',
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Dual Conversion Funnel'],
    githubUrl: 'https://github.com/amolkadam5256/zeusmanpower.co.in',
    thumbnail: '/images/portfolio/zeus-manpower-recruitment.jpg',
    featured: false,
    isClientWork: true,
    isCaseStudy: false,
    status: 'live',
    completedDate: 'Sep 2025',
  },

  {
    id: 'corp-04',
    slug: 'aria-freightways-logistics',
    title: 'A-RIA Freightways - Logistics & Transportation',
    client: 'A-RIA Freightways',
    industry: 'Logistics & Supply Chain',
    shortDesc: "Streamlining logistics with a professional, B2B-focused digital presence.",
    fullDesc: "In the fast-paced world of freight, clarity is everything. We built A-RIA Freightways as a reliable digital partner for businesses, providing instant access to transport specs and a direct line for quotes, all while maintaining the professional look of a global logistics leader.",
    challenge: "Moving away from a price-war mentality by highlighting logistical reliability and fleet coverage through digital storytelling.",
    solution: "A specs-first layout that puts fleet details and quote requests front and center, reducing friction for commercial shipping clients.",
    category: 'website-dev',
    location: 'india',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'B2B Lead Generation'],
    githubUrl: 'https://github.com/amolkadam5256/A-RIA-Freightways',
    thumbnail: '/images/portfolio/aria-freightways-logistics.jpg',
    featured: false,
    isClientWork: true,
    isCaseStudy: false,
    status: 'live',
    completedDate: 'Jan 2025',
  },

  {
    id: 'corp-05',
    slug: 'amit-kadam-finance-portfolio',
    title: 'Amit Kadam - Equity Research Analyst Portfolio',
    client: 'Amit Kadam',
    industry: 'Finance & Investment',
    shortDesc: "A sophisticated executive portfolio for a leader in equity research and finance.",
    fullDesc: "Finance is about precision, and so is this portfolio. We designed a digital space for Amit Kadam that mirrors the professional standards of the investment world, showcasing research metrics and valuation models with a clean, executive-level aesthetic.",
    challenge: "Building a personal brand that commands respect from High-Net-Worth individuals and institutional recruiters within seconds.",
    solution: "A clean, Bloomberg-inspired design system that leads with technical credentials and downloadable research exhibits for instant transparency.",
    category: 'website-dev',
    location: 'pune',
    techStack: ['React.js', 'JavaScript', 'CSS3', 'Portfolio Design'],
    githubUrl: 'https://github.com/amolkadam5256/AmitKadamPortfolio',
    thumbnail: '/images/portfolio/amit-kadam-finance-portfolio.jpg',
    featured: false,
    isClientWork: true,
    isCaseStudy: false,
    status: 'completed',
    completedDate: 'Nov 2025',
  },

  // ── DIGITAL MARKETING & BRANDING (3 projects) ──────────

  {
    id: 'dm-01',
    slug: 'webmarkx-digital-marketing-agency',
    title: 'WebMarkx - Digital Marketing Agency Website',
    client: 'WebMarkx',
    industry: 'Digital Marketing',
    shortDesc: "A complete agency portal that demonstrates the power of performance marketing and smart design.",
    fullDesc: "WebMarkx isn't just a website; it's a testament to what's possible when SEO and design work together. We built this platform to showcase transparency, results, and the human side of digital marketing. With tiered packages and clear campaign results, it's designed to build trust before the first meeting even starts.",
    challenge: "Developing a site for a marketing agency that actually 'walks the talk'-loading instantly and ranking for competitive search terms.",
    solution: "A conversion-optimized architecture that prioritizes Core Web Vitals and clean semantic code, ensuring it performs as well as it looks.",
    category: 'digital-marketing',
    location: 'india',
    techStack: ['React.js', 'JavaScript', 'Tailwind CSS', 'SEO Optimised', 'Lead Generation'],
    githubUrl: 'https://github.com/amolkadam5256/webmarkx-digital-marketing-agency',
    thumbnail: '/images/portfolio/webmarkx-digital-marketing-agency.jpg',
    featured: true,
    isClientWork: true,
    isCaseStudy: true,
    status: 'live',
    completedDate: 'Nov 2025',
  },

  {
    id: 'dm-02',
    slug: 'shabdbramhand-creative-agency',
    title: 'ShabdBramhand & Co - Creative Agency Website',
    client: 'ShabdBramhand & Co',
    industry: 'Creative Agency & Branding',
    shortDesc: "A masterclass in digital storytelling for a modern creative agency.",
    fullDesc: "ShabdBramhand needed a website as creative as their work. We built a platform that uses typography and whitespace as a design element, creating an editorial feel that lets their branding work take center stage without any digital noise.",
    challenge: "Creating a website for a creative agency that proves their design authority before they even show a portfolio piece.",
    solution: "An editorial-style layout with aggressive typographic hierarchy and impact-driven case studies that treat design as a business tool, not just art.",
    category: 'branding',
    location: 'pune',
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Brand Identity', 'Content Strategy'],
    githubUrl: 'https://github.com/amolkadam5256/ShabdBramhand-Co',
    thumbnail: '/images/portfolio/shabdbramhand-creative-agency.jpg',
    featured: false,
    isClientWork: true,
    isCaseStudy: false,
    status: 'live',
    completedDate: 'Dec 2025',
  },

  {
    id: 'dm-03',
    slug: 'hajj-umrah-travel-portal',
    title: 'Hajj & Umrah Tour Package Portal',
    client: 'Private Client',
    industry: 'Religious Travel & Tourism',
    shortDesc: "Building trust for a spiritual journey with a modern, compassionate travel portal.",
    fullDesc: "Religious travel is about trust and devotion. We designed this portal to handle the complexities of Hajj & Umrah bookings with transparent itineraries and instant communication, giving pilgrims the peace of mind they need before they even leave home.",
    challenge: "Combining complex travel logistics (visas, group dates, lodging) with a warm aesthetic that honors the spiritual nature of the trip.",
    solution: "A trust-focused UI featuring day-by-day itineraries, past pilgrim stories, and a 24/7 WhatsApp concierge for immediate human support.",
    category: 'travel',
    location: 'global',
    techStack: ['React.js', 'JavaScript', 'AOS Animations', 'Tailwind CSS'],
    thumbnail: '/images/portfolio/hajj-umrah-travel-portal.jpg',
    featured: false,
    isClientWork: true,
    isCaseStudy: false,
    status: 'completed',
    completedDate: 'Aug 2025',
  },

  // ── HEALTHCARE & EDUCATION (3 projects) ────────────────

  {
    id: 'he-01',
    slug: 'healurmind-mental-health-platform',
    title: 'HealUrMind - Mental Health Counseling Website',
    client: 'HealUrMind',
    industry: 'Healthcare & Mental Wellness',
    shortDesc: "A serene digital space for mental wellness, designed to make finding help feel safe and approachable.",
    fullDesc: "Mental health is personal, and the HealUrMind platform reflects that. We moved away from the cold, clinical feel of traditional healthcare sites and created a warm, inviting digital space. Soft animations and an intuitive booking flow ensure that the path to wellness is as stress-free as possible.",
    challenge: "Designing a healthcare platform that balances professional authority with a warm, non-clinical aesthetic that encourages users to reach out.",
    solution: "A soft UI with empathetic microcopy and a friction-less 3-click booking system that removes the anxiety of scheduling a session.",
    category: 'website-dev',
    location: 'india',
    techStack: ['React.js', 'Tailwind CSS', 'AOS Animations', 'Dark Mode', 'Booking Flow'],
    githubUrl: 'https://github.com/amolkadam5256/healurmind-mental-health-website',
    thumbnail: '/images/portfolio/healurmind-mental-health-platform.jpg',
    featured: true,
    isClientWork: true,
    isCaseStudy: true,
    status: 'live',
    completedDate: 'Nov 2025',
  },

  {
    id: 'he-02',
    slug: 'ecti-educational-institute-portal',
    title: 'ECTI - Educational Institute Management Portal',
    client: 'Envision Computer Training Institute',
    industry: 'Education & Training',
    shortDesc: "Digitizing the classroom-a custom management tool for Pune's premier training institute.",
    fullDesc: "ECTI needed a way to move beyond spreadsheets. We built a custom management interface that handles everything from student registration to fee tracking, allowing the institute staff to focus on teaching rather than manual data entry.",
    challenge: "Replacing a decades-old manual system with a digital tool that is powerful enough for admins but simple enough for every staff member to use.",
    solution: "A zero-ambiguity admin dashboard with automated reporting and receipt generation, built on a robust Java backend for long-term stability.",
    category: 'education',
    location: 'pune',
    techStack: ['Java', 'JSP', 'Servlets', 'JDBC', 'MySQL', 'Tailwind CSS', 'AOS'],
    githubUrl: 'https://github.com/amolkadam5256/ECTI-Educational-Consultation-Training-Interface',
    thumbnail: '/images/portfolio/ecti-educational-institute-portal.jpg',
    featured: false,
    isClientWork: true,
    isCaseStudy: true,
    status: 'live',
    completedDate: 'Sep 2025',
  },

  {
    id: 'he-03',
    slug: 'diksha-computers-it-training',
    title: 'Diksha Computers - IT Training Institute Website',
    client: 'Diksha Computers',
    industry: 'IT Education',
    shortDesc: "Commanding the local search space for an IT hub in suburban Pune.",
    fullDesc: "Diksha Computers needed more than just a website; they needed to be found by the students right in their neighborhood. We built a local-SEO powerhouse that ranks for key IT courses in Warje, driving walk-ins and phone calls directly to the institute.",
    challenge: "Increasing digital visibility for a local branch institute that was previously invisible to students searching right in their area.",
    solution: "A course-first website with integrated Google My Business hooks and course-specific schema, ensuring they dominate 'near me' search rankings.",
    category: 'education',
    location: 'pune',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Local SEO', 'Google Maps'],
    githubUrl: 'https://github.com/amolkadam5256/Diksha-Computers-Your-IT-Training-Hub',
    thumbnail: '/images/portfolio/diksha-computers-it-training.jpg',
    featured: false,
    isClientWork: true,
    isCaseStudy: false,
    status: 'live',
    completedDate: 'Jan 2025',
  },

  // ── FULL STACK APPLICATIONS (3 projects) ───────────────

  {
    id: 'fs-01',
    slug: 'doctordom-appointment-platform',
    title: 'DoctorDom - Full-Stack Doctor Appointment Platform',
    client: 'DoctorDom',
    industry: 'Healthcare Technology',
    shortDesc: "A complete healthcare ecosystem that simplifies how Pune residents find and book their doctors.",
    fullDesc: "DoctorDom is our vision for a frictionless healthcare experience. No more waiting on hold; we built a system that lets patients find specialists and book appointments in seconds. With integrated payments and a secure doctor dashboard, it's a full-stack solution designed to make health management as easy as ordering food.",
    challenge: "Managing complex scheduling logic and secure payments across three different user roles without slowing down the mobile experience.",
    solution: "A heavy-duty MERN stack architecture with a modular React frontend that stays fast and responsive, no matter how many appointments are in the queue.",
    category: 'full-stack',
    location: 'india',
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Stripe', 'JWT', 'Tailwind CSS'],
    githubUrl: 'https://github.com/amolkadam5256/DoctorDom-UI',
    thumbnail: '/images/portfolio/doctordom-appointment-platform.jpg',
    featured: true,
    isClientWork: false,
    isCaseStudy: true,
    status: 'completed',
    completedDate: 'Mar 2025',
    results: [
      { metric: 'User roles', value: '3 (Patient / Doctor / Admin)' },
      { metric: 'Payment gateway', value: 'Stripe' },
      { metric: 'API endpoints', value: '40+' },
    ],
  },

  {
    id: 'fs-02',
    slug: 'shopnexus-ecommerce-platform',
    title: 'ShopNexus - Full-Stack E-Commerce Platform',
    client: 'ShopNexus',
    industry: 'E-Commerce Technology',
    shortDesc: "A production-grade e-commerce engine built for scale and seamless shopping.",
    fullDesc: "ShopNexus is our answer to the complexities of modern e-commerce. It's built for more than just browsing; it handles everything from inventory tracking to secure payments with enterprise-level stability. It's a shopping experience that's fast, secure, and ready for global growth.",
    challenge: "Building a heavy-duty e-commerce backend that stays perfectly in sync with a fast, interactive React frontend.",
    solution: "A robust Java Spring Boot architecture paired with a responsive React UI, utilizing JWT security and clear REST API documentation for infinite scalability.",
    category: 'full-stack',
    location: 'india',
    techStack: ['React.js', 'Java', 'Spring Boot', 'MySQL', 'REST API', 'JWT', 'Maven'],
    githubUrl: 'https://github.com/amolkadam5256/ShopNexus-FullStack-Ecommerce',
    thumbnail: '/images/portfolio/shopnexus-ecommerce-platform.jpg',
    featured: true,
    isClientWork: false,
    isCaseStudy: true,
    status: 'completed',
    completedDate: 'Aug 2025',
    results: [
      { metric: 'Backend', value: 'Java Spring Boot' },
      { metric: 'Database', value: 'MySQL - normalised schema' },
      { metric: 'API endpoints', value: '35+' },
    ],
  },

  {
    id: 'fs-03',
    slug: 'growthikmedia-official-website',
    title: 'GrowthikMedia.com - Agency Website (Next.js)',
    client: 'Growthik Media',
    industry: 'Digital Marketing Agency',
    shortDesc: "Our very own digital HQ-built to serve as a masterclass in modern web performance and SEO.",
    fullDesc: "GrowthikMedia.com is where we practice what we preach. Every line of code, every meta tag, and every AI integration is designed to drive results. It's not just our website; it's our most powerful marketing asset, built to load instantly and convert visitors into long-term partners.",
    challenge: "Creating a platform that serves as a living portfolio of our SEO, design, and AI capabilities without sacrificing speed.",
    solution: "Next.js 14 App Router integration with advanced schema markup and custom AI lead capture, resulting in a 95+ Lighthouse score across the board.",
    category: 'full-stack',
    location: 'pune',
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Node.js', 'Vercel'],
    githubUrl: 'https://github.com/amolkadam5256/GrowthikMedia.com',
    liveUrl: 'https://www.growthikmedia.com',
    thumbnail: '/images/portfolio/growthikmedia-official-website.jpg',
    featured: true,
    isClientWork: false,
    isCaseStudy: true,
    status: 'live',
    completedDate: 'Mar 2026',
    results: [
      { metric: 'Lighthouse score', value: '95+' },
      { metric: 'AI leads - week 1', value: '7 captured' },
      { metric: 'Pages indexed', value: '50+' },
    ],
  },

  // ── BEAUTY & LIFESTYLE (1 project) ─────────────────────

  {
    id: 'bl-01',
    slug: 'sk-salon-beauty-website',
    title: 'SK Salon - Beauty & Lifestyle Website',
    client: 'SK Salon',
    industry: 'Beauty & Wellness',
    shortDesc: "Translating a premium salon experience into a polished digital front door.",
    fullDesc: "For SK Salon, the goal was simple: make the website feel as premium as a hair transformation. We focused on high-end imagery and a soft, elegant design that reassures clients that they are in expert hands before they ever sit in a stylist's chair.",
    challenge: "Standing out from high-traffic franchise salons by emphasizing personalized care and premium brand aesthetics.",
    solution: "An image-first layout with stylized stylist profiles and a seamless WhatsApp booking trigger, optimized for the local Pune beauty market.",
    category: 'website-dev',
    location: 'pune',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'WhatsApp Integration', 'Responsive Design'],
    githubUrl: 'https://github.com/amolkadam5256/SK-SALON',
    thumbnail: '/images/portfolio/sk-salon-beauty-website.jpg',
    featured: false,
    isClientWork: true,
    isCaseStudy: false,
    status: 'live',
    completedDate: 'Oct 2024',
  },

]

// ─────────────────────────────────────────────────────────
// HELPER FUNCTIONS
// ─────────────────────────────────────────────────────────

export function getProjectBySlug(slug: string) {
  return portfolioData.find(p => p.slug === slug)
}
export function getProjectsByCategory(category: ProjectCategory) {
  return portfolioData.filter(p => p.category === category)
}
export function getFeaturedProjects() {
  return portfolioData.filter(p => p.featured)
}
export function getCaseStudies() {
  return portfolioData.filter(p => p.isCaseStudy)
}
export function getClientProjects() {
  return portfolioData.filter(p => p.isClientWork)
}
export function getProjectsByLocation(location: ProjectLocation) {
  return portfolioData.filter(p => p.location === location)
}
export function getRelatedProjects(slug: string, count = 3) {
  const project = getProjectBySlug(slug)
  if (!project) return []
  return portfolioData
    .filter(p => p.slug !== slug && p.category === project.category)
    .slice(0, count)
}

export const portfolioStats = {
  total: portfolioData.length,
  clientProjects: portfolioData.filter(p => p.isClientWork).length,
  industries: [...new Set(portfolioData.map(p => p.industry))].length,
  dubaiProjects: portfolioData.filter(p => p.location === 'dubai').length,
  puneProjects: portfolioData.filter(p => p.location === 'pune').length,
}
