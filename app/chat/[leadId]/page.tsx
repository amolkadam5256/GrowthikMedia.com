"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { FiChevronLeft, FiCpu, FiLoader } from "react-icons/fi";
import { ChatLead, ChatSession } from "@/types/chat";
import { SessionsSidebar } from "@/components/AdminComponents/ai/details/SessionsSidebar";
import { FullChatTimeline } from "@/components/AdminComponents/ai/details/FullChatTimeline";
import { LeadProfilePanel } from "@/components/AdminComponents/ai/details/LeadProfilePanel";

export default function ChatLeadDetailsPage() {
  const { leadId } = useParams();
  const router = useRouter();
  const [lead, setLead] = useState<ChatLead | null>(null);
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (leadId) {
      fetchLeadDetails();
    }
  }, [leadId]);

  const fetchLeadDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/chat/logs/${leadId}`);
      if (!response.ok) throw new Error("Failed to fetch lead details");
      const data = await response.json();
      setLead(data);
      if (data.sessions && data.sessions.length > 0) {
        setSelectedSessionId(data.sessions[0].id);
      }
    } catch (err) {
      console.error("Error fetching lead:", err);
      setError("Could not load lead information.");

      // Fallback data logic if API fails
      const fallbackLead: ChatLead = {
        id: leadId as string,
        name: "Shabdbramh and Co",
        email: "shabdbramh.co@gmail.com",
        phone: "919876543210",
        status: "NEW",
        createdAt: new Date().toISOString(),
        score: 59,
        sessions: [
          {
            id: "s1",
            createdAt: new Date().toISOString(),
            messages: [
              {
                id: "m1",
                text: "Hello, I am interested in your services.",
                sender: "user",
                createdAt: new Date().toISOString(),
              },
              {
                id: "m2",
                text: "Welcome! How can we help you today?",
                sender: "bot",
                createdAt: new Date(Date.now() + 30000).toISOString(),
              },
            ],
          },
        ],
      };
      setLead(fallbackLead);
      setSelectedSessionId(fallbackLead.sessions[0].id);
    } finally {
      setLoading(false);
    }
  };

  const selectedSession =
    lead?.sessions.find((s) => s.id === selectedSessionId) || null;

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-50/50 dark:bg-gray-950/50 backdrop-blur-xl">
        <div className="flex flex-col items-center gap-4">
          <FiLoader className="w-12 h-12 text-blue-500 animate-spin" />
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest animate-pulse">
            Syncing Neural Intelligence...
          </p>
        </div>
      </div>
    );
  }

  if (!lead) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="text-center">
          <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase mb-4">
            Intelligence Node Not Found
          </h2>
          <button
            onClick={() => router.back()}
            className="px-6 py-3 bg-blue-600 text-white rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl shadow-blue-500/20"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-black overflow-hidden selection:bg-blue-500 selection:text-white">
      {/* Top Navigation Bar */}
      <header className="h-16 shrink-0 bg-white/80 dark:bg-gray-900/80 border-b border-gray-100 dark:border-gray-800 px-6 flex items-center justify-between z-30 backdrop-blur-md">
        <div className="flex items-center gap-6">
          <button
            onClick={() => router.back()}
            className="p-2.5 bg-gray-100 dark:bg-gray-800 rounded-xl hover:scale-110 transition-all text-gray-600 dark:text-gray-400"
          >
            <FiChevronLeft size={20} />
          </button>
          <div className="h-8 w-px bg-gray-200 dark:bg-gray-800" />
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg">
              <FiCpu size={18} />
            </div>
            <span className="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white">
              Neural Command Center
            </span>
          </div>
        </div>

        <div className="hidden md:block">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
            Real-time Synchronization Active
          </span>
        </div>
      </header>

      {/* Main 3-Column Layout */}
      <main className="flex-1 flex overflow-hidden">
        {/* Column 1: Sessions Sidebar */}
        <SessionsSidebar
          sessions={lead.sessions}
          selectedSessionId={selectedSessionId}
          onSessionSelect={setSelectedSessionId}
        />

        {/* Column 2: Full Chat Timeline */}
        <FullChatTimeline
          lead={lead}
          session={selectedSession}
          onBack={() => {}}
        />

        {/* Column 3: Lead Intelligence Profile */}
        <LeadProfilePanel lead={lead} />
      </main>
    </div>
  );
}
