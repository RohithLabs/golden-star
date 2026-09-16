import React, { useState } from 'react';
import { Button } from '../common/Button';
import { CheckCircle2, Send, Lock } from 'lucide-react';

interface ContactFormProps {
  className?: string;
  defaultType?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ className = '', defaultType }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phoneOrWhatsApp: '',
    country: '',
    productOrRequirement: '',
    quantity: '',
    inquiryType: defaultType || 'Product Sourcing',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required';
    if (!formData.businessEmail.trim()) {
      errs.businessEmail = 'Business email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.businessEmail)) {
      errs.businessEmail = 'Enter a valid business email';
    }
    if (!formData.country.trim()) errs.country = 'Country is required';
    if (!formData.message.trim()) errs.message = 'Please provide details of your requirement';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  if (isSuccess) {
    return (
      <div className="bg-white border border-emerald-300 rounded-xl p-8 text-center max-w-lg mx-auto shadow-md">
        <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-ocean-900 font-montserrat mb-2">
          Message Dispatched
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-6 font-lato">
          Thank you for reaching out to Golden Star Company. Our international business desk has logged your enquiry and will respond within 24 business hours.
        </p>
        <Button
          variant="amber"
          size="sm"
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              fullName: '',
              companyName: '',
              businessEmail: '',
              phoneOrWhatsApp: '',
              country: '',
              productOrRequirement: '',
              quantity: '',
              inquiryType: 'Product Sourcing',
              message: ''
            });
          }}
        >
          Send Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`space-y-4 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-work">
        <div>
          <label htmlFor="c-fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
            Full Name <span className="text-amber-500">*</span>
          </label>
          <input
            type="text"
            id="c-fullName"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Johnathan Doe"
            className={`w-full bg-slate-50 border ${
              errors.fullName ? 'border-red-500' : 'border-slate-300'
            } rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:bg-white focus:outline-none font-lato`}
          />
          {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="c-companyName" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
            Company Name <span className="text-amber-500">*</span>
          </label>
          <input
            type="text"
            id="c-companyName"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            placeholder="Trading & Supply Corp"
            className={`w-full bg-slate-50 border ${
              errors.companyName ? 'border-red-500' : 'border-slate-300'
            } rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:bg-white focus:outline-none font-lato`}
          />
          {errors.companyName && <p className="text-xs text-red-500 mt-1">{errors.companyName}</p>}
        </div>

        <div>
          <label htmlFor="c-businessEmail" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
            Business Email <span className="text-amber-500">*</span>
          </label>
          <input
            type="email"
            id="c-businessEmail"
            value={formData.businessEmail}
            onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
            placeholder="contact@company.com"
            className={`w-full bg-slate-50 border ${
              errors.businessEmail ? 'border-red-500' : 'border-slate-300'
            } rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:bg-white focus:outline-none font-lato`}
          />
          {errors.businessEmail && <p className="text-xs text-red-500 mt-1">{errors.businessEmail}</p>}
        </div>

        <div>
          <label htmlFor="c-phoneOrWhatsApp" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
            Phone / WhatsApp
          </label>
          <input
            type="text"
            id="c-phoneOrWhatsApp"
            value={formData.phoneOrWhatsApp}
            onChange={(e) => setFormData({ ...formData, phoneOrWhatsApp: e.target.value })}
            placeholder="+1 555 123 4567"
            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:bg-white focus:outline-none font-lato"
          />
        </div>

        <div>
          <label htmlFor="c-country" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
            Country <span className="text-amber-500">*</span>
          </label>
          <input
            type="text"
            id="c-country"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            placeholder="e.g. Netherlands, UAE, Singapore..."
            className={`w-full bg-slate-50 border ${
              errors.country ? 'border-red-500' : 'border-slate-300'
            } rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:bg-white focus:outline-none font-lato`}
          />
          {errors.country && <p className="text-xs text-red-500 mt-1">{errors.country}</p>}
        </div>

        <div>
          <label htmlFor="c-inquiryType" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
            Inquiry Category
          </label>
          <select
            id="c-inquiryType"
            value={formData.inquiryType}
            onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:border-amber-500 focus:bg-white focus:outline-none font-work"
          >
            <option value="Product Sourcing">Agricultural Commodities</option>
            <option value="Bulk Supply">Petroleum & Petrochemicals</option>
            <option value="Export Services">Industrial & Minerals</option>
            <option value="Partnership">Supplier / Producer Partnership</option>
            <option value="General Commercial">General Commercial Inquiries</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-work">
        <div>
          <label htmlFor="c-product" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
            Commodity / Product Name
          </label>
          <input
            type="text"
            id="c-product"
            value={formData.productOrRequirement}
            onChange={(e) => setFormData({ ...formData, productOrRequirement: e.target.value })}
            placeholder="e.g. Gala Apples, Base Oil SN150..."
            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:bg-white focus:outline-none font-lato"
          />
        </div>

        <div>
          <label htmlFor="c-quantity" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
            Estimated Volume / MT
          </label>
          <input
            type="text"
            id="c-quantity"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            placeholder="e.g. 100 MT / 4 x 40ft containers"
            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:bg-white focus:outline-none font-lato"
          />
        </div>
      </div>

      <div>
        <label htmlFor="c-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1 font-work">
          Commercial Specifications & Requirements <span className="text-amber-500">*</span>
        </label>
        <textarea
          id="c-message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please describe target delivery port, packaging specifications, target delivery month, or any required test certificates..."
          className={`w-full bg-slate-50 border ${
            errors.message ? 'border-red-500' : 'border-slate-300'
          } rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:bg-white focus:outline-none resize-y font-lato`}
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button
          type="submit"
          variant="amber"
          size="md"
          disabled={isSubmitting}
          icon={isSubmitting ? undefined : Send}
          className="w-full sm:w-auto font-montserrat font-bold shadow-md"
        >
          {isSubmitting ? 'Transmitting Enquiry...' : 'Send Commercial Enquiry'}
        </Button>

        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-lato">
          <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>Strict commercial NDA & privacy compliance</span>
        </div>
      </div>
    </form>
  );
};
