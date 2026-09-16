import React from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeading } from '../components/common/SectionHeading';
import { WorldMapVisual } from '../components/common/WorldMapVisual';
import { Button } from '../components/common/Button';
import { tradeRegions } from '../data/tradeRegions';
import { 
  Ship, 
  Plane, 
  Truck, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';

interface GlobalReachPageProps {
  onRequestQuote: () => void;
}

export const GlobalReachPage: React.FC<GlobalReachPageProps> = ({ onRequestQuote }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-white min-h-screen text-slate-900 selection:bg-[#EA580C] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Global Reach & Corridors' }]} className="mb-8" />

        {/* Hero Section */}
        <section className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 p-8 sm:p-12 lg:p-16 mb-16 shadow-xs">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-bold tracking-widest uppercase text-[#EA580C] block mb-2">
              International Trade Corridors
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
              From Local Supply to Global Markets.
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              Golden Star Company connects regional manufacturing hubs and agricultural harvest basins with global commercial destinations. By synchronizing marine logistics, port handling, and customs compliance, we ensure goods transition smoothly across international borders.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="md" onClick={onRequestQuote} showArrow>
                Inquire About Your Destination Port
              </Button>
              <Button variant="outline" size="md" to="/services#logistics-coordination">
                Review Logistics Solutions
              </Button>
            </div>
          </div>
        </section>

        {/* Interactive World Map Section */}
        <section className="mb-20">
          <WorldMapVisual />
        </section>

        {/* Freight Modes & Infrastructure */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-12 mb-20 shadow-xs">
          <SectionHeading
            eyebrow="Multimodal Capabilities"
            title="Multimodal Shipping Infrastructure"
            description="Leveraging premier shipping alliances, air cargo handlers, and inland intermodal links to guarantee transit velocity."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 p-6 rounded-xl group hover:border-[#0284C7] transition-colors shadow-2xs">
              <div className="w-12 h-12 rounded-lg bg-sky-50 text-[#0284C7] flex items-center justify-center mb-4 border border-sky-100">
                <Ship className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Ocean Maritime Freight
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Primary mode for high-volume commodities and heavy industrial cargo. Full Container Load (FCL: 20ft, 40ft HC), Less than Container Load (LCL), and bulk breakbulk vessel arrangements.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>Deep-sea container carrier alliances</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>Reefer container monitoring for perishables</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-xl group hover:border-[#EA580C] transition-colors shadow-2xs">
              <div className="w-12 h-12 rounded-lg bg-orange-50 text-[#EA580C] flex items-center justify-center mb-4 border border-orange-100">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Inland Feeder &amp; Intermodal Transit
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Connecting factory gates and harvest cooperatives directly to seaports via bonded rail and heavy-duty highway container haulage under customs seal.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Bonded factory-to-port inland transport</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Secure container stuffing supervision</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-xl group hover:border-[#DC2626] transition-colors shadow-2xs">
              <div className="w-12 h-12 rounded-lg bg-rose-50 text-[#DC2626] flex items-center justify-center mb-4 border border-rose-100">
                <Plane className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Express Air Cargo &amp; Samples
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Rapid air transit reserved for high-value specialty additives, urgent commercial replacement parts, and formal pre-production physical buyer samples.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#DC2626]" />
                  <span>Accelerated commercial lab dispatch</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#DC2626]" />
                  <span>Airport-to-airport customs facilitation</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Regional Trade Corridors Detail Cards */}
        <section className="mb-20">
          <SectionHeading
            eyebrow="Market Operations"
            title="Strategic Regional Trade Corridors"
            description="Overview of primary regional sourcing networks and destination market hubs."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tradeRegions.map((reg) => (
              <div key={reg.id} className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-extrabold text-[#EA580C] uppercase tracking-widest">
                      {reg.code}
                    </span>
                    <span className="text-[10px] font-bold uppercase bg-slate-100 px-2 py-0.5 rounded text-slate-600 border border-slate-200">
                      {reg.type.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 mb-2">
                    {reg.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {reg.description}
                  </p>

                  <div className="mb-4">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                      Key Traded Products:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {reg.keyCommodities.map((item, idx) => (
                        <span key={idx} className="text-[11px] bg-slate-50 text-slate-700 px-2 py-0.5 rounded border border-slate-200 font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    Port Gateways:
                  </span>
                  <div className="text-xs text-slate-600 space-y-0.5">
                    {reg.portsOrHubs.map((hub, idx) => (
                      <div key={idx} className="truncate">• {hub}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Corporate Notice */}
        <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl text-xs text-slate-600 flex items-start gap-3 mb-16 shadow-2xs">
          <AlertCircle className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-slate-900">Trade Corridor Availability Notice:</h4>
            <p className="leading-relaxed">
              Golden Star Company structures export and import lanes in strict compliance with international maritime treaties, customs regulations, and client-specific destinations. Regional hubs and transit times indicated are subject to ocean carrier scheduling, vessel berthing availability, and prevailing port operations.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center py-10 border-t border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
            Inquire About Shipping to Your Port
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto mb-6">
            Our logistics desk can calculate freight rates, vessel transit times, and packaging requirements for your specific discharge port.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="primary" size="md" onClick={onRequestQuote} showArrow>
              Request Port Quotation
            </Button>
            <Button variant="secondary" size="md" to="/contact">
              Contact Logistics Desk
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
