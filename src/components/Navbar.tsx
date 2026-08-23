import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

interface NavbarProps {
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for indicator
      const sections = ['hero', 'services', 'modules', 'implementation', 'lifecycle', 'partners', 'why-us', 'about', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'SuccessFactors', href: '#modules', id: 'modules' },
    { label: 'Implementation', href: '#implementation', id: 'implementation' },
    { label: 'Partners', href: '#partners', id: 'partners' },
    { label: 'Why Us', href: '#why-us', id: 'why-us' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass py-3.5 border-b border-[#0875E1]/15 shadow-sm'
          : 'glass-subtle py-4 sm:py-5 border-b border-[#0875E1]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Subtitle */}
          <a
            href="#hero"
            id="brand-logo-link"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#0875E1] rounded-xl p-1"
          >
            {/* Custom Brand Mark */}
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-[#102A72] to-[#0875E1] flex items-center justify-center shadow-md shadow-[#102A72]/20 group-hover:scale-105 transition-transform duration-200 border border-white/40">
              <span className="text-white font-bold text-xl tracking-tighter">C</span>
              <span className="text-[#42B900] font-bold text-lg -ml-0.5">Q</span>
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#FFB800] border-2 border-white flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F4510B]" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-[#102A72] leading-none">
                Collabori<span className="text-[#0875E1]">Q</span>
                <span className="text-slate-600 font-semibold text-base ml-1">Solutions</span>
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#0875E1] mt-1 opacity-90">
                SAP SuccessFactors Implementation
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-full transition-all duration-150 relative ${
                    isActive
                      ? 'text-[#0875E1] bg-[#0875E1]/10 border border-[#0875E1]/20 shadow-xs'
                      : 'text-slate-700 hover:text-[#0875E1] hover:bg-white/60'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#0875E1] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Area: Phone + CTA Button */}
          <div className="hidden sm:flex items-center gap-3 lg:gap-4">
            <a
              id="header-phone-button"
              href={COMPANY_INFO.phoneTel}
              className="flex items-center gap-2 px-3.5 py-2 text-xs xl:text-sm font-semibold text-[#102A72] glass-pill hover:border-[#0875E1]/40 hover:text-[#0875E1] rounded-full transition-all"
              title="Call CollaboriQ Solutions"
            >
              <Phone className="w-3.5 h-3.5 text-[#0875E1]" />
              <span className="hidden xl:inline">{COMPANY_INFO.phoneDisplay}</span>
              <span className="xl:hidden">Call Us</span>
            </a>

            <a
              id="header-cta-button"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs xl:text-sm font-bold text-white bg-gradient-to-r from-[#102A72] to-[#0875E1] hover:from-[#0d225c] hover:to-[#0766c4] rounded-full shadow-md shadow-[#102A72]/20 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 border border-white/20"
            >
              <span>Talk to Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={COMPANY_INFO.phoneTel}
              aria-label="Call CollaboriQ"
              className="p-2 text-[#102A72] glass-pill hover:bg-blue-50 rounded-xl sm:hidden"
            >
              <Phone className="w-4 h-4 text-[#0875E1]" />
            </a>

            <button
              id="mobile-menu-toggle-button"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#102A72] glass-pill rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0875E1]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden fixed inset-x-0 top-[65px] glass border-b border-[#0875E1]/15 shadow-xl max-h-[calc(100vh-65px)] overflow-y-auto"
        >
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between transition-all ${
                    activeSection === link.id
                      ? 'bg-[#0875E1]/10 text-[#0875E1] border border-[#0875E1]/20'
                      : 'text-slate-700 hover:bg-white/60'
                  }`}
                >
                  <span>{link.label}</span>
                  {activeSection === link.id && <CheckCircle2 className="w-4 h-4 text-[#0875E1]" />}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200/60 space-y-3">
              <a
                href={COMPANY_INFO.phoneTel}
                className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl glass-pill text-[#102A72] font-semibold text-sm hover:border-[#0875E1]/40 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0875E1]" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#102A72] to-[#0875E1] text-white font-bold text-sm shadow-md hover:from-[#0d225c] hover:to-[#0766c4] transition-colors border border-white/20"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
