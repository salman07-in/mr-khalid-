import React from 'react';
import {
  Zap,
  Cpu,
  Train,
  Plane,
  Compass,
  Disc,
  Activity,
  Layers,
  CheckCircle,
} from 'lucide-react';
import { FEATURED_WORK_DATA } from '../data/portfolioData';
import { FeaturedWorkItem } from '../types';

export const FeaturedWorkSection: React.FC = () => {
  const getWorkIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return Zap;
      case 'Cpu':
        return Cpu;
      case 'Train':
        return Train;
      case 'Plane':
        return Plane;
      case 'Compass':
        return Compass;
      case 'Disc':
        return Disc;
      case 'Activity':
        return Activity;
      case 'Layers':
        return Layers;
      default:
        return Cpu;
    }
  };

  return (
    <section id="projects" className="bg-[#F5F8FC] py-20 lg:py-24 border-b border-[#E8EEF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-[#E8EEF5] text-xs font-bold text-[#2468C4] tracking-wider uppercase font-heading mb-3 shadow-xs">
            Flagship Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2342] tracking-tight font-heading">
            Featured Engineering Work
          </h2>
          <p className="text-base text-[#607086] mt-3">
            High-integrity systems engineering programs delivered across global power grids, commercial aerospace, high-speed rail, and advanced automotive dynamics.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_WORK_DATA.map((work: FeaturedWorkItem) => {
            const IconComponent = getWorkIcon(work.iconName);

            return (
              <div
                key={work.id}
                className="bg-white rounded-xl p-6 border border-[#E8EEF5] shadow-xs hover:shadow-md transition-all hover:border-[#2468C4]/40 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon & Category Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-lg bg-[#F5F8FC] border border-[#E8EEF5] flex items-center justify-center text-[#2468C4]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-[#2468C4] uppercase tracking-wider block mb-1 font-heading">
                      {work.category}
                    </span>
                    <h3 className="text-base font-bold text-[#0B2342] font-heading leading-snug">
                      {work.title}
                    </h3>
                  </div>

                  {/* Summary Description */}
                  <p className="text-xs text-[#607086] leading-relaxed">
                    {work.description}
                  </p>

                  {/* Key Engineering Deliverables */}
                  <div className="space-y-2 pt-2 border-t border-[#F5F8FC]">
                    <div className="text-[10px] font-bold text-[#0B2342] uppercase tracking-wider">
                      Key Engineering Scope
                    </div>
                    <ul className="space-y-1.5">
                      {work.bulletPoints.slice(0, 3).map((bp, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-1.5 text-xs text-[#10233F]"
                        >
                          <CheckCircle className="w-3 h-3 text-[#2468C4] shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{bp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Pills at bottom */}
                <div className="mt-5 pt-3 border-t border-[#E8EEF5]">
                  <div className="flex flex-wrap gap-1">
                    {work.technologies.slice(0, 3).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#F5F8FC] text-[#123A67] border border-[#E8EEF5]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
