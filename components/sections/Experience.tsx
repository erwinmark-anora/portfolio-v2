'use client'

import { IExperience } from '@/lib/types';
import { useState } from 'react';
import ExperienceCard from '@/components/common/ExperienceCard';
import LinkButton from '@/components/ui/LinkButton';
import Reveal from '@/components/common/Reveal';
import Link from 'next/link';
import { experience, links } from '@/content/portfolio';

const Experience: React.FunctionComponent = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-5xl mx-auto">
        <Reveal>
        <h2 className="text-5xl font-medium mb-12">
          <Link 
            href="#experiences"
            className={`text-primary-light text-7xl font-bold mr-1 hover:text-accent transition-colors duration-300 cursor-pointer ${activeSection === '#experiences' ? 'text-accent' : ''}`}
            onClick={() => {
              setActiveSection('#experiences');
            }}
          >
            #
          </Link>
          {experience.heading}
        </h2>
        </Reveal>
        <ul className="space-y-12">
          {experience.items.map((item: IExperience, index) => (
            <li key={index}>
              <Reveal>
                <ExperienceCard experience={item} />
              </Reveal>
            </li>
          ))}
        </ul>
        
        <div className="flex flex-col lg:flex-row lg:space-x-8 mt-14">
          <div className="w-60 flex-shrink-0 mb-2 font-thin lg:mb-0 uppercase">
          </div>

          <div className="flex-1">
            <Reveal>
              <LinkButton href={links.resume}>{experience.resumeLabel}</LinkButton>
              </Reveal>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Experience;
