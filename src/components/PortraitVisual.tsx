import React from 'react';
import { ShieldCheck, Award, Building2, User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PortraitVisualProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const PortraitVisual: React.FC<PortraitVisualProps> = ({ className = '' }) => {
  const photoSrc = PERSONAL_INFO.profileImage || '/khalid-photo.jpg';

  return (
    <div className={`relative w-full max-w-lg mx-auto ${className}`}>
      {/* Background Subtle Engineering Schematic Grid & Geometry */}
      <div className="absolute -inset-4 rounded-2xl bg-[#F5F8FC] border border-[#E8EEF5] -z-10 overflow-hidden">
        {/* Subtle schematic lines */}
        <svg
          className="absolute inset-0 w-full h-full text-[#123A67]/10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="hero-schematic" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="0" cy="0" r="2" fill="#2468C4" fillOpacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-schematic)" />
          {/* Subtle System Block lines */}
          <line
            x1="20%"
            y1="15%"
            x2="80%"
            y2="15%"
            stroke="#2468C4"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            strokeOpacity="0.4"
          />
          <line
            x1="80%"
            y1="15%"
            x2="80%"
            y2="85%"
            stroke="#2468C4"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            strokeOpacity="0.4"
          />
          <line
            x1="20%"
            y1="85%"
            x2="80%"
            y2="85%"
            stroke="#2468C4"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            strokeOpacity="0.4"
          />
          <circle cx="80%" cy="15%" r="4" fill="#2468C4" fillOpacity="0.6" />
          <circle cx="80%" cy="85%" r="4" fill="#2468C4" fillOpacity="0.6" />
        </svg>
      </div>

      {/* Main Executive Portrait Card Container */}
      <div className="relative rounded-2xl overflow-hidden bg-white border border-[#E8EEF5] shadow-lg shadow-slate-200/60">
        {/* Top Header Badge on Portrait */}
        <div className="bg-[#0B2342] text-white px-5 py-3 flex items-center justify-between border-b border-[#123A67]">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00C49F] animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wide uppercase font-heading text-slate-200">
              Executive Profile
            </span>
          </div>
          <div className="flex items-center space-x-1.5 text-xs text-slate-300">
            <Building2 className="w-3.5 h-3.5 text-[#2F73D9]" />
            <span className="font-medium">GE Vernova</span>
          </div>
        </div>

        {/* Portrait Image Canvas */}
        <div className="relative aspect-4/5 w-full bg-[#0E1520] flex items-center justify-center overflow-hidden group">
          {/* Main Photo of Khalid Khan */}
          <img
            src={photoSrc}
            alt="Khalid Khan, CEng - Senior Systems Engineering Manager"
            className="w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-102"
            referrerPolicy="no-referrer"
          />

          {/* Subtle lighting vignette overlay to integrate with theme */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2342]/90 via-transparent to-black/20 pointer-events-none" />

          {/* Top subtle badge overlay */}
          <div className="absolute top-3 left-3 z-20">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0B2342]/85 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 uppercase tracking-wider">
              <User className="w-3 h-3 text-[#00C49F]" />
              <span>Khalid Khan, CEng</span>
            </span>
          </div>

          {/* Floating Credential Overlays on Portrait */}
          <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col sm:flex-row gap-2">
            <div className="flex-1 bg-white/95 backdrop-blur-xs rounded-lg p-2.5 shadow-md border border-slate-200 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-[#F5F8FC] border border-[#2468C4]/30 flex items-center justify-center text-[#2468C4] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-[#0B2342] truncate font-heading">
                  Chartered Engineer
                </div>
                <div className="text-[10px] text-[#607086] truncate">
                  Engineering Council UK
                </div>
              </div>
            </div>

            <div className="flex-1 bg-white/95 backdrop-blur-xs rounded-lg p-2.5 shadow-md border border-slate-200 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-[#F5F8FC] border border-[#2468C4]/30 flex items-center justify-center text-[#2468C4] shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-[#0B2342] truncate font-heading">
                  Senior Member IEEE
                </div>
                <div className="text-[10px] text-[#607086] truncate">
                  Global Technical Society
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Bottom Meta Footer */}
        <div className="bg-[#F5F8FC] px-5 py-3 border-t border-[#E8EEF5] flex items-center justify-between text-xs text-[#607086]">
          <span className="font-medium text-[#10233F]">Senior Systems Engineering Manager</span>
          <span className="font-semibold text-[#2468C4]">20+ Years Leadership</span>
        </div>
      </div>
    </div>
  );
};
