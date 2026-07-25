import React from 'react';
import SectionLabel from '../components/common/SectionLabel';
import Reveal from '../components/common/Reveal';
import SkillGroup from '../components/skills/SkillGroup';
import { SKILLS } from '../data/skills';

export default function SkillsSection() {
  const categories = Object.keys(SKILLS);

  return (
    <section id="skills" className="py-24 border-t border-border">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionLabel text="skills" />
        <Reveal delay={70}>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary mb-2">
            skills.json
          </h2>
          <p className="text-text-muted text-lg mb-12">
            The tools and technologies I use to build things.
          </p>
        </Reveal>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <SkillGroup key={cat} category={cat} skills={SKILLS[cat]} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
