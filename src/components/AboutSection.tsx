import React from 'react';
import { Building, MapPin, Sparkles, Target, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F8FBFF] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-200/20 via-sky-100/15 to-emerald-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-10 lg:p-14 border border-white/80 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Story & Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border-[#0875E1]/20">
                <span className="w-2 h-2 rounded-full bg-[#0875E1]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#102A72]">
                  Corporate Profile
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A72] tracking-tight">
                About CollaboriQ Solutions
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                CollaboriQ Solutions is an IT services company based in Hyderabad, India, focused on
                delivering complete end-to-end implementation services across SAP SuccessFactors
                modules.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We partner with enterprise organizations to align HR business processes with SAP best
                practices, ensuring smooth transition management, rock-solid technical integration,
                and high user adoption across core HR, talent, payroll, and workforce analytics.
              </p>

              {/* Company Specs Grid in Frosted Glass */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#0875E1]/10">
                <div className="p-4 rounded-2xl glass-subtle border border-white/70">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Sector
                  </span>
                  <div className="flex items-center gap-2 text-sm font-extrabold text-[#102A72]">
                    <Building className="w-4 h-4 text-[#0875E1]" />
                    <span>{COMPANY_INFO.sector}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl glass-subtle border border-white/70">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Specialization
                  </span>
                  <div className="flex items-center gap-2 text-sm font-extrabold text-[#102A72]">
                    <Target className="w-4 h-4 text-[#42B900]" />
                    <span>SAP SuccessFactors</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl glass-subtle border border-white/70">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Location
                  </span>
                  <div className="flex items-center gap-2 text-sm font-extrabold text-[#102A72]">
                    <MapPin className="w-4 h-4 text-[#F4510B]" />
                    <span>{COMPANY_INFO.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Execution Pillars Card in Frosted Glass Navy */}
            <div className="lg:col-span-5 glass-navy text-white rounded-3xl p-7 sm:p-8 space-y-6 shadow-xl border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <ShieldCheck className="w-5 h-5 text-[#FFB800]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Our Technical Mandate</h3>
                  <span className="text-xs text-blue-100 font-medium">Standards & Reliability</span>
                </div>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3 bg-white/10 p-3 rounded-2xl backdrop-blur-xs border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#42B900] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white font-semibold">Single-Point Accountability:</strong>{' '}
                    Direct oversight across discovery, configuration, and go-live.
                  </span>
                </div>

                <div className="flex items-start gap-3 bg-white/10 p-3 rounded-2xl backdrop-blur-xs border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white font-semibold">Strict SAP Standards:</strong>{' '}
                    Implementation based on official data models and security frameworks.
                  </span>
                </div>

                <div className="flex items-start gap-3 bg-white/10 p-3 rounded-2xl backdrop-blur-xs border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#42B900] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white font-semibold">Collaborative Delivery:</strong>{' '}
                    Cohesive alignment with your internal HR, IT, and payroll teams.
                  </span>
                </div>
              </div>

              <div className="pt-2 text-center">
                <span className="text-[10px] font-bold text-blue-100 uppercase tracking-widest glass-pill px-3 py-1 rounded-full text-slate-800 border-white/40">
                  Hyderabad, Telangana – 500008, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
