"use client";

import { useState } from "react";
import {
  TrendingUp,
  Target,
  BarChart3,
  Lightbulb,
  Users,
  Award,
} from "lucide-react";

export default function OurApproachSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoHovered, setIsVideoHovered] = useState(false);

  const features = [
    {
      icon: Target,
      title: "Tailored Strategy",
      description:
        "Custom digital marketing strategies designed for your brand",
    },
    {
      icon: TrendingUp,
      title: "SEO Excellence",
      description: "Professional SEO services to boost your online visibility",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Results",
      description: "Analytics and insights that drive measurable growth",
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      description: "Engaging content and innovative marketing campaigns",
    },
    {
      icon: Users,
      title: "Social Media Mastery",
      description: "Strategic social media marketing across all platforms",
    },
    {
      icon: Award,
      title: "Proven Expertise",
      description: "Trusted digital marketing company in Pune",
    },
  ];

  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{
        backgroundColor: "var(--background)",
      }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div
              className="h-px w-16"
              style={{
                backgroundColor: "var(--color-primary)",
              }}
            />
            <span
              className="text-sm font-semibold tracking-widest uppercase"
              style={{
                color: "var(--color-primary)",
              }}
            >
              Why Choose Us
            </span>
            <div
              className="h-px w-16"
              style={{
                backgroundColor: "var(--color-primary)",
              }}
            />
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Our Approach to Digital Marketing
          </h2>

          <div
            className="w-24 h-1 mx-auto mb-8"
            style={{
              backgroundColor: "var(--color-primary)",
            }}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Content */}
          <div className="space-y-6" data-aos="fade-right">
            {/* Paragraph 1 - SEO Optimized */}
            <div
              className="p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Our approach to{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  digital marketing
                </strong>{" "}
                combines creativity, strategy, and a commitment to results. As a
                trusted{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  digital marketing company in Pune
                </strong>
                , we start with a tailored strategy, from engaging{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  social media marketing
                </strong>{" "}
                to targeted email marketing campaigns. Our media planning
                expertise ensures maximum impact through strategic ad
                placements. We leverage analytics and SEO tools like{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  Google Analytics
                </strong>{" "}
                and{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  YouTube SEO
                </strong>{" "}
                to optimise your digital presence and drive measurable growth.
              </p>
            </div>

            {/* Paragraph 2 - SEO Optimized */}
            <div
              className="p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                We are recognised among{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  social media marketing agencies
                </strong>{" "}
                and{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  SEO companies in Pune
                </strong>{" "}
                for our innovative and results-focused approach. Our team
                delivers{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  professional SEO services
                </strong>{" "}
                and comprehensive digital marketing solutions tailored to your
                brand's goals. With a perfect balance of creativity and data, we
                enhance your brand's visibility and engagement. Excited to take
                your digital strategy to the next level?{" "}
                <strong style={{ color: "var(--color-primary)" }}>
                  Connect with us today
                </strong>{" "}
                and start building a stronger digital presence.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4" data-aos="fade-up" data-aos-delay="200">
              <a
                href="/contact"
                className="inline-block px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{
                  backgroundColor: "var(--color-primary)",
                }}
              >
                Get Started Today →
              </a>
            </div>
          </div>

          {/* Right Side - Robot Mascot Video */}
          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            <div
              className="relative overflow-hidden shadow-2xl"
              style={{
                backgroundColor: "var(--surface)",
                border: "2px solid var(--border)",
              }}
            >
              {/* Video Container */}
              <div className="relative w-full h-full min-h-[400px] md:min-h-[600px]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  onLoadedData={() => setIsVideoLoaded(true)}
                  style={{
                    opacity: isVideoLoaded ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out",
                  }}
                >
                  <source src="/robot-mascot.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Loading Placeholder */}
                {!isVideoLoaded && (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--surface-secondary)",
                    }}
                  >
                    <div
                      className="animate-spin rounded-full h-12 w-12 border-4 border-t-transparent"
                      style={{
                        borderColor: "var(--color-primary)",
                        borderTopColor: "transparent",
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Decorative Corner Accent */}
              <div
                className="absolute bottom-0 right-0 w-30 h-30 "
                style={{
                  background: "var(--color-primary)",
                  clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                  opacity: 0.9,
                }}
              />
            </div>

            {/* Floating Animation Badge */}
            <div
              className="absolute -top-6 -right-6 px-6 py-3 rounded-full shadow-lg animate-bounce"
              style={{
                backgroundColor: "var(--color-primary)",
                animationDuration: "3s",
              }}
            >
              <span className="text-white font-bold text-sm">
                AI-Powered Marketing
              </span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: "var(--color-primary)",
                  }}
                >
                  <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
