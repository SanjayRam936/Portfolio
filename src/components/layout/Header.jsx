import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const SECTIONS = ['home', 'projects', 'skills', 'experience', 'contact'];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers = [];
    SECTIONS.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(section);
            }
          },
          { rootMargin: '-45% 0px -45% 0px' }
        );
        observer.observe(element);
        observers.push({ observer, element });
      }
    });
    return () => {
      observers.forEach(({ observer, element }) => observer.unobserve(element));
    };
  }, []);

  const handleNavClick = (section) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-16 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/85 backdrop-blur-md border-b border-border' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-full flex items-center justify-between">
        <button 
          onClick={() => handleNavClick('home')}
          className="font-mono text-accent-green hover:opacity-80 transition-opacity"
        >
          sanjay@dev:~$
        </button>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {SECTIONS.map((section) => (
            <button
              key={section}
              onClick={() => handleNavClick(section)}
              className={`capitalize text-sm font-medium transition-colors duration-200 ${
                activeSection === section 
                  ? 'text-accent-green' 
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {section}
            </button>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-bg border-b border-border p-5 flex flex-col gap-4 shadow-xl shadow-black/50">
          {SECTIONS.map((section) => (
            <button
              key={section}
              onClick={() => handleNavClick(section)}
              className={`capitalize text-left text-lg font-medium transition-colors duration-200 ${
                activeSection === section 
                  ? 'text-accent-green' 
                  : 'text-text-muted'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
