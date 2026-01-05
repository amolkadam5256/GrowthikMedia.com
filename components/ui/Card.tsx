import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string; // Allow custom classes
  hoverEffect?: boolean;
}

const Card = ({ children, className = "", hoverEffect = true }: CardProps) => {
  return (
    <div
      className={`bg-white  rounded-xl shadow-xl transition-all duration-300 overflow-hidden ${
        hoverEffect ? "hover:shadow-2xl hover:-translate-y-3" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
