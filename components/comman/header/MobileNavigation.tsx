"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FiChevronDown } from "react-icons/fi";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { FiLogIn } from "react-icons/fi";
import { CONTACT_INFO } from "@/constants/contact";

interface MobileNavigationProps {
  isMobileMenuOpen: boolean;
  active: string | null;
  setActive: (id: string | null) => void;
  handleMobileLinkClick: () => void;
  navigationData: any;
}

export function MobileNavigation({
  isMobileMenuOpen,
  active,
  setActive,
  handleMobileLinkClick,
  navigationData,
}: MobileNavigationProps) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Mobile regular link component
  const MobileRegularLink = ({
    href,
    label,
    icon: Icon,
  }: {
    href: string;
    label: string;
    icon?: any;
  }) => (
    <li>
      <Link
        href={href}
        className="flex items-center hover:text-[var(--color-primary)] py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-black/10 dark:hover:bg-white/10 "
        onClick={handleMobileLinkClick}
      >
        {Icon && <Icon className="text-[var(--color-primary)] mr-3" />}
        <span className="text-sm">{label}</span>
      </Link>
    </li>
  );

  // Mobile Services Expandable Menu with categories
  const MobileServicesExpandableMenu = ({ menu }: { menu: any }) => (
    <li className="relative">
      <button
        className="w-full text-left hover:text-[var(--color-primary)] py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-black/10 dark:hover:bg-white/10 flex items-center justify-between"
        onClick={() => setActive(active === menu.id ? null : menu.id)}
      >
        <div className="flex items-center">
          {menu.icon && (
            <menu.icon className="text-[var(--color-primary)] mr-3 text-sm" />
          )}
          <span className="text-sm">{menu.label}</span>
        </div>
        <FiChevronDown
          className={`transition-transform duration-300 text-sm ${
            active === menu.id ? "rotate-180" : ""
          }`}
        />
      </button>
      {active === menu.id && (
        <div className="ml-4 mt-2 space-y-4 border-l-2 border-[var(--color-primary)] pl-4 animate-slideDown">
          {menu.categories?.map((category: any, index: number) => {
            const Icon = category.icon;
            return (
              <div key={index} className="space-y-2">
                <div className="flex items-center">
                  {Icon && (
                    <Icon className="text-[var(--color-primary)] mr-2 text-sm" />
                  )}
                  <h4 className="font-semibold text-[var(--color-primary)] text-sm uppercase tracking-wider">
                    {category.category}
                  </h4>
                </div>
                <div className="space-y-1 ml-2">
                  {category.items.map((item: any) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="hover:text-[var(--color-primary)] py-2 px-3 rounded-lg block transition-all duration-300 hover:bg-black/10 dark:hover:bg-white/10 text-sm"
                      onClick={handleMobileLinkClick}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
          {!menu.categories &&
            menu.items?.map((item: any) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[var(--color-primary)] py-2 px-3 rounded-lg block transition-all duration-300 hover:bg-black/10 dark:hover:bg-white/10 text-sm"
                onClick={handleMobileLinkClick}
              >
                {item.label}
              </Link>
            ))}
        </div>
      )}
    </li>
  );

  return (
    <div
      className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-500 ease-in-out rounded-3xl ${
        isMobileMenuOpen
          ? "max-h-[80vh] opacity-100 mt-4  overflow-y-auto"
          : "max-h-0 opacity-0 mt-0 overflow-hidden"
      }`}
    >
      <div
        className={`shadow-2xl rounded-3xl p-6 backdrop-blur-lg bg-opacity-95 ${
          theme === "light"
            ? "bg-white text-gray-900"
            : "bg-gray-900 text-white"
        }`}
      >
        <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-end mb-4 ml-10">
            <ThemeToggleButton />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/auth/login"
              onClick={handleMobileLinkClick}
              className="
    inline-flex items-center justify-center gap-2
    bg-[var(--color-primary)]
    text-white
    py-2 px-4
    rounded-full
    text-sm font-medium
    transition-all duration-300
    hover:opacity-90
  "
            >
              <FiLogIn className="w-4 h-4" />
              <span>Login</span>
            </Link>

            <Link
              href="/contact"
              className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white py-2 px-4 rounded-full text-center font-medium text-sm"
              onClick={handleMobileLinkClick}
            >
              Contact
            </Link>
          </div>
        </div>

        <ul className="space-y-1">
          {/* Regular mobile links */}
          {navigationData.mainLinks.map((link: any) => (
            <MobileRegularLink key={link.href} {...link} />
          ))}

          {/* Expandable mobile menus */}
          {navigationData.expandableMenus.map((menu: any) => (
            <MobileServicesExpandableMenu key={menu.id} menu={menu} />
          ))}

          {/* Standalone links (Blog, Contact) */}
          {navigationData.standaloneLinks &&
            navigationData.standaloneLinks.map((link: any) => (
              <MobileRegularLink key={link.href} {...link} />
            ))}
        </ul>

        {/* Mobile Contact Info */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="space-y-4">
            <div className="flex items-center">
              <MdPhone className="text-[var(--color-primary)] mr-3 text-sm" />
              <span className="text-sm">{CONTACT_INFO.phone.primary}</span>
            </div>
            <div className="flex items-center">
              <MdEmail className="text-[var(--color-primary)] mr-3 text-sm" />
              <span className="text-sm">{CONTACT_INFO.email.info}</span>
            </div>
            <div className="flex items-center">
              <MdLocationOn className="text-[var(--color-primary)] mr-3 text-sm" />
              <span className="text-sm">{CONTACT_INFO.address.full}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
