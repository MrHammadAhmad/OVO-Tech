import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'outline-white' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

export function Button({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-xl';
  
  const variants = {
    primary: 'bg-brand-blue text-white hover:bg-[#0298d0] hover:scale-[1.04] hover:shadow-[0_0_24px_rgba(2,172,234,0.45)] hover:ring-2 hover:ring-offset-2 hover:ring-[#02ACEA]/60 focus:ring-[#02ACEA]',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 hover:scale-[1.03] focus:ring-slate-300',
    accent: 'bg-brand-blue text-white hover:bg-[#0298d0] hover:scale-[1.04] hover:shadow-[0_0_24px_rgba(2,172,234,0.45)] hover:ring-2 hover:ring-offset-2 hover:ring-[#02ACEA]/60 focus:ring-[#02ACEA]',
    outline: 'border border-[#02ACEA] text-[#02ACEA] bg-white hover:bg-[#02ACEA]/5 hover:scale-[1.04] hover:shadow-[0_0_16px_rgba(2,172,234,0.2)] hover:ring-2 hover:ring-offset-2 hover:ring-[#02ACEA]/50 focus:ring-[#02ACEA]',
    'outline-white': 'border border-white/30 text-white bg-transparent hover:bg-white/10 hover:scale-[1.03] focus:ring-white',
    dark: 'bg-brand-dark text-white hover:bg-black hover:scale-[1.03] focus:ring-brand-dark'
  };

  const sizes = {
    sm: 'text-xs px-5 py-2.5 font-bold tracking-wide',
    md: 'text-sm md:text-base px-8 py-3.5 font-bold tracking-wide',
    lg: 'text-base md:text-lg px-10 py-4.5 font-extrabold tracking-wide'
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

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
