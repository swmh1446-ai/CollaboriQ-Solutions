import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Building,
  User,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO, SUCCESSFACTORS_MODULES } from '../data/websiteData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  preselectedModule?: string | null;
  preselectedService?: string | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedModule,
  preselectedService
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    workEmail: '',
    phoneNumber: '',
    selectedModules: [],
    requirementType: 'Full Implementation',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (preselectedModule) {
      setFormData((prev) => {
        const modules = prev.selectedModules.includes(preselectedModule)
          ? prev.selectedModules
          : [...prev.selectedModules, preselectedModule];
        return { ...prev, selectedModules: modules };
      });
    }
  }, [preselectedModule]);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message
          ? `${prev.message}\nInterested in: ${preselectedService}`
          : `Interested in: ${preselectedService}`
      }));
    }
  }, [preselectedService]);

  const handleModuleToggle = (moduleName: string) => {
    setFormData((prev) => {
      const exists = prev.selectedModules.includes(moduleName);
      if (exists) {
        return {
          ...prev,
          selectedModules: prev.selectedModules.filter((m) => m !== moduleName)
        };
      } else {
        return {
          ...prev,
          selectedModules: [...prev.selectedModules, moduleName]
        };
      }
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company Name is required';
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = 'Please enter a valid work email address';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate clean, fast client-side submission handling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8FBFF] relative overflow-hidden">
      {/* Frosted Glass background ambient light orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-blue-200/20 via-sky-200/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gradient-to-l from-emerald-200/20 via-blue-200/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border-[#0875E1]/20">
            <span className="w-2 h-2 rounded-full bg-[#0875E1]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#102A72]">
              Direct Consultation
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A72] tracking-tight">
            Let's Build a Smarter HR Future
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Have an SAP SuccessFactors implementation requirement? Talk to CollaboriQ Solutions
            about your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Direct Contact Details & Info Card in Frosted Glass */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-navy text-white rounded-3xl p-8 space-y-6 shadow-xl border border-white/20">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                CollaboriQ Solutions
              </h3>
              <p className="text-xs font-bold uppercase tracking-widest text-[#FFB800]">
                SAP SUCCESSFACTORS IMPLEMENTATION
              </p>

              <div className="space-y-5 pt-4 border-t border-white/15">
                {/* Phone Link */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center shrink-0 mt-0.5 border border-white/20 shadow-xs">
                    <Phone className="w-5 h-5 text-[#42B900]" />
                  </div>
                  <div>
                    <span className="text-xs text-blue-100 font-medium block">Phone Consultation</span>
                    <a
                      id="contact-phone-direct-link"
                      href={COMPANY_INFO.phoneTel}
                      className="text-base sm:text-lg font-bold text-white hover:text-[#FFB800] transition-colors"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center shrink-0 mt-0.5 border border-white/20 shadow-xs">
                    <MapPin className="w-5 h-5 text-[#F4510B]" />
                  </div>
                  <div>
                    <span className="text-xs text-blue-100 font-medium block">Corporate Office</span>
                    <address className="not-italic text-sm text-blue-50 leading-relaxed">
                      {COMPANY_INFO.address.line1}<br />
                      {COMPANY_INFO.address.line2}<br />
                      {COMPANY_INFO.address.city} – {COMPANY_INFO.address.pincode},<br />
                      {COMPANY_INFO.address.state}, {COMPANY_INFO.address.country}
                    </address>
                  </div>
                </div>
              </div>

              {/* Call to action button */}
              <div className="pt-4">
                <a
                  id="direct-call-now-button"
                  href={COMPANY_INFO.phoneTel}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-[#102A72] font-extrabold text-sm hover:bg-blue-50 transition-all shadow-md hover:shadow-lg active:scale-98"
                >
                  <Phone className="w-4 h-4 text-[#0875E1]" />
                  <span>Call {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Implementation Response Assurance */}
            <div className="p-6 rounded-3xl glass border border-white/80 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-[#102A72] font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-[#42B900]" />
                <span>Enterprise Privacy & Confidentiality</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                All business requirements, system architectures, and discussions are handled with
                strict enterprise confidentiality by our implementation specialists.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form in Frosted Glass */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-7 sm:p-9 border border-white/80 shadow-lg">
              {submitted ? (
                <div
                  id="contact-form-success-message"
                  className="py-12 px-6 text-center space-y-5 glass rounded-2xl border border-emerald-200"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#42B900] mx-auto flex items-center justify-center border border-emerald-200/60 shadow-xs">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#102A72]">
                    Thank you. Your enquiry has been received.
                  </h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                    Our SAP SuccessFactors implementation team will review your requirements and
                    connect with you promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        companyName: '',
                        workEmail: '',
                        phoneNumber: '',
                        selectedModules: [],
                        requirementType: 'Full Implementation',
                        message: ''
                      });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#102A72] text-white text-xs font-bold hover:bg-[#0d225c] transition-all shadow-md cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form id="collaboriq-contact-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#0875E1]/10 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-[#102A72]">Project Consultation Form</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Share your requirement details for a tailored implementation plan.
                    </p>
                  </div>

                  {/* 2-Col inputs: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Ramesh Sharma"
                          className={`w-full px-3.5 py-2.5 rounded-xl glass-subtle border text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0875E1] transition-all ${
                            errors.fullName ? 'border-rose-400 bg-rose-50/40' : 'border-white/80 focus:border-[#0875E1]'
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-500 font-semibold mt-1">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Company Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Enterprise Global Corp"
                        className={`w-full px-3.5 py-2.5 rounded-xl glass-subtle border text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0875E1] transition-all ${
                          errors.companyName ? 'border-rose-400 bg-rose-50/40' : 'border-white/80 focus:border-[#0875E1]'
                        }`}
                      />
                      {errors.companyName && (
                        <p className="text-[11px] text-rose-500 font-semibold mt-1">
                          {errors.companyName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 2-Col inputs: Work Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="workEmail"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Work Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="workEmail"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="name@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl glass-subtle border text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0875E1] transition-all ${
                          errors.workEmail ? 'border-rose-400 bg-rose-50/40' : 'border-white/80 focus:border-[#0875E1]'
                        }`}
                      />
                      {errors.workEmail && (
                        <p className="text-[11px] text-rose-500 font-semibold mt-1">
                          {errors.workEmail}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+91 93928 41475"
                        className={`w-full px-3.5 py-2.5 rounded-xl glass-subtle border text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0875E1] transition-all ${
                          errors.phoneNumber ? 'border-rose-400 bg-rose-50/40' : 'border-white/80 focus:border-[#0875E1]'
                        }`}
                      />
                      {errors.phoneNumber && (
                        <p className="text-[11px] text-rose-500 font-semibold mt-1">
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* SAP SuccessFactors Module Multi-Select Requirement */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      SAP SuccessFactors Requirement (Select Modules)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {SUCCESSFACTORS_MODULES.map((module) => {
                        const isChecked = formData.selectedModules.includes(module.name);
                        return (
                          <button
                            key={module.id}
                            type="button"
                            onClick={() => handleModuleToggle(module.name)}
                            className={`p-2.5 rounded-xl text-xs font-semibold text-left transition-all border flex items-center justify-between cursor-pointer ${
                              isChecked
                                ? 'navy-gradient text-white border-[#0875E1] shadow-xs'
                                : 'glass-subtle text-slate-700 border-white/70 hover:border-blue-300'
                            }`}
                          >
                            <span className="truncate pr-1">{module.name}</span>
                            {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-[#42B900] shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Message / Project Scope Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline your organization's timeline, existing HR platforms, or key implementation objectives..."
                      className="w-full px-3.5 py-2.5 rounded-xl glass-subtle border border-white/80 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0875E1] focus:border-[#0875E1] transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="submit-enquiry-button"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full navy-gradient text-white font-bold text-sm shadow-md shadow-[#102A72]/20 hover:shadow-lg transition-all duration-200 disabled:opacity-50 cursor-pointer border border-white/20 active:scale-98"
                    >
                      {isSubmitting ? (
                        <span>Processing Enquiry...</span>
                      ) : (
                        <>
                          <span>Send Enquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
