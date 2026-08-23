import React, { useState } from 'react';
import { 
  Users, 
  UserPlus, 
  Sparkles, 
  Award, 
  Target, 
  CreditCard, 
  CircleDollarSign, 
  BarChart3, 
  ArrowRight,
  CheckCircle2,
  Layers,
  ChevronRight
} from 'lucide-react';
import { SUCCESSFACTORS_MODULES } from '../data/websiteData';
import { SFModule } from '../types';

interface SuccessFactorsModulesProps {
  onOpenModuleModal: (module: SFModule) => void;
  onSelectForInquiry: (moduleName: string) => void;
}

export const SuccessFactorsModules: React.FC<SuccessFactorsModulesProps> = ({
  onOpenModuleModal,
  onSelectForInquiry
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getModuleIcon = (id: string) => {
    switch (id) {
      case 'employee-central':
        return Users;
      case 'recruiting':
        return UserPlus;
      case 'onboarding':
        return Sparkles;
      case 'learning':
        return Award;
      case 'performance-goals':
        return Target;
      case 'compensation':
        return CreditCard;
      case 'ec-payroll':
        return CircleDollarSign;
      case 'people-analytics':
        return BarChart3;
      default:
        return Layers;
    }
  };

  const getAccentTheme = (color: string) => {
    switch (color) {
      case 'orange':
        return {
          pill: 'bg-orange-50 text-[#F4510B] border-orange-200',
          iconBg: 'bg-orange-50 text-[#F4510B] border-orange-200 group-hover:bg-[#F4510B] group-hover:text-white',
          border: 'hover:border-[#F4510B]/50',
          indicator: 'bg-[#F4510B]',
          btnText: 'text-[#F4510B]'
        };
      case 'green':
        return {
          pill: 'bg-emerald-50 text-[#42B900] border-emerald-200',
          iconBg: 'bg-emerald-50 text-[#42B900] border-emerald-200 group-hover:bg-[#42B900] group-hover:text-white',
          border: 'hover:border-[#42B900]/50',
          indicator: 'bg-[#42B900]',
          btnText: 'text-[#42B900]'
        };
      case 'gold':
        return {
          pill: 'bg-amber-50 text-[#D97706] border-amber-200',
          iconBg: 'bg-amber-50 text-[#D97706] border-amber-200 group-hover:bg-[#FFB800] group-hover:text-slate-900',
          border: 'hover:border-[#FFB800]/50',
          indicator: 'bg-[#FFB800]',
          btnText: 'text-[#D97706]'
        };
      case 'blue':
      default:
        return {
          pill: 'bg-blue-50 text-[#0875E1] border-blue-200',
          iconBg: 'bg-blue-50 text-[#0875E1] border-blue-200 group-hover:bg-[#0875E1] group-hover:text-white',
          border: 'hover:border-[#0875E1]/50',
          indicator: 'bg-[#0875E1]',
          btnText: 'text-[#0875E1]'
        };
    }
  };

  const categories = [
    { id: 'all', label: 'All 8 Modules' },
    { id: 'Core HR', label: 'Core HR' },
    { id: 'Talent', label: 'Talent Suite' },
    { id: 'Workforce', label: 'Workforce & Learning' },
    { id: 'Compensation & Payroll', label: 'Compensation & Payroll' },
    { id: 'Analytics', label: 'People Analytics' },
  ];

  return (
    <section id="modules" className="py-20 lg:py-28 bg-[#F8FBFF] relative overflow-hidden">
      {/* Background visual orbs */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-gradient-to-l from-blue-200/25 via-sky-100/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-gradient-to-r from-emerald-200/20 via-blue-100/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border-[#0875E1]/20">
            <span className="w-2 h-2 rounded-full bg-[#0875E1]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#102A72]">
              SAP SuccessFactors Suite
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A72] tracking-tight">
            SAP SuccessFactors Modules
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Complete end-to-end implementation across the connected HR ecosystem.
          </p>
        </div>

        {/* Category Filters for Quick Inspection (Frosted Glass Pills) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#102A72] text-white shadow-md border border-[#102A72]'
                  : 'glass-pill text-slate-600 hover:text-[#0875E1] border-white/80 hover:border-[#0875E1]/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Display: Guaranteed to render ALL 8 Modules at all times */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUCCESSFACTORS_MODULES.map((module, index) => {
            const Icon = getModuleIcon(module.id);
            const theme = getAccentTheme(module.accentColor);
            const isHighlighted = activeCategory === 'all' || activeCategory === module.category;
            const borderColors: Record<string, string> = {
              'employee-central': '#0875E1',
              'recruiting': '#F4510B',
              'onboarding': '#42B900',
              'learning': '#FFB800',
              'performance-goals': '#0875E1',
              'compensation': '#F4510B',
              'ec-payroll': '#42B900',
              'people-analytics': '#0875E1'
            };

            return (
              <div
                key={module.id}
                id={`module-card-${module.id}`}
                className={`module-card glass rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1 ${
                  theme.border
                } ${
                  isHighlighted
                    ? 'opacity-100 border-white/80'
                    : 'opacity-60 border-white/40'
                }`}
                style={{
                  borderLeftWidth: '4px',
                  borderLeftColor: borderColors[module.id] || '#0875E1'
                }}
              >
                {/* Module Number badge & Category */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${theme.iconBg}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-mono font-bold text-slate-500 glass-pill px-2 py-0.5 rounded-md">
                        MOD 0{index + 1}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border mt-1 ${theme.pill}`}
                      >
                        {module.category}
                      </span>
                    </div>
                  </div>

                  {/* Module Title */}
                  <h3 className="text-xl font-bold text-[#102A72] group-hover:text-[#0875E1] transition-colors mb-2.5">
                    {module.name}
                  </h3>

                  {/* Official Short Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {module.shortDesc}
                  </p>

                  {/* Key Capabilities Mini Checklist */}
                  <div className="space-y-1.5 pt-3 border-t border-[#0875E1]/10 mb-6">
                    {module.keyCapabilities.slice(0, 2).map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0875E1] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-3 border-t border-[#0875E1]/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onOpenModuleModal(module)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#102A72] hover:text-[#0875E1] transition-colors py-1 group/btn cursor-pointer"
                  >
                    <span>Explore Scope</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectForInquiry(module.name)}
                    className="text-xs font-bold text-[#0875E1] hover:underline cursor-pointer"
                  >
                    Inquire →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Footer Callout in Frosted Glass Navy Banner */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl glass-navy text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl border border-white/20">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center shrink-0 hidden sm:flex border border-white/30">
              <Layers className="w-6 h-6 text-[#FFB800]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Need a multi-module implementation or custom phased rollout?
              </h4>
              <p className="text-xs sm:text-sm text-blue-100">
                CollaboriQ Solutions architect teams map your exact deployment sequence.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="shrink-0 px-6 py-3 rounded-full bg-white text-[#102A72] font-bold text-xs sm:text-sm hover:bg-blue-50 transition-colors shadow-sm"
          >
            Request Implementation Scope
          </a>
        </div>
      </div>
    </section>
  );
};
