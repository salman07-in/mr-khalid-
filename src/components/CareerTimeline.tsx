import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  Briefcase,
  CheckCircle,
  Building,
} from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { ExperienceItem } from '../types';
import {
  GEVernovaLogo,
  AlstomLogo,
  BombardierLogo,
  RollsRoyceLogo,
  ControlsDataServicesLogo,
  GoodrichLogo,
  ConverteamLogo,
  TRWLogo,
} from './Logos';

export const CareerTimeline: React.FC = () => {
  // Default first 2 expanded
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    'ge-vernova': true,
    'alstom': true,
  });

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getCompanyLogo = (company: string, id: string) => {
    if (company.includes('GE Vernova')) {
      return <GEVernovaLogo className="h-9 w-auto" />;
    }
    if (company.includes('Alstom')) {
      return <AlstomLogo className="h-7 w-auto" />;
    }
    if (company.includes('Bombardier')) {
      return <BombardierLogo className="h-7 w-auto" />;
    }
    if (company.includes('Rolls-Royce')) {
      return <RollsRoyceLogo className="h-9 w-auto" />;
    }
    if (company.includes('Controls and Data Services')) {
      return <ControlsDataServicesLogo className="h-8 w-auto" />;
    }
    if (company.includes('Goodrich')) {
      return <GoodrichLogo className="h-7 w-auto" />;
    }
    if (company.includes('Converteam')) {
      return <ConverteamLogo className="h-7 w-auto" />;
    }
    if (company.includes('TRW')) {
      return <TRWLogo className="h-7 w-auto" />;
    }
    return <Building className="w-6 h-6 text-[#2468C4]" />;
  };

  return (
    <section id="experience" className="bg-white py-20 lg:py-24 border-b border-[#E8EEF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F5F8FC] border border-[#E8EEF5] text-xs font-bold text-[#2468C4] tracking-wider uppercase font-heading mb-3 shadow-xs">
            Leadership Pathway
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2342] tracking-tight font-heading">
            Professional Experience
          </h2>
          <p className="text-base text-[#607086] mt-3">
            Two decades of progressive systems engineering management and specialized technical leadership across power systems, aerospace propulsion, and high-speed rail.
          </p>
        </div>

        {/* Vertical Career Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center/Left Blue Guideline */}
          <div className="absolute top-4 bottom-4 left-6 md:left-8 w-0.5 bg-[#CBD5E1]" />

          <div className="space-y-10">
            {EXPERIENCE_DATA.map((exp: ExperienceItem) => {
              const isExpanded = !!expandedItems[exp.id];
              const isCurrent = !!exp.isCurrent;

              return (
                <div key={exp.id} className="relative pl-14 md:pl-20">
                  {/* Circular Timeline Node Marker */}
                  <div
                    className={`absolute left-4 md:left-6 -translate-x-1/2 top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center z-10 transition-colors ${
                      isCurrent
                        ? 'bg-[#2468C4] border-white ring-4 ring-[#2468C4]/20'
                        : 'bg-white border-[#2468C4]'
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        isCurrent ? 'bg-white' : 'bg-[#2468C4]'
                      }`}
                    />
                  </div>

                  {/* Main Experience Card */}
                  <div
                    className={`rounded-xl border transition-all ${
                      isCurrent
                        ? 'bg-gradient-to-b from-[#F5F8FC] to-white border-[#2468C4]/50 shadow-md ring-1 ring-[#2468C4]/20'
                        : 'bg-white border-[#E8EEF5] shadow-xs hover:shadow-sm'
                    }`}
                  >
                    <div className="p-6">
                      {/* Top Header: Logo + Metadata */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E8EEF5]">
                        {/* Company Logo Container */}
                        <div className="flex items-center gap-4">
                          <div className="h-14 min-w-[120px] max-w-[200px] px-3 py-1.5 rounded-lg bg-[#F5F8FC] border border-[#E8EEF5] flex items-center justify-center">
                            {getCompanyLogo(exp.company, exp.id)}
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-[#607086] uppercase tracking-wider">
                              {exp.company}
                            </div>
                            <h3 className="text-lg font-bold text-[#0B2342] font-heading leading-snug">
                              {exp.role}
                            </h3>
                          </div>
                        </div>

                        {/* Current Role Badge & Period */}
                        <div className="flex flex-col sm:items-end gap-1.5">
                          {isCurrent && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0B2342] text-white">
                              <span className="w-2 h-2 rounded-full bg-[#00C49F] animate-pulse" />
                              Current Role
                            </span>
                          )}
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2468C4]">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{exp.period}</span>
                          </div>
                          {exp.location && (
                            <div className="flex items-center gap-1.5 text-xs text-[#607086]">
                              <MapPin className="w-3.5 h-3.5" />
                              <span>{exp.location}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Brief Highlights / Description Preview */}
                      <div className="pt-4 text-xs text-[#607086]">
                        {exp.responsibilities && exp.responsibilities.length > 0 && (
                          <p className="line-clamp-2">
                            {exp.responsibilities[0]}
                          </p>
                        )}
                        {exp.keyWork && exp.keyWork.length > 0 && (
                          <p className="line-clamp-2">
                            Key Focus: {exp.keyWork.slice(0, 3).join(' • ')}
                          </p>
                        )}
                      </div>

                      {/* Expandable Detailed Responsibilities */}
                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-[#E8EEF5] space-y-4">
                          {exp.responsibilities && (
                            <div className="space-y-2">
                              <div className="text-xs font-bold text-[#0B2342] uppercase tracking-wider font-heading">
                                Key Responsibilities &amp; Governance
                              </div>
                              <ul className="space-y-2">
                                {exp.responsibilities.map((resp, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-2.5 text-xs text-[#10233F]"
                                  >
                                    <CheckCircle className="w-3.5 h-3.5 text-[#2468C4] shrink-0 mt-0.5" />
                                    <span>{resp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {exp.keyWork && (
                            <div className="space-y-2">
                              <div className="text-xs font-bold text-[#0B2342] uppercase tracking-wider font-heading">
                                Technical Deliverables &amp; Milestones
                              </div>
                              <ul className="space-y-2">
                                {exp.keyWork.map((work, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-2.5 text-xs text-[#10233F]"
                                  >
                                    <CheckCircle className="w-3.5 h-3.5 text-[#2468C4] shrink-0 mt-0.5" />
                                    <span>{work}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Technology Tags */}
                          {exp.tags && exp.tags.length > 0 && (
                            <div className="pt-2">
                              <div className="text-[11px] font-bold text-[#607086] uppercase tracking-wider mb-2">
                                Technologies &amp; Methods
                              </div>
                              <div className="flex flex-wrap gap-1.5">
                                {exp.tags.map((tag, tIdx) => (
                                  <span
                                    key={tIdx}
                                    className="px-2.5 py-1 rounded text-[11px] font-medium bg-[#F5F8FC] text-[#0B2342] border border-[#E8EEF5]"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Expand / Collapse Button */}
                      <div className="mt-4 pt-3 flex items-center justify-between border-t border-[#F5F8FC]">
                        <span className="text-xs text-[#607086]">
                          {isExpanded ? 'Showing full scope' : 'Click to view full scope'}
                        </span>
                        <button
                          onClick={() => toggleExpand(exp.id)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2468C4] hover:text-[#0B2342] transition-colors cursor-pointer"
                        >
                          <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
