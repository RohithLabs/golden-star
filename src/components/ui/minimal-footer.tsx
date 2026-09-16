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
    <footer className="bg-[#0A0A0A] border-t border-white/8">
      {/* Gold top line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#DF9A28] to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Main footer grid ── */}
        <div className="grid grid-cols-6 gap-8 py-16">

          {/* Brand col — 4 cols on md */}
          <div className="col-span-6 flex flex-col gap-5 md:col-span-4">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center gap-2.5 w-max group">
              <div className="w-9 h-9 rounded-full bg-[#DF9A28] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform shrink-0">
                <Star className="size-4 text-black fill-black" />
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">
                Golden Star <span className="text-[#DF9A28]">Company</span>
              </span>
            </Link>

            <p className="text-white/40 max-w-sm font-normal text-sm leading-relaxed">
              South India's premier international trade & sourcing company — connecting regional producers to worldwide buyers across 50+ countries.
            </p>

            {/* Contact quick line */}
            <div className="flex flex-col gap-1.5 text-xs text-white/35 font-normal">
              <span>📍 {companyData.headquarters}</span>
              <span>📧 {companyData.email}</span>
              <span>📞 {companyData.phone}</span>
            </div>

            {/* Social icons */}
            <div className="flex gap-2">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  className="rounded-lg border border-white/10 p-1.5 text-white/40 hover:text-white hover:border-[#DF9A28]/50 hover:bg-[#DF9A28]/10 transition-all"
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
            <span className="text-[10px] font-black uppercase tracking-widest text-[#DF9A28] mb-3 block">
              Resources
            </span>
            <div className="flex flex-col gap-1">
              {resources.map((item, i) =>
                item.action ? (
                  <button
                    key={i}
                    onClick={onRequestQuote}
                    className="w-max py-1.5 text-sm font-normal text-white/50 hover:text-[#DF9A28] transition-colors text-left"
                  >
                    {item.title}
                  </button>
                ) : (
                  <Link
                    key={i}
                    to={item.to!}
                    className="w-max py-1.5 text-sm font-normal text-white/50 hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Company */}
          <div className="col-span-3 md:col-span-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#38BDF8] mb-3 block">
              Company
            </span>
            <div className="flex flex-col gap-1">
              {company.map(({ to, title }, i) => (
                <Link
                  key={i}
                  to={to}
                  className="w-max py-1.5 text-sm font-normal text-white/50 hover:text-white transition-colors"
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/25 font-normal">
            © {year}{' '}
            <span className="text-white/50 font-bold">Golden Star Company</span>.
            All rights reserved.
          </p>
          <p className="text-xs text-white/20 font-normal italic">
            Premier Trade & Sourcing · South India to the World
          </p>
        </div>
      </div>
    </footer>
  );
}
