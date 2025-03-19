import React from "react";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

export default function Button({ onClick, children, className = "", disabled = false }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition-all ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
