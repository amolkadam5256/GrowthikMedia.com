"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  FiMessageCircle,
  FiUser,
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
  FiMail,
  FiPhone,
  FiClock,
  FiSearch,
  FiCpu,
  FiFilter,
  FiZap,
  FiCheckCircle,
  FiInfo,
  FiDownload,
  FiHash,
  FiMoreVertical,
  FiSend,
  FiActivity,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChatLead, STATUS_CONFIG } from "@/types/chat";

export default function ChatIntelligence() {
  const router = useRouter();
  const [leads, setLeads] = useState<ChatLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(
    null,
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileView, setMobileView] = useState<"list" | "chat">("list");
  const transcriptEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      const response = await fetch("/api/chat/logs");
      const data = await response.json();

      if (Array.isArray(data)) {
        setLeads(data);
        if (data.length > 0 && !selectedLeadId) {
          setSelectedLeadId(data[0].id);
          setSelectedSessionId(data[0].sessions[0].id);
        }
      } else {
        console.error("API Error or Invalid Data:", data);
        setLeads([]);
      }
    } catch (error) {
      console.error("Error fetching logs:", error);
      // Fallback data structure for development/demo
      const fallbackData: ChatLead[] = [
        {
          id: "1",
          name: "Shabdbramh and Co",
          email: "shabdbramh.co@gmail.com",
          phone: "919876543210",
          status: "NEW",
          createdAt: "2026-02-16T21:13:00Z",
          score: 59,
          sessions: [
            {
              id: "s1",
              createdAt: "2026-02-16T21:13:00Z",
              messages: [
                {
                  id: "m1",
                  text: "Hello, I am interested in your services.",
                  sender: "user",
                  createdAt: "2026-02-16T21:13:00Z",
                },
                {
                  id: "m2",
                  text: "Welcome! How can we help you today?",
                  sender: "bot",
                  createdAt: "2026-02-16T21:13:30Z",
                },
              ],
            },
          ],
        },
      ];
      setLeads(fallbackData);
      if (fallbackData.length > 0) {
        setSelectedLeadId(fallbackData[0].id);
        setSelectedSessionId(fallbackData[0].sessions[0].id);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (transcriptEndRef.current) {
      transcriptEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedSessionId, leads, selectedLeadId]);

  const now = new Date();
  const todayStart = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
  ).getTime();
  const yesterdayStart = todayStart - 86400000;
  const thisWeekStart = todayStart - 86400000 * 7;
  const ACTIVE_THRESHOLD = 5 * 60 * 1000;

  const processedLeads = Array.isArray(leads)
    ? leads
        .map((lead) => {
          const allMessages = (lead.sessions || []).flatMap(
            (s) => s.messages || [],
          );
          const lastMsg = allMessages.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
          )[0];
          const lastActiveAt = lastMsg
            ? new Date(lastMsg.createdAt).getTime()
            : new Date(lead.createdAt).getTime();
          const isActive = now.getTime() - lastActiveAt < ACTIVE_THRESHOLD;

          return {
            ...lead,
            lastActiveAt,
            isActive,
            status: isActive ? "active" : "idle", // Frontend mapping requested
            lastMessage: lastMsg,
          };
        })
        .filter((lead) => {
          const matchesSearch =
            lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lead.phone.includes(searchTerm);
          const matchesFilter =
            activeFilter === "ALL" || lead.status === activeFilter;
          return matchesSearch && matchesFilter;
        })
        .sort((a, b) => b.lastActiveAt - a.lastActiveAt)
    : [];

  const groupedLeads = [
    { title: "Active Leads", leads: processedLeads.filter((l) => l.isActive) },
    {
      title: "Today",
      leads: processedLeads.filter(
        (l) => !l.isActive && l.lastActiveAt >= todayStart,
      ),
    },
    {
      title: "Yesterday",
      leads: processedLeads.filter(
        (l) =>
          !l.isActive &&
          l.lastActiveAt >= yesterdayStart &&
          l.lastActiveAt < todayStart,
      ),
    },
    {
      title: "This Week",
      leads: processedLeads.filter(
        (l) =>
          !l.isActive &&
          l.lastActiveAt >= thisWeekStart &&
          l.lastActiveAt < yesterdayStart,
      ),
    },
    {
      title: "Older",
      leads: processedLeads.filter(
        (l) => !l.isActive && l.lastActiveAt < thisWeekStart,
      ),
    },
  ].filter((g) => g.leads.length > 0);

  const selectedLead = Array.isArray(leads)
    ? leads.find((l) => l.id === selectedLeadId)
    : null;
  const selectedSession = selectedLead?.sessions.find(
    (s) => s.id === selectedSessionId,
  );

  const handleLeadSelect = (lead: ChatLead) => {
    setSelectedLeadId(lead.id);
    if (lead.sessions && lead.sessions.length > 0) {
      setSelectedSessionId(lead.sessions[0].id);
    }
    setMobileView("chat");
  };

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[#0b0f14]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
          <p className="text-[10px] font-black text-[#4a5568] uppercase tracking-widest animate-pulse">
            Syncing Neural Database...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen w-full bg-[#0b0f14] overflow-hidden animate-fadeIn selection:bg-[#d90b1c]/30">
      {/* Top Header */}
      <div className="h-16 shrink-0 bg-[#11161c] border-b border-[#1f2a36] px-6 flex items-center gap-6 z-30">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 bg-[#d90b1c] rounded-sm flex items-center justify-center text-white text-lg shadow-lg shadow-[#d90b1c]/20">
            <FiCpu className="animate-pulse" />
          </div>
          <h2 className="hidden lg:block text-xs font-black uppercase tracking-[0.2em] text-white">
            Registry Intel
          </h2>
        </div>

        <div className="relative flex-1 group max-w-lg">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4a5568] group-focus-within:text-[#d90b1c] transition-colors" />
          <input
            type="text"
            placeholder="Search neural traces..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#0b0f14] border border-[#1f2a36] focus:border-[#d90b1c]/30 pl-11 pr-4 py-2 text-[11px] rounded-sm outline-none transition-all placeholder:text-[#4a5568] font-bold text-white shadow-inner"
          />
        </div>

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={fetchLogs}
            className="p-2 bg-[#0b0f14] border border-[#1f2a36] text-[#4a5568] hover:text-[#d90b1c] rounded-sm transition-all"
            title="Force Sync"
          >
            <FiZap size={14} />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#d90b1c] text-white rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-[#b50918] transition-all shadow-lg shadow-[#d90b1c]/20">
            <FiDownload /> Export Logs
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar: Leads List */}
        <div
          className={`${mobileView === "list" ? "flex" : "hidden md:flex"} w-full md:w-80 shrink-0 flex-col bg-[#11161c]/50 border-r border-[#1f2a36] overflow-hidden`}
        >
          <div className="p-5 border-b border-[#1f2a36] bg-[#11161c]">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] font-black text-[#d90b1c] uppercase tracking-widest flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-[#d90b1c] animate-ping" />
                  Live Nodes
                </span>
                <span className="text-[12px] font-black text-white uppercase tracking-tight">
                  Intelligence Stream
                </span>
              </div>
              <div className="flex gap-1 p-1 bg-[#0b0f14] border border-[#1f2a36] rounded-sm">
                {["ALL", "HOT"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-3 py-1 rounded-sm text-[8px] font-black transition-all ${activeFilter === f ? "bg-[#d90b1c] text-white shadow-lg shadow-[#d90b1c]/20" : "text-[#4a5568] hover:text-[#a0aec0]"}`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto no-scrollbar space-y-1 p-2 bg-[#0b0f14]">
            {processedLeads.length === 0 ? (
              <div className="flex flex-col items-center justify-center p-8 opacity-30">
                <FiInfo className="mb-2" />
                <p className="text-[9px] font-black uppercase tracking-widest text-[#4a5568]">
                  Zero results
                </p>
              </div>
            ) : (
              groupedLeads.map((group) => (
                <div key={group.title} className="space-y-1 mb-4">
                  <h3 className="px-3 py-2 text-[9px] font-black text-[#6c7b8b] uppercase tracking-widest bg-[#11161c] rounded-sm border-t border-b border-[#1f2a36] shadow-inner mb-2 flex items-center gap-2">
                    {group.title === "Active Leads" && (
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    )}
                    {group.title}
                  </h3>
                  {group.leads.map((lead) => {
                    const isSelected = selectedLeadId === lead.id;
                    const lastMessage = lead.lastMessage;

                    return (
                      <button
                        key={lead.id}
                        onClick={() => handleLeadSelect(lead)}
                        className={`w-full p-4 rounded-sm text-left transition-all group relative flex flex-col gap-2 border ${
                          isSelected
                            ? "bg-[#11161c] border-[#d90b1c]/40 shadow-2xl"
                            : "bg-transparent border-transparent hover:bg-[#d90b1c]/5 hover:border-[#d90b1c]/10"
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 rounded-sm flex items-center justify-center text-xs font-black border ${
                                isSelected
                                  ? "bg-[#d90b1c] border-[#d90b1c] text-white shadow-[0_0_15px_rgba(217,11,28,0.4)]"
                                  : "bg-[#0b0f14] border-[#1f2a36] text-[#4a5568] group-hover:text-[#d90b1c] transition-colors shadow-inner"
                              }`}
                            >
                              {lead.name.charAt(0)}
                            </div>
                            <div className="flex flex-col max-w-[120px]">
                              <h4
                                className={`text-[11px] font-black truncate ${
                                  isSelected ? "text-[#d90b1c]" : "text-white"
                                }`}
                              >
                                {lead.name}
                              </h4>
                              <span className="text-[8px] font-black text-[#4a5568] uppercase tracking-tighter">
                                {lead.email?.split("@")[0] || "NULL"}
                              </span>
                            </div>
                          </div>
                          <div
                            className={`px-1.5 py-0.5 rounded-sm text-[6px] font-black uppercase tracking-[0.2em] border ${
                              lead.isActive
                                ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                                : "bg-[#0b0f14] text-[#4a5568] border-[#1f2a36]"
                            }`}
                          >
                            {lead.isActive ? "ONLINE" : "IDLE"}
                          </div>
                        </div>

                        {lastMessage && (
                          <p className="text-[9px] text-[#6c7b8b] line-clamp-1 font-bold bg-[#0b0f14] px-3 py-2 rounded-sm border border-[#1f2a36] shadow-inner group-hover:text-[#a0aec0] transition-colors">
                            <span className="text-[#d90b1c] opacity-50 font-black mr-2 text-[8px]">
                              LOG:
                            </span>
                            {lastMessage.text}
                          </p>
                        )}

                        <div className="flex justify-between items-center mt-1">
                          <div className="flex items-center gap-2.5">
                            <span className="flex items-center gap-1.5 text-[7px] font-black text-[#4a5568] uppercase tracking-[0.2em] bg-[#0b0f14] px-2 py-1 rounded-sm border border-[#1f2a36] shadow-inner">
                              <FiClock
                                size={10}
                                className="text-[#d90b1c]/70"
                              />
                              {new Date(lead.lastActiveAt).toLocaleDateString(
                                [],
                                {
                                  month: "short",
                                  day: "numeric",
                                },
                              )}
                            </span>
                            {lead.intentScore || lead.score ? (
                              <div className="flex items-center gap-1.5 text-emerald-500/70">
                                <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[7px] font-black uppercase tracking-widest">
                                  {lead.intentScore || lead.score}% INTEL
                                </span>
                              </div>
                            ) : null}
                          </div>
                          <FiChevronRight
                            className={`transition-all duration-300 text-xs ${
                              isSelected
                                ? "translate-x-1 text-[#d90b1c]"
                                : "opacity-0 group-hover:opacity-100 text-[#4a5568]"
                            }`}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Area: Chat & Profile */}
        <div
          className={`${mobileView === "chat" ? "flex" : "hidden md:flex"} flex-1 overflow-hidden relative bg-[#0b0f14]`}
        >
          {!selectedLeadId ? (
            <div className="flex-1 flex flex-col items-center justify-center p-12 text-center opacity-30">
              <div className="w-16 h-16 bg-[#11161c] border border-[#1f2a36] rounded-2xl flex items-center justify-center text-[#4a5568] mb-6 shadow-inner animate-pulse">
                <FiCpu size={30} />
              </div>
              <h3 className="text-xs font-black text-white uppercase tracking-[0.3em]">
                Neutral Uplink Awaiting
              </h3>
              <p className="text-[10px] text-[#4a5568] font-bold mt-2 uppercase tracking-widest">
                Select a registry node to initiate diagnostic view
              </p>
            </div>
          ) : (
            <div className="flex-1 flex overflow-hidden">
              {/* Chat View */}
              <div className="flex-1 flex flex-col h-full border-r border-[#1f2a36]">
                <div className="h-16 shrink-0 px-6 flex items-center justify-between border-b border-[#1f2a36] bg-[#11161c] z-20 shadow-lg">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setMobileView("list")}
                      className="md:hidden p-2 bg-[#0b0f14] border border-[#1f2a36] rounded-md text-white"
                    >
                      <FiChevronLeft size={16} />
                    </button>
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-sm bg-[#d90b1c] flex items-center justify-center text-white font-black shadow-lg shadow-[#d90b1c]/20 uppercase border border-white/10">
                        {selectedLead?.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xs font-black uppercase text-white tracking-widest leading-none mb-1.5 flex items-center gap-2">
                          {selectedLead?.name}
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                        </h3>
                        <div className="flex items-center gap-3">
                          <p className="text-[8px] font-black text-[#d90b1c] uppercase tracking-widest bg-[#0b0f14] px-2 py-0.5 rounded-sm border border-[#1f2a36] shadow-inner">
                            {selectedLead?.email || "ANONYMOUS"}
                          </p>
                          {selectedLead && selectedLead.sessions.length > 1 && (
                            <div className="flex items-center gap-2 border-l border-[#1f2a36] pl-2">
                              <FiActivity
                                size={10}
                                className="text-[#4a5568]"
                              />
                              <select
                                value={selectedSessionId || ""}
                                onChange={(e) =>
                                  setSelectedSessionId(e.target.value)
                                }
                                className="bg-transparent text-[8px] font-black uppercase tracking-[0.2em] text-[#4a5568] outline-none cursor-pointer hover:text-[#d90b1c] transition-colors"
                              >
                                {selectedLead.sessions.map((s, idx) => (
                                  <option
                                    key={s.id}
                                    value={s.id}
                                    className="bg-[#11161c] text-white"
                                  >
                                    SYNC: SESSION{" "}
                                    {selectedLead.sessions.length - idx}
                                  </option>
                                ))}
                              </select>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/${selectedLead?.phone}`}
                      target="_blank"
                      className="p-2 bg-[#0b0f14] border border-[#1f2a36] text-emerald-500 rounded-lg hover:border-emerald-500/30 hover:bg-emerald-500/10 transition-all shadow-inner"
                      title="WhatsApp Uplink"
                    >
                      <FaWhatsapp size={14} />
                    </a>
                    <button className="p-2 bg-[#0b0f14] border border-[#1f2a36] text-[#d90b1c] rounded-sm hover:border-[#d90b1c]/30 hover:bg-[#d90b1c]/10 transition-all shadow-inner">
                      <FiZap size={14} />
                    </button>
                    <button className="hidden lg:flex p-2 bg-[#0b0f14] border border-[#1f2a36] text-[#4a5568] rounded-lg hover:text-white transition-all shadow-inner">
                      <FiMoreVertical size={14} />
                    </button>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-8 space-y-10 no-scrollbar bg-[#0b0f14]">
                  {selectedSession?.messages.map((msg, idx, arr) => {
                    const isUser = msg.sender === "user";
                    const currentMsgDate = new Date(msg.createdAt);

                    let showDateHeader = false;
                    let dateHeaderText = "";

                    if (idx === 0) {
                      showDateHeader = true;
                    } else {
                      const prevMsgDate = new Date(arr[idx - 1].createdAt);
                      if (
                        currentMsgDate.getDate() !== prevMsgDate.getDate() ||
                        currentMsgDate.getMonth() !== prevMsgDate.getMonth() ||
                        currentMsgDate.getFullYear() !==
                          prevMsgDate.getFullYear()
                      ) {
                        showDateHeader = true;
                      }
                    }

                    if (showDateHeader) {
                      const timeDiff =
                        new Date().getTime() - currentMsgDate.getTime();
                      // If it's the same day as today
                      if (
                        new Date().getDate() === currentMsgDate.getDate() &&
                        new Date().getMonth() === currentMsgDate.getMonth() &&
                        new Date().getFullYear() ===
                          currentMsgDate.getFullYear()
                      ) {
                        dateHeaderText = "Today";
                      } else if (
                        new Date(new Date().getTime() - 86400000).getDate() ===
                          currentMsgDate.getDate() &&
                        new Date(new Date().getTime() - 86400000).getMonth() ===
                          currentMsgDate.getMonth() &&
                        new Date(
                          new Date().getTime() - 86400000,
                        ).getFullYear() === currentMsgDate.getFullYear()
                      ) {
                        dateHeaderText = "Yesterday";
                      } else {
                        dateHeaderText = currentMsgDate.toLocaleDateString([], {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        });
                      }
                    }

                    return (
                      <React.Fragment key={msg.id}>
                        {showDateHeader && (
                          <div className="flex justify-center my-6">
                            <span className="bg-[#11161c] px-4 py-1.5 rounded-sm border border-[#1f2a36] text-[9px] font-black text-[#6c7b8b] uppercase tracking-widest shadow-inner">
                              {dateHeaderText}
                            </span>
                          </div>
                        )}
                        <motion.div
                          initial={{
                            opacity: 0,
                            x: isUser ? 20 : -20,
                            scale: 0.98,
                          }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          transition={{ delay: 0.1 }}
                          className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[85%] md:max-w-[75%] flex gap-4 ${isUser ? "flex-row-reverse" : "flex-row"}`}
                          >
                            <div
                              className={`w-9 h-9 rounded-sm shrink-0 flex items-center justify-center text-[10px] font-black shadow-lg border ${isUser ? "bg-[#11161c] border-[#1f2a36] text-white" : "bg-[#d90b1c] border-[#d90b1c]/40 text-white shadow-[#d90b1c]/10"}`}
                            >
                              {isUser ? (
                                <FiUser size={14} />
                              ) : (
                                <FiCpu
                                  size={14}
                                  className="animate-spin-slow"
                                />
                              )}
                            </div>
                            <div
                              className={`flex flex-col ${isUser ? "items-end" : "items-start"} gap-2`}
                            >
                              <div
                                className={`p-5 rounded-sm text-[11px] font-bold leading-relaxed shadow-2xl border ${
                                  isUser
                                    ? "bg-[#d90b1c] text-white border-[#d90b1c]/40 shadow-[#d90b1c]/10"
                                    : "bg-[#11161c] text-[#e2e8f0] border-[#1f2a36] shadow-black/40"
                                }`}
                              >
                                {msg.text}
                              </div>
                              <div
                                className={`flex items-center gap-2 px-1 ${isUser ? "flex-row-reverse" : "flex-row"}`}
                              >
                                <span className="text-[7px] font-black text-[#4a5568] uppercase tracking-[0.2em]">
                                  {new Date(msg.createdAt).toLocaleTimeString(
                                    [],
                                    {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                      hour12: true,
                                    },
                                  )}
                                </span>
                                <div className="w-0.5 h-0.5 rounded-full bg-[#1f2a36]" />
                                <span className="text-[7px] font-black text-[#4a5568] uppercase tracking-widest">
                                  {isUser ? "Neural Output" : "Strategist"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </React.Fragment>
                    );
                  })}
                  <div ref={transcriptEndRef} />
                </div>

                <div className="p-6 bg-[#11161c] border-t border-[#1f2a36] shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Commit diagnostic note to archive..."
                      className="w-full bg-[#0b0f14] border-2 border-[#1f2a36] focus:border-blue-500/30 pl-6 pr-14 py-5 rounded-xl text-xs font-bold text-white outline-none transition-all placeholder:text-[#4a5568] shadow-inner"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 bg-blue-600 text-white rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20 hover:scale-105 active:scale-95 transition-all">
                      <FiSend size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Profile Details (Right) */}
              <div className="hidden lg:flex w-72 h-full flex-col p-8 space-y-10 overflow-y-auto no-scrollbar bg-[#0b0f14]">
                <div className="text-center group">
                  <h3 className="text-sm font-black uppercase text-white tracking-[0.3em] group-hover:text-blue-500 transition-colors">
                    {selectedLead?.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mt-3 text-[8px] font-black text-[#4a5568] uppercase tracking-[0.4em]">
                    <div className="h-px w-6 bg-[#1f2a36]" />
                    NODE {selectedLead?.id.slice(-6).toUpperCase()}
                    <div className="h-px w-6 bg-[#1f2a36]" />
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Strategic Score (NEW) */}
                  <div className="bg-[#11161c] border border-[#1f2a36] p-5 rounded-xl shadow-inner group">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[9px] font-black text-[#4a5568] uppercase tracking-[0.3em]">
                        Lead IQ
                      </span>
                      <span className="text-[12px] font-black text-emerald-500">
                        {selectedLead?.intentScore || selectedLead?.score || 45}
                        %
                      </span>
                    </div>
                    <div className="h-2 w-full bg-[#0b0f14] rounded-full overflow-hidden border border-[#1f2a36] p-0.5">
                      <div
                        className="h-full bg-linear-to-r from-blue-600 to-indigo-500 rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                        style={{
                          width: `${selectedLead?.intentScore || selectedLead?.score || 45}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[
                      {
                        icon: FiPhone,
                        label: "Digital Fingerprint",
                        value: selectedLead?.phone,
                      },
                      {
                        icon: FiHash,
                        label: "Interaction Depth",
                        value: `${selectedLead?.sessions?.length || 0} Synced Loops`,
                      },
                      {
                        icon: FiCalendar,
                        label: "Registry Date",
                        value: new Date(
                          selectedLead?.createdAt || "",
                        ).toLocaleDateString([], {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        }),
                      },
                      {
                        icon: FiSearch,
                        label: "Entry Protocol",
                        value: "vChat Neural Mesh",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-3.5 bg-[#11161c] border border-[#1f2a36] rounded-xl hover:border-blue-500/20 transition-all group/item cursor-default"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#0b0f14] border border-[#1f2a36] flex items-center justify-center text-blue-500 shadow-inner group-hover/item:border-blue-500/30 transition-all">
                          <item.icon size={14} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[7px] font-black text-[#4a5568] uppercase tracking-[0.2em]">
                            {item.label}
                          </span>
                          <span className="text-[10px] font-black text-[#e2e8f0] leading-none mt-1">
                            {item.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-[#1f2a36]">
                  <h4 className="text-[9px] font-black text-[#4a5568] uppercase tracking-[0.4em]">
                    Behavioral Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(() => {
                      let parsedTags: string[] = [];
                      if (selectedLead?.tags) {
                        try {
                          const parsed = JSON.parse(selectedLead.tags);
                          if (Array.isArray(parsed)) {
                            parsedTags = parsed;
                          } else {
                            parsedTags = selectedLead.tags
                              .split(",")
                              .map((s) => s.trim())
                              .filter(Boolean);
                          }
                        } catch (e) {
                          parsedTags = selectedLead.tags
                            .split(",")
                            .map((s) => s.trim())
                            .filter(Boolean);
                        }
                      }
                      if (!parsedTags || parsedTags.length === 0) {
                        parsedTags = ["NEW", "UNLABELED"];
                      }
                      return parsedTags.map((t) => (
                        <span
                          key={String(t)}
                          className="px-3 py-1.5 bg-[#11161c] border border-[#1f2a36] text-[8px] font-black text-[#6c7b8b] rounded-md hover:text-blue-400 hover:border-blue-500/30 transition-all uppercase tracking-widest cursor-default shadow-sm"
                        >
                          {String(t)}
                        </span>
                      ));
                    })()}
                  </div>
                </div>

                {/* AI Summary Memo (NEW) */}
                <div className="bg-linear-to-br from-blue-600/10 to-transparent border border-blue-500/20 p-5 rounded-xl">
                  <h5 className="text-[8px] font-black text-blue-400 uppercase tracking-[0.3em] mb-2 flex items-center gap-2">
                    <FiInfo size={10} /> Neural Insight
                  </h5>
                  <p className="text-[9px] font-bold text-[#a0aec0] leading-relaxed">
                    {selectedLead?.aiSummary ||
                      "No AI summary available. Lead requires manual review or neural re-sync."}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
