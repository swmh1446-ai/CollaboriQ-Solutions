import React, { useState } from 'react';
import { HR_LIFECYCLE_STAGES } from '../data/websiteData';
import { ArrowRight, CheckCircle2, ChevronRight, Activity, Zap } from 'lucide-react';

export const HrEcosystemFlow: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState(0);

  return (
    <section id="lifecycle" className="py-20 lg:py-28 bg-[#F8FBFF] relative overflow-hidden">
      {/* Frosted Glass background ambient light orbs */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-blue-200/20 via-sky-200/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border-[#0875E1]/20">
            <span className="w-2 h-2 rounded-full bg-[#0875E1]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#102A72]">
              Connected Employee Journey
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A72] tracking-tight">
            Seamless HR Ecosystem Lifecycle
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            See how continuous data continuity links candidate sourcing, core personnel management, skills development, rewards, payroll, and executive intelligence.
          </p>
        </div>

        {/* Interactive Lifecycle Stepper / Chain in Frosted Glass */}
        <div className="relative mb-12">
          {/* Desktop Flow Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {HR_LIFECYCLE_STAGES.map((stage, idx) => {
              const isActive = selectedStage === idx;
              return (
                <button
                  key={stage.step}
                  id={`lifecycle-step-btn-${idx}`}
                  onClick={() => setSelectedStage(idx)}
                  className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer relative group flex flex-col justify-between ${
                    isActive
                      ? 'navy-gradient text-white border-blue-400/40 shadow-lg shadow-[#102A72]/20 scale-102'
                      : 'glass text-slate-700 border-white/70 hover:border-blue-300 hover:bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md ${
                          isActive ? 'bg-white/20 text-white' : 'glass-pill text-[#0875E1]'
                        }`}
                      >
                        {stage.step}
                      </span>
                      {idx < HR_LIFECYCLE_STAGES.length - 1 && (
                        <ChevronRight
                          className={`w-3.5 h-3.5 hidden lg:block ${
                            isActive ? 'text-blue-200' : 'text-slate-400'
                          }`}
                        />
                      )}
                    </div>
                    <h4
                      className={`text-xs font-extrabold leading-tight ${
                        isActive ? 'text-white' : 'text-[#102A72]'
                      }`}
                    >
                      {stage.title}
                    </h4>
                  </div>

                  <span
                    className={`text-[10px] font-bold mt-3 block truncate ${
                      isActive ? 'text-[#FFB800]' : 'text-[#0875E1]'
                    }`}
                  >
                    {stage.module}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Deep-Dive Card in Frosted Glass */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/80 shadow-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-[#0875E1] text-white text-xs font-mono font-bold shadow-xs">
                  STAGE {HR_LIFECYCLE_STAGES[selectedStage].step}
                </span>
                <span className="text-xs font-bold uppercase text-[#102A72] glass-pill px-2.5 py-0.5 rounded-full border-[#0875E1]/20">
                  {HR_LIFECYCLE_STAGES[selectedStage].module} Module Integration
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#102A72]">
                {HR_LIFECYCLE_STAGES[selectedStage].title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600">
                {HR_LIFECYCLE_STAGES[selectedStage].description}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() =>
                  setSelectedStage((prev) => (prev > 0 ? prev - 1 : HR_LIFECYCLE_STAGES.length - 1))
                }
                className="px-4 py-2 rounded-full text-xs font-bold glass-pill text-slate-700 hover:bg-white hover:border-[#0875E1]/30 transition-all shadow-xs"
              >
                ← Prev Stage
              </button>
              <button
                type="button"
                onClick={() =>
                  setSelectedStage((prev) => (prev < HR_LIFECYCLE_STAGES.length - 1 ? prev + 1 : 0))
                }
                className="px-4 py-2 rounded-full text-xs font-bold bg-[#102A72] text-white hover:bg-[#0d225c] transition-all shadow-xs"
              >
                Next Stage →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
