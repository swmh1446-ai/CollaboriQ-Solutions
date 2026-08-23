import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Layers, Sparkles, Building } from 'lucide-react';
import { SFModule } from '../types';

interface ModuleModalProps {
  module: SFModule | null;
  onClose: () => void;
  onSelectForInquiry: (moduleName: string) => void;
}

export const ModuleModal: React.FC<ModuleModalProps> = ({
  module,
  onClose,
  onSelectForInquiry
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (module) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [module, onClose]);

  if (!module) return null;

  return (
    <div
      id="module-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Surface in Frosted Glass */}
      <div className="relative w-full max-w-2xl glass-card rounded-3xl shadow-2xl border border-white/90 overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 sm:p-7 navy-gradient text-white flex items-start justify-between border-b border-white/20">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 px-2.5 py-0.5 rounded-full text-white border border-white/30 backdrop-blur-xs">
                {module.category}
              </span>
              <span className="text-xs text-blue-100 font-medium">
                {module.lifecycleStage}
              </span>
            </div>
            <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white">
              {module.name}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white border border-white/20 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto bg-white/60 backdrop-blur-sm">
          <div>
            <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
              Module Scope & Architecture
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              {module.fullDesc}
            </p>
          </div>

          {/* Key Capabilities */}
          <div>
            <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">
              Key Technical Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {module.keyCapabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-2xl glass-subtle border border-white/80 text-xs text-slate-700 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#0875E1] shrink-0 mt-0.5" />
                  <span className="font-medium">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Deliverables */}
          <div>
            <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">
              Standard Implementation Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {module.deliverables.map((del, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-2xl glass border border-white/80 text-xs text-slate-700 shadow-xs">
                  <Sparkles className="w-4 h-4 text-[#42B900] shrink-0 mt-0.5" />
                  <span className="font-medium">{del}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 sm:p-6 glass border-t border-[#0875E1]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-slate-200 glass-pill text-slate-700 font-semibold text-xs hover:bg-white transition-all cursor-pointer"
          >
            Close Overview
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onSelectForInquiry(module.name);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#0875E1] hover:bg-[#0766c4] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
          >
            <span>Inquire About {module.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
