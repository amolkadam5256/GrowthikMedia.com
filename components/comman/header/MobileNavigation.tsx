"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { CONTACT_INFO } from "@/constants/contact";
import React, { useState, useEffect } from "react";

interface NavItemData {
  label: string;
  href?: string;
  items?: NavItemData[];
  icon?: React.ComponentType<{ className?: string }>;
}

// Higher-level wrapper to manage accordion state for children at THIS level
const MobileRecursiveList = ({
  items,
  handleMobileLinkClick,
  isNested = false,
}: {
  items: NavItemData[];
  handleMobileLinkClick: () => void;
  isNested?: boolean;
}) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <ul
      className={`${isNested ? "ml-6 border-l-2 border-(--border-light) pl-2 mt-1" : "space-y-1"} animate-fadeIn`}
    >
      {items.map((item, idx) => {
        const hasChildren = item.items && item.items.length > 0;
        const isOpen = openIndex === idx;

        const activeClasses = isDark
          ? "bg-white/10 text-white"
          : "bg-[#F0F2FD] text-[#4F46E5]";

        const idleClasses =
          "hover:bg-(--surface-secondary) text-(--text-secondary)";

        return (
          <li key={idx} className="w-full">
            <div className="flex items-center justify-between w-full">
              {item.href ? (
                <Link
                  href={item.href}
                  className={`flex-1 flex items-center py-3 px-4 rounded-xl text-sm font-medium transition-all ${isOpen ? activeClasses : idleClasses}`}
                  onClick={handleMobileLinkClick}
                >
                  {item.icon && (
                    <item.icon
                      className={`mr-3 text-lg ${isOpen ? "text-inherit" : "text-[#D90B1C]"}`}
                    />
                  )}
                  <span>{item.label}</span>
                </Link>
              ) : (
                <button
                  className={`flex-1 flex items-center py-3 px-4 rounded-xl text-sm font-medium transition-all text-left ${isOpen ? activeClasses : idleClasses}`}
                  onClick={() => hasChildren && toggle(idx)}
                >
                  {item.icon && (
                    <item.icon
                      className={`mr-3 text-lg ${isOpen ? "text-inherit" : "text-[#D90B1C]"}`}
                    />
                  )}
                  <span>{item.label}</span>
                </button>
              )}

              {hasChildren && (
                <button
                  className={`p-3 mr-1 transition-colors ${isOpen ? "text-(--color-primary)" : "text-(--text-tertiary)"}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggle(idx);
                  }}
                >
                  {isOpen ? <FiMinus /> : <FiPlus />}
                </button>
              )}
            </div>

            {hasChildren && isOpen && (
              <MobileRecursiveList
                items={item.items || []}
                handleMobileLinkClick={handleMobileLinkClick}
                isNested={true}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export function MobileNavigation({
  isMobileMenuOpen,
  handleMobileLinkClick,
  navigationData,
}: {
  isMobileMenuOpen: boolean;
  handleMobileLinkClick: () => void;
  navigationData: {
    desktop: {
      regularLinks: NavItemData[];
      megaMenus: NavItemData[];
      standaloneLinks: NavItemData[];
    };
  };
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Combine regular links and mega menus into one display list
  const allItems = [
    ...navigationData.desktop.regularLinks,
    ...navigationData.desktop.megaMenus,
    ...navigationData.desktop.standaloneLinks,
  ];

  if (!mounted) return null;

  return (
    <div
      className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-500 ease-in-out rounded-3xl z-100 ${
        isMobileMenuOpen
          ? "max-h-[85vh] opacity-100 mt-4 overflow-y-auto"
          : "max-h-0 opacity-0 mt-0 overflow-hidden"
      }`}
    >
      <div
        className={`shadow-2xl rounded-3xl p-6 backdrop-blur-lg bg-(--background) border border-(--border-light) text-(--text-primary)`}
      >
        <div className="pt-2">
          <MobileRecursiveList
            items={allItems}
            handleMobileLinkClick={handleMobileLinkClick}
          />
        </div>

        <div className="mt-8 pt-6 border-t border-(--border-light) space-y-4">
          <div className="flex items-center">
            <MdPhone className="text-[#D90B1C] mr-3 text-lg" />
            <span className="text-sm font-medium">
              {CONTACT_INFO.phone.primary}
            </span>
          </div>
          <div className="flex items-center">
            <MdEmail className="text-[#D90B1C] mr-3 text-lg" />
            <span className="text-sm font-medium">
              {CONTACT_INFO.email.info}
            </span>
          </div>
          <div className="flex items-center">
            <MdLocationOn className="text-[#D90B1C] mr-3 text-lg" />
            <span className="text-sm font-medium">
              {CONTACT_INFO.address.full}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
