'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface UseScrambledTextOptions {
  text: string;
  duration?: number;
  characterSet?: string;
  delay?: number;
}

const DEFAULT_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';

export function useScrambledText({
  text,
  duration = 1500,
  characterSet = DEFAULT_CHARS,
  delay = 0,
}: UseScrambledTextOptions) {
  const [displayText, setDisplayText] = useState(text);
  const rafRef = useRef<number>();
  const startTimeRef = useRef<number>();

  const scrambleChar = useCallback(() => {
    return characterSet[Math.floor(Math.random() * characterSet.length)];
  }, [characterSet]);

  const animate = useCallback(() => {
    if (!startTimeRef.current) {
      startTimeRef.current = performance.now();
    }

    const elapsed = performance.now() - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);

    const revealedCount = Math.floor(progress * text.length);

    let newText = '';
    for (let i = 0; i < text.length; i++) {
      if (i < revealedCount) {
        newText += text[i];
      } else if (text[i] === ' ') {
        newText += ' ';
      } else {
        newText += scrambleChar();
      }
    }

    setDisplayText(newText);

    if (progress < 1) {
      rafRef.current = requestAnimationFrame(animate);
    } else {
      setDisplayText(text);
    }
  }, [text, duration, scrambleChar]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setDisplayText(text);
      return;
    }

    const timer = setTimeout(() => {
      startTimeRef.current = undefined;
      rafRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [text, delay, animate]);

  return { displayText };
}
