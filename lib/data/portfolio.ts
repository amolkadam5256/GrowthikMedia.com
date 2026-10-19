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

export type CaseStudyDetail = {
  overview?: string
  doctorPresence?: string
  businessObjectives?: string[]
  campaignAssessment?: {
    area: string
    observation: string
    improvement: string
  }[]
  creatives?: {
    code: string
    name: string
    description: string
    recommendedUse: string
  }[]
  metaStrategy?: {
    campaign: string
    objective: string
    audience: string
    conversionGoal: string
  }[]
  googleStrategy?: {
    title: string
    description: string
  }[]
  funnelStages?: {
    step: string
    title: string
    desc: string
  }[]
  kpis?: {
    kpi: string
    purpose: string
  }[]
  roadmap?: {
    week: string
    title: string
    description: string
  }[]
  pillars?: {
    number: string
    title: string
    points: string[]
  }[]
  campaignHighlight?: {
    title: string
    subtitle: string
    stats: { label: string; value: string }[]
    notes?: string
  }
  conclusion?: string
  statusNote?: string
}

export type PortfolioProject = {
  id: string
  slug: string
  title: string
  client: string
  clientLogo?: string
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
  caseStudyDetail?: CaseStudyDetail
  testimonial?: {
    name: string
    role: string
    company: string
    text: string
    rating: number
  }
}

