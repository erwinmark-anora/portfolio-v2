'use client'

import * as React from 'react';
import LinkButton from '../ui/LinkButton';
import { ReactTyped } from 'react-typed';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

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
                'Full Stack Developer',
                'Vue Developer',
                'React Developer',
                'Laravel Developer',
                'TailwindCSS Enthusiast',
                'UI/UX Enthusiast'
              ]}
              typeSpeed={50}
              backSpeed={40}
              loop
              cursorChar="|"
              className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent"
            />
          </h2>

          <h6 className="mb-8 uppercase font-bold">
            Building dashboards and tools with a focus on clean UI and solid architecture.
          </h6>

          <p className="text-lg leading-relaxed mb-6">
            Hi, I’m Erwin Mark, a full stack developer currently working <span className="text-accent">@Cloudswyft</span> where I develop scalable LMS (Learning Management System) applications using Python and React. I have a solid background in Laravel for back-end development, along with experience in Vue.js and other modern front-end frameworks. Known for strong communication and collaboration, I work closely with teams and stakeholders to deliver clean, responsive, and reliable web solutions. I’m always eager to learn, adapt, and stay current with the latest technologies.
          </p>

          <LinkButton href="https://drive.google.com/file/d/1_zPD4x9E6y9VTcE2GIGpX-1_1Lly9WGn/view">
            Download Resume
          </LinkButton>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-6">
          <div className="flex lg:flex-col space-x-4 space-y-4 mt-4 text-white text-2xl">
            <a href="https://github.com/solomon0918" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/erwin-mark-anora/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/erwin.mark.75" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/nuevosapientum/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
