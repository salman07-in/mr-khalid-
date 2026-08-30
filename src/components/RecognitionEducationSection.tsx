import React from 'react';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  GraduationCap,
  Medal,
  FileBadge,
  Briefcase,
  Globe2,
  Calendar,
  MapPin,
} from 'lucide-react';
import {
  RECOGNITIONS_DATA,
  EDUCATION_DATA,
  PERSONAL_INFO,
} from '../data/portfolioData';
import { RecognitionItem, EducationItem } from '../types';
import {
  UniversityOfLeicesterLogo,
  IITBombayLogo,
  TUDresdenLogo,
  AMULogo,
} from './Logos';

export const RecognitionEducationSection: React.FC = () => {
  const getRecognitionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return Award;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'CheckCircle2':
        return CheckCircle2;
      case 'GraduationCap':
        return GraduationCap;
      case 'Medal':
        return Medal;
      case 'FileBadge':
        return FileBadge;
      case 'Briefcase':
        return Briefcase;
      default:
        return Award;
    }
  };

  const getUniversityLogo = (institution: string) => {
    if (institution.includes('Leicester')) {
      return <UniversityOfLeicesterLogo className="h-10 w-auto" />;
    }
    if (institution.includes('Bombay')) {
      return <IITBombayLogo className="h-10 w-auto" />;
    }
    if (institution.includes('Dresden')) {
      return <TUDresdenLogo className="h-10 w-auto" />;
    }
    if (institution.includes('Aligarh')) {
      return <AMULogo className="h-10 w-auto" />;
    }
    return <GraduationCap className="w-8 h-8 text-[#2468C4]" />;
  };

  // Group recognitions into Honors/Fellowships vs Certifications
  const honors = RECOGNITIONS_DATA.filter(
    (r) => r.type === 'Honor' || r.type === 'Fellowship' || r.type === 'Professional'
  );
  const certifications = RECOGNITIONS_DATA.filter((r) => r.type === 'Certification');

  return (
    <section id="recognition" className="bg-[#F5F8FC] py-20 lg:py-24 border-b border-[#E8EEF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* ========================================================= */}
        {/* 1. RECOGNITIONS & HONORS */}
        {/* ========================================================= */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-[#E8EEF5] text-xs font-bold text-[#2468C4] tracking-wider uppercase font-heading mb-3 shadow-xs">
              Credentials &amp; Distinctions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2342] tracking-tight font-heading">
              Professional Recognition &amp; Certifications
            </h2>
            <p className="text-base text-[#607086] mt-3">
              Chartered status, senior institutional memberships, international research fellowships, and executive governance certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {honors.map((item: RecognitionItem) => {
              const IconComponent = getRecognitionIcon(item.iconName);
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-6 border border-[#E8EEF5] shadow-xs hover:shadow-md transition-all hover:border-[#2468C4]/40 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-[#F5F8FC] border border-[#E8EEF5] flex items-center justify-center text-[#2468C4]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F5F8FC] text-[#2468C4] border border-[#CBD5E1]">
                        {item.type}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#0B2342] font-heading">
                      {item.title}
                    </h3>

                    <div className="text-xs font-semibold text-[#2468C4]">
                      {item.issuer}
                    </div>

                    <p className="text-xs text-[#607086] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certifications Sub-Grid */}
          {certifications.length > 0 && (
            <div className="mt-8 pt-8 border-t border-[#E8EEF5]">
              <h3 className="text-sm font-bold text-[#0B2342] uppercase tracking-wider font-heading mb-4 text-center sm:text-left">
                Specialized Professional Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert) => {
                  const CertIcon = getRecognitionIcon(cert.iconName);
                  return (
                    <div
                      key={cert.id}
                      className="bg-white rounded-lg p-4 border border-[#E8EEF5] flex items-center gap-3.5 shadow-xs"
                    >
                      <div className="w-9 h-9 rounded bg-[#F5F8FC] flex items-center justify-center text-[#2468C4] shrink-0">
                        <CertIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0B2342] font-heading">
                          {cert.title}
                        </div>
                        <div className="text-[11px] text-[#607086]">
                          {cert.issuer} &bull; {cert.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* ========================================================= */}
        {/* 2. EDUCATION SECTION WITH OFFICIAL UNIVERSITY LOGOS */}
        {/* ========================================================= */}
        <div id="education" className="pt-8 border-t border-[#E8EEF5]">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-[#E8EEF5] text-xs font-bold text-[#2468C4] tracking-wider uppercase font-heading mb-3 shadow-xs">
              Academic Foundations
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2342] tracking-tight font-heading">
              Education &amp; Academic Background
            </h2>
            <p className="text-base text-[#607086] mt-3">
              Doctoral and postgraduate research in control systems and electrical engineering from world-renowned technical institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION_DATA.map((edu: EducationItem) => (
              <div
                key={edu.id}
                className="bg-white rounded-xl p-6 border border-[#E8EEF5] shadow-xs hover:shadow-md transition-all hover:border-[#2468C4]/40 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Logo Container & Period */}
                  <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#E8EEF5]">
                    <div className="h-14 px-3 py-1 bg-[#F5F8FC] rounded-lg border border-[#E8EEF5] flex items-center justify-center">
                      {getUniversityLogo(edu.institution)}
                    </div>
                    <div className="text-right">
                      <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#2468C4]">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-[#607086] justify-end">
                        <MapPin className="w-3 h-3" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Degree & Field */}
                  <div>
                    <h3 className="text-lg font-bold text-[#0B2342] font-heading leading-snug">
                      {edu.degree}
                    </h3>
                    <div className="text-xs font-semibold text-[#2468C4] mt-0.5">
                      {edu.field}
                    </div>
                    <div className="text-xs text-[#607086] font-medium mt-1">
                      {edu.institution}
                    </div>
                  </div>

                  {/* Notes / Honors */}
                  {edu.notes && (
                    <div className="p-3 rounded-lg bg-[#F5F8FC] border border-[#E8EEF5] text-xs text-[#10233F]">
                      <span className="font-semibold text-[#0B2342]">Distinction: </span>
                      {edu.notes}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. LANGUAGES */}
        {/* ========================================================= */}
        <div className="pt-8 border-t border-[#E8EEF5]">
          <div className="bg-white rounded-xl p-8 border border-[#E8EEF5] shadow-xs">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-center md:text-left">
                <div className="w-12 h-12 rounded-xl bg-[#0B2342] flex items-center justify-center text-white shrink-0">
                  <Globe2 className="w-6 h-6 text-[#2F73D9]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0B2342] font-heading">
                    International Language Proficiencies
                  </h3>
                  <p className="text-xs text-[#607086]">
                    Global communication capability supporting multi-national engineering programs.
                  </p>
                </div>
              </div>

              {/* Language Pills */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                {PERSONAL_INFO.languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2.5 rounded-lg bg-[#F5F8FC] border border-[#E8EEF5] text-center"
                  >
                    <div className="text-xs font-bold text-[#0B2342] font-heading">
                      {lang.name}
                    </div>
                    <div className="text-[10px] text-[#607086]">
                      {lang.level}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
