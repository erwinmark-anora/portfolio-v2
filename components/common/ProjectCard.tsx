import * as React from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { IProject } from '@/lib/types';
import ProjectGallery from '@/components/common/ProjectGallery';

interface IProjectCardProps {
  project: IProject;
}

const Status: React.FunctionComponent<{ text: string }> = ({ text }) => (
  <span className="inline-block rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-label text-accent">
    {text}
  </span>
);

const Tags: React.FunctionComponent<{ items: string[] }> = ({ items }) => (
  <ul className="flex flex-wrap gap-2">
    {items.map((tech, idx) => (
      <li key={idx} className="rounded-sm border border-border bg-surface px-2 py-1 font-mono text-label text-muted-foreground">
        {tech}
      </li>
    ))}
  </ul>
);

// The featured project: bigger card with screenshot beside the text on desktop, plus highlights.
export const FeaturedProjectCard: React.FunctionComponent<IProjectCardProps> = ({ project }) => {
  return (
    <article className="glass grid gap-6 p-card lg:grid-cols-5 lg:gap-8">
      <div className="lg:col-span-3">
        <ProjectGallery project={project} sizes="(min-width: 1024px) 640px, 100vw" />
      </div>

      <div className="flex flex-col lg:col-span-2">
        {project.status && <div><Status text={project.status} /></div>}

        <h3 className="mt-3 text-heading font-bold">{project.title}</h3>
        <p className="mt-3 text-body text-muted-foreground">{project.description}</p>

        {project.highlights && (
          <ul className="mt-4 space-y-2 text-body text-muted-foreground">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="relative pl-4">
                <span aria-hidden="true" className="absolute left-0 top-[0.7rem] h-1.5 w-1.5 rounded-full bg-accent/70"></span>
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5">
          <Tags items={project.technologies} />
        </div>
      </div>
    </article>
  );
};

// A regular project: screenshot, name, one or two lines, tags, and a link when the site is live.
const ProjectCard: React.FunctionComponent<IProjectCardProps> = ({ project }) => {
  return (
    <article className="glass flex h-full flex-col p-4 transition-colors duration-300 hover:border-accent/40">
      <ProjectGallery project={project} sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw" />

      <div className="mt-4 flex flex-1 flex-col">
        {project.status && <div className="mb-2"><Status text={project.status} /></div>}

        <h3 className="text-subheading font-bold">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent focus-visible:text-accent"
            >
              {project.title}
              <ArrowTopRightOnSquareIcon aria-hidden="true" className="h-4 w-4 text-accent" />
            </a>
          ) : (
            project.title
          )}
        </h3>

        <p className="mt-2 line-clamp-2 text-small text-muted-foreground">{project.description}</p>

        <div className="mt-auto pt-4">
          <Tags items={project.technologies} />
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
