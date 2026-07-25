import React from 'react';
import SectionLabel from '../components/common/SectionLabel';
import Reveal from '../components/common/Reveal';
import { CONTACT_LINKS } from '../data/contact';
import Footer from '../components/layout/Footer';

export default function ContactSection() {
  return (
    <section id="contact" className="pt-24 border-t border-border flex flex-col min-h-[50vh]">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 w-full flex-1">
        <SectionLabel text="contact" />
        <Reveal delay={70}>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary mb-2">
            Let's build something
          </h2>
          <p className="text-text-muted text-lg mb-12">
            Reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
        </Reveal>
        
        <Reveal delay={140}>
          <div className="p-5 rounded-lg border border-border bg-panel">
            <div className="grid sm:grid-cols-2 gap-4">
              {CONTACT_LINKS.map((link, i) => {
                const Icon = link.icon;
                return (
                  <a 
                    key={i}
                    href={link.href}
                    target={link.href.startsWith('http') ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded border border-border bg-bg text-text-primary hover:border-accent-blue hover:text-accent-blue transition-colors duration-200 group"
                  >
                    <Icon className="text-text-muted group-hover:text-accent-blue transition-colors duration-200" size={20} />
                    <span className="font-mono text-sm">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
      <Footer />
    </section>
  );
}
