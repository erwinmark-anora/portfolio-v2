import * as React from 'react';
import LinkButton from '../ui/LinkButton';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { about, links } from '@/content/portfolio';

const socialLinks = [
  { href: links.github, label: about.socialLabels.github, icon: FaGithub },
  { href: links.linkedin, label: about.socialLabels.linkedin, icon: FaLinkedin },
];

// Hero: name, title, summary, Download Resume, Contact and social links sit above the fold
// on phone and desktop. The longer intro follows (beside it on desktop, below it on phone).
const About: React.FunctionComponent = () => {
  return (
    <div className="grid items-center gap-10 pt-10 pb-section sm:pt-16 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16 lg:py-16">
      <div>
        <h1 className="text-display font-extrabold tracking-tight">
          {about.name}
        </h1>

        <p className="mt-3 text-subheading font-semibold text-accent">
          {about.roles[0]}
        </p>

        <p className="mt-4 max-w-xl text-lead text-muted-foreground">
          {about.summary}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <LinkButton href={links.resume} variant="primary">
            {about.resumeLabel}
          </LinkButton>
          <LinkButton href="#contact" target="_self">
            {about.contactLabel}
          </LinkButton>

          <ul className="flex items-center gap-1 sm:ml-2">
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
      </div>

      <div className="glass p-card sm:p-8">
        <p className="text-body text-muted-foreground">
          {about.intro.map((segment, idx) => (
            segment.highlight
              ? <span key={idx} className="font-semibold text-accent">{segment.text}</span>
              : <React.Fragment key={idx}>{segment.text}</React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default About;
