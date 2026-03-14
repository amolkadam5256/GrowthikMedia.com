"use client";
import React, { useState } from "react";
import { Mail, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

interface NewsletterFormProps {
  compact?: boolean;
}

export default function NewsletterForm({ compact = false }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !agreed) return;
    setStatus("loading");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setEmail("");
  };

  if (status === "success") {
    return (
      <div className={`flex items-center gap-3 ${compact ? "" : "p-6 bg-green-500/10 rounded-2xl border border-green-500/20"}`}>
        <CheckCircle2 className={`shrink-0 text-green-500 ${compact ? "w-5 h-5" : "w-6 h-6"}`} />
        <div>
          <p className={`font-black ${compact ? "text-sm text-white" : "text-base text-(--text-primary)"}`}>
            You&apos;re subscribed! 🎉
          </p>
          <p className={`${compact ? "text-xs text-white/80" : "text-sm text-(--text-secondary)"} mt-0.5`}>
            Watch your inbox for weekly insights.
          </p>
        </div>
      </div>
    );
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="w-full h-10 px-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder:text-white/60 text-sm font-medium focus:outline-none focus:border-white/60 transition-all"
        />
        <div className="flex items-start gap-2">
          <input
            id="agree-compact"
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 accent-white"
          />
          <label htmlFor="agree-compact" className="text-xs text-white/70 font-medium cursor-pointer leading-relaxed">
            I agree to the privacy policy
          </label>
        </div>
        <button
          type="submit"
          disabled={!email || !agreed || status === "loading"}
          className="w-full h-10 bg-white text-(--color-primary) font-bold rounded-xl text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>Subscribe <ArrowRight className="w-4 h-4" /></>
          )}
        </button>
      </form>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-3xl bg-(--surface) border border-(--border) p-8 lg:p-12">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-(--color-primary)/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-xl mx-auto text-center">
        <div className="w-14 h-14 bg-(--color-primary)/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Mail className="w-7 h-7 text-(--color-primary)" />
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-(--text-primary) mb-3">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-(--text-secondary) font-medium mb-8 max-w-sm mx-auto">
          Get weekly insights on SEO, web design, and digital marketing delivered straight to your inbox. No spam, unsubscribe anytime.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 h-12 px-5 rounded-xl border border-(--border) bg-(--background) text-(--text-primary) placeholder:text-(--text-secondary) text-sm font-medium focus:outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/10 transition-all"
            />
            <button
              type="submit"
              disabled={!email || !agreed || status === "loading"}
              className="h-12 px-8 bg-(--color-primary) text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-(--color-primary)/20 disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
            >
              {status === "loading" ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>Subscribe <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          </div>

          <div className="flex items-center gap-3 justify-center">
            <input
              id="agree-full"
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="accent-(--color-primary) w-4 h-4"
            />
            <label htmlFor="agree-full" className="text-sm text-(--text-secondary) font-medium cursor-pointer">
              I agree to the{" "}
              <a href="/privacy-policy" className="text-(--color-primary) underline underline-offset-2">
                Privacy Policy
              </a>
            </label>
          </div>
        </form>

        <p className="text-xs text-(--text-secondary) mt-4">
          Join 1,200+ digital marketers and business owners. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
