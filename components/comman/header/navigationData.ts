import {
  FiChevronDown,
  FiGlobe,
  FiCode,
  FiPenTool,
  FiStar,
  FiHome,
  FiInfo,
  FiLayers,
  FiBookOpen,
  FiMail,
  FiTrendingUp,
  FiShoppingCart,
  FiAward,
} from "react-icons/fi";

// Navigation data structure for Digital Marketing Agency
export const navigationData = {
  desktop: {
    regularLinks: [
      { href: "/", label: "Home", icon: FiHome },
      { href: "/about", label: "About", icon: FiInfo },
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
              {
                href: "/services/digital-marketing",
                label: "Digital Marketing",
                featured: true,
              },
              {
                href: "/services/seo",
                label: "Search Engine Optimization (SEO)",
              },
              {
                href: "/services/social-media-marketing",
                label: "Social Media Marketing",
              },
              {
                href: "/services/social-media-promotions",
                label: "Social Media Promotions",
              },
              {
                href: "/services/linkedin-management",
                label: "LinkedIn Profile Management",
              },
              {
                href: "/services/content-marketing",
                label: "Content Marketing",
              },
              {
                href: "/services/performance-marketing",
                label: "Performance Marketing",
              },
              {
                href: "/services/ppc-google-ads",
                label: "Google Ads / PPC",
                featured: true,
              },
              { href: "/services/meta-ads", label: "Meta / Facebook Ads" },
              {
                href: "/services/media-planning-buying",
                label: "Media Planning and Buying",
              },
              { href: "/services/email-marketing", label: "Email Marketing" },
              {
                href: "/services/whatsapp-marketing",
                label: "WhatsApp Campaign",
              },
              { href: "/services/sms-marketing", label: "SMS Marketing" },
              { href: "/services/dooh", label: "DOOH (Digital Out of Home)" },
              { href: "/services/lead-generation", label: "Lead Generation" },
              {
                href: "/services/political-digital-marketing",
                label: "Political Digital Marketing",
              },
              { href: "/services/youtube-seo", label: "YouTube SEO" },
              {
                href: "/services/influencer-management",
                label: "Influencer Management",
              },
            ],
          },

          // WEBSITE & APP DEVELOPMENT
          {
            category: "Website & App Development",
            icon: FiCode,
            description: "Create stunning, high-performance digital solutions",
            items: [
              {
                href: "/services/website-development",
                label: "Website Development",
                featured: true,
              },
              { href: "/services/website-design", label: "Website Design" },
              {
                href: "/services/wordpress-development",
                label: "WordPress Development",
              },
              {
                href: "/services/ecommerce-development",
                label: "E-Commerce Development",
              },
              {
                href: "/services/shopify-development",
                label: "Shopify Development",
              },
              {
                href: "/services/web-application",
                label: "Web Application Development",
              },
              {
                href: "/services/mobile-app-development",
                label: "Mobile Application Development",
              },
              { href: "/services/php-development", label: "PHP Development" },
              { href: "/services/cms-development", label: "CMS Development" },
              {
                href: "/services/website-maintenance",
                label: "Website Maintenance",
              },
              {
                href: "/services/application-maintenance",
                label: "Application Maintenance",
              },
            ],
          },

          // BRANDING & CREATIVE SERVICES
          {
            category: "Branding & Creative",
            icon: FiPenTool,
            description: "Build memorable brand identities",
            items: [
              {
                href: "/services/branding-consulting",
                label: "Branding Consulting",
                featured: true,
              },
              {
                href: "/services/brand-strategy",
                label: "Brand Strategy & Consulting",
              },
              {
                href: "/services/brand-marketing-communications",
                label: "Brand Marketing Communications",
              },
              { href: "/services/brand-name", label: "Brand Name Creation" },
              { href: "/services/logo-design", label: "Logo Design" },
              {
                href: "/services/business-card-design",
                label: "Business Card Design",
              },
              {
                href: "/services/letterhead-design",
                label: "Letterhead Design",
              },
              {
                href: "/services/brochure-design",
                label: "Brochure Designing",
              },
              {
                href: "/services/brand-identity",
                label: "Brand Identity Development",
              },
              { href: "/services/branding-design", label: "Branding & Design" },
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
            icon: FiLayers,
            description: "See our successful projects",
            items: [
              { href: "/portfolio", label: "All Portfolio", featured: true },
              { href: "/portfolio/websites", label: "Website Projects" },
              { href: "/portfolio/branding", label: "Branding Work" },
              {
                href: "/portfolio/social-media",
                label: "Social Media Creatives",
              },
              { href: "/portfolio/case-studies", label: "Case Studies" },
              { href: "/portfolio/ads-performance", label: "Ads Performance" },
              {
                href: "/portfolio/digital-campaigns",
                label: "Digital Campaigns",
              },
            ],
          },
          {
            category: "Success Stories",
            icon: FiAward,
            description: "Client transformations",
            items: [
              {
                href: "/portfolio/client-stories",
                label: "Client Success Stories",
              },
              { href: "/portfolio/testimonials", label: "Client Testimonials" },
              { href: "/portfolio/awards", label: "Awards & Recognition" },
              { href: "/portfolio/media-coverage", label: "Media Coverage" },
            ],
          },
        ],
      },
    ],

    // STANDALONE LINKS (after mega menus)
    standaloneLinks: [
      { href: "/blog", label: "Blog", icon: FiBookOpen },
      { href: "/contact", label: "Contact", icon: FiMail },
    ],
  },

  // MOBILE NAVIGATION ---------------------------------------------------------
  mobile: {
    mainLinks: [
      { href: "/", label: "Home", icon: FiHome },
      { href: "/about", label: "About", icon: FiInfo },
    ],

    expandableMenus: [
      // DIGITAL MARKETING
      {
        id: "mobile-digital-marketing",
        label: "Digital Marketing",
        icon: FiGlobe,
        items: [
          {
            href: "/services/digital-marketing",
            label: "Digital Marketing Overview",
          },
          { href: "/services/seo", label: "SEO Services" },
          {
            href: "/services/social-media-marketing",
            label: "Social Media Marketing",
          },
          {
            href: "/services/social-media-promotions",
            label: "Social Media Promotions",
          },
          {
            href: "/services/linkedin-management",
            label: "LinkedIn Management",
          },
          { href: "/services/content-marketing", label: "Content Marketing" },
          {
            href: "/services/performance-marketing",
            label: "Performance Marketing",
          },
          { href: "/services/ppc-google-ads", label: "Google Ads / PPC" },
          { href: "/services/meta-ads", label: "Meta / Facebook Ads" },
          {
            href: "/services/media-planning-buying",
            label: "Media Planning & Buying",
          },
          { href: "/services/email-marketing", label: "Email Marketing" },
          { href: "/services/whatsapp-marketing", label: "WhatsApp Campaign" },
          { href: "/services/sms-marketing", label: "SMS Marketing" },
          { href: "/services/dooh", label: "DOOH" },
          { href: "/services/lead-generation", label: "Lead Generation" },
          {
            href: "/services/political-digital-marketing",
            label: "Political Digital Marketing",
          },
          { href: "/services/youtube-seo", label: "YouTube SEO" },
          {
            href: "/services/influencer-management",
            label: "Influencer Management",
          },
        ],
      },

      // WEBSITE & APP DEVELOPMENT
      {
        id: "mobile-development",
        label: "Website & App Development",
        icon: FiCode,
        items: [
          {
            href: "/services/website-development",
            label: "Website Development",
          },
          { href: "/services/website-design", label: "Website Design" },
          {
            href: "/services/wordpress-development",
            label: "WordPress Development",
          },
          {
            href: "/services/ecommerce-development",
            label: "E-Commerce Development",
          },
          {
            href: "/services/shopify-development",
            label: "Shopify Development",
          },
          { href: "/services/web-application", label: "Web Application" },
          {
            href: "/services/mobile-app-development",
            label: "Mobile App Development",
          },
          { href: "/services/php-development", label: "PHP Development" },
          { href: "/services/cms-development", label: "CMS Development" },
          {
            href: "/services/website-maintenance",
            label: "Website Maintenance",
          },
          {
            href: "/services/application-maintenance",
            label: "Application Maintenance",
          },
        ],
      },

      // BRANDING & CREATIVE
      {
        id: "mobile-branding",
        label: "Branding & Creative",
        icon: FiPenTool,
        items: [
          {
            href: "/services/branding-consulting",
            label: "Branding Consulting",
          },
          { href: "/services/brand-strategy", label: "Brand Strategy" },
          {
            href: "/services/brand-marketing-communications",
            label: "Brand Marketing",
          },
          { href: "/services/brand-name", label: "Brand Name Creation" },
          { href: "/services/logo-design", label: "Logo Design" },
          {
            href: "/services/business-card-design",
            label: "Business Card Design",
          },
          { href: "/services/letterhead-design", label: "Letterhead Design" },
          { href: "/services/brochure-design", label: "Brochure Design" },
          { href: "/services/brand-identity", label: "Brand Identity" },
        ],
      },

      // PORTFOLIO
      {
        id: "mobile-portfolio",
        label: "Portfolio",
        icon: FiLayers,
        items: [
          { href: "/portfolio", label: "All Portfolio" },
          { href: "/portfolio/websites", label: "Website Projects" },
          { href: "/portfolio/branding", label: "Branding Work" },
          { href: "/portfolio/social-media", label: "Social Media" },
          { href: "/portfolio/case-studies", label: "Case Studies" },
          { href: "/portfolio/client-stories", label: "Success Stories" },
          { href: "/portfolio/testimonials", label: "Testimonials" },
          { href: "/portfolio/awards", label: "Awards" },
        ],
      },
    ],

    // STANDALONE MOBILE LINKS
    standaloneLinks: [
      { href: "/blog", label: "Blog", icon: FiBookOpen },
      { href: "/contact", label: "Contact", icon: FiMail },
    ],
  },
};

// Helper function to get all service links (useful for sitemaps, etc.)
export const getAllServiceLinks = () => {
  const services: { href: string; label: string; featured?: boolean }[] = [];
  navigationData.desktop.megaMenus.forEach((menu) => {
    if (menu.id === "services" || menu.id === "specialized-services") {
      menu.items.forEach((category) => {
        category.items.forEach((item) => {
          services.push(item);
        });
      });
    }
  });
  return services;
};

// Helper function to get featured services
export const getFeaturedServices = () => {
  return getAllServiceLinks().filter((service) => service.featured);
};

export default navigationData;
