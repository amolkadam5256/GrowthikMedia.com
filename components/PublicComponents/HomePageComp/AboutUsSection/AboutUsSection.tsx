"use client";

import Link from "next/link";
import { ArrowRight, Target, Eye } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

export default function AboutUsSection() {
  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{
        backgroundColor: "var(--background)",
      }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-20 left-10 w-72 h-72 blur-sm"
          style={{ backgroundColor: "var(--color-primary)" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 blur-sm"
          style={{ backgroundColor: "var(--color-primary-light)" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Visual Element */}
          <div
            className="relative"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div
              className="p-12 backdrop-blur-sm"
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Company Name with Gradient */}
              <div className="mb-8" data-aos="fade-up" data-aos-delay="100">
                <div className="flex items-center gap-3 mb-4">
                  <h3
                    className="text-3xl font-bold"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-primary), var(--color-primary-light))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {CONTACT_INFO.companyName}
                  </h3>
                </div>
                <div
                  className="w-24 h-1 rounded-full "
                  style={{ backgroundColor: "var(--color-primary)" }}
                ></div>
              </div>

              {/* Mission & Vision Cards */}
              <div className="space-y-6">
                {/* Mission Card */}
                <article
                  className="p-6 transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: "var(--background)",
                    border: "1px solid var(--border)",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "var(--color-primary)" }}
                    >
                      <Target className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h4
                        className="text-lg font-bold mb-2"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Our Mission
                      </h4>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        To empower businesses with innovative digital marketing
                        strategies and compelling video content that drives
                        growth and engagement.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Vision Card */}
                <article
                  className="p-6 transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: "var(--background)",
                    border: "1px solid var(--border)",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "var(--color-primary)" }}
                    >
                      <Eye className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h4
                        className="text-lg font-bold mb-2"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Our Vision
                      </h4>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        To be the leading digital marketing agency that
                        transforms brands through creativity, innovation, and
                        measurable results.
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              {/* Stats */}
              <div
                className="grid grid-cols-3 gap-4 mt-8"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="text-center">
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ color: "var(--color-primary)" }}
                  >
                    5+
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ color: "var(--color-primary)" }}
                  >
                    200+
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Projects Done
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ color: "var(--color-primary)" }}
                  >
                    100%
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - About Content */}
          <div
            className="space-y-8"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div>
              <div
                className="inline-block px-1 py-2 mb-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--color-primary)" }}
                >
                  ABOUT US
                </span>
              </div>

              <h2
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                style={{ color: "var(--text-primary)" }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Who We Are
              </h2>

              <div
                className="w-24 h-1 mb-8"
                style={{ backgroundColor: "var(--color-primary)" }}
                data-aos="fade-right"
                data-aos-delay="300"
              ></div>

              <div
                className="space-y-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <span
                    className="font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {CONTACT_INFO.companyName}
                  </span>{" "}
                  is your trusted partner in digital marketing and video
                  production. We are a team of passionate professionals
                  dedicated to helping businesses grow through creative and
                  effective digital solutions.
                </p>

                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Based in Pune, we combine creativity with data-driven
                  strategies to deliver results that matter. Our expertise spans
                  video production, content creation, social media marketing,
                  SEO, and comprehensive digital marketing solutions.
                </p>
              </div>

              {/* Why We Exist */}
              <article
                className="mt-8 p-6"
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  Why We Exist
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  We believe every business has a unique story to tell. Our
                  purpose is to amplify your brand&apos;s voice, connect you
                  with your audience, and drive meaningful growth through
                  innovative digital strategies and compelling visual content.
                </p>
              </article>

              {/* CTA Button */}
              <div className="mt-8" data-aos="zoom-in" data-aos-delay="600">
                <Link href="/about">
                  <button
                    className="group px-8 py-4  font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3"
                    style={{
                      backgroundColor: "var(--color-primary)",
                    }}
                  >
                    Know More
                    <ArrowRight
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={2}
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
