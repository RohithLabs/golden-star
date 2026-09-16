import React from 'react';

interface GoldenStarLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light';
}

/**
 * Golden Star Company logo — Official emblem featuring airplane, globe, star, ship, and truck.
 */
export const GoldenStarLogo: React.FC<GoldenStarLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'dark',
}) => {
  const sizeMap = {
    sm: { img: 'h-9 w-auto', text: 'text-base', sub: 'text-[8px]' },
    md: { img: 'h-11 w-auto', text: 'text-lg sm:text-xl', sub: 'text-[9px]' },
    lg: { img: 'h-14 w-auto', text: 'text-xl sm:text-2xl', sub: 'text-[10px]' },
  };
  const { img, text, sub } = sizeMap[size];
  const textCol = variant === 'light' ? '#0F172A' : '#0F172A';

  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      <img
        src="/golden-star-logo.png"
        alt="Golden Star Company Logo"
        className={`${img} object-contain shrink-0 group-hover:scale-105 transition-transform drop-shadow-xs`}
      />
      <div className="flex flex-col leading-none">
        <span
          className={`font-montserrat font-extrabold tracking-tight uppercase leading-none ${text}`}
          style={{ color: textCol }}
        >
          Golden Star
        </span>
        <span
          className={`${sub} tracking-[0.25em] uppercase font-bold text-[#EA580C] font-raleway mt-[3px]`}
        >
          COMPANY
        </span>
      </div>
    </div>
  );
};
