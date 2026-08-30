import {
  ExperienceItem,
  CapabilityItem,
  FeaturedWorkItem,
  PublicationItem,
  PatentItem,
  RecognitionItem,
  EducationItem,
} from '../types';
import { getAssetUrl } from '../utils/assetHelper';

export const PERSONAL_INFO = {
  name: 'Khalid Khan',
  suffix: 'CEng',
  title: 'Senior Systems Engineering Manager',
  location: 'Birmingham, England, United Kingdom',
  company: 'GE Vernova',
  email: 'khan.khalid@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/khalid2k1/',
  profileImage: getAssetUrl('khalid-photo.jpg'),
  headline: 'Khalid Khan, CEng',
  subheadline: 'Senior Systems Engineering Manager',
  supportingText: 'Systems Engineering • MBSE • Model-Based Design • Safety-Critical Systems',
  intro:
    'Engineering leader with 20+ years of experience delivering complex systems through systems thinking, model-based engineering, modelling and simulation.',
  aboutTitle: 'Engineering Through Systems Thinking',
  aboutBody:
    'Khalid Khan is a Chartered Engineer with more than 20 years of experience leading the design and implementation of effective system capabilities using MBD, MBSE and SysML modelling tools.',
  aboutPoints: [
    'Systems engineering leadership across power, aerospace, and rail transportation',
    'Engineering management of multi-disciplinary and cross-functional global teams',
    'Safety-critical systems design, validation, and regulatory compliance',
    'High-integrity control systems architecture and real-time execution',
    'Model-based engineering methodologies from concept through lifecycle',
    'Requirements engineering and toolchain harmonization (DOORS, Relatics)',
    'Modelling and simulation embedding for early risk reduction',
  ],
  mbdFocus:
    'Key interest in the cross-company deployment of Model Based Design and reducing cost by embedding modelling and simulation earlier in the design process (left-shifting V&V activities).',
  languages: [
    { name: 'English', level: 'Professional proficiency' },
    { name: 'Hindi', level: 'Professional working proficiency' },
    { name: 'Urdu', level: 'Professional working proficiency' },
  ],
};

