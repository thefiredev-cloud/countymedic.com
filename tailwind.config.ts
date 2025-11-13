import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Enterprise Navy/Slate Palette
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          500: '#003d82',
          600: '#002d5f',
          700: '#00234a',
          800: '#001935', // Primary background
          900: '#002855', // Primary enterprise navy surface
        },
        enterpriseSlate: {
          300: '#94a3b8',
          400: '#64748b',
          500: '#475569',
          600: '#334155',
          700: '#1e293b',
          800: '#1E3A5F', // Deep slate surface
        },
        charcoal: {
          700: '#1f2121',
          800: '#262828', // Footer background
        },
        // Safety/Emergency Colors (Primary CTA)
        red: {
          DEFAULT: '#C1272D', // LA County Fire red
          light: '#E63946',
          dark: '#8B1E23', // Darker fire engine red for hovers
        },
        orange: {
          DEFAULT: '#F77F00',
          light: '#FFB703',
          dark: '#D96C06',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#FFD700',
          dark: '#B8941F',
        },
        // Medical/Healthcare Semantic Colors
        medical: {
          critical: '#C1272D', // Maps to red - life-threatening
          warning: '#F77F00', // Maps to orange - urgent attention
          caution: '#FFB703', // Maps to orange-light - monitoring required
          stable: '#10b981', // Success green - patient stable
          info: '#3b82f6', // Information blue - educational content
        },
        // Status Colors for Enterprise Applications
        success: {
          DEFAULT: '#10b981', // Emerald green for compliance badges
          light: '#34d399',
          dark: '#059669',
        },
        info: {
          DEFAULT: '#3b82f6', // Blue for informational alerts
          light: '#60a5fa',
          dark: '#2563eb',
        },
      },
      fontFamily: {
        sans: ['var(--font-fk-grotesk)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Berkeley Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '1.4' }],
        sm: ['14px', { lineHeight: '1.5' }],
        base: ['16px', { lineHeight: '1.6' }], // Enterprise standard
        lg: ['18px', { lineHeight: '1.6' }],
        xl: ['20px', { lineHeight: '1.5' }],
        '2xl': ['24px', { lineHeight: '1.4' }],
        '3xl': ['30px', { lineHeight: '1.2' }],
        '4xl': ['36px', { lineHeight: '1.2' }],
        '5xl': ['48px', { lineHeight: '1.1' }],
        '6xl': ['60px', { lineHeight: '1.1' }],
        '7xl': ['72px', { lineHeight: '1' }],
      },
      spacing: {
        '1': '1px',
        '2': '2px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '10': '10px',
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '24': '24px',
        '28': '28px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
      },
      borderRadius: {
        sm: '6px',
        DEFAULT: '8px',
        md: '10px',
        lg: '12px',
        full: '9999px',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(0, 0, 0, 0.3)',
        sm: '0 1px 3px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
      },
      transitionTimingFunction: {
        'standard': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
      },
    },
  },
  plugins: [],
};

export default config;
