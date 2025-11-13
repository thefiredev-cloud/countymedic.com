'use client';

import { motion, useReducedMotion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const handleGetStarted = () => {
    const signupSection = document.getElementById('signup');
    signupSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleReadFAQ = () => {
    const faqSection = document.getElementById('faq');
    faqSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[75vh] sm:min-h-[60vh] md:min-h-[85vh] flex items-center justify-center px-4 sm:px-6 py-16 md:py-24">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-full sm:max-w-4xl lg:max-w-5xl mx-auto text-center">
        {/* Development Status Badge - Animated */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 mb-6 md:mb-6 bg-white/10 border border-white/20 rounded-full"
        >
          <motion.svg
            animate={shouldReduceMotion ? {} : {
              rotate: [0, -10, 10, -10, 10, 0]
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 4
            }}
            className="w-4 h-4 text-gray-100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </motion.svg>
          <span className="text-sm font-medium text-gray-100">In Development</span>
        </motion.div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.1] tracking-tight">
          <AnimatedText
            text="Clinical Decision Support"
            className="text-white block mb-2"
            delay={100}
          />
          <AnimatedText
            text="For Fire Department EMS"
            className="bg-gradient-to-r from-red via-orange to-gold bg-clip-text text-transparent block"
            delay={300}
          />
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-200 mb-4 md:mb-5 max-w-3xl mx-auto leading-relaxed font-light">
          Digital protocol and medication reference tool for paramedics in the field.
        </p>

        <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto font-light">
          Currently in development for fire department EMS operations.
        </p>

        {/* CTA Buttons - Enhanced with Framer Motion */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          {/* Primary CTA */}
          <MagneticButton
            onClick={handleGetStarted}
            strength={0.15}
            className="relative overflow-hidden group w-full sm:w-auto px-8 py-4 text-base sm:text-sm md:text-base bg-gradient-to-r from-red to-red/90
              text-white font-semibold rounded-lg
              hover:shadow-[0_8px_30px_rgba(193,39,45,0.3)]
              flex items-center justify-center gap-2.5"
          >
            {/* Shimmer effect */}
            {!shouldReduceMotion && (
              <motion.div
                className="absolute inset-0 -translate-x-full"
                animate={{ x: ['0%', '200%'] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: 'easeInOut'
                }}
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'
                }}
              />
            )}
            <span className="relative z-10">Get Updates</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </MagneticButton>

          {/* Secondary CTA */}
          <motion.button
            onClick={handleReadFAQ}
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="group w-full sm:w-auto px-8 py-4 text-base sm:text-sm md:text-base bg-transparent border-2 border-white/20 hover:border-white/40 hover:bg-white/5
              text-white font-semibold rounded-lg transition-all duration-300
              flex items-center justify-center gap-2.5"
          >
            Read FAQ
            <svg
              className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
