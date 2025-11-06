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
        // Primitive colors
        cream: {
          50: 'rgba(252, 252, 249, 1)',
          100: 'rgba(255, 255, 253, 1)',
        },
        gray: {
          200: 'rgba(245, 245, 245, 1)',
          300: 'rgba(167, 169, 169, 1)',
          400: 'rgba(119, 124, 124, 1)',
        },
        slate: {
          500: 'rgba(98, 108, 113, 1)',
          900: 'rgba(19, 52, 59, 1)',
        },
        brown: {
          600: 'rgba(94, 82, 64, 1)',
        },
        charcoal: {
          700: 'rgba(31, 33, 33, 1)',
          800: 'rgba(38, 40, 40, 1)',
        },
        teal: {
          300: 'rgba(50, 184, 198, 1)',
          400: 'rgba(45, 166, 178, 1)',
          500: 'rgba(33, 128, 141, 1)',
          600: 'rgba(29, 116, 128, 1)',
          700: 'rgba(26, 104, 115, 1)',
          800: 'rgba(41, 150, 161, 1)',
        },
        red: {
          400: 'rgba(255, 84, 89, 1)',
          500: 'rgba(192, 21, 47, 1)',
        },
        orange: {
          400: 'rgba(230, 129, 97, 1)',
          500: 'rgba(168, 75, 47, 1)',
        },
        // Emergency services colors
        emergency: {
          red: '#ff3b30',
          blue: '#0a84ff',
          gold: '#d4af37',
        },
      },
      fontFamily: {
        sans: ['var(--font-fk-grotesk)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Berkeley Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        xs: '11px',
        sm: '12px',
        base: '14px',
        md: '14px',
        lg: '16px',
        xl: '18px',
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '30px',
      },
      spacing: {
        '1': '1px',
        '2': '2px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '10': '10px',
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '32': '32px',
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
