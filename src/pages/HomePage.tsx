import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { GoogleMapEmbed } from '../components/common/GoogleMapEmbed';
import { HeroShiningCard } from '../components/common/HeroShiningCard';
import { Faq5 } from '../components/ui/faq-5';
import {
  ArrowRight,
  Globe,
  ShieldCheck,
  Star,
  ChevronRight,
  Truck,
  FileCheck,
  Headphones,
  BadgeCheck,
  Building2,
  Store,
  Factory,
  Cog,
  Container,
  CheckCircle2
} from 'lucide-react';

/* ─── Reusable FadeIn ───────────────────────────────────────────────── */
const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children, delay = 0, className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ─── Section Label chip ─────────────────────────────────────────────── */
const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#EA580C] border border-orange-200 bg-orange-50 px-3.5 py-1 rounded-full mb-4 shadow-xs">
    <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
    {children}
  </span>
);

/* ─── Props ──────────────────────────────────────────────────────────── */
interface HomePageProps {
  onRequestQuote: (productName?: string) => void;
}

/* ═══════════════════════════════════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════════════════════════════════ */
export const HomePage: React.FC<HomePageProps> = ({ onRequestQuote }) => {

  /* Testimonial state */
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  /* Category filter */
  const [homeSelectedCategory, setHomeSelectedCategory] = useState<string>('all');

  /* Quote form */
  const [formProductName, setFormProductName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  /* ── Product showcase ─────────────────────────────────────────────── */
  const exportShowcaseList = [
    { id: 'veda-basmati-rice', name: 'Premium Basmati Rice', categorySlug: 'grains', badge: 'GRAINS & RICE', image: '/products/veda-basmati-rice.jpg', slug: 'veda-premium-basmati-rice' },
    { id: 'pulses-lentils-beans', name: 'Organic Pulses & Lentils', categorySlug: 'grains', badge: 'AGRICULTURAL', image: '/products/pulses-lentils-beans.png', slug: 'organic-pulses-lentils-beans' },
    { id: 'dry-fruits-nuts', name: 'Gourmet Dry Fruits & Nuts', categorySlug: 'dry-fruits', badge: 'GOURMET', image: '/products/dry-fruits-nuts.png', slug: 'premium-dry-fruits-nuts-berries' },
    { id: 'printed-textiles', name: 'Indian Cotton & Silk Fabrics', categorySlug: 'textiles', badge: 'TEXTILES', image: '/products/printed-textiles-fabrics.jpg', slug: 'indian-printed-textiles-cotton-fabrics' },
    { id: 'leather-goods-wallets', name: 'Full-Grain Leather Goods', categorySlug: 'leather', badge: 'LUXURY', image: '/products/leather-goods-wallets.jpg', slug: 'handcrafted-leather-goods-accessories' },
    { id: 'crude-oil', name: 'Crude Oil & Petrochemicals', categorySlug: 'petro', badge: 'PETROCHEMICALS', image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80', slug: 'crude-oil-feedstock' },
  ];

  const categories = [
    { slug: 'all', label: 'All Products' },
    { slug: 'grains', label: 'Grains' },
    { slug: 'dry-fruits', label: 'Dry Fruits' },
    { slug: 'textiles', label: 'Textiles' },
    { slug: 'leather', label: 'Leather' },
    { slug: 'petro', label: 'Petro' },
  ];

  const filteredProducts = homeSelectedCategory === 'all'
    ? exportShowcaseList
    : exportShowcaseList.filter(p => p.categorySlug === homeSelectedCategory);

  /* ── Testimonials ─────────────────────────────────────────────────── */
  const testimonials = [
    { name: 'Ahmed Al Sayed', role: 'Procurement Director', country: 'Saudi Arabia', quote: 'Golden Star Company consistently delivers premium quality commodities on time. Their sourcing network is unmatched in South India.' },
    { name: 'Michael Thompson', role: 'International Trade Director', country: 'United Kingdom', quote: 'Their professionalism, market knowledge, and competitive pricing make them an invaluable partner for our import operations.' },
    { name: 'Fatima Al Mansoori', role: 'Business Development Head', country: 'UAE', quote: 'Exceptional sourcing capabilities. They manage deepwater logistics efficiently and exceed our expectations every shipment.' },
    { name: 'Chen Wei', role: 'Industrial Supplies Distributor', country: 'China', quote: 'From farm and refinery sourcing to containerized shipping — every stage is handled with precision and transparency.' },
  ];

  /* ── Why Choose Us ────────────────────────────────────────────────── */
  const whyChoose = [
    { icon: Globe, title: 'Global Network', desc: '50+ countries, 1000+ verified trade partners worldwide.' },
    { icon: Truck, title: 'Reliable Logistics', desc: 'Multi-modal supply chain — sea, air, and overland freight.' },
    { icon: BadgeCheck, title: 'Quality Assurance', desc: 'SGS/ISO certified with strict pre-shipment inspections.' },
    { icon: ShieldCheck, title: 'Competitive Pricing', desc: 'Direct origin procurement. Zero unnecessary markups.' },
    { icon: FileCheck, title: 'Fast Documentation', desc: 'Seamless customs, phytosanitary and trade documentation.' },
    { icon: Headphones, title: 'Dedicated Support', desc: '24/7 trade desk consultation and real-time cargo tracking.' },
  ];

  /* ── Business Divisions ────────────────────────────────────────────── */
  const divisions = [
    {
      title: 'Agriculture & Sourcing Division',
      desc: 'Premium quality fresh fruits, vegetables, spices, and agricultural commodities from certified South India farms.',
      items: ['Fresh Fruits & Mangoes', 'Cardamom & Spices', 'Fresh Vegetables', 'Agricultural Commodities'],
      accent: '#EA580C',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Petroleum & Petrochemical Division',
      desc: 'Comprehensive range of petroleum products including crude oil, base oils, lubricants, and specialty industrial chemicals.',
      items: ['Crude Oil & Feedstock', 'Base Oils SN150', 'Bitumen 60/70', 'Industrial Solvents'],
      accent: '#0284C7',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  /* ── Quote form submit ────────────────────────────────────────────── */
  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formEmail.trim()) {
      setFormSubmitted(true);
      setTimeout(() => onRequestQuote(formProductName || 'General Inquiry'), 1200);
    }
  };

  /* ── Scroll ticker items ──────────────────────────────────────────── */
  const tickerItems = ['Premium Basmati Rice', 'Crude Oil & Feedstocks', 'Base Oils SN150', 'Gourmet Dry Fruits', 'Indian Spices & Cardamom', 'Full-Grain Leather', 'Cotton & Silk Fabrics', 'Bitumen 60/70', 'Pulses & Lentils'];

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 overflow-x-hidden font-montserrat">

      {/* ═══════════════════════════════════════════════════════════════
          1. HERO — Two-Column Executive Import & Export Trade Suite
          Left: Multi-tone H1, Subheading, CTAs, Certified Metrics
          Right: Luminous HeroShiningCard with scroll-driven specular shine
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center bg-white pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">

        {/* Subtle background grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
        {/* Subtle executive luminous ambient glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40 blur-3xl"
          style={{ background: 'radial-gradient(ellipse, rgba(2,132,199,0.08) 0%, transparent 70%)' }}
        />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(ellipse, rgba(234,88,12,0.08) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: Heading, Subhead, CTAs & Metrics */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Top Badge */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-xs font-bold text-slate-800 mb-5 shadow-2xs"
              >
                <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-pulse" />
                <span className="tracking-wider uppercase text-[11px] font-bold text-slate-800">
                  Global Trade &amp; Export House
                </span>
              </motion.div>

              {/* Multi-tone Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-[3.65rem] font-black tracking-tight leading-[1.08] mb-5"
              >
                <span className="text-slate-950">Golden Star </span>
                <span className="italic text-[#EA580C]">Company</span>
                <span className="block text-slate-900 font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-1">
                  Premier <span className="italic text-[#0284C7]">Trade &amp; Export</span> Solutions
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mb-7"
              >
                Connecting reliable producers with global markets across 50+ countries. Certified quality, secure logistics, and competitive trade pricing.
              </motion.p>

              {/* Two CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 mb-8"
              >
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-sm transition-all duration-200 shadow-md shadow-orange-500/20 cursor-pointer group"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  type="button"
                  onClick={() => onRequestQuote()}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-sm transition-all duration-200 shadow-2xs hover:border-slate-400 cursor-pointer"
                >
                  <span>Request a Quote</span>
                </button>
              </motion.div>

              {/* Trade Statistics Row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-5 border-t border-slate-200 w-full max-w-xl"
              >
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-950">50+</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">Countries</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-950">1,000+</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">Partners</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-950">99.8%</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">On-Time</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#0284C7]">ISO / SGS</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">Certified</div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: HeroShiningCard */}
            <div className="lg:col-span-5 flex justify-center items-center mt-6 lg:mt-0">
              <HeroShiningCard />
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. TICKER SCROLL STRIP
          ═══════════════════════════════════════════════════════════════ */}
      <div className="border-y border-slate-200 bg-slate-50 py-3.5 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-slate-600 shrink-0">
              <span className="text-[#EA580C]">✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          3. ABOUT SECTION
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <FadeIn>
              <SectionLabel>About Golden Star Company</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                South India's Premier <br />
                <span className="italic text-[#EA580C]">International Trade</span> Partner
              </h2>
              <p className="text-slate-600 font-normal leading-relaxed mb-6">
                Golden Star Company is South India's premier international trade and sourcing company specializing in agricultural commodities, petroleum products, and industrial raw materials. With over two decades of industry experience, we bridge regional producers and worldwide buyers.
              </p>
              <p className="text-slate-600 font-normal leading-relaxed mb-8">
                Through innovation, integrity, and a customer-focused approach, Golden Star Company strengthens international trade connections and creates sustainable commercial value for partners across the globe.
              </p>
              <div className="border-l-2 border-[#EA580C] pl-4 py-2 mb-8 bg-orange-50/50 rounded-r-lg">
                <p className="text-slate-800 italic font-medium text-sm sm:text-base leading-relaxed">
                  "Certified Global Trade Partner — Serving 50+ Nations With Uncompromising Integrity"
                </p>
              </div>
              <div className="flex gap-4 flex-wrap">
                <Link to="/about" className="btn-primary">Read More <ArrowRight className="w-4 h-4" /></Link>
                <button onClick={() => onRequestQuote()} className="btn-outline">Contact Us</button>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                  alt="Golden Star Company port terminal and logistics infrastructure"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                {/* Badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-3 flex-wrap">
                  {['ISO 9001:2015', 'SGS Certified', 'FSSAI Approved'].map(b => (
                    <span key={b} className="text-[10px] font-bold uppercase tracking-widest bg-white/95 backdrop-blur-sm border border-slate-200 text-slate-800 px-3 py-1.5 rounded-full shadow-xs">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. BUSINESS DIVISIONS
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <SectionLabel>Our Expertise</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Business <span className="italic text-[#0284C7]">Divisions</span>
            </h2>
            <p className="text-slate-600 mt-3 font-normal max-w-xl mx-auto text-sm">
              Two specialized sectors delivering excellence in international trade
            </p>
          </FadeIn>

          <div className="space-y-8">
            {divisions.map((div, i) => (
              <FadeIn key={div.title} delay={i * 0.1}>
                <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="relative h-64 lg:h-auto min-h-[260px]">
                      <img src={div.image} alt={div.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent" />
                      <span className="absolute top-4 left-4 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full text-white shadow-xs"
                        style={{ background: div.accent }}>
                        VERIFIED ORIGIN · DIRECT COMMODITIES
                      </span>
                    </div>
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{div.title}</h3>
                      <p className="text-slate-600 font-normal text-sm leading-relaxed mb-5">{div.desc}</p>
                      <ul className="space-y-2 mb-6">
                        {div.items.map(item => (
                          <li key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                            <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: div.accent }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Link to="/products" className="btn-outline w-fit text-xs px-5 py-2.5">
                        Explore Products <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. PRODUCT SHOWCASE
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <SectionLabel>Global Trade Commodity Portfolio</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Our <span className="italic text-[#EA580C]">Products</span>
              </h2>
            </div>
            <Link to="/products" className="btn-outline w-fit text-xs px-5 py-2.5 shrink-0">
              Full Catalogue <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </FadeIn>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(cat => (
              <button
                key={cat.slug}
                onClick={() => setHomeSelectedCategory(cat.slug)}
                className={`text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all ${
                  homeSelectedCategory === cat.slug
                    ? 'bg-[#EA580C] border-[#EA580C] text-white shadow-xs'
                    : 'border-slate-200 text-slate-600 bg-slate-50 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProducts.map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.07}>
                <Link to={`/products/${p.slug}`} className="bg-white border border-slate-200 rounded-2xl shadow-xs hover:shadow-lg transition-all duration-300 group overflow-hidden block">
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                    <span className="absolute top-3 left-3 text-[9px] font-black uppercase tracking-widest bg-[#EA580C] text-white px-2.5 py-1 rounded-full shadow-xs">
                      {p.badge}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-bold text-slate-900 mb-2 group-hover:text-[#EA580C] transition-colors">{p.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#EA580C] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          6. WHY CHOOSE US
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              The Golden Star <span className="italic text-[#DC2626]">Advantage</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.07}>
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs h-full hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center mb-4 text-[#EA580C]">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          7. INDUSTRY CLIENTS
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <FadeIn className="lg:col-span-5">
              <SectionLabel>Industry Clients</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                Who We <span className="italic text-[#0284C7]">Serve</span>
              </h2>
              <p className="text-slate-600 font-normal text-sm leading-relaxed mb-6">
                From multinational food processors to global oil refineries, we deliver tailored trade solutions across diverse industries.
              </p>
              <Link to="/services" className="btn-outline w-fit text-xs px-5 py-2.5">
                Explore All Capabilities <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </FadeIn>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Building2, title: 'Food Processing', desc: 'Raw grains, pulses, and refined oils for global food conglomerates.' },
                { icon: Store, title: 'Retail Chains', desc: 'White-label packaging and just-in-time delivery for multinational retail.' },
                { icon: Factory, title: 'Oil Refineries', desc: 'Critical feedstock supply and logistics for mid-stream petrochemical refining.' },
                { icon: Cog, title: 'Heavy Industry', desc: 'High-volume lubricant and base oil distribution for global manufacturing.' },
              ].map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.08}>
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-slate-300 transition-all">
                    <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center mb-3 text-[#0284C7]">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-[11px] text-slate-600 font-normal leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          8. INTERNATIONAL TRADE NETWORK — Google Maps
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <SectionLabel>Global Trade Network</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                International Trade <span className="italic text-[#0284C7]">Network</span>
              </h2>
            </div>
            <p className="text-slate-600 font-normal text-sm max-w-md leading-relaxed">
              We connect global buyers and suppliers through reliable sourcing and logistics solutions across 50+ countries.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Map */}
            <FadeIn className="lg:col-span-7">
              <GoogleMapEmbed />
            </FadeIn>

            {/* Import / Export Cards */}
            <div className="lg:col-span-5 space-y-5">
              {/* IMPORT */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg font-black text-[#EA580C]">↓</span>
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">Import</h3>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-4">We import quality products from trusted countries.</p>
                <div className="space-y-2">
                  {[
                    { flag: '🇸🇦', country: 'Saudi Arabia', product: 'Crude Oil' },
                    { flag: '🇦🇪', country: 'UAE', product: 'Base Oils, Lubricants' },
                    { flag: '🇨🇳', country: 'China', product: 'Chemicals, Additives' },
                    { flag: '🇶🇦', country: 'Qatar', product: 'LPG, Petrochemicals' },
                  ].map(item => (
                    <div key={item.country} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100 hover:border-orange-200 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{item.flag}</span>
                        <div>
                          <div className="text-xs font-bold text-slate-900">{item.country}</div>
                          <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500">{item.product}</div>
                        </div>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                  ))}
                </div>
              </div>

              {/* EXPORT */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg font-black text-[#0284C7]">↑</span>
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">Export</h3>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-4">We export premium products to global markets.</p>
                <div className="space-y-2">
                  {[
                    { flag: '🇮🇳', country: 'South India Gateways', product: 'Spices, Agro & Minerals' },
                    { flag: '🇦🇪', country: 'UAE', product: 'Industrial Products' },
                    { flag: '🇸🇦', country: 'Saudi Arabia', product: 'Petroleum & Agro' },
                    { flag: '🇬🇧', country: 'United Kingdom', product: 'Agricultural Commodities' },
                  ].map(item => (
                    <div key={item.country} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100 hover:border-sky-200 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{item.flag}</span>
                        <div>
                          <div className="text-xs font-bold text-slate-900">{item.country}</div>
                          <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500">{item.product}</div>
                        </div>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          9. TESTIMONIALS
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <SectionLabel>Client Testimonials</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Trusted by <span className="italic text-[#EA580C]">Partners Worldwide</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.08}>
                <div
                  className={`bg-slate-50 border rounded-2xl p-6 cursor-pointer transition-all shadow-xs hover:shadow-md ${
                    activeTestimonialIdx === i ? 'border-[#EA580C] bg-orange-50/20' : 'border-slate-200'
                  }`}
                  onClick={() => setActiveTestimonialIdx(i)}
                >
                  <div className="flex gap-1 mb-4">
                    {Array(5).fill(0).map((_, si) => (
                      <Star key={si} className="w-3.5 h-3.5 text-[#EA580C] fill-[#EA580C]" />
                    ))}
                  </div>
                  <p className="text-sm font-normal text-slate-700 italic leading-relaxed mb-5">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-sm font-black text-[#EA580C]">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{t.name}</div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{t.role} · {t.country}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          10. QUICK QUOTE FORM
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <SectionLabel>Get a Quote</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                Start Your <span className="italic text-[#DC2626]">Trade Journey</span>
              </h2>
              <p className="text-slate-600 font-normal text-sm leading-relaxed mb-8">
                Fill out the form and our trade specialists will respond within 24 hours with competitive pricing and logistics information.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Container, text: 'FCL & LCL shipments from 1 MT to 10,000+ MT' },
                  { icon: ShieldCheck, text: 'All exports under Letter of Credit (LC) / TT' },
                  { icon: FileCheck, text: 'Complete documentation: SGS, COO, Phyto, B/L' },
                ].map(item => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0 text-[#EA580C]">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              {formSubmitted ? (
                <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center shadow-xs">
                  <div className="w-14 h-14 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center mx-auto mb-4 text-[#EA580C]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Inquiry Received!</h3>
                  <p className="text-slate-600 text-sm font-normal">Our trade team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-xs">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-700 mb-1.5">Product / Commodity</label>
                    <input
                      value={formProductName}
                      onChange={e => setFormProductName(e.target.value)}
                      placeholder="e.g. Basmati Rice, Base Oil SN150"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm font-normal text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#EA580C] focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-700 mb-1.5">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formEmail}
                      onChange={e => setFormEmail(e.target.value)}
                      placeholder="business@company.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm font-normal text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#EA580C] focus:bg-white transition-colors"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center mt-2 shadow-sm hover:shadow-md cursor-pointer">
                    Request Quote <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          11. FAQ
          ═══════════════════════════════════════════════════════════════ */}
      <Faq5
        id="faq"
        badge="Trade FAQ"
        heading="Common Trade Questions"
        description="Everything you need to know about trading with Golden Star Company — pricing, logistics, certifications, and more."
      />

      {/* ═══════════════════════════════════════════════════════════════
          12. CTA BANNER
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white border-t border-slate-200">
        <FadeIn className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-slate-50 via-white to-orange-50/40 border border-slate-200 rounded-3xl p-10 sm:p-14 shadow-xs">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight mb-4">
              Ready to Trade with <br />
              <span className="italic text-[#EA580C]">Golden Star Company?</span>
            </h2>
            <p className="text-slate-600 font-normal text-sm mb-8 max-w-xl mx-auto">
              Join 1000+ global partners who trust us for premium sourcing, reliable logistics, and on-time international delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => onRequestQuote()}
                className="bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-sm px-8 py-3.5 rounded-full transition-colors flex items-center gap-2 shadow-md shadow-orange-500/20 cursor-pointer"
              >
                Get Started Now <ArrowRight className="w-4 h-4" />
              </button>
              <Link to="/contact" className="bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm px-8 py-3.5 rounded-full transition-colors border border-slate-300 shadow-xs cursor-pointer">
                Contact Our Team
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

    </div>
  );
};
