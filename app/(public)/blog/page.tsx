import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Growthik Media - Digital Marketing Insights & Tips",
  description:
    "Stay updated with the latest digital marketing trends, video production tipsand industry insights from Growthik Media. Expert advice to grow your business.",
  keywords:
    "digital marketing blog, video production tips, social media marketing insights, SEO tips, content marketing blog",
  authors: [{ name: "Growthik Media" }],
  openGraph: {
    title: "Blog | Growthik Media",
    description:
      "Digital marketing insights, tipsand industry trends from the experts at Growthik Media.",
    url: "https://www.growthikmedia.com/blog/",
    siteName: "Growthik Media",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Growthik Media Blog",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Growthik Media",
    description:
      "Digital marketing insights, tipsand industry trends from the experts at Growthik Media.",
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
    canonical: "https://www.growthikmedia.com/blog/",
  },
};

export default function Blog() {
  const blogPosts = [
    {
      title: "The Future of Digital Marketing in 2026",
      excerpt:
        "Explore the latest trends and predictions shaping the digital marketing landscape.",
      date: "January 14, 2026",
      category: "Digital Marketing",
    },
    {
      title: "Video Production Best Practices",
      excerpt:
        "Learn how to create compelling video content that engages your audience.",
      date: "January 10, 2026",
      category: "Video Production",
    },
    {
      title: "Social Media Strategy Guide",
      excerpt:
        "Build a winning social media strategy that drives real business results.",
      date: "January 5, 2026",
      category: "Social Media",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-(--color-primary) to-(--color-primary-light) bg-clip-text text-transparent">
            Our Blog
          </h1>
          <p className="text-lg text-(--text-secondary) max-w-3xl mx-auto">
            Stay updated with the latest insights, tipsand trends in digital
            marketing and video production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="rounded-2xl p-8 shadow-lg transition-all duration-300 hover:transform hover:scale-105"
              style={{
                backgroundColor: "var(--card-background)",
                border: "1px solid var(--border-color)",
              }}
            >
              <div className="mb-4">
                <span
                  className="text-sm font-semibold px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    color: "white",
                  }}
                >
                  {post.category}
                </span>
              </div>
              <h2
                className="text-2xl font-bold mb-3"
                style={{ color: "var(--color-white)" }}
              >
                {post.title}
              </h2>
              <p className="text-(--text-secondary) mb-4">{post.excerpt}</p>
              <time
                className="text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                {post.date}
              </time>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-(--text-secondary)">
            More blog posts coming soon! Stay tuned for expert insights and
            industry updates.
          </p>
        </div>
      </div>
    </div>
  );
}
