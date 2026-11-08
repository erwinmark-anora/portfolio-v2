'use client';

import { useEffect, useRef } from 'react';
import { PauseIcon, PlayIcon } from '@heroicons/react/16/solid';
import { BuildingSketch, FloorPlan } from '@/components/common/ArchitecturalSketch';
import { motionPreferenceEvent, useMotionPreference } from '@/lib/useMotionPreference';

export default function Wallpaper() {
  const ref = useRef<HTMLDivElement>(null);
  const motionEnabled = useMotionPreference();

  useEffect(() => {
    const element = ref.current;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!element || !motionEnabled || !finePointer.matches) return;

    let frame = 0;
    const move = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        element.style.setProperty('--pointer-x', `${event.clientX}px`);
        element.style.setProperty('--pointer-y', `${event.clientY}px`);
        element.style.setProperty('--sketch-x', `${(event.clientX / window.innerWidth - 0.5) * 20}px`);
        element.style.setProperty('--sketch-y', `${(event.clientY / window.innerHeight - 0.5) * 16}px`);
      });
    };
    const reset = () => {
      cancelAnimationFrame(frame);
      element.style.removeProperty('--pointer-x');
      element.style.removeProperty('--pointer-y');
      element.style.removeProperty('--sketch-x');
      element.style.removeProperty('--sketch-y');
    };

    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', reset);
    return () => {
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', reset);
      reset();
    };
  }, [motionEnabled]);

  const toggleMotion = () => {
    document.documentElement.dataset.motion = motionEnabled ? 'paused' : 'active';
    window.dispatchEvent(new Event(motionPreferenceEvent));
  };

  return (
    <>
      <div ref={ref} aria-hidden="true" className="architectural-wallpaper pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="drafting-grid absolute inset-0" />
        <div className="sketch-parallax absolute inset-0">
          <div className="building-position"><BuildingSketch /></div>
          <div className="plan-position"><FloorPlan /></div>
        </div>
        <div className="drafting-light absolute inset-0" />
        <div className="drafting-grain absolute inset-0" />
      </div>
      <button
        type="button"
        onClick={toggleMotion}
        aria-label={motionEnabled ? 'Pause decorative motion' : 'Resume decorative motion'}
        className="motion-toggle fixed bottom-5 left-4 z-20 flex items-center gap-2 rounded-full border border-border bg-background/85 px-3 py-2 font-mono text-[10px] text-muted-foreground backdrop-blur-md transition-colors hover:border-accent/40 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:left-6"
      >
        {motionEnabled ? <PauseIcon className="h-3 w-3" /> : <PlayIcon className="h-3 w-3" />}
        <span>{motionEnabled ? 'Pause motion' : 'Resume motion'}</span>
      </button>
    </>
  );
}
