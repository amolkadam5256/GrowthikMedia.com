import bg from "./Bg.jpg";
import download from "./download.jpg";
import brandBlackLogo from "./brand/logos/BlackLogo.png";
import brandWhiteLogo from "./brand/logos/WhiteLogo.png";
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

export const publicAssets = {
  brand: {
    appleTouchIcon: "/brand/apple-touch-icon.png",
    favicon96: "/brand/favicon-96x96.png",
    faviconIco: "/brand/favicon.ico",
    faviconSvg: "/brand/favicon.svg",
    growthikMediaBrandMarkPng: "/brand/growthik-media-brand-mark.png",
    growthikMediaBrandMarkSvg: "/brand/growthik-media-brand-mark.svg",
    growthikMediaTransparentLogo: "/brand/growthik-media-transparent-logo.png",
    growthikMediaWordmarkSvg: "/brand/growthik-media-wordmark.svg",
    siteManifest: "/brand/site.webmanifest",
    webApp192: "/brand/web-app-manifest-192x192.png",
    webApp512: "/brand/web-app-manifest-512x512.png",
  },
  videos: {
    robotMascot: "/robot-mascot.mp4",
    robotMascot2: "/robot-mascot-2.mp4",
  },
  portfolio: {
      amitKadamFinance: "/images/portfolio/amit-kadam-finance-portfolio.jpg",
      ardyRealEstate: "/images/portfolio/ardy-real-estate-dubai.jpg",
      ariaFreightways: "/images/portfolio/aria-freightways-logistics.jpg",
      autobatManufacturing: "/images/portfolio/autobat-manufacturing-website.jpg",
      dikshaComputers: "/images/portfolio/diksha-computers-it-training.jpg",
      doctordomAppointment: "/images/portfolio/doctordom-appointment-platform.jpg",
      dubaiBusinessConnect: "/images/portfolio/dubai-business-connect-uae.jpg",
      ectiEducational: "/images/portfolio/ecti-educational-institute-portal.jpg",
      growthikmediaOfficial: "/images/portfolio/growthikmedia-official-website.jpg",
      hajjUmrahTravel: "/images/portfolio/hajj-umrah-travel-portal.jpg",
      healurmindMentalHealth: "/images/portfolio/healurmind-mental-health-platform.jpg",
      majesticRealties: "/images/portfolio/majestic-realties-pune.jpg",
      mountCastleHilltop: "/images/portfolio/mount-castle-hilltop-plots.jpg",
      nandavanPark: "/images/portfolio/nandavan-park-bhugaon.jpg",
      naukriIndiaDubai: "/images/portfolio/naukri-india-dubai-jobs.jpg",
      puneDreamHomes: "/images/portfolio/pune-dream-homes.jpg",
      shabdbramhandCreative: "/images/portfolio/shabdbramhand-creative-agency.jpg",
      shopnexusEcommerce: "/images/portfolio/shopnexus-ecommerce-platform.jpg",
      skSalonBeauty: "/images/portfolio/sk-salon-beauty-website.jpg",
      webmarkxDigitalMarketing: "/images/portfolio/webmarkx-digital-marketing-agency.jpg",
      zeusManpowerRecruitment: "/images/portfolio/zeus-manpower-recruitment.jpg",
  },
} as const;

export const images = {
  brandPalette: {
    primaryRed: "#ed1c24",
    primaryBlack: "#231f20",
    white: "#ffffff",
  },
  bg,
  download,
  appleTouchIcon: publicAssets.brand.appleTouchIcon,
  favicon96: publicAssets.brand.favicon96,
  faviconIco: publicAssets.brand.faviconIco,
  faviconSvg: publicAssets.brand.faviconSvg,
  BlackLogo: brandBlackLogo,
  WhiteLogo: brandWhiteLogo,
  Logo: publicAssets.brand.growthikMediaTransparentLogo,
  growthikMediaLogo: publicAssets.brand.growthikMediaTransparentLogo,
  growthikMediaWordmark: publicAssets.brand.growthikMediaWordmarkSvg,
  growthikMediaMark: publicAssets.brand.growthikMediaBrandMarkPng,
  icon: publicAssets.brand.growthikMediaBrandMarkPng,
  logo: publicAssets.brand.growthikMediaTransparentLogo,
  siteManifest: publicAssets.brand.siteManifest,
  webApp192: publicAssets.brand.webApp192,
  webApp512: publicAssets.brand.webApp512,
  portfolio: {
    seoRealEstate,
    socialMedia,
    videoMarketing,
    websiteRedesign,
    luxuryBranding,
    educationContent,
  },
  founder: { amol1, amol2 },
  team: { prachi, amit },
  blog: {
    seoGuidePune:
      "/images/blog/seo-services-in-pune-rank-1-google-growthik-media-thumbnail.png",
  },
  publicAssets,
};

export default images;
