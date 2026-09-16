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
    <div className="pt-20 sm:pt-24 pb-20 bg-navy-950 min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Global Reach & Corridors' }]} className="mb-8" />

        {/* Hero Section */}
        <section className="relative rounded-lg overflow-hidden border border-navy-700 bg-navy-900 p-8 sm:p-12 lg:p-16 mb-16 shadow-2xl">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-gold-400 font-heading block mb-2">
              International Trade Corridors
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight mb-6">
              From Local Supply to Global Markets.
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
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
        <section className="bg-navy-900 border border-navy-800 rounded-lg p-8 sm:p-12 mb-20">
          <SectionHeading
            eyebrow="Multimodal Capabilities"
            title="Multimodal Shipping Infrastructure"
            description="Leveraging premier shipping alliances, air cargo handlers, and inland intermodal links to guarantee transit velocity."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-navy-950 border border-navy-800 p-6 rounded group hover:border-gold-500/40 transition-colors">
              <div className="w-12 h-12 rounded bg-navy-900 text-gold-400 flex items-center justify-center mb-4 border border-navy-700">
                <Ship className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading mb-2">
                Ocean Maritime Freight
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Primary mode for high-volume commodities and heavy industrial cargo. Full Container Load (FCL: 20ft, 40ft HC), Less than Container Load (LCL), and bulk breakbulk vessel arrangements.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-500" />
                  <span>Deep-sea container carrier alliances</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-500" />
                  <span>Reefer container monitoring for perishables</span>
                </li>
              </ul>
            </div>

            <div className="bg-navy-950 border border-navy-800 p-6 rounded group hover:border-gold-500/40 transition-colors">
              <div className="w-12 h-12 rounded bg-navy-900 text-gold-400 flex items-center justify-center mb-4 border border-navy-700">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading mb-2">
                Inland Feeder & Intermodal Transit
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Connecting factory gates and harvest cooperatives directly to seaports via bonded rail and heavy-duty highway container haulage under customs seal.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-500" />
                  <span>Bonded factory-to-port inland transport</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-500" />
                  <span>Secure container stuffing supervision</span>
                </li>
              </ul>
            </div>

            <div className="bg-navy-950 border border-navy-800 p-6 rounded group hover:border-gold-500/40 transition-colors">
              <div className="w-12 h-12 rounded bg-navy-900 text-gold-400 flex items-center justify-center mb-4 border border-navy-700">
                <Plane className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading mb-2">
                Express Air Cargo & Samples
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Rapid air transit reserved for high-value specialty additives, urgent commercial replacement parts, and formal pre-production physical buyer samples.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-500" />
                  <span>Accelerated commercial lab dispatch</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-500" />
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
              <div key={reg.id} className="b2b-card rounded-md p-6 border border-navy-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-gold-500 uppercase tracking-widest font-heading">
                      {reg.code}
                    </span>
                    <span className="text-[10px] font-semibold uppercase bg-navy-950 px-2 py-0.5 rounded text-slate-400 border border-navy-800">
                      {reg.type.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading mb-2">
                    {reg.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {reg.description}
                  </p>

                  <div className="mb-4">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Key Traded Products:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {reg.keyCommodities.map((item, idx) => (
                        <span key={idx} className="text-[11px] bg-navy-950 text-slate-300 px-2 py-0.5 rounded border border-navy-800">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-navy-800">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Port Gateways:
                  </span>
                  <div className="text-xs text-slate-300 space-y-0.5">
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
        <div className="bg-navy-900 border border-navy-800 p-6 rounded-lg text-xs text-slate-400 flex items-start gap-3 mb-16">
          <AlertCircle className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-white font-heading">Trade Corridor Availability Notice:</h4>
            <p className="leading-relaxed">
              Golden Star Company structures export and import lanes in strict compliance with international maritime treaties, customs regulations, and client-specific destinations. Regional hubs and transit times indicated are subject to ocean carrier scheduling, vessel berthing availability, and prevailing port operations.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center py-10 border-t border-navy-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading mb-3">
            Inquire About Shipping to Your Port
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-6">
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