export const portfolioData: PortfolioProject[] = [
  {
    id: 'reet-01',
    slug: 'reet-foods-corporate-gifting-website',
    title: 'Reet Foods Corporate Gifting Website',
    client: 'Reet Foods',
    clientLogo: '/images/portfolio/reet-foods-logo.png',
    industry: 'Food & Corporate Gifting',
    shortDesc: 'A Next.js website for Reet Foods, a Hinjewadi-based dry fruit and corporate gifting brand serving Pune and PAN India.',
    fullDesc: 'Reet Foods needed a fast, conversion-focused website for premium dry fruits, festive hampers and corporate Diwali gifting. Growthik Media designed and developed the site so Pune corporates can review collections, request bulk quotations and contact the founders on WhatsApp.',
    challenge: 'Present a large gifting catalogue clearly, support corporate quotation requests, and make the brand easy to find for Pune and PAN India buyers.',
    solution: 'We built a high-performance website with clear product categories, corporate gifting flows, quotation CTAs and local Pune business information for Shraddha Kharate and Harshad Kharate.',
    category: 'website-dev',
    location: 'pune',
    techStack: ['Next.js', 'SEO', 'WhatsApp CTA', 'Corporate Lead Forms'],
    liveUrl: 'https://www.reetfoodsngiftings.com/',
    thumbnail: '/images/portfolio/reet-foods-case-study.png',
    featured: true,
    isClientWork: true,
    isCaseStudy: true,
    status: 'live',
    completedDate: '2026',
    results: [
      { metric: 'Work delivered', value: 'Website + enquiry flow' },
      { metric: 'Location', value: 'Hinjewadi, Pune' },
      { metric: 'Site', value: 'reetfoodsngiftings.com' },
    ],
    testimonial: {
      name: 'Shraddha Kharate',
      role: 'Co-founder',
      company: 'Reet Foods',
      text: 'Growthik Media built our corporate gifting website and made it simple for Pune companies to understand our hampers and request a quotation. The site is clear, fast and easy for our team to use.',
      rating: 5,
    },
  },
  {
    id: 'mindspa-01',
    slug: 'mind-spa-global-paid-advertising-lead-generation',
    title: 'Mind Spa Global — Paid Advertising & Lead Generation',
    client: 'Mind Spa Global',
    clientLogo: '/images/portfolio/mind-spa-global-dr-dipti.png',
    industry: 'Healthcare & Wellness',
    shortDesc: 'Strategic Meta Ads, Google Search campaigns and structured lead qualification funnel for psychology consultations and Neuro Mind Gym programmes in Pune and Mumbai.',
    fullDesc: 'Mind Spa Global provides psychology-related consultations, Neuro Mind Gym programmes, mindset coaching, webinars, personal-development sessions and group training.\n\nIts advertising strategy focuses on attracting people interested in stress management, overthinking, emotional well-being, self-development and improving focus. The brand uses Dr. Dipti Panhalkar\'s professional presence as a central element of its marketing communications.\n\nGrowthik Media developed an integrated advertising and lead-generation strategy combining Meta Ads, Google Search, language-segmented creative testing and a disciplined qualification funnel to turn traffic into confirmed consultations.',
    challenge: 'Enquiries were generated, but lead quality was questioned. Audience targeting lacked segmentation between Pune and pan-India, creatives needed structured testing, WhatsApp-only lead capture created operational limitations, and appointment confirmations suffered from drop-offs.',
    solution: 'Engineered a multi-tiered lead qualification engine: language-segmented Meta campaigns (Marathi awareness, Hindi anxiety & overthinking educational creatives, Neuro Mind Gym webinars), Google Search campaigns targeting high-intent consultation terms, multi-step qualification intake, automated confirmation reminders and a centralised daily reporting dashboard.',
    category: 'digital-marketing',
    location: 'pune',
    techStack: ['Meta Ads', 'Google Ads', 'Lead Generation', 'Funnel Optimization', 'Conversion Tracking', 'WhatsApp CRM', 'Campaign Analytics'],
    thumbnail: '/images/portfolio/mind-spa-global-case-study.png',
    featured: true,
    isClientWork: true,
    isCaseStudy: true,
    status: 'completed',
    completedDate: '2025–2026',
    results: [
      { metric: 'Strategy Outcome', value: 'Qualified Leads' },
      { metric: 'Channels', value: 'Meta + Google Ads' },
      { metric: 'Primary Markets', value: 'Pune & Mumbai' },
      { metric: 'Delivery Period', value: '2025–2026' },
    ],
    caseStudyDetail: {
      overview: 'Mind Spa Global provides psychology-related consultations, Neuro Mind Gym programmes, mindset coaching, webinars, personal-development sessions and group training. Its advertising strategy focuses on attracting people interested in stress management, overthinking, emotional well-being, self-development and improving focus. The brand uses Dr. Dipti Panhalkar\'s professional presence as a central element of its marketing communications.',
      doctorPresence: 'Dr. Dipti Panhalkar — Professional Authority & Programme Director',
      businessObjectives: [
        'Generate more qualified leads rather than simply increasing raw enquiry volume.',
        'Build awareness, trust and clinical credibility for Mind Spa Global across Pune & Mumbai.',
        'Promote one-to-one consultations, webinars and specialized Neuro Mind Gym sessions.',
        'Improve lead follow-up, appointment confirmation and session attendance rates.',
        'Establish a measurable, sustainable and cost-effective customer acquisition process.'
      ],
      campaignAssessment: [
        {
          area: 'Lead Generation',
          observation: 'Enquiries were generated previously, but enquiry quality and buyer intent was questioned.',
          improvement: 'Improve audience targeting and implement multi-step lead qualification forms.'
        },
        {
          area: 'Audience Targeting',
          observation: 'Pune local activity and pan-India campaigns were mixed without language segmentation.',
          improvement: 'Strictly segment locations and languages (Marathi, Hindi, English) with dedicated funnels.'
        },
        {
          area: 'Creatives & Messaging',
          observation: 'Multiple images, videos and testimonials prepared without systematic split-testing.',
          improvement: 'Establish a structured creative testing matrix categorized by emotional hook and format.'
        },
        {
          area: 'Lead Management',
          observation: 'WhatsApp-only lead collection created severe operational and follow-up limitations.',
          improvement: 'Centralised lead tracking with instant notifications and CRM pipeline integration.'
        },
        {
          area: 'Conversions & Shows',
          observation: 'Some initial appointments and webinar bookings did not progress further to actual attendance.',
          improvement: 'Automated WhatsApp/SMS reminders, calendar bookings, and attendance confirmation workflows.'
        },
        {
          area: 'Campaign Monitoring',
          observation: 'Client requested frequent performance updates with inconsistent manual reporting.',
          improvement: 'Deploy a daily automated reporting dashboard tracking Meta, Google and pipeline metrics.'
        }
      ],
      creatives: [
        {
          code: 'Creative A',
          name: 'Marathi Seminar & Local Authority',
          description: 'Promotes a local-language, offline self-development programme. The speaker\'s photograph, event information and Marathi text support local recognition in Pune.',
          recommendedUse: 'Pune Marathi-speaking awareness and event registration campaigns.'
        },
        {
          code: 'Creative B',
          name: 'Hindi Anxiety & Overthinking Relief',
          description: 'Uses strong emotional imagery, attention-grabbing headlines and benefit messaging centered on calming an overstimulated brain.',
          recommendedUse: 'Broad educational creative with benefit-first framing that normalizes personal growth without pathologizing the audience.'
        },
        {
          code: 'Creative C',
          name: 'Neuro Mind Gym Interactive Webinar',
          description: 'Features the proprietary Neuro Mind Gym programme name, educational imagery, speaker Dr. Dipti Panhalkar and actionable mindset benefits.',
          recommendedUse: 'Webinar and group-session registration campaigns with direct slot booking.'
        }
      ],
      metaStrategy: [
        {
          campaign: 'Marathi Awareness',
          objective: 'Introduce Neuro Mind Gym & Dr. Dipti',
          audience: 'Pune (Marathi speakers, 25–55)',
          conversionGoal: 'High-relevance local engagement & video views'
        },
        {
          campaign: 'One-to-One Consultations',
          objective: 'Generate qualified 1:1 psychology consultations',
          audience: 'Pune & Mumbai (Professionals & Entrepreneurs)',
          conversionGoal: 'Pre-qualified consultation bookings'
        },
        {
          campaign: 'Webinar Registration',
          objective: 'Attract participants for live mindset sessions',
          audience: 'Language-specific geo segments',
          conversionGoal: 'Confirmed attendee registrations'
        },
        {
          campaign: 'Group-Session Promotion',
          objective: 'Build an engaged workshop community',
          audience: 'Pune & surrounding regions',
          conversionGoal: 'Confirmed offline/online workshop attendance'
        },
        {
          campaign: 'Educational Creative Testing',
          objective: 'Discover winning emotional hooks and copy',
          audience: 'Broad interest groups (Stress, Focus, Mindfulness)',
          conversionGoal: 'Cost-effective qualified inquiries'
        }
      ],
      googleStrategy: [
        {
          title: 'High-Intent Google Search Campaigns',
          description: 'Target people actively searching for psychology consultations, mindset coaching, stress relief, and Neuro Mind Gym in Pune and Mumbai.'
        },
        {
          title: 'Dedicated Localized Landing Pages',
          description: 'Geographically relevant search ads connecting to high-speed landing pages with friction-free booking flows and clear doctor credentials.'
        },
        {
          title: 'Strict Negative Keyword Management',
          description: 'Continuous curation to exclude low-intent searches (free counselling, jobs, academic degree definitions), focusing ad budget strictly on genuine consultation seekers.'
        }
      ],
      funnelStages: [
        {
          step: '01',
          title: 'Targeted Reach & Search Demand',
          desc: 'Meta Ads (video hooks & local awareness) + Google Search (capturing high-intent professional queries).'
        },
        {
          step: '02',
          title: 'Dedicated Capture & Attribution',
          desc: 'High-speed landing page with clean qualification form, UTM tracking and instant WhatsApp fallback.'
        },
        {
          step: '03',
          title: 'Lead Qualification & Fit Assessment',
          desc: 'Filter leads by specific concern (stress, focus, mindset), consultation preference and readiness.'
        },
        {
          step: '04',
          title: 'Appointment / Webinar Confirmation',
          desc: 'Instant booking slot selection with automated calendar invite and confirmation receipt.'
        },
        {
          step: '05',
          title: 'Follow-Up & Attendance Protocol',
          desc: 'Multi-touch automated WhatsApp & SMS reminders to minimize drop-offs and ensure high show rates.'
        },
        {
          step: '06',
          title: 'Conversion & Ongoing Programmes',
          desc: 'Post-consultation onboarding into Neuro Mind Gym, workshops, and ongoing coaching modules.'
        }
      ],
      kpis: [
        { kpi: 'Leads Generated', purpose: 'Measure enquiry volume across channels' },
        { kpi: 'Qualified Leads', purpose: 'Filter genuine interest & suitability for programmes' },
        { kpi: 'Contact Rate', purpose: 'Measure speed and efficiency of assistant outreach' },
        { kpi: 'Appointment Booking Rate', purpose: 'Evaluate conversion from enquiry to calendar slot' },
        { kpi: 'Webinar Registration Rate', purpose: 'Evaluate campaign appeal and audience resonance' },
        { kpi: 'Attendance Rate', purpose: 'Measure actual attendance for webinars and sessions' },
        { kpi: 'Lead-to-Customer Conversion', purpose: 'Track commercial effectiveness from lead to paying client' },
        { kpi: 'Creative Performance', purpose: 'Identify top-performing hooks, formats and angles' },
        { kpi: 'Location & Language Split', purpose: 'Identify most profitable customer segments across Pune & Mumbai' }
      ],
      roadmap: [
        {
          week: 'Week 1',
          title: 'Audit & Infrastructure Setup',
          description: 'Review previous ad accounts, inspect landing pages, audit tracking pixels, configure central lead sheet and establish qualification rubrics.'
        },
        {
          week: 'Week 2',
          title: 'Meta Campaign Testing & Creative Matrix',
          description: 'Launch language-segmented campaigns in Marathi, Hindi and English; deploy Dr. Dipti Panhalkar authority creatives and test lead forms.'
        },
        {
          week: 'Week 3',
          title: 'Google Search Pilot & Webinar Funnel',
          description: 'Activate high-intent Google Search campaigns for Pune and Mumbai; launch webinar acquisition funnel with automated reminder sequences.'
        },
        {
          week: 'Week 4',
          title: 'Conversion Improvement & Scaling',
          description: 'Analyse qualified lead costs, appointment attendance and webinar show-up rates. Optimize ad spend into top-performing audiences and creatives.'
        }
      ],
      conclusion: 'Mind Spa Global demonstrates an important challenge commonly faced by healthcare and wellness businesses: advertising can generate raw enquiries without producing meaningful customer engagement.\n\nThe implemented framework integrates targeted multi-channel advertising, strong clinical branding, structured lead qualification, disciplined reminder follow-up and conversion tracking into one coordinated system.\n\nThe outcome is a sustainable lead-generation engine prioritizing qualified enquiries, confirmed appointment attendance and long-term customer relationships.',
      statusNote: 'Diagnostic and strategic campaign framework designed for 2025–2026 execution.'
    }
  },
  {
    id: 'bunkar-01',
    slug: 'house-of-bunkar-digital-marketing-case-study',
    title: 'House of Bunkar — Ethnic Fashion & Digital Marketing',
    client: 'House of Bunkar',
    clientLogo: '/images/portfolio/house-of-bunkar-logo.png',
    industry: 'Ethnic Fashion & Retail',
    shortDesc: 'Complete social media management, creative design, video editing, and high-reach Meta Ads campaigns for Banarasi sarees and ethnic wear in Pune.',
    fullDesc: 'House of Bunkar is a Pune-based home boutique offering an exclusive collection of Banarasi sarees, traditional suits, dupattas, and premium ethnic wear. The brand curates its collections from the weavers of Banaras, bringing traditional craftsmanship and elegant designs to customers for festive celebrations, weddings, and special occasions.\n\nGrowthik Media partnered with House of Bunkar to manage its digital presence, strengthen brand awareness, showcase its collections through engaging content, and reach potential customers through targeted advertising.',
    challenge: 'House of Bunkar needed to establish a consistent, premium online brand presence on Instagram and Facebook, drive local awareness for its boutique in Bhoslenagar, Pune, and generate high-visibility footfall and inquiries for festive exhibitions like PULA Bazaar with cost-efficient media spend.',
    solution: 'Growthik Media implemented an end-to-end digital marketing approach: complete social media management with monthly content calendars, product-led creative designs highlighting Banaras craftsmanship, high-engagement Instagram Reels production, and targeted Meta Ads campaigns optimized for local Pune shoppers.',
    category: 'digital-marketing',
    location: 'pune',
    techStack: ['Social Media Management', 'Creative Design', 'Reels Production', 'Meta Ads', 'Video Editing', 'Local Pune Marketing'],
    thumbnail: '/images/portfolio/house-of-bunkar-case-study.png',
    featured: true,
    isClientWork: true,
    isCaseStudy: true,
    status: 'completed',
    completedDate: '2025–2026',
    liveUrl: 'https://www.instagram.com/houseofbunkar/',
    results: [
      { metric: 'PULA Bazaar Reach', value: '124,600' },
      { metric: 'Total Impressions', value: '161,100' },
      { metric: 'Cost Per Mille (CPM)', value: '₹3.13' },
      { metric: 'Video Views (3s)', value: '9,226' },
    ],
    caseStudyDetail: {
      overview: 'House of Bunkar is a Pune-based home boutique offering an exclusive collection of Banarasi sarees, traditional suits, dupattas, and premium ethnic wear. The brand curates its collections directly from the weavers of Banaras, bringing traditional craftsmanship and elegant designs to customers for festive celebrations, weddings, and special occasions.',
      pillars: [
        {
          number: '01',
          title: 'Social Media Management',
          points: [
            'Complete Instagram and Facebook page management.',
            'Social media content planning and monthly content calendars.',
            'Post scheduling, captions, hashtags, and content optimization.',
            'Brand consistency across all social media platforms.',
            'Profile optimization and audience engagement support.',
            'Promotion of new collections, festive offers, exhibitions, and product launches.'
          ]
        },
        {
          number: '02',
          title: 'Creative Design & Content Creation',
          points: [
            'Professional product creatives for sarees, suits, and ethnic collections.',
            'Promotional graphics and festive campaign creatives.',
            'Instagram posts, carousel designs, and promotional banners.',
            'Product-focused designs featuring colours, fabric details, pricing, and key selling points.',
            'Consistent visual branding to showcase the boutique\'s premium positioning.'
          ]
        },
        {
          number: '03',
          title: 'Video Editing & Reels Management',
          points: [
            'Instagram Reels editing and short-form video production.',
            'Product showcase videos and collection highlights.',
            'Promotional videos for exhibitions and festive campaigns.',
            'Video editing with suitable transitions, typography, music, and visual storytelling.',
            'Reels optimized for social media engagement and brand awareness.'
          ]
        },
        {
          number: '04',
          title: 'Meta Ads Management',
          points: [
            'Facebook and Instagram advertising campaign setup and management.',
            'Campaign planning for local awareness, reach, traffic, and engagement.',
            'Audience targeting based on relevant locations, demographics, and interests in Pune.',
            'Ad creative selection, copywriting, and campaign execution.',
            'Budget monitoring and performance optimization.',
            'Placement and audience performance analysis.'
          ]
        },
        {
          number: '05',
          title: 'Brand Awareness & Local Marketing',
          points: [
            'Targeted campaigns to increase visibility among relevant audiences in Pune.',
            'Promotional campaigns for exhibitions, pop-ups, and festive shopping.',
            'Product-led content to communicate fabric quality and traditional craftsmanship.',
            'Coordination of organic social media content with paid advertising campaigns.'
          ]
        },
        {
          number: '06',
          title: 'Ongoing Digital Marketing Support',
          points: [
            'Connected daily activities to maintain a consistent digital presence.',
            'Content planning, creative production, and paid campaign management.',
            'Performance monitoring and strategic growth recommendations.'
          ]
        }
      ],
      campaignHighlight: {
        title: 'Campaign Highlight: PULA Bazaar Awareness Campaign',
        subtitle: 'Meta Ads awareness and footfall campaign for the PULA Bazaar exhibition in Pune.',
        stats: [
          { label: 'Ad Spend', value: '₹600' },
          { label: 'Reach', value: '124,600' },
          { label: 'Impressions', value: '161,100' },
          { label: 'Link Clicks', value: '166' },
          { label: 'Cost Per Link Click', value: '₹3.06' },
          { label: 'CPM', value: '₹3.13' },
          { label: 'Post Engagements', value: '9,500' },
          { label: '3-Sec Video Views', value: '9,226' },
          { label: 'ThruPlays', value: '1,300' }
        ],
        notes: 'These results demonstrate the campaign\'s ability to generate broad visibility and engagement at a remarkably low media cost (₹3.13 CPM), reaching over 124,000 targeted Pune shoppers.'
      },
      conclusion: 'Through an integrated approach to content creation, social media management, video editing, and Meta advertising, Growthik Media helps House of Bunkar maintain a consistent online presence and promote its ethnic fashion collections to relevant audiences.\n\nOur focus is on connecting compelling product presentation with strategic content distribution and measurable advertising performance.',
      statusNote: 'Active Digital Marketing Partnership • Bhoslenagar, Pune, Maharashtra'
    }
  },
  {
    id: 'pcmc-01',
    slug: 'pcmc-lead-generation-case-study-pune',
    title: 'PCMC Lead Generation — Retirement Community Initiative',
    client: 'Confidential',
    industry: 'Retirement Living & Senior Community',
    shortDesc: 'Generating 40 leads for a retirement community initiative in Pimpri-Chinchwad, Pune through targeted Meta Ads reaching retired professionals aged 50+.',
    fullDesc: 'The objective was to generate relevant enquiries from retired professionals and individuals aged 50 and above across Pimpri-Chinchwad and surrounding areas of Pune.\n\nThe campaign used Meta Ads to connect with the intended audience through a lead generation form, making it easier for interested individuals to share their details and express their interest.\n\nThe geographical targeting included PCMC areas such as Pimpri, Nigdi, Akurdi, Sangvi, Wakad, Tathawade, Moshi and Charholi.',
    challenge: 'Reach a specific audience of retired professionals aged 50+ in PCMC with a relevant retirement community proposition, generate quality enquiries rather than generic clicks, and build a usable database for follow-up engagement.',
    solution: 'Growthik Media executed a focused Meta Ads lead generation campaign with precise PCMC geo-targeting, age-specific audience filters, and a structured lead form capturing retirement status, age group, professional background and residential area.',
    category: 'digital-marketing',
    location: 'pune',
    techStack: ['Meta Ads', 'Lead Generation', 'Local Targeting', 'Audience Segmentation', 'Lead Forms', 'CRM Integration'],
    thumbnail: '/images/portfolio/pcmc-lead-generation-case-study.png',
    featured: true,
    isClientWork: true,
    isCaseStudy: true,
    status: 'completed',
    completedDate: 'July 2026',
    results: [
      { metric: 'Total Leads', value: '40' },
      { metric: 'Impressions', value: '6,285' },
      { metric: 'Unique Reach', value: '3,321' },
      { metric: 'Campaign Period', value: '7 days' },
    ],
    caseStudyDetail: {
      overview: 'This lead generation campaign targeted retired professionals and individuals aged 50 and above across the Pimpri-Chinchwad Municipal Corporation (PCMC) area of Pune. The campaign supported a retirement community initiative by generating relevant enquiries through Meta Ads with a streamlined lead form.',
      businessObjectives: [
        'Generate enquiries from the retirement-age audience in PCMC.',
        'Reach retired professionals from government and private-sector backgrounds.',
        'Increase awareness among the target audience in selected localities.',
        'Build a database of enquiries to support future communication and follow-ups.'
      ],
      pillars: [
        {
          number: '01',
          title: 'Local Audience Targeting',
          points: [
            'Campaign focused on the PCMC region including Pimpri, Nigdi, Akurdi, Sangvi, Wakad, Tathawade, Moshi and Charholi.',
            'Geo-targeting ensured ad delivery to audiences relevant to the initiative\'s geographical requirements.',
            'Age filters set to 50+ to reach the intended retirement-age demographic.'
          ]
        },
        {
          number: '02',
          title: 'Audience-Specific Lead Generation',
          points: [
            'Lead form collected retirement status, age group, professional background and residential area.',
            'Information structured to help organise enquiries for further review and follow-up.',
            'Qualification criteria built into the form to improve lead relevance.'
          ]
        },
        {
          number: '03',
          title: 'Focused Campaign Execution',
          points: [
            'Meta Ads used to generate awareness and encourage prospective participants to submit details.',
            'Direct lead generation flow minimised friction between ad click and form submission.',
            'Campaign ran for 7 days (4–11 July 2026) with focused media spend.'
          ]
        },
        {
          number: '04',
          title: 'Lead Data Collection & Nurturing',
          points: [
            'Campaign created a base of 40 enquiries for review and follow-up by the team.',
            'Data captured provides foundation for continued lead nurturing and audience engagement.',
            'Results inform future targeting refinements and campaign optimisations.'
          ]
        }
      ],
      campaignHighlight: {
        title: 'Campaign Performance: PCMC Retirement Community Lead Generation',
        subtitle: 'Meta Ads lead generation campaign targeting 50+ retired professionals in Pimpri-Chinchwad, Pune.',
        stats: [
          { label: 'Total Leads', value: '40' },
          { label: 'Impressions', value: '6,285' },
          { label: 'Reach', value: '3,321' },
          { label: 'Campaign Period', value: '4–11 July 2026' }
        ],
        notes: 'These results demonstrate effective lead generation from a precisely targeted PCMC audience within a 7-day campaign window.'
      },
      conclusion: 'This PCMC lead generation campaign demonstrated how targeted Meta advertising can support audience discovery and enquiry generation for retirement-focused initiatives in Pune.\n\nBy combining location-based targeting, audience-specific messaging and a streamlined lead form, the campaign generated 40 leads and established a starting point for future outreach and engagement.\n\nThe results provide a foundation for refining audience targeting, improving lead follow-up processes and planning subsequent digital marketing campaigns.',
      statusNote: 'Campaign completed July 2026 • Pimpri-Chinchwad (PCMC), Pune'
    }
  },
]

// ---------------------------------------------------------
// HELPER FUNCTIONS
// ---------------------------------------------------------

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
  const sameCategory = portfolioData.filter(p => p.slug !== slug && p.category === project.category)
  if (sameCategory.length >= count) {
    return sameCategory.slice(0, count)
  }
  const otherProjects = portfolioData.filter(p => p.slug !== slug && p.category !== project.category)
  return [...sameCategory, ...otherProjects].slice(0, count)
}

export const portfolioStats = {
  total: portfolioData.length,
  clientProjects: portfolioData.filter(p => p.isClientWork).length,
  industries: [...new Set(portfolioData.map(p => p.industry))].length,
  dubaiProjects: portfolioData.filter(p => p.location === 'dubai').length,
  puneProjects: portfolioData.filter(p => p.location === 'pune').length,
}
