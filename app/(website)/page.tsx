// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Grow Your Business with <span className="text-yellow-400">Digital Marketing</span>
            </h1>
            <p className="mb-8 text-lg">
              SEO, Social Media Marketing, Google Ads, and Web Development to take your business to the next level.
            </p>
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition"
            >
              Get Started
            </Link>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src="/demo-hero.png" // Replace with your hero image
              alt="Digital Marketing Illustration"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "SEO Optimization", icon: "/icons/seo.svg" },
            { title: "Social Media Marketing", icon: "/icons/social.svg" },
            { title: "Google Ads Campaigns", icon: "/icons/ads.svg" },
            { title: "Web Development", icon: "/icons/web.svg" },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <Image
                src={service.icon}
                width={60}
                height={60}
                alt={service.title}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                High-quality professional services to boost your business online.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Why Choose Growthik Media?
            </h2>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li>✅ 11+ Years of Digital Marketing & Real Estate Expertise</li>
              <li>✅ Proven Strategies to Grow Your Business Online</li>
              <li>✅ Transparent Reporting & ROI-Focused Campaigns</li>
              <li>✅ Creative & Modern Web Design Solutions</li>
            </ul>
            <Link
              href="/about"
              className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-500 transition"
            >
              Learn More About Us
            </Link>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/demo-features.png" // Replace with your feature image
              alt="Why choose Growthik Media"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 py-20 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Take Your Business to the Next Level?
        </h2>
        <p className="mb-8">
          Contact us today and let’s craft a strategy that grows your brand online.
        </p>
        <Link
          href="/contact"
          className="bg-yellow-400 text-black px-8 py-4 rounded-md font-semibold hover:bg-yellow-300 transition"
        >
          Get Free Consultation
        </Link>
      </section>

      {/* Demo Portfolio Section */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Our Recent Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div key={project} className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <Image
                src={`/projects/demo-${project}.png`}
                alt={`Project ${project}`}
                width={400}
                height={250}
                className="object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                <p className="text-gray-700 dark:text-gray-300">A professional demo project for showcasing digital marketing & web solutions.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
