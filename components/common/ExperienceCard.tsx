import * as React from 'react';
import { IExperience } from '@/lib/types';

interface IExperienceCardProps {
  experience: IExperience
}

const ExperienceCard: React.FunctionComponent<IExperienceCardProps> = ({ experience }) => {
  return (
    <article className="glass h-full p-card">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-label">
        <span className="text-muted-foreground">{experience.duration}</span>
        {experience.workType && (
          <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-accent">
            {experience.workType}
          </span>
        )}
      </div>

      <h3 className="mt-3 text-subheading font-bold">{experience.title}</h3>
      <p className="font-semibold text-accent">{experience.company}</p>

      <ul className="mt-4 space-y-2 text-body text-muted-foreground">
        {experience.description.map((desc, idx) => (
          <li key={idx} className="relative pl-4">
            <span aria-hidden="true" className="absolute left-0 top-[0.7rem] h-1.5 w-1.5 rounded-full bg-accent/70"></span>
            {desc}
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2">
        {experience.technologies.map((tech, idx) => (
          <li key={idx} className="rounded-sm border border-border bg-surface px-2 py-1 font-mono text-label text-muted-foreground">
            {tech}
          </li>
        ))}
      </ul>
    </article>
  )
};

export default ExperienceCard;