export const EXPERTISE_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'sys-eng',
    name: 'Systems Engineering',
    category: 'Systems & Architecture',
    description:
      'Holistic lifecycle architecture, cross-disciplinary integration, stakeholder needs decomposition, and system boundary verification across complex multidisciplinary programs.',
    badge: 'Core Competency',
  },
  {
    id: 'mbse',
    name: 'Model-Based Systems Engineering (MBSE)',
    category: 'Methods & Standards',
    description:
      'Formalized application of modelling to support system requirements, design, analysis, verification, and validation activities throughout engineering lifecycle.',
    badge: 'Methodology',
  },
  {
    id: 'mbd',
    name: 'Model-Based Design (MBD)',
    category: 'Methods & Standards',
    description:
      'Execution of model-centric development frameworks connecting behavioral models, plant dynamics, and algorithmic code generation directly into implementation.',
    badge: 'Process',
  },
  {
    id: 'sysml',
    name: 'SysML',
    category: 'Methods & Standards',
    description:
      'Architectural visual modeling using Systems Modeling Language (SysML) across structural, behavioral, parametric, and requirements diagrams.',
    badge: 'Standard',
  },
  {
    id: 'req-eng',
    name: 'Requirements Engineering',
    category: 'Systems & Architecture',
    description:
      'Full lifecycle requirements capture, decomposition, traceability, baseline management, and verification matrix governance using enterprise toolchains.',
  },
  {
    id: 'safety-crit',
    name: 'Safety-Critical Systems',
    category: 'Control & Safety',
    description:
      'Safety analysis, hazard identification, FMEA, Markov modeling, and fault tolerance architecture for high-integrity airborne, rail, and grid systems.',
    badge: 'Integrity',
  },
  {
    id: 'control-sys',
    name: 'Control Systems',
    category: 'Control & Safety',
    description:
      'Feedback control loop synthesis, linear stability analysis, servo compensation, motor drive control algorithms, and multi-variable dynamic response design.',
  },
  {
    id: 'elec-power',
    name: 'Electrical Power Systems',
    category: 'Control & Safety',
    description:
      'Grid system integration, electrical power transmission systems, high-voltage direct current (HVDC) architectures, and power conversion control.',
  },
  {
    id: 'eng-mgmt',
    name: 'Engineering Management',
    category: 'Systems & Architecture',
    description:
      'Coordinating cross-functional, multi-national technical teams, aligning organizational capability with global delivery milestones and engineering governance.',
  },
  {
    id: 'mod-sim',
    name: 'Modelling & Simulation',
    category: 'Simulation & Tools',
    description:
      'High-fidelity physical and logical system simulation, virtual test benches, hardware-in-the-loop preparation, and predictive performance validation.',
    badge: 'V&V Acceleration',
  },
  {
    id: 'sys-arch',
    name: 'Systems Architecture',
    category: 'Systems & Architecture',
    description:
      'Conceptualizing multi-tiered physical and functional architectures, allocation of sub-system interfaces, and partitioning critical functional dependencies.',
  },
  {
    id: 'sys-sw-lifecycle',
    name: 'Systems & Software Lifecycle Processes',
    category: 'Methods & Standards',
    description:
      'Implementation of disciplined V-model and iterative engineering lifecycle frameworks from initial concept through in-service verification.',
  },
  {
    id: 'iso-15288',
    name: 'ISO/IEC/IEEE 15288',
    category: 'Methods & Standards',
    description:
      'Developing institutional strategies and compliance frameworks for systems engineering system life cycle processes (including ISO/IEC/IEEE 15288:2023).',
    badge: 'Standard Compliance',
  },
  {
    id: 'cmmi',
    name: 'CMMI',
    category: 'Methods & Standards',
    description:
      'Aligning organizational systems engineering, development, and verification processes with CMMI maturity level requirements.',
  },
  {
    id: 'doors',
    name: 'IBM DOORS',
    category: 'Simulation & Tools',
    description:
      'Enterprise requirements management, multi-tier traceability schemas, validation baselines, and cross-project requirements linking in IBM DOORS.',
    badge: 'Enterprise Tool',
  },
  {
    id: 'relatics',
    name: 'Relatics',
    category: 'Simulation & Tools',
    description:
      'Model-driven information management and semantic systems engineering environments for complex infrastructure and grid integration projects.',
  },
  {
    id: 'matlab-simulink',
    name: 'MATLAB / Simulink',
    category: 'Simulation & Tools',
    description:
      'Mathematical modelling, dynamic simulation, control law design, stateflow logic implementation, and automated code generation toolchains.',
  },
  {
    id: 'embedded-c',
    name: 'Embedded C',
    category: 'Simulation & Tools',
    description:
      'Implementation of real-time control algorithms, target-specific microcontroller programming, TargetLink workflows, and hardware-near embedded code.',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'ge-vernova',
    company: 'GE Vernova',
    role: 'Senior Systems Engineering Manager',
    period: 'May 2025 – Present',
    startDate: '2025-05',
    endDate: 'Present',
    location: 'Staffordshire, UK',
    isCurrent: true,
    industry: 'HVDC & Power',
    responsibilities: [
      'Leading Systems Engineering activities across HVDC Service Line projects',
      'Supporting projects delivered globally as part of the Grid System Integration team',
      'Developing strategy for compliance with ISO/IEC/IEEE 15288:2023',
      'Aligning processes with CMMI maturity levels',
      'Requirements development and management',
      'Requirements management tools including IBM Engineering Requirements Management DOORS and Relatics',
      'Coordinating cross-functional systems engineering teams',
      'Promoting Systems Engineering and Electrical Power Transmission best practices',
      'Supporting reduction of Cost of Poor Quality through effective requirements management',
    ],
    tags: [
      'HVDC',
      'Grid Integration',
      'ISO/IEC/IEEE 15288:2023',
      'CMMI',
      'IBM DOORS',
      'Relatics',
      'Engineering Management',
    ],
  },
  {
    id: 'alstom',
    company: 'Alstom',
    role: 'Lead Engineer – Modelling & Simulations',
    period: 'January 2021 – May 2025',
    startDate: '2021-01',
    endDate: '2025-05',
    location: 'Derby, UK',
    industry: 'Rail & Transit',
    keyWork: [
      'Development of modelling and simulation capabilities',
      'Improving Time, Quality and Delivery measures',
      'AVENTRA product family engineering',
      'VirtualBird simulation platform',
      'SmartTrain development and validation',
      'Left-shifting V&V (Verification & Validation) activities',
    ],
    tags: [
      'Modelling & Simulation',
      'AVENTRA',
      'VirtualBird',
      'SmartTrain',
      'Left-Shifting V&V',
      'Rail Engineering',
    ],
  },
  {
    id: 'bombardier-lead-eng',
    company: 'Bombardier',
    role: 'Lead Engineer – Modelling & Simulation',
    period: 'January 2020 – January 2021',
    startDate: '2020-01',
    endDate: '2021-01',
    location: 'Derby, UK',
    industry: 'Rail & Transit',
    keyWork: [
      'Development of modelling and simulation capabilities',
      'Improving Time, Quality and Delivery measures',
      'AVENTRA product family engineering',
      'VirtualBird simulation platform',
      'SmartTrain architecture',
      'Left-shifting V&V activities',
    ],
    tags: [
      'Modelling & Simulation',
      'AVENTRA',
      'VirtualBird',
      'SmartTrain',
      'Process Improvement',
    ],
  },
  {
    id: 'bombardier-architect',
    company: 'Bombardier',
    role: 'Lead Functional Architect',
    period: 'June 2017 – January 2020',
    startDate: '2017-06',
    endDate: '2020-01',
    location: 'Derby, UK',
    industry: 'Rail & Transit',
    keyWork: [
      'MBSE-based functional development',
      'Automatic train operation (ATO)',
      'Safety analysis and architecture',
      'SysML modelling using MagicDraw',
      'Requirements management using DOORS',
      'Collaboration with international engineering teams in Sweden, India and Germany',
    ],
    tags: [
      'MBSE',
      'Automatic Train Operation',
      'Safety',
      'MagicDraw',
      'SysML',
      'DOORS',
      'Global Teams',
    ],
  },
  {
    id: 'rolls-royce',
    company: 'Rolls-Royce',
    role: 'Systems Specialist',
    period: 'March 2014 – May 2017',
    startDate: '2014-03',
    endDate: '2017-05',
    location: 'Birmingham, UK',
    industry: 'Aerospace & Propulsion',
    responsibilities: [
      'Cross-project technical leadership in Control Systems',
      'Model Based Systems Engineering (MBSE) implementation',
      'Mode-to-Code process development and deployment',
      'Product-line approach for engineering requirements',
      'Civil Large Engines control architecture',
      'Civil Small & Medium Engines control architecture',
      'Variable Area Nozzle control for UltraFan',
    ],
    tags: [
      'Control Systems',
      'MBSE',
      'Mode-to-Code',
      'UltraFan',
      'Civil Large Engines',
      'Product-Line Requirements',
    ],
  },
  {
    id: 'controls-data-services',
    company: 'Controls and Data Services',
    role: 'Systems Architect / Senior Principal Engineer',
    period: 'January 2009 – March 2014',
    startDate: '2009-01',
    endDate: '2014-03',
    location: 'Birmingham, UK',
    industry: 'Aerospace & Propulsion',
    keyWork: [
      'Aero Engine Controls architecture and synthesis',
      'System modelling, simulation and design',
      'Fuel control systems engineering',
      'Trent XWB Minor Loops design and validation',
      'Trent XWB Fuel Control System',
      'Trent XWB Servo Pressure Compensation',
      'Trent XWB Thrust Control Malfunction Accommodation',
    ],
    tags: [
      'Trent XWB',
      'Aero Engine Controls',
      'Fuel Control Systems',
      'Servo Pressure Compensation',
      'Thrust Control Accommodation',
    ],
  },
  {
    id: 'goodrich',
    company: 'Goodrich Engine Control Systems Limited',
    role: 'Systems Architect',
    period: 'August 2008 – December 2008',
    startDate: '2008-08',
    endDate: '2008-12',
    industry: 'Aerospace & Propulsion',
    responsibilities: [
      'Aero engine control systems architecture and requirement specifications',
      'System-level functional decomposition for propulsion control units',
    ],
    tags: ['Aero Engines', 'Systems Architecture', 'Engine Controls'],
  },
  {
    id: 'converteam',
    company: 'Converteam',
    role: 'Drives Control Engineer',
    period: 'April 2008 – August 2008',
    startDate: '2008-04',
    endDate: '2008-08',
    location: 'Rugby, UK',
    industry: 'HVDC & Power',
    responsibilities: [
      'Electric drives control systems design and tuning',
      'Power electronics drive controls and dynamic response engineering',
    ],
    tags: ['Drives Control', 'Power Systems', 'Control Engineering'],
  },
  {
    id: 'trw',
    company: 'TRW Automotive',
    role: 'Control Engineer',
    period: 'June 2004 – March 2008',
    startDate: '2004-06',
    endDate: '2008-03',
    industry: 'Automotive',
    keyWork: [
      'MATLAB / Simulink models development',
      'Electric Power Steering (EPS) systems',
      'Safety monitor functions and fault detection algorithms',
      'Linear Stability Analysis for vehicle steering dynamics',
      'Motor control design and parameter identification',
      'Sensorless motor control algorithms',
      'Embedded C implementation',
      'TargetLink production code generation workflows',
    ],
    tags: [
      'MATLAB / Simulink',
      'Electric Power Steering',
      'Safety Monitor Functions',
      'Linear Stability Analysis',
      'Motor Control',
      'Sensorless Control',
      'Embedded C',
      'TargetLink',
    ],
  },
];

