"use client";

import React, { useState } from "react";
import { Send, Target, Globe, Wallet } from "lucide-react";

export default function AuditRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    websiteUrl: "",
    monthlyBudget: "",
    mainGoal: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formType: "Audit Request (Minimal)" }),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", phone: "", businessName: "", websiteUrl: "", monthlyBudget: "", mainGoal: "" });
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
           <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
             <Send className="w-8 h-8" />
           </div>
           <h3 className="text-xl font-bold text-green-600 mb-2">✓ Audit request received!</h3>
           <p className="text-gray-600">You will receive your custom growth report in your inbox within 48 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text" name="name" required placeholder="Full Name *"
              value={formData.name} onChange={handleChange}
              className="w-full px-5 py-3.5 rounded-2xl bg-white border border-gray-200 focus:ring-2 focus:ring-(--color-primary) transition-all text-gray-900"
            />
            <input
              type="email" name="email" required placeholder="Business Email *"
              value={formData.email} onChange={handleChange}
              className="w-full px-5 py-3.5 rounded-2xl bg-white border border-gray-200 focus:ring-2 focus:ring-(--color-primary) transition-all text-gray-900"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel" name="phone" placeholder="Phone Number"
              value={formData.phone} onChange={handleChange}
              className="w-full px-5 py-3.5 rounded-2xl bg-white border border-gray-200 focus:ring-2 focus:ring-(--color-primary) transition-all text-gray-900"
            />
            <input
              type="text" name="businessName" placeholder="Business Name *" required
              value={formData.businessName} onChange={handleChange}
              className="w-full px-5 py-3.5 rounded-2xl bg-white border border-gray-200 focus:ring-2 focus:ring-(--color-primary) transition-all text-gray-900"
            />
          </div>

          <input
            type="url" name="websiteUrl" placeholder="Website URL *" required
            value={formData.websiteUrl} onChange={handleChange}
            className="w-full px-5 py-3.5 rounded-2xl bg-white border border-gray-200 focus:ring-2 focus:ring-(--color-primary) transition-all text-gray-900"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="monthlyBudget" required value={formData.monthlyBudget} onChange={handleChange}
              className="w-full px-5 py-3.5 rounded-2xl bg-white border border-gray-200 focus:ring-2 focus:ring-(--color-primary) transition-all text-gray-900"
            >
              <option value="">Monthly Budget *</option>
              <option value="Under ₹10k">Under ₹10k</option>
              <option value="₹10k-25k">₹10k-25k</option>
              <option value="₹25k-50k">₹25k-50k</option>
              <option value="₹50k-1L">₹50k-1L</option>
              <option value="Above ₹1L">Above ₹1L</option>
            </select>
            <select
              name="mainGoal" required value={formData.mainGoal} onChange={handleChange}
              className="w-full px-5 py-3.5 rounded-2xl bg-white border border-gray-200 focus:ring-2 focus:ring-(--color-primary) transition-all text-gray-900"
            >
              <option value="">Primary Goal *</option>
              <option value="More leads">More leads</option>
              <option value="Better rankings">Better rankings</option>
              <option value="Brand awareness">Brand awareness</option>
              <option value="Social growth">Social growth</option>
              <option value="Website redesign">Website redesign</option>
            </select>
          </div>

          {status === "error" && (
            <p className="text-red-500 font-bold text-sm bg-red-50 p-3 rounded-xl border border-red-100">
               Failed. Please check your connection and try again.
            </p>
          )}

          <button
            type="submit" disabled={status === "sending"}
            className="w-full py-4 bg-linear-to-r from-(--color-primary) to-blue-600 hover:shadow-2xl text-white font-black text-lg rounded-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-50 mt-4"
          >
            {status === "sending" ? "Processing..." : "Claim My Free Growth Audit"}
            <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      )}
    </div>
  );
}
