import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { ProcessTimeline } from '../components/common/ProcessTimeline';
import { 
  Globe2, 
  Target, 
  Scale,
  CheckCircle2,
  Award,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface AboutPageProps {
  onRequestQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onRequestQuote }) => {
  return (
    <div className="pt-20 sm:pt-24 pb-20 bg-white min-h-screen text-slate-900 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'About Golden Star Company' }]} className="mb-6" />

        {/* Hero Section */}
        <section className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 p-8 sm:p-12 lg:p-16 mb-16 shadow-xs">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold tracking-wider uppercase text-[#EA580C] shadow-xs mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>About Golden Star Company</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-6">
              Facilitating Global Commerce Through Integrity &amp; Execution.
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              Golden Star Company was established with a singular operational focus: to create reliable, transparent trade bridges connecting verified regional producers with international commercial buyers. We operate across vital commodity sectors with an uncompromising commitment to specification precision and contract integrity.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={onRequestQuote}
                className="bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-full flex items-center gap-2 shadow-md shadow-orange-500/20 transition-all cursor-pointer"
              >
                <span>Work With Golden Star Company</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/products"
                className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-full transition-all shadow-xs cursor-pointer"
              >
                Explore Commodities
              </Link>
            </div>
          </div>
        </section>

        {/* Who We Are & What We Do */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#EA580C] text-xs font-bold tracking-wider uppercase shadow-xs">
              <Award className="w-3.5 h-3.5" />
              <span>Who We Are</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 leading-tight">
              An International Trading House Designed for Modern Supply Chains.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              In a volatile global economic landscape, importers and manufacturers require more than basic broker introductions—they demand accountable partners who manage the complete supply continuum. Golden Star Company is structured as an end-to-end international trading facilitator.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We eliminate speculative risks by coordinating directly with accredited agricultural cooperatives, petroleum refineries, mineral extraction plants, and certified manufacturing facilities. From commercial contract origination and Incoterms alignment to final seaport discharge, our team ensures every consignment meets buyer expectations.
            </p>
            <div className="border-l-4 border-[#EA580C] pl-4 py-2 bg-orange-50/50 rounded-r">
              <span className="text-base sm:text-lg text-slate-800 font-semibold italic block">
                "We measure success not by one-off transactions, but by the continuity of supply and the trust earned across recurring commercial contracts."
              </span>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
              alt="Industrial materials and quality verification"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-xs">
              <span className="text-xs font-bold text-[#EA580C] block uppercase tracking-wider">Core Commercial Scope</span>
              <span className="text-sm text-slate-900 font-bold">Bilateral Import, Export, Bulk Supply &amp; Sourcing Coordination</span>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-12 mb-20 shadow-xs">
          <SectionHeading
            eyebrow="Operational Philosophy"
            title="Our Approach to International Trade"
            description="How we safeguard commercial transactions from procurement through transit and customs."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 p-6 rounded-xl group hover:border-[#EA580C] transition-colors shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#EA580C] flex items-center justify-center mb-4 border border-orange-200 shadow-xs">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#EA580C] transition-colors">
                Precise Specification Alignment
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Before contract signing, technical parameters (moisture, purity, tensile strength, grading) are formalized in clear schedules, avoiding ambiguity.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-xl group hover:border-[#0284C7] transition-colors shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center mb-4 border border-sky-200 shadow-xs">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#0284C7] transition-colors">
                Commercial Contract Integrity
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every transaction operates under internationally accepted ICC Incoterms 2020 and established commercial payment protocols (Letters of Credit / Escrow).
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-xl group hover:border-[#DC2626] transition-colors shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center mb-4 border border-red-200 shadow-xs">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#DC2626] transition-colors">
                Active Freight Oversight
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We coordinate container stuffing, seaworthy packaging, and carrier booking with global container lines to prevent transit bottlenecks.
              </p>
            </div>
          </div>
        </section>

        {/* Our Core Values */}
        <section className="mb-20">
          <SectionHeading
            eyebrow="Guiding Principles"
            title="Our Values in Every Trade"
            description="The principles that govern our interactions with buyers, suppliers, port authorities, and logistics partners."
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Transparency",
                desc: "Open commercial communication regarding origin, lead times, freight conditions, and document status."
              },
              {
                title: "Quality Integrity",
                desc: "Zero tolerance for grade substitution. Goods shipped match agreed pre-shipment benchmarks without variance."
              },
              {
                title: "Accountability",
                desc: "Direct operational ownership from initial quotation until cargo handover at the designated destination port."
              },
              {
                title: "Sustainable Partnerships",
                desc: "Prioritizing recurring B2B relationships that build long-term supply resilience and shared commercial prosperity."
              }
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#EA580C] font-bold text-xs flex items-center justify-center mb-3 border border-orange-200">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{val.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How We Work Section */}
        <section className="mb-20 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs">
          <SectionHeading
            eyebrow="Workflow Structure"
            title="How We Execute International Transactions"
            description="Review the systematic five-stage process applied to every transaction."
            className="mb-10"
          />
          <ProcessTimeline />
        </section>

        {/* Global Perspective */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20 bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-xs">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              CROSS-BORDER CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Global Perspective With Ground-Level Execution
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Navigating international trade dynamics requires in-depth understanding of customs procedures, tariffs, shipping routes, and regional compliance requirements. Golden Star Company bridges the gap between local producers and overseas buyers, ensuring compliance at both origin and destination.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                <span>Deep awareness of maritime shipping lanes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                <span>Multilingual trade coordination desks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                <span>Origin certification &amp; inspection protocols</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                <span>Tailored packaging for tropical and marine transit</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-8 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl shadow-xs">
            <Globe2 className="w-12 h-12 text-[#EA580C] mb-3" />
            <h4 className="text-lg font-bold text-slate-950">
              Connect With Our Trading Desk
            </h4>
            <p className="text-xs text-slate-600 mt-2 mb-5 leading-relaxed">
              Discuss your procurement criteria directly with an international trade specialist.
            </p>
            <button
              type="button"
              onClick={onRequestQuote}
              className="bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full flex items-center gap-2 shadow-md shadow-orange-500/20 transition-all cursor-pointer"
            >
              <span>Request Commercial Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center py-12 border-t border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-3">
            Ready to Expand Your Supply Capabilities?
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto mb-6">
            Whether you require a trial container or a multi-thousand-ton contracted supply program, we are prepared to review your requirements.
          </p>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={onRequestQuote}
              className="bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full flex items-center gap-2 shadow-md shadow-orange-500/20 cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/contact"
              className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-xs cursor-pointer"
            >
              Contact Trading Desk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
