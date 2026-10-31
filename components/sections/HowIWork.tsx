'use client'

import { useState } from 'react';
import Link from 'next/link';
import Reveal from '@/components/common/Reveal';
import { howIWork } from '@/content/portfolio';

const HowIWork: React.FunctionComponent = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full">
        <Reveal>
        <h2 className="text-5xl font-medium mb-12">
          <Link
            href="#how-i-work"
            className={`text-primary-light text-7xl font-bold mr-1 hover:text-accent transition-colors duration-300 cursor-pointer ${activeSection === '#how-i-work' ? 'text-accent' : ''}`}
            onClick={() => {
              setActiveSection('#how-i-work');
            }}
          >
            #
          </Link>
          {howIWork.heading}
        </h2>
        </Reveal>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {howIWork.steps.map((step, index) => (
            <li key={step.name}>
              <Reveal delay={index * 100} className="h-full">
                <div className="h-full p-5 rounded-xl border border-white/10 bg-white/5">
                  <p className="text-accent text-sm font-medium uppercase mb-2">
                    {index + 1}. {step.name}
                  </p>
                  <p className="text-sm sm:text-base">{step.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={400}>
        <p className="mt-8 text-lg font-medium">{howIWork.closing}</p>
        </Reveal>
      </div>
    </div>
  );
};

export default HowIWork;
