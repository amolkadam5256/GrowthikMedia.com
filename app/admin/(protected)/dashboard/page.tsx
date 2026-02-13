"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/AdminComponents/Sidebar";
import DashboardHome from "@/components/AdminComponents/DashboardHome";
import HeroManager from "@/components/AdminComponents/Sections/HeroManager";
import ServicesManager from "@/components/AdminComponents/Sections/ServicesManager";
import ContactManager from "@/components/AdminComponents/Sections/ContactManager";
import AboutManager from "@/components/AdminComponents/Sections/AboutManager";
import PortfolioManager from "@/components/AdminComponents/Sections/PortfolioManager";
import BlogManager from "@/components/AdminComponents/Sections/BlogManager";
import SettingsManager from "@/components/AdminComponents/Sections/SettingsManager";
import UserManager from "@/components/AdminComponents/Sections/UserManager";
import InquiriesManager from "@/components/AdminComponents/Sections/InquiriesManager";

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
    <div className="flex min-h-[calc(100vh-80px)] relative">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        onLogout={handleLogout}
      />

      <main
        className={`flex-1 transition-all duration-300  ml-20 ${
          isSidebarOpen ? "md:ml-64" : ""
        }`}
      >
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl min-h-[calc(100vh-3rem)] p-6 md:p-8 relative overflow-hidden">
          {/* Accent Line */}
          <div className="absolute top-0 left-0 w-full" />
          <div className="relative z-10">{renderContent()}</div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboardPage;
