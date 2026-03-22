"use client";

import React, { useState } from "react";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";

export default function NewsletterForm({ inline = false }: { inline?: boolean }) {
  const [formData, setFormData] = useState({ email: "", name: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formType: "Newsletter Subscription" }),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ email: "", name: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex items-center gap-2 p-4 text-green-600 font-bold bg-green-50 rounded-2xl border border-green-100 animate-in fade-in zoom-in duration-500">
        <CheckCircle className="w-5 h-5 shrink-0" />
        <p className="text-sm">✓ Subscribed! Check your inbox.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`${inline ? "flex flex-col sm:flex-row gap-3" : "space-y-4"}`}>
      <div className="relative flex-1">
        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="email" name="email" required placeholder="Your email address"
          value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-(--color-primary) transition-all text-sm"
        />
      </div>
      <button
        type="submit" disabled={status === "sending"}
        className="px-6 py-3 bg-(--color-primary) text-white font-black text-sm rounded-2xl transition-all flex items-center justify-center gap-2 hover:bg-black disabled:opacity-50"
      >
        {status === "sending" ? "..." : "Join"}
        <ArrowRight className="w-4 h-4" />
      </button>
      {status === "error" && <p className="text-xs text-red-500 font-bold mt-1">Error. Try again.</p>}
    </form>
  );
}
