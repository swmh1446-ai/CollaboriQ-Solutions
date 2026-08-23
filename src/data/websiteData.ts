import { SFModule, ImplementationStep, ServiceItem, PartnerCompany, WhyUsCard } from '../types';

export const COMPANY_INFO = {
  name: 'CollaboriQ Solutions',
  tagline: 'SAP SUCCESSFACTORS IMPLEMENTATION',
  phoneDisplay: '+91 93928 41475',
  phoneTel: 'tel:+919392841475',
  email: 'contact@collaboriqsolutions.com',
  address: {
    line1: '#9-3-58/AK/99, Afser Khan Colony',
    line2: 'Langar Houz',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500008',
    country: 'India',
    formatted: '#9-3-58/AK/99, Afser Khan Colony, Langar Houz, Hyderabad, Telangana – 500008, India'
  },
  positioning: 'Premium enterprise IT services company specializing in complete end-to-end SAP SuccessFactors implementation.',
  sector: 'IT Services',
  specialization: 'Complete End-to-End SAP SuccessFactors Implementation',
  location: 'Hyderabad, Telangana, India'
};

export const SUCCESSFACTORS_MODULES: SFModule[] = [
  {
    id: 'employee-central',
    name: 'Employee Central',
    category: 'Core HR',
    accentColor: 'blue',
    hexColor: '#0875E1',
    shortDesc: 'Core HR, employee data, organizational structures and workforce management.',
    fullDesc: 'Acts as the digital foundation of your entire HR landscape, unifying global employee records, organizational management, position structures, and compliance rules in real time.',
    keyCapabilities: [
      'Global employee master data management',
      'Organizational structure & position hierarchy',
      'Time off & attendance management workflows',
      'Automated global and localized compliance rules'
    ],
    deliverables: [
      'Customized data model & field configurations',
      'Role-based permissions (RBP) matrix setup',
      'Business rules & workflow routing engines',
      'Standardized global HR service definitions'
    ],
    lifecycleStage: 'Foundation & Core Data'
  },
  {
    id: 'recruiting',
    name: 'Recruiting',
    category: 'Talent',
    accentColor: 'orange',
    hexColor: '#F4510B',
    shortDesc: 'Talent acquisition, candidate management and recruiting workflows.',
    fullDesc: 'End-to-end recruitment management from requisition creation and multi-channel candidate sourcing to applicant tracking, interview scheduling, and offer letters.',
    keyCapabilities: [
      'Requisition workflow & approval routing',
      'Multi-channel candidate sourcing & job boards',
      'Candidate pipeline & interview evaluation',
      'Digital offer management & e-signature integration'
    ],
    deliverables: [
      'Candidate experience portal styling',
      'Custom requisition and candidate profile templates',
      'Interview assessment & rating matrix configuration',
      'Seamless data handover to Onboarding module'
    ],
    lifecycleStage: 'Attract & Acquire'
  },
  {
    id: 'onboarding',
    name: 'Onboarding',
    category: 'Talent',
    accentColor: 'green',
    hexColor: '#42B900',
    shortDesc: 'New-hire onboarding, employee experience and onboarding processes.',
    fullDesc: 'Streamlines new-hire paperwork, orientation journeys, asset provisioning, and internal cross-boarding or off-boarding workflows to foster day-one productivity.',
    keyCapabilities: [
      'Pre-day-one digital document submission',
      'Automated new-hire checklists & task assignments',
      'Cross-boarding & organizational internal transfers',
      'Structured off-boarding and knowledge transfer'
    ],
    deliverables: [
      'Personalized onboarding journey roadmaps',
      'Electronic document generation & digital signature',
      'Manager & buddy task assignment templates',
      'Direct synchronization into Employee Central'
    ],
    lifecycleStage: 'Welcome & Integrate'
  },
  {
    id: 'learning',
    name: 'Learning',
    category: 'Workforce',
    accentColor: 'gold',
    hexColor: '#FFB800',
    shortDesc: 'Learning management, employee development and training.',
    fullDesc: 'Comprehensive learning management system (LMS) that delivers compliance training, skill-building curricula, automated course assignments, and tracking across the enterprise.',
    keyCapabilities: [
      'Curriculum & certification tracking',
      'Automated regulatory compliance assignments',
      'Content management & SCORM/AICC integrations',
      'Virtual instructor-led training (VILT) coordination'
    ],
    deliverables: [
      'Catalog structure & item classification',
      'Assignment profiles & automated rule engines',
      'Custom notification templates & reminder cadences',
      'Integration with external content providers'
    ],
    lifecycleStage: 'Develop & Upskill'
  },
  {
    id: 'performance-goals',
    name: 'Performance & Goal Management',
    category: 'Talent',
    accentColor: 'blue',
    hexColor: '#0875E1',
    shortDesc: 'Performance reviews, employee goals, feedback and development.',
    fullDesc: 'Aligns employee objectives with corporate strategy through transparent goal tracking, continuous 360 feedback, check-ins, and calibration reviews.',
    keyCapabilities: [
      'SMART goal libraries & cascading objectives',
      'Continuous performance check-ins & feedback',
      'Multi-rater 360-degree review cycles',
      'Visual performance-potential calibration grids'
    ],
    deliverables: [
      'Goal plan templates & metric weighting models',
      'Annual/quarterly review workflow route maps',
      'Calibration session definitions & distribution curves',
      'Development plan linking to Learning module'
    ],
    lifecycleStage: 'Align & Evaluate'
  },
  {
    id: 'compensation',
    name: 'Compensation',
    category: 'Compensation & Payroll',
    accentColor: 'orange',
    hexColor: '#F4510B',
    shortDesc: 'Compensation planning, rewards and compensation management.',
    fullDesc: 'Empowers HR leaders and line managers to design, budget, and allocate merit increases, bonuses, equity, and variable rewards with strict governance.',
    keyCapabilities: [
      'Salary planning, merit increases & promotions',
      'Short-term & long-term incentive plan design',
      'Real-time budget tracking & executive roll-ups',
      'Total rewards statement generation'
    ],
    deliverables: [
      'Compensation worksheet rule configurations',
      'Eligibility matrix & currency conversion setups',
      'Budget guidelines & manager guideline caps',
      'Automated compensation statement distribution'
    ],
    lifecycleStage: 'Reward & Retain'
  },
  {
    id: 'ec-payroll',
    name: 'EC Payroll',
    category: 'Compensation & Payroll',
    accentColor: 'green',
    hexColor: '#42B900',
    shortDesc: 'Payroll processes, payroll operations and relevant integration requirements.',
    fullDesc: 'Combines the flexibility of cloud HR with the stability of SAP enterprise payroll engines to deliver accurate, compliant, and timely payroll processing.',
    keyCapabilities: [
      'Pre-configured payroll control centers (PCC)',
      'Automated error validation & payroll simulations',
      'Statutory deductions & tax rule compliance',
      'Real-time gross-to-net calculation pipelines'
    ],
    deliverables: [
      'Point-to-point integration with Employee Central',
      'Payroll schema & wage type custom mappings',
      'Payroll Control Center alert rule parameters',
      'Year-end processing workflows & bank interfaces'
    ],
    lifecycleStage: 'Process & Comply'
  },
  {
    id: 'people-analytics',
    name: 'People Analytics',
    category: 'Analytics',
    accentColor: 'blue',
    hexColor: '#0875E1',
    shortDesc: 'HR analytics, reporting, workforce insights and people metrics.',
    fullDesc: 'Unified reporting and analytics suite delivering stories, operational tables, executive scorecards, and workforce trends across all SuccessFactors modules.',
    keyCapabilities: [
      'Story reports powered by SAP Analytics Cloud',
      'Cross-module operational reporting queries',
      'Headcount, turnover & diversity KPI dashboards',
      'Scheduled distribution & granular data masking'
    ],
    deliverables: [
      'Executive dashboard & KPI template configurations',
      'Standardized operational compliance reports',
      'Role-based report access & masking controls',
      'Cross-module trend & headcount forecasting views'
    ],
    lifecycleStage: 'Analyze & Optimize'
  }
];

