'use client';

export default function Hero() {
  const handleGetStarted = () => {
    const signupSection = document.getElementById('signup');
    signupSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-teal-300/10 border border-teal-300/20 rounded-full">
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
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-200 mb-6 leading-tight tracking-tight">
          AI Tools Built for{' '}
          <span className="bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent">
            Paramedics
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
          We're building decision support software for LA County Fire paramedics.
          Protocol lookups, medication dosing, clinical guidance—accessible offline,
          designed for the field.
        </p>

        <p className="text-base text-gray-400 mb-10 max-w-2xl mx-auto">
          Testing demand before full launch. Sign up to help shape what we build.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={handleGetStarted}
            className="group px-8 py-4 bg-teal-300 hover:bg-teal-400 text-slate-900 font-semibold rounded-xl transition-all duration-normal hover:scale-105 hover:shadow-lg flex items-center gap-2"
          >
            Get Started
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          <button
            onClick={handleGetStarted}
            className="px-8 py-4 bg-charcoal-800/60 hover:bg-charcoal-800 border border-gray-400/30 hover:border-gray-400/50 text-gray-200 font-semibold rounded-xl transition-all duration-normal"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
