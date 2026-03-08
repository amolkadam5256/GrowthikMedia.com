"use client";

import React from "react";
import { Phone, Mail, MessageCircle, Calendar } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

export default function QuickContactCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-20">
      <h2 className="sr-only">Contact Methods</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 bg-white dark:bg-zinc-900 rounded-sm overflow-hidden transition-colors">
        {[
          {
            icon: Phone,
            title: "Call Us",
            desc: "+91 80557 54054",
            link: "tel:+918055754054",
            color: "text-blue-600",
          },
          {
            icon: Mail,
            title: "Email Us",
            desc: "info@growthikmedia.com",
            link: "mailto:info@growthikmedia.com",
            color: "text-red-600",
          },
          {
            icon: MessageCircle,
            title: "WhatsApp Chat",
            desc: "Start Conversation",
            link: CONTACT_INFO.social.whatsapp || "https://wa.me/918055754054",
            color: "text-green-600",
          },
          {
            icon: Calendar,
            title: "Book Meeting",
            desc: "Strategy Call",
            link: "#consultation",
            color: "text-purple-600",
          },
        ].map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            aria-label={`Contact us via ${item.title}`}
            className={`flex flex-col items-center justify-center text-center p-8 dark:border-white/20 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-white/5 group`}
          >
            <div
              className={`rounded-sm w-14 h-14 bg-black dark:bg-white flex items-center justify-center mb-6 group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform`}
            >
              <item.icon
                className={`w-6 h-6 ${item.color} dark:text-black`}
                strokeWidth={2.5}
              />
            </div>
            <h3 className="text-lg font-black text-black dark:text-white uppercase tracking-wider mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 font-bold text-sm tracking-wide">
              {item.desc}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
