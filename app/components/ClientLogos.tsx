'use client';

export default function ClientLogos() {
  const clients = [
    'Los Angeles County Fire',
    'Orange County Fire Authority',
    'Ventura County Fire',
    'San Diego Fire-Rescue',
    'CAL FIRE',
    'Riverside County Fire',
  ];

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs sm:text-sm font-medium text-gray-400 mb-6 md:mb-8 uppercase tracking-wide">
          Trusted by Leading Fire Departments
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="text-center px-3 py-2.5 md:px-4 md:py-3 border border-white/10 rounded-lg hover:border-red/30 transition-colors w-full"
            >
              <p className="text-xs sm:text-sm text-gray-300 font-medium">
                {client}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
