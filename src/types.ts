export interface SFModule {
  id: string;
  name: string;
  category: 'Core HR' | 'Talent' | 'Workforce' | 'Analytics' | 'Compensation & Payroll';
  accentColor: 'blue' | 'orange' | 'green' | 'gold';
  hexColor: string;
  shortDesc: string;
  fullDesc: string;
  keyCapabilities: string[];
  deliverables: string[];
  lifecycleStage: string;
}

export interface ImplementationStep {
  stepNumber: string;
  title: string;
  tagline: string;
  description: string;
  keyActivities: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  deliverables: string[];
}

export interface DeliveredOrganization {
  id: string;
  name: string;
  website: string;
  domainName: string;
  serviceCategory: string;
  initials: string;
  accentColor: string;
}

export interface PartnerCompany {
  id: string;
  name: string;
  website: string;
  domainName: string;
  description: string;
  collaborationFocus: string;
}

export interface WhyUsCard {
  id: string;
  title: string;
  description: string;
  bulletPoints: string[];
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  workEmail: string;
  phoneNumber: string;
  selectedModules: string[];
  requirementType: string;
  message: string;
}
