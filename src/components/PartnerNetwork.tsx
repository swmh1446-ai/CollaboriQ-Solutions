import React from 'react';
import { ExternalLink, Network, Building2, Globe, Sparkles, ArrowUpRight } from 'lucide-react';
import { PARTNER_COMPANIES } from '../data/websiteData';

export const PartnerNetwork: React.FC = () => {
  return (
    <section id="partners" className="py-20 lg:py-28 bg-[#F8FBFF] relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-200/30 via-sky-100/20 to-emerald-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border-[#0875E1]/20">
            <Network className="w-3.5 h-3.5 text-[#0875E1]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#102A72]">
              Technology & Service Collaboration Network
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A72] tracking-tight">
            Partner & Collaboration Network
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            CollaboriQ Solutions works with a network of technology and consulting organizations to support SAP SuccessFactors services, implementation requirements, and enterprise HR technology initiatives.
          </p>
        </div>

        {/* Network Relationship Diagram in Frosted Glass */}
        <div className="mb-12 p-6 sm:p-7 rounded-3xl glass border border-white/80 shadow-md">
          <div className="flex flex-col items-center justify-center text-center space-y-3">
            <div className="flex items-center gap-2 px-5 py-2 rounded-full navy-gradient text-white text-xs sm:text-sm font-extrabold tracking-wide shadow-md border border-white/20">
              <span>CollaboriQ Solutions</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-0.5 h-4 bg-[#0875E1]/40" />
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#0875E1] glass-pill px-3.5 py-1 rounded-full border-[#0875E1]/20">
                Technology & Service Collaboration
              </div>
              <div className="w-0.5 h-4 bg-[#0875E1]/40" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-bold text-slate-700">
              {PARTNER_COMPANIES.map((company) => (
                <span
                  key={company.id}
                  className="px-3.5 py-1.5 rounded-full glass-pill text-[#102A72] border-white/80 hover:border-[#0875E1]/30 transition-colors"
                >
                  {company.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 5 Company Cards Grid in Frosted Glass */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {PARTNER_COMPANIES.map((company, idx) => {
            return (
              <div
                key={company.id}
                id={`partner-card-${company.id}`}
                className="module-card glass p-6 rounded-3xl border border-white/70 hover:border-[#0875E1]/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 group"
              >
                <div>
                  {/* Card Header & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl glass-subtle text-[#102A72] border border-blue-200/60 flex items-center justify-center group-hover:bg-[#102A72] group-hover:text-white transition-colors duration-300 shadow-xs">
                      <Building2 className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-mono font-bold text-slate-500 glass-pill px-2 py-0.5 rounded-md">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Company Name */}
                  <h3 className="text-lg font-bold text-[#102A72] group-hover:text-[#0875E1] transition-colors mb-2">
                    {company.name}
                  </h3>

                  {/* Domain Tag */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
                    <Globe className="w-3.5 h-3.5 text-[#0875E1]" />
                    <span className="truncate">{company.domainName}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {company.description}
                  </p>
                </div>

                {/* Visit Website CTA */}
                <div className="pt-4 border-t border-[#0875E1]/10">
                  <a
                    id={`visit-website-${company.id}`}
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full glass-pill text-xs font-bold text-[#102A72] group-hover:bg-[#0875E1] group-hover:text-white border-white/80 group-hover:border-transparent transition-all duration-200 shadow-xs"
                    aria-label={`Visit ${company.name} official website (opens in a new tab)`}
                  >
                    <span>Visit Website</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
