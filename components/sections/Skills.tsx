'use client'

import { ISkillGroup } from '@/lib/types';
import { useInView } from '@/lib/useInView';
import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Reveal from '@/components/common/Reveal';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { FaGraduationCap } from 'react-icons/fa';
import {
  SiLaravel, SiLivewire, SiFilament, SiPhp, SiPython, SiDjango, SiPostgresql, SiMysql,
  SiVuedotjs, SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiHtml5, SiCss3,
  SiGithubactions, SiDocker, SiGit, SiGithub, SiGitlab, SiBitbucket,
  SiStripe, SiXendit, SiClaude, SiPostman, SiFigma,
} from 'react-icons/si';

const AUTOPLAY_DELAY = 4000;

const Skills: React.FunctionComponent = () => {
  // color = official brand color; white for black logos (Next.js, GitHub), as on their dark-mode logos
  const skillGroups: ISkillGroup[] = useMemo(() => [
    {
      group: "Back-end",
      skills: [
        { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
        { name: 'Livewire', icon: SiLivewire, color: '#FB70A9' },
        { name: 'Filament', icon: SiFilament, color: '#FDAE4B' },
        { name: 'PHP', icon: SiPhp, color: '#777BB4' },
        { name: 'Python', icon: SiPython, color: '#FFD43B' },
        { name: 'Django', icon: SiDjango, color: '#44B78B' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      ]
    },
    {
      group: "Front-end",
      skills: [
        { name: 'Vue', icon: SiVuedotjs, color: '#4FC08D' },
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS', icon: SiCss3, color: '#1572B6' },
      ]
    },
    {
      group: "DevOps",
      skills: [
        { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
        { name: 'GitLab', icon: SiGitlab, color: '#FC6D26' },
        { name: 'Bitbucket', icon: SiBitbucket, color: '#2684FF' },
      ]
    },
    {
      group: "Platforms",
      skills: [
        { name: 'Open edX', icon: FaGraduationCap, color: '#FFFFFF' },
        { name: 'Stripe', icon: SiStripe, color: '#635BFF' },
        { name: 'Xendit', icon: SiXendit, color: '#4573FF' },
        { name: 'AI-assisted SDLC (Claude Code)', icon: SiClaude, color: '#D97757' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      ]
    },
  ], []);

  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const touchStartX = useRef<number | null>(null);
  const [sectionRef, isInView] = useInView<HTMLDivElement>();

  // Auto-advance every few seconds while on screen; pauses on hover/touch and skips for reduced-motion users.
  // Depends on activeTab so a manual tab change restarts the timer.
  useEffect(() => {
    if (!isInView || isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = setTimeout(() => {
      setActiveTab((prev) => (prev + 1) % skillGroups.length);
    }, AUTOPLAY_DELAY);

    return () => clearTimeout(timer);
  }, [activeTab, isInView, isPaused, skillGroups.length]);

  const goTo = (index: number) => {
    setActiveTab((index + skillGroups.length) % skillGroups.length);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const distance = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(distance) > 50) {
      goTo(activeTab + (distance < 0 ? 1 : -1));
    }
    touchStartX.current = null;
  };

  return (
    <div ref={sectionRef} className="flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full">
        <Reveal>
        <h2 className="text-5xl font-medium mb-12">
          <Link
            href="#skills"
            className={`text-primary-light text-7xl font-bold mr-1 hover:text-accent transition-colors duration-300 cursor-pointer ${activeSection === '#skills' ? 'text-accent' : ''}`}
            onClick={() => {
              setActiveSection('#skills');
            }}
          >
            #
          </Link>
          Skills
        </h2>
        </Reveal>

        <Reveal delay={100}>
        {/* Tabs */}
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => goTo(activeTab - 1)}
            aria-label="Previous skill group"
            className="hidden sm:flex p-2 rounded-full border border-accent/30 text-accent hover:bg-accent hover:text-primary transition-colors duration-300"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>

          <div role="tablist" aria-label="Skill groups" className="flex flex-wrap gap-2 sm:gap-3">
            {skillGroups.map((item: ISkillGroup, index) => {
              const isActive = activeTab === index;

              return (
                <button
                  key={item.group}
                  role="tab"
                  id={`skills-tab-${index}`}
                  aria-selected={isActive}
                  aria-controls={`skills-panel-${index}`}
                  onClick={() => goTo(index)}
                  className={`
                    px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-medium uppercase transition-all duration-300
                    ${isActive
                      ? 'bg-accent text-primary shadow-lg shadow-accent/25'
                      : 'border border-accent/30 text-white hover:text-accent hover:border-accent'
                    }
                  `}
                >
                  {item.group}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => goTo(activeTab + 1)}
            aria-label="Next skill group"
            className="hidden sm:flex p-2 rounded-full border border-accent/30 text-accent hover:bg-accent hover:text-primary transition-colors duration-300"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Sliding panels */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; setIsPaused(true); }}
          onTouchEnd={(e) => { handleTouchEnd(e); setIsPaused(false); }}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeTab * 100}%)` }}
          >
            {skillGroups.map((item: ISkillGroup, index) => (
              <div
                key={item.group}
                role="tabpanel"
                id={`skills-panel-${index}`}
                aria-labelledby={`skills-tab-${index}`}
                aria-hidden={activeTab !== index}
                className="w-full flex-shrink-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-1"
              >
                {item.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      style={{ '--brand': skill.color } as React.CSSProperties}
                      className="group flex flex-col items-center justify-center gap-3 p-5 rounded-xl border border-white/10 bg-white/5 text-center cursor-default transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand)] hover:bg-white/10"
                    >
                      <Icon className="text-4xl text-[var(--brand)] transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-sm sm:text-base font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {skillGroups.map((item: ISkillGroup, index) => (
            <button
              key={item.group}
              onClick={() => goTo(index)}
              aria-label={`Show ${item.group}`}
              className={`h-2 rounded-full transition-all duration-300 ${activeTab === index ? 'w-8 bg-accent' : 'w-2 bg-white/30 hover:bg-white/60'}`}
            />
          ))}
        </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Skills;
