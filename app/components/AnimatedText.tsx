'use client';

import { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AnimatedText({ text, className = '', delay = 0 }: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Detect user's motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes to motion preference
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    // If user prefers reduced motion, show text immediately
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    // Otherwise, animate with delay
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay, prefersReducedMotion]);

  return (
    <span
      className={`inline-block ${
        prefersReducedMotion
          ? 'opacity-100 translate-y-0'
          : `transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4 invisible'
            }`
      } ${className}`}
      style={{ minHeight: isVisible ? 'auto' : '1em' }}
    >
      {text}
    </span>
  );
}
