import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Anchor, ShieldCheck, Globe2, Sparkles } from 'lucide-react';

export const HeroShiningCard: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progression of this hero visual
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // 3D Perspective Transformations on Scroll
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -8]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, 40]);
  
  // Dynamic specular shine beam position driven by scroll
  const shineTranslateX = useTransform(scrollYProgress, [0, 1], ['-120%', '220%']);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-lg lg:max-w-none mx-auto"
      style={{ perspective: 1200 }}
    >
      {/* Ambient background glow behind the white card */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#DF9A28]/20 via-[#38BDF8]/25 to-[#DF9A28]/20 rounded-[36px] blur-2xl opacity-70 pointer-events-none transition-opacity duration-700 group-hover:opacity-90 animate-pulse" />

      {/* 3D Motion Card Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          y: yOffset,
          transformStyle: 'preserve-3d',
        }}
        className="relative z-10 rounded-[28px] bg-white p-3 sm:p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_50px_rgba(56,189,248,0.25)] border-2 border-white/95 group transition-shadow duration-500 hover:shadow-[0_30px_70px_-10px_rgba(56,189,248,0.35)]"
      >
        {/* Inner Media Canvas with Shimmer Overflow Hidden */}
        <div className="relative rounded-2xl overflow-hidden bg-white shadow-inner">
          
          {/* Continuous Ambient Shimmer Sweep (CSS) */}
          <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
            <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/50 to-transparent rotate-12 animate-shimmer" />
          </div>

          {/* Scroll-Driven Specular Light Beam (Framer Motion) */}
          <motion.div
            style={{ x: shineTranslateX }}
            className="absolute -inset-y-16 w-40 bg-gradient-to-r from-transparent via-white/80 to-transparent rotate-12 pointer-events-none z-25 opacity-75 blur-sm"
          />

          {/* Featured Logistics Image */}
          <img
            src="/hero-featured.jpg"
            alt="Golden Star Global Multimodal Logistics & International Trade Network"
            className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.03] block"
            loading="eager"
          />

          {/* Top-Left Verified Badge */}
          <div className="absolute top-3 left-3 z-30">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
              <Sparkles className="w-3 h-3 text-[#DF9A28]" />
              <span>Verified Export House</span>
            </div>
          </div>

          {/* Bottom-Left Quality Badge */}
          <div className="absolute bottom-3 left-3 z-30">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-emerald-500/30 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% SGS Quality Guaranteed</span>
            </div>
          </div>
        </div>

        {/* Floating Interactive Trade Micro-Badges outside image */}
        {/* Badge 1: Floating Top Right */}
        <div className="absolute -top-3.5 right-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E0E11]/95 backdrop-blur-xl border border-white/20 text-white shadow-2xl text-xs font-semibold z-40 hover:scale-105 transition-transform">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <Anchor className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span className="text-[11px] text-zinc-200">Sea &amp; Air Freight</span>
        </div>

        {/* Badge 2: Floating Bottom Right */}
        <div className="absolute -bottom-3.5 right-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E0E11]/95 backdrop-blur-xl border border-white/20 text-white shadow-2xl text-xs font-semibold z-40 hover:scale-105 transition-transform">
          <Globe2 className="w-3.5 h-3.5 text-[#DF9A28]" />
          <span className="text-[11px] text-zinc-200">50+ Global Port Terminals</span>
        </div>
      </motion.div>
    </div>
  );
};
