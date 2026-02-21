"use client";

import React, { useRef, useEffect } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiChevronLeft,
  FiSend,
  FiZap,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { ChatLead, ChatSession, STATUS_CONFIG } from "@/types/chat";
import { MessageBubble } from "./MessageBubble";
import { motion, AnimatePresence } from "framer-motion";

interface FullChatTimelineProps {
  lead: ChatLead;
  session: ChatSession | null;
  onBack?: () => void;
}

export const FullChatTimeline: React.FC<FullChatTimelineProps> = ({
  lead,
  session,
  onBack,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const status = STATUS_CONFIG[lead.status] || STATUS_CONFIG.NEW;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [session]);

  if (!session) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-12 text-center bg-gray-50/10">
        <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800/50 rounded-[2rem] flex items-center justify-center text-gray-300 mb-8 animate-pulse">
          <FiZap size={40} />
        </div>
        <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2 uppercase tracking-tight">
          Select a Session
        </h3>
        <p className="text-sm text-gray-500 font-medium max-w-xs">
          Please select a session from the list to view the full chat history.
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-full bg-white/20 dark:bg-transparent overflow-hidden">
      {/* Sticky Header */}
      <div className="h-24 shrink-0 px-8 flex items-center justify-between border-b border-gray-100 dark:border-gray-800/50 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl z-20">
        <div className="flex items-center gap-5">
          {onBack && (
            <button
              onClick={onBack}
              className="md:hidden p-3 bg-gray-100 dark:bg-gray-800 rounded-2xl hover:bg-gray-200 transition-colors"
            >
              <FiChevronLeft size={20} />
            </button>
          )}

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <h1 className="text-lg font-black uppercase text-gray-900 dark:text-white tracking-tight leading-none">
                {lead.name}
              </h1>
              <span
                className={`px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest ${status.bg} ${status.color} border ${status.border}`}
              >
                {status.label}
              </span>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
              <span className="flex items-center gap-1.5">
                <FiMail className="text-blue-500" /> {lead.email}
              </span>
              <span className="flex items-center gap-1.5">
                <FiPhone className="text-blue-500" /> {lead.phone}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${lead.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl hover:bg-emerald-500 hover:text-white transition-all font-black text-[10px] uppercase tracking-widest"
          >
            <FaWhatsapp size={16} /> WhatsApp
          </a>
          <button className="p-2.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-600 hover:text-white transition-all">
            <FiZap size={18} />
          </button>
        </div>
      </div>

      {/* Chat Timeline */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-8 space-y-6 no-scrollbar bg-gray-50/10 dark:bg-black/5"
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={session.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="flex justify-center my-8">
              <span className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800/50 rounded-full text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] border border-gray-200 dark:border-gray-700">
                Session started on{" "}
                {new Date(session.createdAt).toLocaleString()}
              </span>
            </div>

            {session.messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Input Area (Mock for CRM view) */}
      <div className="p-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800/50">
        <div className="relative group max-w-4xl mx-auto">
          <input
            type="text"
            placeholder="Log an internal note or reply through official channels..."
            className="w-full bg-gray-100 dark:bg-gray-800/50 border-2 border-transparent focus:border-blue-500/20 pl-6 pr-14 py-4 rounded-2xl text-sm font-bold outline-none transition-all placeholder:text-gray-500"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 hover:scale-105 transition-all">
            <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};
