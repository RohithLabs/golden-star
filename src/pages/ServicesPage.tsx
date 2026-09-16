import React from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { 
  Globe2, 
  Ship, 
  Boxes, 
  Truck, 
  FileCheck2, 
  Search, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServicesPageProps {
  onRequestQuote: (serviceTitle?: string) => void;
}

const servicesData = [
  {
    id: 'serv-global-sourcing',
    num: '01',
    title: 'Global Sourcing',
    icon: Globe2,
    tag: 'Direct Procurement',
    summary: 'Direct origin procurement bridging international buyers with vetted producers across South India and global hubs.',
    highlights: [
      'Pre-vetted manufacturer networks',
      'Factory audits & quality validation',
      'Wholesale bulk pricing negotiations'
    ],
  },
  {
    id: 'serv-import-export',
    num: '02',
    title: 'Import & Export',
    icon: Ship,
    tag: 'Cross-Border Trade',
    summary: 'Turnkey international trade execution covering purchase agreements, customs clearance, and Letters of Credit.',
    highlights: [
      'Incoterms 2020 compliance (FOB, CIF, CFR)',
      'Secure LC & T/T payment settlement',
      'Zero-delay customs border clearance'
    ],
  },
  {
    id: 'serv-bulk-supply',
    num: '03',
    title: 'Bulk Supply Programs',
    icon: Boxes,
    tag: 'FCL & Breakbulk',
    summary: 'Contracted multi-container and breakbulk replenishment programs structured around your demand pacing.',
    highlights: [
      'Scheduled monthly & quarterly shipments',
      'Batch uniformity & lab verification',
      'Volume-based ocean freight rates'
    ],
  },
  {
    id: 'serv-logistics',
    num: '04',
    title: 'Logistics Coordination',
    icon: Truck,
    tag: 'Multimodal Transit',
    summary: 'End-to-end maritime, air, and overland freight coordination with premier shipping lines and live tracking.',
    highlights: [
      'Ocean FCL/LCL & reefer container bookings',
      'Inland road & rail feeder transit',
      'Continuous milestone cargo tracking'
    ],
  },
  {
    id: 'serv-documentation',
    num: '05',
    title: 'Trade Documentation',
    icon: FileCheck2,
    tag: '100% Compliance',
    summary: 'Flawless export documentation ensuring immediate bank negotiation and fast seaport customs release.',
    highlights: [
      'Clean Bills of Lading & Commercial Invoices',
      'Certificates of Origin & Phytosanitary records',
      'SGS & Bureau Veritas inspection certificates'
    ],
  },
  {
    id: 'serv-custom-sourcing',
    num: '06',
    title: 'Custom Procurement',
    icon: Search,
    tag: 'Tailored Specifications',
    summary: 'Bespoke commodity formulations, custom packaging, and contract manufacturing for specialized requirements.',
    highlights: [
      'OEM & private label packaging',
      'Custom purity & chemical thresholds',
      'Dedicated trade desk specialist'
    ],
  },
];

export const ServicesPage: React.FC<ServicesPageProps> = ({ onRequestQuote }) => {
  return (
    <div className="pt-24 pb-24 bg-white min-h-screen text-slate-900 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Services' }]} className="mb-8" />

        {/* Hero Banner — Centered & Punchy */}
        <section className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 p-8 sm:p-14 mb-16 text-center shadow-xs">
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#EA580C]/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#0284C7]/5 blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10 space-y-4 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-[#EA580C] uppercase tracking-widest shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#EA580C]" />
              Trade &amp; Logistics Solutions
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Structured Trade. <span className="font-serif italic font-normal text-[#0284C7]">Guaranteed Delivery.</span>
            </h1>
            
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Fast, dependable cross-border commerce connecting vetted South India producers to international buyers across 50+ nations.
            </p>
            
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => onRequestQuote('General Sourcing')}
                className="inline-flex items-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-md shadow-orange-500/20 cursor-pointer"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-xs cursor-pointer"
              >
                <span>Connect With Trade Desk</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 6 Punchy Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {servicesData.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-lg hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#EA580C] group-hover:bg-[#EA580C] group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 tracking-wider">
                      {service.num}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-[#0284C7] uppercase tracking-wider block mb-1">
                    {service.tag}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#EA580C] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {service.summary}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-100 mb-6">
                    {service.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#EA580C] shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onRequestQuote(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-[#EA580C] text-slate-800 hover:text-white py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer border border-slate-200"
                >
                  <span>Inquire {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Incoterms 2020 Quick Reference */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 mb-16 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[10px] font-bold text-[#EA580C] uppercase tracking-widest block mb-1">
                Standard Incoterms 2020
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                Supported Trade Terms
              </h2>
            </div>
            <p className="text-xs text-slate-600 max-w-md">
              Clear risk allocation, freight carriage, and marine insurance transfer on every maritime contract.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { term: 'FOB', name: 'Free on Board', desc: 'Goods cleared for export and delivered on board buyer nominated vessel. Risk transfers at rail.' },
              { term: 'CIF', name: 'Cost, Insurance & Freight', desc: 'We cover export clearance, marine transit insurance, and ocean freight to destination seaport.' },
              { term: 'CFR', name: 'Cost and Freight', desc: 'We handle export procedures and ocean freight to destination port. Buyer assumes marine insurance.' },
              { term: 'EXW', name: 'Ex Works', desc: 'Buyer manages inland haulage, customs clearance, and global transit directly from origin warehouse.' },
            ].map((item) => (
              <div key={item.term} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all">
                <span className="text-[#EA580C] font-bold text-sm block">{item.term}</span>
                <span className="text-[11px] text-slate-500 block mb-1">{item.name}</span>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center py-12 rounded-2xl bg-gradient-to-b from-orange-50/30 via-white to-slate-50 border border-slate-200 p-8 shadow-xs">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-2">
            Ready to Structure Your Next Trade Order?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto mb-6 leading-relaxed">
            Our trade desk responds with formal FOB/CIF quotations and specification sheets within 24 hours.
          </p>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={() => onRequestQuote()}
              className="inline-flex items-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-orange-500/20 cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-xs cursor-pointer"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
