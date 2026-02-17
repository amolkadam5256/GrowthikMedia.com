import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Growthik Media - Digital Marketing & Video Production",
  description:
    "Explore our comprehensive digital marketing services including video production, content creation, social media marketing, SEOand brand development. Transform your business with Growthik Media.",
  keywords:
    "digital marketing services, video production services, content creation, social media marketing, SEO services, brand development, pune",
  authors: [{ name: "Growthik Media" }],
  openGraph: {
    title: "Our Services | Growthik Media",
    description:
      "Comprehensive digital marketing and video production services to grow your business.",
    url: "https://www.growthikmedia.com/services/",
    siteName: "Growthik Media",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Growthik Media Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Growthik Media",
    description:
      "Comprehensive digital marketing and video production services to grow your business.",
    images: ["/og-image.png"],
    creator: "@growthikmedia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.growthikmedia.com/services/",
  },
};

export default function Services() {
  const services = [
    {
      title: "Video Production",
      description:
        "Professional video production services including corporate videos, promotional contentand social media videos.",
      features: [
        "Corporate Videos",
        "Promotional Content",
        "Social Media Videos",
        "Event Coverage",
      ],
    },
    {
      title: "Content Creation",
      description:
        "Engaging content that resonates with your audience and drives conversions.",
      features: [
        "Blog Writing",
        "Copywriting",
        "Visual Content",
        "Content Strategy",
      ],
    },
    {
      title: "Social Media Marketing",
      description:
        "Build your brand presence across all major social media platforms.",
      features: [
        "Social Media Strategy",
        "Community Management",
        "Paid Advertising",
        "Analytics & Reporting",
      ],
    },
    {
      title: "SEO & Digital Marketing",
      description:
        "Improve your online visibility and drive organic traffic to your website.",
      features: [
        "SEO Optimization",
        "Google Ads",
        "Email Marketing",
        "Conversion Optimization",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-(--color-primary) to-(--color-primary-light) bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-lg text-(--text-secondary) max-w-3xl mx-auto">
            We offer a comprehensive range of digital marketing and video
            production services designed to help your business grow and succeed
            in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                backgroundColor: "var(--card-background)",
                border: "1px solid var(--border-color)",
              }}
            >
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--color-white)" }}
              >
                {service.title}
              </h2>
              <p className="text-(--text-secondary) mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-(--text-secondary)"
                  >
                    <span
                      className="w-2 h-2 rounded-full mr-3"
                      style={{ backgroundColor: "var(--color-primary)" }}
                    ></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