export const FEATURED_WORK_DATA: FeaturedWorkItem[] = [
  {
    id: 'hvdc-systems',
    title: 'HVDC Systems Engineering',
    category: 'High Voltage & Grid Integration',
    iconName: 'Zap',
    description:
      'Leading end-to-end Systems Engineering for High Voltage Direct Current (HVDC) Service Line projects, governing grid system integration, compliance strategies, and quality assurance.',
    bulletPoints: [
      'HVDC Service Line Systems Engineering leadership for global energy transmission',
      'Grid System Integration requirements harmonization and verification strategy',
      'Strategy formulation for institutional compliance with ISO/IEC/IEEE 15288:2023',
      'Process alignment with CMMI maturity frameworks and DOORS / Relatics workflows',
      'Mitigating Cost of Poor Quality through front-loaded requirements rigor',
    ],
    technologies: [
      'HVDC Transmission',
      'ISO/IEC/IEEE 15288:2023',
      'CMMI',
      'IBM DOORS',
      'Relatics',
      'Grid Integration',
    ],
  },
  {
    id: 'mbse-architecture',
    title: 'Model-Based Systems Engineering',
    category: 'Systems Methodology & Architecture',
    iconName: 'Cpu',
    description:
      'Spearheading enterprise MBSE deployment, SysML architectural formalization, Mode-to-Code automation, and cross-company Model Based Design frameworks.',
    bulletPoints: [
      'Enterprise MBSE adoption across complex multi-disciplinary programs',
      'SysML behavioral, structural, and requirements modeling in MagicDraw',
      'Mode-to-Code toolchain integration connecting high-level logic to execution',
      'Product-line requirements architecture reducing redesign cycles',
      'Cross-company deployment strategies for MBD harmonization',
    ],
    technologies: [
      'MBSE',
      'SysML',
      'MagicDraw',
      'Mode-to-Code',
      'MBD',
      'Product-Line Architecture',
    ],
  },
  {
    id: 'ato-etcs-safety',
    title: 'Automatic Train Operation & ETCS Safety',
    category: 'Rail Transit & Safety-Critical',
    iconName: 'Train',
    description:
      'Functional architecture, safety integrity analysis, and MBSE modeling for Automatic Train Operation (ATO) operating over the European Train Control System (ETCS).',
    bulletPoints: [
      'MBSE-based functional development for next-generation automated train fleets',
      'Safety analysis integrating FMEA and Markov chain reliability models for ETCS',
      'Cross-border functional architecture alignment with Sweden, India, and Germany',
      'Traceable requirement verification via DOORS enterprise repositories',
      'Safety hazard identification and high-integrity functional partitioning',
    ],
    technologies: [
      'Automatic Train Operation',
      'ETCS',
      'SysML',
      'FMEA',
      'Markov Chain Modelling',
      'DOORS',
    ],
  },
  {
    id: 'aero-engine-controls',
    title: 'Aero Engine Control Systems',
    category: 'Aerospace Propulsion',
    iconName: 'Plane',
    description:
      'Systems architecture, dynamic modelling, and multi-rate control synthesis for civil large, small, and medium commercial aero engine platforms.',
    bulletPoints: [
      'Cross-project technical leadership in aerospace propulsion control systems',
      'Functional decomposition of FADEC (Full Authority Digital Engine Control) logic',
      'Hydro-mechanical and digital fuel control architecture integration',
      'Dynamic physical plant modelling and closed-loop performance validation',
      'Rigorous verification protocols for safety-critical airborne environments',
    ],
    technologies: [
      'Aero Engine Controls',
      'FADEC Architecture',
      'Simulink Modelling',
      'Civil Large Engines',
      'Civil Small/Medium Engines',
    ],
  },
  {
    id: 'trent-xwb-controls',
    title: 'Trent XWB Control Systems',
    category: 'Aerospace Propulsion',
    iconName: 'Compass',
    description:
      'Comprehensive systems architecture and control algorithm design for the Trent XWB aero engine program, powering long-range commercial aviation.',
    bulletPoints: [
      'Trent XWB Minor Loops control law synthesis and dynamic stabilization',
      'Trent XWB Fuel Control System modeling, simulation, and physical design',
      'Servo Pressure Compensation algorithm design for hydraulic stability',
      'Thrust Control Malfunction Accommodation (TCMA) safety architecture',
      'Multi-regime transient response and flight envelope protection',
    ],
    technologies: [
      'Trent XWB',
      'Fuel Control System',
      'Servo Pressure Compensation',
      'Thrust Malfunction Accommodation',
      'Minor Loops',
    ],
  },
  {
    id: 'ultrafan-control',
    title: 'UltraFan Control',
    category: 'Aerospace Propulsion & Aerodynamics',
    iconName: 'Disc',
    description:
      'Control architecture for next-generation geared turbofan engines, developing Variable Area Nozzle control systems for ultra-efficient aerodynamic operation.',
    bulletPoints: [
      'Variable Area Nozzle control law design for UltraFan engine architecture',
      'Dynamic aerodynamic boundary modeling and multi-variable actuator control',
      'Product-line requirements framework for scalable propulsion subsystems',
      'Cross-platform MBSE modeling establishing design baseline for high-bypass fans',
    ],
    technologies: [
      'UltraFan',
      'Variable Area Nozzle',
      'Aerodynamic Controls',
      'MBSE',
      'Next-Gen Propulsion',
    ],
  },
  {
    id: 'electric-power-steering',
    title: 'Electric Power Steering',
    category: 'Automotive & Embedded Control',
    iconName: 'Activity',
    description:
      'High-integrity motor control, linear stability analysis, and embedded software generation for Electric Power Steering (EPS) automotive systems.',
    bulletPoints: [
      'MATLAB / Simulink mathematical modeling of steering rack and vehicle dynamics',
      'Safety monitor functions and high-integrity fault mitigation routines',
      'Linear Stability Analysis across varied speed and road-load conditions',
      'Field-oriented motor control design and sensorless motor control synthesis',
      'Automated Embedded C production code generation using TargetLink',
    ],
    technologies: [
      'Electric Power Steering',
      'Simulink',
      'Safety Monitor Functions',
      'Motor Control',
      'Linear Stability Analysis',
      'TargetLink / Embedded C',
    ],
  },
  {
    id: 'modelling-simulation',
    title: 'Modelling & Simulation',
    category: 'Virtual Engineering & Left-Shifting V&V',
    iconName: 'Layers',
    description:
      'Enterprise modeling and simulation frameworks (VirtualBird & SmartTrain) accelerating verification, improving delivery metrics, and left-shifting V&V activities.',
    bulletPoints: [
      'Architecture and deployment of the VirtualBird simulation platform',
      'SmartTrain development and digital twin verification environments',
      'AVENTRA product family fleet verification acceleration',
      'Left-shifting V&V to identify defects earlier in the development lifecycle',
      'Tangible improvement in Time, Quality, and Delivery measures',
    ],
    technologies: [
      'VirtualBird',
      'SmartTrain',
      'AVENTRA',
      'Left-Shifting V&V',
      'MATLAB / Simulink',
      'Digital Twin Simulation',
    ],
  },
];

