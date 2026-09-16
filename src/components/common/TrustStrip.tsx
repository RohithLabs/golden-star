import React from 'react';
import { Globe2, Ship, Boxes, ShieldCheck, Compass } from 'lucide-react';

const iconsMap: Record<string, React.ElementType> = {
  Globe2,
  Ship,
  Boxes,
  ShieldCheck,
  Compass
};

interface TrustStripProps {
  className?: string;
}

export const TrustStrip: React.FC<TrustStripProps> = ({ className = '' }) => {
  const items = [
    { title: "Global Sourcing", desc: "Vetted international supply networks", icon: "Globe2" },
    { title: "International Trade", desc: "Cross-border contract execution", icon: "Ship" },
    { title: "Bulk Supply", desc: "FCL & volume procurement programs", icon: "Boxes" },
    { title: "Quality Focus", desc: "Specification verification protocols", icon: "ShieldCheck" },
    { title: "Reliable Logistics", desc: "Coordinated freight & customs transit", icon: "Compass" },
  ];

  return (
    <section aria-label="Trust Indicators" className={`border-y border-slate-200 bg-slate-50/80 py-6 sm:py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {items.map((item, idx) => {
            const IconComponent = iconsMap[item.icon] || Globe2;
            return (
              <div 
                key={idx} 
                className="flex items-start space-x-3.5 group transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-[#0284C7] shrink-0 group-hover:border-[#EA580C] group-hover:text-[#EA580C] transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 tracking-wide group-hover:text-[#EA580C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
