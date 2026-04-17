"use client";

import React, { useState, useEffect } from "react";
import {
  FiSearch,
  FiFilter,
  FiDownload,
  FiMoreVertical,
  FiChevronDown,
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiBriefcase,
  FiCheck,
  FiGlobe,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface Lead {
  id: string;
  name: string;
  email: string;
  mobile: string;
  company: string;
  owner: {
    name: string;
    initials: string;
    color: string;
  };
  country: string;
  status: "New" | "Interested" | "Contacted" | "Closed";
  time: string;
  date: string;
  score?: number;
  source: string;
}

const SAMPLE_LEADS: Lead[] = [
  {
    id: "1",
    name: "Shabdbramh and Co",
    email: "shabdbramh.co@gmail.com",
    mobile: "+91 98765 43210",
    company: "Shabdbramh Publications",
    owner: { name: "Amol Kadam", initials: "AK", color: "bg-blue-500" },
    country: "India",
    status: "New",
    time: "09:13 PM",
    date: "Feb 16, 2026",
    score: 59,
    source: "Chatbot",
  },
  {
    id: "2",
    name: "Pune Finserve",
    email: "punefinserve@gmail.com",
    mobile: "+91 88888 77777",
    company: "Sales @ Pune Dream Homes",
    owner: { name: "Team Lead", initials: "TL", color: "bg-orange-500" },
    country: "India",
    status: "New",
    time: "12:21 AM",
    date: "Feb 15, 2026",
    score: 0,
    source: "Inquiry Form",
  },
  {
    id: "3",
    name: "Amit Kadam",
    email: "amitkadam1562@gmail.com",
    mobile: "+91 77777 66666",
    company: "Freelance",
    owner: { name: "Admin", initials: "AD", color: "bg-purple-500" },
    country: "India",
    status: "New",
    time: "11:13 AM",
    date: "Feb 17, 2026",
    score: 0,
    source: "Contact Page",
  },
  {
    id: "4",
    name: "Growthik Media",
    email: "growthikmedia@gmail.com",
    mobile: "+91 99999 88888",
    company: "Growthik Media",
    owner: { name: "System", initials: "AI", color: "bg-emerald-500" },
    country: "India",
    status: "New",
    time: "12:33 AM",
    date: "Feb 18, 2026",
    score: 0,
    source: "Direct",
  },
  {
    id: "5",
    name: "Amit Kadma",
    email: "amitkadam1274@gmail.com",
    mobile: "+91 66666 55555",
    company: "Individual",
    owner: { name: "Manager", initials: "M", color: "bg-pink-500" },
    country: "India",
    status: "New",
    time: "12:25 AM",
    date: "Feb 18, 2026",
    score: 0,
    source: "Chatbot",
  },
  {
    id: "6",
    name: "Amol Tukaram Kadam",
    email: "amolkadam1274@gmail.com",
    mobile: "+91 55555 44444",
    company: "Growthik Media",
    owner: { name: "Amol Kadam", initials: "AK", color: "bg-blue-500" },
    country: "India",
    status: "New",
    time: "12:09 AM",
    date: "Feb 18, 2026",
    score: 26,
    source: "Chatbot",
  },
];

export default function LeadManager({ type = "all" }: { type?: string }) {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Contact Details");
  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchLeads = React.useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/inquiry-leads?type=${type}`);
      const data = await res.json();
      if (Array.isArray(data)) {
        setLeads(data);
      }
    } catch (e) {
      console.error("Failed to fetch leads", e);
    } finally {
      setLoading(false);
    }
  }, [type]);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  const toggleSelectAll = () => {
    if (selectedLeads.length === leads.length) {
      setSelectedLeads([]);
    } else {
      setSelectedLeads(leads.map((l) => l.id));
    }
  };

  const toggleSelectLead = (id: string) => {
    setSelectedLeads((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const tabs = ["Contact Details", "Organization", "Contact Administration"];

  return (
    <div className="space-y-6 animate-fadeIn pb-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-black bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Lead Intelligence
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium">
            Centralized management for all {type === "all" ? "channels" : type}{" "}
            leads.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <button className="p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
            <FiFilter className="text-gray-600 dark:text-gray-400" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
            <FiDownload /> Export
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="bg-white dark:bg-gray-900/50 rounded-4xl border border-gray-100 dark:border-gray-800 shadow-2xl overflow-hidden backdrop-blur-3xl">
        {/* Tabs */}
        <div className="flex px-8 pt-6 border-b border-gray-100 dark:border-gray-800 gap-1 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 dark:bg-gray-800/30">
                <th className="px-8 py-4 w-10">
                  <div
                    onClick={toggleSelectAll}
                    className={`w-5 h-5 rounded-md border-2 cursor-pointer flex items-center justify-center transition-all ${
                      selectedLeads.length === SAMPLE_LEADS.length
                        ? "bg-blue-600 border-blue-600"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                  >
                    {selectedLeads.length === SAMPLE_LEADS.length && (
                      <FiCheck className="text-white text-xs" />
                    )}
                  </div>
                </th>
                <th className="px-4 py-4 text-xs font-black uppercase tracking-widest text-gray-400">
                  <div className="flex items-center gap-2 cursor-pointer hover:text-gray-600 transition-colors">
                    Name <FiChevronDown />
                  </div>
                </th>
                <th className="px-4 py-4 text-xs font-black uppercase tracking-widest text-gray-400">
                  <div className="flex items-center gap-2 cursor-pointer hover:text-gray-600 transition-colors">
                    Email Id <FiChevronDown />
                  </div>
                </th>
                <th className="px-4 py-4 text-xs font-black uppercase tracking-widest text-gray-400">
                  <div className="flex items-center gap-2 cursor-pointer hover:text-gray-600 transition-colors">
                    Mobile Number <FiChevronDown />
                  </div>
                </th>
                <th className="px-4 py-4 text-xs font-black uppercase tracking-widest text-gray-400">
                  <div className="flex items-center gap-2 cursor-pointer hover:text-gray-600 transition-colors">
                    Company Name <FiChevronDown />
                  </div>
                </th>
                <th className="px-4 py-4 text-xs font-black uppercase tracking-widest text-gray-400 text-center">
                  Owner
                </th>
                <th className="px-4 py-4 text-xs font-black uppercase tracking-widest text-gray-400 text-center">
                  Score
                </th>
                <th className="px-4 py-4 text-xs font-black uppercase tracking-widest text-gray-400">
                  <div className="flex items-center gap-2 cursor-pointer hover:text-gray-600 transition-colors">
                    Country <FiChevronDown />
                  </div>
                </th>
                <th className="px-8 py-4 w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
              {loading ? (
                <tr>
                  <td colSpan={9} className="py-20 text-center">
                     <div className="w-10 h-10 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mx-auto" />
                     <p className="mt-4 text-gray-400 font-bold uppercase text-xs tracking-widest">Loading leads...</p>
                  </td>
                </tr>
              ) : leads.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-20 text-center">
                     <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">No leads found in database.</p>
                  </td>
                </tr>
              ) : (
                leads
                  .filter(l => 
                    l.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                    l.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    (l.subject && l.subject.toLowerCase().includes(searchTerm.toLowerCase()))
                  )
                  .map((lead, index) => (
                    <motion.tr
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      key={lead.id}
                      className={`group hover:bg-blue-50/30 dark:hover:bg-blue-900/5 transition-colors ${
                        selectedLeads.includes(lead.id)
                          ? "bg-blue-50/50 dark:bg-blue-900/10"
                          : ""
                      }`}
                    >
                      <td className="px-8 py-5">
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSelectLead(lead.id);
                          }}
                          className={`w-5 h-5 rounded-md border-2 cursor-pointer flex items-center justify-center transition-all ${
                            selectedLeads.includes(lead.id)
                              ? "bg-blue-600 border-blue-600"
                              : "border-gray-300 dark:border-gray-600 group-hover:border-blue-400"
                          }`}
                        >
                          {selectedLeads.includes(lead.id) && (
                            <FiCheck className="text-white text-xs" />
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-5">
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <span className="font-bold text-gray-900 dark:text-white text-sm">
                              {lead.name}
                            </span>
                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                              {lead.subject || "General Inquiry"} • {new Date(lead.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-5 text-sm text-gray-600 dark:text-gray-400 font-medium whitespace-nowrap">
                        {lead.email}
                      </td>
                      <td className="px-4 py-5 text-sm text-gray-600 dark:text-gray-400 font-medium font-mono">
                        {lead.phone || "N/A"}
                      </td>
                      <td className="px-4 py-5 text-sm text-gray-600 dark:text-gray-400 font-medium truncate max-w-[150px]">
                        {lead.message ? lead.message.substring(0, 50) + "..." : "No message"}
                      </td>
                      <td className="px-4 py-5">
                        <div className="flex justify-center text-[10px] font-black uppercase text-gray-500">
                          {lead.status}
                        </div>
                      </td>
                      <td className="px-4 py-5">
                        <div className="flex justify-center">
                          <div
                            className={`px-2 py-1 rounded-lg text-[10px] font-black ${lead.status === "NEW" ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"}`}
                          >
                            {lead.status}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-5 text-sm text-gray-600 dark:text-gray-400 font-medium">
                        <div className="flex items-center gap-2">
                          <FiGlobe className="text-gray-300" />
                          India
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors">
                          <FiMoreVertical />
                        </button>
                      </td>
                    </motion.tr>
                  ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer info */}
        <div className="px-8 py-4 bg-gray-50/50 dark:bg-gray-800/30 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center text-xs text-gray-400 font-bold">
          <div>Showing {SAMPLE_LEADS.length} leads in total</div>
          <div className="flex gap-4">
            <button className="hover:text-blue-600 transition-colors uppercase tracking-widest">
              Previous
            </button>
            <button className="hover:text-blue-600 transition-colors uppercase tracking-widest">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards (Bonus) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800/50 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-2xl text-blue-500">
              <FiUser />
            </div>
            <div>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest">
                Total Active Leads
              </p>
              <h4 className="text-2xl font-black text-gray-900 dark:text-white">
                1,284
              </h4>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800/50 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center text-2xl text-emerald-500">
              <FiMail />
            </div>
            <div>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest">
                Inquiry Response Rate
              </p>
              <h4 className="text-2xl font-black text-gray-900 dark:text-white">
                94.2%
              </h4>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800/50 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 rounded-2xl flex items-center justify-center text-2xl text-orange-500">
              <FiPhone />
            </div>
            <div>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest">
                Callback Requests
              </p>
              <h4 className="text-2xl font-black text-gray-900 dark:text-white">
                43 Today
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