export const IMPLEMENTATION_STEPS: ImplementationStep[] = [
  {
    stepNumber: '01',
    title: 'Discover',
    tagline: 'Understand requirements and HR processes.',
    description: 'We conduct structured discovery workshops with your HR business stakeholders to baseline current workflows, pain points, data structures, and strategic outcomes.',
    keyActivities: [
      'Stakeholder alignment & project charter setup',
      'Current-state HR process mapping',
      'Data landscape assessment & scope definition',
      'Implementation roadmap and governance planning'
    ]
  },
  {
    stepNumber: '02',
    title: 'Design',
    tagline: 'Design workflows and solution architecture.',
    description: 'We draft the target architectural blueprint, define global design templates, position hierarchies, security schemas, and module interactions.',
    keyActivities: [
      'Global design blueprint documentation',
      'Data model & field mapping specifications',
      'Role-Based Permissions (RBP) security matrix',
      'Integration architecture & workflow diagrams'
    ]
  },
  {
    stepNumber: '03',
    title: 'Configure',
    tagline: 'Configure the required SuccessFactors modules.',
    description: 'Our consultants configure instances iteratively using SAP best practices, establishing business rules, custom fields, picklists, and UI templates.',
    keyActivities: [
      'System configuration across active instances',
      'Business rule engine & workflow routing',
      'Picklist management & data dictionary setup',
      'Iterative configuration playback sessions'
    ]
  },
  {
    stepNumber: '04',
    title: 'Integrate',
    tagline: 'Connect relevant systems and data flows.',
    description: 'We build secure, robust data conduits linking SuccessFactors with third-party ERPs, payroll engines, time tracking, and identity providers.',
    keyActivities: [
      'SAP Integration Suite & CPI middleware setup',
      'Point-to-point data sync with Employee Central',
      'Bi-directional ERP and downstream system feeds',
      'Single Sign-On (SSO) & identity federation'
    ]
  },
  {
    stepNumber: '05',
    title: 'Test',
    tagline: 'Validate workflows, integrations and requirements.',
    description: 'Rigorous validation cycles covering unit testing, end-to-end business scenarios, system integration testing (SIT), and User Acceptance Testing (UAT).',
    keyActivities: [
      'System Integration Testing (SIT) execution',
      'User Acceptance Testing (UAT) facilitation',
      'Security & permission audit verification',
      'Payroll parallel run & data accuracy checks'
    ]
  },
  {
    stepNumber: '06',
    title: 'Deploy',
    tagline: 'Support production rollout and transition.',
    description: 'Structured cutover planning, final delta data migration, go-live execution, and hypercare enablement for a smooth production transition.',
    keyActivities: [
      'Detailed cutover checklist & countdown',
      'Final data migration & reconciliation audit',
      'Go-live deployment to Production instance',
      'Dedicated hypercare & stabilization triage'
    ]
  },
  {
    stepNumber: '07',
    title: 'Optimize',
    tagline: 'Improve and optimize the HR technology environment.',
    description: 'Post go-live continuous improvement, bi-annual SAP release updates, adoption monitoring, and fine-tuning configurations as business needs evolve.',
    keyActivities: [
      'SAP bi-annual release review & feature adoption',
      'Performance fine-tuning & workflow refinement',
      'System health audits & process optimization',
      'Extended administrative support and guidance'
    ]
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'sf-implementation',
    title: 'SAP SuccessFactors Implementation',
    shortDesc: 'Comprehensive full-lifecycle implementation across all SuccessFactors modules tailored to your organizational structure and operating model.',
    deliverables: [
      'Full lifecycle implementation planning',
      'Instance provisioning & architecture',
      'Best-practice methodology execution',
      'End-user enablement and launch'
    ]
  },
  {
    id: 'module-configuration',
    title: 'Module Configuration',
    shortDesc: 'Precise tailoring of data models, business rules, workflow routes, custom picklists, and UI screens for optimal user adoption.',
    deliverables: [
      'Custom data model customization',
      'Business rule development',
      'Route map & approval hierarchy design',
      'Role-based security configuration'
    ]
  },
  {
    id: 'hr-transformation',
    title: 'HR Process Transformation',
    shortDesc: 'Modernizing legacy HR practices into streamlined, automated digital experiences that boost employee engagement and administrative efficiency.',
    deliverables: [
      'As-is vs. to-be gap assessments',
      'Standardized global HR processes',
      'Self-service workflow optimization',
      'Change facilitation and governance'
    ]
  },
  {
    id: 'integration-support',
    title: 'Integration Support',
    shortDesc: 'Seamlessly interconnecting SuccessFactors with third-party software, on-premise ERPs, payroll providers, and Active Directory.',
    deliverables: [
      'SAP Cloud Platform Integration (CPI)',
      'OData and REST API connectivity',
      'Bi-directional payroll interfaces',
      'Automated daily batch synchronization'
    ]
  },
  {
    id: 'data-migration',
    title: 'Data Migration',
    shortDesc: 'Clean, structured migration of employee master records, job history, compensation, and learning records from legacy platforms.',
    deliverables: [
      'Data mapping & cleansing templates',
      'Automated extraction & transformation',
      'Iterative mock migration cycles',
      'Audit logging & data integrity validation'
    ]
  },
  {
    id: 'reporting-analytics',
    title: 'Reporting & Analytics',
    shortDesc: 'Empowering HR leadership with intuitive Story reports, operational compliance tracking, and workforce planning dashboards.',
    deliverables: [
      'SAP Analytics Cloud Story design',
      'Standard compliance & headcount reports',
      'Cross-module metric correlation',
      'Automated scheduled report distribution'
    ]
  },
  {
    id: 'employee-experience',
    title: 'Employee Experience',
    shortDesc: 'Designing intuitive, mobile-friendly self-service touchpoints for managers and employees from pre-boarding to off-boarding.',
    deliverables: [
      'Mobile app enablement & branding',
      'Self-service workflow simplification',
      'Personalized landing page design',
      'Feedback collection mechanisms'
    ]
  },
  {
    id: 'implementation-support',
    title: 'Implementation Support',
    shortDesc: 'Post-go-live stabilization, hypercare triage, release management, and continuous optimization of your SuccessFactors suite.',
    deliverables: [
      'Dedicated hypercare support team',
      'Incident resolution & ticket triage',
      'Bi-annual release readiness reviews',
      'Ongoing configuration adjustments'
    ]
  }
];

