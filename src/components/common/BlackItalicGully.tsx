import React from 'react';
import { Ship, Sparkles, CheckCircle2, Flame, Globe2, ShieldCheck } from 'lucide-react';

interface BlackItalicGullyProps {
  className?: string;
}

export const BlackItalicGully: React.FC<BlackItalicGullyProps> = ({ className = '' }) => {
  const tickerItems = [
    {
      id: 1,
      tag: 'LIVE MARITIME DISPATCH',
      tagColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
      icon: Ship,
      text: 'MV GOLDEN STAR PHOENIX (ROTTERDAM ⇄ JEBEL ALI ⇄ SINGAPORE) — EN ROUTE [ON SCHEDULE]',
      highlightColor: 'text-emerald-400'
    },
    {
      id: 2,
      tag: 'SPOT COMMODITY ALLOCATION',
      tagColor: 'bg-red-500/20 text-red-400 border-red-500/40',
      icon: Flame,
      text: 'FRESH GALA APPLES, SINDHRI & ALPHONSO MANGOES — 40 TONS IMMEDIATE COLD-CHAIN DISPATCH',
      highlightColor: 'text-emerald-400'
    },
    {
      id: 3,
      tag: 'ASTM & ISO SPECIFICATION',
      tagColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
      icon: Sparkles,
      text: 'BASE OIL SN150 & BITUMEN 60/70 — HIGH-PURITY REFINERY BATCH READY FOR LOADING',
      highlightColor: 'text-purple-300'
    },
    {
      id: 4,
      tag: 'BILATERAL TRADE CORRIDOR',
      tagColor: 'bg-blue-500/20 text-cyan-300 border-blue-500/40',
      icon: Globe2,
      text: 'SERVING 50+ NATIONS ACROSS EUROPE, GCC, ASIA, AMERICAS & AFRICA',
      highlightColor: 'text-cyan-300'
    },
    {
      id: 5,
      tag: 'PRE-SHIPMENT VERIFIED',
      tagColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      icon: ShieldCheck,
      text: '100% SGS & BUREAU VERITAS PRE-SHIPMENT LAB TESTING GUARANTEED',
      highlightColor: 'text-amber-300'
    },
    {
      id: 6,
      tag: 'GOLDEN STAR EXPORT SOLUTIONS',
      tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      icon: CheckCircle2,
      text: "GOLDEN STAR COMPANY — PREMIER TRADE & SOURCING • SEAMLESS GLOBAL MARKET EXPANSION",
      highlightColor: 'text-[#10B981]'
    }
  ];

  return (
    <div className={`relative w-full overflow-hidden bg-[#07090E] border-y border-emerald-500/30 shadow-2xl py-3.5 select-none ${className}`}>
      {/* Laser Gradient Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-80" />
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />

      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#DF9A28_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] cursor-pointer">
        {/* Render twice for seamless infinite loop */}
        {[...tickerItems, ...tickerItems].map((item, index) => {
          const IconComp = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3.5 mx-6 sm:mx-8 whitespace-nowrap group transition-transform duration-200 hover:scale-105"
            >
              {/* Colored Status Tag */}
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${item.tagColor} shadow-sm backdrop-blur-sm`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping"></span>
                <span>{item.tag}</span>
              </span>

              {/* Icon */}
              <IconComp className={`w-4 h-4 ${item.highlightColor} shrink-0 group-hover:rotate-12 transition-transform`} />

              {/* Bold Italic High-Impact Black Typography with Colored Accents */}
              <span className="font-montserrat italic font-black text-xs sm:text-sm tracking-wider text-white uppercase drop-shadow">
                {item.text}
              </span>

              {/* Decorative Separator */}
              <span className="text-[#DF9A28] text-sm font-bold opacity-75 ml-2">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
