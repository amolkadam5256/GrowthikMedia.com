"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/AdminComponents/layout/Sidebar";
import DashboardHome from "@/components/AdminComponents/dashboard/DashboardHome";
import HeroManager from "@/components/AdminComponents/content/HeroManager";
import ServicesManager from "@/components/AdminComponents/content/ServicesManager";
import ContactManager from "@/components/AdminComponents/leads/ContactManager";
import AboutManager from "@/components/AdminComponents/content/AboutManager";
import PortfolioManager from "@/components/AdminComponents/content/PortfolioManager";
import BlogManager from "@/components/AdminComponents/content/BlogManager";
import SettingsManager from "@/components/AdminComponents/settings/SettingsManager";
import UserManager from "@/components/AdminComponents/users/UserManager";
import InquiriesManager from "@/components/AdminComponents/leads/InquiriesManager";
import ChatIntelligence from "@/components/AdminComponents/ai/ChatIntelligence";
import LeadManager from "@/components/AdminComponents/leads/LeadManager";

const AdminDashboardPage = () => {
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("admin_active_tab") || "dashboard";
    }
    return "dashboard";
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("admin_active_tab", activeTab);
    }
  }, [activeTab, mounted]);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      window.location.href = "/admin/login";
    } catch (e) {
      console.error("Logout failed", e);
      // fallback
      window.location.href = "/admin/login";
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardHome />;
      case "users":
        return <UserManager />;
      case "services":
        return <ServicesManager />;
      case "portfolio":
        return <PortfolioManager />;
      case "blog":
        return <BlogManager />;
      case "inquiries":
        return <InquiriesManager />;
      case "chat":
      case "leads-chatbot":
        return <ChatIntelligence />;
      case "leads-inquiry":
        return <LeadManager type="inquiry-form" />;
      case "leads-contact":
        return <LeadManager type="contact-page" />;
      case "leads-manual":
        return <LeadManager type="manual" />;
      case "leads-imported":
        return <LeadManager type="imported" />;
      case "leads-all":
        return <LeadManager type="all-combined" />;
      case "hero":
        return <HeroManager />;
      case "contact":
        return <ContactManager />;
      case "about":
        return <AboutManager />;
      case "settings":
        return <SettingsManager />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)] relative bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        onLogout={handleLogout}
      />

      <main
        className={`flex-1 transition-all duration-300 ml-20 ${
          isSidebarOpen ? "md:ml-64" : ""
        }`}
      >
        <div className="bg-gray-50 dark:bg-gray-950 min-h-screen p-4 md:p-8 relative overflow-hidden transition-colors duration-300">
          {/* Accent Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-red-500 via-purple-500 to-blue-500 opacity-80 z-20" />
          <div className="relative z-10">{renderContent()}</div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboardPage;
