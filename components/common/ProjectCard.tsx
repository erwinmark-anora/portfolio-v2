'use client'

import { IProject } from '@/lib/types';
import * as React from 'react';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import LinkButton from '../ui/LinkButton';

interface IProjectCardProps {
  project: IProject;
}

const ProjectCard: React.FunctionComponent<IProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8 py-6 items-center ">
      <div className="lg:w-130 flex-shrink-0 mb-6 lg:mb-0">
        <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              width={440}
              height={260}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <div className="text-center">
                <div className="text-4xl mb-2">🖼️</div>
                <p className="text-sm">Project Image</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1">
        <div className="flex space-x-2 items-center">
          <h6 className=" font-normal text-xl">{project.title}</h6>
          {project.link && (
            <LinkButton href={project.link} variant='link' className='px-0'>
              <ArrowTopRightOnSquareIcon className="h-5 w-5 text-white hover:text-accent" />
            </LinkButton>
          )}
        </div>

        <p>{project.description}</p>

        <div className="flex flex-wrap gap-6 mt-4">
          {project.technologies.map((tech, idx) => (
            <Badge key={idx} text={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
