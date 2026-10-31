'use client'

import * as React from 'react';
import { useInView } from '@/lib/useInView';

interface IRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

// Fades and slides content up the first time it scrolls into view. Off for reduced-motion users.
const Reveal: React.FunctionComponent<IRevealProps> = ({ children, delay = 0, className = '' }) => {
  const [ref, isInView] = useInView<HTMLDivElement>({ once: true, rootMargin: '0px 0px -10% 0px' });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: isInView ? `${delay}ms` : '0ms' }}
      className={`
        transition-all duration-700 ease-out
        motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Reveal;
