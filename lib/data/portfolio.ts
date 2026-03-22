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
    title: 'Ardy Real Estates — Dubai Property Agency',
    client: 'Ardy Real Estates',
    industry: 'Real Estate',
    shortDesc: 'Fully responsive React property website for a Dubai agency with listings, investment pages, team section, and SEO optimisation for the UAE market.',
    fullDesc: 'A property website for Ardy Real Estates, a Dubai-based agency targeting Indian investors and UAE residents. Features an interactive listings grid, area guides for Downtown, Marina, JVC and Business Bay, investment ROI sections, team profiles, WhatsApp lead capture, and SEO structured for UAE + India search queries.',
    challenge: 'Build a property platform that appeals simultaneously to UAE residents and NRI investors from India — two audiences with very different information needs.',
    solution: 'Designed a bilingual-ready, mobile-first React site with investment-focused pages for NRI buyers and local property listings for UAE residents. WhatsApp CTAs on every page for instant connection.',
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
    title: 'Majestic Realties — Land Development Website',
    client: 'Majestic Realties',
    industry: 'Real Estate & Land Development',
    shortDesc: 'Multi-project real estate website for a Pune developer covering Royal Casa, Mount Castle, and Royal Greens with individual property pages and lead capture.',
    fullDesc: 'Website for Majestic Realties, a Pune land development company with three active residential projects. Each project — Royal Casa, Mount Castle, and Royal Greens — has a dedicated page with location maps, plot size tables, amenity highlights, pricing guides, RERA details, and a separate lead capture form routed to its own pipeline.',
    challenge: 'Present three distinctly different real estate projects under one brand without diluting any individual project\'s marketing message.',
    solution: 'Built a unified company website with fully isolated project microsites within it — shared navigation and brand, but independent landing page logic per project.',
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
    title: 'Mount Castle — Premium Hilltop Plot Landing Page',
    client: 'Majestic Realties',
    industry: 'Real Estate — Residential Plots',
    shortDesc: 'High-conversion Google Ads landing page for premium farmhouse plots at Ambedwet, Pirangut, Pune — with RERA documentation, 7/12 extract, and CRM-integrated lead forms.',
    fullDesc: 'A dedicated high-conversion landing page for Mount Castle — farmhouse and bungalow plots on a scenic hilltop at Ambedwet, Pirangut, 20km from Pune. Built specifically to receive Google Ads traffic and convert it into qualified buyer leads. Features RERA registration, 7/12 extract documentation highlights, scenic imagery, plot size and pricing tables, infrastructure details, and a 30-second above-the-fold lead form.',
    challenge: 'Convert paid Google Ads traffic into qualified buyer leads for a premium plotted development in a micro-market with low existing awareness.',
    solution: 'Built a trust-heavy landing page with legal documentation, video walkthrough embed, and a minimal above-the-fold form. No distracting navigation.',
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
    title: 'Nandavan Park Bhugaon — Commercial Shops',
    client: 'Nandavan Park',
    industry: 'Real Estate — Commercial',
    shortDesc: 'Commercial property marketing website for ready-to-move shops near Bhugaon, Pune — with shop specs, location maps, pricing, and WhatsApp enquiry CTA.',
    fullDesc: 'A conversion-focused commercial real estate website for Nandavan Park Bhugaon, featuring premium ready-to-move shops. The site covers shop dimensions and configurations, pricing tiers, connectivity to Pune city, proximity to key landmarks, infrastructure highlights, and an instant WhatsApp enquiry button. Designed to generate direct buyer enquiries from local and online search traffic.',
    challenge: 'Generate qualified leads for commercial units in suburban Pune where the project had zero digital awareness.',
    solution: 'Focused SEO on locality-specific keywords ("commercial shops near Bhugaon Pune"), added WhatsApp click-to-chat for frictionless lead entry.',
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
    title: 'Pune Dream Homes — Property Listing Website',
    client: 'Pune Dream Homes',
    industry: 'Real Estate',
    shortDesc: 'Property listing website for residential apartments, houses, and plots across Pune with search filters, EMI calculator, and site visit booking.',
    fullDesc: 'A real estate marketplace website for Pune Dream Homes covering residential apartments, independent houses, and plotted developments across Pune. Features property search with filters (location, budget, BHK type), featured listings grid, builder profiles, EMI calculator, site visit booking form, and locality guides for key Pune areas.',
    challenge: 'Help a local real estate company compete with large portals by targeting underserved Pune micro-markets.',
    solution: 'Built hyper-local landing pages per micro-market (Baner, Hinjewadi, Wagholi, etc.) with locality-specific SEO content and fast mobile load performance.',
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
    title: 'NaukriInDubai — India to UAE Jobs Portal',
    client: 'NaukriInDubai',
    industry: 'Jobs & Recruitment',
    shortDesc: 'Recruitment portal connecting Indian job seekers with Dubai and UAE employment opportunities across construction, hospitality, healthcare, IT, and retail.',
    fullDesc: 'A niche jobs portal bridging Indian talent with UAE employment opportunities across Dubai, Abu Dhabi, Sharjah, and Ajman. Features job category listings, employer registration, candidate profile creation, placement agency directory, visa guidance, and travel documentation checklist for new joiners. Built mobile-first for job seekers browsing on phones.',
    challenge: 'Break into the India-UAE jobs space dominated by large platforms by focusing exclusively on the India-to-Dubai niche.',
    solution: 'Hyper-focused on one corridor: India to UAE only. WhatsApp application buttons on every listing, Arabic-ready structure, and placement agency directory as a differentiator.',
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
    title: 'Autobat Accumulator — Corporate Manufacturing Website',
    client: 'Autobat Accumulator Pvt. Ltd.',
    industry: 'Battery Manufacturing',
    shortDesc: 'Corporate website for a battery manufacturer featuring product catalogue, international certifications, manufacturing capabilities, and global distributor network.',
    fullDesc: 'Official corporate website for Autobat Accumulator Pvt. Ltd., a battery manufacturing company targeting B2B buyers in India and internationally. The site showcases the full product line with specifications, quality certifications (ISO/BIS), manufacturing capabilities, company history, and a dealer/distributor network locator.',
    challenge: 'A manufacturing company with strong offline credibility needed an online presence that communicated the same quality and reliability to B2B buyers.',
    solution: 'Built a documentation-rich corporate site with certification pages, downloadable product specs, and an industrial visual language that matched the product category.',
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
    title: 'Dubai Business Connect — UAE Company Setup Portal',
    client: 'Dubai Business Connect',
    industry: 'Business Consultancy',
    shortDesc: 'UAE company formation portal for Indian SMEs covering mainland, RAKEZ free zone setup, cost calculators, visa processing, and multi-step lead funnel.',
    fullDesc: 'A full-service business setup consultancy website helping Indian entrepreneurs register companies in the UAE. Features comprehensive guides for mainland, free zone (RAKEZ), and offshore company types, business activity search, cost estimation tools, visa timeline pages, and a multi-step enquiry funnel. RAKEZ is featured as a premium free zone partner.',
    challenge: 'Educate first-time Indian SME owners about UAE company formation — a complex process — while converting that education into high-value consultancy leads.',
    solution: 'Built a resource-heavy site structured like a decision guide: mainland vs free zone comparison tables, cost breakdowns, and a step-by-step consultancy booking flow.',
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
    title: 'Zeus Manpower — Workforce Solutions Website',
    client: 'Zeus Manpower',
    industry: 'HR & Recruitment',
    shortDesc: 'Corporate HR website with dual funnels — employers seeking talent and candidates seeking jobs — with separate service architectures and CRM-integrated forms.',
    fullDesc: 'Corporate website for Zeus Manpower (zeusmanpower.co.in), a workforce solutions firm serving businesses across India. Covers permanent staffing, contract staffing, executive search, and payroll services. Features two distinct user journeys from the homepage: "Hire Talent" for employer enquiries and "Find Jobs" for candidate registration — each with dedicated flows and CRM-integrated forms.',
    challenge: 'Serve two completely different audiences — job seekers and hiring companies — within one coherent website without confusing either.',
    solution: 'Built homepage with two prominent CTA paths from the hero. Separate service architectures for B2B employer and B2C candidate user journeys throughout.',
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
    title: 'A-RIA Freightways — Logistics & Transportation',
    client: 'A-RIA Freightways',
    industry: 'Logistics & Supply Chain',
    shortDesc: 'Corporate logistics website covering road freight, air freight, last-mile delivery, fleet overview, and B2B quote request for commercial shipping clients.',
    fullDesc: 'A corporate website for A-RIA Freightways simplifying freight for businesses. Covers road freight, air freight, last-mile delivery, and warehousing. Features fleet overview, industry verticals served (FMCG, pharma, automotive), route coverage, client references, and an instant B2B quote request form above the fold.',
    challenge: 'In a price-driven logistics industry, communicate reliability and expertise rather than competing purely on rates.',
    solution: 'Placed certifications, fleet numbers, and industry-specific service pages front and centre. Quote form with estimated TAT to set expectations immediately.',
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
    title: 'Amit Kadam — Equity Research Analyst Portfolio',
    client: 'Amit Kadam',
    industry: 'Finance & Investment',
    shortDesc: 'Executive portfolio website for a Finance Analyst highlighting financial modelling, equity research, valuation work, and CFA progress in a clean professional format.',
    fullDesc: 'Personal portfolio website for Amit Kadam, an Equity Research Analyst specialising in financial modelling and valuation. Showcases career history, technical finance skills (DCF, LBO, Comparable Company Analysis), research publications, Excel modelling work, and CFA certification status. Designed to impress finance industry recruiters and high-net-worth clients.',
    challenge: 'Finance professionals are judged on credibility instantly. Build a site that communicates investment-grade thinking from the first scroll.',
    solution: 'Bloomberg-inspired design system, led with credentials (CFA), displayed research work as downloadable case exhibits, clean executive typography throughout.',
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
    title: 'WebMarkx — Digital Marketing Agency Website',
    client: 'WebMarkx',
    industry: 'Digital Marketing',
    shortDesc: 'Full agency website for a digital marketing firm — SEO, Google Ads, social media, web development services — with testimonials and conversion-optimised lead generation.',
    fullDesc: 'A comprehensive digital marketing agency website for WebMarkx covering SEO, Google Ads, Social Media Management, Content Marketing, Email Marketing, and Web Development. Features service pages, tiered pricing packages, client testimonials with campaign results, case study previews, and conversion-optimised CTAs throughout. Built to rank on Google and convert visitors into agency clients.',
    challenge: 'A digital marketing agency\'s website must demonstrate its own capabilities — rank on Google, load fast, convert well, and look technically impressive.',
    solution: 'Applied all best practices: Core Web Vitals compliance, schema markup, semantic HTML, compelling above-fold lead form, and case study section with measurable results.',
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
    title: 'ShabdBramhand & Co — Creative Agency Website',
    client: 'ShabdBramhand & Co',
    industry: 'Creative Agency & Branding',
    shortDesc: 'Creative agency website for a branding and content strategy firm with strong typographic identity, brand portfolio gallery, and editorial layout.',
    fullDesc: 'Website for ShabdBramhand & Co, a creative agency handling brand identity design, content strategy, SEO, and performance marketing. Features brand identity portfolio, individual service pages, a blog section, team profiles, and agency philosophy section. The design itself is a portfolio piece — demonstrating typographic strength, editorial layout, and digital craftsmanship.',
    challenge: 'A creative agency\'s website is the single most visible demo of their capability. It must be better than anything they show clients.',
    solution: 'Led with brand identity work in gallery format, expressive typographic hierarchy, and case studies with brand impact metrics to prove ROI of creative work.',
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
    shortDesc: 'Pilgrimage travel portal built with React for Umrah, Hajj, and Ziyarat packages — city-wise departures, Ramadan tours, visa timelines, and AOS animations.',
    fullDesc: 'A pilgrimage travel portal for a tour operator offering Umrah, Hajj, and Ziyarat packages from India. Features city-wise departure listings, Ramadan Umrah specials, Ziyarat city add-ons, detailed visa processing timelines, group vs individual comparison, pricing tables, and a WhatsApp-redirect enquiry form. UX is built around trust — tour operator license, past pilgrim testimonials, and detailed day-by-day itineraries.',
    challenge: 'Religious travel requires the highest level of trust. Pilgrims need to feel completely confident before booking from a first-time website visit.',
    solution: 'Led with IATA/licensed operator credentials, detailed day-by-day itineraries, past pilgrim photo testimonials, and a direct WhatsApp contact for immediate human reassurance.',
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
    title: 'HealUrMind — Mental Health Counseling Website',
    client: 'HealUrMind',
    industry: 'Healthcare & Mental Wellness',
    shortDesc: 'Calming mental health platform — React.js + Tailwind CSS — with therapist profiles, service pages, appointment booking, dark mode, and AOS animations.',
    fullDesc: 'HealUrMind is a mental health counseling platform designed to reduce stigma and make booking a session feel approachable. Built with React.js and Tailwind CSS. Features therapist profiles, service descriptions (anxiety, depression, couples counseling, CBT, adolescent therapy), appointment booking flow, wellness blog, and a visible crisis helpline banner. Dark mode and soft AOS animations create a calming experience.',
    challenge: 'Mental health websites carry emotional weight — too clinical feels cold, too casual feels unprofessional. Must feel warm, safe, and completely non-judgmental.',
    solution: 'Soft warm color palette, large therapist portrait photography, empathetic microcopy on every CTA, and a 3-click booking flow to remove every friction point.',
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
    title: 'ECTI — Educational Institute Management Portal',
    client: 'Envision Computer Training Institute',
    industry: 'Education & Training',
    shortDesc: 'Full-stack Java web portal for a Pune IT training institute — student registration, course management, admin dashboard, attendance, and fee tracking.',
    fullDesc: 'A complete institute management portal for Envision Computer Training Institute (ECTI), Pune. Built with Java (JSP/Servlets) backend and Tailwind CSS frontend. Replaces a manual spreadsheet system. Features: course catalogue with batch schedules, online student registration, admin dashboard for batch management, attendance recording, fee tracking with receipt generation, and enquiry management.',
    challenge: 'Replace an entirely manual, error-prone spreadsheet system with a web application simple enough for non-technical institute staff to operate independently.',
    solution: 'Admin UI with zero-ambiguity workflows: one screen per task, large action buttons, and automatic receipt and report generation to eliminate manual work.',
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
    title: 'Diksha Computers — IT Training Institute Website',
    client: 'Diksha Computers',
    industry: 'IT Education',
    shortDesc: 'Local SEO-optimised website for an IT training institute in Warje, Pune — MS-CIT, Tally, Excel, GST, Power BI, and Typing course pages with batch schedules.',
    fullDesc: 'A course-focused website for Diksha Computers IT Training Hub in Warje, Pune. Dedicated pages per course (MS-CIT, Tally ERP, Advanced Excel, GST Accounting, Power BI, Typing), batch timings, fee structures, certification details, faculty profiles, Google Maps embed, and WhatsApp enquiry button. Optimised for local Pune searches to drive walk-ins and phone enquiries.',
    challenge: 'The institute was invisible online and losing students to competitors who appeared in local Google search results.',
    solution: 'Mobile-first website with Google My Business integration, course-specific landing pages, and schema markup for course listings — appearing in local pack results within weeks.',
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
    title: 'DoctorDom — Full-Stack Doctor Appointment Platform',
    client: 'DoctorDom',
    industry: 'Healthcare Technology',
    shortDesc: 'MERN stack healthcare SaaS with 3-role auth (patient / doctor / admin), Stripe payments, earnings dashboard, and full appointment management.',
    fullDesc: 'DoctorDom is a full-featured healthcare booking SaaS on the MERN stack. Patients register, search doctors by specialisation, book slots, pay, and view history. Doctors manage schedules, track earnings, and update profiles. Admins approve doctor listings and monitor platform activity. JWT authentication, Stripe payment integration, role-based protected routes, MongoDB Atlas, and React + Tailwind UI.',
    challenge: 'Build a multi-tenant healthcare platform handling 3 user roles, scheduling logic, and payment processing — while remaining usable on mobile.',
    solution: 'Modular React component architecture with Context API. Node.js REST API with role-based middleware. Stripe webhooks for payment confirmation. Mobile-first UI.',
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
    title: 'ShopNexus — Full-Stack E-Commerce Platform',
    client: 'ShopNexus',
    industry: 'E-Commerce Technology',
    shortDesc: 'Production-grade e-commerce with React frontend and Java Spring Boot backend — product catalogue, cart, orders, admin dashboard, and payment processing.',
    fullDesc: 'ShopNexus is a complete e-commerce platform combining React.js frontend with Java Spring Boot REST API backed by MySQL. Features: full product catalogue with search and filter, persistent shopping cart, JWT authentication, order management with status tracking, admin dashboard for inventory management, and payment processing. Clean layered Spring Boot architecture built for real deployment at scale.',
    challenge: 'Build a full e-commerce system demonstrating enterprise Java backend architecture alongside a modern React frontend — production quality, not a tutorial.',
    solution: 'Strict layered architecture in Spring Boot, React Context API for cart state, comprehensive REST API documentation, and a product seeding script for demo data.',
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
      { metric: 'Database', value: 'MySQL — normalised schema' },
      { metric: 'API endpoints', value: '35+' },
    ],
  },

  {
    id: 'fs-03',
    slug: 'growthikmedia-official-website',
    title: 'GrowthikMedia.com — Agency Website (Next.js)',
    client: 'Growthik Media',
    industry: 'Digital Marketing Agency',
    shortDesc: 'Official Growthik Media website — Next.js 14 + TypeScript + Tailwind CSS — with service pages, AI lead capture, blog, portfolio, and CMS admin panel.',
    fullDesc: 'The official Growthik Media agency website built on Next.js 14 App Router with TypeScript and Tailwind CSS, deployed on Vercel. Serves as the primary lead generation platform. Features: full service pages, AI-powered chat widget for lead capture, portfolio section, blog with MDX support, CRM-integrated contact forms, and a custom admin panel for content management. SEO-optimised with structured data and Core Web Vitals compliance.',
    challenge: 'Build an agency website that demonstrates every capability the agency sells — performance, SEO excellence, lead generation, and AI integration.',
    solution: 'Dogfooded all Growthik services: Next.js App Router for SSR/SSG, custom AI chat widget, structured data for all service pages, Core Web Vitals monitoring, and automated lead routing to admin CRM.',
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
      { metric: 'AI leads — week 1', value: '7 captured' },
      { metric: 'Pages indexed', value: '50+' },
    ],
  },

  // ── BEAUTY & LIFESTYLE (1 project) ─────────────────────

  {
    id: 'bl-01',
    slug: 'sk-salon-beauty-website',
    title: 'SK Salon — Beauty & Lifestyle Website',
    client: 'SK Salon',
    industry: 'Beauty & Wellness',
    shortDesc: 'Elegant salon website with services menu, photo gallery, stylist profiles, pricing, and WhatsApp booking — designed to communicate a premium brand experience.',
    fullDesc: 'A visually elegant website for SK Salon covering hair, skin, and beauty services. Full services menu with descriptions and pricing, curated photo gallery of salon work, stylist profile cards with specialisations, client testimonials, location and hours, and a WhatsApp booking button on every page. Communicates the premium, relaxing salon atmosphere before the client visits in person.',
    challenge: 'Help a local salon stand out from franchise competitors by building a digital presence as polished as the in-salon experience.',
    solution: 'Led with high-quality imagery of actual salon work, warm color palette, and a services-first layout. Mobile-first for local search discovery.',
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
