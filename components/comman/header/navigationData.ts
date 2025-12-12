import { 
  FiChevronDown, 
  FiGlobe, 
  FiCode, 
  FiPenTool, 
  FiStar, 
  FiBookOpen 
} from "react-icons/fi";

// Navigation data
export const navigationData = {
  desktop: {
    regularLinks: [
      { href: "/", label: "Home", icon: FiStar },
      { href: "/about", label: "About", icon: FiStar },
    ],

    megaMenus: [
      // SERVICES MEGA MENU -----------------------------------------------------
      {
        id: "services",
        label: "Services",
        icon: FiChevronDown,
        columns: 3,
        items: [
          // DIGITAL MARKETING
          {
            category: "Digital Marketing",
            icon: FiGlobe,
            description: "Drive traffic, generate leads & boost conversions",
            items: [
              { href: "/services/digital-marketing", label: "Digital Marketing", featured: true },
              { href: "/services/seo", label: "Search Engine Optimization (SEO)" },
              { href: "/services/social-media-marketing", label: "Social Media Marketing" },
              { href: "/services/linkedin-management", label: "LinkedIn Profile Management" },
              { href: "/services/content-marketing", label: "Content Marketing" },
              { href: "/services/ppc-google-ads", label: "Google Ads / PPC", featured: true },
              { href: "/services/meta-ads", label: "Meta / Facebook Ads" },
              { href: "/services/email-marketing", label: "Email Marketing" },
              { href: "/services/sms-marketing", label: "SMS Marketing" },
              { href: "/services/lead-generation", label: "Lead Generation" },
              { href: "/services/political-digital-marketing", label: "Political Digital Marketing" },
            ],
          },

          // WEBSITE DEVELOPMENT
          {
            category: "Website Development",
            icon: FiCode,
            description: "Create stunning, high-performance websites",
            items: [
              { href: "/services/website-development", label: "Custom Website Development", featured: true },
              { href: "/services/wordpress-development", label: "WordPress Development" },
              { href: "/services/ecommerce-development", label: "E-Commerce Development" },
              { href: "/services/shopify-development", label: "Shopify Development" },
              { href: "/services/website-maintenance", label: "Website Maintenance" },
              { href: "/services/application-maintenance", label: "Application Maintenance" },
              { href: "/services/php-development", label: "PHP Development" },
              { href: "/services/mobile-app-development", label: "Mobile App Development" },
              { href: "/services/cms-development", label: "CMS Development" },
            ],
          },

          // BRANDING
          {
            category: "Branding & Creative",
            icon: FiPenTool,
            description: "Build memorable brand identities",
            items: [
              { href: "/services/brand-name", label: "Brand Name Creation" },
              { href: "/services/logo-design", label: "Logo Design", featured: true },
              { href: "/services/business-card-design", label: "Business Card Design" },
              { href: "/services/letterhead-design", label: "Letterhead Design" },
              { href: "/services/brochure-design", label: "Brochure Designing" },
              { href: "/services/branding", label: "Brand Identity Development" },
            ],
          },
        ],
      },

      // PORTFOLIO -----------------------------------------------------
      {
        id: "portfolio",
        label: "Portfolio",
        icon: FiChevronDown,
        columns: 2,
        items: [
          {
            category: "Our Work",
            description: "See our successful projects",
            items: [
              { href: "/portfolio/websites", label: "Website Projects", featured: true },
              { href: "/portfolio/branding", label: "Branding Work" },
              { href: "/portfolio/social-media", label: "Social Media Creatives" },
              { href: "/portfolio/case-studies", label: "Case Studies" },
              { href: "/portfolio/ads-performance", label: "Ads Performance" },
            ],
          },
          {
            category: "Success Stories",
            description: "Client transformations",
            items: [
              { href: "/portfolio/success-stories", label: "Client Success Stories" },
              { href: "/portfolio/testimonials", label: "Client Testimonials" },
              { href: "/portfolio/awards", label: "Awards & Recognition" },
            ],
          },
        ],
      },

      // RESOURCES -----------------------------------------------------
      {
        id: "resources",
        label: "Resources",
        icon: FiChevronDown,
        columns: 1,
        items: [
          { href: "/blog", label: "Blog", icon: FiBookOpen },
          { href: "/resources/guides", label: "Marketing Guides" },
          { href: "/resources/tools", label: "Free Tools" },
          { href: "/resources/checklists", label: "Checklists" },
          { href: "/resources/faq", label: "FAQs" },
        ],
      },
    ],
  },

  // MOBILE NAVIGATION ---------------------------------------------------------
  mobile: {
    mainLinks: [
      { href: "/", label: "Home", icon: FiStar },
      { href: "/about", label: "About", icon: FiStar },
    ],

    expandableMenus: [
      {
        id: "mobile-services",
        label: "Services",
        icon: FiChevronDown,
        categories: [
          {
            category: "Digital Marketing",
            icon: FiGlobe,
            items: [
              { href: "/services/digital-marketing", label: "Digital Marketing" },
              { href: "/services/seo", label: "SEO Services" },
              { href: "/services/social-media-marketing", label: "Social Media Marketing" },
              { href: "/services/linkedin-management", label: "LinkedIn Profile Management" },
              { href: "/services/content-marketing", label: "Content Marketing" },
              { href: "/services/ppc-google-ads", label: "Google Ads / PPC" },
              { href: "/services/meta-ads", label: "Meta / Facebook Ads" },
              { href: "/services/email-marketing", label: "Email Marketing" },
              { href: "/services/sms-marketing", label: "SMS Marketing" },
              { href: "/services/lead-generation", label: "Lead Generation" },
              { href: "/services/political-digital-marketing", label: "Political Digital Marketing" },
            ],
          },

          {
            category: "Website Development",
            icon: FiCode,
            items: [
              { href: "/services/website-development", label: "Custom Website Development" },
              { href: "/services/wordpress-development", label: "WordPress Development" },
              { href: "/services/ecommerce-development", label: "E-Commerce Development" },
              { href: "/services/shopify-development", label: "Shopify Development" },
              { href: "/services/website-maintenance", label: "Website Maintenance" },
              { href: "/services/application-maintenance", label: "Application Maintenance" },
              { href: "/services/php-development", label: "PHP Development" },
              { href: "/services/mobile-app-development", label: "Mobile App Development" },
              { href: "/services/cms-development", label: "CMS Development" },
            ],
          },

          {
            category: "Branding & Creative",
            icon: FiPenTool,
            items: [
              { href: "/services/brand-name", label: "Brand Name Creation" },
              { href: "/services/logo-design", label: "Logo Design" },
              { href: "/services/business-card-design", label: "Business Card Design" },
              { href: "/services/letterhead-design", label: "Letterhead Design" },
              { href: "/services/brochure-design", label: "Brochure Designing" },
              { href: "/services/branding", label: "Brand Identity Development" },
            ],
          },
        ],
      },

      {
        id: "mobile-portfolio",
        label: "Portfolio",
        icon: FiChevronDown,
        items: [
          { href: "/portfolio/websites", label: "Website Projects" },
          { href: "/portfolio/branding", label: "Branding Work" },
          { href: "/portfolio/social-media", label: "Social Media Creatives" },
          { href: "/portfolio/case-studies", label: "Case Studies" },
          { href: "/portfolio/ads-performance", label: "Ads Performance" },
        ],
      },

      {
        id: "mobile-resources",
        label: "Resources",
        icon: FiChevronDown,
        items: [
          { href: "/blog", label: "Blog" },
          { href: "/resources/guides", label: "Marketing Guides" },
          { href: "/resources/tools", label: "Free Tools" },
          { href: "/resources/checklists", label: "Checklists" },
          { href: "/resources/faq", label: "FAQs" },
        ],
      },
    ],
  },
};