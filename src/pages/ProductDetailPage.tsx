import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsCatalog } from '../data/products';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { ProductCard } from '../components/common/ProductCard';
import { 
  ShieldCheck, 
  Package, 
  Layers, 
  MapPin, 
  Clock, 
  FileText, 
  ArrowLeft,
  Anchor,
  ArrowRight
} from 'lucide-react';

interface ProductDetailPageProps {
  onRequestQuote: (productName?: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onRequestQuote }) => {
  const { slug } = useParams<{ slug: string }>();

  const product = productsCatalog.find((p) => p.slug === slug);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // If product is not found, show friendly fallback
  if (!product) {
    return (
      <div className="pt-32 pb-24 bg-white min-h-screen text-center px-4 text-slate-900">
        <div className="max-w-md mx-auto bg-slate-50 border border-slate-200 p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">
            Product Listing Not Found
          </h2>
          <p className="text-xs text-slate-600 mb-6 leading-relaxed">
            The requested trade commodity or product code may have been updated or archived. Please explore our live catalogue or contact our trade desk.
          </p>
          <div className="flex justify-center gap-3">
            <Link 
              to="/products"
              className="bg-[#EA580C] hover:bg-[#C2410C] text-white px-5 py-2.5 rounded-full text-xs font-bold transition-colors shadow-sm"
            >
              Back to Products
            </Link>
            <button 
              type="button" 
              onClick={() => onRequestQuote()}
              className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 px-5 py-2.5 rounded-full text-xs font-bold transition-colors"
            >
              Request Trade Quote
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Related products from same category
  const relatedProducts = productsCatalog
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="pt-24 sm:pt-28 pb-24 bg-white min-h-screen text-slate-900 selection:bg-[#EA580C] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
          <Breadcrumb
            items={[
              { label: 'Products', to: '/products' },
              { label: product.category, to: `/products?category=${product.categorySlug}` },
              { label: product.name }
            ]}
          />
          <Link
            to="/products"
            className="text-xs font-bold text-slate-500 hover:text-[#EA580C] flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">All Products Catalog</span>
          </Link>
        </div>

        {/* Main Product Layout (Gallery + Specifications Overview) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Left Column: Image Gallery (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Featured Image Display */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={`${product.name} - View ${activeImageIndex + 1}`}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-white bg-[#DC2626] shadow-sm">
                  {product.exportAvailability === 'In Stock' ? 'PREMIUM EXPORT' : product.exportAvailability}
                </span>
              </div>
            </div>

            {/* Thumbnail Selectors */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-[#EA580C] scale-105 shadow-sm'
                        : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Trade Assurance Callout */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-xs text-slate-600 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
                <span>Inspection &amp; Verification Standards</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Consignments are inspected against contracted technical parameters prior to container sealing. Independent inspection reports (SGS / Bureau Veritas / Intertek) can be coordinated upon contract terms.
              </p>
            </div>
          </div>

          {/* Right Column: Key Commercial Details (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              {/* Category & Name */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-extrabold tracking-wider text-[#EA580C] uppercase">
                  {product.category}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs font-semibold text-slate-500">SKU: {product.id.toUpperCase()}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                {product.name}
              </h1>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {product.fullOverview}
              </p>

              {/* Commercial Parameters Grid */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3.5 mb-6 shadow-xs">
                <div className="flex items-start justify-between text-xs pb-2.5 border-b border-slate-200">
                  <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                    <Package className="w-4 h-4 text-[#EA580C]" />
                    <span>Minimum Order (MOQ):</span>
                  </span>
                  <span className="font-bold text-slate-900 text-right">{product.minimumOrderQuantity}</span>
                </div>

                <div className="flex items-start justify-between text-xs pb-2.5 border-b border-slate-200">
                  <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                    <Layers className="w-4 h-4 text-[#0284C7]" />
                    <span>Supply Capacity:</span>
                  </span>
                  <span className="font-bold text-slate-900 text-right">{product.supplyCapacity}</span>
                </div>

                <div className="flex items-start justify-between text-xs pb-2.5 border-b border-slate-200">
                  <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                    <MapPin className="w-4 h-4 text-[#DC2626]" />
                    <span>Origin:</span>
                  </span>
                  <span className="font-bold text-slate-900 text-right">{product.origin}</span>
                </div>

                <div className="flex items-start justify-between text-xs pb-2.5 border-b border-slate-200">
                  <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                    <Clock className="w-4 h-4 text-[#EA580C]" />
                    <span>Production / Dispatch Lead Time:</span>
                  </span>
                  <span className="font-bold text-slate-900 text-right">{product.leadTime}</span>
                </div>

                <div className="flex items-start justify-between text-xs">
                  <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                    <Anchor className="w-4 h-4 text-[#0284C7]" />
                    <span>Supported Incoterms:</span>
                  </span>
                  <div className="flex gap-1.5 font-bold text-slate-900">
                    {product.incotermsSupported.map((term, i) => (
                      <span key={i} className="bg-white px-2.5 py-0.5 rounded-md border border-slate-200 text-slate-800 text-xs shadow-2xs">
                        {term}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Packaging Specification */}
              <div className="mb-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Packaging &amp; Transport Protection:
                </h3>
                <p className="text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-xs leading-relaxed">
                  {product.packaging}
                </p>
              </div>

              {/* Available Variants */}
              {product.gradesOrVariants && product.gradesOrVariants.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Available Grades &amp; Variants:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.gradesOrVariants.map((grade, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg shadow-2xs font-medium"
                      >
                        {grade}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => onRequestQuote(product.name)}
                className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Pricing &amp; Commercial Terms</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/contact"
                className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors text-center shadow-xs"
              >
                General Inquiry
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed Technical Specifications Table */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 mb-16 shadow-xs">
          <div className="border-b border-slate-200 pb-4 mb-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#EA580C]" />
              <span>Full Technical Specifications Schedule</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Indicative parameters subject to final commercial contract and verified certificate of analysis.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 uppercase text-[11px] bg-slate-100/60">
                  <th className="py-3 px-4 font-bold w-1/3">Parameter</th>
                  <th className="py-3 px-4 font-bold w-2/3">Specification Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {product.specifications.map((spec, idx) => (
                  <tr key={idx} className="hover:bg-slate-100/50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{spec.label}</td>
                    <td className="py-3.5 px-4 text-slate-600">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Products from Same Trade Category */}
        {relatedProducts.length > 0 && (
          <section className="border-t border-slate-200 pt-14">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
                  EXPLORE MORE
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-0.5">
                  Related Commodities in {product.category.split(',')[0]}
                </h3>
              </div>
              <Link
                to={`/products?category=${product.categorySlug}`}
                className="text-xs font-bold text-[#EA580C] hover:text-[#C2410C] flex items-center gap-1 transition-colors"
              >
                <span>View Category</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} onQuickQuote={(prod) => onRequestQuote(prod.name)} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
