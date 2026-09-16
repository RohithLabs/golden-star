import React from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { ShieldCheck, FileText, Lock } from 'lucide-react';

export const TermsPrivacyPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-navy-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Legal, Privacy & Trade Terms' }]} className="mb-8" />

        <div className="mb-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold-500 font-heading block mb-1">
            Corporate Governance & Trade Policy
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Commercial Terms & Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Last Updated: January 2026 • Golden Star Company International Import & Export Operations
          </p>
        </div>

        <div className="space-y-10 text-xs sm:text-sm text-slate-300">
          {/* Section 1: Privacy Policy */}
          <section className="bg-navy-900 border border-navy-800 rounded-lg p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-white font-heading flex items-center gap-2">
              <Lock className="w-5 h-5 text-gold-500" />
              <span>1. Commercial Privacy & Data Protection</span>
            </h2>
            <p className="leading-relaxed">
              Golden Star Company recognizes the confidential nature of international corporate transactions. All information submitted via our Request a Quote portals, direct email inquiries, and commercial purchase orders is treated with rigorous corporate confidentiality.
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400 pl-2">
              <li>Commercial inquiries, buyer names, destination ports, and volumes are never sold or shared with external marketing brokers.</li>
              <li>Operational details are shared strictly with relevant freight forwarders, ocean carriers, and customs agencies solely to execute freight bookings and clearance documentation.</li>
              <li>Technical specifications and proprietary drawings submitted for custom sourcing are safeguarded under commercial non-disclosure principles.</li>
            </ul>
          </section>

          {/* Section 2: Commercial Terms of Trade */}
          <section className="bg-navy-900 border border-navy-800 rounded-lg p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-white font-heading flex items-center gap-2">
              <FileText className="w-5 h-5 text-gold-500" />
              <span>2. Standard Terms of International Trade</span>
            </h2>
            <p className="leading-relaxed">
              All commercial quotations, proforma invoices, and supply agreements are subject to the specific terms stipulated in the formal bilateral sales contract.
            </p>
            <div className="space-y-3">
              <div>
                <h3 className="font-bold text-white mb-1">Incoterms 2020 Compliance</h3>
                <p className="text-slate-400 leading-relaxed">
                  Unless otherwise specified in writing, all trade quotations conform to the International Chamber of Commerce (ICC) Incoterms 2020 rules (including FOB, CIF, CFR, and EXW). Risk and cost allocations transfer exactly as established under the contracted term.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white mb-1">Specification Tolerance & Inspection</h3>
                <p className="text-slate-400 leading-relaxed">
                  Technical specifications, moisture content thresholds, dimensional allowances, and purity ratings are formalized in the contract annex. Goods verified and sealed at the origin port in the presence of authorized inspectors constitute valid contractual delivery.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white mb-1">Payment Instruments</h3>
                <p className="text-slate-400 leading-relaxed">
                  International transactions are executed via confirmed Irrevocable Letters of Credit (LC) payable at sight, Telegraphic Transfer (T/T), or designated commercial escrow accounts as agreed in the commercial contract.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Trade Compliance & Ethics */}
          <section id="trade-compliance" className="bg-navy-900 border border-navy-800 rounded-lg p-6 sm:p-8 space-y-4 scroll-mt-28">
            <h2 className="text-xl font-bold text-white font-heading flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-gold-500" />
              <span>3. International Trade Compliance & Ethical Governance</span>
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
