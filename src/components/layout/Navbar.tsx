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
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
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
    { label: 'Contact',  path: '/contact' },
  ];

  const isCurrent = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ─── Main Bar ─────────────────────────────────────────────── */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm py-2'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Left: Official Company Logo with Increased Size */}
          <Link to="/" className="flex items-center gap-3.5 shrink-0 group">
            <img
              src="/golden-star-logo.png"
              alt="Golden Star Company"
              className="h-13 sm:h-16 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform drop-shadow-xs"
            />
            <div className="flex flex-col">
              <span className="font-montserrat font-black text-slate-900 text-base sm:text-lg tracking-tight select-none leading-none">
                Golden Star <span className="text-[#EA580C]">Company</span>
              </span>
              <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mt-0.5">
                Import &amp; Export
              </span>
            </div>
          </Link>

          {/* Center: Navigation Links Perfectly Centered */}
          <nav className="hidden md:flex items-center justify-center gap-1 lg:gap-2 flex-1 mx-4 lg:mx-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  isCurrent(link.path)
                    ? 'text-[#EA580C] bg-orange-50 font-black shadow-2xs'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Prominent Call-to-Action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={onRequestQuote}
              className="flex items-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 sm:py-3 rounded-full transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>Get Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all cursor-pointer"
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
          isMobileMenuOpen ? 'max-h-[420px]' : 'max-h-0'
        } bg-white border-b border-slate-200 shadow-xl`}
      >
        <div className="px-5 py-4 space-y-1.5">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                isCurrent(link.path)
                  ? 'text-[#EA580C] bg-orange-50 font-black'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={onRequestQuote}
            className="w-full mt-2 bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-sm uppercase tracking-wider px-5 py-3.5 rounded-full transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Get a Quote</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
