"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

interface NavItemData {
  label: string;
  href?: string;
  items?: NavItemData[];
  icon?: any;
  featured?: boolean;
  direction?: "left" | "right";
}

interface RecursiveNavItemProps {
  item: NavItemData;
  depth: number;
}

const RecursiveNavItem = ({ item, depth }: RecursiveNavItemProps) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [calculatedDirection, setCalculatedDirection] = useState<
    "left" | "right"
  >("right");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLLIElement>(null);
  const submenuRef = useRef<HTMLUListElement>(null);
  const hasChildren = item.items && item.items.length > 0;

  const isTopLevel = depth === 0;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-detect direction based on screen space
  useLayoutEffect(() => {
    if (isOpen && submenuRef.current && !isTopLevel) {
      const rect = submenuRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;

      if (rect.right > windowWidth - 20) {
        setCalculatedDirection("left");
      } else if (rect.left < 20) {
        setCalculatedDirection("right");
      } else {
        setCalculatedDirection(item.direction || "right");
      }
    }
  }, [isOpen, isTopLevel, item.direction]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const commonClass = `flex items-center justify-between w-full px-4 py-2.5 transition-all duration-200 rounded-lg group/link`;

  // Use CSS variables for theme stability
  const activeStyles =
    mounted && resolvedTheme === "dark"
      ? "bg-white/10 text-white"
      : "bg-[#F0F2FD] text-[#4F46E5]";

  // Idle styles use CSS variables from globals.css for automatic adaptation
  const idleStyles =
    "text-(--text-secondary) hover:bg-(--surface-secondary) dark:text-(--text-secondary) dark:hover:bg-white/5";

  const ItemContent = () => (
    <div className="flex items-center space-x-2.5">
      {item.icon && (
        <item.icon
          className={`transition-colors ${isTopLevel ? "text-[#D90B1C]" : "text-(--text-tertiary) group-hover/link:text-[#D90B1C]"}`}
        />
      )}
      <span className="font-medium whitespace-nowrap">{item.label}</span>
    </div>
  );

  return (
    <li
      ref={containerRef}
      className={`relative ${isTopLevel ? "" : "w-full"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.href ? (
        <Link
          href={item.href}
          className={`${commonClass} ${isTopLevel ? "text-sm tracking-tight px-3 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5" : `text-[14px] ${isOpen ? activeStyles : idleStyles}`}`}
        >
          <ItemContent />
          {hasChildren && !isTopLevel && (
            <FiChevronRight
              className={`ml-3 text-sm transition-transform ${isOpen ? "rotate-0 translate-x-1" : "opacity-40"}`}
            />
          )}
          {hasChildren && isTopLevel && (
            <FiChevronDown
              className={`ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          )}
        </Link>
      ) : (
        <button
          className={`${commonClass} ${isTopLevel ? "text-sm tracking-tight px-3 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5" : `text-[14px] ${isOpen ? activeStyles : idleStyles}`}`}
        >
          <ItemContent />
          {hasChildren && !isTopLevel && (
            <FiChevronRight
              className={`ml-3 text-sm transition-transform ${isOpen ? "rotate-0 translate-x-1" : "opacity-40"}`}
            />
          )}
          {hasChildren && isTopLevel && (
            <FiChevronDown
              className={`ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          )}
        </button>
      )}

      {/* Underline for top-level hover state */}
      {isTopLevel && (
        <div
          className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] bg-[#D90B1C] transition-all duration-300 ${isOpen ? "w-4/5" : "w-0"}`}
        ></div>
      )}

      {/* Recursive Submenu */}
      {hasChildren && isOpen && (
        <ul
          ref={submenuRef}
          className={`absolute z-100 min-w-[240px] p-2 bg-(--background) border border-(--border-light) shadow-2xl rounded-xl animate-fadeIn ${
            isTopLevel
              ? "top-full left-1/2 -translate-x-1/2 mt-4"
              : calculatedDirection === "left"
                ? "top-0 right-[calc(100%+2px)]"
                : "top-0 left-[calc(100%+2px)]"
          }`}
        >
          {item.items?.map((subItem, idx) => (
            <RecursiveNavItem key={idx} item={subItem} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

export function DesktopNavigation({ navigationData }: { navigationData: any }) {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center space-x-1">
        {navigationData.regularLinks.map((link: any, idx: number) => (
          <RecursiveNavItem key={idx} item={link} depth={0} />
        ))}
        {navigationData.megaMenus.map((menu: any, idx: number) => (
          <RecursiveNavItem key={idx} item={menu} depth={0} />
        ))}
        {navigationData.standaloneLinks.map((link: any, idx: number) => (
          <RecursiveNavItem key={idx} item={link} depth={0} />
        ))}
      </ul>
    </nav>
  );
}
