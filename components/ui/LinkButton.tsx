import * as React from 'react';

interface ILinkButtonProps {
  children: React.ReactNode;
  href: string;
  target?: string;
  variant?: 'primary' | 'secondary' | 'link';
  className?: string;
}

const LinkButton: React.FunctionComponent<ILinkButtonProps> = ({ 
  children, 
  href, 
  target = "_blank",
  variant = 'secondary',
  className,
}) => {
  return (
    <a 
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={`btn-base btn-${variant} ${className || ''}`}
    >
      {children}
    </a>
  );
};

export default LinkButton;