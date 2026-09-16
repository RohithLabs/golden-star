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
    <div className="pt-20 sm:pt-24 pb-24 bg-white min-h-screen text-slate-900 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Products & Commodities' }]} className="mb-6" />

        {/* Page Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-semibold text-[#EA580C] mb-3 uppercase tracking-widest shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-pulse" />
            Verified Export Catalog
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Products We <em className="italic text-[#EA580C] font-normal">Trade &amp; Export</em>
          </h1>
          
          <div className="w-16 h-1 bg-[#EA580C] mt-3 mb-4 rounded-full"></div>
          
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            Explore our primary export-grade agricultural commodities, packaged basmati rice, dry fruits, Indian handloom textiles, leather goods, and certified industrial petrochemicals. All commodities are available for containerized or bulk sea freight with verified international compliance.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 mb-10 shadow-xs">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search commodities, materials, origins..."
                className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-[#EA580C] focus:outline-none transition-colors shadow-xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Availability Filter Dropdown */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Filter className="w-4 h-4 text-[#EA580C] shrink-0" />
              <select
                value={availabilityFilter}
                onChange={(e) => setAvailabilityFilter(e.target.value)}
                className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:border-[#EA580C] focus:outline-none w-full md:w-auto cursor-pointer shadow-xs"
              >
                <option value="all">All Availability Statuses</option>
                <option value="In Stock">In Stock (Prompt Loading)</option>
                <option value="Contract Supply">Contract Supply (Recurring)</option>
                <option value="Custom Processing">Custom Processing</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-5 pt-4 border-t border-slate-200 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              type="button"
              onClick={() => handleCategoryChange('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#EA580C] text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
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
                      ? 'bg-[#EA580C] text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
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
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center my-12 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900 mb-2">No Commodities Found</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
              We could not find products matching your query "{searchQuery}". Our global sourcing team can arrange bespoke origin allocations.
            </p>
            <div className="flex justify-center gap-3">
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setAvailabilityFilter('all'); }}
                className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-semibold cursor-pointer shadow-xs"
              >
                Reset Filters
              </button>
              <button
                type="button"
                onClick={() => onRequestQuote('Custom Commodity Request')}
                className="px-5 py-2.5 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold cursor-pointer shadow-xs"
              >
                Request Custom Sourcing
              </button>
            </div>
          </div>
        )}

        {/* Bespoke Specification Banner */}
        <section className="bg-gradient-to-br from-slate-50 via-white to-orange-50/40 border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-xs relative overflow-hidden text-slate-900 mb-12">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold tracking-wider uppercase text-[#EA580C] shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>B2B Bespoke Specification Desk</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                Require a Commodity or Specification Not Listed?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                Our global sourcing desk handles custom requirements, non-standard chemical grades, private label packaging, and dedicated contract manufacturing. Provide your technical parameters and target discharge port for immediate feasibility review.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                type="button"
                onClick={() => onRequestQuote('Bespoke Custom Sourcing Assignment')}
                className="inline-flex items-center justify-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-md shadow-orange-500/20 cursor-pointer"
              >
                <span>Submit Specification</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/services"
                className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-6 py-3 rounded-full text-xs font-semibold transition-colors text-center shadow-xs"
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
