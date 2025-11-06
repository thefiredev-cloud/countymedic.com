'use client';

import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div
      className={`group relative p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10
        hover:bg-white/10 hover:border-teal-300/30 transition-all duration-500
        hover:shadow-[0_8px_32px_rgba(79,209,197,0.15)] ${className}`}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-400/0 via-transparent to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
