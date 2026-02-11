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
        label: "Our Services",
        href: "/services",
        columns: "special", // Highlighting that this is a custom layout
        items: [
          // TECHNOLOGY SERVICES
          {
            label: "Technology Services",
            icon: FiCode,
            description: "Website & Application Development",
            items: [
              { href: "/services/website-design", label: "Website Design" },
              {
                label: "Website Development",
                featured: true,
                items: [
                  {
                    href: "/services/website-development/nextjs",
                    label: "Next.js Development",
                  },
                  {
                    href: "/services/website-development/react",
                    label: "React Development",
                  },
                  {
                    href: "/services/website-development/full-stack",
                    label: "Full-Stack Solutions",
                  },
                ],
              },
              {
                href: "/services/wordpress-development",
                label: "WordPress Development",
              },
              {
                href: "/services/ecommerce-development",
                label: "Shopify Development", // Changed label as requested
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
          // DIGITAL MARKETING
          {
            label: "Digital Marketing",
            icon: FiGlobe,
            description: "Performance & Growth Marketing",
            items: [
              {
                href: "/services/seo",
                label: "Search Engine Optimization (SEO)",
                featured: true,
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
                href: "/services/content-marketing",
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
            label: "Success Stories",
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
          { href: "/services/website-design", label: "Website Design" },
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
      menu.items.forEach((category) => {
        category.items.forEach((item) => {
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
