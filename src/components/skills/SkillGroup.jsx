import React from 'react';
import Reveal from '../common/Reveal';

export default function SkillGroup({ category, skills, index }) {
  return (
    <Reveal delay={index * 70}>
      <div className="p-5 rounded-lg border border-border bg-panel h-full hover:-translate-y-1 hover:border-accent-blue/50 hover:shadow-xl hover:shadow-accent-blue/5 transition-all duration-300">
        <div className="font-mono text-text-primary mb-4 text-sm">
          <span className="text-accent-pink">"{category}"</span>: [
        </div>
        <div className="flex flex-wrap gap-2 pl-4 pr-2 border-l border-border/50 ml-2 mb-4">
          {skills.map((skill) => (
            <span 
              key={skill}
              className="px-2.5 py-1 text-xs font-mono text-text-muted border border-border rounded hover:border-accent-blue hover:text-text-primary transition-colors duration-200 cursor-default"
            >
              "{skill}"
            </span>
          ))}
        </div>
        <div className="font-mono text-text-primary text-sm">
          ]
        </div>
      </div>
    </Reveal>
  );
}
