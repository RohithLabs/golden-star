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
    <article className="bg-[#18181B] rounded-2xl border border-[#27272A] overflow-hidden shadow-xl hover:border-zinc-500 transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* Image Container with Hover Zoom */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-zinc-900">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-106"
        />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-transparent to-black/30 opacity-90 group-hover:opacity-80 transition-opacity" />

        {/* Availability / Export Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider shadow bg-black/80 backdrop-blur-md text-[#E11D48] border border-white/10 font-outfit">
            {product.exportAvailability === 'In Stock' ? 'PREMIUM EXPORT' : product.exportAvailability}
          </span>
        </div>

        {/* Category & Origin Tag */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
          <span className="text-[11px] font-medium tracking-wide bg-black/70 px-2.5 py-0.5 rounded backdrop-blur-sm border border-white/10 font-inter truncate max-w-[170px] text-zinc-300">
            {product.category.split(',')[0]}
          </span>
          <span className="text-[10px] font-bold bg-amber-950/80 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded font-outfit shrink-0">
            {product.origin.split(',')[0]}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-rose-300 transition-colors font-jakarta leading-snug">
            <Link to={`/products/${product.slug}`} className="focus:outline-none">
              {product.name}
            </Link>
          </h3>

          <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed font-inter">
            {product.shortDescription}
          </p>

          {/* Key Specifications Preview */}
          <div className="mt-4 pt-3 border-t border-[#27272A] space-y-1.5 bg-[#121215] p-3 rounded-xl border border-[#27272A]">
            <div className="flex items-center text-[11px] text-zinc-400 justify-between font-inter">
              <span className="flex items-center gap-1.5 text-zinc-500 font-inter">
                <PackageCheck className="w-3.5 h-3.5 text-[#E11D48]" />
                <span>MOQ:</span>
              </span>
              <span className="text-zinc-200 font-medium truncate max-w-[170px]">
                {product.minimumOrderQuantity.split('(')[0]}
              </span>
            </div>

            <div className="flex items-center text-[11px] text-zinc-400 justify-between font-inter">
              <span className="flex items-center gap-1.5 text-zinc-500 font-inter">
                <Layers className="w-3.5 h-3.5 text-[#DF9A28]" />
                <span>Capacity:</span>
              </span>
              <span className="text-zinc-200 font-medium truncate max-w-[170px]">
                {product.supplyCapacity.split('monthly')[0]}
              </span>
            </div>
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-3 border-t border-[#27272A] flex items-center justify-between gap-2">
          <Link
            to={`/products/${product.slug}`}
            className="text-xs font-bold text-zinc-300 hover:text-white flex items-center gap-1.5 group/link py-1 font-jakarta transition-colors"
          >
            <span>View Specs</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
          </Link>

          <button
            type="button"
            onClick={() => onQuickQuote && onQuickQuote(product)}
            className="text-xs font-bold bg-[#E11D48] hover:bg-[#BE123C] text-white px-4 py-2 rounded-xl transition-all shadow-md shadow-rose-950/40 cursor-pointer font-jakarta"
          >
            Inquire Now
          </button>
        </div>
      </div>
    </article>
  );
};
