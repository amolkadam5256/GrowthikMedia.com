"use client";

import React from "react";
import {
  FiPhone,
  FiHash,
  FiCalendar,
  FiSearch,
  FiInfo,
  FiZap,
  FiMessageSquare,
  FiActivity,
} from "react-icons/fi";
import { ChatLead } from "@/types/chat";

interface LeadProfilePanelProps {
  lead: ChatLead;
}

export const LeadProfilePanel: React.FC<LeadProfilePanelProps> = ({ lead }) => {
  // Calculations
  const totalSessions = lead.sessions.length;
  const totalMessages = lead.sessions.reduce(
    (acc, s) => acc + s.messages.length,
    0,
  );

  const allMessages = lead.sessions.flatMap((s) => s.messages);
  const sortedMessages = [...allMessages].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  const lastActiveDate =
    sortedMessages.length > 0
      ? new Date(sortedMessages[0].createdAt)
      : new Date(lead.createdAt);
  const firstSeenDate = new Date(lead.createdAt);

  const now = new Date();
  const diffInMinutes =
    (now.getTime() - lastActiveDate.getTime()) / (1000 * 60);
  const isInactive = diffInMinutes > 10;

  const behavioralTags = lead.tags
    ? lead.tags.split(",")
    : ["SEO Interested", "High Intent", "Pune Local"];

  return (
    <div className="hidden lg:flex w-80 h-full flex-col p-8 space-y-10 overflow-y-auto no-scrollbar bg-white dark:bg-gray-950 border-l border-gray-100 dark:border-gray-800/50">
      {/* Profile Header */}
      <div className="text-center group">
        <h3 className="text-lg font-black uppercase text-gray-900 dark:text-white tracking-widest">
          {lead.name}
        </h3>
        <p className="text-[10px] font-black text-gray-400 mt-2 uppercase tracking-widest">
          Lead Reference #{lead.id.slice(-6).toUpperCase()}
        </p>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/20">
          <span className="text-[8px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-1">
            Total Sessions
          </span>
          <span className="text-xl font-black text-blue-900 dark:text-blue-100">
            {totalSessions}
          </span>
        </div>
        <div className="p-4 bg-purple-50/50 dark:bg-purple-900/10 rounded-2xl border border-purple-100 dark:border-purple-900/20">
          <span className="text-[8px] font-black text-purple-600 dark:text-purple-400 uppercase tracking-widest block mb-1">
            Total Messages
          </span>
          <span className="text-xl font-black text-purple-900 dark:text-purple-100">
            {totalMessages}
          </span>
        </div>
      </div>

      {/* Bio Metrics */}
      <div className="space-y-6">
        <span className="text-[9px] font-black text-gray-300 dark:text-gray-600 uppercase tracking-[0.3em] flex items-center gap-2">
          <div className="h-px flex-1 bg-gray-100 dark:bg-gray-800" />
          Bio Metrics
        </span>

        <div className="space-y-3">
          {[
            {
              icon: FiPhone,
              label: "Contact",
              value: lead.phone,
            },
            {
              icon: FiMessageSquare,
              label: "Last Active",
              value: lastActiveDate.toLocaleString([], {
                dateStyle: "short",
                timeStyle: "short",
              }),
            },
            {
              icon: FiCalendar,
              label: "First Seen",
              value: firstSeenDate.toLocaleDateString(),
            },
            {
              icon: FiActivity,
              label: "Lead Score",
              value: `${lead.score || 0}% Probability`,
              highlight: true,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 bg-gray-50/50 dark:bg-gray-800/30 rounded-2xl border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all"
            >
              <item.icon
                className={item.highlight ? "text-blue-600" : "text-blue-500"}
                size={14}
              />
              <div className="flex flex-col">
                <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">
                  {item.label}
                </span>
                <span
                  className={`text-[11px] font-black ${item.highlight ? "text-blue-600 dark:text-blue-400" : "text-gray-800 dark:text-gray-200"}`}
                >
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Behavioral Tags */}
      <div className="space-y-4">
        <span className="text-[9px] font-black text-gray-300 dark:text-gray-600 uppercase tracking-[0.3em] flex items-center gap-2">
          <div className="h-px flex-1 bg-gray-100 dark:bg-gray-800" />
          Neural Tags
        </span>
        <div className="flex flex-wrap gap-2">
          {behavioralTags.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800/50 text-[9px] font-black text-gray-500 hover:text-blue-600 border border-gray-100 dark:border-gray-800 rounded-lg shadow-xs uppercase tracking-tight transition-all cursor-default"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Action Button */}
      {isInactive && (
        <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-blue-500/20 hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-2 mt-auto">
          <FiZap size={14} /> Message Now
        </button>
      )}
    </div>
  );
};
