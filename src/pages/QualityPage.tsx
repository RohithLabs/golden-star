import React from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  Layers, 
  Package, 
  Ship, 
  FileCheck2, 
  Eye,
  ArrowUpRight,
  Sparkles,
  Award
} from 'lucide-react';

interface QualityPageProps {
  onRequestQuote: () => void;
}

export const QualityPage: React.FC<QualityPageProps> = ({ onRequestQuote }) => {
  const qualityWorkflow = [
    {
      step: "01",
      title: "Source",
      subtitle: "Supplier Selection",
      icon: Search,
      badgeColor: "bg-amber-50 text-amber-600 border-amber-200",
      desc: "Comprehensive operational vetting of producer facilities, production machinery, raw material inputs, and historical capacity to maintain consistent output."
    },
    {
      step: "02",
      title: "Inspect",
      subtitle: "Specification Testing",
      icon: Eye,
      badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
      desc: "Physical sampling against contracted specification schedules. Verification of purity, moisture content, dimensional tolerances, and mechanical parameters."
    },
    {
      step: "03",
      title: "Verify",
      subtitle: "Batch Compliance",
      icon: CheckCircle2,
      badgeColor: "bg-blue-50 text-blue-600 border-blue-200",
      desc: "Comparison of factory batch test records with contract thresholds. Independent third-party inspection agencies (e.g. SGS / Intertek) coordinated upon request."
    },
    {
      step: "04",
      title: "Pack",
      subtitle: "Export Protection",
      icon: Package,
      badgeColor: "bg-purple-50 text-purple-600 border-purple-200",
      desc: "Enforcing heavy-duty, seaworthy packaging standards (PP woven bags, heat-treated ISPM-15 wooden pallets, desiccant bags, shrink-wrapping) to prevent transit degradation."
    },
    {
      step: "05",
      title: "Ship",
      subtitle: "Stuffing & Sealing",
      icon: Ship,
      badgeColor: "bg-orange-50 text-orange-600 border-orange-200",
      desc: "Supervised container loading to ensure balanced weight distribution, secure cargo dunnage, structural container cleanliness, and tamper-evident customs sealing."
    },
    {
      step: "06",
      title: "Deliver",
      subtitle: "Handover & Records",
      icon: FileCheck2,
      badgeColor: "bg-rose-50 text-rose-600 border-rose-200",
      desc: "Complete documentation pack transmitted including bills of lading, packing lists, inspection reports, and certificates of origin for flawless destination customs entry."
    }
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-20 bg-[#FCFBF9] min-h-screen text-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Quality Assurance Framework' }]} className="mb-8" />

        {/* Hero Section — White Luxury Card with Image Accent */}
        <section className="relative rounded-3xl overflow-hidden border border-slate-200 bg-[#0A0A0A] p-8 sm:p-12 lg:p-16 mb-16 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
          <div className="max-w-3xl relative z-10 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-[#DF9A28] text-xs font-bold font-raleway tracking-wider uppercase">
              <Award className="w-3.5 h-3.5" />
              <span>Assurance &amp; Verification Framework</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] font-montserrat tracking-tight leading-tight">
              Quality <em className="italic text-[#10B981] font-raleway font-bold">Without Compromise.</em>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-lato max-w-2xl">
              In cross-border B2B trade, quality is defined by strict fidelity to contracted specifications. Golden Star Company enforces a rigorous multi-stage verification framework ensuring that every consignment arriving at destination seaports matches customer-approved technical parameters.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                type="button"
                onClick={onRequestQuote}
                className="bg-[#111111] hover:bg-black text-white text-xs font-bold font-montserrat tracking-wider uppercase px-6 py-3 rounded-full flex items-center gap-2 shadow-sm transition-all hover:scale-105 cursor-pointer"
              >
                <span>Request Quality Schedule</span>
                <ArrowUpRight className="w-4 h-4 text-[#DF9A28]" />
              </button>

              <a
                href="/contact"
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold font-montserrat tracking-wider uppercase px-6 py-3 rounded-full transition-colors"
              >
                Consult Inspection Desk
              </a>
            </div>
          </div>
        </section>

        {/* Visual Quality Workflow */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#DF9A28] font-raleway mb-2">The Quality Pipeline</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#111111] tracking-tight">
              The 6-Stage Quality <em className="italic text-[#DF9A28] font-raleway">Assurance Workflow</em>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-lato leading-relaxed">
              From initial producer selection to destination discharge, our inspection gates prevent non-compliant materials from leaving origin facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityWorkflow.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-[#0A0A0A] border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shadow-xs transition-colors ${item.badgeColor}`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-black text-slate-300 group-hover:text-[#DF9A28] font-ubuntu transition-colors">
                        {item.step}
                      </span>
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DF9A28] font-work block mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-[#111111] font-montserrat mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-lato">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-[11px] text-slate-500 font-work">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] mr-1.5 shrink-0" />
                    <span>Quality Sign-off Gate Passed</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Deep Dive into Key Areas */}
        <section className="space-y-8 mb-20">
          <div className="bg-[#0A0A0A] border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-xs">
            <h2 className="text-2xl font-bold text-[#111111] font-montserrat mb-6 flex items-center gap-3">
              <Layers className="w-6 h-6 text-[#DF9A28]" />
              <span>Inspection Parameters by Commodity Category</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#FAF9F6] border border-slate-200/80 p-5 rounded-xl">
                <h3 className="text-sm font-bold text-[#10B981] font-montserrat uppercase tracking-wide mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Agricultural &amp; Fresh Produce</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-600 font-source">
                  <li className="flex items-start gap-1.5">• <span>Moisture content thresholds (metered analysis)</span></li>
                  <li className="flex items-start gap-1.5">• <span>Foreign matter &amp; purity screening (&gt;98.5%)</span></li>
                  <li className="flex items-start gap-1.5">• <span>Sortex optical color sorting &amp; size grading</span></li>
                  <li className="flex items-start gap-1.5">• <span>Phytosanitary &amp; cold-chain temperature logs</span></li>
                </ul>
              </div>

              <div className="bg-[#FAF9F6] border border-slate-200/80 p-5 rounded-xl">
                <h3 className="text-sm font-bold text-[#DF9A28] font-montserrat uppercase tracking-wide mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Petrochemicals &amp; Fuels</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-600 font-source">
                  <li className="flex items-start gap-1.5">• <span>Specific gravity &amp; kinematic viscosity at 40°C</span></li>
                  <li className="flex items-start gap-1.5">• <span>Flash point, pour point &amp; sulfur content testing</span></li>
                  <li className="flex items-start gap-1.5">• <span>Total Base Number (TBN) &amp; ash content limits</span></li>
                  <li className="flex items-start gap-1.5">• <span>SGS / Saybolt pre-shipment lab verification</span></li>
                </ul>
              </div>

              <div className="bg-[#FAF9F6] border border-slate-200/80 p-5 rounded-xl">
                <h3 className="text-sm font-bold text-[#7C3AED] font-montserrat uppercase tracking-wide mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Industrial Hardware &amp; Grains</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-600 font-source">
                  <li className="flex items-start gap-1.5">• <span>Tensile strength &amp; proof load tolerance tests</span></li>
                  <li className="flex items-start gap-1.5">• <span>Calibrated dimensional &amp; thread pitch checks</span></li>
                  <li className="flex items-start gap-1.5">• <span>Salt spray corrosion resistance &amp; zinc plating</span></li>
                  <li className="flex items-start gap-1.5">• <span>Mill Test Certificate (MTC) 3.1 traceability</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#0A0A0A] border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-xs">
            <h2 className="text-2xl font-bold text-[#111111] font-montserrat mb-4 flex items-center gap-3">
              <Package className="w-6 h-6 text-[#10B981]" />
              <span>Seaworthy Packaging &amp; Loading Standards</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6 font-lato">
              Maritime ocean transit exposes cargo to extreme moisture, temperature swings, and structural stresses. We mandate packaging engineered specifically for international containerized shipping.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-lato">
              <div className="bg-[#FAF9F6] p-4 rounded-xl border border-slate-200/80">
                <div className="font-bold text-[#111111] font-montserrat mb-1">Moisture Protection</div>
                <p className="text-slate-500">Internal polyethylene liners, moisture-barrier wrapping, and industrial silica gel desiccants.</p>
              </div>
              <div className="bg-[#FAF9F6] p-4 rounded-xl border border-slate-200/80">
                <div className="font-bold text-[#111111] font-montserrat mb-1">Palletized Security</div>
                <p className="text-slate-500">ISPM-15 heat-treated export wooden pallets with heavy-gauge corner protectors and plastic strapping.</p>
              </div>
              <div className="bg-[#FAF9F6] p-4 rounded-xl border border-slate-200/80">
                <div className="font-bold text-[#111111] font-montserrat mb-1">Cargo Dunnage</div>
                <p className="text-slate-500">Container airbag dunnage and lashings preventing lateral cargo shifting during ocean rolling.</p>
              </div>
              <div className="bg-[#FAF9F6] p-4 rounded-xl border border-slate-200/80">
                <div className="font-bold text-[#111111] font-montserrat mb-1">Customs Sealing</div>
                <p className="text-slate-500">High-security bolt seals with serial numbering cross-referenced on the Ocean Bill of Lading.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Adherence Notice on Certifications */}
        <section className="bg-amber-50/70 border border-[#DF9A28]/30 rounded-2xl p-6 sm:p-8 mb-16 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] border border-[#DF9A28]/40 text-[#DF9A28] flex items-center justify-center shrink-0 mt-1 shadow-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold text-[#111111] font-montserrat">
                Our Verification Policy &amp; Client Transparency
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-lato">
                Golden Star Company adheres to strict corporate honesty: we do not make generic marketing claims or claim unverified third-party certifications. All commodity inspections, laboratory test reports, phytosanitary releases, and batch quality analyses are coordinated on an individualized contract basis according to destination customs requirements and buyer purchase orders.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center py-10 border-t border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] font-montserrat mb-3">
            Have Specific Quality &amp; Packaging Requirements?
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto mb-6 font-lato">
            Submit your technical data sheet or target parameters to our quality coordination team for a commercial review.
          </p>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={onRequestQuote}
              className="bg-[#111111] hover:bg-black text-white text-xs font-bold font-montserrat tracking-wider uppercase px-6 py-3 rounded-full flex items-center gap-2 shadow-sm transition-all hover:scale-105 cursor-pointer"
            >
              <span>Submit Quality Schedule</span>
              <ArrowUpRight className="w-4 h-4 text-[#DF9A28]" />
            </button>
            <a
              href="/contact"
              className="bg-[#0A0A0A] hover:bg-[#0A0A0A] border border-slate-200 text-slate-800 text-xs font-bold font-montserrat tracking-wider uppercase px-6 py-3 rounded-full transition-colors"
            >
              Speak With QA Specialist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
