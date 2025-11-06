'use client';

import AnimatedText from './AnimatedText';

export default function Hero() {
  const handleGetStarted = () => {
    const signupSection = document.getElementById('signup');
    signupSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-24">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-10 bg-teal-300/10 backdrop-blur-sm border border-teal-300/20 rounded-full
          hover:bg-teal-300/15 hover:border-teal-300/30 transition-all duration-300">
          <svg
            className="w-4 h-4 text-teal-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          <span className="text-sm font-medium text-teal-300">
            Decision Support for Paramedics
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
          <AnimatedText
            text="AI Tools Built for"
            className="text-white/95 block mb-2"
            delay={100}
          />
          <AnimatedText
            text="Paramedics"
            className="bg-gradient-to-r from-teal-300 via-teal-400 to-cyan-400 bg-clip-text text-transparent block"
            delay={300}
          />
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-200/90 mb-5 max-w-3xl mx-auto leading-relaxed font-light">
          Decision support software for LA County Fire paramedics. Protocol lookups,
          medication dosing, clinical guidance—accessible offline, designed for the field.
        </p>

        <p className="text-base md:text-lg text-gray-400/80 mb-12 max-w-2xl mx-auto font-light">
          Testing demand before full launch. Sign up to help shape what we build.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={handleGetStarted}
            className="group px-9 py-4.5 bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600
              text-slate-900 font-semibold rounded-2xl transition-all duration-300
              hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(79,209,197,0.3)]
              flex items-center gap-2.5"
          >
            Get Started
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
          </button>

          <button
            onClick={handleGetStarted}
            className="px-9 py-4.5 bg-white/5 backdrop-blur-sm hover:bg-white/10
              border border-white/20 hover:border-teal-300/40
              text-gray-200 font-semibold rounded-2xl
              transition-all duration-300 hover:shadow-lg"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
