"use client";

import React, { useState, useEffect } from "react";
import {
  MessageSquare,
  User,
  Calendar,
  ChevronRight,
  ChevronDown,
  Mail,
  Phone,
  Clock,
  Search,
  Bot,
  AlertTriangle,
  Flame,
  MapPin,
  DollarSign,
  Target,
  Activity,
  CheckCircle,
  XCircle,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatMessage {
  id: string;
  text: string;
  sender: string;
  createdAt: string;
}

interface ChatSession {
  id: string;
  createdAt: string;
  turningPoints?: any;
  messages: ChatMessage[];
}

interface ChatLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  status?: string;
  tags?: string;
  aiSummary?: string;
  intentScore?: number;
  intentCategory?: string;
  decisionStage?: string;
  sensitiveFlags?: any;
  createdAt: string;
  sessions: ChatSession[];
}

// --- AI INTELLIGENCE HEURISTICS ---
const computeIntelligence = (lead: ChatLead, session?: ChatSession) => {
  const allMessages = session
    ? session.messages
    : lead.sessions.flatMap((s) => s.messages);
  const userMessages = allMessages.filter((m) => m.sender === "user");
  const userTextMatch = allMessages.map((m) => m.text.toLowerCase()).join(" ");

  const industry = userTextMatch.includes("real estate")
    ? "Real Estate"
    : userTextMatch.includes("clinic")
      ? "Healthcare"
      : userTextMatch.includes("ecom")
        ? "E-commerce"
        : "Digital Services";

  let score = lead.intentScore || 0;
  let category = lead.intentCategory || "Cold";
  if (
    userTextMatch.includes("price") ||
    userTextMatch.includes("cost") ||
    userTextMatch.includes("start")
  )
    score += 40;
  if (
    userTextMatch.includes("service") ||
    userTextMatch.includes("help") ||
    userTextMatch.includes("grow")
  )
    score += 30;

  if (score > 60) category = "Hot";
  else if (score > 30) category = "Warm";

  const sensitiveDetected =
    userTextMatch.includes("phone number") ||
    userTextMatch.includes("email") ||
    userTextMatch.includes("personal") ||
    userTextMatch.includes("password") ||
    userTextMatch.includes("address") ||
    userTextMatch.includes("contact info");

  const buyingSignalsCount = (
    userTextMatch.match(
      /(price|cost|buy|start|how much|quote|proposal|grow)/g,
    ) || []
  ).length;
  const objectionCount = (
    userTextMatch.match(
      /(expensive|not sure|competitor|later|delay|stop|budget)/g,
    ) || []
  ).length;

  const recommendations = [];
  if (score > 60) recommendations.push("Offer Free Audit");
  else if (objectionCount > 0) recommendations.push("Send Case Study");
  if (userTextMatch.includes("web") || userTextMatch.includes("site"))
    recommendations.push("Push Website Development");
  if (recommendations.length === 0) recommendations.push("Schedule Intro Call");

  const isHighDepth = userMessages.length > 4;

  return {
    industry,
    goal: "Increase Lead Generation & Sales",
    painPoints:
      objectionCount > 0
        ? "Budget constraints or timing"
        : "Looking for reliable partner",
    recommendedService: recommendations[0],
    recommendations,
    score,
    intentLevel: category,
    buyingSignalsCount,
    responseDepth: isHighDepth
      ? "High"
      : userMessages.length > 2
        ? "Medium"
        : "Low",
    objectionCount,
    sensitiveDetected,
    isHighDepth,
    isPuneNode: userTextMatch.includes("pune") || lead.tags?.includes("pune"),
    isSeoIntent:
      userTextMatch.includes("seo") ||
      userTextMatch.includes("ranking") ||
      userTextMatch.includes("google"),
  };
};

const getMessageMarker = (text: string, isUser: boolean) => {
  if (!isUser) return null;
  const lower = text.toLowerCase();
  if (lower.match(/(expensive|not sure|competitor|later|delay|stop|budget)/))
    return {
      icon: AlertTriangle,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      label: "Objection",
    };
  if (lower.match(/(price|cost|buy|start|how much|quote|proposal)/))
    return {
      icon: Target,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      label: "Intent Increase",
    };
  if (lower.includes("?"))
    return {
      icon: Zap,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      label: "Question Asked",
    };
  return null;
};

