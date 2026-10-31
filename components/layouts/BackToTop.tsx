'use client';

import { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

// Floating button that appears once the hero is scrolled past and takes the reader back to the top.
// Smooth scrolling comes from the html rule, so it is instant when "reduce motion" is on.
const BackToTop: React.FunctionComponent = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > window.innerHeight);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
    // The button hides at the top, so hand keyboard focus to the header logo instead of losing it.
    document.querySelector<HTMLElement>('header a')?.focus({ preventScroll: true });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      className={`glass fixed right-4 bottom-4 z-40 flex h-11 w-11 items-center justify-center rounded-full! text-foreground transition-all duration-300 hover:text-accent sm:right-6 sm:bottom-6 ${
        isVisible ? 'translate-y-0 opacity-100' : 'invisible translate-y-3 opacity-0'
      }`}
    >
      <ArrowUpIcon aria-hidden="true" className="h-5 w-5" />
    </button>
  );
};

export default BackToTop;
