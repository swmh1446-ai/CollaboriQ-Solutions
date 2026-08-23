import React from 'react';
import { Phone, MapPin, ArrowUp, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, SUCCESSFACTORS_MODULES } from '../data/websiteData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'SuccessFactors Modules', href: '#modules' },
    { label: '7-Step Implementation', href: '#implementation' },
    { label: 'Connected Lifecycle', href: '#lifecycle' },
    { label: 'Delivered Services', href: '#delivered-services' },
    { label: 'Why CollaboriQ', href: '#why-us' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 84;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="main-footer" className="navy-gradient text-white pt-16 pb-12 border-t border-white/20 relative overflow-hidden">
      {/* Frosted ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/15">
          {/* Col 1: Brand & Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-xs">
                <span className="text-white font-bold text-xl">C</span>
                <span className="text-[#42B900] font-bold text-lg -ml-0.5">Q</span>
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white block">
                  Collabori<span className="text-sky-300">Q</span> Solutions
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFB800] block mt-0.5">
                  SAP SUCCESSFACTORS IMPLEMENTATION
                </span>
              </div>
            </div>

            <p className="text-sm text-blue-100/90 leading-relaxed max-w-sm">
              Complete end-to-end implementation services across SAP SuccessFactors modules, providing enterprise-grade HR architecture and digital transformation.
            </p>

            <div className="pt-2 space-y-2 text-xs text-blue-100">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#42B900]" />
                <a
                  id="footer-phone-link"
                  href={COMPANY_INFO.phoneTel}
                  className="font-bold text-white hover:text-[#FFB800] transition-colors"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F4510B]" />
                <span>Hyderabad, Telangana – 500008, India</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FFB800]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs sm:text-sm text-blue-100/85 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-sky-300" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: 8 SuccessFactors Modules (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FFB800]">
              Supported Modules (8)
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2">
              {SUCCESSFACTORS_MODULES.map((mod) => (
                <a
                  key={mod.id}
                  href="#modules"
                  onClick={(e) => handleLinkClick(e, '#modules')}
                  className="text-xs text-blue-100/75 hover:text-white transition-colors truncate"
                  title={mod.name}
                >
                  • {mod.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-100/80">
          <p>© 2026 CollaboriQ Solutions. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              id="back-to-top-button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-semibold backdrop-blur-sm border border-white/20 transition-all cursor-pointer shadow-xs"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
