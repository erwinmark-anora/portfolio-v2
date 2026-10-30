import * as React from 'react';
import Badge from '@/components/ui/Badge';
import { IExperience } from '@/lib/types';

interface IExperienceCardProps {
  experience: IExperience
}

const ExperienceCard: React.FunctionComponent<IExperienceCardProps> = ({ experience }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8">
      <div className="w-60 flex-shrink-0 mb-2 font-thin lg:mb-0 uppercase">
        {experience.duration}
      </div>

      <div className="flex-1">
        <div className="flex flex-col lg:flex-row space-x-2 align-baseline items-start">
          <h6 className="font-normal text-xl">{experience.title}</h6>
          <span className="text-primary-light text-xl mt-1 lg:mt-0">@{experience.company}</span>
        </div>

        {experience.workType && (
          <p className="mt-1 text-sm font-thin uppercase">{experience.workType}</p>
        )}

        <ul className="mt-3 space-y-2">
          {experience.description.map((desc, idx) => (
            <li key={idx} className="text-lg relative pl-5">
              <span className="absolute left-0 top-2 w-2 h-2 bg-white rounded-full"></span>
              {desc}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-6 mt-4">
          {experience.technologies.map((tech, idx) => (
            <Badge key={idx} text={tech} />
          ))}
        </div>
      </div>
    </div>
  )
};

export default ExperienceCard;