export interface DeliveredOrganization {
  id: string;
  name: string;
  website: string;
  domainName: string;
  serviceCategory: string;
  initials: string;
  accentColor: string;
}

export const DELIVERED_ORGANIZATIONS: DeliveredOrganization[] = [
  {
    id: 'eidea',
    name: 'eIDEA',
    website: 'https://eideainc.com/',
    domainName: 'eideainc.com',
    serviceCategory: 'Implementation, Integration & Support',
    initials: 'eI',
    accentColor: '#FFB800'
  },
  {
    id: 'affy-cloud',
    name: 'Affy Cloud',
    website: 'https://affyclouditsolutions.com/',
    domainName: 'affyclouditsolutions.com',
    serviceCategory: 'Implementation, Integration & Support',
    initials: 'AC',
    accentColor: '#42B900'
  },
  {
    id: 'eim',
    name: 'EIM',
    website: 'https://eimsolutions.com/',
    domainName: 'eimsolutions.com',
    serviceCategory: 'Implementation, Integration & Support',
    initials: 'EIM',
    accentColor: '#F4510B'
  },
  {
    id: 'dmtech',
    name: 'DMTech',
    website: 'https://dmtech.me/',
    domainName: 'dmtech.me',
    serviceCategory: 'Implementation, Integration & Support',
    initials: 'DMT',
    accentColor: '#0875E1'
  },
  {
    id: 'apratim',
    name: 'Apratim Solutions',
    website: 'https://apratimsolutions.com/',
    domainName: 'apratimsolutions.com',
    serviceCategory: 'Implementation, Integration & Support',
    initials: 'AS',
    accentColor: '#42B900'
  }
];

