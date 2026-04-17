import Link from "next/link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export function Button({ href, variant = "primary", children, className = "", ...props }: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center font-body font-bold transition-all duration-300 rounded-lg overflow-hidden group cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-accent to-[#A67C2E] text-primary px-7 py-3.5 shadow-[0_0_20px_rgba(200,151,58,0.2)] hover:shadow-[0_0_30px_rgba(200,151,58,0.4)] hover:-translate-y-0.5",
    secondary: "bg-primary/40 backdrop-blur-md border border-accent/40 text-accent px-7 py-3.5 hover:bg-accent/10 hover:border-accent hover:shadow-[0_0_20px_rgba(200,151,58,0.15)] hover:-translate-y-0.5",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  const InnerContent = () => (
    <>
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-15deg] group-hover:animate-sweep"></span>
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        <InnerContent />
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      <InnerContent />
    </button>
  );
}
