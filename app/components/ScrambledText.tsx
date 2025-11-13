'use client';

import { useScrambledText } from '../hooks/useScrambledText';

interface ScrambledTextProps {
  text: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export default function ScrambledText({
  text,
  duration = 1500,
  delay = 0,
  className = '',
}: ScrambledTextProps) {
  const { displayText } = useScrambledText({
    text,
    duration,
    delay,
  });

  return <span className={className}>{displayText}</span>;
}
