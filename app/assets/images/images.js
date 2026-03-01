// Central image mapping for the project
// Import all images from the assets/images directory
import appleTouchIcon from "./apple-touch-icon.png";
import bg from "./Bg.jpg";
import download from "./download.jpg";
import favicon96 from "./favicon-96x96.png";
import faviconIco from "./favicon.ico";
import faviconSvg from "./favicon.svg";
import icon from "./icon.png";
import logo from "./logo.png";
import logo2 from "./logo-2.png";
import webApp192 from "./web-app-manifest-192x192.png";
import webApp512 from "./web-app-manifest-512x512.png";
import amol1 from "./Amol-kadam/Amolkadam-1.png";
import amol2 from "./Amol-kadam/Amolkadam-2.png";

// Portfolio Images
import seoRealEstate from "./portfolio/seo-real-estate.png";
import socialMedia from "./portfolio/social-media.png";
import videoMarketing from "./portfolio/video-marketing.png";
import websiteRedesign from "./portfolio/website-redesign.png";
import luxuryBranding from "./portfolio/luxury-branding.png";
import educationContent from "./portfolio/education-content.png";

// Team
import prachi from "./Prachi.png";
import amit from "./Amit Kadam.jpg";

// Export all images as a centralized object
export const images = {
  appleTouchIcon,
  bg,
  download,
  favicon96,
  faviconIco,
  faviconSvg,
  icon,
  logo,
  logo2,
  siteManifest: "/site.webmanifest", // Direct path for webmanifest (not importable)
  webApp192,
  webApp512,

  // Portfolio
  portfolio: {
    seoRealEstate,
    socialMedia,
    videoMarketing,
    websiteRedesign,
    luxuryBranding,
    educationContent,
  },

  // Founder
  founder: {
    amol1,
    amol2,
  },

  // Team
  team: {
    prachi,
    amit,
  },
};