export const PUBLICATION_DATA: PublicationItem = {
  id: 'safety-analysis-ato-etcs',
  title: 'Safety Analysis of Automatic Train Operation Based on ETCS',
  authors: 'Khalid Khan, CEng et al.',
  topic: 'Automatic Train Operation & Railway Functional Safety',
  summary:
    'A rigorous safety and reliability analysis exploring Automatic Train Operation (ATO) integrated with European Train Control System (ETCS) standards. The publication examines system-level hazard identification, SysML behavioral formalization, Failure Mode and Effects Analysis (FMEA), and stochastic Markov chain modelling to substantiate safety-critical train operation architectures.',
  keyAspects: [
    'Automatic Train Operation (ATO) system architecture',
    'European Train Control System (ETCS) interface boundaries',
    'SysML modelling for functional and behavioral formalization',
    'Failure Mode and Effects Analysis (FMEA) methodology',
    'Markov chain modelling for state transitions and reliability metrics',
    'Safety integrity and functional hazard assessment',
  ],
};

export const PATENT_DATA: PatentItem = {
  id: 'engine-fuel-control-system',
  title: 'ENGINE FUEL CONTROL SYSTEM',
  role: 'Co-inventor',
  inventor: 'Khalid Khan, CEng — Co-inventor',
  domain: 'Aero Engine Controls & Hydro-Mechanical Systems',
  summary:
    'Inventive engineering design for aero engine fuel metering, flow modulation, and pressure compensation architectures, providing robust closed-loop fuel delivery across diverse flight envelopes, transient maneuvers, and abnormal operating conditions.',
};

