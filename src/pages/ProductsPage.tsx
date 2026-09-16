import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { productCategories, productsCatalog } from '../data/products';
import { Product } from '../types';
import { ProductCard } from '../components/common/ProductCard';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Search, Filter, ArrowRight, ShieldCheck } from 'lucide-react';

interface ProductsPageProps {
  onRequestQuote: (productName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onRequestQuote }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam);
  const [availabilityFilter, setAvailabilityFilter] = useState<string>('all');

  // Sync category if URL param changes
  React.useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    if (slug === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: slug });
    }
  };

  const filteredProducts = useMemo(() => {
    return productsCatalog.filter((product: Product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' || product.categorySlug === selectedCategory;

      const matchesAvailability =
        availabilityFilter === 'all' || product.exportAvailability === availabilityFilter;

      return matchesSearch && matchesCategory && matchesAvailability;
    });
  }, [searchQuery, selectedCategory, availabilityFilter]);

  return (
    <div className="pt-20 sm:pt-24 pb-24 bg-[#09090B] min-h-screen text-white selection:bg-[#E11D48] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Products & Commodities' }]} className="mb-6" />

        {/* Page Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181B] border border-[#27272A] text-xs font-semibold text-rose-400 mb-3 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] animate-pulse" />
            Verified Export Catalog
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Products We <em className="font-newsreader italic text-[#DF9A28] font-normal">Trade &amp; Export</em>
          </h1>
          
          <div className="w-16 h-1 bg-[#E11D48] mt-3 mb-4 rounded-full"></div>
          
          <p className="text-sm sm:text-base text-zinc-400 max-w-3xl leading-relaxed">
            Explore our primary export-grade agricultural commodities, packaged basmati rice, dry fruits, Indian handloom textiles, leather goods, and certified industrial petrochemicals. All commodities are available for containerized or bulk sea freight with verified international compliance.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-[#18181B] border border-[#27272A] rounded-2xl p-4 sm:p-6 mb-10 shadow-xl">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search commodities, materials, origins..."
                className="w-full bg-[#121215] border border-[#27272A] rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:border-[#E11D48] focus:bg-[#18181B] focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Availability Filter Dropdown */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Filter className="w-4 h-4 text-[#DF9A28] shrink-0" />
              <select
                value={availabilityFilter}
                onChange={(e) => setAvailabilityFilter(e.target.value)}
                className="bg-[#121215] border border-[#27272A] rounded-xl px-3 py-2 text-xs font-medium text-zinc-200 focus:border-[#E11D48] focus:outline-none w-full md:w-auto cursor-pointer"
              >
                <option value="all" className="bg-[#18181B] text-white">All Availability Statuses</option>
                <option value="In Stock" className="bg-[#18181B] text-white">In Stock (Prompt Loading)</option>
                <option value="Contract Supply" className="bg-[#18181B] text-white">Contract Supply (Recurring)</option>
                <option value="Custom Processing" className="bg-[#18181B] text-white">Custom Processing</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-5 pt-4 border-t border-[#27272A] flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              type="button"
              onClick={() => handleCategoryChange('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#E11D48] text-white shadow-lg shadow-rose-950/50'
                  : 'bg-[#121215] text-zinc-400 hover:text-white hover:bg-[#27272A] border border-[#27272A]'
              }`}
            >
              All Categories ({productsCatalog.length})
            </button>
            {productCategories.map((cat) => {
              const count = productsCatalog.filter(p => p.categorySlug === cat.slug).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat.slug
                      ? 'bg-[#E11D48] text-white shadow-lg shadow-rose-950/50'
                      : 'bg-[#121215] text-zinc-400 hover:text-white hover:bg-[#27272A] border border-[#27272A]'
                  }`}
                >
                  {cat.title} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickQuote={(p) => onRequestQuote(p.name)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-[#18181B] border border-[#27272A] rounded-2xl p-12 text-center my-12 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2">No Commodities Found</h3>
            <p className="text-sm text-zinc-400 max-w-md mx-auto mb-6">
              We could not find products matching your query "{searchQuery}". Our global sourcing team can arrange bespoke origin allocations.
            </p>
            <div className="flex justify-center gap-3">
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setAvailabilityFilter('all'); }}
                className="px-5 py-2.5 rounded-full bg-[#27272A] hover:bg-[#3F3F46] text-white text-xs font-semibold cursor-pointer"
              >
                Reset Filters
              </button>
              <button
                type="button"
                onClick={() => onRequestQuote('Custom Commodity Request')}
                className="px-5 py-2.5 rounded-full bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-bold cursor-pointer"
              >
                Request Custom Sourcing
              </button>
            </div>
          </div>
        )}

        {/* Bespoke Specification Banner (Replaced amateurish procurement badge from Image 5) */}
        <section className="bg-[#18181B] border border-[#27272A] rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-white mb-12">
          <div className="absolute -right-10 -bottom-10 w-80 h-80 rounded-full bg-[#E11D48]/10 blur-3xl pointer-events-none" />
          <div className="absolute left-0 top-0 w-64 h-64 rounded-full bg-[#DF9A28]/5 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#27272A] border border-zinc-700 text-xs font-bold tracking-wider uppercase text-rose-400">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E11D48]" />
                <span>B2B Bespoke Specification Desk</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Require a Commodity or Specification Not Listed?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-2xl">
                Our global sourcing desk handles custom requirements, non-standard chemical grades, private label packaging, and dedicated contract manufacturing. Provide your technical parameters and target discharge port for immediate feasibility review.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                type="button"
                onClick={() => onRequestQuote('Bespoke Custom Sourcing Assignment')}
                className="inline-flex items-center justify-center gap-2 bg-[#E11D48] hover:bg-[#BE123C] text-white px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-lg shadow-rose-950/50 cursor-pointer"
              >
                <span>Submit Specification</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/services#custom-sourcing-solutions"
                className="inline-flex items-center justify-center bg-[#27272A] hover:bg-[#3F3F46] text-white border border-zinc-700 px-6 py-3 rounded-full text-xs font-semibold transition-colors text-center"
              >
                Learn About Custom Sourcing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
