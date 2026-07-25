import React from 'react';
import Reveal from '../common/Reveal';

export default function TimelineItem({ item, index, isLast }) {
  const Icon = item.icon;
  
  return (
    <div className="flex gap-4 relative">
      {!isLast && (
        <div className="absolute top-10 bottom-[-32px] left-5 w-px bg-border"></div>
      )}
      
      <Reveal delay={index * 70} className="relative z-10 flex-shrink-0 mt-1">
        <div className="w-10 h-10 rounded-full border border-border bg-panel flex items-center justify-center text-text-muted">
          <Icon size={18} />
        </div>
      </Reveal>
      
      <Reveal delay={index * 70 + 40} className="pb-8">
        <div className="text-accent-green font-mono text-sm mb-1">{item.date}</div>
        <h3 className="text-text-primary font-display font-bold text-xl mb-1">{item.title}</h3>
        <p className="text-text-muted">{item.body}</p>
      </Reveal>
    </div>
  );
}
