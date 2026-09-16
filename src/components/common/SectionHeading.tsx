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
  theme = 'dark',
  className = '',
  badgeText
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {badgeText && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
          theme === 'dark' ? 'bg-gold-500/15 text-gold-400 border border-gold-500/30' : 'bg-navy-900 text-gold-500'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping"></span>
          {badgeText}
        </div>
      )}

      {eyebrow && !badgeText && (
        <p className="text-xs sm:text-sm font-semibold tracking-widest text-gold-500 uppercase mb-2.5 font-heading">
          {eyebrow}
        </p>
      )}

      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-4 font-heading ${
        theme === 'dark' ? 'text-white' : 'text-navy-950'
      }`}>
        {title}
      </h2>

      {description && (
        <p className={`text-sm sm:text-base leading-relaxed ${
          theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {description}
        </p>
      )}

      <div className={`mt-4 h-0.5 w-12 bg-gold-500/60 rounded ${isCenter ? 'mx-auto' : ''}`} />
    </div>
  );
};
