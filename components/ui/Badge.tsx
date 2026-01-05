import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "warning" | "success" | "info" | "neutral";
  className?: string;
}

const Badge = ({
  children,
  variant = "warning",
  className = "",
}: BadgeProps) => {
  const baseStyles =
    "px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-sm sm:text-base cursor-default";

  const variants = {
    warning:
      "bg-gradient-to-r from-yellow-200 to-yellow-300 dark:from-yellow-300 dark:to-yellow-400 text-gray-900 dark:text-gray-800",
    success:
      "bg-gradient-to-r from-green-200 to-green-300 dark:from-green-300 dark:to-green-400 text-green-900 dark:text-green-800",
    info: "bg-gradient-to-r from-blue-200 to-blue-300 dark:from-blue-300 dark:to-blue-400 text-blue-900 dark:text-blue-800",
    neutral: "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Badge;
