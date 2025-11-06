'use client';

import { useState, useEffect } from 'react';

export default function WaitlistForm() {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Check if redirected back from Netlify with success parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setShowSuccess(true);
      // Scroll to the success message
      setTimeout(() => {
        const successElement = document.getElementById('successMessage');
        successElement?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  }, []);

  return (
    <section id="signup" className="py-20 px-6 bg-gradient-to-b from-teal-500/5 via-charcoal-800/20 to-transparent">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">
            Get Early Access
          </h2>
          <p className="text-lg text-gray-300">
            Sign up to get early access and help us build tools that actually solve problems in the field.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-charcoal-800/60 backdrop-blur-sm border border-gray-400/20 rounded-2xl p-8 shadow-lg">
          {/* Success Message */}
          {showSuccess && (
            <div
              id="successMessage"
              className="mb-6 p-5 bg-teal-500/10 border border-teal-300/30 rounded-xl text-teal-300 text-center"
            >
              <strong>Thanks for signing up!</strong>
              <br />
              We'll send updates as we build this out.
            </div>
          )}

          {/* Netlify Form */}
          <form
            name="waitlist"
            method="POST"
            action="/?success=true"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="waitlist" />

            {/* Honeypot for spam protection */}
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>

            {/* Name */}
            <div className="mb-5">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-200 mb-2">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-charcoal-700 border border-gray-400/30 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300/40 focus:border-teal-300 transition-all"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-charcoal-700 border border-gray-400/30 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300/40 focus:border-teal-300 transition-all"
              />
            </div>

            {/* Role */}
            <div className="mb-5">
              <label htmlFor="role" className="block text-sm font-semibold text-gray-200 mb-2">
                Role/Title <span className="text-red-400">*</span>
              </label>
              <select
                id="role"
                name="role"
                required
                className="w-full px-4 py-3 bg-charcoal-700 border border-gray-400/30 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-300/40 focus:border-teal-300 transition-all appearance-none cursor-pointer"
              >
                <option value="">Select your role...</option>
                <option value="Paramedic">Paramedic</option>
                <option value="EMT">EMT</option>
                <option value="Fire Captain">Fire Captain</option>
                <option value="Battalion Chief">Battalion Chief</option>
                <option value="Medical Director">Medical Director</option>
                <option value="EMS Administrator">EMS Administrator</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Department */}
            <div className="mb-5">
              <label htmlFor="department" className="block text-sm font-semibold text-gray-200 mb-2">
                Department/Agency
              </label>
              <input
                type="text"
                id="department"
                name="department"
                className="w-full px-4 py-3 bg-charcoal-700 border border-gray-400/30 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300/40 focus:border-teal-300 transition-all"
              />
            </div>

            {/* Experience */}
            <div className="mb-5">
              <label htmlFor="experience" className="block text-sm font-semibold text-gray-200 mb-2">
                Years of Experience
              </label>
              <select
                id="experience"
                name="experience"
                className="w-full px-4 py-3 bg-charcoal-700 border border-gray-400/30 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-300/40 focus:border-teal-300 transition-all appearance-none cursor-pointer"
              >
                <option value="">Select experience level...</option>
                <option value="0-2 years">0-2 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="6-10 years">6-10 years</option>
                <option value="11-15 years">11-15 years</option>
                <option value="16-20 years">16-20 years</option>
                <option value="20+ years">20+ years</option>
              </select>
            </div>

            {/* Areas of Interest */}
            <div className="mb-5">
              <label className="block text-sm font-semibold text-gray-200 mb-3">
                Areas of Interest
              </label>
              <div className="space-y-2">
                {[
                  'Protocol Support',
                  'Medication Dosing',
                  'Offline Capability',
                  'ImageTrend Integration',
                  'Training/Education',
                ].map((interest) => (
                  <label key={interest} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="interests"
                      value={interest}
                      className="w-5 h-5 rounded border-gray-400/30 bg-charcoal-700 text-teal-300 focus:ring-2 focus:ring-teal-300/40 cursor-pointer"
                    />
                    <span className="text-gray-300 group-hover:text-gray-200 transition-colors">
                      {interest}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Comments */}
            <div className="mb-6">
              <label htmlFor="comments" className="block text-sm font-semibold text-gray-200 mb-2">
                Comments/Additional Information
              </label>
              <textarea
                id="comments"
                name="comments"
                rows={4}
                className="w-full px-4 py-3 bg-charcoal-700 border border-gray-400/30 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300/40 focus:border-teal-300 transition-all resize-y"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-teal-300 hover:bg-teal-400 text-slate-900 font-semibold rounded-xl transition-all duration-normal hover:scale-[1.02] hover:shadow-lg"
            >
              Sign Up
            </button>

            {/* Privacy Notice */}
            <div className="mt-4 p-4 bg-orange-500/10 border border-orange-400/20 rounded-lg text-sm text-gray-300 text-center">
              Your info stays private. We'll only use it for updates—no spam, no sharing.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