export const RECOGNITIONS_DATA: RecognitionItem[] = [
  {
    id: 'ieee-senior',
    title: 'Senior Member IEEE',
    issuer: 'Institute of Electrical and Electronics Engineers',
    type: 'Honor',
    description:
      'Elevated to Senior Member grade in IEEE in recognition of significant professional standing, technical accomplishments, and engineering leadership.',
    iconName: 'Award',
  },
  {
    id: 'ceng',
    title: 'Chartered Engineer (CEng)',
    issuer: 'Engineering Council, UK',
    type: 'Professional',
    description:
      'Registered Chartered Engineer representing the highest benchmark of professional engineering competence, integrity, and international recognition.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'six-sigma',
    title: 'Six Sigma Green Belt',
    issuer: 'Continuous Quality & Process Improvement',
    type: 'Professional',
    description:
      'Certified in DMAIC methodology, statistical quality analysis, root-cause mitigation, and reducing Cost of Poor Quality across engineering lifecycles.',
    iconName: 'CheckCircle2',
  },
  {
    id: 'daad',
    title: 'DAAD Fellowship',
    issuer: 'German Academic Exchange Service (DAAD)',
    type: 'Fellowship',
    description:
      'Prestigious research fellowship awarded for control systems engineering studies and technical collaboration at Technische Universität Dresden, Germany.',
    iconName: 'GraduationCap',
  },
  {
    id: 'ors',
    title: 'ORS Award',
    issuer: 'Overseas Research Students Awards Scheme, UK',
    type: 'Fellowship',
    description:
      'Competitive national research award granted by the Committee of Vice-Chancellors and Principals of the Universities of the United Kingdom for PhD research.',
    iconName: 'Medal',
  },
  {
    id: 'cert-rail',
    title: 'Railway Signalling Overview',
    issuer: 'Professional Rail Training Certification',
    type: 'Certification',
    description:
      'Specialized certification covering interlocking, track circuits, ETCS level principles, and wayside signalling safety.',
    iconName: 'FileBadge',
  },
  {
    id: 'cert-finance',
    title: 'Finance for Non-Finance Professionals',
    issuer: 'Executive Management Certification',
    type: 'Certification',
    description:
      'Executive financial governance, cost accounting, CAPEX/OPEX lifecycle analysis, and engineering budget stewardship.',
    iconName: 'Briefcase',
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'phd-leicester',
    institution: 'University of Leicester',
    degree: 'PhD, Engineering',
    field: 'Control Systems & Systems Engineering',
    period: '2000 – 2003',
    location: 'Leicester, United Kingdom',
    notes: 'Recipient of the Overseas Research Students (ORS) Award',
  },
  {
    id: 'mtech-iit-bombay',
    institution: 'Indian Institute of Technology, Bombay',
    degree: 'M.Tech.',
    field: 'Systems and Control Engineering',
    period: '1998 – 2000',
    location: 'Mumbai, India',
    notes: 'Premier postgraduate systems and control program',
  },
  {
    id: 'mtech-tu-dresden',
    institution: 'Technische Universität Dresden',
    degree: 'MTech Project',
    field: 'Control Systems',
    period: '1999 – 2000',
    location: 'Dresden, Germany',
    notes: 'Supported by DAAD Fellowship research grant',
  },
  {
    id: 'bsc-amu',
    institution: 'Aligarh Muslim University',
    degree: 'B.Sc. Engineering',
    field: 'Electrical Engineering',
    period: '1994 – 1998',
    location: 'Aligarh, India',
    notes: 'Rigorous foundation in electrical machines, power, and circuits',
  },
];
