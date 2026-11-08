'use client';

import { useEffect, useState } from 'react';

export const motionPreferenceEvent = 'portfolio-motion-change';

// Start still during hydration, then honor the system and the visitor's choice.
export function useMotionPreference() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      setEnabled(!media.matches && document.documentElement.dataset.motion !== 'paused');
    };
    update();
    media.addEventListener('change', update);
    window.addEventListener(motionPreferenceEvent, update);
    return () => {
      media.removeEventListener('change', update);
      window.removeEventListener(motionPreferenceEvent, update);
    };
  }, []);

  return enabled;
}
