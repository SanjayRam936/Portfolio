import React from 'react';
import SectionLabel from '../components/common/SectionLabel';
import Reveal from '../components/common/Reveal';
import TimelineItem from '../components/experience/TimelineItem';
import HackathonBadges from '../components/experience/HackathonBadges';
import { EXPERIENCE_TIMELINE, HACKATHONS } from '../data/experience';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 border-t border-border">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionLabel text="experience" />
        <Reveal delay={70}>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary mb-2">
            Timeline
          </h2>
          <p className="text-text-muted text-lg mb-12">
            Education, certifications, and events.
          </p>
        </Reveal>
        
        <div className="flex flex-col">
          {EXPERIENCE_TIMELINE.map((item, i) => (
            <TimelineItem 
              key={i} 
              item={item} 
              index={i} 
              isLast={i === EXPERIENCE_TIMELINE.length - 1} 
            />
          ))}
        </div>
        
        <HackathonBadges hackathons={HACKATHONS} />
      </div>
    </section>
  );
}
