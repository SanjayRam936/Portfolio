import React from 'react';
import { ExternalLink } from 'lucide-react';
import Reveal from '../common/Reveal';

export default function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 80}>
      <a 
        href={project.link || '#'} 
        target={project.link ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className={`block p-5 rounded-lg border border-border bg-panel group transition-all duration-300 h-full flex flex-col ${project.link ? 'hover:-translate-y-1 hover:border-accent-blue/50 hover:shadow-xl hover:shadow-accent-blue/5 cursor-pointer' : 'cursor-default'}`}
      >
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display font-bold text-xl text-text-primary">
            {project.title}
          </h3>
          {project.link && (
            <ExternalLink className="w-5 h-5 text-text-dim group-hover:text-accent-blue transition-colors duration-200" />
          )}
        </div>
        
        <p className="text-text-primary font-medium text-sm mb-2">
          {project.tagline}
        </p>
        <p className="text-text-muted text-sm mb-6 flex-1">
          {project.details}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map(tech => (
            <span key={tech} className="px-2 py-1 rounded text-xs font-mono border border-border bg-bg text-text-dim">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-2 mt-auto pt-4 border-t border-border/50">
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: project.languageColor }}></div>
          <span className="text-xs font-mono text-text-dim">{project.language}</span>
        </div>
      </a>
    </Reveal>
  );
}
