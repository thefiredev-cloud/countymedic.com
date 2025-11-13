'use client';

import { motion, useReducedMotion } from 'framer-motion';
import GlassCard from './GlassCard';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: 'Always-Current Clinical Protocols',
    description: 'Access your department\'s approved protocols instantly, with automatic updates pushed by your medical director. No more outdated binders or confusion about which version to use.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Instant Medication Safety',
    description: 'Eliminate dosing errors with automatic weight-based calculations for every medication. Get the right dose in seconds, not minutes of mental math under pressure.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: 'Works Anywhere, Even Offline',
    description: 'Deliver the same quality care in dead zones, underground, or rural areas. Full protocol access without internet connectivity means zero compromises on patient care.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        <circle cx="12" cy="16" r="1" />
      </svg>
    ),
    title: 'Enterprise-Grade Security',
    description: 'Meet HIPAA compliance requirements with encrypted data, role-based permissions, and complete audit trails. Your medical director controls who sees what, always.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
    title: 'Find Protocols by Symptoms',
    description: 'Search "chest pain" or "difficulty breathing" instead of guessing protocol names. Smart search understands clinical terms and gets you to the right treatment path immediately.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Automatic Pediatric Dosing',
    description: 'Weight-based calculations adapt instantly for pediatric and adult patients. Select age or enter weight, and every medication dose adjusts automatically—no separate reference cards needed.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Real-Time Protocol Updates',
    description: 'Medical directors push critical protocol changes directly to the field. Updates deploy instantly across all devices, ensuring your entire department operates on the same current standards.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: 'Seamless Multi-Device Sync',
    description: 'Start reviewing protocols on your station tablet, continue on your phone in the rig. Your bookmarks, notes, and preferences follow you across every device automatically.',
  },
];

export default function Features() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="features" className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent via-navy-900/10 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">
            Core Features
          </h2>
          <p className="text-lg sm:text-xl md:text-xl text-gray-400/90 max-w-3xl mx-auto px-4">
            Essential tools for EMS field operations
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut'
              }}
            >
              <GlassCard className="h-full">
                {/* Icon Container with Gradient Background */}
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-red/20 to-red/5 p-4 sm:p-5 md:p-6 flex items-center justify-center mb-5 sm:mb-6 hover:from-red/30 hover:to-red/10 transition-colors duration-300"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-red">
                    {feature.icon}
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {feature.title}
                </h3>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
