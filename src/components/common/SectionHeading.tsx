import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'dark' | 'light';
  className?: string;
  badgeText?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
  badgeText
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {badgeText && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 bg-orange-50 text-[#EA580C] border border-orange-200">
          <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-ping"></span>
          {badgeText}
        </div>
      )}

      {eyebrow && !badgeText && (
        <p className="text-xs sm:text-sm font-bold tracking-widest text-[#EA580C] uppercase mb-2.5">
          {eyebrow}
        </p>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight mb-4 text-slate-900">
        {title}
      </h2>

      {description && (
        <p className="text-sm sm:text-base leading-relaxed text-slate-600">
          {description}
        </p>
      )}

      <div className={`mt-4 h-0.5 w-12 bg-[#EA580C] rounded ${isCenter ? 'mx-auto' : ''}`} />
    </div>
  );
};
