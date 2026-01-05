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
    warning: "bg-linear-to-r from-yellow-200 to-yellow-300 text-gray-900",
    success: "bg-linear-to-r from-green-200 to-green-300 text-green-900",
    info: "bg-linear-to-r from-blue-200 to-blue-300 text-blue-900",
    neutral: "bg-gray-100 text-gray-800",
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Badge;
