import React from 'react';
import { ShieldCheck, ExternalLink, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -72;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#08182B] border-t border-[#123A67] py-14 px-4 sm:px-6 lg:px-8 text-slate-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Identity & Subtitle */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white tracking-tight font-heading">
                Khalid Khan, <span className="text-[#2F73D9]">CEng</span>
              </span>
            </div>
            <div className="text-xs text-slate-400 font-medium tracking-wide">
              Systems Engineering Leader
            </div>
            <p className="text-xs text-slate-400">
              Senior Systems Engineering Manager &bull; GE Vernova
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Direct Social & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors px-3 py-1.5 rounded-lg bg-[#123A67] hover:bg-[#2468C4]"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors px-3 py-1.5 rounded-lg bg-[#123A67] hover:bg-[#2468C4]"
            >
              <span>Email</span>
              <Mail className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 rounded-lg bg-[#123A67] hover:bg-[#2468C4] text-white transition-colors cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Legal & Recognition Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Khalid Khan, CEng. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-[#00C49F]" />
            <span>Chartered Engineer (UK) &bull; Senior Member IEEE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
