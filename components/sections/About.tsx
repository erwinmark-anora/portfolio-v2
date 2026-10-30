'use client'

import * as React from 'react';
import LinkButton from '../ui/LinkButton';
import { ReactTyped } from 'react-typed';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const About: React.FunctionComponent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  text-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 px-4">

        <div className="text-center lg:text-left max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase">
            Erwin Mark Añora
          </h1>

          <h2 className="text-2xl md:text-3xl mb-4 uppercase font-bold min-h-[1.5em]">
            <ReactTyped
              strings={[
                'Full-Stack Developer',
                'Laravel Developer',
                'Python / Django Developer',
                'Vue & React Developer'
              ]}
              typeSpeed={50}
              backSpeed={40}
              loop
              cursorChar="|"
              className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent"
            />
          </h2>

          <h6 className="mb-8 uppercase font-bold">
            Full-stack developer, Laravel first. 10+ years building web apps from database to deployment.
          </h6>

          <p className="text-lg leading-relaxed mb-6">
            Hi, I’m Erwin Mark, a full-stack developer with 10+ years of experience, and Laravel is my main stack. I currently build Laravel apps on contract for <span className="text-accent">@Born Malta</span> and work on Open edX learning platforms with Python, Django and React at <span className="text-accent">@Cloudswyft</span>. Before that, I built web apps with Laravel, Vue and React for teams and clients in the US, Singapore and the Philippines. I use an AI-assisted SDLC with Claude to plan, build, deploy and maintain, and I review and own all code that ships.
          </p>

          <LinkButton href="https://drive.google.com/file/d/1_zPD4x9E6y9VTcE2GIGpX-1_1Lly9WGn/view">
            Download Resume
          </LinkButton>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-6">
          <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 mt-4 text-white text-2xl">
            <a 
              href="https://github.com/solomon0918" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 ease-in-out transform hover:scale-125 hover:text-gray-300 hover:-translate-y-1"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/erwin-mark-anora/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 ease-in-out transform hover:scale-125 hover:text-blue-400 hover:-translate-y-1"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:erwinmark.anora@gmail.com"
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
