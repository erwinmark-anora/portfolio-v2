'use client'

import * as React from 'react';
import Reveal from '@/components/common/Reveal';
import LinkButton from '../ui/LinkButton';
import Link from 'next/link';
import { contact, links } from '@/content/portfolio';

const Contact: React.FunctionComponent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-5xl mx-auto">
        <Reveal>
        <h2 className="text-5xl font-medium mb-12">
          <Link 
            href="#contact"
            className={`text-primary-light text-7xl font-bold mr-1 hover:text-accent transition-colors duration-300 cursor-pointer`}
          >
            #
          </Link>
          {contact.heading}
        </h2>
        </Reveal>
        
        <Reveal>
        <div className="flex flex-col lg:flex-row lg:space-x-8 mt-14">
          <div className="w-10/12 flex-shrink-0 mb-2 font-thin lg:mb-0">
            {contact.text}
          </div>

          <div className="flex-1">
            <LinkButton href={links.email} >{contact.buttonLabel}</LinkButton>
          </div>
        </div>
        </Reveal>
        
      </div>
    </div>
  );
};

export default Contact;
