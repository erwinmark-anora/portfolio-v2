import * as React from 'react';
import LinkButton from '../ui/LinkButton';
import RotatingText from '../common/RotatingText';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { about, links } from '@/content/portfolio';

const socialLinks = [
  { href: links.github, label: about.socialLabels.github, icon: FaGithub },
  { href: links.linkedin, label: about.socialLabels.linkedin, icon: FaLinkedin },
];

// Hero: big centered name, rolling roles, summary, Download Resume, Contact and social links, all above the fold
// on phone and desktop. The longer intro follows below it.
const About: React.FunctionComponent = () => {
  return (
    <div className="pb-section">
      <div className="flex flex-col items-center justify-center py-16 text-center sm:py-24 lg:min-h-[calc(100svh-4rem)]">
        <h1 className="text-hero font-extrabold tracking-tight text-balance">
          {about.name}
        </h1>

        <RotatingText
          items={about.roles}
          className="mt-4 block text-[clamp(1.375rem,1rem+1.6vw,2.375rem)] font-semibold text-accent"
        />

        <p className="mt-5 max-w-xl text-lead text-muted-foreground text-balance">
          {about.summary}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <LinkButton href={links.resume} variant="primary">
            {about.resumeLabel}
          </LinkButton>
          <LinkButton href="#contact" target="_self">
            {about.contactLabel}
          </LinkButton>
        </div>

        <ul className="mt-6 flex items-center gap-1">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full text-2xl text-muted-foreground transition-colors duration-200 hover:bg-surface-strong hover:text-foreground"
              >
                <Icon aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* The intro as a macOS terminal window. The prompts are decoration; the paragraph is real text. */}
      <section aria-labelledby="about-heading" className="mx-auto max-w-3xl">
        <h2 id="about-heading" className="sr-only">{about.heading}</h2>

        <div className="glass overflow-hidden bg-background-raised/70 shadow-2xl">
          <div aria-hidden="true" className="relative flex h-10 items-center gap-2 border-b border-border bg-surface px-4">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]"></span>
            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]"></span>
            <span className="h-3 w-3 rounded-full bg-[#28C840]"></span>
            <span className="absolute inset-x-0 text-center font-mono text-label text-muted-foreground">erwin@portfolio: ~</span>
          </div>

          <div className="p-card font-mono text-small leading-relaxed sm:p-8 sm:text-body sm:leading-relaxed">
            <p aria-hidden="true" className="text-muted-foreground">
              <span className="text-accent">~</span> % cat about.txt
            </p>

            <p className="mt-3 text-foreground/85">
              {about.intro.map((segment, idx) => (
                segment.highlight
                  ? <span key={idx} className="text-accent">{segment.text}</span>
                  : <React.Fragment key={idx}>{segment.text}</React.Fragment>
              ))}
            </p>

            <p aria-hidden="true" className="mt-4 text-muted-foreground">
              <span className="text-accent">~</span> % <span className="inline-block h-[1.1em] w-[0.6em] translate-y-[0.2em] animate-blink bg-foreground/70"></span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
