"use client";

import React, { useState } from "react";
import { Send, Globe, Target, User, Mail, Phone } from "lucide-react";

export default function AuditRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    goal: "SEO Audit",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formType: "Audit Request (Detailed)" }),
      });

      if (res.ok) {
        setSubmitStatus("success");
        // Meta Pixel Lead Tracking
        if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
          (window as any).fbq("track", "Lead", { content_name: "Free SEO Audit", content_category: "Audit Request" });
        }
        setFormData({ name: "", email: "", phone: "", website: "", goal: "SEO Audit" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Audit Form Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 8000);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="text-center py-12 px-6 bg-green-500/5 border border-green-500/20 rounded-3xl animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
          <Send className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-black text-(--text-primary) mb-4">Request Received!</h3>
        <p className="text-(--text-secondary) max-w-md mx-auto leading-relaxed">
          Thank you for requesting a Free Growth Audit. Our team will review your website and send the detailed report to <span className="font-bold text-(--color-primary)">your email</span> within 48 business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <label className="block text-xs font-black uppercase tracking-widest mb-2 text-(--text-secondary) pl-1">Full Name *</label>
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-(--text-secondary) group-focus-within:text-(--color-primary) transition-colors" />
            <input
              type="text" name="name" required value={formData.name} onChange={handleChange}
              placeholder="John Doe"
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-(--background) text-(--text-primary) border border-(--border) focus:outline-none focus:ring-2 focus:ring-(--color-primary) transition-all"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-xs font-black uppercase tracking-widest mb-2 text-(--text-secondary) pl-1">Business Email *</label>
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-(--text-secondary) group-focus-within:text-(--color-primary) transition-colors" />
            <input
              type="email" name="email" required value={formData.email} onChange={handleChange}
              placeholder="john@company.com"
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-(--background) text-(--text-primary) border border-(--border) focus:outline-none focus:ring-2 focus:ring-(--color-primary) transition-all"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <label className="block text-xs font-black uppercase tracking-widest mb-2 text-(--text-secondary) pl-1">Website URL *</label>
          <div className="relative group">
            <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-(--text-secondary) group-focus-within:text-(--color-primary) transition-colors" />
            <input
              type="url" name="website" required value={formData.website} onChange={handleChange}
              placeholder="https://example.com"
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-(--background) text-(--text-primary) border border-(--border) focus:outline-none focus:ring-2 focus:ring-(--color-primary) transition-all"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-xs font-black uppercase tracking-widest mb-2 text-(--text-secondary) pl-1">Primary Growth Goal *</label>
          <div className="relative group">
            <Target className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-(--text-secondary) group-focus-within:text-(--color-primary) transition-colors" />
            <select
              name="goal" value={formData.goal} onChange={handleChange}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-(--background) text-(--text-primary) border border-(--border) focus:outline-none focus:ring-2 focus:ring-(--color-primary) transition-all appearance-none"
            >
              <option value="SEO Audit">SEO & Organic Strategy</option>
              <option value="PPC Audit">PPC & Ad Optimization</option>
              <option value="Design Audit">UX & Conversion Audit</option>
              <option value="Full Audit">Complete Growth Audit</option>
            </select>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-5 rounded-2xl font-black text-white bg-linear-to-r from-(--color-primary) to-blue-600 hover:shadow-2xl hover:shadow-(--color-primary)/20 transform hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-3 disabled:opacity-50 mt-4"
      >
        {isSubmitting ? "Generating Request..." : "Claim My Free Growth Audit"}
        <Send className="w-5 h-5" />
      </button>

      {submitStatus === "error" && (
        <p className="text-center text-red-500 text-sm font-bold animate-pulse">
          ⚠️ Something went wrong. Please check your connection and try again.
        </p>
      )}
    </form>
  );
}
