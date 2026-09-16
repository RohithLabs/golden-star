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
    <section aria-label="Trust Indicators" className={`border-y border-navy-700/80 bg-navy-900/90 py-6 sm:py-8 backdrop-blur-sm ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {items.map((item, idx) => {
            const IconComponent = iconsMap[item.icon] || Globe2;
            return (
              <div 
                key={idx} 
                className="flex items-start space-x-3.5 group transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded bg-navy-850 border border-navy-700 flex items-center justify-center text-gold-400 shrink-0 group-hover:border-gold-500/50 group-hover:bg-gold-500/10 transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-heading tracking-wide group-hover:text-gold-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5 leading-snug">
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
