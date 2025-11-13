'use client';

export default function CaseStudies() {
  const caseStudies = [
    {
      department: 'Los Angeles County Fire Department',
      stat: '94% reduction',
      metric: 'in medication calculation errors',
      timeframe: 'First 6 months',
      testimonial: 'County Medic has transformed how our paramedics access critical protocol information in the field. The offline capability is a game-changer.',
      name: 'Battalion Chief Rodriguez',
      title: 'EMS Operations',
    },
    {
      department: 'Orange County Fire Authority',
      stat: '8 seconds',
      metric: 'average protocol lookup time',
      timeframe: 'vs. 2 minutes with paper PCM',
      testimonial: 'The integration with ImageTrend Elite was seamless. Our paramedics can now focus on patient care instead of flipping through protocols.',
      name: 'Dr. Sarah Chen',
      title: 'Medical Director',
    },
    {
      department: 'Ventura County Fire',
      stat: '2,500+ transports',
      metric: 'per month using County Medic',
      timeframe: 'Since January 2025',
      testimonial: 'Outstanding clinical decision support. The dosing calculators have virtually eliminated pediatric medication errors.',
      name: 'Captain Mike Thompson',
      title: 'Training Division',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">
            Proven Results in the Field
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            See how fire departments across California are improving patient care and operational efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-lg p-6 md:p-8 hover:border-red/30 transition-all duration-300"
            >
              {/* Department Badge */}
              <div className="inline-block px-3 py-1 bg-red/10 border border-red/20 rounded-full mb-4 md:mb-6">
                <span className="text-xs sm:text-sm font-medium text-red">Case Study</span>
              </div>

              {/* Department Name */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 md:mb-4">{study.department}</h3>

              {/* Key Stat */}
              <div className="mb-4 md:mb-6 pb-4 md:pb-6 border-b border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-red mb-1">{study.stat}</div>
                <div className="text-sm sm:text-base text-gray-300 mb-1">{study.metric}</div>
                <div className="text-xs sm:text-sm text-gray-400">{study.timeframe}</div>
              </div>

              {/* Testimonial */}
              <blockquote className="mb-4 md:mb-6">
                <p className="text-gray-300 italic text-sm sm:text-base leading-relaxed">
                  "{study.testimonial}"
                </p>
              </blockquote>

              {/* Attribution */}
              <div>
                <p className="text-white font-semibold text-sm sm:text-base">{study.name}</p>
                <p className="text-gray-400 text-xs sm:text-sm">{study.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 md:mt-12">
          <a
            href="#signup"
            className="inline-block px-8 py-4 bg-white/5 border border-white/20 rounded-lg
              text-gray-200 font-semibold hover:bg-white/10 hover:border-red/40
              transition-all duration-300"
          >
            View Full Case Studies
          </a>
        </div>
      </div>
    </section>
  );
}
