import React from 'react';
import Reveal from '../common/Reveal';

export default function HackathonBadges({ hackathons }) {
  return (
    <Reveal delay={300}>
      <div className="p-5 mt-4 rounded-lg border border-border bg-panel flex flex-col sm:flex-row sm:items-center gap-4 hover:-translate-y-1 hover:border-accent-blue/50 transition-all duration-300">
        <div className="font-display font-bold text-text-primary whitespace-nowrap">
          Hackathon Circuit:
        </div>
        <div className="flex flex-wrap gap-2">
          {hackathons.map((name, i) => (
            <span key={i} className="px-3 py-1 text-xs font-mono font-medium rounded-full border border-accent-amber/30 text-accent-amber bg-accent-amber/5">
              {name}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
