"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ChevronDown } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    service: "",
    budget: "",
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify({
          ...formData,
          formType: "Detailed Contact Form",
          subject: `Enquiry from ${formData.name} about ${formData.service || "General"}`
        }),
      });

      if (res.ok) {
        setSubmitStatus("success");
        // Meta Pixel Lead Tracking
        if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
          (window as any).fbq("track", "Lead", {
            content_name: "Contact Form",
            content_category: formData.service
          });
        }

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          website: "",
          service: "",
          budget: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Success remains for 5s then reverts
      if (submitStatus === "success") {
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    }
  };

  return (
    <div className="rounded-3xl bg-(--surface) p-8 sm:p-12 border border-(--border) shadow-2xl relative transition-all overflow-hidden group">
      {/* Decorative background element */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600/5 rounded-full blur-3xl group-hover:bg-red-600/10 transition-all"></div>

      <div className="relative z-10">
        <h2 className="text-3xl sm:text-4xl font-black text-(--text-primary) uppercase tracking-tight mb-4 inline-block">
          Start Your <span className="text-red-600">Growth Journey</span>
        </h2>
        <p className="text-(--text-secondary) mb-10 text-lg font-medium">
          Fill out the form below and our digital marketing experts in Pune will
          get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-xs font-black uppercase text-(--text-secondary) tracking-widest ml-1"
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
                className="rounded-xl w-full px-6 py-4 bg-(--surface-secondary) border border-(--border) text-(--text-primary) font-bold focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/10 transition-all placeholder-(--text-tertiary)/50"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-xs font-black uppercase text-(--text-secondary) tracking-widest ml-1"
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
                className="rounded-xl w-full px-6 py-4 bg-(--surface-secondary) border border-(--border) text-(--text-primary) font-bold focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/10 transition-all placeholder-(--text-tertiary)/50"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-xs font-black uppercase text-(--text-secondary) tracking-widest ml-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="rounded-xl w-full px-6 py-4 bg-(--surface-secondary) border border-(--border) text-(--text-primary) font-bold focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/10 transition-all placeholder-(--text-tertiary)/50"
                placeholder="+91 12345 67890"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="company"
                className="block text-xs font-black uppercase text-(--text-secondary) tracking-widest ml-1"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="rounded-xl w-full px-6 py-4 bg-(--surface-secondary) border border-(--border) text-(--text-primary) font-bold focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/10 transition-all placeholder-(--text-tertiary)/50"
                placeholder="Your Company Ltd"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="service"
              className="block text-xs font-black uppercase text-(--text-secondary) tracking-widest ml-1"
            >
              Service Required *
            </label>
            <div className="relative">
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="rounded-xl w-full px-6 py-4 bg-(--surface-secondary) border border-(--border) text-(--text-primary) font-bold focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/10 transition-all appearance-none cursor-pointer pr-12"
              >
                <option value="" className="bg-(--surface) text-(--text-primary)">
                  Select a service
                </option>
                <option value="seo" className="bg-(--surface) text-(--text-primary)">
                  SEO Services
                </option>
                <option value="digital-marketing" className="bg-(--surface) text-(--text-primary)">
                  Digital Marketing
                </option>
                <option value="web-dev" className="bg-(--surface) text-(--text-primary)">
                  Website Development
                </option>
                <option value="branding" className="bg-(--surface) text-(--text-primary)">
                  Branding & Design
                </option>
                <option value="social-media" className="bg-(--surface) text-(--text-primary)">
                  Social Media Marketing
                </option>
                <option value="ecommerce" className="bg-(--surface) text-(--text-primary)">
                  E-Commerce Solutions
                </option>
              </select>
              <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                <ChevronDown className="w-5 h-5 text-(--text-secondary)" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-xs font-black uppercase text-(--text-secondary) tracking-widest ml-1"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="rounded-xl w-full px-6 py-4 bg-(--surface-secondary) border border-(--border) text-(--text-primary) font-bold focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/10 transition-all resize-none placeholder-(--text-tertiary)/50"
              placeholder="Tell us about your project or goals..."
            ></textarea>
          </div>

          <div className="flex items-center gap-4 p-5 bg-(--surface-secondary) rounded-2xl border border-(--border)">
            <div className="relative flex items-center">
              <input
                type="checkbox"
                required
                id="not-bot"
                className="w-6 h-6 rounded-lg border-2 border-(--border) bg-(--surface) text-red-600 focus:ring-red-600/20 cursor-pointer transition-all"
              />
            </div>
            <label
              htmlFor="not-bot"
              className="font-bold cursor-pointer select-none text-(--text-primary) uppercase tracking-wider text-xs"
            >
              I confirm I am not a robot
            </label>
          </div>

          {submitStatus === "success" && (
            <div className="rounded-2xl p-5 bg-green-500/10 border border-green-500/50 text-green-600 dark:text-green-400 flex items-center gap-3 font-bold animate-fadeIn">
              <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
              <p className="uppercase tracking-tight text-sm">Message received successfully! We'll be in touch.</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-2xl w-full py-5 px-6 font-black text-white text-lg transition-all bg-red-600 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/20 flex items-center justify-center gap-3 uppercase tracking-widest active:scale-[0.98] disabled:opacity-50"
          >
            {isSubmitting ? (
              <div className="animate-spin h-6 w-6 border-b-2 border-white rounded-full"></div>
            ) : (
              <>
                Send Message <Send className="w-5 h-5 ml-2" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
