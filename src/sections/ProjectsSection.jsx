import React from 'react';
import SectionLabel from '../components/common/SectionLabel';
import Reveal from '../components/common/Reveal';
import ProjectCard from '../components/projects/ProjectCard';
import { PROJECTS } from '../data/projects';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionLabel text="projects" />
        <Reveal delay={70}>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary mb-2">
            Things I've built
          </h2>
          <p className="text-text-muted text-lg mb-12">
            A selection of my recent work in web development and AI.
          </p>
        </Reveal>
        
        <div className="grid sm:grid-cols-2 gap-5">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
