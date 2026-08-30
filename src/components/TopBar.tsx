import React from 'react';
import { Mail, Linkedin, MapPin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#0B2342] text-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-[#123A67] hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Contact & Location Metadata */}
        <div className="flex items-center space-x-6">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#2F73D9]" />
            <span>{PERSONAL_INFO.email}</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#2F73D9]" />
            <span>linkedin.com/in/khalid2k1</span>
          </a>

          <div className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-[#2F73D9]" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>

        {/* Quick Executive Action */}
        <div className="flex items-center">
          <a
            href={PERSONAL_INFO.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-200 hover:text-white font-medium bg-[#123A67] hover:bg-[#2468C4] px-3 py-1 rounded transition-colors text-[11px]"
          >
            <span>Connect on LinkedIn</span>
            <ExternalLink className="w-3 h-3 text-[#2F73D9] group-hover:text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};
