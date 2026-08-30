import React from 'react';
import { Clock, Cpu, Layers, ShieldCheck, Globe, Users } from 'lucide-react';

export const ExperienceStrip: React.FC = () => {
  const credentials = [
    {
      top: '20+',
      bottom: 'Years of Experience',
      icon: Clock,
    },
    {
      top: 'Systems',
      bottom: 'Engineering Leader',
      icon: Cpu,
    },
    {
      top: 'MBSE & MBD',
      bottom: 'Expertise',
      icon: Layers,
    },
    {
      top: 'Safety-Critical',
      bottom: 'Systems',
      icon: ShieldCheck,
    },
    {
      top: 'Global',
      bottom: 'Project Experience',
      icon: Globe,
    },
    {
      top: 'Cross-functional',
      bottom: 'Leadership',
      icon: Users,
    },
  ];

  return (
    <section className="bg-[#0B2342] text-white py-8 border-y border-[#123A67] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#123A67]/60">
          {credentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center px-3 ${
                  index > 0 ? 'pt-4 sm:pt-0' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-[#123A67] flex items-center justify-center text-[#2F73D9] mb-2.5">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-xl sm:text-2xl font-extrabold font-heading text-white tracking-tight leading-tight">
                  {item.top}
                </div>
                <div className="text-xs text-slate-300 font-medium tracking-wide mt-0.5">
                  {item.bottom}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
