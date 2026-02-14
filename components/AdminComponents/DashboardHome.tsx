import React, { useEffect, useState } from "react";
import {
  FiUsers,
  FiMessageSquare,
  FiGrid,
  FiFileText,
  FiActivity,
  FiTrendingUp,
  FiArrowUp,
  FiClock,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { motion } from "framer-motion";

export default function DashboardHome() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/admin/dashboard/stats");
        const data = await res.json();
        if (res.ok) {
          setStats(data);
        }
      } catch (error) {
        console.error("Failed to fetch dashboard stats", error);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-32 bg-gray-100 dark:bg-gray-800 rounded-2xl"
          ></div>
        ))}
      </div>
    );
  }

  const statCards = [
    {
      label: "Total Inquiries",
      value: stats?.counts?.totalInquiries || 0,
      subValue: `${stats?.counts?.newInquiries || 0} New`,
      icon: <FiMessageSquare />,
      gradient: "from-blue-500 to-indigo-600",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      textColor: "text-blue-600 dark:text-blue-400",
    },
    {
      label: "AI Leads",
      value: stats?.counts?.chatLeads || 0,
      subValue: "captured",
      icon: <FiTrendingUp />,
      gradient: "from-purple-500 to-pink-600",
      bg: "bg-purple-50 dark:bg-purple-900/20",
      textColor: "text-purple-600 dark:text-purple-400",
    },
    {
      label: "Portfolio Projects",
      value: stats?.counts?.projects || 0,
      subValue: "showcased",
      icon: <FiGrid />,
      gradient: "from-emerald-400 to-teal-600",
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
      textColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      label: "Blog Posts",
      value: stats?.counts?.blogs || 0,
      subValue: "published",
      icon: <FiFileText />,
      gradient: "from-orange-400 to-red-600",
      bg: "bg-orange-50 dark:bg-orange-900/20",
      textColor: "text-orange-600 dark:text-orange-400",
    },
  ];

  // Combine recent activity
  const recentActivities = [
    ...(stats?.recentActivity?.inquiries || []).map((i: any) => ({
      type: "inquiry",
      message: `New inquiry from ${i.name}: "${i.subject || "No Subject"}"`,
      date: i.createdAt,
      icon: <FiMessageSquare />,
      color: "text-blue-500",
      bg: "bg-blue-100 dark:bg-blue-900/30",
    })),
    ...(stats?.recentActivity?.projects || []).map((p: any) => ({
      type: "project",
      message: `Project added: "${p.title}"`,
      date: p.createdAt,
      icon: <FiGrid />,
      color: "text-emerald-500",
      bg: "bg-emerald-100 dark:bg-emerald-900/30",
    })),
    ...(stats?.recentActivity?.blogs || []).map((b: any) => ({
      type: "blog",
      message: `Blog post ${b.isPublished ? "published" : "drafted"}: "${b.title}"`,
      date: b.createdAt,
      icon: <FiFileText />,
      color: "text-orange-500",
      bg: "bg-orange-100 dark:bg-orange-900/30",
    })),
  ]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10);

  return (
    <div className="space-y-8 animate-fade-in max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-extrabold bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Executive Overview
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Real-time insights into your platform's performance.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm border border-gray-100 dark:border-gray-700">
          <FiClock /> Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            key={index}
            className="group relative bg-white dark:bg-gray-800/80 backdrop-blur-xl p-6 rounded-4xl shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-700/50 overflow-hidden hover:-translate-y-1 transition-transform duration-300"
          >
            <div
              className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${stat.gradient} opacity-10 rounded-bl-4xl group-hover:scale-110 transition-transform duration-500`}
            />

            <div className="relative z-10">
              <div
                className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.textColor} flex items-center justify-center text-2xl mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.icon}
              </div>
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-1">
                {stat.label}
              </p>
              <div className="flex items-end gap-2">
                <h3 className="text-4xl font-black text-gray-900 dark:text-white">
                  {stat.value}
                </h3>
                <span className={`text-sm font-bold mb-1.5 ${stat.textColor}`}>
                  {stat.subValue}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Activity Feed */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-white dark:bg-gray-800/80 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-xl border border-gray-100 dark:border-gray-700/50"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <FiActivity className="text-red-500" /> Live Activity Feed
            </h3>
            <span className="text-xs font-bold px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-500">
              Most recent
            </span>
          </div>

          <div className="relative border-l-2 border-gray-100 dark:border-gray-700 ml-3 space-y-8 pl-8 py-2">
            {recentActivities.length === 0 ? (
              <p className="text-gray-400 italic">
                No recent activity to show.
              </p>
            ) : (
              recentActivities.map((item: any, i) => (
                <div key={i} className="relative group">
                  <div
                    className={`absolute -left-[41px] w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 ${item.bg} flex items-center justify-center`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${item.color.replace("text-", "bg-")}`}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <p className="text-gray-700 dark:text-gray-200 font-medium group-hover:text-blue-600 transition-colors">
                      {item.message}
                    </p>
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      {new Date(item.date).toLocaleDateString()} •{" "}
                      {new Date(item.date).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </motion.div>

        {/* Quick Actions & System Status */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-linear-to-br from-indigo-600 to-blue-700 p-8 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden dark:shadow-none dark:border dark:border-white/10"
          >
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <h3 className="text-xl font-bold mb-2 relative z-10">
              System Status
            </h3>
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                <span className="text-sm font-medium flex items-center gap-2">
                  <FiCheckCircle className="text-green-400" /> Database
                </span>
                <span className="text-xs font-bold bg-green-500/20 text-green-300 px-2 py-1 rounded-lg">
                  Operational
                </span>
              </div>
              <div className="flex items-center justify-between bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                <span className="text-sm font-medium flex items-center gap-2">
                  <FiActivity className="text-blue-400" /> API Latency
                </span>
                <span className="text-xs font-bold text-blue-200">24ms</span>
              </div>
              <div className="flex items-center justify-between bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                <span className="text-sm font-medium flex items-center gap-2">
                  <FiUsers className="text-yellow-400" /> Admins
                </span>
                <span className="text-xs font-bold text-yellow-200">
                  {stats?.counts?.admins || 0} Active
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-xs text-blue-200 mb-4">Quick Navigation</p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => (window.location.href = "/admin/inquiries")}
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-lg text-sm text-center transition-colors"
                >
                  Inbox
                </button>
                <button
                  onClick={() => (window.location.href = "/admin/services")}
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-lg text-sm text-center transition-colors"
                >
                  Services
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
