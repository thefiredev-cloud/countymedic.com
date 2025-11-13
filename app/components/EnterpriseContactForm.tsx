'use client';

import { useState, FormEvent, useEffect, useRef } from 'react';

export default function EnterpriseContactForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string>('');
  const [emailTouched, setEmailTouched] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Email validation function
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle email input change
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    setEmailTouched(true);

    if (!email) {
      setEmailError('');
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Validate email before submission
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;

    if (!email || !validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      setEmailTouched(true);
      setIsSubmitting(false);
      emailInputRef.current?.focus();
      return;
    }

    try {
      // Submit to Netlify Forms endpoint
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setShowSuccess(true);
        event.currentTarget.reset();

        // Scroll to success message with cleanup
        scrollTimeoutRef.current = setTimeout(() => {
          const successElement = document.getElementById('successMessage');
          successElement?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="signup" className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-navy-900/10 via-enterpriseSlate-800/20 to-transparent">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 mb-4">
            Get Updates
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Sign up to receive updates about County Medic development.
          </p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div
            id="successMessage"
            className="mb-6 md:mb-8 p-4 sm:p-5 md:p-6 bg-red/10 border border-red/30 rounded-lg text-center"
          >
            <div className="text-2xl mb-2">✓</div>
            <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
            <p className="text-gray-300">
              You'll receive updates about County Medic as development progresses.
            </p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 md:mb-8 p-4 sm:p-5 bg-red-500/10 border border-red-500/30 rounded-lg text-center">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {/* Form */}
        {!showSuccess && (
          <form
            onSubmit={handleSubmit}
            name="updates-signup"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5 sm:p-6 md:p-8 lg:p-10"
          >
            {/* Hidden fields for Netlify */}
            <input type="hidden" name="form-name" value="updates-signup" />
            <input type="hidden" name="bot-field" className="hidden" />

            {/* Email */}
            <div className="mb-5 md:mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                Email *
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  ref={emailInputRef}
                  required
                  onChange={handleEmailChange}
                  className={`w-full px-4 py-3 pr-12 bg-white/5 border rounded-lg
                    text-gray-200 placeholder-gray-500
                    focus:outline-none focus:ring-2 focus:ring-red/20
                    transition-all duration-200
                    ${emailError && emailTouched
                      ? 'border-red-500/50 focus:border-red-500/50'
                      : emailTouched && !emailError
                        ? 'border-green-500/50 focus:border-green-500/50'
                        : 'border-white/20 focus:border-red/50'
                    }`}
                  placeholder="jsmith@example.com"
                  aria-invalid={emailError && emailTouched ? 'true' : 'false'}
                  aria-describedby={emailError && emailTouched ? 'email-error' : undefined}
                />
                {/* Validation Icons */}
                {emailTouched && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 transition-opacity duration-200">
                    {emailError ? (
                      <svg
                        className="w-5 h-5 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                )}
              </div>
              {/* Error Message with ARIA Live Region */}
              <div
                role="alert"
                aria-live="polite"
                aria-atomic="true"
                className="overflow-hidden transition-all duration-200 ease-in-out"
                style={{
                  maxHeight: emailError && emailTouched ? '3rem' : '0',
                  opacity: emailError && emailTouched ? '1' : '0'
                }}
              >
                {emailError && emailTouched && (
                  <p id="email-error" className="mt-2 text-sm text-red-400">
                    {emailError}
                  </p>
                )}
              </div>
            </div>

            {/* Role */}
            <div className="mb-6 md:mb-8">
              <label htmlFor="role" className="block text-sm font-medium text-gray-200 mb-2">
                Role (Optional)
              </label>
              <select
                id="role"
                name="role"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg
                  text-gray-200
                  focus:outline-none focus:border-red/50 focus:ring-2 focus:ring-red/20
                  transition-colors
                  [&>option]:bg-navy-800 [&>option]:text-gray-200"
              >
                <option value="" className="bg-navy-800 text-gray-200">Select a role</option>
                <option value="Paramedic" className="bg-navy-800 text-gray-200">Paramedic</option>
                <option value="Fire Chief" className="bg-navy-800 text-gray-200">Fire Chief</option>
                <option value="Battalion Chief" className="bg-navy-800 text-gray-200">Battalion Chief</option>
                <option value="Training Officer" className="bg-navy-800 text-gray-200">Training Officer</option>
                <option value="EMS Coordinator" className="bg-navy-800 text-gray-200">EMS Coordinator</option>
                <option value="Other" className="bg-navy-800 text-gray-200">Other</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-red to-red-dark
                text-white font-semibold rounded-lg
                hover:from-red-light hover:to-red
                disabled:opacity-50 disabled:cursor-not-allowed
                transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-red/50"
            >
              {isSubmitting ? 'Submitting...' : 'Get Updates'}
            </button>

            <p className="mt-4 text-center text-sm text-gray-400">
              We'll send you product updates monthly. Unsubscribe anytime.
            </p>

            <p className="mt-4 text-center text-xs text-gray-400">
              Questions? Email{' '}
              <a href="mailto:contact@thefiredev.com" className="text-red hover:text-red-light underline">
                contact@thefiredev.com
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
