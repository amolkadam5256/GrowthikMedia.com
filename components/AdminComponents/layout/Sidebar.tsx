import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  FiHome,
  FiSettings,
  FiLogOut,
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
  FiUsers,
  FiMenu,
  FiLayers,
  FiCpu,
  FiTrendingUp,
} from "react-icons/fi";
import { ThemeToggleButton } from "@/components/comman/header/ThemeToggleButton";
type TabId =
  | "dashboard"
  | "users"
  | "services"
  | "portfolio"
  | "blog"
  | "chat"
  | "hero"
  | "contact"
  | "about"
  | "settings";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onLogout: () => void;
}

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  children?: { id: string; label: string }[];
}

export default function Sidebar({
  activeTab,
  setActiveTab,
  isOpen,
  setIsOpen,
  onLogout,
}: SidebarProps) {
  const sidebarRef = useRef<HTMLElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // State for expanded dropdown menus
  const [expandedMenus, setExpandedMenus] = useState<string[]>(["content"]); // Default open content

  const toggleSubMenu = (menuId: string) => {
    setExpandedMenus((prev) => (prev.includes(menuId) ? [] : [menuId]));
  };

  const menuItems: MenuItem[] = [
    { id: "dashboard", label: "Dashboard", icon: <FiHome /> },
    {
      id: "content",
      label: "Content Manager",
      icon: <FiLayers />,
      children: [
        { id: "services", label: "Services" },
        { id: "portfolio", label: "Portfolio" },
        { id: "blog", label: "Blog Posts" },
        { id: "hero", label: "Hero Section" },
        { id: "contact", label: "Contact Info" },
        { id: "about", label: "About Us" },
      ],
    },
    {
      id: "leads",
      label: "Lead Management",
      icon: <FiTrendingUp />,
      children: [
        { id: "leads-chatbot", label: "Chatbot Leads" },
        { id: "leads-inquiry", label: "Inquiry Form Leads" },
        { id: "leads-contact", label: "Contact Page Leads" },
        { id: "leads-manual", label: "Manual Added Leads" },
        { id: "leads-imported", label: "Imported Leads" },
        { id: "leads-all", label: "All Combined Leads" },
      ],
    },
    { id: "users", label: "User Management", icon: <FiUsers /> },
    { id: "settings", label: "Settings", icon: <FiSettings /> },
  ];

  // Handle escape key to close sidebar on mobile
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && window.innerWidth < 768) {
        setIsOpen(false);
        toggleButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, setIsOpen]);

  // Trap focus within sidebar when open on mobile
  useEffect(() => {
    if (!isOpen || window.innerWidth >= 768) return;

    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    const focusableElements = sidebar.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);
    return () => document.removeEventListener("keydown", handleTabKey);
  }, [isOpen]);

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (isOpen && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleBackdropClick = () => {
    setIsOpen(false);
    toggleButtonRef.current?.focus();
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Close sidebar on mobile after selecting a tab
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity backdrop-blur-sm"
          onClick={handleBackdropClick}
          aria-hidden="true"
        />
      )}

      <aside
        ref={sidebarRef}
        role="navigation"
        aria-label="Main navigation"
        className={`fixed left-0 top-0 h-full bg-white dark:bg-black border-r border-gray-200 dark:border-white/10 transition-all duration-300 z-50 flex flex-col ${
          isOpen ? "w-64 shadow-2xl md:shadow-none" : "w-20"
        } translate-x-0`}
      >
        {/* Header */}
        <div
          className={`h-16 flex items-center ${
            isOpen ? "justify-between px-4" : "justify-center"
          } border-b border-gray-200 dark:border-white/10`}
        >
          {isOpen ? (
            <>
              <div className="relative w-10 h-10 shrink-0">
                <Image
                  src="/Logo.png"
                  alt="Growthik Media"
                  fill
                  className="object-contain"
                />
              </div>
              <button
                ref={toggleButtonRef}
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
                aria-label="Collapse sidebar"
                title="Collapse Sidebar"
              >
                <FiChevronLeft />
              </button>
            </>
          ) : (
            <button
              ref={toggleButtonRef}
              onClick={() => setIsOpen(true)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-gray-500 transition-colors focus:outline-none "
              aria-label="Expand sidebar"
              title="Expand Sidebar"
            >
              <FiMenu />
            </button>
          )}
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto py-4 space-y-1 px-3">
          {menuItems.map((item) => (
            <div key={item.id} className="space-y-1">
              {/* Parent Item */}
              <button
                onClick={() =>
                  item.children
                    ? toggleSubMenu(item.id)
                    : handleTabChange(item.id)
                }
                aria-label={item.label}
                aria-expanded={
                  item.children ? expandedMenus.includes(item.id) : undefined
                }
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group focus:outline-none   ${
                  activeTab === item.id && !item.children
                    ? "bg-linear-to-r from-(--color-primary) to-(--color-primary-light) text-white shadow-lg shadow-(--color-primary)/30"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5"
                } ${!isOpen && "justify-center"}`}
              >
                <span
                  className={`text-xl shrink-0 ${
                    activeTab === item.id && !item.children
                      ? "text-white"
                      : "text-gray-500 group-hover:text-(--color-primary)"
                  }`}
                >
                  {item.icon}
                </span>

                {isOpen && (
                  <div className="flex-1 flex items-center justify-between text-left">
                    <span className="font-medium whitespace-nowrap text-sm">
                      {item.label}
                    </span>
                    {item.children && (
                      <span className="text-gray-400">
                        {expandedMenus.includes(item.id) ? (
                          <FiChevronDown />
                        ) : (
                          <FiChevronRight />
                        )}
                      </span>
                    )}
                  </div>
                )}
              </button>

              {/* Child Items (Dropdown) */}
              {item.children && isOpen && expandedMenus.includes(item.id) && (
                <div className="pl-10 space-y-1 animate-fadeIn">
                  {item.children.map((child) => (
                    <button
                      key={child.id}
                      onClick={() => handleTabChange(child.id)}
                      className={`w-full flex items-center px-4 py-2 text-sm rounded-lg transition-colors ${
                        activeTab === child.id
                          ? "text-(--color-primary) font-medium bg-(--color-primary)/10"
                          : "text-gray-500 hover:text-(--color-primary) hover:bg-gray-100 dark:hover:bg-white/5"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current mr-2 opacity-50"></span>
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        {/* Footer */}
        <div className="p-3 border-t border-gray-200 dark:border-white/10">
          <button
            onClick={onLogout}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group focus:outline-none text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 ${
              !isOpen ? "justify-center" : ""
            }`}
            title="Logout"
          >
            <span className="text-xl shrink-0 group-hover:scale-110 transition-transform">
              <FiLogOut />
            </span>
            {isOpen && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
