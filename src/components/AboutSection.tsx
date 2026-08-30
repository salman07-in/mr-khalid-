import React from 'react';
import { CheckCircle2, Workflow, Shield, Cpu, Target } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-white py-20 lg:py-24 border-b border-[#E8EEF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading with subtle blue vertical accent */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F5F8FC] border border-[#E8EEF5] text-xs font-bold text-[#2468C4] tracking-wider uppercase font-heading">
              Executive Overview
            </div>
            
            <div className="flex items-stretch gap-4">
              <div className="w-1.5 bg-[#2468C4] rounded-full shrink-0" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2342] tracking-tight font-heading leading-tight uppercase">
                Engineering <br className="hidden sm:inline" />
                Through Systems <br className="hidden sm:inline" />
                Thinking
              </h2>
            </div>

            <p className="text-sm text-[#607086] leading-relaxed pt-2">
              Transforming complex engineering lifecycles through disciplined systems architecture, model-based rigor, and cross-functional leadership.
            </p>

            {/* Strategic Pillars Callout Box */}
            <div className="mt-8 p-5 bg-[#F5F8FC] rounded-xl border border-[#E8EEF5] space-y-3.5">
              <div className="text-xs font-bold text-[#0B2342] uppercase tracking-wider font-heading flex items-center gap-2">
                <Target className="w-4 h-4 text-[#2468C4]" />
                <span>Strategic Focus</span>
              </div>
              <p className="text-xs text-[#607086] leading-relaxed">
                {PERSONAL_INFO.mbdFocus}
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Professional Summary */}
          <div className="lg:col-span-7 space-y-6 text-[#10233F]">
            <p className="text-lg font-semibold text-[#0B2342] leading-relaxed font-heading">
              {PERSONAL_INFO.aboutBody}
            </p>

            <p className="text-base text-[#607086] leading-relaxed">
              With cross-sector leadership spanning aerospace, railway transportation, automotive, and high-voltage grid systems, Khalid Khan specializes in orchestrating multi-disciplinary engineering teams to design, model, verify, and deliver safety-critical architectures under stringent international standards.
            </p>

            {/* Core Capability Checklist */}
            <div className="pt-4 space-y-3">
              <div className="text-xs font-bold text-[#0B2342] uppercase tracking-wider font-heading mb-3">
                Key Leadership &amp; Engineering Domains
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PERSONAL_INFO.aboutPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F5F8FC] border border-[#E8EEF5]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#2468C4] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#10233F] font-medium leading-normal">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Value Creation Highlight */}
            <div className="p-4 rounded-lg bg-[#0B2342] text-white flex items-center gap-4 mt-6">
              <div className="w-10 h-10 rounded-lg bg-[#123A67] flex items-center justify-center text-[#2F73D9] shrink-0">
                <Workflow className="w-5 h-5 text-white" />
              </div>
              <div className="text-xs text-slate-200">
                <span className="font-bold text-white block font-heading mb-0.5">
                  Left-Shifting Verification &amp; Validation (V&amp;V)
                </span>
                Proactively embedding modelling and simulation early in the design cycle to reduce Cost of Poor Quality (CoPQ) and accelerate program delivery.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
