"use client";

import React, { useState } from "react";
import { Send, PhoneIncoming } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formType: "Contact Form (Quick)" }),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="w-full">
      {status === "sent" ? (
        <div className="p-8 text-center bg-green-500/5 border border-green-500/20 rounded-3xl animate-in zoom-in duration-500">
          <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
             <Send className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-green-600 mb-2">✓ Message sent!</h3>
          <p className="text-gray-600">Check your inbox for our confirmation email.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text" name="name" required placeholder="Full Name *"
              value={formData.name} onChange={handleChange}
              className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:ring-2 focus:ring-(--color-primary) transition-all text-gray-900"
            />
            <input
              type="email" name="email" required placeholder="Email Address *"
              value={formData.email} onChange={handleChange}
              className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:ring-2 focus:ring-(--color-primary) transition-all text-gray-900"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="tel" name="phone" placeholder="Phone Number"
              value={formData.phone} onChange={handleChange}
              className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:ring-2 focus:ring-(--color-primary) transition-all text-gray-900"
            />
            <select
              name="service" required value={formData.service} onChange={handleChange}
              className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:ring-2 focus:ring-(--color-primary) transition-all text-gray-900 appearance-none"
            >
              <option value="">Select Service *</option>
              <option value="SEO">SEO & Local SEO</option>
              <option value="PPC">Google & Meta Ads</option>
              <option value="Web">Website Development</option>
              <option value="Social">Social Media Marketing</option>
              <option value="Branding">Brand Strategy & Identity</option>
              <option value="Content">Content Marketing</option>
            </select>
          </div>

          <textarea
            name="message" required placeholder="Your Message *" rows={4}
            value={formData.message} onChange={handleChange}
            className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:ring-2 focus:ring-(--color-primary) transition-all text-gray-900 resize-none"
          />

          {status === "error" && (
            <p className="text-red-500 font-bold text-sm bg-red-50 p-4 rounded-xl border border-red-100 flex items-center gap-2">
               Failed. Please try again or <a href="https://wa.me/91XXXXXXXXXX" className="underline">WhatsApp us</a>.
            </p>
          )}

          <button
            type="submit" disabled={status === "sending"}
            className="w-full py-4 bg-(--color-primary) hover:bg-black text-white font-black text-lg rounded-2xl shadow-xl shadow-red-500/20 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
            <Send className="w-5 h-5" />
          </button>
        </form>
      )}
    </div>
  );
}
