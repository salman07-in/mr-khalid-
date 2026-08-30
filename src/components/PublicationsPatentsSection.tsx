import React from 'react';
import { BookOpen, Lightbulb, UserCheck, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PUBLICATION_DATA, PATENT_DATA } from '../data/portfolioData';

export const PublicationsPatentsSection: React.FC = () => {
  return (
    <section id="publications" className="bg-white py-20 lg:py-24 border-b border-[#E8EEF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F5F8FC] border border-[#E8EEF5] text-xs font-bold text-[#2468C4] tracking-wider uppercase font-heading mb-3 shadow-xs">
            Intellectual Contributions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2342] tracking-tight font-heading">
            Publications &amp; Patents
          </h2>
          <p className="text-base text-[#607086] mt-3">
            Peer-reviewed research in safety-critical railway automation and patented industrial inventions in aero engine control architectures.
          </p>
        </div>

        {/* Two-Column Grid: Left Publication, Right Patent */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Publication Card */}
          <div className="bg-white rounded-xl p-8 border border-[#E8EEF5] shadow-xs flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-[#F5F8FC] border border-[#E8EEF5] flex items-center justify-center text-[#2468C4]">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#2468C4] uppercase tracking-wider font-heading">
                    Peer-Reviewed Publication
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#0B2342] font-heading leading-snug">
                {PUBLICATION_DATA.title}
              </h3>

              {/* Authors & Domain */}
              <div className="text-xs text-[#607086] font-medium space-y-1">
                <div>
                  <span className="text-[#0B2342] font-semibold">Author: </span>
                  {PUBLICATION_DATA.authors}
                </div>
                <div>
                  <span className="text-[#0B2342] font-semibold">Topic: </span>
                  {PUBLICATION_DATA.topic}
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs text-[#607086] leading-relaxed">
                {PUBLICATION_DATA.summary}
              </p>

              {/* Key Methodological Aspects */}
              <div className="space-y-2 pt-3 border-t border-[#F5F8FC]">
                <div className="text-[11px] font-bold text-[#0B2342] uppercase tracking-wider">
                  Methodology &amp; Scope
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {PUBLICATION_DATA.keyAspects.map((aspect, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#10233F]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2468C4] shrink-0 mt-0.5" />
                      <span>{aspect}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6 pt-4 border-t border-[#E8EEF5] flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 rounded text-[11px] font-medium bg-[#F5F8FC] text-[#0B2342] border border-[#E8EEF5]">
                Automatic Train Operation
              </span>
              <span className="px-2.5 py-1 rounded text-[11px] font-medium bg-[#F5F8FC] text-[#0B2342] border border-[#E8EEF5]">
                ETCS
              </span>
              <span className="px-2.5 py-1 rounded text-[11px] font-medium bg-[#F5F8FC] text-[#0B2342] border border-[#E8EEF5]">
                Safety Analysis
              </span>
              <span className="px-2.5 py-1 rounded text-[11px] font-medium bg-[#F5F8FC] text-[#0B2342] border border-[#E8EEF5]">
                SysML / FMEA
              </span>
            </div>
          </div>

          {/* Patent Card */}
          <div className="bg-white rounded-xl p-8 border border-[#E8EEF5] shadow-xs flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-[#0B2342] flex items-center justify-center text-white">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#0B2342] uppercase tracking-wider font-heading">
                    Industrial Patent
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#F5F8FC] text-[#2468C4] border border-[#CBD5E1]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Proprietary Invention</span>
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#0B2342] font-heading leading-snug">
                {PATENT_DATA.title}
              </h3>

              {/* Role & Domain */}
              <div className="text-xs text-[#607086] font-medium space-y-1">
                <div>
                  <span className="text-[#0B2342] font-semibold">Inventorship: </span>
                  <span className="text-[#2468C4] font-bold">{PATENT_DATA.inventor}</span>
                </div>
                <div>
                  <span className="text-[#0B2342] font-semibold">Technical Domain: </span>
                  {PATENT_DATA.domain}
                </div>
              </div>

              {/* Patent Technical Summary */}
              <p className="text-xs text-[#607086] leading-relaxed">
                {PATENT_DATA.summary}
              </p>

              {/* Highlight Box */}
              <div className="p-4 rounded-lg bg-[#F5F8FC] border border-[#E8EEF5] space-y-2 mt-4">
                <div className="text-xs font-bold text-[#0B2342] uppercase tracking-wider font-heading flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#2468C4]" />
                  <span>Invention Highlights</span>
                </div>
                <p className="text-xs text-[#607086] leading-relaxed">
                  Engineered hydro-mechanical dynamic flow modulation and closed-loop pressure compensation logic protecting turbine stability under extreme transient flight profiles.
                </p>
              </div>
            </div>

            {/* Bottom Status note */}
            <div className="mt-6 pt-4 border-t border-[#E8EEF5] flex items-center justify-between text-xs text-[#607086]">
              <span className="font-medium text-[#10233F]">Aerospace Propulsion Controls</span>
              <span className="font-semibold text-[#2468C4]">Co-inventor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