// Retain alias for any legacy references
export const PARTNER_COMPANIES = DELIVERED_ORGANIZATIONS;

export const WHY_COLLABRIQ: WhyUsCard[] = [
  {
    id: 'end-to-end',
    title: 'End-to-End Implementation',
    description: 'Complete coverage from discovery workshops and solution architecture to configuration, data migration, testing, and hypercare.',
    bulletPoints: [
      'Single accountability partner across the full lifecycle',
      'Comprehensive coverage of all 8 core modules',
      'Proven phased transition methodology'
    ]
  },
  {
    id: 'business-centric',
    title: 'Business-Centric Approach',
    description: 'We align system configurations directly with your organizational policies, operational realities, and workforce governance.',
    bulletPoints: [
      'HR workflow optimization before system configuration',
      'Minimization of operational friction for end users',
      'Clear stakeholder communication at every phase'
    ]
  },
  {
    id: 'sf-focus',
    title: 'SuccessFactors Focus',
    description: 'Specialized focus in SAP SuccessFactors modules, data structures, and best-practice integration points across the ecosystem.',
    bulletPoints: [
      'Deep domain proficiency in all 8 primary modules',
      'Adherence to official SAP implementation standards',
      'Standardized, maintainable configuration models'
    ]
  },
  {
    id: 'structured-delivery',
    title: 'Structured Delivery',
    description: 'Our 7-step delivery framework ensures milestone predictability, thorough risk mitigation, and complete data integrity.',
    bulletPoints: [
      'Transparent milestone tracking & regular checkpoints',
      'Comprehensive testing: SIT, UAT, and parallel runs',
      'Structured cutover checklists and hypercare support'
    ]
  },
  {
    id: 'scalable-solutions',
    title: 'Scalable Solutions',
    description: 'Architectures engineered to support future organizational growth, multi-country expansions, and evolving business rules.',
    bulletPoints: [
      'Modular configuration ready for subsequent rollouts',
      'Robust Role-Based Permissions (RBP) structures',
      'Enterprise-grade integration and data pipelines'
    ]
  },
  {
    id: 'connected-hr',
    title: 'Connected HR Transformation',
    description: 'Unifying disparate HR processes into a cohesive digital lifecycle where employee data flows seamlessly across all touchpoints.',
    bulletPoints: [
      'Seamless data handover from Recruiting to Analytics',
      'Consistent employee experience across all modules',
      'Single source of truth for global workforce data'
    ]
  }
];

