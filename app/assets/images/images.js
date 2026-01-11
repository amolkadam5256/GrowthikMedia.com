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
};
