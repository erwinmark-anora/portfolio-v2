import * as React from 'react';

interface IBadgeProps {
  text: string;
  variant?: 'default' | 'tech' | 'skill';
}

const Badge: React.FunctionComponent<IBadgeProps> = ({ 
  text, 
}) => {
  return (
    <span className={`
      inline-block px-3 py-1 text-sm font-medium rounded-full
      transition-all duration-300 ease-in-out transform cursor-default
      border border-accent/30 text-accent bg-accent/10
      hover:scale-110 hover:bg-accent hover:text-primary hover:shadow-lg hover:shadow-accent/25
    `}>
      {text}
    </span>
  );
};

export default Badge;