import React from 'react';
import { Mail, Linkedin, MapPin, ExternalLink, Send, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-[#0B2342] text-white py-20 lg:py-24 relative overflow-hidden border-b border-[#123A67]">
      {/* Subtle schematic grid background */}
      <div className="absolute inset-0 bg-schematic-grid-dark opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#123A67] border border-[#2468C4]/40 text-xs font-bold text-slate-200 tracking-wider uppercase font-heading">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00C49F]" />
            <span>Professional Engagement</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Let&apos;s Connect
          </h2>

          {/* Supporting text */}
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            &ldquo;For professional conversations, engineering collaboration and knowledge exchange.&rdquo;
          </p>

          {/* Direct Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-left">
            {/* Email Card */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-5 rounded-xl bg-[#123A67]/60 hover:bg-[#123A67] border border-white/10 hover:border-[#2468C4] transition-all flex flex-col justify-between group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0B2342] flex items-center justify-center text-[#2F73D9] group-hover:text-white transition-colors mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Direct Email</div>
                <div className="text-sm font-bold text-white group-hover:text-[#2F73D9] transition-colors truncate">
                  {PERSONAL_INFO.email}
                </div>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#123A67]/60 hover:bg-[#123A67] border border-white/10 hover:border-[#2468C4] transition-all flex flex-col justify-between group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0B2342] flex items-center justify-center text-[#2F73D9] group-hover:text-white transition-colors mb-3">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">LinkedIn Profile</div>
                <div className="text-sm font-bold text-white group-hover:text-[#2F73D9] transition-colors truncate">
                  linkedin.com/in/khalid2k1
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="p-5 rounded-xl bg-[#123A67]/60 border border-white/10 flex flex-col justify-between">
              <div className="w-10 h-10 rounded-lg bg-[#0B2342] flex items-center justify-center text-[#2F73D9] mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Location</div>
                <div className="text-sm font-bold text-white truncate">
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <a
              href={PERSONAL_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#2468C4] hover:bg-[#2F73D9] text-white font-bold text-sm transition-all shadow-md"
            >
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white/10 hover:bg-white hover:text-[#0B2342] text-white border border-white/30 font-bold text-sm transition-all"
            >
              <span>Send Email</span>
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
