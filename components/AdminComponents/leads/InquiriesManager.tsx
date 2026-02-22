"use client";

import React, { useState, useEffect } from "react";
import {
  FiMail,
  FiClock,
  FiPhone,
  FiType,
  FiCalendar,
  FiDownload,
  FiTrash2,
  FiCheckCircle,
  FiMessageSquare,
  FiEye,
  FiPlus,
  FiSearch,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export type InquiryLead = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  status: string; // NEW, CONTACTED, RESOLVED, DELETED
  createdAt: string;
  updatedAt: string;
};

export default function InquiriesManager() {
  const [inquiries, setInquiries] = useState<InquiryLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [searchTerm, setSearchTerm] = useState("");

  // Modals
  const [selectedInquiry, setSelectedInquiry] = useState<InquiryLead | null>(
    null,
  );
  const [showExportMenu, setShowExportMenu] = useState(false);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/inquiry-leads");
      let data = await response.json();
      if (Array.isArray(data)) {
        data = data.filter((d: any) => d.status !== "DELETED");
        setInquiries(data);
      } else {
        setInquiries([]);
      }
    } catch (error) {
      console.error("Error fetching inquiries:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredInquiries = inquiries.filter((inquiry) => {
    const matchesSearch =
      inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (inquiry.subject &&
        inquiry.subject.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesFilter =
      activeFilter === "ALL" || inquiry.status === activeFilter;

    return matchesSearch && matchesFilter;
  });

  const downloadExport = (format: string, filterType: string = "ALL") => {
    window.location.href = `/api/admin/inquiry-leads/export?format=${format}&filter=${filterType}`;
    setShowExportMenu(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this inquiry?")) return;
    try {
      await fetch(`/api/admin/inquiry-leads/${id}`, { method: "DELETE" });
      setInquiries((prev) => prev.filter((l) => l.id !== id));
      if (selectedInquiry?.id === id) setSelectedInquiry(null);
    } catch (e) {
      console.error(e);
    }
  };

  const updateStatus = async (inquiry: InquiryLead, newStatus: string) => {
    try {
      const res = await fetch(`/api/admin/inquiry-leads/${inquiry.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...inquiry, status: newStatus }),
      });
      const data = await res.json();
      setInquiries((prev) => prev.map((l) => (l.id === data.id ? data : l)));
      if (selectedInquiry?.id === data.id) {
        setSelectedInquiry(data);
      }
    } catch (e) {
      console.error("Update failed:", e);
    }
  };

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="w-10 h-10 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in pb-12">
      {/* Header Section (Same UI as Services / Portfolio) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <FiMail className="text-blue-500" />
            Inquiry Management
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage your incoming web inquiries ({inquiries.length} total).
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Filtering */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {["ALL", "NEW", "CONTACTED", "RESOLVED"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm"
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
                }`}
              >
                {filter === "ALL"
                  ? "All"
                  : filter.charAt(0) + filter.toLowerCase().slice(1)}
              </button>
            ))}
          </div>

          <div className="relative">
            <button
              onClick={() => setShowExportMenu(!showExportMenu)}
              className="flex items-center gap-2 px-6 py-2.5 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:opacity-90 transition-opacity font-medium shadow-sm"
            >
              <FiDownload />
              Export
            </button>

            <AnimatePresence>
              {showExportMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/10 rounded-xl shadow-xl z-50 overflow-hidden"
                >
                  <div className="px-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50 dark:bg-black/50 border-b border-gray-100 dark:border-white/10">
                    Export Format
                  </div>
                  <button
                    onClick={() => downloadExport("xlsx", activeFilter)}
                    className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                  >
                    Excel (.xlsx)
                  </button>
                  <button
                    onClick={() => downloadExport("csv", activeFilter)}
                    className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                  >
                    CSV (.csv)
                  </button>
                  <button
                    onClick={() => downloadExport("json", activeFilter)}
                    className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors border-t border-gray-100 dark:border-white/10"
                  >
                    JSON Backup
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* List Column */}
        <div className="lg:col-span-1 space-y-4 h-[700px] flex flex-col">
          <div className="relative mb-4 shrink-0">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, subject..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white dark:bg-black border border-gray-100 dark:border-white/10 focus:border-blue-500 pl-11 pr-4 py-3 rounded-xl text-sm outline-none transition-all dark:text-white shadow-sm"
            />
          </div>

          <div className="flex-1 overflow-y-auto no-scrollbar space-y-3 pb-4">
            {filteredInquiries.length === 0 ? (
              <div className="text-center py-12 text-gray-400 dark:text-gray-500 flex flex-col items-center">
                <FiMail size={32} className="mb-3 opacity-20" />
                <p className="text-sm font-medium">No inquiries found</p>
              </div>
            ) : (
              filteredInquiries.map((inquiry) => {
                const isSelected = selectedInquiry?.id === inquiry.id;
                return (
                  <div
                    key={inquiry.id}
                    onClick={() => setSelectedInquiry(inquiry)}
                    className={`group p-4 rounded-xl cursor-pointer transition-colors border ${
                      isSelected
                        ? "bg-white dark:bg-gray-800 border-blue-500 shadow-sm"
                        : "bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 hover:border-blue-500 shadow-sm"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4
                        className={`font-bold text-sm truncate pr-2 ${isSelected ? "text-blue-700 dark:text-blue-400" : "text-gray-900 dark:text-white"}`}
                      >
                        {inquiry.name}
                      </h4>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${
                          inquiry.status === "NEW"
                            ? "bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400"
                            : inquiry.status === "CONTACTED"
                              ? "bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400"
                              : "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"
                        }`}
                      >
                        {inquiry.status}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-3 truncate">
                      {inquiry.subject || "No Subject provided"}
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-gray-400 dark:text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <FiClock />
                        {new Date(inquiry.createdAt).toLocaleString([], {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Detailed View Column */}
        <div className="lg:col-span-2 h-[700px] flex flex-col">
          {!selectedInquiry ? (
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center mb-4">
                <FiEye size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Select an Inquiry
              </h3>
              <p className="max-w-xs text-sm">
                Choose an inquiry from the list to view its full details, update
                its status, or manage the communication record.
              </p>
            </div>
          ) : (
            <div className="flex-1 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm overflow-hidden flex flex-col relative">
              {/* Toolbar */}
              <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex flex-wrap items-center justify-between gap-4 bg-gray-50 dark:bg-gray-900/50">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status:
                  </span>
                  <select
                    value={selectedInquiry.status}
                    onChange={(e) =>
                      updateStatus(selectedInquiry, e.target.value)
                    }
                    className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 text-sm font-bold px-3 py-1.5 rounded-lg outline-none focus:border-blue-500 text-gray-900 dark:text-white cursor-pointer"
                  >
                    <option value="NEW">New Inquiry</option>
                    <option value="CONTACTED">Contacted</option>
                    <option value="RESOLVED">Resolved</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  {selectedInquiry.phone && (
                    <a
                      href={`https://wa.me/${selectedInquiry.phone}`}
                      target="_blank"
                      className="p-2 bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 rounded-lg hover:bg-emerald-100 transition-colors"
                      title="WhatsApp Message"
                    >
                      <FiMessageSquare size={16} />
                    </a>
                  )}
                  <a
                    href={`mailto:${selectedInquiry.email}`}
                    className="p-2 bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 rounded-lg hover:bg-blue-100 transition-colors"
                    title="Send Email"
                  >
                    <FiMail size={16} />
                  </a>
                  <button
                    onClick={() => handleDelete(selectedInquiry.id)}
                    className="p-2 bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400 rounded-lg hover:bg-red-100 transition-colors ml-2"
                    title="Delete Inquiry"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>

              {/* Inquiry Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
                {/* User Info Header */}
                <div className="flex items-start justify-between border-b border-gray-100 dark:border-gray-700 pb-8">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight leading-none mb-1">
                      {selectedInquiry.name}
                    </h2>

                    <div className="flex flex-col gap-2 mt-4">
                      <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 font-medium bg-gray-50 dark:bg-gray-700/50 py-2 px-4 rounded-lg w-fit border border-gray-100 dark:border-transparent">
                        <FiMail className="text-gray-400" />
                        {selectedInquiry.email}
                      </div>

                      {selectedInquiry.phone && (
                        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 font-medium bg-gray-50 dark:bg-gray-700/50 py-2 px-4 rounded-lg w-fit border border-gray-100 dark:border-transparent">
                          <FiPhone className="text-gray-400" />
                          {selectedInquiry.phone}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50 px-3 py-1.5 rounded-lg border border-gray-100 dark:border-transparent">
                      <FiCalendar size={12} />
                      {new Date(selectedInquiry.createdAt).toLocaleDateString(
                        [],
                        {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        },
                      )}
                    </span>
                  </div>
                </div>

                {/* Submitted Content Area */}
                <div className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 md:p-8 relative">
                  <div className="absolute -top-3 left-6 bg-white dark:bg-gray-800 px-3 py-1 border border-gray-100 dark:border-gray-700 rounded-full text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
                    <FiType size={12} />
                    Submitted Subject & Message
                  </div>

                  <div className="mt-2">
                    <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-white/5 pb-4">
                      {selectedInquiry.subject || "No Subject Provided"}
                    </h5>

                    <div className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-none whitespace-pre-wrap text-sm md:text-base selection:bg-blue-200 dark:selection:bg-blue-900">
                      {selectedInquiry.message ? (
                        selectedInquiry.message
                      ) : (
                        <span className="italic text-gray-400">
                          No message body was provided in this inquiry.
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
