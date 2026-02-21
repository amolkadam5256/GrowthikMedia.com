"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  Minus,
  Maximize2,
  Headphones,
} from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

const INITIAL_MESSAGES: Message[] = [];

const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(true);
  const [leadData, setLeadData] = useState({ name: "", email: "", phone: "" });
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  // Load existing session/lead from localStorage to pre-fill but NOT skip the form
  useEffect(() => {
    const savedLead = localStorage.getItem("growthik_chat_lead");
    const savedSession = localStorage.getItem("growthik_chat_session");
    if (savedLead && savedSession) {
      const parsedLead = JSON.parse(savedLead);
      setLeadData(parsedLead);
      setSessionId(savedSession);
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, showLeadForm]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadData.name || !leadData.email || !leadData.phone) return;

    setIsSubmittingLead(true);
    try {
      const response = await fetch("/api/chat/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData),
      });
      const data = await response.json();
      if (data.sessionId) {
        setSessionId(data.sessionId);
        setShowLeadForm(false);
        localStorage.setItem("growthik_chat_lead", JSON.stringify(leadData));
        localStorage.setItem("growthik_chat_session", data.sessionId);

        // Add personalized welcome message
        const welcomeMsg: Message = {
          id: "welcome-" + Date.now(),
          text: `Awesome to have you here, ${leadData.name.split(" ")[0]}! Growthik AI is ready to scale your business. What's on your mind today?`,
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages([welcomeMsg]);
      }
    } catch (error) {
      console.error("Lead Error:", error);
    } finally {
      setIsSubmittingLead(false);
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputValue("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages,
          sessionId: sessionId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to get AI response");
      }

      if (data.reply) {
        const botResponse: Message = {
          id: Date.now().toString(),
          text: data.reply,
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
      } else {
        throw new Error("No reply received from AI");
      }
    } catch (error: any) {
      console.error("Chat Error:", error);
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: `Error: ${error?.message || "Something went wrong. Please try again or contact us directly!"}`,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-10 md:right-6 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.95,
              transformOrigin: "bottom right",
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-0 left-0 w-full h-[85vh] md:absolute md:bottom-20 md:right-0 md:left-auto md:w-[400px] md:h-[500px] bg-(--surface) border border-(--border) shadow-2xl flex flex-col overflow-hidden rounded-t-2xl md:rounded-xl"
          >
            {/* Chat Header */}
            <div className="bg-(--color-primary) p-4 flex items-center justify-between border-b border-white/10 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center relative">
                  <Bot className="w-6 h-6 text-white" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-(--color-primary) rounded-full shadow-lg" />
                </div>
                <div>
                  <h3 className="font-black uppercase tracking-widest text-xs">
                    Growthik AI
                  </h3>
                  <p className="text-[10px] opacity-80 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1.5 hover:bg-white/10 transition-colors rounded-lg">
                  <Minus className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5  transition-colors rounded-lg group/close"
                >
                  <X className="w-4 h-4 text-white group-hover/close:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-(--background)/50 scrollbar-thin scrollbar-thumb-(--border)"
            >
              {showLeadForm ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="h-full flex flex-col justify-center items-center text-center p-4"
                >
                  <div className="w-16 h-16 bg-(--color-primary)/10 rounded-full flex items-center justify-center mb-6">
                    <Sparkles className="w-8 h-8 text-(--color-primary)" />
                  </div>
                  <h4 className="text-xl font-black text-(--text-primary) uppercase tracking-tighter mb-2">
                    Unlock{" "}
                    <span className="text-(--color-primary)">Growthik AI</span>
                  </h4>
                  <p className="text-xs text-(--text-secondary) mb-8 max-w-[250px]">
                    Introduce yourself to start your strategic growth session.
                  </p>

                  <form
                    onSubmit={handleLeadSubmit}
                    className="w-full space-y-4"
                  >
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={leadData.name}
                      onChange={(e) =>
                        setLeadData({ ...leadData, name: e.target.value })
                      }
                      className="w-full bg-(--background) border border-(--border) px-4 py-3 text-sm focus:border-(--color-primary) outline-none transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={leadData.email}
                      onChange={(e) =>
                        setLeadData({ ...leadData, email: e.target.value })
                      }
                      className="w-full bg-(--background) border border-(--border) px-4 py-3 text-sm focus:border-(--color-primary) outline-none transition-all"
                    />
                    <input
                      type="tel"
                      placeholder="Contact Number"
                      required
                      value={leadData.phone}
                      onChange={(e) =>
                        setLeadData({ ...leadData, phone: e.target.value })
                      }
                      className="w-full bg-(--background) border border-(--border) px-4 py-3 text-sm focus:border-(--color-primary) outline-none transition-all"
                    />
                    <button
                      type="submit"
                      disabled={isSubmittingLead}
                      className="w-full bg-(--color-primary) text-white font-black uppercase tracking-widest text-xs py-4 hover:bg-(--color-primary-light) transition-all disabled:opacity-50"
                    >
                      {isSubmittingLead
                        ? "Initializing..."
                        : "Start Consultation"}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <>
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={
                        msg.sender === "user"
                          ? "flex justify-end"
                          : "flex justify-start"
                      }
                    >
                      <div
                        className={
                          msg.sender === "user"
                            ? "flex gap-3 max-w-[85%] flex-row-reverse"
                            : "flex gap-3 max-w-[85%] flex-row"
                        }
                      >
                        <div
                          className={
                            msg.sender === "user"
                              ? "w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-(--border)"
                              : "w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-(--color-primary)/10 text-(--color-primary)"
                          }
                        >
                          {msg.sender === "user" ? (
                            <User className="w-4 h-4" />
                          ) : (
                            <Bot className="w-4 h-4" />
                          )}
                        </div>
                        <div>
                          <div
                            className={
                              msg.sender === "user"
                                ? "p-3 text-sm leading-relaxed bg-(--color-primary) text-white"
                                : "p-3 text-sm leading-relaxed bg-(--surface) border border-(--border) text-(--text-primary)"
                            }
                          >
                            {msg.text}
                          </div>
                          <span className="text-[8px] text-(--text-secondary) mt-1 block px-1">
                            {msg.timestamp.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex gap-3 max-w-[85%] items-center">
                        <div className="w-8 h-8 rounded-full bg-(--color-primary)/10 text-(--color-primary) flex items-center justify-center">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div className="bg-(--surface) border border-(--border) p-3">
                          <div className="flex gap-1">
                            <span className="w-1.5 h-1.5 bg-(--text-secondary)/40 rounded-full animate-bounce" />
                            <span className="w-1.5 h-1.5 bg-(--text-secondary)/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                            <span className="w-1.5 h-1.5 bg-(--text-secondary)/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Input Area */}
            {!showLeadForm && (
              <div className="p-4 bg-(--surface) border-t border-(--border)">
                <div className="relative flex items-center gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Ask about pricing, services, or results..."
                    className="flex-1 bg-(--background) border border-(--border) px-4 py-3 text-sm focus:border-(--color-primary) outline-none transition-all pr-12"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                    className="absolute right-1 w-10 h-10 flex items-center justify-center bg-(--color-primary) text-white disabled:opacity-50 hover:bg-(--color-primary-light) transition-all"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-(--text-secondary) uppercase tracking-widest font-bold opacity-60 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> AI Engine v2.0
                    </span>
                  </div>
                  <p className="text-[9px] text-(--text-secondary)/60 italic">
                    Typing...
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
        }}
        className={`relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center group transition-all rounded-full ${
          isOpen
            ? "bg-black rounded-xl shadow-xl overflow-hidden hidden md:flex"
            : "bg-transparent drop-shadow-[0_0_20px_rgba(217,11,28,0.2)]"
        }`}
      >
        <div className="absolute inset-0 pointer-events-none" />

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <X className="w-8 h-8 text-white drop-shadow-lg" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="bot"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative z-10 flex flex-col items-center"
            >
              {/* Custom 3D Character Look */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-6 bg-(--color-primary) rounded-lg relative shadow-lg overflow-hidden mb-0.5 border border-white/10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1">
                    <motion.div
                      animate={{ scaleY: [1, 0.1, 1] }}
                      transition={{
                        repeat: Infinity,
                        duration: 4,
                        times: [0, 0.9, 1],
                      }}
                      className="w-1 h-1 bg-white"
                    />
                    <motion.div
                      animate={{ scaleY: [1, 0.1, 1] }}
                      transition={{
                        repeat: Infinity,
                        duration: 4,
                        times: [0, 0.9, 1],
                      }}
                      className="w-1 h-1 bg-white rounded-full shadow-[0_0_5px_white]"
                    />
                  </div>
                </div>
                <div className="w-10 h-4 bg-(--color-primary) rounded-md relative shadow-lg overflow-hidden flex items-center justify-center border border-white/10">
                  <div className="w-3 h-0.5 bg-white/30 rounded-full" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hover Text */}
        {!isOpen && (
          <div className="absolute right-full mr-4 bg-black text-white px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            Talk to AI
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-black rotate-45" />
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default AIChatBot;
