import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'gold-ghost' | 'amber' | 'ocean' | 'ocean-outline' | 'amber-outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  showArrow?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  showArrow = false,
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false,
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer rounded select-none text-center";
  
  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs font-semibold gap-1.5 tracking-wide",
    md: "px-5 py-2.5 text-sm font-semibold gap-2 tracking-wide",
    lg: "px-7 py-3.5 text-base font-semibold gap-2.5 tracking-wide",
  };

  const variantStyles = {
    primary: "bg-[#EA580C] hover:bg-[#C2410C] active:bg-[#9A3412] text-white shadow-md hover:shadow-lg font-semibold rounded-full",
    secondary: "bg-white text-slate-800 hover:bg-slate-50 active:bg-slate-100 border border-slate-300 font-semibold shadow-xs rounded-full",
    amber: "bg-[#EA580C] hover:bg-[#C2410C] active:bg-[#9A3412] text-white shadow-md hover:shadow-lg font-semibold rounded-full",
    ocean: "bg-[#0284C7] hover:bg-[#0369A1] active:bg-[#075985] text-white font-semibold shadow-xs rounded-full",
    'ocean-outline': "bg-transparent text-[#0284C7] border-2 border-[#0284C7] hover:bg-sky-50 font-semibold transition-colors rounded-full",
    'amber-outline': "bg-transparent text-[#EA580C] border-2 border-[#EA580C] hover:bg-orange-50 font-semibold transition-colors rounded-full",
    outline: "bg-transparent text-slate-800 border border-slate-300 hover:bg-slate-100 font-semibold rounded-full",
    'gold-ghost': "bg-transparent text-slate-600 hover:text-[#EA580C] hover:bg-orange-50 rounded-full",
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const disabledStyle = disabled ? "opacity-60 cursor-not-allowed pointer-events-none" : "";
  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${disabledStyle} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
      {showArrow && <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combinedClasses}`}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`group ${combinedClasses}`}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`group ${combinedClasses}`}>
      {content}
    </button>
  );
};
