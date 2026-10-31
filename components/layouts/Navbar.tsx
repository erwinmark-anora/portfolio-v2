'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { INavItem } from '@/lib/types';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { navigationItems, site } from '@/content/portfolio';

const Navbar: React.FunctionComponent = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Highlight the link of the section currently in the middle of the viewport.
  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -55% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with Escape, and when the screen grows past the phone layout.
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 64rem)');
    const handleResize = () => {
      if (desktop.matches) setIsMobileMenuOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    desktop.addEventListener('change', handleResize);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      desktop.removeEventListener('change', handleResize);
    };
  }, [isMobileMenuOpen]);

  const linkClass = (href: string) =>
    activeSection === href
      ? 'text-accent bg-accent-soft'
      : 'text-muted-foreground hover:text-foreground hover:bg-surface-strong';

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/70 backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-gutter">
        <Link
          href="#about"
          className="flex items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt={site.name}
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navigationItems.map((item: INavItem) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={activeSection === item.href ? 'true' : undefined}
                className={`block rounded-md px-3 py-1.5 text-small font-medium transition-colors duration-200 ${linkClass(item.href)}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden -mr-2 rounded-md p-2 text-foreground hover:bg-surface-strong"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu: a simple panel that drops below the header */}
      <div
        id="mobile-menu"
        hidden={!isMobileMenuOpen}
        className="lg:hidden border-t border-border"
      >
        <ul className="mx-auto max-w-content px-gutter py-3">
          {navigationItems.map((item: INavItem) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={activeSection === item.href ? 'true' : undefined}
                className={`block rounded-md px-3 py-3 text-body font-medium transition-colors duration-200 ${linkClass(item.href)}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
