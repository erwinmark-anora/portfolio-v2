'use client'

import * as React from 'react';
import LinkButton from '../ui/LinkButton';
import Link from 'next/link';

const Contact: React.FunctionComponent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-medium mb-12">
          <Link 
            href="#contact"
            className={`text-primary-light text-7xl font-bold mr-1 hover:text-accent transition-colors duration-300 cursor-pointer`}
          >
            #
          </Link>
          Let&apos;s Connect
        </h2>
        
        <div className="flex flex-col lg:flex-row lg:space-x-8 mt-14">
          <div className="w-10/12 flex-shrink-0 mb-2 font-thin lg:mb-0">
            Whether you have a question, a project idea, or just want to say hi, feel free to drop me a message. I aim to respond within 24–48 hours.
          </div>

          <div className="flex-1">
            <LinkButton href="mailto:erwinmarkanora@gmail.com" >Say Hello</LinkButton>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
