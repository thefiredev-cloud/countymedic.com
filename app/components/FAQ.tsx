'use client';

import { useState } from 'react';
import GlassCard from './GlassCard';

const faqs = [
  {
    question: 'How much will it cost?',
    answer: "Pricing will be announced closer to launch. We're designing a department-based subscription model that scales with your team size.",
  },
  {
    question: 'Which devices and platforms are supported?',
    answer: 'County Medic will be available as a web application (accessible via any modern browser) and native mobile apps for iOS and Android. Offline functionality will be included for field use.',
  },
  {
    question: 'Is County Medic HIPAA compliant?',
    answer: "Yes. County Medic is being built from the ground up with HIPAA compliance in mind. We're currently undergoing SOC 2 Type II certification and implementing end-to-end encryption for all patient data.",
  },
  {
    question: 'How can my department get involved?',
    answer: "We're looking for pilot departments to help shape the product. If you're interested in participating in our beta program, please contact us at contact@thefiredev.com with your department details.",
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
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <GlassCard key={index} className="cursor-pointer">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-start justify-between gap-4">
                  {/* Question */}
                  <h3 className="text-base sm:text-lg font-semibold text-white pr-4 flex-1">
                    {faq.question}
                  </h3>

                  {/* Chevron Icon */}
                  <div
                    className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-red transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
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
                    openIndex === index ? 'max-h-96 mt-3 sm:mt-4' : 'max-h-0'
                  }`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
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
