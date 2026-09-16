import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'orange' | 'blue' | 'red' | 'slate' | 'gold' | 'navy' | 'emerald';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'orange',
  size = 'md',
  className = ''
}) => {
  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs font-semibold tracking-wider uppercase",
    md: "px-2.5 py-1 text-xs font-bold tracking-wide"
  };

  const variantStyles: Record<string, string> = {
    orange: "bg-orange-50 text-[#EA580C] border border-orange-200",
    gold: "bg-orange-50 text-[#EA580C] border border-orange-200",
    blue: "bg-sky-50 text-[#0284C7] border border-sky-200",
    navy: "bg-sky-50 text-[#0284C7] border border-sky-200",
    red: "bg-rose-50 text-[#DC2626] border border-rose-200",
    emerald: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    slate: "bg-slate-100 text-slate-700 border border-slate-200"
  };

  return (
    <span className={`inline-flex items-center rounded-full ${sizeStyles[size]} ${variantStyles[variant] || variantStyles.orange} ${className}`}>
      {children}
    </span>
  );
};
