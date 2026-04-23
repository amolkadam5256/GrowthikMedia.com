export const CONTACT_INFO = {
  // Basic info
  companyName: "Growthik Media",
  website: "https://www.growthikmedia.com",

  // Emails
  email: {
    support: "support@growthikmedia.com",
    sales: "sales@growthikmedia.com",
    info: "info@growthikmedia.com",
    hr: "hr@growthikmedia.com",
  },

  // Phone numbers
  phone: {
    primary: "+91 80557 54054",
    secondary: "+91 7709266280",
    whatsapp: "+91 80557 54054",
  },

  // Address
  address: {
    line1: "Akshay Palace CHS",
    line2: "Warje Malwadi Rd",
    city: "Warje, Pune",
    state: "Maharashtra",
    country: "India",
    pincode: "411058",
    full: "Akshay Palace CHS, Warje Malwadi Rd, Warje, Pune 411058",
  },

  // Working hours
  workingHours: {
    weekdays: "Monday - Friday | 10:00 AM - 7:00 PM",
    saturday: "Saturday | 10:00 AM - 4:00 PM",
    sunday: "Closed",
  },

  // Social media links
  social: {
    facebook: "https://facebook.com/growthikmedia",
    instagram: "https://instagram.com/growthikmedia",
    twitter: "https://twitter.com/growthikmedia",
    linkedin: "https://linkedin.com/company/growthikmedia",
    youtube: "https://youtube.com/@growthikmedia",
    whatsapp: "https://wa.me/918055754054",
    telegram: "https://t.me/growthikmedia",
    pinterest: "https://pinterest.com/growthikmedia",
    snapchat: "https://snapchat.com/add/growthikmedia",
    reddit: "https://reddit.com/user/growthikmedia",
    discord: "https://discord.gg/growthikmedia",
    github: "https://github.com/growthikmedia",
    dribbble: "https://dribbble.com/growthikmedia",
    behance: "https://behance.net/growthikmedia",
    medium: "https://medium.com/@growthikmedia",
    quora: "https://www.quora.com/profile/growthikmedia",
  },

  // Map and location
  map: {
    googleMap: "https://maps.google.com/?q=Pune+Maharashtra",
    iframe: "https://www.google.com/maps/embed?pb=YOUR_IFRAME_LINK",
  },

  // Legal
  legal: {
    gst: "27ABCDE1234F1Z5",
    cin: "U12345MH2024PTC000000",
  },
};

export const STRUCTURED_DATA_IDS = {
  organization: `${CONTACT_INFO.website}/#organization`,
  localBusiness: `${CONTACT_INFO.website}/#localbusiness`,
  professionalService: `${CONTACT_INFO.website}/#professional-service`,
  website: `${CONTACT_INFO.website}/#website`,
} as const;

export const BUSINESS_GEO = {
  latitude: 18.480682998115928,
  longitude: 73.80476268274838,
} as const;

export const OPENING_HOURS_SPECIFICATION = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "10:00",
    closes: "19:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Saturday",
    opens: "10:00",
    closes: "16:00",
  },
] as const;

export const INDEXABLE_SOCIAL_PROFILES = Object.values(CONTACT_INFO.social).filter(
  (url) => url.startsWith("http"),
);
