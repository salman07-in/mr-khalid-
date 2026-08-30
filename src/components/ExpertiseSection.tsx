import React, { useState } from 'react';
import {
  Cpu,
  Layers,
  FileCheck,
  ShieldAlert,
  GitMerge,
  Gauge,
  Zap,
  Users2,
  Workflow,
  Network,
  Compass,
  FileText,
  Boxes,
  Activity,
  Binary,
  Code2,
  Filter,
} from 'lucide-react';
import { EXPERTISE_CAPABILITIES } from '../data/portfolioData';
import { CapabilityItem } from '../types';

export const ExpertiseSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Systems & Architecture',
    'Methods & Standards',
    'Control & Safety',
    'Simulation & Tools',
  ];

  const filteredCapabilities =
    selectedCategory === 'All'
      ? EXPERTISE_CAPABILITIES
      : EXPERTISE_CAPABILITIES.filter((cap) => cap.category === selectedCategory);

  const getCapabilityIcon = (id: string) => {
    switch (id) {
      case 'sys-eng':
        return Cpu;
      case 'mbse':
        return Layers;
      case 'mbd':
        return Workflow;
      case 'sysml':
        return GitMerge;
      case 'req-eng':
        return FileCheck;
      case 'safety-crit':
        return ShieldAlert;
      case 'control-sys':
        return Gauge;
      case 'elec-power':
        return Zap;
      case 'eng-mgmt':
        return Users2;
      case 'mod-sim':
        return Activity;
      case 'sys-arch':
        return Network;
      case 'sys-sw-lifecycle':
        return Compass;
      case 'iso-15288':
      case 'cmmi':
        return FileText;
      case 'doors':
      case 'relatics':
        return Boxes;
      case 'matlab-simulink':
        return Binary;
      case 'embedded-c':
        return Code2;
      default:
        return Cpu;
    }
  };

  return (
    <section id="expertise" className="bg-[#F5F8FC] py-20 lg:py-24 border-b border-[#E8EEF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-[#E8EEF5] text-xs font-bold text-[#2468C4] tracking-wider uppercase font-heading mb-3 shadow-xs">
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2342] tracking-tight font-heading">
            Engineering Capabilities &amp; Standards
          </h2>
          <p className="text-base text-[#607086] mt-3">
            Comprehensive systems engineering disciplines, industrial standards compliance, and advanced simulation toolchains cultivated over two decades.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-[#0B2342] text-white shadow-sm'
                    : 'bg-white text-[#607086] border border-[#E8EEF5] hover:text-[#0B2342] hover:bg-slate-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCapabilities.map((item: CapabilityItem) => {
            const IconComponent = getCapabilityIcon(item.id);
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl p-6 border border-[#E8EEF5] shadow-xs hover:shadow-md transition-all hover:border-[#2468C4]/40 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Top Bar: Icon + Category/Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-[#F5F8FC] border border-[#E8EEF5] flex items-center justify-center text-[#2468C4]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {item.badge ? (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F5F8FC] text-[#2468C4] border border-[#CBD5E1]">
                        {item.badge}
                      </span>
                    ) : (
                      <span className="text-[10px] font-medium text-[#607086]">
                        {item.category}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#0B2342] font-heading">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#607086] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle bottom separator */}
                <div className="mt-4 pt-3 border-t border-[#F5F8FC] flex items-center justify-between text-[11px] text-[#607086]">
                  <span className="font-mono text-[#2468C4]">{item.category}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
