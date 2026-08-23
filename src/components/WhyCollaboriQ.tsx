import React from 'react';
import { 
  CheckCircle2, 
  Layers, 
  Target, 
  Cpu, 
  CheckSquare, 
  Maximize2, 
  GitMerge, 
  ArrowRight 
} from 'lucide-react';
import { WHY_COLLABRIQ } from '../data/websiteData';

export const WhyCollaboriQ: React.FC = () => {
  const getCardIcon = (id: string) => {
    switch (id) {
      case 'end-to-end':
        return Layers;
      case 'business-centric':
        return Target;
      case 'sf-focus':
        return Cpu;
      case 'structured-delivery':
        return CheckSquare;
      case 'scalable-solutions':
        return Maximize2;
      case 'connected-hr':
        return GitMerge;
      default:
        return CheckCircle2;
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#F8FBFF] relative overflow-hidden">
      {/* Frosted Glass ambient glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-gradient-to-r from-blue-200/20 via-sky-200/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border-[#0875E1]/20">
            <span className="w-2 h-2 rounded-full bg-[#0875E1]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#102A72]">
              Value & Execution
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A72] tracking-tight">
            Why CollaboriQ Solutions?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Enterprise focus, specialized SAP SuccessFactors technical expertise, and a disciplined implementation methodology built around your organizational requirements.
          </p>
        </div>

        {/* 6 Cards Grid in Frosted Glass */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_COLLABRIQ.map((card) => {
            const Icon = getCardIcon(card.id);
            return (
              <div
                key={card.id}
                id={`why-card-${card.id}`}
                className="module-card glass p-7 rounded-3xl border border-white/70 hover:border-[#0875E1]/60 hover:bg-white/90 transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between hover:-translate-y-1.5 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl glass-subtle text-[#102A72] border border-blue-200/60 flex items-center justify-center mb-6 group-hover:bg-[#102A72] group-hover:text-white transition-colors duration-300 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-[#102A72] group-hover:text-[#0875E1] transition-colors mb-3">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-[#0875E1]/10">
                    {card.bulletPoints.map((point, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#42B900] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
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
