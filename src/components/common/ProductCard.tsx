import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { ArrowRight, PackageCheck, Layers } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onQuickQuote?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickQuote }) => {
  return (
    <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* Image Container with Hover Zoom */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
        <img
          src={product.images[0]}
          alt=""
          aria-hidden="true"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80';
          }}
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-75 group-hover:opacity-60 transition-opacity" />

        {/* Availability / Export Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider shadow-sm bg-white/95 backdrop-blur-md text-[#DC2626] border border-red-200">
            {product.exportAvailability === 'In Stock' ? 'PREMIUM EXPORT' : product.exportAvailability}
          </span>
        </div>

        {/* Category & Origin Tag */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="text-[11px] font-semibold tracking-wide bg-white/95 px-2.5 py-0.5 rounded backdrop-blur-sm border border-slate-200 text-slate-800 shadow-xs truncate max-w-[160px]">
            {product.category.split(',')[0]}
          </span>
          <span className="text-[10px] font-bold bg-[#0284C7] text-white px-2 py-0.5 rounded shadow-xs shrink-0">
            {product.origin.split(',')[0]}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#EA580C] transition-colors leading-snug">
            <Link to={`/products/${product.slug}`} className="focus:outline-none">
              {product.name}
            </Link>
          </h3>

          <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed font-normal">
            {product.shortDescription}
          </p>

          {/* Key Specifications Preview */}
          <div className="mt-4 pt-3 space-y-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
            <div className="flex items-center text-[11px] justify-between">
              <span className="flex items-center gap-1.5 text-slate-500">
                <PackageCheck className="w-3.5 h-3.5 text-slate-400" />
                <span>MOQ:</span>
              </span>
              <span className="text-slate-800 font-semibold truncate max-w-[170px]">
                {product.minimumOrderQuantity.split('(')[0]}
              </span>
            </div>

            <div className="flex items-center text-[11px] justify-between">
              <span className="flex items-center gap-1.5 text-slate-500">
                <Layers className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Capacity:</span>
              </span>
              <span className="text-slate-800 font-semibold truncate max-w-[170px]">
                {product.supplyCapacity.split('monthly')[0]}
              </span>
            </div>
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <Link
            to={`/products/${product.slug}`}
            className="text-xs font-semibold text-slate-600 hover:text-[#EA580C] flex items-center gap-1.5 group/link py-1 transition-colors"
          >
            <span>View Specs</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1 text-slate-400 group-hover/link:text-[#EA580C]" />
          </Link>

          <button
            type="button"
            onClick={() => onQuickQuote && onQuickQuote(product)}
            className="text-xs font-bold uppercase tracking-wider bg-[#EA580C] hover:bg-[#C2410C] text-white px-4 py-2 rounded-xl transition-all shadow-xs hover:shadow-md cursor-pointer"
          >
            Inquire Now
          </button>
        </div>
      </div>
    </article>
  );
};
