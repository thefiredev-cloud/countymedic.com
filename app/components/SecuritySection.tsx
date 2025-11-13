'use client';

import GlassCard from './GlassCard';

const securityBadges = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'HIPAA Compliant',
    description: 'Built with healthcare data privacy standards from day one',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'SOC 2 Type II',
    description: 'Currently undergoing certification process',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
      </svg>
    ),
    title: 'End-to-End Encryption',
    description: 'All patient data encrypted in transit and at rest',
  },
];

export default function SecuritySection() {
  return (
    <section id="security" className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent via-navy-900/10 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">
            Enterprise-Grade Security
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            County Medic is designed from the ground up to meet healthcare compliance requirements
          </p>
        </div>

        {/* Security Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {securityBadges.map((badge, index) => (
            <GlassCard key={index}>
              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 text-red">
                {badge.icon}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                {badge.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed">
                {badge.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
