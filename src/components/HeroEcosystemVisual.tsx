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
  Layers
} from 'lucide-react';

interface HeroEcosystemVisualProps {
  onSelectModule?: (moduleId: string) => void;
}

export const HeroEcosystemVisual: React.FC<HeroEcosystemVisualProps> = ({ onSelectModule }) => {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);

  // Left 4 modules (Core & Operations)
  const leftModules = [
    {
      id: 'employee-central',
      name: 'Employee Central',
      subtitle: 'Core HR & Org Data',
      icon: Users,
      color: '#0875E1',
      accentBg: 'bg-blue-50 text-[#0875E1] border-blue-200',
    },
    {
      id: 'onboarding',
      name: 'Onboarding',
      subtitle: 'New-Hire Experience',
      icon: Sparkles,
      color: '#42B900',
      accentBg: 'bg-emerald-50 text-[#42B900] border-emerald-200',
    },
    {
      id: 'performance-goals',
      name: 'Performance & Goals',
      subtitle: 'Reviews & Alignment',
      icon: Target,
      color: '#0875E1',
      accentBg: 'bg-blue-50 text-[#0875E1] border-blue-200',
    },
    {
      id: 'ec-payroll',
      name: 'EC Payroll',
      subtitle: 'Compliant Processing',
      icon: CircleDollarSign,
      color: '#42B900',
      accentBg: 'bg-emerald-50 text-[#42B900] border-emerald-200',
    },
  ];

  // Right 4 modules (Talent & Analytics)
  const rightModules = [
    {
      id: 'recruiting',
      name: 'Recruiting',
      subtitle: 'Talent Acquisition',
      icon: UserPlus,
      color: '#F4510B',
      accentBg: 'bg-orange-50 text-[#F4510B] border-orange-200',
    },
    {
      id: 'learning',
      name: 'Learning',
      subtitle: 'Skills & Development',
      icon: Award,
      color: '#FFB800',
      accentBg: 'bg-amber-50 text-[#D97706] border-amber-200',
    },
    {
      id: 'compensation',
      name: 'Compensation',
      subtitle: 'Rewards & Budgeting',
      icon: CreditCard,
      color: '#F4510B',
      accentBg: 'bg-orange-50 text-[#F4510B] border-orange-200',
    },
    {
      id: 'people-analytics',
      name: 'People Analytics',
      subtitle: 'Workforce Insights',
      icon: BarChart3,
      color: '#0875E1',
      accentBg: 'bg-blue-50 text-[#0875E1] border-blue-200',
    },
  ];

  const allEightModules = [...leftModules, ...rightModules];
  const valuePills = ['HR', 'Technology', 'Integration', 'Workforce', 'Transformation', 'Analytics'];

  return (
    <div className="relative w-full max-w-2xl mx-auto xl:max-w-none glass rounded-3xl p-3.5 sm:p-5 xl:p-7 border border-[#0875E1]/20 shadow-xl shadow-[#0875E1]/5 overflow-hidden">
      {/* Decorative ambient gradients for glass refraction */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-blue-300/30 via-[#0875E1]/15 to-emerald-300/20 rounded-full blur-3xl pointer-events-none" />

      {/* SVG Orbit Lines Connecting Modules to Center Hub on Desktop only */}
      <svg className="hidden xl:block absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80" xmlns="http://www.w3.org/2000/svg">
        <line x1="20%" y1="20%" x2="50%" y2="50%" className="orbit-line" />
        <line x1="80%" y1="20%" x2="50%" y2="50%" className="orbit-line" />
        <line x1="20%" y1="80%" x2="50%" y2="50%" className="orbit-line" />
        <line x1="80%" y1="80%" x2="50%" y2="50%" className="orbit-line" />
      </svg>

      {/* Top category badges in frosted glass pills (Visible across all views) */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-3.5 sm:mb-4 xl:mb-5 relative z-10">
        {valuePills.map((pill, idx) => (
          <span
            key={pill}
            className={`text-[9px] sm:text-[10px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border tracking-wide uppercase glass-pill ${
              idx % 3 === 0
                ? 'text-[#0875E1] border-blue-300/60'
                : idx % 3 === 1
                ? 'text-[#42B900] border-emerald-300/60'
                : 'text-[#F4510B] border-orange-300/60'
            }`}
          >
            {pill}
          </span>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* 1. DESKTOP VIEW (≥ 1280px / xl): Preserved 3-Column Orbit Architecture    */}
      {/* ========================================================================= */}
      <div className="hidden xl:grid xl:grid-cols-12 gap-4 items-center relative z-10">
        {/* Left 4 Modules (Core & Operations) */}
        <div className="xl:col-span-4 space-y-2.5">
          <div className="text-[10px] font-bold tracking-wider text-slate-500 uppercase text-left pl-1">
            Core & Operations (4)
          </div>
          {leftModules.map((module) => {
            const Icon = module.icon;
            const isHovered = hoveredModule === module.id;
            return (
              <div
                key={module.id}
                id={`hero-module-card-desktop-${module.id}`}
                onMouseEnter={() => setHoveredModule(module.id)}
                onMouseLeave={() => setHoveredModule(null)}
                onClick={() => onSelectModule && onSelectModule(module.id)}
                className={`module-card glass p-3 rounded-2xl border transition-all duration-200 cursor-pointer text-left relative overflow-hidden group shadow-xs ${
                  isHovered
                    ? 'border-[#0875E1] ring-2 ring-[#0875E1]/20 shadow-md transform -translate-y-0.5 bg-white/90'
                    : 'border-white/60 hover:border-blue-300'
                }`}
                style={{
                  borderLeftWidth: '4px',
                  borderLeftColor: module.color
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center border shrink-0 transition-colors ${module.accentBg}`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm font-bold text-[#102A72] truncate group-hover:text-[#0875E1] transition-colors">
                      {module.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 truncate">{module.subtitle}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Card: SUCCESSFACTORS Hub */}
        <div className="xl:col-span-4 flex flex-col items-center justify-center">
          <div className="w-full relative">
            <div className="relative p-5 xl:p-6 rounded-3xl navy-gradient text-white text-center shadow-2xl shadow-[#102A72]/30 border border-white/30 outline outline-offset-4 outline-blue-200/60 overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-300/30 via-transparent to-transparent pointer-events-none" />

              <div className="relative mx-auto w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-inner">
                <Layers className="w-7 h-7 text-[#FFB800]" />
                <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#42B900] rounded-full border-2 border-[#102A72] animate-pulse" />
              </div>

              <span className="inline-block text-[9px] font-extrabold uppercase tracking-widest text-blue-100 bg-white/15 backdrop-blur-xs px-2.5 py-0.5 rounded-full mb-1 border border-white/20">
                Enterprise Core
              </span>

              <h3 className="text-sm sm:text-base font-black text-white tracking-tight leading-tight mt-1">
                SUCCESSFACTORS
              </h3>
              <p className="text-xs text-blue-100 font-medium mt-0.5">Implementation Hub</p>

              <div className="w-12 h-px bg-white/30 my-2.5 mx-auto" />

              <div className="pt-1 flex items-center justify-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#42B900]" />
                <span className="text-[11px] font-bold text-white tracking-wide">
                  8 Modules Integrated
                </span>
              </div>
            </div>

            <div className="text-center mt-2.5">
              <span className="text-[10px] font-semibold text-[#102A72] inline-flex items-center gap-1 glass-pill px-2.5 py-0.5 rounded-full border-[#0875E1]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0875E1] animate-ping" />
                Live Unified Data Pipeline
              </span>
            </div>
          </div>
        </div>

        {/* Right 4 Modules (Talent & Analytics) */}
        <div className="xl:col-span-4 space-y-2.5">
          <div className="text-[10px] font-bold tracking-wider text-slate-500 uppercase text-left pl-1">
            Talent & Analytics (4)
          </div>
          {rightModules.map((module) => {
            const Icon = module.icon;
            const isHovered = hoveredModule === module.id;
            return (
              <div
                key={module.id}
                id={`hero-module-card-desktop-${module.id}`}
                onMouseEnter={() => setHoveredModule(module.id)}
                onMouseLeave={() => setHoveredModule(null)}
                onClick={() => onSelectModule && onSelectModule(module.id)}
                className={`module-card glass p-3 rounded-2xl border transition-all duration-200 cursor-pointer text-left relative overflow-hidden group shadow-xs ${
                  isHovered
                    ? 'border-[#0875E1] ring-2 ring-[#0875E1]/20 shadow-md transform -translate-y-0.5 bg-white/90'
                    : 'border-white/60 hover:border-blue-300'
                }`}
                style={{
                  borderLeftWidth: '4px',
                  borderLeftColor: module.color
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center border shrink-0 transition-colors ${module.accentBg}`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm font-bold text-[#102A72] truncate group-hover:text-[#0875E1] transition-colors">
                      {module.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 truncate">{module.subtitle}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. TABLET VIEW (768px – 1279px / md to < xl):                             */}
      {/* Small central SUCCESSFACTORS card + 8 modules in compact 2-column layout  */}
      {/* ========================================================================= */}
      <div className="hidden md:block xl:hidden relative z-10 space-y-3">
        {/* Small Central SuccessFactors Card (~25-30% smaller than desktop) */}
        <div className="relative p-3 sm:p-3.5 rounded-2xl navy-gradient text-white shadow-md border border-white/30 overflow-hidden">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0">
                <Layers className="w-4 h-4 text-[#FFB800]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[8px] font-extrabold uppercase tracking-widest text-blue-100 bg-white/15 px-2 py-0.5 rounded-full border border-white/20">
                    Enterprise Core
                  </span>
                  <span className="text-[11px] text-blue-100 font-medium">Implementation Hub</span>
                </div>
                <h3 className="text-sm sm:text-base font-black text-white tracking-tight leading-tight mt-0.5">
                  SUCCESSFACTORS
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-1.5 bg-white/15 px-2.5 py-1 rounded-full border border-white/25 shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#42B900] animate-pulse" />
              <span className="text-[11px] font-bold text-white whitespace-nowrap">
                8 Modules Integrated
              </span>
            </div>
          </div>
        </div>

        {/* 8 Modules in a Compact 2-Column Layout */}
        <div className="grid grid-cols-2 gap-2.5">
          {/* Column 1: Core & Operations (4 modules) */}
          <div className="space-y-2">
            <div className="text-[10px] font-bold tracking-wider text-slate-500 uppercase pl-1">
              Core & Operations (4)
            </div>
            {leftModules.map((module) => {
              const Icon = module.icon;
              const isHovered = hoveredModule === module.id;
              return (
                <div
                  key={module.id}
                  id={`hero-module-card-tablet-${module.id}`}
                  onMouseEnter={() => setHoveredModule(module.id)}
                  onMouseLeave={() => setHoveredModule(null)}
                  onClick={() => onSelectModule && onSelectModule(module.id)}
                  className={`module-card glass p-2.5 sm:p-3 rounded-2xl border transition-all duration-200 cursor-pointer text-left relative overflow-hidden group shadow-xs active:scale-[0.99] ${
                    isHovered
                      ? 'border-[#0875E1] ring-2 ring-[#0875E1]/20 shadow-md bg-white/90'
                      : 'border-white/70 hover:border-blue-300'
                  }`}
                  style={{
                    borderLeftWidth: '3.5px',
                    borderLeftColor: module.color
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    {/* Icon ~24-30px */}
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center border shrink-0 transition-colors ${module.accentBg}`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      {/* Module title ~16-18px */}
                      <h4 className="text-[16px] sm:text-[17px] font-bold text-[#102A72] truncate group-hover:text-[#0875E1] transition-colors leading-snug">
                        {module.name}
                      </h4>
                      {/* Description ~12-13px */}
                      <p className="text-[12px] sm:text-[13px] text-slate-500 truncate leading-tight mt-0.5">
                        {module.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Column 2: Talent & Analytics (4 modules) */}
          <div className="space-y-2">
            <div className="text-[10px] font-bold tracking-wider text-slate-500 uppercase pl-1">
              Talent & Analytics (4)
            </div>
            {rightModules.map((module) => {
              const Icon = module.icon;
              const isHovered = hoveredModule === module.id;
              return (
                <div
                  key={module.id}
                  id={`hero-module-card-tablet-${module.id}`}
                  onMouseEnter={() => setHoveredModule(module.id)}
                  onMouseLeave={() => setHoveredModule(null)}
                  onClick={() => onSelectModule && onSelectModule(module.id)}
                  className={`module-card glass p-2.5 sm:p-3 rounded-2xl border transition-all duration-200 cursor-pointer text-left relative overflow-hidden group shadow-xs active:scale-[0.99] ${
                    isHovered
                      ? 'border-[#0875E1] ring-2 ring-[#0875E1]/20 shadow-md bg-white/90'
                      : 'border-white/70 hover:border-blue-300'
                  }`}
                  style={{
                    borderLeftWidth: '3.5px',
                    borderLeftColor: module.color
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    {/* Icon ~24-30px */}
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center border shrink-0 transition-colors ${module.accentBg}`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      {/* Module title ~16-18px */}
                      <h4 className="text-[16px] sm:text-[17px] font-bold text-[#102A72] truncate group-hover:text-[#0875E1] transition-colors leading-snug">
                        {module.name}
                      </h4>
                      {/* Description ~12-13px */}
                      <p className="text-[12px] sm:text-[13px] text-slate-500 truncate leading-tight mt-0.5">
                        {module.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. MOBILE VIEW (≤ 767px / < md):                                          */}
      {/* Ordered: Category pills → Small central SUCCESSFACTORS card →             */}
      {/* 8 compact module cards in a single-column list                            */}
      {/* ========================================================================= */}
      <div className="block md:hidden relative z-10 space-y-2">
        {/* Small Central SUCCESSFACTORS Card (35-40% smaller) */}
        <div className="relative p-2.5 rounded-2xl navy-gradient text-white text-center shadow-md border border-white/30 overflow-hidden">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6.5 h-6.5 rounded-lg bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0">
                <Layers className="w-3.5 h-3.5 text-[#FFB800]" />
              </div>
              <div className="text-left">
                <span className="text-[8px] font-extrabold uppercase tracking-widest text-blue-100 bg-white/15 px-1.5 py-0.5 rounded-full border border-white/20">
                  Enterprise Core
                </span>
                <h3 className="text-xs font-black text-white tracking-wider leading-tight mt-0.5 whitespace-nowrap">
                  SUCCESSFACTORS
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-1 bg-white/15 px-2 py-0.5 rounded-full border border-white/25 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#42B900] animate-pulse" />
              <span className="text-[9px] font-bold text-white whitespace-nowrap">8 Modules</span>
            </div>
          </div>
        </div>

        {/* 8 Compact Module Cards in a Single-Column List */}
        <div className="grid grid-cols-1 gap-1.5">
          {allEightModules.map((module) => {
            const Icon = module.icon;
            const isHovered = hoveredModule === module.id;
            return (
              <div
                key={module.id}
                id={`hero-module-card-mobile-${module.id}`}
                onMouseEnter={() => setHoveredModule(module.id)}
                onMouseLeave={() => setHoveredModule(null)}
                onClick={() => onSelectModule && onSelectModule(module.id)}
                className={`module-card glass p-2 rounded-xl border transition-all duration-150 cursor-pointer text-left relative overflow-hidden group shadow-2xs active:scale-[0.99] ${
                  isHovered
                    ? 'border-[#0875E1] ring-1 ring-[#0875E1]/30 bg-white/95'
                    : 'border-white/70 hover:border-blue-200'
                }`}
                style={{
                  borderLeftWidth: '3.5px',
                  borderLeftColor: module.color
                }}
              >
                <div className="flex items-center gap-2">
                  {/* Icon ~22-26px */}
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center border shrink-0 transition-colors ${module.accentBg}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    {/* Module title ~15-16px */}
                    <h4 className="text-[15px] font-bold text-[#102A72] truncate group-hover:text-[#0875E1] leading-tight">
                      {module.name}
                    </h4>
                    {/* Description ~11-12px */}
                    <p className="text-[11.5px] text-slate-500 truncate leading-tight mt-0.5">
                      {module.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive summary pill footer inside visual */}
      <div className="mt-3 sm:mt-3.5 xl:mt-4 pt-2.5 sm:pt-3 border-t border-[#0875E1]/15 flex flex-wrap items-center justify-between gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-slate-600 relative z-10">
        <span className="font-semibold text-[#102A72] flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#0875E1]" />
          Full Lifecycle Architecture
        </span>
        <span className="text-slate-500">Tap any module to inspect deliverables</span>
      </div>
    </div>
  );
};
