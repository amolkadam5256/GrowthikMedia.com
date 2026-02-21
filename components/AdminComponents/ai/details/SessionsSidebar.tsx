"use client";

import React from "react";
import { FiClock, FiMessageSquare, FiChevronRight } from "react-icons/fi";
import { ChatSession } from "@/types/chat";
import { motion } from "framer-motion";

interface SessionsSidebarProps {
  sessions: ChatSession[];
  selectedSessionId: string | null;
  onSessionSelect: (sessionId: string) => void;
}

export const SessionsSidebar: React.FC<SessionsSidebarProps> = ({
  sessions,
  selectedSessionId,
  onSessionSelect,
}) => {
  // Sort sessions newest first
  const sortedSessions = [...sessions].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  return (
    <div className="w-full md:w-80 shrink-0 flex flex-col bg-gray-50/30 dark:bg-black/10 border-r border-gray-100 dark:border-gray-800/50 overflow-hidden h-full">
      <div className="p-6 border-b border-gray-100 dark:border-gray-800/50">
        <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-1">
          Chat Sessions
        </h3>
        <p className="text-[10px] font-bold text-gray-500 uppercase">
          {sessions.length} interactions found
        </p>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar p-3 space-y-2">
        {sortedSessions.map((session) => {
          const isSelected = selectedSessionId === session.id;
          const lastMessage = session.messages[session.messages.length - 1];
          const messageCount = session.messages.length;

          return (
            <motion.button
              layout
              key={session.id}
              onClick={() => onSessionSelect(session.id)}
              className={`w-full p-4 rounded-2xl text-left transition-all group relative flex flex-col gap-2 ${
                isSelected
                  ? "bg-white dark:bg-gray-800 shadow-xl ring-1 ring-blue-500/10"
                  : "hover:bg-white/50 dark:hover:bg-gray-900/50"
              }`}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div
                    className={`p-2 rounded-lg ${
                      isSelected
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-400"
                    } transition-colors`}
                  >
                    <FiMessageSquare size={14} />
                  </div>
                  <span className="text-[10px] font-black text-gray-900 dark:text-gray-100 uppercase tracking-tight">
                    Session {session.id.slice(-4).toUpperCase()}
                  </span>
                </div>
                <div className="text-[9px] font-black text-blue-600 uppercase">
                  {messageCount} msgs
                </div>
              </div>

              {lastMessage && (
                <p className="text-[11px] font-medium text-gray-500 line-clamp-1 italic">
                  "{lastMessage.text}"
                </p>
              )}

              <div className="flex justify-between items-center mt-1">
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1">
                  <FiClock size={10} className="text-blue-500/50" />
                  {new Date(session.createdAt).toLocaleDateString()}{" "}
                  {new Date(session.createdAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
                <FiChevronRight
                  className={`transition-transform duration-300 ${
                    isSelected
                      ? "translate-x-1 text-blue-600"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
