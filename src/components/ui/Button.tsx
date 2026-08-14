import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline" | "minimal";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "solid",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-medium transition-luxury duration-500 inline-flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-rose-gold disabled:opacity-50 disabled:cursor-not-allowed py-4 px-8 md:px-10";

  const variants = {
    solid: "bg-rose-gold text-charcoal hover:bg-rose-gold-dark hover:text-white border border-rose-gold hover:border-rose-gold-dark shadow-sm",
    outline:
      "bg-transparent text-charcoal border border-border-custom hover:border-rose-gold hover:bg-rose-gold/5",
    minimal:
      "bg-transparent text-charcoal p-0 border-b border-rose-gold hover:text-rose-gold-dark hover:border-rose-gold-dark tracking-[0.25em]",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  );
}
