"use client";

import React, { useState } from "react";
import { CONTACT_INFO } from "@/constants/contact";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <div
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-black mb-6"
          style={{ color: "var(--color-white)" }}
        >
          Get In{" "}
          <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
            Touch
          </span>
        </h1>
        <p
          className="text-lg sm:text-xl max-w-3xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          Have a project in mind? Let's create something amazing together. Our
          team is ready to bring your vision to life.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div
          className="rounded-2xl p-8 shadow-2xl"
          style={{
            backgroundColor: "var(--card-background)",
            border: "1px solid var(--border-color)",
          }}
        >
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: "var(--color-white)" }}
          >
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--text-secondary)" }}
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                style={{
                  backgroundColor: "var(--background)",
                  color: "var(--color-white)",
                  border: "1px solid var(--border-color)",
                }}
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--text-secondary)" }}
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                style={{
                  backgroundColor: "var(--background)",
                  color: "var(--color-white)",
                  border: "1px solid var(--border-color)",
                }}
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--text-secondary)" }}
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                style={{
                  backgroundColor: "var(--background)",
                  color: "var(--color-white)",
                  border: "1px solid var(--border-color)",
                }}
                placeholder="+91 12345 67890"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--text-secondary)" }}
              >
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                style={{
                  backgroundColor: "var(--background)",
                  color: "var(--color-white)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="video-production">Video Production</option>
                <option value="content-creation">Content Creation</option>
                <option value="social-media">Social Media Marketing</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--text-secondary)" }}
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all resize-none"
                style={{
                  backgroundColor: "var(--background)",
                  color: "var(--color-white)",
                  border: "1px solid var(--border-color)",
                }}
                placeholder="Tell us about your project..."
              />
            </div>

            {submitStatus === "success" && (
              <div
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: "rgba(34, 197, 94, 0.1)",
                  border: "1px solid rgba(34, 197, 94, 0.3)",
                }}
              >
                <p style={{ color: "#22c55e" }}>
                  ✓ Thank you! Your message has been sent successfully.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-full font-bold text-white transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: `linear-gradient(to right, var(--color-primary), var(--color-primary-light))`,
              }}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Contact Details */}
          <div
            className="rounded-2xl p-8 shadow-2xl"
            style={{
              backgroundColor: "var(--card-background)",
              border: "1px solid var(--border-color)",
            }}
          >
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "var(--color-white)" }}
            >
              Contact Information
            </h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: "var(--color-white)" }}
                  >
                    Email
                  </h3>
                  <a
                    href={`mailto:${CONTACT_INFO.email.info}`}
                    className="hover:underline"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {CONTACT_INFO.email.info}
                  </a>
                  <br />
                  <a
                    href={`mailto:${CONTACT_INFO.email.support}`}
                    className="hover:underline"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {CONTACT_INFO.email.support}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: "var(--color-white)" }}
                  >
                    Phone
                  </h3>
                  <a
                    href={`tel:${CONTACT_INFO.phone.primary}`}
                    className="hover:underline"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {CONTACT_INFO.phone.primary}
                  </a>
                  <br />
                  <a
                    href={`tel:${CONTACT_INFO.phone.secondary}`}
                    className="hover:underline"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {CONTACT_INFO.phone.secondary}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: "var(--color-white)" }}
                  >
                    Address
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>
                    {CONTACT_INFO.address.line1}
                    <br />
                    {CONTACT_INFO.address.line2}
                    <br />
                    {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state}
                    <br />
                    {CONTACT_INFO.address.country} -{" "}
                    {CONTACT_INFO.address.pincode}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: "var(--color-white)" }}
                  >
                    Working Hours
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>
                    {CONTACT_INFO.workingHours.weekdays}
                    <br />
                    {CONTACT_INFO.workingHours.saturday}
                    <br />
                    Sunday: {CONTACT_INFO.workingHours.sunday}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div
            className="rounded-2xl p-8 shadow-2xl"
            style={{
              backgroundColor: "var(--card-background)",
              border: "1px solid var(--border-color)",
            }}
          >
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: "var(--color-white)" }}
            >
              Follow Us
            </h2>

            <div className="flex flex-wrap gap-4">
              <a
                href={CONTACT_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg transition-all transform hover:scale-110"
                style={{ backgroundColor: "var(--color-primary)" }}
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-white" />
              </a>
              <a
                href={CONTACT_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg transition-all transform hover:scale-110"
                style={{ backgroundColor: "var(--color-primary)" }}
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a
                href={CONTACT_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg transition-all transform hover:scale-110"
                style={{ backgroundColor: "var(--color-primary)" }}
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6 text-white" />
              </a>
              <a
                href={CONTACT_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg transition-all transform hover:scale-110"
                style={{ backgroundColor: "var(--color-primary)" }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a
                href={CONTACT_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg transition-all transform hover:scale-110"
                style={{ backgroundColor: "var(--color-primary)" }}
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6 text-white" />
              </a>
              <a
                href={CONTACT_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg transition-all transform hover:scale-110"
                style={{ backgroundColor: "var(--color-primary)" }}
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

          {/* Map */}
          <div
            className="rounded-2xl overflow-hidden shadow-2xl"
            style={{
              border: "1px solid var(--border-color)",
            }}
          >
            <iframe
              src={CONTACT_INFO.map.iframe}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Growthik Media Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
