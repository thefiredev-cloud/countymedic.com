'use client';

import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { ReactNode, CSSProperties, useRef, useEffect } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  enableTilt?: boolean;
  enableSpotlight?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  style,
  enableTilt = true,
  enableSpotlight = true
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isTouchDevice = typeof window !== 'undefined' && 'ontouchstart' in window;

  // Mouse tracking for spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 25 });

  // Tilt effect
  const rotateX = useSpring(0, { stiffness: 400, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 400, damping: 30 });

  useEffect(() => {
    if (shouldReduceMotion || isTouchDevice || (!enableTilt && !enableSpotlight)) return;

    const card = ref.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();

      // Spotlight position
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);

      // Tilt rotation
      if (enableTilt) {
        const percentX = (e.clientX - rect.left) / rect.width;
        const percentY = (e.clientY - rect.top) / rect.height;
        rotateX.set((percentY - 0.5) * 8);
        rotateY.set((percentX - 0.5) * -8);
      }
    };

    const handleMouseLeave = () => {
      rotateX.set(0);
      rotateY.set(0);
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, rotateX, rotateY, enableTilt, enableSpotlight, shouldReduceMotion, isTouchDevice]);

  return (
    <motion.div
      ref={ref}
      className={`group relative p-5 sm:p-6 md:p-8 rounded-lg overflow-hidden cursor-pointer ${className}`}
      style={{
        background: 'rgba(255,255,255,0.05)',
        rotateX: enableTilt && !shouldReduceMotion && !isTouchDevice ? rotateX : 0,
        rotateY: enableTilt && !shouldReduceMotion && !isTouchDevice ? rotateY : 0,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        ...style
      }}
      whileHover={shouldReduceMotion ? {} : {
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
      }}
    >
      {/* Base border */}
      <div className="absolute inset-0 rounded-lg border border-white/10
        group-hover:border-red/30 transition-colors duration-300" />

      {/* Spotlight effect */}
      {enableSpotlight && !shouldReduceMotion && !isTouchDevice && (
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100
            transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${smoothX.get()}px ${smoothY.get()}px,
              rgba(193, 39, 45, 0.15),
              transparent 40%)`,
          }}
        />
      )}

      {/* Inner glow on hover */}
      <div
        className="absolute inset-[1px] rounded-lg opacity-0 group-hover:opacity-100
          transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(193,39,45,0.15) 0%, transparent 50%)',
        }}
      />

      {/* Shadow layer */}
      <div className="absolute inset-0 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.2)]
        group-hover:shadow-[0_8px_30px_rgba(193,39,45,0.15)] transition-shadow duration-300" />

      {/* Content layer with 3D depth */}
      <div
        className="relative z-10"
        style={enableTilt && !isTouchDevice ? { transform: 'translateZ(20px)' } : {}}
      >
        {children}
      </div>
    </motion.div>
  );
}
