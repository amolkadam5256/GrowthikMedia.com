import Link from "next/link";
import { useTheme } from "next-themes";
import { MdEmail, MdPhone } from "react-icons/md";
import { ThemeToggleButton } from "./ThemeToggleButton";

export function TopBar() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`hidden lg:block fixed top-0 left-0 right-0 z-40 py-1 px-4 ${
      theme === "light" 
        ? "bg-[var(--color-primary)] text-white" 
        : "bg-[#0A0A0A] text-white"
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6 text-sm">
          <div className="flex items-center">
            <MdPhone className={`mr-2 ${theme === "light" ? "text-white" : "text-[var(--color-primary)]"}`} />
            <span>+91 80557 54054</span>
          </div>
          <div className="flex items-center">
            <MdEmail className={`mr-2 ${theme === "light" ? "text-white" : "text-[var(--color-primary)]"}`} />
            <span>info@growthikmedia.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {/* <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              theme === "light" 
                ? "hover:bg-white/20" 
                : "hover:bg-red-600/20 text-white"
            }`}
            aria-label="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button> */}
          <ThemeToggleButton />
          <Link 
            href="/quote" 
            className={`text-sm transition-colors ${
              theme === "light" 
                ? "hover:text-red-200" 
                : "hover:text-red-400"
            }`}
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
}