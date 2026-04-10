import Link from "next/link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export function Button({ href, variant = "primary", children, className = "", ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-dm-sans font-medium transition-all duration-300 rounded";
  const variants = {
    primary: "bg-accent text-primary px-6 py-3 hover:bg-[#b08432] shadow-lg",
    secondary: "bg-transparent border border-accent text-accent px-6 py-3 hover:bg-accent hover:text-primary",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
