"use client";
import React, { useState } from "react";
import {
  Share2,
  Twitter,
  Linkedin,
  Link2,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const platforms = [
    {
      name: "Twitter / X",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`,
      color: "#000000",
      bg: "#f0f0f0",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encoded}&title=${encodedTitle}`,
      color: "#0077b5",
      bg: "#e8f4fb",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/?text=${encodedTitle}%20${encoded}`,
      color: "#25D366",
      bg: "#e8fef0",
    },
  ];

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="flex items-center gap-2 text-sm font-bold text-(--text-secondary)">
        <Share2 className="w-4 h-4" />
        Share
      </span>

      {platforms.map((p) => (
        <a
          key={p.name}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${p.name}`}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all hover:scale-105 hover:shadow-md"
          style={{
            backgroundColor: p.bg,
            color: p.color,
          }}
        >
          <p.icon className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{p.name}</span>
        </a>
      ))}

      {/* Copy link */}
      <button
        onClick={copyLink}
        className="flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-black transition-all hover:scale-105 active:scale-95 bg-linear-to-r from-primary to-rose-600 text-white shadow-lg shadow-primary/20"
        aria-label="Copy link"
      >
        {copied ? (
          <>
            <CheckCircle2 className="w-4 h-4" />
            <span>Link Copied!</span>
          </>
        ) : (
          <>
            <Link2 className="w-4 h-4" />
            <span>Copy Link</span>
          </>
        )}
      </button>
    </div>
  );
}
