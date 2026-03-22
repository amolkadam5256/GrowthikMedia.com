import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string; // Allow custom classes
  hoverEffect?: boolean;
}

const Card = ({ children, className = "", hoverEffect = true }: CardProps) => {
  return (
    <div
      className={`bg-white dark:bg-(--surface) rounded-xl shadow-xl dark:shadow-[0_10px_40px_var(--shadow-lg)] transition-all duration-300 overflow-hidden ${
        hoverEffect
          ? "hover:shadow-2xl hover:-translate-y-3 dark:hover:shadow-[0_20px_60px_var(--shadow-lg)]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
