import React from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { ContactForm } from '../components/forms/ContactForm';
import { companyData, tradeFaqs } from '../data/company';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Globe2, 
  ShieldCheck 
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-20 sm:pt-24 pb-20 bg-[#0A0A0A] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Contact Commercial Desk' }]} className="mb-6" />

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-amber-600 font-raleway block mb-1">
            COMMERCIAL INQUIRIES & PARTNERSHIPS
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ocean-900 font-montserrat tracking-tight leading-tight mb-4">
            Let's Start a Conversation.
          </h1>
          <div className="w-16 h-1 bg-amber-500 mb-3 rounded-full"></div>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-lato">
            Connect with our international trade desk. Whether you are inquiring about bulk pricing, container allocations, or private label sourcing, our procurement specialists are prepared to assist.
          </p>
        </div>

        {/* Main Grid: Form (7 cols) + Contact Details (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-20">
          {/* Left Column: B2B Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#0A0A0A] border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="border-b border-slate-100 pb-4 mb-6">
              <h2 className="text-xl font-bold text-ocean-900 font-montserrat">
                Direct Trade Enquiry Form
              </h2>
              <p className="text-xs text-slate-500 mt-1 font-lato">
                Please complete the parameters below. A trade specialist will review and respond within 24 business hours.
              </p>
            </div>

            <ContactForm />
          </div>

          {/* Right Column: Corporate Contacts & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Card 1: Direct Communication Channels */}
            <div className="bg-[#0A0A0A] border border-slate-200 rounded-2xl p-6 space-y-5 shadow-sm font-lato">
              <h3 className="text-base font-bold text-ocean-900 font-montserrat border-b border-slate-100 pb-3 flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-amber-500" />
                <span>Trading Desk Contacts</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-work">General & Trade Inquiries:</span>
                    <a href={`mailto:${companyData.email}`} className="text-ocean-900 hover:text-amber-600 font-bold break-all">
                      {companyData.email}
                    </a>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Monitored 24/7 by Trade Desk</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-work">International Telephone:</span>
                    <span className="text-ocean-900 font-bold">{companyData.phone}</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Standard business hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-work">WhatsApp Commercial Desk:</span>
                    <span className="text-ocean-900 font-bold">{companyData.whatsapp}</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Quick specs and transit queries</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-ocean-50 border border-ocean-200 flex items-center justify-center text-ocean-700 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-work">Corporate Office:</span>
                    <span className="text-slate-700 font-medium">{companyData.headquarters}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-work">Business Operating Hours:</span>
                    <span className="text-slate-700 font-medium">{companyData.businessHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Commercial Assurance Box */}
            <div className="bg-[#0A0A0A] border border-slate-200 rounded-2xl p-6 text-xs text-slate-600 space-y-2 shadow-sm font-lato">
              <div className="flex items-center gap-2 font-bold text-ocean-900 font-montserrat">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Commercial Verification Policy</span>
              </div>
              <p className="leading-relaxed text-[11px] text-slate-500">
                We welcome prospective buyers, institutional distributors, and corporate procurement directors to schedule a virtual trade consultation or arrange physical factory inspections during contract development.
              </p>
            </div>
          </div>
        </div>

        {/* International Trade FAQ Section */}
        <section className="bg-[#0A0A0A] border border-slate-200 rounded-2xl p-8 sm:p-12 mb-16 shadow-sm">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 font-raleway">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ocean-900 font-montserrat mt-1">
              International Trade & Sourcing FAQ
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-2 mb-3 rounded-full"></div>
            <p className="text-xs sm:text-sm text-slate-500 font-lato">
              Answers to standard procedural questions regarding contracts, Incoterms, and quality inspection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tradeFaqs.map((faq, idx) => (
              <div key={idx} className="bg-[#0A0A0A] border border-slate-200 p-6 rounded-xl space-y-2 shadow-sm font-lato">
                <h3 className="text-sm font-bold text-ocean-900 font-montserrat flex items-start gap-2">
                  <span className="text-amber-500 font-mono">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed pl-5 font-lato">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
