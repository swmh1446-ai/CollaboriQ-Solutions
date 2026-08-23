import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, PhoneCall, Sparkles } from 'lucide-react';
import { HeroEcosystemVisual } from './HeroEcosystemVisual';
import { COMPANY_INFO } from '../data/websiteData';

interface HeroProps {
  onSelectModule?: (moduleId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectModule }) => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
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
    <section
      id="hero"
      className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#F8FBFF]"
    >
      {/* Frosted Glass background ambient luminous orbs */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-blue-300/30 via-sky-200/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-gradient-to-tr from-emerald-200/25 via-blue-200/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#0875E1]/10 via-[#FFB800]/10 to-[#42B900]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid line texture overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#0875e108_1px,transparent_1px),linear-gradient(to_bottom,#0875e108_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border-[#0875E1]/20 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0875E1] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#102A72]">
                SAP SUCCESSFACTORS IMPLEMENTATION
              </span>
            </div>

            {/* Main Headline with Royal Blue Highlight */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-[#102A72] tracking-tight leading-[1.12]">
              Empowering Enterprises with Smarter{' '}
              <span className="text-[#0875E1] relative inline-block">
                HR Solutions
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-3 text-[#FFB800] -z-10"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C50 3 150 3 197 9"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              CollaboriQ Solutions delivers complete end-to-end SAP SuccessFactors implementation
              services, helping organizations streamline HR processes and build a more connected,
              efficient workforce.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                id="hero-primary-cta"
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-bold text-white bg-gradient-to-r from-[#102A72] to-[#0875E1] hover:from-[#0d225c] hover:to-[#0766c4] rounded-2xl shadow-lg shadow-[#102A72]/20 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 border border-white/20"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                id="hero-secondary-cta"
                href="#services"
                onClick={(e) => handleScrollTo(e, 'services')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-[#0875E1] glass-card hover:bg-white rounded-2xl border-2 border-[#0875E1]/30 hover:border-[#0875E1] transition-all duration-200"
              >
                <span>Explore Services</span>
              </a>
            </div>

            {/* Key Value Proof Badges */}
            <div className="pt-6 border-t border-[#0875E1]/15 grid grid-cols-3 gap-3 sm:gap-4">
              <div className="glass-card p-3 rounded-2xl flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-1 text-[#102A72] font-extrabold text-xl sm:text-2xl">
                  <span>8</span>
                  <span className="text-[10px] text-[#0875E1] font-bold uppercase tracking-wider">Modules</span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">Complete Suite</span>
              </div>

              <div className="glass-card p-3 rounded-2xl flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-1.5 text-[#102A72] font-extrabold text-base sm:text-lg">
                  <span>End-to-End</span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">Full Lifecycle</span>
              </div>

              <div className="glass-card p-3 rounded-2xl flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-1 text-[#102A72] font-extrabold text-base sm:text-lg">
                  <span>Hyderabad</span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">Delivery Center</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Ecosystem Visualization */}
          <div className="lg:col-span-6">
            <HeroEcosystemVisual onSelectModule={onSelectModule} />
          </div>
        </div>
      </div>
    </section>
  );
};
