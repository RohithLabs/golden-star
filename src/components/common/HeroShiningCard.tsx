import React from 'react';
import { ShieldCheck, Globe2, Ship, CheckCircle2 } from 'lucide-react';

export const HeroShiningCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto">
      {/* Clean, structured executive board container with consistent white styling */}
      <div className="rounded-3xl bg-white p-4 sm:p-5 shadow-xl border border-slate-200">
        
        {/* Main Image Showcase */}
        <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-[4/3] sm:aspect-[16/11]">
          <img
            src="/hero-featured.jpg"
            alt="Golden Star Company Logistics and Trade Operations"
            className="w-full h-full object-cover rounded-2xl block"
            loading="eager"
          />

          {/* Top Status Pill */}
          <div className="absolute top-3.5 left-3.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-bold text-white shadow-sm border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-pulse" />
              Verified Export Desk
            </span>
          </div>

          {/* Bottom SGS Badge */}
          <div className="absolute bottom-3.5 left-3.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-slate-900 shadow-sm border border-slate-200">
              <ShieldCheck className="w-3.5 h-3.5 text-[#DC2626]" />
              SGS Inspected
            </span>
          </div>
        </div>

        {/* Structured Bottom Info Board - Clean, No Long Words, Perfect Grid */}
        <div className="mt-4 pt-3.5 border-t border-slate-100 grid grid-cols-3 gap-2 sm:gap-3 text-center">
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
            <div className="flex items-center justify-center gap-1 text-[#0284C7] mb-1">
              <Ship className="w-4 h-4" />
            </div>
            <div className="text-xs font-black text-slate-900">Sea &amp; Air</div>
            <div className="text-[10px] font-semibold text-slate-500">Freight</div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
            <div className="flex items-center justify-center gap-1 text-[#EA580C] mb-1">
              <Globe2 className="w-4 h-4" />
            </div>
            <div className="text-xs font-black text-slate-900">50+ Ports</div>
            <div className="text-[10px] font-semibold text-slate-500">Worldwide</div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
            <div className="flex items-center justify-center gap-1 text-[#DC2626] mb-1">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="text-xs font-black text-slate-900">ISO 9001</div>
            <div className="text-[10px] font-semibold text-slate-500">Certified</div>
          </div>
        </div>

      </div>
    </div>
  );
};
