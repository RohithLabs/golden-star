import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { QuoteForm } from '../components/forms/QuoteForm';
import { ShieldCheck, Clock, Globe2 } from 'lucide-react';

export const QuotePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialProduct = searchParams.get('product') || '';

  return (
    <div className="pt-20 sm:pt-24 pb-24 bg-[#09090B] min-h-screen text-white selection:bg-[#E11D48] selection:text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Request a Formal Quote' }]} className="mb-8" />

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-[#E11D48] block mb-2">
            Commercial Quotation Desk
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Request a Formal <em className="font-newsreader italic text-[#DF9A28] font-normal">B2B Quotation</em>
          </h1>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Please provide your technical parameters, estimated volume, and destination discharge port. Our trade specialists will structure competitive commercial terms and shipping schedules.
          </p>
        </div>

        {/* Trust Indicators Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          <div className="bg-[#18181B] border border-[#27272A] p-4 rounded-xl flex items-center gap-3.5 shadow-sm">
            <Clock className="w-5 h-5 text-[#DF9A28] shrink-0" />
            <div>
              <span className="text-xs font-bold text-white block">Fast Quotation</span>
              <span className="text-[11px] text-zinc-400">Formal quote in 24–48 hours</span>
            </div>
          </div>
          <div className="bg-[#18181B] border border-[#27272A] p-4 rounded-xl flex items-center gap-3.5 shadow-sm">
            <ShieldCheck className="w-5 h-5 text-[#E11D48] shrink-0" />
            <div>
              <span className="text-xs font-bold text-white block">Specification Rigor</span>
              <span className="text-[11px] text-zinc-400">Exact technical parameter match</span>
            </div>
          </div>
          <div className="bg-[#18181B] border border-[#27272A] p-4 rounded-xl flex items-center gap-3.5 shadow-sm">
            <Globe2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="text-xs font-bold text-white block">Global Freight</span>
              <span className="text-[11px] text-zinc-400">Incoterms CIF, FOB, CFR, EXW</span>
            </div>
          </div>
        </div>

        {/* Main Quote Form Card */}
        <div className="bg-[#18181B] border border-[#27272A] rounded-2xl p-6 sm:p-10 shadow-2xl">
          <QuoteForm initialProduct={initialProduct} />
        </div>
      </div>
    </div>
  );
};
