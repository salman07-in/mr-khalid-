import React from 'react';
import { ShieldCheck, Award, Building2, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PortraitVisual } from './PortraitVisual';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -72;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-white pt-10 pb-16 lg:pt-16 lg:pb-20 border-b border-[#E8EEF5]">
      {/* Background Subtle Corporate Engineering Grid */}
      <div className="absolute inset-0 bg-schematic-grid opacity-75 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT SIDE: Approximately 48% (5 cols on 12-grid = ~42-48%) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Top Professional Credential Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F5F8FC] text-[#0B2342] border border-[#CBD5E1]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2468C4]" />
                <span>Chartered Engineer (CEng)</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F5F8FC] text-[#0B2342] border border-[#CBD5E1]">
                <Award className="w-3.5 h-3.5 text-[#2468C4]" />
                <span>Senior Member IEEE</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0B2342] text-white">
                <Building2 className="w-3.5 h-3.5 text-[#00C49F]" />
                <span>GE Vernova</span>
              </span>
            </div>

            {/* Main Editorial Heading */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B2342] tracking-tight font-heading leading-tight">
                Khalid Khan, <br className="hidden sm:inline" />
                <span className="text-[#2468C4]">CEng</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[#123A67] font-heading pt-2">
                Senior Systems Engineering Manager
              </p>
            </div>

            {/* Core Specialization Line */}
            <div className="text-sm font-semibold text-[#2468C4] tracking-wide">
              Systems Engineering &bull; MBSE &bull; Model-Based Design &bull; Safety-Critical Systems
            </div>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg text-[#607086] leading-relaxed max-w-xl">
              &ldquo;Engineering leader with 20+ years of experience delivering complex systems through systems thinking, model-based engineering, modelling and simulation.&rdquo;
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-[#10233F] font-medium pt-1">
              <MapPin className="w-4 h-4 text-[#2468C4]" />
              <span>{PERSONAL_INFO.location}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => scrollToSection('experience')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#2468C4] text-white font-semibold text-sm hover:bg-[#123A67] transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Explore My Experience</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white text-[#0B2342] border-2 border-[#0B2342] font-semibold text-sm hover:bg-[#F5F8FC] hover:text-[#2468C4] hover:border-[#2468C4] transition-all"
              >
                <span>View LinkedIn</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Approximately 52% (6 cols on 12-grid) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <PortraitVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
