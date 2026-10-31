import * as React from 'react';
import Reveal from '@/components/common/Reveal';
import LinkButton from '../ui/LinkButton';
import { contact, links } from '@/content/portfolio';

// Email only: the site has no working contact form.
const Contact: React.FunctionComponent = () => {
  return (
    <Reveal>
      <div className="glass mx-auto max-w-3xl p-card text-center sm:p-10">
        <h2 className="text-heading font-bold tracking-tight">{contact.heading}</h2>

        <p className="mx-auto mt-4 max-w-xl text-lead text-muted-foreground">
          {contact.text}
        </p>

        <div className="mt-8">
          <LinkButton href={links.email} target="_self" variant="primary">
            {contact.buttonLabel}
          </LinkButton>
        </div>
      </div>
    </Reveal>
  );
};

export default Contact;
