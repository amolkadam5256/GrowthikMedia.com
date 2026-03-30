import {
  FiGlobe,
  FiCode,
  FiPenTool,
  FiHome,
  FiInfo,
  FiLayers,
  FiBookOpen,
  FiMail,
  FiAward,
} from "react-icons/fi";

import { NavItemData } from "./DesktopNavigation";

// Navigation data structure for Digital Marketing Agency
export const navigationData: {
  desktop: {
    regularLinks: NavItemData[];
    megaMenus: NavItemData[];
    standaloneLinks: NavItemData[];
  };
  mobile: {
    mainLinks: NavItemData[];
    expandableMenus: NavItemData[];
    standaloneLinks: NavItemData[];
  };
} = {
  desktop: {
    regularLinks: [
      { href: "/", label: "Home", icon: FiHome },
      { href: "/about", label: "About", icon: FiInfo },
    ],

    megaMenus: [
      // SERVICES MEGA MENU -----------------------------------------------------
      {
        id: "services",
        label: "Our Services",
        icon: FiLayers,
        href: "/services",
        columns: "special", // Highlighting that this is a custom layout
        items: [
          // TECHNOLOGY SERVICES
          {
            label: "Technology Services",
            icon: FiCode,
            description: "Website & Application Development",
            items: [
              {
                href: "/services/website-design-company-pune",
                label: "Website Design",
              },
              {
                href: "/services/website-development/",
                label: "Website Development",
                featured: true,
              },
              {
                href: "/services/wordpress-development/",
                label: "WordPress Development",
              },
              {
                href: "/services/ecommerce-development/",
                label: "eCommerce Development",
              },
              {
                href: "/services/mobile-app-development/",
                label: "Mobile App Development",
              },
              {
                href: "/services/software-development/",
                label: "Software Development",
              },
              {
                href: "/services/website-design/",
                label: "Website Design",
              },
              {
                href: "/services/website-maintenance",
                label: "Website Maintenance",
              },
              {
                href: "/services/application-maintenance",
                label: "Application Maintenance",
              },
              {
                href: "/services/website-design-company-pune//",
                label: "Web Design in Aundh",
              },
              {
                href: "/services/website-design-company-pune//",
                label: "Web Design in Baner",
              },
              {
                href: "/services/website-design-company-pune//",
                label: "Web Design in Hadapsar",
              },
              {
                href: "/services/website-design-company-pune//",
                label: "Web Design in Kothrud",
              },
              {
                href: "/services/website-design-company-pune//",
                label: "Web Design in PCMC",
              },
              {
                href: "/services/website-design-company-pune//",
                label: "Web Design in Viman Nagar",
              },
              {
                href: "/services/website-design-company-pune//",
                label: "Web Design in Wakad",
              },
            ],
          },
          // DIGITAL MARKETING
          {
            label: "Digital Marketing",
            icon: FiGlobe,
            description: "Performance & Growth Marketing",
            items: [
              {
                href: "/services/seo/",
                label: "SEO Company Pune",
                featured: true,
              },
              {
                href: "/services/ppc-google-ads/",
                label: "Google Ads Agency",
                featured: true,
              },
              {
                href: "/services/local-seo/",
                label: "Local SEO Services",
              },
              {
                href: "/services/social-media-marketing/",
                label: "Social Media Marketing",
              },
              {
                href: "/services/content-marketing/",
                label: "Content Marketing",
              },
              { href: "/services/lead-generation", label: "Lead Generation" },
              { href: "/services/email-marketing", label: "Email Marketing" },
              {
                href: "/services/whatsapp-marketing",
                label: "WhatsApp Campaigns",
              },
              { href: "/services/sms-marketing", label: "SMS Marketing" },
              {
                href: "/services/influencer-management",
                label: "Influencer Management",
              },
              { href: "/services/youtube-seo", label: "YouTube SEO" },
              {
                href: "/services/media-planning-buying",
                label: "Media Planning & Buying",
              },
              {
                href: "/services/political-digital-marketing",
                label: "Political Digital Marketing",
              },
              {
                href: "/services/seo//",
                label: "SEO Services Hinjewadi",
              },
              {
                href: "/services/ppc-google-ads//",
                label: "Google Ads Pune",
              },
              {
                href: "/services/website-development//",
                label: "Website Development Pune",
              },
            ],
          },
          // BRANDING & CREATIVE
          {
            label: "Branding & Creative",
            icon: FiPenTool,
            description: "Brand Identity & Strategic Design",
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
                href: "/services/brand-identity",
                label: "Brand Identity Development",
              },
              { href: "/services/branding-design", label: "Branding & Design" },
              {
                href: "/services/brochure-design",
                label: "Brochure Designing",
              },
              {
                href: "/services/business-card-design",
                label: "Business Card Design",
              },
              {
                href: "/services/letterhead-design",
                label: "Letterhead Design",
              },
            ],
          },
        ],
      },

      // PORTFOLIO -----------------------------------------------------
      {
        id: "portfolio",
        label: "Portfolio",
        icon: FiAward,
        href: "/portfolio",
        direction: "left", // Demonstrate left-opening submenu
        columns: "special",
        items: [
          {
            label: "Our Work",
            icon: FiLayers,
            description: "See our successful projects",
            items: [
              { href: "/portfolio", label: "All Portfolio", featured: true },
              { href: "/portfolio/website-projects", label: "Website Projects" },
              { href: "/portfolio/branding-work", label: "Branding Work" },
              {
                href: "/portfolio/social-media-creatives",
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
            label: "Success Stories",
            icon: FiAward,
            description: "Client transformations",
            items: [
              {
                href: "/success-stories",
                label: "Client Success Stories",
              },
              { href: "/success-stories/testimonials", label: "Client Testimonials" },
              { href: "/success-stories/awards", label: "Awards & Recognition" },
              { href: "/success-stories/media", label: "Media Coverage" },
            ],
          },
        ],
      },
    ],

    // STANDALONE LINKS (after mega menus)
    standaloneLinks: [
      { href: "/blog", label: "Insights", icon: FiBookOpen },
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
      // DIGITAL PLATFORMS (Technology Services)
      {
        id: "mobile-technology-services",
        label: "Technology Services",
        icon: FiCode,
        items: [
          {
            href: "/services/website-design-company-pune",
            label: "Website Design",
          },
          {
            href: "/services/website-development",
            label: "Website Development",
          },
          {
            href: "/services/wordpress-development",
            label: "WordPress Development",
          },
          {
            href: "/services/ecommerce-development",
            label: "Shopify Development",
          },
          {
            href: "/services/web-application",
            label: "Web Application Development",
          },
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

      // GROWTH MARKETING (Digital Marketing)
      {
        id: "mobile-digital-marketing",
        label: "Digital Marketing",
        icon: FiGlobe,
        items: [
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
            href: "/services/performance-marketing",
            label: "Performance Marketing",
          },
          { href: "/services/ppc-google-ads", label: "Google Ads / PPC" },
          { href: "/services/meta-ads", label: "Meta / Facebook Ads" },
          { href: "/services/content-marketing", label: "Content Marketing" },
          { href: "/services/lead-generation", label: "Lead Generation" },
          { href: "/services/email-marketing", label: "Email Marketing" },
          { href: "/services/whatsapp-marketing", label: "WhatsApp Campaigns" },
          { href: "/services/sms-marketing", label: "SMS Marketing" },
          {
            href: "/services/influencer-management",
            label: "Influencer Management",
          },
          { href: "/services/youtube-seo", label: "YouTube SEO" },
          {
            href: "/services/media-planning-buying",
            label: "Media Planning & Buying",
          },
          {
            href: "/services/political-digital-marketing",
            label: "Political Digital Marketing",
          },
        ],
      },

      {
        id: "mobile-branding-creative",
        label: "Branding & Creative",
        icon: FiPenTool,
        items: [
          {
            label: "Branding Consulting",
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
                href: "/services/brand-identity",
                label: "Brand Identity Development",
              },
              { href: "/services/branding-design", label: "Branding & Design" },
              {
                href: "/services/brochure-design",
                label: "Brochure Designing",
              },
              {
                href: "/services/business-card-design",
                label: "Business Card Design",
              },
              {
                href: "/services/letterhead-design",
                label: "Letterhead Design",
              },
            ],
          },
        ],
      },

      // PORTFOLIO
      {
        id: "mobile-portfolio",
        label: "Portfolio",
        icon: FiLayers,
        items: [
          { href: "/portfolio", label: "All Portfolio" },
          { href: "/portfolio/website-projects", label: "Website Projects" },
          { href: "/portfolio/branding-work", label: "Branding Work" },
          { href: "/portfolio/social-media-creatives", label: "Social Media" },
          { href: "/portfolio/case-studies", label: "Case Studies" },
          { href: "/success-stories", label: "Success Stories" },
          { href: "/success-stories/testimonials", label: "Testimonials" },
          { href: "/success-stories/awards", label: "Awards" },
        ],
      },
    ],

    // STANDALONE MOBILE LINKS
    standaloneLinks: [
      { href: "/blog", label: "Insights", icon: FiBookOpen },
      { href: "/contact", label: "Contact", icon: FiMail },
    ],
  },
};

// Helper function to get all service links (useful for sitemaps, etc.)
export const getAllServiceLinks = () => {
  const services: { href: string; label: string; featured?: boolean }[] = [];
  navigationData.desktop.megaMenus.forEach((menu) => {
    if (menu.id === "services" || menu.id === "specialized-services") {
      menu.items?.forEach((category) => {
        category.items?.forEach((item) => {
          // Only push items that have an href property
          if ("href" in item && item.href) {
            const service: { href: string; label: string; featured?: boolean } =
              {
                href: item.href,
                label: item.label,
              };
            if ("featured" in item && typeof item.featured === "boolean") {
              service.featured = item.featured;
            }
            services.push(service);
          }
          // Recursively handle nested items
          if ("items" in item && Array.isArray(item.items)) {
            item.items.forEach((nestedItem) => {
              if ("href" in nestedItem && nestedItem.href) {
                const service: {
                  href: string;
                  label: string;
                  featured?: boolean;
                } = {
                  href: nestedItem.href,
                  label: nestedItem.label,
                };
                if (
                  "featured" in nestedItem &&
                  typeof nestedItem.featured === "boolean"
                ) {
                  service.featured = nestedItem.featured;
                }
                services.push(service);
              }
            });
          }
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
