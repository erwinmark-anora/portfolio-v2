'use client'

import { useRef, useState } from 'react';
import Reveal from '@/components/common/Reveal';
import { howIWork } from '@/content/portfolio';

// A macOS-style window whose segmented control swaps the step text.
// Click and keyboard only (arrows, Home, End): no autoplay, and no motion beyond the global reduced-motion rule.
const HowIWork: React.FunctionComponent = () => {
  const steps = howIWork.steps;
  const [activeStep, setActiveStep] = useState<number>(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (index: number) => {
    const next = (index + steps.length) % steps.length;
    setActiveStep(next);
    tabRefs.current[next]?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = {
      ArrowRight: activeStep + 1,
      ArrowDown: activeStep + 1,
      ArrowLeft: activeStep - 1,
      ArrowUp: activeStep - 1,
      Home: 0,
      End: steps.length - 1,
    };
    if (e.key in keys) {
      e.preventDefault();
      select(keys[e.key]);
    }
  };

  return (
    <div>
      <Reveal>
        <h2 className="mb-10 text-heading font-bold tracking-tight">{howIWork.heading}</h2>
      </Reveal>

      <Reveal>
        <div className="glass mx-auto max-w-3xl overflow-hidden">
          {/* Title bar */}
          <div className="flex flex-col gap-3 border-b border-border bg-surface px-4 py-3 sm:flex-row sm:items-center">
            <div aria-hidden="true" className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]"></span>
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]"></span>
              <span className="h-3 w-3 rounded-full bg-[#28C840]"></span>
            </div>

            <div
              role="tablist"
              aria-label={howIWork.heading}
              onKeyDown={handleKeyDown}
              className="grid grid-cols-4 rounded-md bg-background/60 p-0.5 sm:mx-auto"
            >
              {steps.map((step, index) => {
                const isActive = activeStep === index;

                return (
                  <button
                    key={step.name}
                    ref={(el) => { tabRefs.current[index] = el; }}
                    role="tab"
                    id={`how-i-work-tab-${index}`}
                    aria-selected={isActive}
                    aria-controls={`how-i-work-panel-${index}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => select(index)}
                    className={`rounded-sm px-2 py-1.5 text-small font-semibold transition-colors duration-200 sm:px-4 ${
                      isActive
                        ? 'bg-surface-strong text-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {step.name}
                  </button>
                );
              })}
            </div>

            {/* Balances the traffic lights so the control sits centered on desktop */}
            <div aria-hidden="true" className="hidden w-[3.25rem] sm:block"></div>
          </div>

          {/* Output: every step is in the HTML (inactive ones hidden) so search engines and screen readers can read it */}
          <div className="min-h-44 p-card font-mono text-small sm:min-h-36">
            {steps.map((step, index) => (
              <div
                key={step.name}
                role="tabpanel"
                id={`how-i-work-panel-${index}`}
                aria-labelledby={`how-i-work-tab-${index}`}
                hidden={activeStep !== index}
              >
                <p className="text-accent">
                  {index + 1}/{steps.length} {step.name}
                </p>
                <p className="mt-3 text-foreground/90">{step.text}</p>
              </div>
            ))}
          </div>

          {/* Status bar: applies to every step, so it stays put while the steps swap */}
          <p className="flex items-center gap-2 border-t border-border bg-surface px-4 py-2.5 font-mono text-label text-muted-foreground">
            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span>
            {howIWork.closing}
          </p>
        </div>
      </Reveal>
    </div>
  );
};

export default HowIWork;
