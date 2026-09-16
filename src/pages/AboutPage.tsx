import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { ProcessTimeline } from '../components/common/ProcessTimeline';
import { 
  Globe2, 
  Target, 
  Scale,
  CheckCircle2,
  Award
} from 'lucide-react';

interface AboutPageProps {
  onRequestQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onRequestQuote }) => {
  return (
    <div className="pt-20 sm:pt-24 pb-20 bg-[#0A0A0A] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'About Golden Star Company' }]} className="mb-6" />

        {/* Hero Section */}
        <section className="relative rounded-2xl overflow-hidden border border-slate-200 bg-ocean-950 p-8 sm:p-12 lg:p-16 mb-16 shadow-xl text-white">
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=2000&q=80"
              alt="International commercial trade negotiation and global business meeting"
              className="w-full h-full object-cover filter contrast-125"
            />
            <div className="absolute inset-0 bg-ocean-950/80" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold tracking-widest uppercase text-amber-400 font-raleway block mb-2">
              ABOUT GOLDEN STAR COMPANY
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-montserrat tracking-tight leading-tight mb-6">
              Facilitating Global Commerce Through Integrity & Execution.
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 font-lato">
              Golden Star Company was established with a singular operational focus: to create reliable, transparent trade bridges connecting verified regional producers with international commercial buyers. We operate across vital commodity sectors with an uncompromising commitment to specification precision and contract integrity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="amber" size="md" onClick={onRequestQuote} showArrow className="font-montserrat font-bold">
                Work With Golden Star Company
              </Button>
              <Button variant="ocean-outline" size="md" to="/products" className="text-white border-white/40 hover:border-amber-400 hover:text-amber-400 font-montserrat font-semibold">
                Explore Commodities
              </Button>
            </div>
          </div>
        </section>

        {/* Who We Are & What We Do */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold tracking-wider uppercase font-work">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>Who We Are</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ocean-900 font-montserrat leading-tight">
              An International Trading House Designed for Modern Supply Chains.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-lato">
              In a volatile global economic landscape, importers and manufacturers require more than basic broker introductions—they demand accountable partners who manage the complete supply continuum. Golden Star Company is structured as an end-to-end international trading facilitator.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-lato">
              We eliminate speculative risks by coordinating directly with accredited agricultural cooperatives, petroleum refineries, mineral extraction plants, and certified manufacturing facilities. From commercial contract origination and Incoterms alignment to final seaport discharge, our team ensures every consignment meets buyer expectations.
            </p>
            <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/60 rounded-r">
              <span className="font-cursive text-xl sm:text-2xl text-amber-800 font-bold block">
                "We measure success not by one-off transactions, but by the continuity of supply and the trust earned across recurring commercial contracts."
              </span>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
              alt="Industrial materials and quality verification"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-[#0A0A0A]/95 backdrop-blur-md p-4 rounded-xl border border-slate-100 shadow-md">
              <span className="text-xs font-bold text-amber-600 font-work block uppercase">Core Commercial Scope</span>
              <span className="text-sm text-ocean-900 font-bold font-montserrat">Bilateral Import, Export, Bulk Supply & Sourcing Coordination</span>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="bg-[#0A0A0A] border border-slate-200 rounded-2xl p-8 sm:p-12 mb-20 shadow-sm">
          <SectionHeading
            eyebrow="Operational Philosophy"
            title="Our Approach to International Trade"
            description="How we safeguard commercial transactions from procurement through transit and customs."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0A0A0A] border border-slate-200 p-6 rounded-xl group hover:border-amber-400 transition-colors shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 border border-amber-200 shadow-sm">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-ocean-900 font-montserrat mb-2 group-hover:text-amber-600 transition-colors">
                Precise Specification Alignment
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-lato">
                Before contract signing, technical parameters (moisture, purity, tensile strength, grading) are formalized in clear schedules, avoiding ambiguity.
              </p>
            </div>

            <div className="bg-[#0A0A0A] border border-slate-200 p-6 rounded-xl group hover:border-amber-400 transition-colors shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-ocean-50 text-ocean-700 flex items-center justify-center mb-4 border border-ocean-200 shadow-sm">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-ocean-900 font-montserrat mb-2 group-hover:text-amber-600 transition-colors">
                Commercial Contract Integrity
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-lato">
                Every transaction operates under internationally accepted ICC Incoterms 2020 and established commercial payment protocols (Letters of Credit / Escrow).
              </p>
            </div>

            <div className="bg-[#0A0A0A] border border-slate-200 p-6 rounded-xl group hover:border-amber-400 transition-colors shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 border border-emerald-200 shadow-sm">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-ocean-900 font-montserrat mb-2 group-hover:text-amber-600 transition-colors">
                Active Freight Oversight
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-lato">
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
              <div key={idx} className="bg-[#0A0A0A] p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 font-bold text-xs flex items-center justify-center mb-3 font-ubuntu border border-amber-200">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-ocean-900 font-montserrat mb-2">{val.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-lato">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How We Work Section */}
        <section className="mb-20 bg-[#0A0A0A] border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
          <SectionHeading
            eyebrow="Workflow Structure"
            title="How We Execute International Transactions"
            description="Review the systematic five-stage process applied to every transaction."
            className="mb-10"
          />
          <ProcessTimeline />
        </section>

        {/* Global Perspective */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20 bg-[#0A0A0A] border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-sm">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 font-raleway">
              CROSS-BORDER CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ocean-900 font-montserrat">
              Global Perspective With Ground-Level Execution
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-lato">
              Navigating international trade dynamics requires in-depth understanding of customs procedures, tariffs, shipping routes, and regional compliance requirements. Golden Star Company bridges the gap between local producers and overseas buyers, ensuring compliance at both origin and destination.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700 font-work">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Deep awareness of maritime shipping lanes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Multilingual trade coordination desks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Origin certification & inspection protocols</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tailored packaging for tropical and marine transit</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-8 bg-ocean-950 text-white border border-ocean-900 rounded-xl shadow-lg">
            <Globe2 className="w-12 h-12 text-amber-400 mb-3" />
            <h4 className="text-lg font-bold text-white font-montserrat">
              Connect With Our Trading Desk
            </h4>
            <p className="text-xs text-slate-300 mt-2 mb-5 leading-relaxed font-lato">
              Discuss your procurement criteria directly with an international trade specialist.
            </p>
            <Button variant="amber" size="sm" onClick={onRequestQuote} showArrow className="font-montserrat font-bold">
              Request Commercial Quote
            </Button>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center py-12 border-t border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ocean-900 font-montserrat mb-3">
            Ready to Expand Your Supply Capabilities?
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto mb-6 font-lato">
            Whether you require a trial container or a multi-thousand-ton contracted supply program, we are prepared to review your requirements.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="amber" size="md" onClick={onRequestQuote} showArrow className="font-montserrat font-bold">
              Request a Quote
            </Button>
            <Button variant="ocean-outline" size="md" to="/contact" className="font-montserrat font-semibold">
              Contact Trading Desk
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
