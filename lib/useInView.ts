'use client'

import { RefObject, useEffect, useRef, useState } from 'react';

interface IUseInViewOptions {
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
}

// Tracks whether an element is on screen. With once, it stays true after the first time.
export function useInView<T extends Element>({
  once = false,
  threshold = 0.15,
  rootMargin = '0px',
}: IUseInViewOptions = {}): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
      if (entry.isIntersecting && once) {
        observer.disconnect();
      }
    }, { threshold, rootMargin });

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, threshold, rootMargin]);

  return [ref, isInView];
}
