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
            ? 'bg-black/95 backdrop-blur-xl border-b border-white/8 shadow-xl shadow-black/50'
            : 'bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-8 h-8 rounded-full bg-[#DF9A28] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <svg width="18" height="18" viewBox="0 0 100 100" fill="none">
                <polygon
                  points="50,10 61,35 88,35 67,53 75,78 50,62 25,78 33,53 12,35 39,35"
                  fill="none" stroke="#000" strokeWidth="6" strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-montserrat font-extrabold text-white text-sm tracking-tight select-none">
              Golden Star <span className="text-[#DF9A28]">Company</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${
                  isCurrent(link.path)
                    ? 'text-[#DF9A28] bg-[#DF9A28]/10'
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors px-3 py-2"
            >
              Contact
            </Link>
            <button
              onClick={onRequestQuote}
              className="flex items-center gap-1.5 bg-[#DF9A28] hover:bg-[#E8A738] text-black text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-[#DF9A28]/30"
            >
              Get Quote <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/25 transition-all"
            onClick={() => setIsMobileMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* ─── Mobile Drawer ─────────────────────────────────────────── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[400px]' : 'max-h-0'
        } bg-[#0D0D0D] border-b border-white/10`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-lg text-sm font-bold transition-all ${
                isCurrent(link.path)
                  ? 'text-[#DF9A28] bg-[#DF9A28]/10'
                  : 'text-white/55 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="block px-4 py-3 rounded-lg text-sm font-bold text-white/55 hover:text-white hover:bg-white/5 transition-all">
            Contact
          </Link>
          <button
            onClick={onRequestQuote}
            className="w-full mt-2 bg-[#DF9A28] text-black font-black text-sm uppercase tracking-widest px-4 py-3 rounded-full"
          >
            Get a Quote →
          </button>
        </div>
      </div>
    </header>
  );
};
