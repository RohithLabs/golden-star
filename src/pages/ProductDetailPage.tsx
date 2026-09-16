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
      <div className="pt-32 pb-24 bg-[#09090B] min-h-screen text-center px-4 text-white">
        <div className="max-w-md mx-auto bg-[#18181B] border border-[#27272A] p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-3">
            Product Listing Not Found
          </h2>
          <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
            The requested trade commodity or product code may have been updated or archived. Please explore our live catalogue or contact our trade desk.
          </p>
          <div className="flex justify-center gap-3">
            <Link 
              to="/products"
              className="bg-[#E11D48] hover:bg-[#BE123C] text-white px-5 py-2.5 rounded-full text-xs font-bold"
            >
              Back to Products
            </Link>
            <button 
              type="button" 
              onClick={() => onRequestQuote()}
              className="bg-[#27272A] hover:bg-[#3F3F46] text-white border border-zinc-700 px-5 py-2.5 rounded-full text-xs font-bold"
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
    <div className="pt-20 sm:pt-24 pb-24 bg-[#09090B] min-h-screen text-white selection:bg-[#E11D48] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Breadcrumb
            items={[
              { label: 'Products', to: '/products' },
              { label: product.category, to: `/products?category=${product.categorySlug}` },
              { label: product.name }
            ]}
          />
          <Link
            to="/products"
            className="text-xs font-bold text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
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
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-[#27272A] shadow-xl">
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={`${product.name} - View ${activeImageIndex + 1}`}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-[#E11D48] bg-black/80 backdrop-blur-md border border-white/10 shadow">
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
                        ? 'border-[#E11D48] scale-105 shadow-md'
                        : 'border-[#27272A] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Trade Assurance Callout */}
            <div className="bg-[#18181B] border border-[#27272A] rounded-2xl p-5 text-xs text-zinc-400 space-y-2 shadow-xl">
              <div className="flex items-center gap-2 font-bold text-white text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Inspection &amp; Verification Standards</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Consignments are inspected against contracted technical parameters prior to container sealing. Independent inspection reports (SGS / Bureau Veritas / Intertek) can be coordinated upon contract terms.
              </p>
            </div>
          </div>

          {/* Right Column: Key Commercial Details (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              {/* Category & Name */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold tracking-wider text-[#E11D48] uppercase">
                  {product.category}
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-xs text-zinc-500">SKU: {product.id.toUpperCase()}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-4">
                {product.name}
              </h1>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                {product.fullOverview}
              </p>

              {/* Commercial Parameters Grid */}
              <div className="bg-[#18181B] border border-[#27272A] rounded-2xl p-5 space-y-3.5 mb-6 shadow-xl">
                <div className="flex items-start justify-between text-xs pb-2.5 border-b border-[#27272A]">
                  <span className="text-zinc-400 flex items-center gap-1.5 font-medium">
                    <Package className="w-4 h-4 text-[#E11D48]" />
                    <span>Minimum Order (MOQ):</span>
                  </span>
                  <span className="font-bold text-white text-right">{product.minimumOrderQuantity}</span>
                </div>

                <div className="flex items-start justify-between text-xs pb-2.5 border-b border-[#27272A]">
                  <span className="text-zinc-400 flex items-center gap-1.5 font-medium">
                    <Layers className="w-4 h-4 text-[#DF9A28]" />
                    <span>Supply Capacity:</span>
                  </span>
                  <span className="font-bold text-white text-right">{product.supplyCapacity}</span>
                </div>

                <div className="flex items-start justify-between text-xs pb-2.5 border-b border-[#27272A]">
                  <span className="text-zinc-400 flex items-center gap-1.5 font-medium">
                    <MapPin className="w-4 h-4 text-[#E11D48]" />
                    <span>Origin:</span>
                  </span>
                  <span className="font-bold text-white text-right">{product.origin}</span>
                </div>

                <div className="flex items-start justify-between text-xs pb-2.5 border-b border-[#27272A]">
                  <span className="text-zinc-400 flex items-center gap-1.5 font-medium">
                    <Clock className="w-4 h-4 text-[#DF9A28]" />
                    <span>Production / Dispatch Lead Time:</span>
                  </span>
                  <span className="font-bold text-white text-right">{product.leadTime}</span>
                </div>

                <div className="flex items-start justify-between text-xs">
                  <span className="text-zinc-400 flex items-center gap-1.5 font-medium">
                    <Anchor className="w-4 h-4 text-emerald-400" />
                    <span>Supported Incoterms:</span>
                  </span>
                  <div className="flex gap-1.5 font-bold text-white">
                    {product.incotermsSupported.map((term, i) => (
                      <span key={i} className="bg-[#121215] px-2.5 py-0.5 rounded-md border border-[#27272A] text-xs">
                        {term}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Packaging Specification */}
              <div className="mb-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Packaging &amp; Transport Protection:
                </h3>
                <p className="text-xs text-zinc-300 bg-[#18181B] p-4 rounded-xl border border-[#27272A] shadow-xl leading-relaxed">
                  {product.packaging}
                </p>
              </div>

              {/* Available Variants */}
              {product.gradesOrVariants && product.gradesOrVariants.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                    Available Grades &amp; Variants:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.gradesOrVariants.map((grade, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-[#18181B] border border-[#27272A] text-zinc-200 px-3 py-1.5 rounded-lg shadow-xs"
                      >
                        {grade}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 border-t border-[#27272A] flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => onRequestQuote(product.name)}
                className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-lg shadow-rose-950/50 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Pricing &amp; Commercial Terms</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/contact"
                className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-[#27272A] hover:bg-[#3F3F46] text-white border border-zinc-700 text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors text-center"
              >
                General Inquiry
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed Technical Specifications Table */}
        <section className="bg-[#18181B] border border-[#27272A] rounded-2xl p-6 sm:p-8 mb-16 shadow-xl">
          <div className="border-b border-[#27272A] pb-4 mb-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#E11D48]" />
              <span>Full Technical Specifications Schedule</span>
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Indicative parameters subject to final commercial contract and verified certificate of analysis.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#27272A] text-zinc-400 uppercase text-[11px]">
                  <th className="py-3 px-4 font-bold w-1/3">Parameter</th>
                  <th className="py-3 px-4 font-bold w-2/3">Specification Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#27272A] text-zinc-300">
                {product.specifications.map((spec, idx) => (
                  <tr key={idx} className="hover:bg-[#27272A]/30 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white">{spec.label}</td>
                    <td className="py-3.5 px-4 text-zinc-300">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Products from Same Trade Category */}
        {relatedProducts.length > 0 && (
          <section className="border-t border-[#27272A] pt-14">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48]">
                  EXPLORE MORE
                </span>
                <h3 className="text-xl font-extrabold text-white mt-0.5">
                  Related Commodities in {product.category.split(',')[0]}
                </h3>
              </div>
              <Link
                to={`/products?category=${product.categorySlug}`}
                className="text-xs font-bold text-[#E11D48] hover:text-rose-400 flex items-center gap-1"
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
