import React from 'react';
import { ExternalLink, ArrowRight, Building2, Globe, ShieldCheck } from 'lucide-react';
import { DELIVERED_ORGANIZATIONS } from '../data/websiteData';

export const DeliveredServicesSection: React.FC = () => {
  return (
    <section id="delivered-services" className="py-20 lg:py-28 bg-[#F8FBFF] relative overflow-hidden">
      {/* Frosted Glass background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-200/25 via-sky-100/20 to-emerald-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border-[#0875E1]/20">
            <span className="w-2 h-2 rounded-full bg-[#0875E1]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#102A72]">
              SAP SuccessFactors Delivery Portfolio
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A72] tracking-tight">
            Delivered SAP SuccessFactors Services
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Delivered outsourced SAP SuccessFactors implementation, integration, and application support services to the following organizations:
          </p>
        </div>

        {/* 3 Premium Company Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {DELIVERED_ORGANIZATIONS.map((org, idx) => {
            return (
              <div
                key={org.id}
                id={`delivered-org-card-${org.id}`}
                className="module-card glass p-6 rounded-3xl border border-white/80 hover:border-[#0875E1]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 group"
              >
                <div>
                  {/* Card Header & Professional Logo / Icon Area */}
                  <div className="flex items-center justify-between mb-5">
                    {/* Professional Minimal Icon/Logo Area */}
                    <div className="relative w-12 h-12 rounded-2xl glass-subtle border border-blue-200/70 flex items-center justify-center group-hover:bg-[#102A72] group-hover:border-[#102A72] transition-colors duration-300 shadow-xs">
                      <span className="font-mono font-extrabold text-sm text-[#102A72] group-hover:text-white transition-colors">
                        {org.initials}
                      </span>
                      {/* Subtle accent color node */}
                      <span
                        className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border-2 border-white shadow-xs"
                        style={{ backgroundColor: org.accentColor }}
                      />
                    </div>

                    <span className="text-[10px] font-mono font-bold text-slate-500 glass-pill px-2.5 py-0.5 rounded-full border-white/80">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Company Name */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#102A72] group-hover:text-[#0875E1] transition-colors mb-2">
                    {org.name}
                  </h3>

                  {/* Website Domain */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
                    <Globe className="w-3.5 h-3.5 text-[#0875E1] shrink-0" />
                    <span className="truncate font-medium">{org.domainName}</span>
                  </div>

                  {/* Delivery Context */}
                  <div className="mb-6 p-3 rounded-2xl glass-subtle border border-white/70">
                    <span className="text-[11px] font-semibold text-slate-600 block leading-tight">
                      Outsourced SAP SuccessFactors Implementation, Integration & Support
                    </span>
                  </div>
                </div>

                {/* Visit Website CTA Button */}
                <div className="pt-4 border-t border-[#0875E1]/10">
                  <a
                    id={`visit-website-${org.id}`}
                    href={org.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#102A72] hover:bg-[#0875E1] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all duration-200 border border-white/20 active:scale-98 cursor-pointer group/btn"
                    aria-label={`Visit ${org.name} official website (opens in a new tab)`}
                  >
                    <span>Visit Website &rarr;</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subtle Trust Bar */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle border border-white/80 text-xs font-semibold text-slate-600">
            <ShieldCheck className="w-4 h-4 text-[#42B900]" />
            <span>Delivering reliable, scalable enterprise SAP SuccessFactors solutions with full SLA commitment</span>
          </div>
        </div>
      </div>
    </section>
  );
};
