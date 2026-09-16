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
    <article className="bg-[#141416] rounded-2xl border border-white/10 overflow-hidden shadow-xl hover:border-white/30 transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* Image Container with Hover Zoom */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-zinc-900">
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-black/40 opacity-90 group-hover:opacity-75 transition-opacity" />

        {/* Availability / Export Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider shadow bg-black/80 backdrop-blur-md text-emerald-400 border border-emerald-500/20">
            {product.exportAvailability === 'In Stock' ? 'PREMIUM EXPORT' : product.exportAvailability}
          </span>
        </div>

        {/* Category & Origin Tag */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
          <span className="text-[11px] font-medium tracking-wide bg-black/75 px-2.5 py-0.5 rounded backdrop-blur-sm border border-white/10 truncate max-w-[160px] text-zinc-300">
            {product.category.split(',')[0]}
          </span>
          <span className="text-[10px] font-semibold bg-white/10 text-white/90 border border-white/15 px-2 py-0.5 rounded shrink-0">
            {product.origin.split(',')[0]}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#38BDF8] transition-colors leading-snug">
            <Link to={`/products/${product.slug}`} className="focus:outline-none">
              {product.name}
            </Link>
          </h3>

          <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed font-normal">
            {product.shortDescription}
          </p>

          {/* Key Specifications Preview */}
          <div className="mt-4 pt-3 border-t border-white/10 space-y-2 bg-white/[0.02] p-3 rounded-xl border border-white/5">
            <div className="flex items-center text-[11px] text-zinc-400 justify-between">
              <span className="flex items-center gap-1.5 text-zinc-500">
                <PackageCheck className="w-3.5 h-3.5 text-zinc-400" />
                <span>MOQ:</span>
              </span>
              <span className="text-zinc-200 font-medium truncate max-w-[170px]">
                {product.minimumOrderQuantity.split('(')[0]}
              </span>
            </div>

            <div className="flex items-center text-[11px] text-zinc-400 justify-between">
              <span className="flex items-center gap-1.5 text-zinc-500">
                <Layers className="w-3.5 h-3.5 text-sky-400" />
                <span>Capacity:</span>
              </span>
              <span className="text-zinc-200 font-medium truncate max-w-[170px]">
                {product.supplyCapacity.split('monthly')[0]}
              </span>
            </div>
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
          <Link
            to={`/products/${product.slug}`}
            className="text-xs font-semibold text-zinc-300 hover:text-white flex items-center gap-1.5 group/link py-1 transition-colors"
          >
            <span>View Specs</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1 text-zinc-400" />
          </Link>

          <button
            type="button"
            onClick={() => onQuickQuote && onQuickQuote(product)}
            className="text-xs font-semibold bg-white hover:bg-zinc-200 text-black px-4 py-2 rounded-xl transition-all shadow cursor-pointer"
          >
            Inquire Now
          </button>
        </div>
      </div>
    </article>
  );
};
