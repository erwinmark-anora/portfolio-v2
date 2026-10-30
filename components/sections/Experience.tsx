'use client'

import { IExperience } from '@/lib/types';
import { useMemo, useState } from 'react';
import ExperienceCard from '@/components/common/ExperienceCard';
import LinkButton from '@/components/ui/LinkButton';
import Link from 'next/link';

const Experience: React.FunctionComponent = () => {
  const experiences: IExperience[] = useMemo(() => [
    {
      title: "Full-Stack Developer",
      company: "Born Malta (via Webee)",
      workType: "Contract · Concurrent role",
      duration: "Sep 2025 - Present",
      description: [
        'Own end-to-end development of a social-services / benefits web application using Laravel and JavaScript/jQuery, from feature design through deployment.',
        'Work across four concurrent team projects, contributing to and unblocking multiple Laravel codebases beyond primary ownership, including an internal license-management system built with Laravel and Livewire.',
        'Integrated AI-assisted development into my workflow using Claude Code, authoring reusable skills, workflow examples, and CLAUDE.md conventions for faster, more consistent delivery.'
      ],
      technologies: ['Laravel', 'Livewire', 'JavaScript', 'jQuery', 'Claude Code']
    },
    {
      title: "Senior Full-Stack Engineer",
      company: "Cloudswyft Global Systems",
      workType: "Concurrent role",
      duration: "Oct 2022 - Present",
      description: [
        'Built the front-end of ICEI\'s Open edX learning platform, which served 30,000+ active learners.',
        'Sole developer of Cloudswyft\'s own learning platform (Open edX Sumac, Python/Django, React micro-frontends), currently in development, using an AI-assisted SDLC with Claude Code; supervise 4–5 interns building features for it.',
        'Maintained ICEI\'s production platform: fixed client-reported issues across the Python/Django and React codebases and resolved Xendit payment and enrollment edge cases, working with DevOps.'
      ],
      technologies: ['Open edX', 'Python', 'Django', 'React', 'Xendit', 'Claude Code']
    },
    {
      title: "Full-Stack Developer",
      company: "Offshorly",
      duration: "Feb 2022 - Oct 2022",
      description: [
        'Led development of AuctionTale, a real-time bidding platform (Vue, Laravel 9), from build to MVP launch.',
        'Led a remote team of 4 developers (2 back-end, 2 front-end) as full-stack lead: planned tasks, reviewed code, and set code-review standards.'
      ],
      technologies: ['Laravel', 'Vue']
    },
    {
      title: "Independent Full-Stack Contractor",
      company: "Self-employed",
      workType: "Freelance / Contract",
      duration: "2018 - 2023",
      description: [
        'Built web applications for 5 clients in the US, Singapore and the Philippines (Laravel, Vue, React).',
        'Built California Ticket King\'s (US) Stripe payment portal in Slim PHP and jQuery, plus a Laravel/Vue internal dashboard for customer and transaction management.',
        'Built the AngularJS front-end of SBHE\'s (Singapore) project-management app and contributed to its Laravel APIs.'
      ],
      technologies: ['Laravel', 'Vue', 'React', 'Slim PHP', 'jQuery', 'Stripe', 'AngularJS']
    },
  ], []); 

  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-5xl mx-auto">
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
          Experiences
        </h2>
        <ul className="space-y-12">
          {experiences.map((item: IExperience, index) => (
            <li key={index}>
              <ExperienceCard experience={item}  />
            </li>
          ))}
        </ul>
        
        <div className="flex flex-col lg:flex-row lg:space-x-8 mt-14">
          <div className="w-60 flex-shrink-0 mb-2 font-thin lg:mb-0 uppercase">
          </div>

          <div className="flex-1">
            <LinkButton href="https://drive.google.com/file/d/1_zPD4x9E6y9VTcE2GIGpX-1_1Lly9WGn/view">View Full Resume</LinkButton>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Experience;
