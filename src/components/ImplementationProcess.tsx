import React, { useState } from 'react';
import { 
  Search, 
  PenTool, 
  Sliders, 
  Network, 
  CheckCircle, 
  Rocket, 
  TrendingUp, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { IMPLEMENTATION_STEPS } from '../data/websiteData';

export const ImplementationProcess: React.FC = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return Search;
      case 1:
        return PenTool;
      case 2:
        return Sliders;
      case 3:
        return Network;
      case 4:
        return CheckCircle;
      case 5:
        return Rocket;
      case 6:
        return TrendingUp;
      default:
        return Search;
    }
  };

  const activeStep = IMPLEMENTATION_STEPS[selectedStepIndex];
  const ActiveIcon = getStepIcon(selectedStepIndex);

  return (
    <section id="implementation" className="py-20 lg:py-28 bg-[#F8FBFF] relative overflow-hidden">
      {/* Frosted Glass background ambient light orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-blue-200/20 via-sky-200/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gradient-to-l from-emerald-200/20 via-blue-200/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border-[#0875E1]/20">
            <span className="w-2 h-2 rounded-full bg-[#0875E1]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#102A72]">
              Structured Delivery Framework
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A72] tracking-tight">
            From Strategy to Successful Implementation
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our structured seven-phase methodology ensures predictable delivery, enterprise-grade governance, and zero operational disruption.
          </p>
        </div>

        {/* Desktop Horizontal Timeline Stepper */}
        <div className="hidden lg:block mb-12">
          <div className="relative">
            {/* Background connecting bar */}
            <div className="absolute top-1/2 left-4 right-4 h-1 -translate-y-1/2 bg-slate-200/80 rounded-full z-0" />
            <div
              className="absolute top-1/2 left-4 h-1 -translate-y-1/2 bg-gradient-to-r from-[#102A72] to-[#0875E1] rounded-full z-0 transition-all duration-500"
              style={{
                width: `${(selectedStepIndex / (IMPLEMENTATION_STEPS.length - 1)) * 96}%`,
              }}
            />

            {/* Stepper items */}
            <div className="grid grid-cols-7 gap-2 relative z-10">
              {IMPLEMENTATION_STEPS.map((step, idx) => {
                const isSelected = selectedStepIndex === idx;
                const isPassed = selectedStepIndex >= idx;
                const StepIcon = getStepIcon(idx);

                return (
                  <button
                    key={step.stepNumber}
                    id={`desktop-step-btn-${idx}`}
                    onClick={() => setSelectedStepIndex(idx)}
                    className="flex flex-col items-center group cursor-pointer text-center focus:outline-none"
                  >
                    {/* Circle Indicator */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 ${
                        isSelected
                          ? 'navy-gradient border-[#0875E1] text-white shadow-lg shadow-[#102A72]/25 scale-110'
                          : isPassed
                          ? 'glass border-[#0875E1]/60 text-[#0875E1]'
                          : 'glass-subtle border-white/80 text-slate-400 group-hover:border-slate-300'
                      }`}
                    >
                      <StepIcon className="w-5 h-5" />
                    </div>

                    {/* Step Number & Label */}
                    <span className="text-[11px] font-mono font-bold text-[#0875E1] mt-2.5">
                      STEP {step.stepNumber}
                    </span>
                    <span
                      className={`text-xs font-bold transition-colors mt-0.5 ${
                        isSelected ? 'text-[#102A72]' : 'text-slate-600 group-hover:text-slate-900'
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Interactive Step Detail Card in Frosted Glass */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/80 shadow-xl mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Step Overview */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-[#102A72] text-white font-mono text-sm font-extrabold shadow-xs">
                  PHASE {activeStep.stepNumber}
                </span>
                <span className="text-xs font-bold text-[#0875E1] uppercase tracking-wide glass-pill px-2.5 py-0.5 rounded-full border-[#0875E1]/20">
                  Implementation Milestone
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102A72] tracking-tight">
                {activeStep.title}: <span className="text-[#0875E1]">{activeStep.tagline}</span>
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {activeStep.description}
              </p>

              {/* Navigation controls */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  type="button"
                  disabled={selectedStepIndex === 0}
                  onClick={() => setSelectedStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-full text-xs font-semibold glass-pill text-slate-700 hover:bg-white hover:border-[#0875E1]/40 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  ← Previous Step
                </button>
                <button
                  type="button"
                  disabled={selectedStepIndex === IMPLEMENTATION_STEPS.length - 1}
                  onClick={() =>
                    setSelectedStepIndex((prev) =>
                      Math.min(IMPLEMENTATION_STEPS.length - 1, prev + 1)
                    )
                  }
                  className="px-4 py-2 rounded-full text-xs font-bold bg-[#0875E1] text-white hover:bg-[#0766c4] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
                >
                  Next Step →
                </button>
              </div>
            </div>

            {/* Right: Key Deliverables / Activities */}
            <div className="lg:col-span-6 glass rounded-2xl p-6 border border-white/80 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-[#0875E1]/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A72] flex items-center gap-2">
                  <ActiveIcon className="w-4 h-4 text-[#0875E1]" />
                  Key Activities & Deliverables
                </h4>
                <span className="text-[11px] font-semibold text-[#42B900] bg-emerald-50/90 border border-emerald-200/60 px-2 py-0.5 rounded-md">
                  Standard Gate Review
                </span>
              </div>

              <div className="space-y-2.5">
                {activeStep.keyActivities.map((activity, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-2.5 rounded-xl glass-subtle border border-white/60"
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-100/90 text-[#0875E1] flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold">
                      {i + 1}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-700">
                      {activity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline Cards (All 7 Steps visible) */}
        <div className="lg:hidden space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
            Complete 7-Step Sequence:
          </div>
          {IMPLEMENTATION_STEPS.map((step, idx) => {
            const isSelected = selectedStepIndex === idx;
            const StepIcon = getStepIcon(idx);
            return (
              <div
                key={step.stepNumber}
                id={`mobile-step-card-${idx}`}
                onClick={() => setSelectedStepIndex(idx)}
                className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'glass border-[#0875E1] ring-2 ring-[#0875E1]/20 shadow-md'
                    : 'glass-subtle border-white/70 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? 'navy-gradient text-white shadow-xs' : 'glass-pill text-slate-600'
                    }`}
                  >
                    <StepIcon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#0875E1]">
                        STEP {step.stepNumber}
                      </span>
                      <h4 className="text-sm font-bold text-[#102A72] truncate">{step.title}</h4>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5">{step.tagline}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
