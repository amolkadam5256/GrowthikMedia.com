export default function sitemap() {
  const baseUrl = "https://growthikmedia.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/expert-talk`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/legal-expert`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.7,
    },
  ];
}
