import React from "react";
import {
  FiUsers,
  FiMessageSquare,
  FiGrid,
  FiFileText,
  FiActivity,
  FiTrendingUp,
} from "react-icons/fi";

export default function DashboardHome() {
  const stats = [
    {
      label: "Total Visits",
      value: "12,453",
      change: "+12%",
      icon: <FiUsers />,
      color: "bg-blue-500",
      bg: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
      label: "New Inquiries",
      value: "48",
      change: "+5%",
      icon: <FiMessageSquare />,
      color: "bg-purple-500",
      bg: "bg-purple-100 dark:bg-purple-900/20",
    },
    {
      label: "Active Services",
      value: "6",
      change: "0%",
      icon: <FiGrid />,
      color: "bg-green-500",
      bg: "bg-green-100 dark:bg-green-900/20",
    },
    {
      label: "Blog Posts",
      value: "24",
      change: "+2",
      icon: <FiFileText />,
      color: "bg-orange-500",
      bg: "bg-orange-100 dark:bg-orange-900/20",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Dashboard Overview
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`p-3 rounded-xl ${stat.bg} ${stat.color.replace(
                  "bg-",
                  "text-"
                )}`}
              >
                <span className="text-xl">{stat.icon}</span>
              </div>
              <span
                className={`text-sm font-medium ${
                  stat.change.startsWith("+")
                    ? "text-green-500"
                    : "text-gray-400"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
              {stat.value}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
            Recent Activity
          </h3>
          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  <FiActivity className="text-gray-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    New inquiry from John Doe
                  </p>
                  <p className="text-xs text-gray-500">2 minutes ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-2xl shadow-lg text-white">
          <h3 className="text-lg font-bold mb-6">Performance</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Monthly Goal</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div
                  className="bg-white h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Conversion Rate</span>
                <span>65%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div
                  className="bg-white h-2 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
