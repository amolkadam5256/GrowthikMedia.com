"use client";
import React, { useState, useEffect } from "react";
import { FiSave, FiInfo, FiTarget, FiEye, FiHeart } from "react-icons/fi";

export default function AboutManager() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    mission:
      "To empower businesses with innovative digital solutions that drive growth and maximize ROI through data-driven strategies.",
    vision:
      "To become the global leader in digital transformation, setting new standards for creativity and technical excellence in the industry.",
    values:
      "• Integrity in all our dealings\n• Innovation in every solution\n• Customer-centric approach\n• Continuous learning and adaptation",
  });

  useEffect(() => {
    const saved = localStorage.getItem("about_data");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("about_data", JSON.stringify(formData));
      setLoading(false);
      alert("About Us content updated!");
    }, 800);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <FiInfo className="text-blue-400" />
            About Us Content
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Define your company's core identity.
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

      <div className="grid grid-cols-1 gap-6">
        {/* Mission */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-lg">
              <FiTarget />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white">
              Our Mission
            </h3>
          </div>
          <textarea
            value={formData.mission}
            onChange={(e) => handleChange("mission", e.target.value)}
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
          />
        </div>

        {/* Vision */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg">
              <FiEye />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white">
              Our Vision
            </h3>
          </div>
          <textarea
            value={formData.vision}
            onChange={(e) => handleChange("vision", e.target.value)}
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
          />
        </div>

        {/* Values */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg">
              <FiHeart />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white">
              Core Values
            </h3>
          </div>
          <textarea
            value={formData.values}
            onChange={(e) => handleChange("values", e.target.value)}
            rows={5}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
            placeholder="enter values, one per line..."
          />
        </div>
      </div>
    </div>
  );
}
