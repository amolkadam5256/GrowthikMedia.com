"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { MdEmail, MdPhone } from "react-icons/md";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { FiLogIn } from "react-icons/fi";
import { CONTACT_INFO } from "@/constants/contact";

export function TopBar() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`hidden lg:block fixed top-0 left-0 right-0 z-40 py-1 px-4 ${
        theme === "light"
          ? "bg-[var(--color-primary)] text-white"
          : "bg-[#0A0A0A] text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6 text-sm">
          <div className="flex items-center">
            <MdPhone
              className={`mr-2 ${
                theme === "light" ? "text-white" : "text-[var(--color-primary)]"
              }`}
            />
            <span>{CONTACT_INFO.phone.primary}</span>
          </div>
          <div className="flex items-center">
            <MdEmail
              className={`mr-2 ${
                theme === "light" ? "text-white" : "text-[var(--color-primary)]"
              }`}
            />
            <span>{CONTACT_INFO.email.info}</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggleButton />
          <Link
            href="/quote"
            className={`text-sm transition-colors ${
              theme === "light" ? "hover:text-red-200" : "hover:text-red-400"
            }`}
          >
            Get Free Quote
          </Link>
          <Link
            href="/auth/login"
            className={`
        inline-flex items-center gap-2
        text-sm font-medium
        transition-all duration-300
        ${
          theme === "light"
            ? "text-gray-700 hover:text-red-600"
            : "text-gray-300 hover:text-red-400"
        }
      `}
          >
            <FiLogIn className="w-4 h-4" />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
