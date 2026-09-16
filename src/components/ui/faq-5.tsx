import { cn } from '@/lib/utils';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Faq5Props {
  id?: string;
  badge?: string;
  heading?: string;
  description?: string;
  faqs?: FaqItem[];
  className?: string;
}

const defaultFaqs: FaqItem[] = [
  {
    question: 'What is the Minimum Order Quantity (MOQ) for export?',
    answer:
      'Our MOQ varies by product category. For agricultural commodities like basmati rice and pulses, the minimum is typically 1 x 20ft FCL (approximately 24 MT). For petroleum products, we work with tanker loads and flexitank shipments. Contact our trade desk for specific MOQ details.',
  },
  {
    question: 'Which countries does Golden Star Company export to?',
    answer:
      'We export to 50+ countries worldwide, with strong corridors in the Middle East (UAE, Saudi Arabia, Qatar, Kuwait), Southeast Asia (Singapore, Malaysia), Europe (UK, Germany, Netherlands), and Africa. We are continuously expanding our global reach.',
  },
  {
    question: 'What payment terms do you accept?',
    answer:
      'We accept Letter of Credit (LC at sight & usance), Telegraphic Transfer (TT), and Documentary Collections. For long-standing partners, we offer flexible payment arrangements. All transactions are supported by professional trade documentation.',
  },
  {
    question: 'Do you provide quality certification and pre-shipment inspection?',
    answer:
      'Yes. All our products undergo rigorous pre-shipment inspection by internationally recognized bodies including SGS, Bureau Veritas, and Intertek. We provide Certificates of Origin (COO), Phytosanitary Certificates, FSSAI compliance, and all necessary export documentation.',
  },
  {
    question: 'How do I get a price quote for my commodity requirement?',
    answer:
      'Fill out the Request a Quote form on our website with your product specification, quantity, destination port, and preferred Incoterms. Our trade specialists will respond within 24 business hours with a competitive CIF/FOB/CFR price indication.',
  },
  {
    question: 'What logistics support does Golden Star Company offer?',
    answer:
      'We offer comprehensive logistics solutions including FCL & LCL sea freight, reefer container services for perishables, air freight for urgent cargo, inland transport coordination, customs clearance assistance, and real-time cargo tracking through our partnered freight forwarder network.',
  },
];

export const Faq5 = ({
  id,
  badge = 'FAQ',
  heading = 'Common Trade Questions',
  description = 'Everything you need to know about trading with Golden Star Company.',
  faqs = defaultFaqs,
  className = '',
}: Faq5Props) => {
  return (
    <section id={id} className={cn('py-24 bg-slate-50 border-t border-slate-200', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#EA580C] border border-orange-200 bg-orange-50 px-3.5 py-1 rounded-full mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
            {badge}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {heading}
          </h2>
          <p className="mt-4 font-normal text-slate-600 max-w-xl mx-auto text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="flex gap-5 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md transition-all"
            >
              <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-orange-50 border border-orange-200 font-mono text-xs font-bold text-[#EA580C]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm leading-snug">
                  {faq.question}
                </h3>
                <p className="text-sm text-slate-600 font-normal leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
