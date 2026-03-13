"use client";

import React from "react";
import { Phone, Mail, MessageCircle, Calendar } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

export default function QuickContactCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-20">
      <h2 className="sr-only">Contact Methods</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-colors">
        {[
          {
            icon: Phone,
            title: "Call Us",
            desc: "+91 80557 54054",
            link: "tel:+918055754054",
            color: "text-blue-600",
            bg: "bg-blue-600/10",
          },
          {
            icon: Mail,
            title: "Email Us",
            desc: "info@growthikmedia.com",
            link: "mailto:info@growthikmedia.com",
            color: "text-red-600",
            bg: "bg-red-600/10",
          },
          {
            icon: MessageCircle,
            title: "WhatsApp Chat",
            desc: "Start Conversation",
            link: CONTACT_INFO.social.whatsapp || "https://wa.me/918055754054",
            color: "text-green-600",
            bg: "bg-green-600/10",
          },
          {
            icon: Calendar,
            title: "Book Meeting",
            desc: "Strategy Call",
            link: "#consultation",
            color: "text-purple-600",
            bg: "bg-purple-600/10",
          },
        ].map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            aria-label={`Contact us via ${item.title}`}
            className="flex flex-col items-center justify-center text-center p-8 bg-(--surface) border border-(--border) rounded-2xl transition-all duration-300 hover:border-red-600/50 hover:shadow-xl hover:-translate-y-1 group"
          >
            <div
              className={`rounded-xl w-14 h-14 ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
            >
              <item.icon
                className={`w-6 h-6 ${item.color}`}
                strokeWidth={2.5}
              />
            </div>
            <h3 className="text-lg font-black text-(--text-primary) uppercase tracking-wider mb-2">
              {item.title}
            </h3>
            <p className="text-(--text-secondary) font-bold text-sm tracking-wide">
              {item.desc}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
