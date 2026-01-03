"use client";
import React, { useState, useEffect } from "react";
import { FiSave, FiLayout } from "react-icons/fi";

export default function HeroManager() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "Grow Your Business with Digital Marketing",
    subtitle:
      "We help you scale with data-driven strategies and creative solutions tailored to your brand.",
    ctaText: "Get Started Reviews",
    ctaLink: "/contact",
  });

  useEffect(() => {
    const saved = localStorage.getItem("hero_data");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      localStorage.setItem("hero_data", JSON.stringify(formData));
      setLoading(false);
      // You could add a toast notification here
      alert("Hero section updated successfully!");
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <FiLayout className="text-blue-500" />
            Hero Section Management
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Customize the main landing section of your website.
          </p>
        </div>
        <button
          onClick={handleSave}
          disabled={loading}
          className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 font-medium"
        >
          <FiSave />
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Main Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Enter main headline..."
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Subtitle
          </label>
          <textarea
            value={formData.subtitle}
            onChange={(e) =>
              setFormData({ ...formData, subtitle: e.target.value })
            }
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
            placeholder="Enter subtitle text..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              CTA Button Text
            </label>
            <input
              type="text"
              value={formData.ctaText}
              onChange={(e) =>
                setFormData({ ...formData, ctaText: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              CTA Link URL
            </label>
            <input
              type="text"
              value={formData.ctaLink}
              onChange={(e) =>
                setFormData({ ...formData, ctaLink: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Live Preview Hint */}
        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800 text-sm text-blue-600 dark:text-blue-300">
          <strong>Note:</strong> Changes will be reflected on the homepage
          immediately after saving.
        </div>
      </div>
    </div>
  );
}
