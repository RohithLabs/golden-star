import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { QuoteForm } from '../components/forms/QuoteForm';
import { ShieldCheck, Clock, Globe2 } from 'lucide-react';

export const QuotePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialProduct = searchParams.get('product') || '';

  return (
    <div className="pt-20 sm:pt-24 pb-24 bg-white min-h-screen text-slate-900 font-montserrat">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Request a Formal Quote' }]} className="mb-8" />

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold tracking-wider uppercase text-[#EA580C] shadow-xs mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Commercial Quotation Desk</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
            Request a Formal <em className="italic text-[#EA580C] font-normal">B2B Quotation</em>
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Please provide your technical parameters, estimated volume, and destination discharge port. Our trade specialists will structure competitive commercial terms and shipping schedules.
          </p>
        </div>

        {/* Trust Indicators Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center gap-3.5 shadow-xs">
            <Clock className="w-5 h-5 text-[#EA580C] shrink-0" />
            <div>
              <span className="text-xs font-bold text-slate-900 block">Fast Quotation</span>
              <span className="text-[11px] text-slate-500">Formal quote in 24–48 hours</span>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center gap-3.5 shadow-xs">
            <ShieldCheck className="w-5 h-5 text-[#DC2626] shrink-0" />
            <div>
              <span className="text-xs font-bold text-slate-900 block">Specification Rigor</span>
              <span className="text-[11px] text-slate-500">Exact technical parameter match</span>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center gap-3.5 shadow-xs">
            <Globe2 className="w-5 h-5 text-[#0284C7] shrink-0" />
            <div>
              <span className="text-xs font-bold text-slate-900 block">Global Freight</span>
              <span className="text-[11px] text-slate-500">Incoterms CIF, FOB, CFR, EXW</span>
            </div>
          </div>
        </div>

        {/* Main Quote Form Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs">
          <QuoteForm initialProduct={initialProduct} />
        </div>
      </div>
    </div>
  );
};
