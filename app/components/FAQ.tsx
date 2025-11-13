'use client';

import { useState } from 'react';
import GlassCard from './GlassCard';

const faqs = [
  // Product & Features
  {
    question: 'How much will it cost?',
    answer: "Pricing will be announced closer to launch. We're designing a department-based subscription model that scales with your team size, with transparent per-provider pricing that includes all updates, support, and protocol maintenance. No hidden fees or per-incident charges.",
  },
  {
    question: 'Which devices and platforms are supported?',
    answer: 'County Medic will be available as a web application (accessible via any modern browser) and native mobile apps for iOS and Android. Works on smartphones, tablets, rugged devices, and MDTs. Offline functionality will be included for field use without internet connectivity.',
  },
  {
    question: 'Can we customize protocols to match our medical director\'s preferences?',
    answer: 'Absolutely. County Medic is built on a flexible protocol engine that allows your medical director to customize treatment pathways, medication dosages, contraindications, and decision points to match your local standing orders. Changes are version-controlled and can be rolled out instantly to all providers.',
  },
  {
    question: 'How often are protocols updated?',
    answer: 'Protocol updates are pushed in real-time by your medical director through our secure administrative dashboard. When evidence-based guidelines change or your medical director issues new standing orders, updates deploy instantly to all devices. Providers receive notifications of changes, and the system tracks version history for compliance auditing.',
  },
  {
    question: 'Does it work without internet or cellular service?',
    answer: 'Yes. County Medic uses an offline-first architecture that downloads your department\'s complete protocol library to each device. Clinical decision support, drug calculations, and all core features work fully offline. Data syncs automatically when connectivity returns, ensuring uninterrupted access in rural areas, basements, or during network outages.',
  },
  {
    question: 'How is County Medic different from paper protocols or PDFs?',
    answer: 'Unlike static documents, County Medic provides interactive decision trees, real-time drug calculations based on patient weight, instant search across all protocols, automatic updates without reprinting, compliance tracking, and integration with your ePCR system. Providers get context-aware guidance instead of flipping through pages under stress.',
  },

  // Security & Compliance
  {
    question: 'Is County Medic HIPAA compliant?',
    answer: "Yes. County Medic is being built from the ground up with HIPAA compliance in mind. We're currently undergoing SOC 2 Type II certification and implementing end-to-end encryption for all data transmission. Regular security audits and penetration testing ensure ongoing compliance with healthcare regulations.",
  },
  {
    question: 'What happens to patient data entered during calls?',
    answer: 'County Medic is a clinical reference tool, not a patient care reporting system. Any patient-specific data entered for calculations (like weight for medication dosing) is processed locally on the device and never transmitted or stored on our servers. We never collect, store, or have access to protected health information (PHI).',
  },

  // Implementation & Support
  {
    question: 'What\'s the typical implementation timeline?',
    answer: 'From contract signature to full deployment typically takes 6-8 weeks. This includes protocol configuration with your medical director (2-3 weeks), IT integration and testing (2 weeks), provider training and rollout (2-3 weeks), and post-launch support. We provide dedicated implementation specialists and training materials to ensure smooth adoption.',
  },
  {
    question: 'How can my department get involved?',
    answer: "We're looking for pilot departments to help shape the product. If you're interested in participating in our beta program or scheduling a demo for your leadership team, please contact us at contact@thefiredev.com with your department details. Early adopters receive discounted pricing and priority feature development.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent via-navy-900/10 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to know about County Medic
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-5">
          {faqs.map((faq, index) => (
            <GlassCard
              key={index}
              className={`cursor-pointer transition-all duration-300 ${
                openIndex === index ? 'ring-1 ring-red/40' : ''
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-start justify-between gap-6">
                  {/* Question */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white pr-4 flex-1 group-hover:text-gray-100 transition-colors">
                    {faq.question}
                  </h3>

                  {/* Chevron Icon */}
                  <div
                    className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 transition-all duration-300 ${
                      openIndex === index ? 'rotate-180 text-red' : 'text-red/70 group-hover:text-red'
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>

                {/* Answer */}
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 mt-5 sm:mt-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
