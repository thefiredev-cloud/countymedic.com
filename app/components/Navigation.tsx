'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 bg-charcoal-800/80 backdrop-blur-md border-b border-gray-400/20">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-teal-300/10 flex items-center justify-center border border-teal-300/20 group-hover:bg-teal-300/20 transition-colors">
              <svg
                className="w-6 h-6 text-teal-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-200 tracking-tight">
              County Medic
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-200 hover:text-teal-300 transition-colors font-medium text-base"
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-gray-200 hover:text-teal-300 transition-colors font-medium text-base"
            >
              Features
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
