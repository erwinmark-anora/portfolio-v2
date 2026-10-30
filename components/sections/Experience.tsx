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
        'Integrated AI-assisted development into my workflow using Claude, authoring reusable skills, workflow examples, and CLAUDE.md conventions for faster, more consistent delivery.'
      ],
      technologies: ['Laravel', 'Livewire', 'JavaScript', 'jQuery', 'Claude']
    },
    {
      title: "Front-end Developer ( Currently Full-stack )",
      company: "Cloudswyft",
      duration: "Oct 2022 - Present",
      description: [
        'Began by creating the front-end of ICEI (Indonesia Cyber Education Institute) from scratch, designing an intuitive and responsive user interface for the Learning Management System (LMS) built on the edX platform. As the project evolved, so did my role, transitioning into a full-stack position. I now work with a tech stack that includes Python, Django, and jQuery, contributing to both the front-end and back-end development.',
        'My focus is on identifying and fixing bugs, optimizing performance, and improving the overall user experience across the platform. We work collaboratively to address issues, ensuring the system functions smoothly and efficiently for users, while continuously refining its functionality and usability.',
        'In addition, I also support Cloudswyft, helping to identify and resolve software bugs and enhance system performance. Through these experiences, we’ve developed a strong, collaborative approach to development, ensuring high-quality, reliable experiences for all users.'
      ],
      technologies: ['Python', 'ReactJS', 'TailwindCSS', 'Javascript']
    },
    {
      title: "Full-stack Web Developer",
      company: "Offshorly",
      duration: "Feb 2022 - Oct 2022",
      description: [
        'Led the front-end development of Auction Tale, a web-based bidding application built with Vue.js and powered by a Laravel 9 back-end.',
        'Collaborated with stakeholders to define requirements and deliver a smooth, user-focused bidding experience.',
        'Oversaw task planning, conducted code reviews, and ensured efficient collaboration between front-end and back-end teams.',
        'Focused on building responsive, intuitive interfaces and optimizing performance for real-time bidding interactions.'
      ],
      technologies: ['Laravel', 'VueJS', 'TailwindCSS']
    },
    {
      title: "Web Developer",
      company: "California Ticket King, PC",
      workType: "( Freelance: Part-Time → Full-Time )",
      duration: "May 2018 - Jun 2022",
      description: [
        'Led development of the company’s payment portal, built with Slim PHP and jQuery, ensuring secure transaction handling and seamless integration with third-party payment gateways.',
        'Built and maintained a dynamic internal dashboard using Laravel (back-end) and VueJS (front-end), allowing staff and admins to manage customer data, transactions, and system metrics efficiently.',
        'Focused on improving performance, code maintainability, and UI responsiveness, enhancing overall user experience and operational workflow.',
        'Collaborated closely with internal teams to gather requirements, troubleshoot issues, and deploy regular feature updates.'
      ],
      technologies: ['Laravel', 'VueJS', 'Slim', 'JQuery', 'TailwindCSS']
    },
    {
      title: "Front-end Developer",
      company: "SBHE PTE LTD",
      workType: "Freelance",
      duration: "Aug 2018 - Sep 2019",
      description: [
        'Developed the front-end of a project management web application using AngularJS, focusing on user-friendly dashboards, task tracking, and real-time collaboration features.',
        'Contributed to the back-end API built with Laravel, implementing endpoints and handling data models to support the front-end’s dynamic interactions.',
        'Worked closely with the design and product teams to translate business requirements into responsive and interactive UI components.',
        'Ensured cross-browser compatibility, optimized performance, and maintained clean, modular code across both front-end and back-end layers.'
      ],
      technologies: ['Laravel', 'AngularJS']
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
