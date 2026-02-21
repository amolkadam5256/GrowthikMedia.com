import React, { useState } from "react";
import {
  FiBriefcase,
  FiPlus,
  FiImage,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

export default function PortfolioManager() {
  const [projects] = useState([
    {
      id: 1,
      title: "E-commerce Redesign",
      category: "Web Design",
      image: "/portfolio/1.jpg",
    },
    {
      id: 2,
      title: "Social Media Campaign",
      category: "Marketing",
      image: "/portfolio/2.jpg",
    },
  ]);

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <FiBriefcase className="text-orange-500" />
            Portfolio Projects
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage Website Projects, Branding, Social Media Creatives, etc.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:opacity-90 transition">
          <FiPlus />
          Add Project
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {[
          "All",
          "Website Projects",
          "Branding Work",
          "Social Media",
          "Case Studies",
          "Ads Performance",
        ].map((tab) => (
          <button
            key={tab}
            className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 whitespace-nowrap text-sm font-medium transition-colors text-gray-700 dark:text-gray-200"
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <div className="aspect-video bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-400 relative">
              <FiImage className="text-4xl" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                <button className="p-2 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform">
                  <FiEdit2 />
                </button>
                <button className="p-2 bg-red-500 rounded-full text-white hover:scale-110 transition-transform">
                  <FiTrash2 />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg dark:text-white truncate">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
