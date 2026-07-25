import React, { useState, useEffect } from 'react';
import Reveal from '../common/Reveal';

const SEQUENCE = [
  { cmd: 'whoami', out: 'Sanjay Ram A S — full-stack developer' },
  { cmd: 'cat skills.json', out: '{ "stack": ["React", "Django REST", "Spring Boot"], "focus": ["OCR", "OpenCV", "LLM APIs"] }' },
  { cmd: './run status', out: 'open to internships & full-time roles' }
];

export default function TerminalHero() {
  const [lines, setLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCmdTyped, setCurrentCmdTyped] = useState('');
  const [currentOutTyped, setCurrentOutTyped] = useState('');
  const [phase, setPhase] = useState('cmd'); // 'cmd', 'out', 'done'
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);
    if (prefersReducedMotion) {
      setLines(SEQUENCE);
      setPhase('done');
    }
  }, []);

  useEffect(() => {
    if (reducedMotion || phase === 'done') return;

    if (currentLineIndex >= SEQUENCE.length) {
      setPhase('done');
      return;
    }

    const currentItem = SEQUENCE[currentLineIndex];

    if (phase === 'cmd') {
      if (currentCmdTyped.length < currentItem.cmd.length) {
        const timeout = setTimeout(() => {
          setCurrentCmdTyped(currentItem.cmd.slice(0, currentCmdTyped.length + 1));
        }, 45);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setPhase('out');
        }, 220);
        return () => clearTimeout(timeout);
      }
    }

    if (phase === 'out') {
      if (currentOutTyped.length < currentItem.out.length) {
        const timeout = setTimeout(() => {
          setCurrentOutTyped(currentItem.out.slice(0, currentOutTyped.length + 1));
        }, 12);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setLines(prev => [...prev, currentItem]);
          setCurrentCmdTyped('');
          setCurrentOutTyped('');
          setCurrentLineIndex(prev => prev + 1);
          setPhase('cmd');
        }, 450);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentLineIndex, currentCmdTyped, currentOutTyped, phase, reducedMotion]);

  return (
    <Reveal delay={120} className="w-full">
      <div className={`rounded-lg border border-border bg-panel overflow-hidden shadow-2xl ${!reducedMotion && 'animate-float'}`}>
        <div className="flex items-center px-4 py-3 bg-[#0D1117]/50 border-b border-border">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>
          <div className="ml-4 flex-1 text-center font-mono text-xs text-text-dim">
            sanjay@dev: ~/portfolio
          </div>
        </div>
        
        <div className="p-5 font-mono text-sm sm:text-base whitespace-pre-wrap break-all min-h-[220px]">
          {lines.map((line, i) => (
            <div key={i} className="mb-4">
              <div className="text-text-primary">
                <span className="text-accent-green mr-2">sanjay@dev:~$</span>
                {line.cmd}
              </div>
              <div className="text-text-muted mt-1">{line.out}</div>
            </div>
          ))}

          {phase !== 'done' && (
            <div className="mb-4">
              <div className="text-text-primary flex flex-wrap items-center">
                <span className="text-accent-green mr-2">sanjay@dev:~$</span>
                <span>{currentCmdTyped}</span>
                {phase === 'cmd' && <span className="inline-block w-[7px] h-[15px] bg-accent-green ml-[1px] animate-pulse" style={{animationDuration: '1s'}}></span>}
              </div>
              {phase === 'out' && (
                <div className="text-text-muted mt-1 flex flex-wrap items-center">
                  <span>{currentOutTyped}</span>
                  <span className="inline-block w-[7px] h-[15px] bg-text-muted ml-[1px] animate-pulse" style={{animationDuration: '1s'}}></span>
                </div>
              )}
            </div>
          )}

          {phase === 'done' && (
             <div className="text-text-primary flex items-center mt-4">
               <span className="text-accent-green mr-2">sanjay@dev:~$</span>
               <span className="inline-block w-[7px] h-[15px] bg-accent-green ml-[1px] animate-pulse" style={{animationDuration: '1s'}}></span>
             </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}
