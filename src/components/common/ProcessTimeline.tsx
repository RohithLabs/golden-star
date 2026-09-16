import React from 'react';
import { fiveStepProcess } from '../../data/company';
import { CheckCircle2 } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  return (
    <div className="w-full">
      {/* Desktop Horizontal Timeline (>= lg) */}
      <div className="hidden lg:grid grid-cols-5 gap-4 relative">
        {/* Connector Line */}
        <div className="absolute top-7 left-8 right-8 h-0.5 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 z-0" />

        {fiveStepProcess.map((step) => (
          <div key={step.step} className="relative z-10 flex flex-col group">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-14 h-14 rounded-xl bg-white border-2 border-[#EA580C] flex items-center justify-center text-[#EA580C] font-black text-lg shadow-sm group-hover:bg-[#EA580C] group-hover:text-white transition-all duration-300">
                {step.step}
              </div>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-xl p-5 h-full flex flex-col justify-between group-hover:border-[#EA580C] transition-colors shadow-2xs">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#EA580C] block mb-1">
                  {step.subheading}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[11px] text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] mr-1.5 shrink-0" />
                <span>Standard Trade Gate</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile & Tablet Vertical Timeline (< lg) */}
      <div className="lg:hidden space-y-4 relative pl-6 sm:pl-8">
        {/* Vertical line indicator */}
        <div className="absolute top-4 bottom-4 left-3 sm:left-4 w-0.5 bg-gradient-to-b from-orange-500 via-orange-300 to-slate-200" />

        {fiveStepProcess.map((step) => (
          <div key={step.step} className="relative group">
            {/* Step circle marker */}
            <div className="absolute -left-6 sm:-left-8 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-[#EA580C] flex items-center justify-center text-[10px] font-bold text-[#EA580C]">
              {step.step}
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4 group-hover:border-[#EA580C] transition-colors shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#EA580C] block mb-0.5">
                {step.subheading}
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                {step.step} — {step.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
