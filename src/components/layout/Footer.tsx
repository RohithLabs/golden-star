import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { GoldenStarLogo } from '../common/GoldenStarLogo';
import { companyData } from '../../data/company';

interface FooterProps {
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestQuote }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0A0F1A] text-slate-400">
      {/* Top thin gold accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#DF9A28] to-transparent opacity-60" />

      {/* ── Main footer body ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* ── Col 1: Brand block (4 cols) ── */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo */}
            <Link to="/" className="inline-block focus:outline-none">
              <GoldenStarLogo size="lg" variant="light" />
            </Link>

            {/* Tagline — Lato light italic */}
            <p className="font-lato font-light italic text-sm text-slate-300 leading-relaxed max-w-xs">
              I'm{' '}
              <span className="font-bold not-italic text-white font-montserrat">
                Golden Star Company
              </span>{' '}
              — premier international trade &amp; sourcing. Based in Tamil Nadu, South India.
            </p>

            {/* Contact block — Work Sans */}
            <div className="space-y-2 text-sm font-work">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-[#DF9A28] shrink-0" />
                <a
                  href={`tel:${companyData.phone}`}
                  className="hover:text-white transition-colors tracking-wide"
                >
                  {companyData.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-[#DF9A28] shrink-0" />
                <a
                  href={`mailto:${companyData.email}`}
                  className="hover:text-white transition-colors"
                >
                  {companyData.email}
                </a>
              </div>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#DF9A28] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{companyData.headquarters}</span>
              </div>
            </div>

            {/* Quote button — Manrope */}
            <button
              type="button"
              onClick={onRequestQuote}
              className="inline-flex items-center gap-2 bg-[#DF9A28] hover:bg-[#C8851B] text-white text-xs font-bold font-manrope uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_4px_20px_rgba(223,154,40,0.4)]"
            >
              Request a Quote
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* ── Col 2: GENERAL (Quick Links) — Ubuntu ── */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-[10px] font-bold text-[#DF9A28] uppercase tracking-[0.25em] font-raleway">
              General
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home →', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Services', to: '/services' },
                { label: 'Products', to: '/products' },
                { label: 'Quality', to: '/quality' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm font-ubuntu text-slate-300 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: SPECIALTIES (Products) — Source Sans Pro ── */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-[10px] font-bold text-[#10B981] uppercase tracking-[0.25em] font-raleway">
              Specialties
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Fresh Fruits & Mangoes', to: '/products?category=food-agricultural-products' },
                { label: 'Vegetables & Spices', to: '/products?category=food-agricultural-products' },
                { label: 'Crude Oil & Feedstock', to: '/products?category=petroleum-petrochemical-products' },
                { label: 'Base Oils & Bitumen', to: '/products?category=petroleum-petrochemical-products' },
                { label: 'Global Trade Routes', to: '/global-reach' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm font-source text-slate-300 hover:text-[#10B981] transition-colors inline-block duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: CONNECT — Manrope ── */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-[10px] font-bold text-[#8B5CF6] uppercase tracking-[0.25em] font-raleway">
              Connect
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Request a Quote', action: onRequestQuote },
                { label: 'WhatsApp Direct', href: `https://wa.me/${companyData.whatsapp?.replace(/\D/g, '')}` },
                { label: 'Contact Us', to: '/contact' },
                { label: 'Trade Corridors', to: '/global-reach' },
                { label: 'Legal & Privacy', to: '/terms-privacy' },
              ].map((item) =>
                item.action ? (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={item.action}
                      className="text-sm font-manrope text-slate-300 hover:text-[#8B5CF6] transition-colors cursor-pointer"
                    >
                      {item.label}
                    </button>
                  </li>
                ) : item.href ? (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-manrope text-slate-300 hover:text-[#8B5CF6] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      to={item.to!}
                      className="text-sm font-manrope text-slate-300 hover:text-[#8B5CF6] transition-colors inline-block duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>

            {/* Newsletter — Playfair Display italic accent */}
            <div className="pt-3 border-t border-slate-800">
              <p className="font-playfair italic text-xs text-slate-400 mb-3">
                Stay updated with trade news
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-work">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Subscribed!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                    className="flex-1 min-w-0 bg-[#141C2B] border border-slate-700 text-white placeholder-slate-600 px-3 py-1.5 text-xs rounded-l focus:outline-none focus:border-[#DF9A28] font-work"
                  />
                  <button
                    type="submit"
                    className="bg-[#DF9A28] hover:bg-[#C8851B] text-white px-3 py-1.5 rounded-r text-xs font-bold font-montserrat transition-colors cursor-pointer shrink-0"
                  >
                    Go
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-slate-800/60 mx-6 sm:mx-10" />

      {/* ── Bottom bar ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[11px] text-slate-500 font-work tracking-wide">
          © 2026{' '}
          <span className="text-slate-300 font-semibold font-montserrat">Golden Star Company</span>.
          All Rights Reserved.
        </p>
        <p className="text-[11px] text-slate-600 font-lato italic">
          Premier Trade &amp; Sourcing · South India to the World
        </p>
      </div>
    </footer>
  );
};
