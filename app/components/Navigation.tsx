'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!mobileMenuOpen || !mobileMenuRef.current) return;

    const focusableElements = mobileMenuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleTab);
    firstElement?.focus();

    return () => document.removeEventListener('keydown', handleTab);
  }, [mobileMenuOpen]);

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.2,
        when: 'afterChildren'
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: shouldReduceMotion ? 0 : 0.25,
        when: 'beforeChildren',
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
        delayChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -10
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.header
      className="sticky top-0 z-50 bg-navy-900/98 border-b border-white/10 md:backdrop-blur-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.35,
        ease: 'easeOut'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            {/* Medical Cross Icon */}
            <motion.div
              className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11
                rounded-lg bg-gradient-to-br from-red to-red-dark shadow-lg"
              whileHover={shouldReduceMotion ? {} : { scale: 1.08, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
            </motion.div>

            <motion.span
              className="text-lg sm:text-xl font-bold tracking-tight
                bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent"
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              County Medic
            </motion.span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : idx * 0.05,
                  duration: 0.25,
                  ease: 'easeOut'
                }}
              >
                <Link
                  href={item.href}
                  className="px-4 py-3 text-gray-100 hover:text-white hover:bg-white/5
                    transition-colors font-medium text-base rounded-md
                    focus:outline-none focus:ring-2 focus:ring-red/50"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.15, duration: 0.3 }}
            >
              <motion.a
                href="#signup"
                className="px-6 py-3 bg-red text-white font-semibold rounded-lg
                  transition-colors duration-200 inline-block"
                whileHover={shouldReduceMotion ? {} : {
                  scale: 1.02,
                  boxShadow: '0 8px 24px rgba(193, 39, 45, 0.3)'
                }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                Get Updates
              </motion.a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden px-5 py-4 text-gray-100 hover:text-white hover:bg-white/5
              border border-white/0 hover:border-white/20 rounded-lg
              transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red/50"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <>
                  <motion.path
                    d="M6 18L18 6"
                    initial={false}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
                  />
                  <motion.path
                    d="M6 6l12 12"
                    initial={false}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
                  />
                </>
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              id="mobile-menu"
              ref={mobileMenuRef}
              className="md:hidden overflow-hidden"
              aria-label="Mobile navigation"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="mt-4 pb-4 space-y-4">
                {navItems.map((item) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3 px-4 text-gray-100 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium text-base"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div variants={itemVariants}>
                  <Link
                    href="#signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-center py-4 px-6 bg-red hover:bg-red-light text-white font-semibold rounded-lg transition-all duration-300"
                  >
                    Get Updates
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
