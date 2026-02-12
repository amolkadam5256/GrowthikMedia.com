"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
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
    >,
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-2 text-(--text-secondary)"
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
            className="w-full px-4 py-3 rounded-lg bg-(--background) text-(--color-white) border border-(--border) focus:outline-none focus:ring-2 focus:ring-(--color-primary) transition-all"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2 text-(--text-secondary)"
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
            className="w-full px-4 py-3 rounded-lg bg-(--background) text-(--color-white) border border-(--border) focus:outline-none focus:ring-2 focus:ring-(--color-primary) transition-all"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium mb-2 text-(--text-secondary)"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-(--background) text-(--color-white) border border-(--border) focus:outline-none focus:ring-2 focus:ring-(--color-primary) transition-all"
            placeholder="+91 12345 67890"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium mb-2 text-(--text-secondary)"
          >
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-(--background) text-(--color-white) border border-(--border) focus:outline-none focus:ring-2 focus:ring-(--color-primary) transition-all"
          >
            <option value="">Select a subject</option>
            <option value="audit">Free Growth Audit</option>
            <option value="general">General Inquiry</option>
            <option value="video-production">Video Production</option>
            <option value="content-creation">Content Creation</option>
            <option value="social-media">Social Media Marketing</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-2 text-(--text-secondary)"
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
          className="w-full px-4 py-3 rounded-lg bg-(--background) text-(--color-white) border border-(--border) focus:outline-none focus:ring-2 focus:ring-(--color-primary) transition-all resize-none"
          placeholder="Tell us about your business goals..."
        />
      </div>

      {submitStatus === "success" && (
        <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
          <p className="text-green-500">
            ✓ Thank you! We&apos;ll get back to you with your audit results
            soon.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 rounded-full font-bold text-white bg-linear-to-r from-(--color-primary) to-(--color-primary-light) transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            Processing...
          </>
        ) : (
          <>
            Request Free Audit
            <Send className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
}
