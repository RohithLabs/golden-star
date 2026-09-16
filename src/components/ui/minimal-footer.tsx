import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
  Star,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyData } from '../../data/company';

interface MinimalFooterProps {
  onRequestQuote?: () => void;
}

export function MinimalFooter({ onRequestQuote }: MinimalFooterProps) {
  const year = new Date().getFullYear();

  const company = [
    { title: 'About Us',      to: '/about' },
    { title: 'Services',      to: '/services' },
    { title: 'Products',      to: '/products' },
    { title: 'Quality',       to: '/quality' },
    { title: 'Privacy Policy',to: '/terms-privacy' },
  ];

  const resources = [
    { title: 'Global Reach',      to: '/global-reach' },
    { title: 'Contact Us',        to: '/contact' },
    { title: 'Request a Quote',   action: true },
    { title: 'Trade FAQ',         to: '/#faq' },
    { title: 'Certifications',    to: '/quality' },
  ];

  const socialLinks = [
    { icon: <FacebookIcon className="size-4" />, link: 'https://facebook.com' },
    { icon: <InstagramIcon className="size-4" />, link: 'https://instagram.com' },
    { icon: <LinkedinIcon className="size-4" />, link: 'https://linkedin.com' },
    { icon: <TwitterIcon className="size-4" />, link: 'https://twitter.com' },
    { icon: <YoutubeIcon className="size-4" />, link: 'https://youtube.com' },
  ];

  return (
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600">
      {/* Orange accent top line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#EA580C]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Main footer grid ── */}
        <div className="grid grid-cols-6 gap-8 py-16">

          {/* Brand col — 4 cols on md */}
          <div className="col-span-6 flex flex-col gap-5 md:col-span-4">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center gap-3 w-max group">
              <img
                src="/golden-star-logo.png"
                alt="Golden Star Company"
                className="h-11 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform drop-shadow-xs"
              />
              <span className="font-extrabold text-slate-900 text-base tracking-tight">
                Golden Star <span className="text-[#EA580C]">Company</span>
              </span>
            </Link>

            <p className="text-slate-600 max-w-sm font-normal text-sm leading-relaxed">
              South India's premier international trade &amp; sourcing company — connecting regional producers to worldwide buyers across 50+ countries.
            </p>

            {/* Contact quick line */}
            <div className="flex flex-col gap-1.5 text-xs text-slate-500 font-normal">
              <span>📍 {companyData.headquarters}</span>
              <span>📧 {companyData.email}</span>
              <span>📞 {companyData.phone}</span>
            </div>

            {/* Social icons */}
            <div className="flex gap-2">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  className="rounded-lg border border-slate-200 bg-white p-2 text-slate-500 hover:text-[#EA580C] hover:border-[#EA580C]/40 hover:bg-orange-50 transition-all shadow-xs"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.link}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="col-span-3 md:col-span-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#EA580C] mb-3 block">
              Resources
            </span>
            <div className="flex flex-col gap-1">
              {resources.map((item, i) =>
                item.action ? (
                  <button
                    key={i}
                    onClick={onRequestQuote}
                    className="w-max py-1 text-sm font-medium text-slate-600 hover:text-[#EA580C] transition-colors text-left cursor-pointer"
                  >
                    {item.title}
                  </button>
                ) : (
                  <Link
                    key={i}
                    to={item.to!}
                    className="w-max py-1 text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors"
                  >
                    {item.title}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Company */}
          <div className="col-span-3 md:col-span-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284C7] mb-3 block">
              Company
            </span>
            <div className="flex flex-col gap-1">
              {company.map(({ to, title }, i) => (
                <Link
                  key={i}
                  to={to}
                  className="w-max py-1 text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors"
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-slate-200 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-500 font-normal">
            © {year}{' '}
            <span className="text-slate-900 font-bold">Golden Star Company</span>.
            All rights reserved.
          </p>
          <p className="text-xs text-slate-500 font-normal italic">
            Premier Trade &amp; Sourcing · South India to the World
          </p>
        </div>
      </div>
    </footer>
  );
}
