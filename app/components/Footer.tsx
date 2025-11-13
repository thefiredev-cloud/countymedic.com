'use client';

import { motion, useReducedMotion } from 'framer-motion';

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.2
      }
    }
  };

  const columnVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 1 }
      : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.footer
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="border-t border-gray-400/20 bg-charcoal-800/90"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Brand Section */}
        <motion.div
          className="mb-8 md:mb-12 pb-8 md:pb-12 border-b border-white/10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
            <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-red rounded-full flex-shrink-0 shadow-md" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-none">
              County Medic
            </h2>
          </div>

          <p className="text-base sm:text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl leading-relaxed">
            Clinical Decision Support for Fire Department EMS
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 text-sm text-gray-400">
            <div>
              <span className="block font-semibold text-white mb-2 sm:mb-1.5">Mission</span>
              <p className="leading-relaxed">Enhance emergency medical decision-making</p>
            </div>
            <div>
              <span className="block font-semibold text-white mb-2 sm:mb-1.5">Trust</span>
              <p className="leading-relaxed">Enterprise-grade security & compliance</p>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Grid with Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 mb-8 md:mb-10"
        >
          {/* Company Column */}
          <motion.div variants={columnVariants}>
            <h3 className="text-white font-semibold text-sm md:text-base mb-4 md:mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <motion.a
                  href="#"
                  className="text-gray-400 text-sm inline-block"
                  whileHover={shouldReduceMotion ? {} : { x: 4, color: '#ffffff' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  About County Medic
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="text-gray-400 text-sm inline-block"
                  whileHover={shouldReduceMotion ? {} : { x: 4, color: '#ffffff' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  Leadership Team
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#security"
                  className="text-gray-400 text-sm inline-block"
                  whileHover={shouldReduceMotion ? {} : { x: 4, color: '#ffffff' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  Security
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Legal Column */}
          <motion.div variants={columnVariants}>
            <h3 className="text-white font-semibold text-sm md:text-base mb-4 md:mb-5">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <motion.a
                  href="/privacy"
                  className="text-gray-400 text-sm inline-block"
                  whileHover={shouldReduceMotion ? {} : { x: 4, color: '#ffffff' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  Privacy Policy
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/terms"
                  className="text-gray-400 text-sm inline-block"
                  whileHover={shouldReduceMotion ? {} : { x: 4, color: '#ffffff' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  Terms of Service
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={columnVariants}>
            <h3 className="text-white font-semibold text-sm md:text-base mb-4 md:mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <motion.a
                  href="mailto:contact@thefiredev.com"
                  className="text-gray-400 text-sm inline-block"
                  whileHover={shouldReduceMotion ? {} : { x: 4, color: '#ffffff' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  contact@thefiredev.com
                </motion.a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Animated Divider */}
        <div className="relative overflow-hidden my-8 md:my-10">
          <motion.div
            initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-px bg-gray-400/20 origin-left"
          />
        </div>

        {/* Bottom Bar with Copyright */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-2 pb-4"
        >
          <div className="text-xs text-gray-500 text-center">
            &copy; 2025 County Medic. All rights reserved.
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
