import React from 'react';
import { fiveStepProcess } from '../../data/company';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  return (
    <div className="w-full">
      {/* Desktop Horizontal Timeline (>= lg) */}
      <div className="hidden lg:grid grid-cols-5 gap-4 relative">
        {/* Connector Line */}
        <div className="absolute top-7 left-8 right-8 h-0.5 bg-gradient-to-r from-gold-500/20 via-gold-500/50 to-gold-500/20 z-0" />

        {fiveStepProcess.map((step, idx) => (
          <div key={step.step} className="relative z-10 flex flex-col group">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-14 h-14 rounded-md bg-navy-900 border-2 border-gold-500/60 flex items-center justify-center text-gold-400 font-heading font-extrabold text-lg shadow-lg group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300">
                {step.step}
              </div>
              {idx < fiveStepProcess.length - 1 && (
                <ArrowRight className="w-4 h-4 text-gold-500/40 hidden" />
              )}
            </div>
            
            <div className="bg-navy-900/80 border border-navy-700/80 rounded p-4 h-full flex flex-col justify-between group-hover:border-gold-500/40 transition-colors">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-500 block mb-1">
                  {step.subheading}
                </span>
                <h3 className="text-lg font-bold text-white mb-2 font-heading">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-navy-800 flex items-center text-[11px] text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 mr-1.5 shrink-0" />
                <span>Standard Trade Gate</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile & Tablet Vertical Timeline (< lg) */}
      <div className="lg:hidden space-y-4 relative pl-6 sm:pl-8">
        {/* Vertical line indicator */}
        <div className="absolute top-4 bottom-4 left-3 sm:left-4 w-0.5 bg-gradient-to-b from-gold-500 via-gold-500/60 to-navy-700" />

        {fiveStepProcess.map((step) => (
          <div key={step.step} className="relative group">
            {/* Step circle marker */}
            <div className="absolute -left-6 sm:-left-8 top-1.5 w-6 h-6 rounded-full bg-navy-900 border-2 border-gold-500 flex items-center justify-center text-[10px] font-bold text-gold-400">
              {step.step}
            </div>

            <div className="bg-navy-900/90 border border-navy-700/80 rounded p-4 group-hover:border-gold-500/40 transition-colors">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gold-500 block mb-0.5">
                {step.subheading}
              </span>
              <h3 className="text-base font-bold text-white mb-1.5 font-heading">
                {step.step} — {step.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
