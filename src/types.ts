export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string;
  location?: string;
  isCurrent?: boolean;
  industry: 'HVDC & Power' | 'Rail & Transit' | 'Aerospace & Propulsion' | 'Automotive';
  responsibilities?: string[];
  keyWork?: string[];
  tags: string[];
}

export interface CapabilityItem {
  id: string;
  name: string;
  category: 'Systems & Architecture' | 'Methods & Standards' | 'Control & Safety' | 'Simulation & Tools';
  description: string;
  badge?: string;
}

export interface FeaturedWorkItem {
  id: string;
  title: string;
  category: string;
  description: string;
  bulletPoints: string[];
  technologies: string[];
  iconName: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string;
  topic: string;
  summary: string;
  keyAspects: string[];
}

export interface PatentItem {
  id: string;
  title: string;
  role: string;
  inventor: string;
  domain: string;
  summary: string;
}

export interface RecognitionItem {
  id: string;
  title: string;
  issuer?: string;
  type: 'Honor' | 'Professional' | 'Fellowship' | 'Certification';
  description: string;
  iconName: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location?: string;
  notes?: string;
}
