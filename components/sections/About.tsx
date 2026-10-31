'use client'

import * as React from 'react';
import LinkButton from '../ui/LinkButton';
import { ReactTyped } from 'react-typed';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { about, links } from '@/content/portfolio';

const About: React.FunctionComponent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  text-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 px-4">

        <div className="text-center lg:text-left max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase">
            {about.name}
          </h1>

          <h2 className="text-2xl md:text-3xl mb-4 uppercase font-bold min-h-[1.5em]">
            <ReactTyped
              strings={about.roles}
              typeSpeed={50}
              backSpeed={40}
              loop
              cursorChar="|"
              className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent"
            />
          </h2>

          <h6 className="mb-8 uppercase font-bold">
            {about.summary}
          </h6>

          <p className="text-lg leading-relaxed mb-6">
            {about.intro.map((segment, idx) => (
              segment.highlight
                ? <span key={idx} className="text-accent">{segment.text}</span>
                : <React.Fragment key={idx}>{segment.text}</React.Fragment>
            ))}
          </p>

          <LinkButton href={links.resume}>
            {about.resumeLabel}
          </LinkButton>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-6">
          <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 mt-4 text-white text-2xl">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 ease-in-out transform hover:scale-125 hover:text-gray-300 hover:-translate-y-1"
            >
              <FaGithub />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 ease-in-out transform hover:scale-125 hover:text-blue-400 hover:-translate-y-1"
            >
              <FaLinkedin />
            </a>
            <a
              href={links.email}
              className="transition-all duration-300 ease-in-out transform hover:scale-125 hover:text-gray-300 hover:-translate-y-1"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
