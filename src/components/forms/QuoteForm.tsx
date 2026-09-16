import React, { useState } from 'react';
import { QuoteFormData } from '../../types';
import { productCategories, productsCatalog } from '../../data/products';
import { Button } from '../common/Button';
import { CheckCircle2, FileText, Send } from 'lucide-react';

interface QuoteFormProps {
  initialProduct?: string;
  onSuccess?: (refCode: string) => void;
  className?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialProduct = '',
  onSuccess,
  className = ''
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phoneOrWhatsApp: '',
    country: '',
    productRequirement: initialProduct,
    quantityRequired: '',
    unit: 'Metric Tons (MT)',
    targetDestinationPort: '',
    incoterms: 'CIF',
    additionalSpecifications: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Please provide a valid corporate email';
    }
    if (!formData.phoneOrWhatsApp.trim()) newErrors.phoneOrWhatsApp = 'Phone/WhatsApp is required';
    if (!formData.country.trim()) newErrors.country = 'Country / Region is required';
    if (!formData.productRequirement.trim()) newErrors.productRequirement = 'Product requirement is required';
    if (!formData.quantityRequired.trim()) newErrors.quantityRequired = 'Estimated quantity is required';
    if (!formData.targetDestinationPort.trim()) newErrors.targetDestinationPort = 'Target port / destination is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable B2B processing
    setTimeout(() => {
      const generatedRef = `GS-RFQ-${Date.now().toString().slice(-6)}`;
      setIsSubmitting(false);
      setSubmittedRef(generatedRef);
      if (onSuccess) onSuccess(generatedRef);
    }, 900);
  };

  if (submittedRef) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 text-center max-w-xl mx-auto shadow-xs">
        <div className="w-16 h-16 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center text-[#EA580C] mx-auto mb-5">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
          RFQ Reference: #{submittedRef}
        </span>

        <h3 className="text-2xl font-bold text-slate-950 mt-2 mb-3">
          Enquiry Received Successfully
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          Thank you for your enquiry. Our trade desk and procurement specialists will review your exact technical specifications, freight requirements, and volume allocations, and will issue a formal quotation to <strong className="text-slate-900">{formData.businessEmail}</strong> shortly.
        </p>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 text-left mb-6 space-y-1">
          <div><strong className="text-slate-900">Product:</strong> {formData.productRequirement}</div>
          <div><strong className="text-slate-900">Volume:</strong> {formData.quantityRequired} {formData.unit} ({formData.incoterms})</div>
          <div><strong className="text-slate-900">Destination:</strong> {formData.targetDestinationPort}</div>
        </div>

        <button
          type="button"
          onClick={() => {
            setSubmittedRef(null);
            setFormData({
              fullName: '',
              companyName: '',
              businessEmail: '',
              phoneOrWhatsApp: '',
              country: '',
              productRequirement: '',
              quantityRequired: '',
              unit: 'Metric Tons (MT)',
              targetDestinationPort: '',
              incoterms: 'CIF',
              additionalSpecifications: ''
            });
          }}
          className="bg-[#EA580C] hover:bg-[#C2410C] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-xs cursor-pointer"
        >
          Submit Another Trade Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`space-y-6 ${className}`}>
      {/* Step 1: Corporate Contact Information */}
      <div className="space-y-4">
        <div className="border-b border-slate-200 pb-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#EA580C] flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-orange-100 text-[#EA580C] text-xs flex items-center justify-center font-bold">1</span>
            <span>Buyer &amp; Company Profile</span>
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
              Full Name <span className="text-[#EA580C]">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. David Vance"
              className={`w-full bg-slate-50 border ${
                errors.fullName ? 'border-red-500' : 'border-slate-300'
              } rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#EA580C] focus:bg-white focus:outline-none`}
            />
            {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label htmlFor="companyName" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
              Company / Entity Name <span className="text-[#EA580C]">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              placeholder="e.g. Apex Global Trading Ltd"
              className={`w-full bg-slate-50 border ${
                errors.companyName ? 'border-red-500' : 'border-slate-300'
              } rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#EA580C] focus:bg-white focus:outline-none`}
            />
            {errors.companyName && <p className="text-xs text-red-500 mt-1">{errors.companyName}</p>}
          </div>

          <div>
            <label htmlFor="businessEmail" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
              Business Email <span className="text-[#EA580C]">*</span>
            </label>
            <input
              type="email"
              id="businessEmail"
              value={formData.businessEmail}
              onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
              placeholder="procurement@company.com"
              className={`w-full bg-slate-50 border ${
                errors.businessEmail ? 'border-red-500' : 'border-slate-300'
              } rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#EA580C] focus:bg-white focus:outline-none`}
            />
            {errors.businessEmail && <p className="text-xs text-red-500 mt-1">{errors.businessEmail}</p>}
          </div>

          <div>
            <label htmlFor="phoneOrWhatsApp" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
              Phone / WhatsApp with Country Code <span className="text-[#EA580C]">*</span>
            </label>
            <input
              type="text"
              id="phoneOrWhatsApp"
              value={formData.phoneOrWhatsApp}
              onChange={(e) => setFormData({ ...formData, phoneOrWhatsApp: e.target.value })}
              placeholder="+1 (555) 019-2834"
              className={`w-full bg-slate-50 border ${
                errors.phoneOrWhatsApp ? 'border-red-500' : 'border-slate-300'
              } rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#EA580C] focus:bg-white focus:outline-none`}
            />
            {errors.phoneOrWhatsApp && <p className="text-xs text-red-500 mt-1">{errors.phoneOrWhatsApp}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="country" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
            Country of Operation / Headquarters <span className="text-[#EA580C]">*</span>
          </label>
          <input
            type="text"
            id="country"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            placeholder="e.g. United Arab Emirates, Germany, United States, Japan"
            className={`w-full bg-slate-50 border ${
              errors.country ? 'border-red-500' : 'border-slate-300'
            } rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#EA580C] focus:bg-white focus:outline-none`}
          />
          {errors.country && <p className="text-xs text-red-500 mt-1">{errors.country}</p>}
        </div>
      </div>

      {/* Step 2: Commercial Product & Volume */}
      <div className="space-y-4 pt-2">
        <div className="border-b border-slate-200 pb-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#EA580C] flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-orange-100 text-[#EA580C] text-xs flex items-center justify-center font-bold">2</span>
            <span>Product &amp; Commercial Volume</span>
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label htmlFor="productRequirement" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
              Product Interested In / Requirement <span className="text-[#EA580C]">*</span>
            </label>
            <input
              type="text"
              id="productRequirement"
              list="catalogSuggestions"
              value={formData.productRequirement}
              onChange={(e) => setFormData({ ...formData, productRequirement: e.target.value })}
              placeholder="e.g. Commercial Grade Grains, Industrial Fasteners, Polymer Resins..."
              className={`w-full bg-slate-50 border ${
                errors.productRequirement ? 'border-red-500' : 'border-slate-300'
              } rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#EA580C] focus:bg-white focus:outline-none`}
            />
            <datalist id="catalogSuggestions">
              {productsCatalog.map(p => (
                <option key={p.id} value={p.name} />
              ))}
              {productCategories.map(c => (
                <option key={c.id} value={c.title} />
              ))}
            </datalist>
            {errors.productRequirement && <p className="text-xs text-red-500 mt-1">{errors.productRequirement}</p>}
          </div>

          <div>
            <label htmlFor="quantityRequired" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
              Quantity Required <span className="text-[#EA580C]">*</span>
            </label>
            <input
              type="text"
              id="quantityRequired"
              value={formData.quantityRequired}
              onChange={(e) => setFormData({ ...formData, quantityRequired: e.target.value })}
              placeholder="e.g. 50, 100, 500"
              className={`w-full bg-slate-50 border ${
                errors.quantityRequired ? 'border-red-500' : 'border-slate-300'
              } rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#EA580C] focus:bg-white focus:outline-none`}
            />
            {errors.quantityRequired && <p className="text-xs text-red-500 mt-1">{errors.quantityRequired}</p>}
          </div>

          <div>
            <label htmlFor="unit" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
              Unit of Measurement
            </label>
            <select
              id="unit"
              value={formData.unit}
              onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:border-[#EA580C] focus:bg-white focus:outline-none"
            >
              <option value="Metric Tons (MT)">Metric Tons (MT)</option>
              <option value="20ft Containers (FCL)">20ft Containers (FCL)</option>
              <option value="40ft High Cube (HC)">40ft High Cube (HC)</option>
              <option value="Kilograms (kg)">Kilograms (kg)</option>
              <option value="Pallets">Pallets</option>
              <option value="Pieces / Units">Pieces / Units</option>
            </select>
          </div>

          <div>
            <label htmlFor="targetDestinationPort" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
              Target Destination Port / Seaport <span className="text-[#EA580C]">*</span>
            </label>
            <input
              type="text"
              id="targetDestinationPort"
              value={formData.targetDestinationPort}
              onChange={(e) => setFormData({ ...formData, targetDestinationPort: e.target.value })}
              placeholder="e.g. Port of Rotterdam, Jebel Ali, Hamburg, Singapore"
              className={`w-full bg-slate-50 border ${
                errors.targetDestinationPort ? 'border-red-500' : 'border-slate-300'
              } rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#EA580C] focus:bg-white focus:outline-none`}
            />
            {errors.targetDestinationPort && <p className="text-xs text-red-500 mt-1">{errors.targetDestinationPort}</p>}
          </div>

          <div>
            <label htmlFor="incoterms" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
              Preferred Incoterm
            </label>
            <select
              id="incoterms"
              value={formData.incoterms}
              onChange={(e) => setFormData({ ...formData, incoterms: e.target.value as any })}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:border-[#EA580C] focus:bg-white focus:outline-none"
            >
              <option value="CIF">CIF (Cost, Insurance &amp; Freight)</option>
              <option value="FOB">FOB (Free on Board)</option>
              <option value="CFR">CFR (Cost &amp; Freight)</option>
              <option value="EXW">EXW (Ex Works)</option>
              <option value="Flexible">Flexible / Advise Best Option</option>
            </select>
          </div>
        </div>
      </div>

      {/* Step 3: Specifications & Requirements */}
      <div className="space-y-4 pt-2">
        <div className="border-b border-slate-200 pb-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#EA580C] flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-orange-100 text-[#EA580C] text-xs flex items-center justify-center font-bold">3</span>
            <span>Technical Specifications &amp; Packaging Notes</span>
          </h4>
        </div>

        <div>
          <label htmlFor="additionalSpecifications" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
            Specific Technical Parameters, Grade, Packaging or Inspection Criteria (Optional)
          </label>
          <textarea
            id="additionalSpecifications"
            rows={3}
            value={formData.additionalSpecifications}
            onChange={(e) => setFormData({ ...formData, additionalSpecifications: e.target.value })}
            placeholder="Include required purity, mesh size, tensile strength, bag weights, target delivery month, or special customs certifications..."
            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-[#EA580C] focus:bg-white focus:outline-none resize-y"
          />
        </div>
      </div>

      {/* Submit Button & Compliance Notice */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={isSubmitting}
          icon={isSubmitting ? undefined : Send}
          iconPosition="right"
          className="shadow-md"
        >
          {isSubmitting ? "Processing RFQ Submission..." : "Submit Request for Quotation"}
        </Button>

        <p className="text-[11px] text-slate-500 text-center mt-3 flex items-center justify-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-[#EA580C]" />
          <span>All commercial inquiries handled with strict confidentiality. No automated spam.</span>
        </p>
      </div>
    </form>
  );
};