export default function ChatLogsPage() {
  const [leads, setLeads] = useState<ChatLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedLead, setExpandedLead] = useState<string | null>(null);
  const [selectedSession, setSelectedSession] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const FILTER_OPTIONS = [
    "All",
    "HOT Leads",
    "Pune Node",
    "Asked Contact Info",
    "Requested Personal Info",
    "SEO Intent",
    "High Interaction Depth",
  ];

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      const response = await fetch("/api/chat/logs");
      const data = await response.json();
      setLeads(data);
    } catch (error) {
      console.error("Error fetching logs:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredLeads = leads.filter((lead) => {
    const matchSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm);
    if (!matchSearch) return false;

    if (activeFilter === "All") return true;
    const metrics = computeIntelligence(lead);

    switch (activeFilter) {
      case "HOT Leads":
        return metrics.intentLevel === "Hot";
      case "Pune Node":
        return metrics.isPuneNode;
      case "Asked Contact Info":
        return metrics.sensitiveDetected;
      case "Requested Personal Info":
        return metrics.sensitiveDetected;
      case "SEO Intent":
        return metrics.isSeoIntent;
      case "High Interaction Depth":
        return metrics.isHighDepth;
      default:
        return true;
    }
  });

  const selectedLeadObj = leads.find((l) =>
    l.sessions.some((s) => s.id === selectedSession),
  );
  const activeSessionObj = selectedLeadObj?.sessions.find(
    (s) => s.id === selectedSession,
  );
  const aiInsights = selectedLeadObj
    ? computeIntelligence(selectedLeadObj, activeSessionObj)
    : null;

  return (
    <div className="p-8 bg-(--background) min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-black text-(--text-primary) uppercase tracking-tighter">
              AI Chat{" "}
              <span className="text-(--color-primary)">Intelligence</span>
            </h1>
            <p className="text-(--text-secondary) text-sm mt-1">
              Review and analyze user conversations to optimize your growth
              strategy.
            </p>
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-(--text-secondary)" />
            <input
              type="text"
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-(--surface) border border-(--border) pl-10 pr-4 py-2 text-sm focus:border-(--color-primary) outline-none transition-all"
            />
          </div>
        </div>

        {/* SMART FILTER SYSTEM */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTER_OPTIONS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all border ${
                activeFilter === filter
                  ? "bg-(--color-primary) text-white border-(--color-primary)"
                  : "bg-transparent text-(--text-secondary) border-(--border) hover:border-(--text-secondary)"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-(--color-primary)"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* LEFT: Leads List */}
            <div className="lg:col-span-3 space-y-4 max-h-[75vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-(--border)">
              {filteredLeads.map((lead) => (
                <div
                  key={lead.id}
                  className={`border-2 transition-all duration-300 ${
                    expandedLead === lead.id
                      ? "border-(--color-primary) bg-(--surface)"
                      : "border-(--border) bg-(--surface)/50 hover:border-(--color-primary)/30"
                  }`}
                >
                  <button
                    onClick={() =>
                      setExpandedLead(expandedLead === lead.id ? null : lead.id)
                    }
                    className="w-full p-6 text-left"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-black text-sm text-(--text-primary) uppercase tracking-tight truncate max-w-[150px]">
                            {lead.name}
                          </h3>
                          {computeIntelligence(lead).intentLevel === "Hot" && (
                            <span className="text-[10px] bg-red-500/10 text-red-500 px-1.5 py-0.5 font-bold rounded">
                              HOT 🔥
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col gap-1 mt-1 text-[10px] text-(--text-secondary) break-all">
                          <span className="flex items-center gap-1 truncate">
                            <Mail className="w-3 h-3 shrink-0" /> {lead.email}
                          </span>
                          <span className="flex items-center gap-1 truncate">
                            <Phone className="w-3 h-3 shrink-0" /> {lead.phone}
                          </span>
                          {computeIntelligence(lead).sensitiveDetected && (
                            <span className="flex items-center gap-1 text-amber-500 font-bold mt-1">
                              <AlertTriangle className="w-3 h-3" /> Sensitive
                              Data Ref
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="block text-[9px] font-bold text-(--text-secondary)/60 uppercase">
                          {new Date(lead.createdAt).toLocaleDateString()}
                        </span>
                        <div className="mt-2 text-(--color-primary)">
                          {expandedLead === lead.id ? (
                            <ChevronDown className="w-5 h-5" />
                          ) : (
                            <ChevronRight className="w-5 h-5" />
                          )}
                        </div>
                      </div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedLead === lead.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-(--background)/30 border-t border-(--border)"
                      >
                        <div className="p-4 space-y-2">
                          <p className="text-[10px] font-black text-(--text-secondary) uppercase mb-3 px-2">
                            Select Session ({lead.sessions.length})
                          </p>
                          {lead.sessions.map((session, idx) => (
                            <button
                              key={session.id}
                              onClick={() => setSelectedSession(session.id)}
                              className={`w-full p-4 flex justify-between items-center transition-all ${
                                selectedSession === session.id
                                  ? "bg-(--color-primary) text-white"
                                  : "hover:bg-(--color-primary)/10 text-(--text-primary)"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <MessageSquare className="w-4 h-4" />
                                <span className="text-xs font-bold">
                                  Session {lead.sessions.length - idx}
                                </span>
                              </div>
                              <span className="text-[9px] opacity-70">
                                {new Date(session.createdAt).toLocaleString()}
                              </span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {filteredLeads.length === 0 && (
                <div className="text-center py-12 bg-(--surface) border-2 border-dashed border-(--border)">
                  <p className="text-(--text-secondary) text-sm font-medium">
                    No leads found matching your search.
                  </p>
                </div>
              )}
            </div>

            {/* CENTER: Chat Timeline Visualization */}
            <div className="lg:col-span-6">
              {selectedSession && activeSessionObj ? (
                <div className="bg-(--surface) border border-(--border) h-[75vh] flex flex-col shadow-xl">
                  {/* Privacy & Safety Monitor Banner */}
                  {aiInsights?.sensitiveDetected && (
                    <div className="bg-amber-500/10 border-b border-amber-500/30 p-2 flex items-center justify-center gap-2 text-amber-500 text-[11px] font-bold uppercase tracking-widest relative z-10 w-full">
                      <AlertTriangle className="w-4 h-4" />
                      ⚠️ Sensitive Data Request Detected
                    </div>
                  )}

                  <div className="p-4 border-b border-(--border) flex justify-between items-center bg-(--background)/50 backdrop-blur-md">
                    <div>
                      <h3 className="font-black text-(--text-primary) uppercase tracking-tight text-sm">
                        Session Timeline
                      </h3>
                      <p className="text-[9px] text-(--text-secondary) font-bold mt-0.5 uppercase tracking-widest">
                        Analysing user intent & interactions
                      </p>
                    </div>
                    <div className="flex items-center gap-2 bg-(--background) px-3 py-1.5 text-[9px] font-bold text-(--text-secondary) uppercase rounded-sm border border-(--border)">
                      <Clock className="w-3 h-3" />{" "}
                      {new Date(
                        activeSessionObj.createdAt,
                      ).toLocaleTimeString()}
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-(--border) bg-linear-to-b from-(--background)/10 to-(--background)/40 relative">
                    {/* Timeline Trace Line */}
                    <div className="absolute left-10 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-(--border) to-transparent opacity-50 z-0 hidden md:block" />

                    {activeSessionObj.messages.map((msg, index) => {
                      const marker = getMessageMarker(
                        msg.text,
                        msg.sender === "user",
                      );
                      const isExitPoint =
                        index === activeSessionObj.messages.length - 1 &&
                        msg.sender === "user";

                      return (
                        <div
                          key={msg.id}
                          className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} relative z-10 group`}
                        >
                          <div
                            className={`flex gap-3 max-w-[85%] ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"} relative`}
                          >
                            {/* MARKER INJECTION */}
                            {marker && (
                              <div
                                className={`absolute ${msg.sender === "user" ? "-left-6" : "-right-6"} top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:flex items-center gap-1.5 ${marker.bg} px-2 py-1 rounded text-[9px] font-black uppercase tracking-wider shadow-sm z-20`}
                              >
                                <marker.icon
                                  className={`w-3 h-3 ${marker.color}`}
                                />
                                <span className={marker.color}>
                                  {marker.label}
                                </span>
                              </div>
                            )}

                            {isExitPoint && (
                              <div className="absolute top-1/2 -translate-y-1/2 -left-32 md:-left-8 flex flex-col items-end opacity-60">
                                <span className="text-[8px] bg-red-500/10 text-red-500 px-1 py-0.5 font-bold uppercase whitespace-nowrap">
                                  🔴 Exit Point
                                </span>
                              </div>
                            )}

                            <div
                              className={`w-7 h-7 rounded-sm flex items-center justify-center shrink-0 border ${
                                msg.sender === "user"
                                  ? "bg-(--background) border-(--border) text-(--text-primary)"
                                  : "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20"
                              }`}
                            >
                              {msg.sender === "user" ? (
                                <User className="w-4 h-4" />
                              ) : (
                                <Bot className="w-4 h-4" />
                              )}
                            </div>
                            <div className={`mt-1`}>
                              <div
                                className={`p-3 text-[13px] leading-relaxed relative ${
                                  msg.sender === "user"
                                    ? "bg-(--surface) border border-(--border) text-(--text-primary)"
                                    : "bg-white dark:bg-zinc-800 border border-(--color-primary)/20 text-(--text-primary) shadow-sm"
                                }`}
                              >
                                {msg.text}
                                {/* Inline small markers on mobile view */}
                                {marker && (
                                  <div className="md:hidden flex items-center gap-1 mt-2 mb-1">
                                    <marker.icon
                                      className={`w-3 h-3 ${marker.color}`}
                                    />
                                    <span
                                      className={`text-[9px] font-black uppercase ${marker.color}`}
                                    >
                                      {marker.label}
                                    </span>
                                  </div>
                                )}
                              </div>
                              <span className="text-[8px] text-(--text-secondary) opacity-50 mt-1 block px-1 uppercase font-bold text-right">
                                {new Date(msg.createdAt).toLocaleTimeString(
                                  [],
                                  { hour: "2-digit", minute: "2-digit" },
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="bg-(--surface) border border-dashed border-(--border) h-[75vh] flex flex-col justify-center items-center text-center p-8">
                  <div className="w-16 h-16 bg-(--border)/30 rounded flex items-center justify-center mb-6">
                    <MessageSquare className="w-8 h-8 text-(--text-secondary) opacity-30" />
                  </div>
                  <h3 className="font-black text-(--text-primary) uppercase tracking-tighter text-lg mb-2">
                    No Session Selected
                  </h3>
                  <p className="text-xs text-(--text-secondary) max-w-xs leading-relaxed">
                    Select a lead and their corresponding session from the left
                    to view the full chat timeline and transcript.
                  </p>
                </div>
              )}
            </div>

            {/* RIGHT: Lead Intelligence Panel */}
            <div className="lg:col-span-3">
              {aiInsights ? (
                <div className="space-y-4 max-h-[75vh] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-(--border)">
                  {/* Top Badges Row */}
                  <div className="flex gap-2 mb-4 w-full">
                    {aiInsights.intentLevel === "Hot" && (
                      <div className="flex-1 bg-red-500/10 border border-red-500/20 text-red-500 py-1.5 flex items-center justify-center gap-1.5 text-[9px] font-black uppercase shadow-sm">
                        <Flame className="w-3 h-3" /> HOT 🔥
                      </div>
                    )}
                    {aiInsights.isPuneNode && (
                      <div className="flex-1 bg-blue-500/10 border border-blue-500/20 text-blue-500 py-1.5 flex items-center justify-center gap-1.5 text-[9px] font-black uppercase shadow-sm">
                        <MapPin className="w-3 h-3" /> LOCAL 📍
                      </div>
                    )}
                    {aiInsights.buyingSignalsCount > 0 && (
                      <div className="flex-1 bg-green-500/10 border border-green-500/20 text-green-500 py-1.5 flex items-center justify-center gap-1.5 text-[9px] font-black uppercase shadow-sm">
                        <DollarSign className="w-3 h-3" /> READY 💰
                      </div>
                    )}
                  </div>

                  {/* 1. AI Lead Summary */}
                  <div className="bg-(--surface) border border-(--border) p-5">
                    <h3 className="text-xs font-black text-(--text-primary) uppercase tracking-widest border-b border-(--border) pb-3 mb-4 flex items-center gap-2">
                      <Bot className="w-4 h-4 text-blue-500" /> AI Summary
                    </h3>
                    <div className="space-y-4 text-xs">
                      <div>
                        <span className="block text-(--text-secondary) text-[9px] uppercase font-bold mb-1">
                          Industry Detected
                        </span>
                        <div className="font-semibold text-(--text-primary)">
                          {aiInsights.industry}
                        </div>
                      </div>
                      <div>
                        <span className="block text-(--text-secondary) text-[9px] uppercase font-bold mb-1">
                          Main Goal
                        </span>
                        <div className="font-semibold text-(--text-primary)">
                          {aiInsights.goal}
                        </div>
                      </div>
                      <div>
                        <span className="block text-(--text-secondary) text-[9px] uppercase font-bold mb-1">
                          Pain Points
                        </span>
                        <div className="font-semibold text-amber-500">
                          {aiInsights.painPoints}
                        </div>
                      </div>
                      <div>
                        <span className="block text-(--text-secondary) text-[9px] uppercase font-bold mb-1">
                          Recommended Service
                        </span>
                        <div className="font-semibold text-blue-500">
                          {aiInsights.recommendedService}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2. Conversation Intelligence Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-(--surface) border border-(--border) p-4 flex flex-col items-center text-center">
                      <Flame className="w-5 h-5 text-red-500 mb-2" />
                      <span className="text-[9px] font-bold text-(--text-secondary) uppercase mb-1">
                        {aiInsights.intentLevel} Intent
                      </span>
                      <span className="text-lg font-black text-(--text-primary)">
                        {aiInsights.score}%
                      </span>
                    </div>
                    <div className="bg-(--surface) border border-(--border) p-4 flex flex-col items-center text-center">
                      <Target className="w-5 h-5 text-emerald-500 mb-2" />
                      <span className="text-[9px] font-bold text-(--text-secondary) uppercase mb-1">
                        Signals
                      </span>
                      <span className="text-lg font-black text-(--text-primary)">
                        {aiInsights.buyingSignalsCount}
                      </span>
                    </div>
                    <div className="bg-(--surface) border border-(--border) p-4 flex flex-col items-center text-center">
                      <Activity className="w-5 h-5 text-blue-500 mb-2" />
                      <span className="text-[9px] font-bold text-(--text-secondary) uppercase mb-1">
                        Response
                      </span>
                      <span className="text-sm font-black text-(--text-primary) mt-1">
                        {aiInsights.responseDepth} Depth
                      </span>
                    </div>
                    <div className="bg-(--surface) border border-(--border) p-4 flex flex-col items-center text-center">
                      <AlertTriangle
                        className={`w-5 h-5 mb-2 ${aiInsights.objectionCount > 0 ? "text-amber-500" : "text-gray-400"}`}
                      />
                      <span className="text-[9px] font-bold text-(--text-secondary) uppercase mb-1">
                        Objections
                      </span>
                      <span className="text-lg font-black text-(--text-primary)">
                        {aiInsights.objectionCount}
                      </span>
                    </div>
                  </div>

                  {/* 3. Neural Recommendations */}
                  <div className="bg-(--surface) border border-(--border) p-5">
                    <h3 className="text-xs font-black text-(--text-primary) uppercase tracking-widest border-b border-(--border) pb-3 mb-4 flex items-center gap-2">
                      <Target className="w-4 h-4 text-emerald-500" /> Neural
                      Actions
                    </h3>
                    <div className="space-y-2">
                      {aiInsights.recommendations.map((rec, i) => (
                        <div
                          key={i}
                          className="flex flex-col border border-(--border) bg-(--background)/30 p-3 hover:border-emerald-500/50 cursor-pointer transition-colors group"
                        >
                          <span className="text-xs font-bold text-(--text-primary) flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-emerald-500 group-hover:scale-110 transition-transform" />
                            {rec}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-(--surface) border border-dashed border-(--border) h-[75vh] flex flex-col justify-center items-center text-center p-6">
                  <Bot className="w-8 h-8 text-(--text-secondary) opacity-30 mb-4" />
                  <h3 className="font-black text-(--text-primary) uppercase tracking-tighter text-sm mb-2">
                    Intelligence Waiting
                  </h3>
                  <p className="text-[10px] text-(--text-secondary) max-w-xs">
                    Select a Lead session to generate real-time AI metrics and
                    neural routing recommendations.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
