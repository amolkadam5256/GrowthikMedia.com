"use client";
import React, { useState } from "react";
import { FiEdit, FiPlus, FiFileText } from "react-icons/fi";

export default function BlogManager() {
  const [posts] = useState([
    {
      id: 1,
      title: "10 Digital Marketing Trends for 2024",
      date: "Jan 15, 2024",
      status: "Published",
    },
    {
      id: 2,
      title: "How to Optimize SEO",
      date: "Jan 20, 2024",
      status: "Draft",
    },
  ]);

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <FiEdit className="text-pink-500" />
            Blog Posts
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage your blog content and publications.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:opacity-90 transition">
          <FiPlus />
          New Post
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 dark:bg-gray-900/50">
            <tr>
              <th className="p-4 text-sm font-semibold text-gray-500">Title</th>
              <th className="p-4 text-sm font-semibold text-gray-500">Date</th>
              <th className="p-4 text-sm font-semibold text-gray-500">
                Status
              </th>
              <th className="p-4 text-sm font-semibold text-gray-500 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {posts.map((post) => (
              <tr
                key={post.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <td className="p-4 font-medium dark:text-white flex items-center gap-3">
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <FiFileText className="text-gray-500" />
                  </div>
                  {post.title}
                </td>
                <td className="p-4 text-sm text-gray-500">{post.date}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      post.status === "Published"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                    }`}
                  >
                    {post.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
