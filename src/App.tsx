import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { SuccessFactorsModules } from './components/SuccessFactorsModules';
import { ImplementationProcess } from './components/ImplementationProcess';
import { HrEcosystemFlow } from './components/HrEcosystemFlow';
import { DeliveredServicesSection } from './components/DeliveredServicesSection';
import { WhyCollaboriQ } from './components/WhyCollaboriQ';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ModuleModal } from './components/ModuleModal';
import { SUCCESSFACTORS_MODULES } from './data/websiteData';
import { SFModule } from './types';

export default function App() {
  const [selectedModuleForModal, setSelectedModuleForModal] = useState<SFModule | null>(null);
  const [preselectedModuleForContact, setPreselectedModuleForContact] = useState<string | null>(null);
  const [preselectedServiceForContact, setPreselectedServiceForContact] = useState<string | null>(null);

  const handleOpenModuleById = (moduleId: string) => {
    const mod = SUCCESSFACTORS_MODULES.find((m) => m.id === moduleId);
    if (mod) {
      setSelectedModuleForModal(mod);
    }
  };

  const handleSelectModuleForInquiry = (moduleName: string) => {
    setPreselectedModuleForContact(moduleName);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      const navOffset = 84;
      const elementPosition = contactElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setPreselectedServiceForContact(serviceTitle);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FBFF] text-slate-800 antialiased selection:bg-[#0875E1] selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section with Interactive HR Ecosystem Visual */}
        <Hero onSelectModule={handleOpenModuleById} />

        {/* 2. Professional Services Section */}
        <ServicesSection onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* 3. SAP SuccessFactors 8 Modules Suite */}
        <SuccessFactorsModules
          onOpenModuleModal={(mod) => setSelectedModuleForModal(mod)}
          onSelectForInquiry={handleSelectModuleForInquiry}
        />

        {/* 4. 7-Step Implementation Framework */}
        <ImplementationProcess />

        {/* 5. Connected HR Lifecycle Journey */}
        <HrEcosystemFlow />

        {/* 6. Delivered SAP SuccessFactors Services */}
        <DeliveredServicesSection />

        {/* 7. Why CollaboriQ Solutions */}
        <WhyCollaboriQ />

        {/* 8. Corporate About Section */}
        <AboutSection />

        {/* 9. Direct Consultation & Contact Form */}
        <ContactSection
          preselectedModule={preselectedModuleForContact}
          preselectedService={preselectedServiceForContact}
        />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Deep-Dive Module Inspection Modal */}
      <ModuleModal
        module={selectedModuleForModal}
        onClose={() => setSelectedModuleForModal(null)}
        onSelectForInquiry={handleSelectModuleForInquiry}
      />
    </div>
  );
}
