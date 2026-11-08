'use client';

import { useEffect, useState } from 'react';
import { useMotionPreference } from '@/lib/useMotionPreference';

interface IRotatingTextProps {
  items: string[];
  interval?: number;
  className?: string;
}

// Rolls through the items: the current one slides up and blurs out while the next rises in.
// Every item sits in the same grid cell, so the box keeps the widest item's width and nothing jumps.
// Stops rolling when motion is paused or reduced. Screen readers get the full list once.
const RotatingText: React.FunctionComponent<IRotatingTextProps> = ({ items, interval = 2600, className = '' }) => {
  const [active, setActive] = useState<number>(0);
  const motionEnabled = useMotionPreference();

  useEffect(() => {
    if (!motionEnabled || items.length < 2) return;

    const timer = window.setInterval(() => setActive((i) => (i + 1) % items.length), interval);
    return () => window.clearInterval(timer);
  }, [items.length, interval, motionEnabled]);

  return (
    <span className={className}>
      <span className="sr-only">{items.join(', ')}</span>

      <span aria-hidden="true" className="inline-grid overflow-hidden py-1 align-top">
        {items.map((item, index) => {
          const position =
            index === active
              ? 'translate-y-0 opacity-100 blur-0'
              : index === (active - 1 + items.length) % items.length
                ? '-translate-y-full opacity-0 blur-sm'
                : 'translate-y-full opacity-0 blur-sm';

          return (
            <span
              key={item}
              className={`[grid-area:1/1] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${position}`}
            >
              {item}
            </span>
          );
        })}
      </span>
    </span>
  );
};

export default RotatingText;
