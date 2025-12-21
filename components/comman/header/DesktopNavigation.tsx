"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiChevronDown, FiChevronRight, FiMessageCircle } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";

interface DesktopNavigationProps {
  active: string | null;
  setActive: (id: string | null) => void;
  navigationData: any;
}

export function DesktopNavigation({
  active,
  setActive,
  navigationData,
}: DesktopNavigationProps) {
  const router = useRouter();
  const [clickedMenu, setClickedMenu] = useState<string | null>(null);
  const [isHoverEnabled, setIsHoverEnabled] = useState(true);
  const menuRef = useRef<HTMLLIElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle menu click - navigate to main page
  const handleMenuClick = (menuId: string) => {
    setClickedMenu(menuId);
    setActive(null);
    setIsHoverEnabled(false);

    // Navigate to the main page for the menu
    switch (menuId) {
      case "services":
        router.push("/services");
        break;
      case "portfolio":
        router.push("/portfolio");
        break;
    }

    // Re-enable hover after 1 second
    setTimeout(() => {
      setIsHoverEnabled(true);
    }, 1000);
  };

  // Handle menu hover
  const handleMenuHover = (menuId: string) => {
    if (isHoverEnabled && clickedMenu !== menuId) {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setActive(menuId);
    }
  };

  // Handle menu leave with delay
  const handleMenuLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setActive(null);
    }, 300);
  };

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Regular desktop link component
  const DesktopRegularLink = ({
    href,
    label,
    icon: Icon,
  }: {
    href: string;
    label: string;
    icon?: any;
  }) => (
    <li className="relative group">
      <Link
        href={href}
        className="hover:text-[#D90B1C] text-sm px-3 py-2 rounded-full transition-all duration-200 group-hover:bg-black/5 dark:group-hover:bg-white/5 flex items-center space-x-1.5"
      >
        {Icon && <Icon className="text-[var(--color-primary)]" />}
        <span className="font-medium tracking-tight">{label}</span>
      </Link>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-[var(--color-primary)] group-hover:w-4/5 transition-all duration-300"></div>
    </li>
  );

  // Standard Mega Menu component (for all mega menus)
  const DesktopStandardMegaMenu = ({ menu }: { menu: any }) => (
    <li
      className="relative cursor-pointer group"
      onMouseEnter={() => handleMenuHover(menu.id)}
      onMouseLeave={handleMenuLeave}
    >
      <button
        onClick={() => handleMenuClick(menu.id)}
        className={`hover:text-[var(--color-primary)] text-sm px-3 py-2 rounded-full transition-all duration-200 group-hover:bg-black/5 dark:group-hover:bg-white/5 flex items-center space-x-1.5 cursor-pointer ${
          clickedMenu === menu.id
            ? "text-[var(--color-primary)] font-semibold"
            : ""
        }`}
      >
        <span className="font-medium tracking-tight">{menu.label}</span>
        <FiChevronDown
          className={`ml-0.5 transition-transform duration-200 ${
            active === menu.id ? "rotate-180" : "group-hover:rotate-180"
          }`}
        />
      </button>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-[#D90B1C] group-hover:w-4/5 transition-all duration-300"></div>

      {active === menu.id && (
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 mt-6 bg-white dark:bg-gray-900 text-black dark:text-white shadow-2xl rounded-xl z-50 border border-gray-100 dark:border-gray-800 animate-fadeIn ${
            menu.columns === 3
              ? "grid grid-cols-3 gap-6 w-[1200px] p-6"
              : menu.columns === 2
              ? "grid grid-cols-2 gap-4 w-[500px] p-5"
              : "space-y-1 w-[240px] p-3"
          }`}
          onMouseEnter={() => handleMenuHover(menu.id)}
          onMouseLeave={handleMenuLeave}
        >
          {menu.columns > 1 && Array.isArray(menu.items[0]?.items) ? (
            // For Menus with categories (Services, Portfolio)
            <>
              {menu.items.map((category: any, index: number) => (
                <div key={index} className="space-y-2.5">
                  <div>
                    <h3 className="font-bold text-base text-black dark:text-white border-b border-gray-100 dark:border-gray-800 pb-1.5">
                      {category.category}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      {category.description}
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    {category.items.map((item: any) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 group/item text-sm"
                        onClick={() => {
                          setActive(null);
                          setClickedMenu(null);
                        }}
                      >
                        <div className="flex items-center">
                          <div
                            className={`w-1.5 h-1.5 rounded-full mr-2.5 flex-shrink-0 ${
                              item.featured
                                ? "bg-[#D90B1C]"
                                : "bg-gray-300 dark:bg-gray-600"
                            }`}
                          ></div>
                          <span className="font-medium text-gray-700 dark:text-gray-300 group-hover/item:text-[#D90B1C] transition-colors tracking-tight">
                            {item.label}
                          </span>
                        </div>
                        <FiChevronRight className="text-gray-400 group-hover/item:text-[#D90B1C] transform group-hover/item:translate-x-0.5 transition-all text-xs" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </>
          ) : (
            // For simple lists
            <>
              {menu.items.map((item: any) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center p-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 group/item text-sm"
                    onClick={() => {
                      setActive(null);
                      setClickedMenu(null);
                    }}
                  >
                    {Icon && (
                      <Icon className="text-[var(--color-primary)] mr-2.5 text-xs" />
                    )}
                    <span className="font-medium text-gray-700 dark:text-gray-300 group-hover/item:text-[var(--color-primary)] transition-colors tracking-tight">
                      {item.label}
                    </span>
                    <FiChevronRight className="ml-auto text-gray-400 group-hover/item:text-[var(--color-primary)] transform group-hover/item:translate-x-0.5 transition-all text-xs" />
                  </Link>
                );
              })}
            </>
          )}
        </div>
      )}
    </li>
  );

  return (
    <nav className="hidden lg:block">
      <ul className="flex space-x-0 xl:space-x-2 2xl:space-x-3">
        {/* Regular links */}
        {navigationData.regularLinks.map((link: any) => (
          <DesktopRegularLink key={link.href} {...link} />
        ))}

        {/* Mega menus */}
        {navigationData.megaMenus.map((menu: any) => (
          <DesktopStandardMegaMenu key={menu.id} menu={menu} />
        ))}

        {/* Standalone links (Blog, Contact) */}
        {navigationData.standaloneLinks &&
          navigationData.standaloneLinks.map((link: any) => (
            <DesktopRegularLink key={link.href} {...link} />
          ))}
      </ul>
    </nav>
  );
}
