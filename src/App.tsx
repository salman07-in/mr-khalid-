import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceStrip } from './components/ExperienceStrip';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { CareerTimeline } from './components/CareerTimeline';
import { FeaturedWorkSection } from './components/FeaturedWorkSection';
import { PublicationsPatentsSection } from './components/PublicationsPatentsSection';
import { RecognitionEducationSection } from './components/RecognitionEducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      // Scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Active section spy
      const sections = [
        'home',
        'about',
        'expertise',
        'experience',
        'projects',
        'publications',
        'recognition',
        'education',
        'contact',
      ];

      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#10233F] relative selection:bg-[#2468C4]/20 selection:text-[#0B2342]">
      {/* Top Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#E8EEF5] z-50">
        <div
          className="h-full bg-[#2468C4] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Information Bar */}
      <TopBar />

      {/* Main Corporate Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <ExperienceStrip />
        <AboutSection />
        <ExpertiseSection />
        <CareerTimeline />
        <FeaturedWorkSection />
        <PublicationsPatentsSection />
        <RecognitionEducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
