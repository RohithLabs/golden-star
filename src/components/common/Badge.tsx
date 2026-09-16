import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'navy' | 'emerald' | 'slate';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  size = 'md',
  className = ''
}) => {
  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs font-medium tracking-wider uppercase",
    md: "px-2.5 py-1 text-xs font-semibold tracking-wide"
  };

  const variantStyles = {
    gold: "bg-gold-500/15 text-gold-400 border border-gold-500/30",
    navy: "bg-navy-800 text-slate-300 border border-navy-700",
    emerald: "bg-emerald-950/60 text-emerald-400 border border-emerald-500/30",
    slate: "bg-slate-800/80 text-slate-400 border border-slate-700"
  };

  return (
    <span className={`inline-flex items-center rounded-sm font-sans ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
