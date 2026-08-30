import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileImg, setProfileImg] = useState<string>(() => {
    return localStorage.getItem('khalid_profile_custom_image') || PERSONAL_INFO.profileImage || '/khalid-photo.jpg';
  });

  useEffect(() => {
    const handleProfileUpdate = () => {
      const saved = localStorage.getItem('khalid_profile_custom_image');
      setProfileImg(saved || PERSONAL_INFO.profileImage || '/khalid-photo.jpg');
    };
    window.addEventListener('profile_image_updated', handleProfileUpdate);
    return () => {
      window.removeEventListener('profile_image_updated', handleProfileUpdate);
    };
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'recognition', label: 'Recognition' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -72;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E8EEF5] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand & Title with Profile Avatar */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
            aria-label="Khalid Khan, CEng homepage"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#2468C4]/30 shadow-xs shrink-0 bg-[#0E1520]">
              <img
                src={profileImg}
                alt="Khalid Khan"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-[#0B2342] tracking-tight group-hover:text-[#2468C4] transition-colors font-heading leading-snug">
                Khalid Khan, <span className="text-[#2468C4]">CEng</span>
              </span>
              <span className="text-[11px] text-[#607086] font-medium tracking-wide">
                Systems Engineering Leader
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                    isActive
                      ? 'text-[#2468C4] font-semibold'
                      : 'text-[#10233F] hover:text-[#2468C4]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#2468C4] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center pl-4">
            <a
              href={PERSONAL_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#2468C4] text-white text-xs font-semibold hover:bg-[#123A67] transition-all shadow-xs"
            >
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#10233F] hover:text-[#2468C4] hover:bg-[#F5F8FC] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E8EEF5] px-4 pt-2 pb-6 space-y-1 shadow-lg">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#F5F8FC] text-[#2468C4] font-semibold'
                    : 'text-[#10233F] hover:bg-[#F5F8FC] hover:text-[#2468C4]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-4 border-t border-[#E8EEF5] mt-2">
            <a
              href={PERSONAL_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#2468C4] text-white text-sm font-semibold hover:bg-[#123A67] transition-colors"
            >
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
