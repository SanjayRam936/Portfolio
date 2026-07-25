import React from 'react';
import Reveal from './Reveal';

export default function SectionLabel({ text }) {
  return (
    <Reveal>
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-text-dim text-sm">// {text}</span>
        <div className="h-px bg-border flex-1"></div>
      </div>
    </Reveal>
  );
}
