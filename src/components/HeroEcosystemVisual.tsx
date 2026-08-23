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
import { SUCCESSFACTORS_MODULES } from '../data/websiteData';

interface HeroEcosystemVisualProps {
  onSelectModule?: (moduleId: string) => void;
}

export const HeroEcosystemVisual: React.FC<HeroEcosystemVisualProps> = ({ onSelectModule }) => {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);

  // Left 4 modules
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

  // Right 4 modules
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

  const valuePills = ['HR', 'Technology', 'Integration', 'Workforce', 'Transformation', 'Analytics'];

  return (
    <div className="relative w-full max-w-2xl mx-auto lg:max-w-none glass rounded-3xl p-4 sm:p-6 lg:p-7 border border-[#0875E1]/20 shadow-xl shadow-[#0875E1]/5 overflow-hidden">
      {/* Decorative ambient gradients for glass refraction */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-blue-300/30 via-[#0875E1]/15 to-emerald-300/20 rounded-full blur-3xl pointer-events-none" />

      {/* SVG Orbit Lines Connecting Modules to Center Hub */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80" xmlns="http://www.w3.org/2000/svg">
        <line x1="20%" y1="20%" x2="50%" y2="50%" className="orbit-line" />
        <line x1="80%" y1="20%" x2="50%" y2="50%" className="orbit-line" />
        <line x1="20%" y1="80%" x2="50%" y2="50%" className="orbit-line" />
        <line x1="80%" y1="80%" x2="50%" y2="50%" className="orbit-line" />
      </svg>

      {/* Top category badges in frosted glass pills */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-5 relative z-10">
        {valuePills.map((pill, idx) => (
          <span
            key={pill}
            className={`text-[10px] font-bold px-2.5 py-1 rounded-full border tracking-wide uppercase glass-pill ${
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

      {/* Main Grid: 3-column layout on medium+ screens, responsive stack on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center relative z-10">
        {/* Left 4 Modules */}
        <div className="md:col-span-4 space-y-2.5">
          <div className="text-[10px] font-bold tracking-wider text-slate-500 uppercase text-center md:text-left pl-1">
            Core & Operations (4)
          </div>
          {leftModules.map((module) => {
            const Icon = module.icon;
            const isHovered = hoveredModule === module.id;
            return (
              <div
                key={module.id}
                id={`hero-module-card-${module.id}`}
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
        <div className="md:col-span-4 flex flex-col items-center justify-center py-2 md:py-0">
          <div className="w-full relative">
            <div className="relative p-5 sm:p-6 rounded-3xl navy-gradient text-white text-center shadow-2xl shadow-[#102A72]/30 border border-white/30 outline outline-offset-4 outline-blue-200/60 overflow-hidden group">
              {/* Radial pulse background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-300/30 via-transparent to-transparent pointer-events-none" />

              {/* Pulsing ring icon with frosted glass container */}
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

            {/* Subtle sync indicator */}
            <div className="text-center mt-2.5">
              <span className="text-[10px] font-semibold text-[#102A72] inline-flex items-center gap-1 glass-pill px-2.5 py-0.5 rounded-full border-[#0875E1]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0875E1] animate-ping" />
                Live Unified Data Pipeline
              </span>
            </div>
          </div>
        </div>

        {/* Right 4 Modules */}
        <div className="md:col-span-4 space-y-2.5">
          <div className="text-[10px] font-bold tracking-wider text-slate-500 uppercase text-center md:text-left pl-1">
            Talent & Analytics (4)
          </div>
          {rightModules.map((module) => {
            const Icon = module.icon;
            const isHovered = hoveredModule === module.id;
            return (
              <div
                key={module.id}
                id={`hero-module-card-${module.id}`}
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

      {/* Interactive summary pill footer inside visual */}
      <div className="mt-5 pt-3.5 border-t border-[#0875E1]/15 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-600 relative z-10">
        <span className="font-semibold text-[#102A72] flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#0875E1]" />
          Full Lifecycle Architecture
        </span>
        <span className="text-slate-500">Click any module to inspect deliverables</span>
      </div>
    </div>
  );
};
