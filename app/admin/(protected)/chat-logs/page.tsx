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
  messages: ChatMessage[];
}

interface ChatLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  sessions: ChatSession[];
}

export default function ChatLogsPage() {
  const [leads, setLeads] = useState<ChatLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedLead, setExpandedLead] = useState<string | null>(null);
  const [selectedSession, setSelectedSession] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm),
  );

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

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-(--color-primary)"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Leads List */}
            <div className="lg:col-span-5 space-y-4 max-h-[70vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-(--border)">
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
                      <div>
                        <h3 className="font-black text-lg text-(--text-primary) uppercase tracking-tight">
                          {lead.name}
                        </h3>
                        <div className="flex flex-wrap gap-4 mt-2 text-xs text-(--text-secondary)">
                          <span className="flex items-center gap-1">
                            <Mail className="w-3 h-3" /> {lead.email}
                          </span>
                          <span className="flex items-center gap-1">
                            <Phone className="w-3 h-3" /> {lead.phone}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="block text-[10px] font-bold text-(--text-secondary)/60 uppercase">
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

            {/* Conversation View */}
            <div className="lg:col-span-7">
              {selectedSession ? (
                <div className="bg-(--surface) border-2 border-(--border) h-[70vh] flex flex-col">
                  <div className="p-6 border-b border-(--border) flex justify-between items-center">
                    <div>
                      <h3 className="font-black text-(--text-primary) uppercase tracking-tight">
                        Transcript Details
                      </h3>
                      <p className="text-[10px] text-(--text-secondary) font-bold mt-1 uppercase tracking-widest">
                        Analysing user intent & interactions
                      </p>
                    </div>
                    <div className="flex items-center gap-2 bg-(--background) px-3 py-1 border border-(--border) text-[9px] font-bold text-(--text-secondary) uppercase">
                      <Clock className="w-3 h-3" />{" "}
                      {new Date(
                        leads
                          .find((l) =>
                            l.sessions.some((s) => s.id === selectedSession),
                          )
                          ?.sessions.find((s) => s.id === selectedSession)
                          ?.createdAt || "",
                      ).toLocaleTimeString()}
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-(--border) bg-(--background)/20">
                    {leads
                      .find((l) =>
                        l.sessions.some((s) => s.id === selectedSession),
                      )
                      ?.sessions.find((s) => s.id === selectedSession)
                      ?.messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`flex gap-4 max-w-[85%] ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                          >
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                                msg.sender === "user"
                                  ? "bg-(--border) text-(--text-secondary)"
                                  : "bg-(--color-primary) text-white"
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
                                className={`p-4 text-sm leading-relaxed border shadow-sm ${
                                  msg.sender === "user"
                                    ? "bg-(--surface) border-(--border) text-(--text-primary)"
                                    : "bg-white dark:bg-zinc-800 border-(--color-primary)/20 text-(--text-primary)"
                                }`}
                              >
                                {msg.text}
                              </div>
                              <span className="text-[8px] text-(--text-secondary) opacity-50 mt-1 block px-2 uppercase font-bold">
                                {new Date(msg.createdAt).toLocaleTimeString(
                                  [],
                                  { hour: "2-digit", minute: "2-digit" },
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ) : (
                <div className="bg-(--surface) border-2 border-dashed border-(--border) h-[70vh] flex flex-col justify-center items-center text-center p-8">
                  <div className="w-20 h-20 bg-(--border)/30 rounded-full flex items-center justify-center mb-6">
                    <MessageSquare className="w-10 h-10 text-(--text-secondary) opacity-30" />
                  </div>
                  <h3 className="font-black text-(--text-primary) uppercase tracking-tighter text-xl mb-2">
                    No Session Selected
                  </h3>
                  <p className="text-sm text-(--text-secondary) max-w-xs">
                    Select a lead and their corresponding session from the left
                    to view the full conversation transcript.
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
