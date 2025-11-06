'use client';

export default function Footer() {
  return (
    <footer className="border-t border-gray-400/20 bg-charcoal-800/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center">
          {/* Contact */}
          <div className="mb-3">
            <span className="text-gray-200 text-base">
              For questions:{' '}
              <a
                href="mailto:contact@thefiredev.com"
                className="text-teal-300 hover:text-teal-400 transition-colors underline"
              >
                contact@thefiredev.com
              </a>
            </span>
          </div>

          {/* Copyright */}
          <div className="mb-2 text-sm text-gray-400">
            &copy; 2025 thefiredev - LA County Fire Department Internal Use
          </div>

          {/* Disclaimer */}
          <div className="text-xs text-gray-400 italic max-w-3xl mx-auto">
            This application is for educational reference only and does not replace official
            prehospital training or command authority.
          </div>
        </div>
      </div>
    </footer>
  );
}