export const HR_LIFECYCLE_STAGES = [
  {
    step: '01',
    title: 'Employee Data Foundation',
    module: 'Employee Central',
    color: '#0875E1',
    description: 'Centralized core HR master records, organizational structures, and position management.'
  },
  {
    step: '02',
    title: 'Talent Acquisition',
    module: 'Recruiting',
    color: '#F4510B',
    description: 'Candidate sourcing, requisition workflows, applicant tracking, and digital offer rollout.'
  },
  {
    step: '03',
    title: 'New-Hire Integration',
    module: 'Onboarding',
    color: '#42B900',
    description: 'Digital compliance forms, orientation roadmaps, asset provisioning, and day-one readiness.'
  },
  {
    step: '04',
    title: 'Continuous Learning',
    module: 'Learning',
    color: '#FFB800',
    description: 'Compliance training curricula, skills progression, automated assignments, and development.'
  },
  {
    step: '05',
    title: 'Goals & Performance',
    module: 'Performance & Goals',
    color: '#0875E1',
    description: 'Cascading corporate goals, continuous 360 reviews, feedback loops, and calibration.'
  },
  {
    step: '06',
    title: 'Compensation & Rewards',
    module: 'Compensation',
    color: '#F4510B',
    description: 'Merit increase modeling, incentive budgets, equity grants, and total rewards statements.'
  },
  {
    step: '07',
    title: 'Payroll Operations',
    module: 'EC Payroll',
    color: '#42B900',
    description: 'Pre-payroll control checks, tax compliance, gross-to-net calculations, and banking sync.'
  },
  {
    step: '08',
    title: 'Workforce Insights',
    module: 'People Analytics',
    color: '#0875E1',
    description: 'Executive story reports, turnover trends, operational compliance metrics, and KPI tracking.'
  }
];
