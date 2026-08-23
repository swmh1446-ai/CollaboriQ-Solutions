import React from 'react';
import { 
  Briefcase, 
  Settings, 
  Workflow, 
  Network, 
  Database, 
  BarChart, 
  HeartHandshake, 
  Headphones,
  Check,
  ArrowRight
} from 'lucide-react';
import { SERVICES_LIST } from '../data/websiteData';

interface ServicesSectionProps {
  onSelectServiceForInquiry?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForInquiry }) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'sf-implementation':
        return Briefcase;
      case 'module-configuration':
        return Settings;
      case 'hr-transformation':
        return Workflow;
      case 'integration-support':
        return Network;
      case 'data-migration':
        return Database;
      case 'reporting-analytics':
        return BarChart;
      case 'employee-experience':
        return HeartHandshake;
      case 'implementation-support':
        return Headphones;
      default:
        return Briefcase;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F8FBFF] relative overflow-hidden">
      {/* Background ambient refraction orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-blue-200/20 via-sky-200/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gradient-to-l from-emerald-200/20 via-blue-200/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border-[#0875E1]/20">
            <span className="w-2 h-2 rounded-full bg-[#0875E1]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#102A72]">
              Professional IT Services
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A72] tracking-tight">
            Our Services
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Enterprise consulting, technical integration, and system configuration services designed for high-impact SAP SuccessFactors deployments.
          </p>
        </div>

        {/* 8 Services Grid with Frosted Glass styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service, idx) => {
            const Icon = getServiceIcon(service.id);
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="module-card glass p-6 rounded-2xl border border-white/70 hover:border-[#0875E1]/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Service Icon and Index */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl glass-subtle text-[#0875E1] border border-blue-200/60 flex items-center justify-center group-hover:bg-[#102A72] group-hover:text-white transition-colors duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-slate-500 glass-pill px-2 py-0.5 rounded-md">
                      SRV 0{idx + 1}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg font-bold text-[#102A72] group-hover:text-[#0875E1] transition-colors mb-2.5">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Key Deliverables */}
                  <div className="space-y-2 pt-3 border-t border-[#0875E1]/10 mb-4">
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-[#42B900] shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-3 border-t border-[#0875E1]/10">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onSelectServiceForInquiry) {
                        onSelectServiceForInquiry(service.title);
                      }
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0875E1] hover:text-[#102A72] transition-colors py-1 group/link"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
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
