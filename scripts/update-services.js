const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "app", "(public)", "services");
const categories = [
  "(branding-creative)",
  "(digital-marketing)",
  "(technology-services)",
];

let allServices = [];

categories.forEach((category) => {
  const categoryPath = path.join(baseDir, category);
  if (fs.existsSync(categoryPath)) {
    const services = fs
      .readdirSync(categoryPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)
      .filter((name) => name !== "website-design-company-pune"); // Skip the template source himself

    services.forEach((service) => {
      allServices.push({
        category,
        slug: service,
        pagePath: path.join(categoryPath, service, "page.tsx"),
      });
    });
  }
});

console.log(`Found ${allServices.length} services to update.`);

// Read the template file
const templatePath = path.join(
  baseDir,
  "(technology-services)",
  "website-design-company-pune",
  "page.tsx",
);
let template = fs.readFileSync(templatePath, "utf-8");

// Function to convert slug to title case (e.g. social-media-marketing -> Social Media Marketing)
function toTitleCase(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Prepare template string by wrapping generic placeholders
// We want to replace "Website Design Company Pune", "Website Design Company in Pune",
// "Website Designing", "Custom Website Development Services", "Website Design"
template = template.replace(/WebsiteDesignPunePage/g, "ServicePage");
template = template.replace(
  /\$\{CONTACT_INFO.website\}\/services\/website-design-company-pune/g,
  "${CONTACT_INFO.website}/services/${SLUG}",
);

// Specific strings to replace
const replacePairs = [
  ["Website Design Company in Pune", "%%SERVICE_NAME%% in Pune"],
  ["Website Design in Pune", "%%SERVICE_NAME%% in Pune"],
  ["Website Design Company", "%%SERVICE_NAME%% Company"],
  ["Website Designing", "%%SERVICE_NAME%%"],
  ["Custom Website Development Services", "Custom %%SERVICE_NAME%% Services"],
  ["Website Design", "%%SERVICE_NAME%%"],
  ["website design", "%%SERVICE_NAME_LOWER%%"],
  ["Websites Designed", "Projects Delivered"],
  [
    "Custom, SEO-Friendly Websites",
    "Custom, SEO-Friendly & Conversion-Focused Solutions",
  ],
  [
    "Professional Website Designing for Modern Businesses",
    "Professional %%SERVICE_NAME%% for Modern Businesses",
  ],
  ["website is your digital storefront", "digital presence is your storefront"],
  ["build websites", "deliver %%SERVICE_NAME%% services"],
  ["Website design cost", "%%SERVICE_NAME%% cost"],
  ["design a website", "deliver results"],
  [
    "Our Recent Website Design Projects",
    "Our Recent %%SERVICE_NAME%% Projects",
  ],
  ["Custom Website Development Pune", "Custom %%SERVICE_NAME%% Pune"],
];

let baseTemplate = template;
for (const [search, replace] of replacePairs) {
  // Regex replace global
  baseTemplate = baseTemplate.split(search).join(replace);
}

// Run the replacement
allServices.forEach((service) => {
  let serviceName = toTitleCase(service.slug);

  // some overrides for better sounding names, you can add here
  if (service.slug === "seo") serviceName = "Search Engine Optimization (SEO)";
  if (service.slug === "ppc-google-ads")
    serviceName = "Google Ads & PPC Management";
  // ... we can add more if needed

  let content = baseTemplate.split("%%SERVICE_NAME%%").join(serviceName);
  content = content
    .split("%%SERVICE_NAME_LOWER%%")
    .join(serviceName.toLowerCase());
  content = content.split("${SLUG}").join(service.slug);

  fs.writeFileSync(service.pagePath, content, "utf-8");
});

console.log("Successfully updated all service pages!");
