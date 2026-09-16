import React from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { ShieldCheck, FileText, Lock } from 'lucide-react';

export const TermsPrivacyPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-white min-h-screen text-slate-900 selection:bg-[#EA580C] selection:text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Legal, Privacy & Trade Terms' }]} className="mb-8" />

        <div className="mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-[#EA580C] block mb-1">
            Corporate Governance &amp; Trade Policy
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Commercial Terms &amp; Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Last Updated: January 2026 • Golden Star Company International Import &amp; Export Operations
          </p>
        </div>

        <div className="space-y-8 text-xs sm:text-sm text-slate-600">
          {/* Section 1: Privacy Policy */}
          <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#0284C7]" />
              <span>1. Commercial Privacy &amp; Data Protection</span>
            </h2>
            <p className="leading-relaxed">
              Golden Star Company recognizes the confidential nature of international corporate transactions. All information submitted via our Request a Quote portals, direct email inquiries, and commercial purchase orders is treated with rigorous corporate confidentiality.
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 pl-2">
              <li>Commercial inquiries, buyer names, destination ports, and volumes are never sold or shared with external marketing brokers.</li>
              <li>Operational details are shared strictly with relevant freight forwarders, ocean carriers, and customs agencies solely to execute freight bookings and clearance documentation.</li>
              <li>Technical specifications and proprietary drawings submitted for custom sourcing are safeguarded under commercial non-disclosure principles.</li>
            </ul>
          </section>

          {/* Section 2: Commercial Terms of Trade */}
          <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#EA580C]" />
              <span>2. Standard Terms of International Trade</span>
            </h2>
            <p className="leading-relaxed">
              All commercial quotations, proforma invoices, and supply agreements are subject to the specific terms stipulated in the formal bilateral sales contract.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Incoterms 2020 Compliance</h3>
                <p className="text-slate-600 leading-relaxed">
                  Unless otherwise specified in writing, all trade quotations conform to the International Chamber of Commerce (ICC) Incoterms 2020 rules (including FOB, CIF, CFR, and EXW). Risk and cost allocations transfer exactly as established under the contracted term.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-1">Specification Tolerance &amp; Inspection</h3>
                <p className="text-slate-600 leading-relaxed">
                  Technical specifications, moisture content thresholds, dimensional allowances, and purity ratings are formalized in the contract annex. Goods verified and sealed at the origin port in the presence of authorized inspectors constitute valid contractual delivery.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-1">Payment Instruments</h3>
                <p className="text-slate-600 leading-relaxed">
                  International transactions are executed via confirmed Irrevocable Letters of Credit (LC) payable at sight, Telegraphic Transfer (T/T), or designated commercial escrow accounts as agreed in the commercial contract.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Trade Compliance & Ethics */}
          <section id="trade-compliance" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 scroll-mt-28 shadow-xs">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#DC2626]" />
              <span>3. International Trade Compliance &amp; Ethical Governance</span>
            </h2>
            <p className="leading-relaxed">
              Golden Star Company conducts international trade operations in compliance with applicable bilateral trade treaties, maritime safety regulations, and export-import statutory laws. We strictly avoid prohibited trade regimes and maintain verifiable documentation records for all cross-border transactions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
