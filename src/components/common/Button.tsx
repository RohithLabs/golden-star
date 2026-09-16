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
    primary: "bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white shadow-md hover:shadow-lg font-semibold",
    secondary: "bg-ocean-900 text-white hover:bg-ocean-800 active:bg-ocean-950 border border-ocean-800 font-semibold shadow-sm",
    amber: "bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white shadow-md hover:shadow-lg font-semibold",
    ocean: "bg-ocean-900 hover:bg-ocean-800 active:bg-ocean-950 text-white font-semibold shadow-sm",
    'ocean-outline': "bg-transparent text-ocean-900 border-2 border-ocean-900 hover:bg-ocean-900 hover:text-white font-semibold transition-colors",
    'amber-outline': "bg-transparent text-amber-600 border-2 border-amber-500 hover:bg-amber-50 font-semibold transition-colors",
    outline: "bg-transparent text-amber-400 border border-amber-500/50 hover:border-amber-400 hover:bg-amber-500/10 active:bg-amber-500/20 font-semibold",
    'gold-ghost': "bg-transparent text-slate-300 hover:text-amber-400 hover:bg-white/5",
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
