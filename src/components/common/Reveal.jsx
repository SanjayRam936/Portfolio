import React from 'react';
import { useReveal } from '../../hooks/useReveal';

export default function Reveal({ children, delay = 0, threshold = 0.15, className = '' }) {
  const { ref, revealed } = useReveal(threshold);
  
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  );
}
