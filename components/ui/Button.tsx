import React from "react";
import { ChevronRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gradient" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string; // Allow custom classes to merge
}

const Button = ({
  variant = "primary",
  size = "md",
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3";

  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900",
    gradient:
      "bg-linear-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white shadow-2xl hover:shadow-3xl",
    outline: "border-2 border-gray-900 text-gray-900 hover:bg-gray-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} group`}
      {...props}
    >
      {children}
      {icon && (
        <span className="group-hover:translate-x-1 transition-transform">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
