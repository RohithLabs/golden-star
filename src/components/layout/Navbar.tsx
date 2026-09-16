import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onRequestQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [location.pathname]);

  const navLinks = [
    { label: 'Home',     path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Products', path: '/products' },
    { label: 'Quality',  path: '/quality' },
    { label: 'About',    path: '/about' },
  ];

  const isCurrent = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ─── Desktop / Tablet Bar ──────────────────────────────────── */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-sm'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-6">

          {/* Official Company Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <img
              src="/golden-star-logo.png"
              alt="Golden Star Company"
              className="h-11 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform drop-shadow-xs"
            />
            <span className="font-montserrat font-black text-slate-900 text-sm sm:text-base tracking-tight select-none">
              Golden Star <span className="text-[#EA580C]">Company</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  isCurrent(link.path)
                    ? 'text-[#EA580C] bg-orange-50 font-black'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 transition-colors px-2 py-2"
            >
              Contact
            </Link>
            <button
              onClick={onRequestQuote}
              className="flex items-center gap-1.5 bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              Get Quote <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all cursor-pointer"
            onClick={() => setIsMobileMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ─── Mobile Drawer ─────────────────────────────────────────── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[400px]' : 'max-h-0'
        } bg-white border-b border-slate-200 shadow-xl`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-lg text-sm font-bold transition-all ${
                isCurrent(link.path)
                  ? 'text-[#EA580C] bg-orange-50 font-black'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="block px-4 py-3 rounded-lg text-sm font-bold text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition-all">
            Contact
          </Link>
          <button
            onClick={onRequestQuote}
            className="w-full mt-2 bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-sm uppercase tracking-wider px-4 py-3 rounded-full transition-all shadow-sm cursor-pointer"
          >
            Get a Quote →
          </button>
        </div>
      </div>
    </header>
  );
};
