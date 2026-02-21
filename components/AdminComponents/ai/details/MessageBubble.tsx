"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChatMessage } from "@/types/chat";

interface MessageBubbleProps {
  message: ChatMessage;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === "user";

  return (
    <motion.div
      initial={{ opacity: 0, x: isUser ? 20 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[75%] flex flex-col ${isUser ? "items-end" : "items-start"} gap-2`}
      >
        <div
          className={`p-4 rounded-2xl text-xs font-bold leading-relaxed shadow-sm ${
            isUser
              ? "bg-gray-900 dark:bg-white text-white dark:text-gray-950 rounded-tr-none"
              : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-100 dark:border-gray-700/50 rounded-tl-none"
          }`}
        >
          {message.text}
        </div>
        <span className="text-[8px] font-black text-gray-400 uppercase tracking-[0.2em]">
          {new Date(message.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </span>
      </div>
    </motion.div>
  );
};
