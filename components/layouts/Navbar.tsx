'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { INavItem } from '@/lib/types';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar: React.FunctionComponent = () => {
  const navigationItems: INavItem[] = useMemo(() => [
    { href: '#about', label: 'About' },
    { href: '#experiences', label: 'Experiences' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ], []);

  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const currentHash = window.location.hash;
    setActiveSection(currentHash || null);
    
    const handleHashChange = () => {
      setActiveSection(window.location.hash || null);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          setIsScrolled(scrollTop > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navbarHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setTimeout(() => {
        window.history.pushState(null, '', href);
        setActiveSection(href);
      }, 100);
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`
        sticky top-0 z-30 transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'bg-primary/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-primary py-4'
        }
      `}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center group" 
              onClick={() => setActiveSection(null)}
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={isScrolled ? 55 : 65}
                height={isScrolled ? 55 : 65}
                className="rounded-full transition-all duration-300 ease-in-out group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8 md:space-x-12 items-center">
            {navigationItems.map((item: INavItem) => {
              const isActive = activeSection === item.href;
              
              return (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className={`
                      transition-all duration-300 font-medium relative group block
                      ${isActive
                        ? 'text-accent'
                        : 'text-white hover:text-accent'
                      }
                    `}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {isActive ? (
                      <div className='flex items-center justify-center gap-1'> 
                        <span className="text-2xl text-accent font-bold">
                          #
                        </span>
                        {item.label}
                      </div>
                    ) : (
                      <>
                        {item.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-accent transition-all duration-300 group-hover:w-full"></span>
                      </>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button className='md:hidden mobile-menu-button' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-9 w-9" />
            ) : (
              <Bars3Icon className="h-9 w-9" />
            )}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className='fixed inset-0 z-40 md:hidden'>
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
      )}

      <div className={`
        mobile-menu fixed top-0 right-0 h-full w-80 max-w-sm bg-primary border-l border-gray-700 z-50 transform transition-transform duration-300 ease-in-out md:hidden
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="ml-3 text-white font-semibold text-lg"></span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg text-white hover:text-accent hover:bg-white/10 transition-colors duration-200"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-6">
              {navigationItems.map((item: INavItem, index) => {
                const isActive = activeSection === item.href;
                
                return (
                  <li 
                    key={item.href}
                    className="transform transition-all duration-300"
                    style={{
                      transitionDelay: `${index * 100}ms`, // ✅ Staggered animation
                    }}
                  >
                    <Link 
                      href={item.href}
                      className={`
                        flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 group
                        ${isActive
                          ? 'bg-accent/20 text-accent border-l-4 border-accent'
                          : 'text-white hover:text-accent hover:bg-white/10'
                        }
                      `}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      <span className={`
                        text-2xl font-bold transition-all duration-300
                        ${isActive ? 'text-accent' : 'text-gray-400 group-hover:text-accent'}
                      `}>
                        #
                      </span>
                      <span className="text-lg font-medium">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
