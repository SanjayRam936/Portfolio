import React from 'react';
import TerminalHero from '../components/hero/TerminalHero';
import Reveal from '../components/common/Reveal';
import { ChevronDown, Download } from 'lucide-react';

export default function HomeSection() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen pt-28 pb-16 flex flex-col justify-center relative border-b-0">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 w-full grid md:grid-cols-2 gap-10 items-center z-10">
        
        {/* Left Column: Copy & CTA */}
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-panel mb-6">
              <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></div>
              <span className="text-xs font-mono text-text-muted">open to internships</span>
            </div>
          </Reveal>
          
          <Reveal delay={70}>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-text-primary mb-6 leading-tight">
              Sanjay Ram A S
            </h1>
          </Reveal>
          
          <Reveal delay={140}>
            <p className="font-body text-text-muted text-lg sm:text-xl mb-8 leading-relaxed max-w-lg">
              A full-stack CS student specializing in building responsive web applications with React and Django, and integrating intelligent features like computer vision and LLM APIs.
            </p>
          </Reveal>
          
          <Reveal delay={210}>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToProjects}
                className="font-mono text-sm px-6 py-3 rounded border border-accent-green text-bg bg-accent-green hover:scale-[1.03] active:scale-[0.98] transition-transform duration-200"
              >
                ./view projects
              </button>
              <button 
                onClick={scrollToContact}
                className="font-mono text-sm px-6 py-3 rounded border border-border text-text-primary bg-panel hover:border-accent-blue hover:text-accent-blue transition-colors duration-200"
              >
                ./contact --me
              </button>
              <a 
                href="/resume.pdf"
                download="Sanjay_Ram_A_S_Resume.pdf"
                className="font-mono text-sm px-6 py-3 rounded border border-border text-text-primary bg-panel hover:border-accent-amber hover:text-accent-amber transition-colors duration-200 flex items-center gap-2"
              >
                <Download size={16} />
                ./download resume
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Terminal */}
        <div className="w-full">
          <TerminalHero />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
        <Reveal delay={500}>
          <ChevronDown className="text-text-dim animate-bounce w-6 h-6" />
        </Reveal>
      </div>
    </section>
  );
}
