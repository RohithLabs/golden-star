import React from 'react';

interface GoldenStarLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light';
}

/**
 * Golden Star Company logo — exact golden star + dual crescent swoosh emblem
 * Matches the user's attached logo: outlined star + two curved arcs, all in gold on black.
 */
export const GoldenStarLogo: React.FC<GoldenStarLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'dark',
}) => {
  const sizeMap = {
    sm: { emblem: 40, text: 'text-base', sub: 'text-[8px]' },
    md: { emblem: 52, text: 'text-xl sm:text-2xl', sub: 'text-[9px]' },
    lg: { emblem: 64, text: 'text-2xl sm:text-3xl', sub: 'text-[10px]' },
  };
  const { emblem, text, sub } = sizeMap[size];
  const textCol = variant === 'light' ? '#FFFFFF' : '#111111';

  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {/* ── SVG emblem — golden star + dual crescent swoosh (matches user's logo) ── */}
      <svg
        width={emblem}
        height={emblem}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_2px_8px_rgba(223,154,40,0.6)]"
        aria-hidden="true"
      >
        {/* Black circle background */}
        <circle cx="50" cy="50" r="50" fill="#0A0A0A" />

        {/* Dual crescent swoosh arcs — bottom-left, curving up-right */}
        {/* Outer arc */}
        <path
          d="M 14 72 Q 22 90 50 90 Q 78 90 86 72"
          stroke="url(#goldGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        {/* Inner arc (tighter curve, slightly offset) */}
        <path
          d="M 20 80 Q 30 98 55 94 Q 80 90 88 76"
          stroke="url(#goldGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.75"
        />

        {/* Star — outlined, centred high up */}
        {/* 5-point star polygon: outer R=28, inner R=12, centre (50, 38) */}
        <polygon
          points="
            50,12
            56.2,31.8
            76.5,31.8
            60.7,43.2
            66.9,63
            50,51.6
            33.1,63
            39.3,43.2
            23.5,31.8
            43.8,31.8
          "
          fill="none"
          stroke="url(#goldGrad)"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Gold gradient def */}
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="45%" stopColor="#DF9A28" />
            <stop offset="100%" stopColor="#B8741A" />
          </linearGradient>
        </defs>
      </svg>

      {/* Brand text */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-montserrat font-extrabold tracking-tight uppercase leading-none ${text}`}
          style={{ color: textCol }}
        >
          Golden Star
        </span>
        <span
          className={`${sub} tracking-[0.25em] uppercase font-bold text-[#DF9A28] font-raleway mt-[3px]`}
        >
          COMPANY
        </span>
      </div>
    </div>
  );
};
