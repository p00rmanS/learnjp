/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ui: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Noto Serif JP"', 'Georgia', 'serif'],
        jp: ['"Noto Sans JP"', '"Hiragino Sans"', 'sans-serif'],
      },
      colors: {
        paper: {
          DEFAULT: '#F6F3EC',
          deep: '#EDE8DC',
          card: '#FFFDF8',
        },
        ink: {
          DEFAULT: '#1C1F2B',
          2: '#4A4F5E',
          3: '#8A8F9C',
          line: '#E2DCCD',
        },
        ai: {
          50: '#EEF1F8',
          100: '#DDE3F1',
          200: '#BCC6E2',
          500: '#3D5A97',
          600: '#2B3F73',
          700: '#1F2F5A',
          800: '#18254A',
        },
        shu: {
          500: '#C8442F',
          600: '#AD3824',
        },
        matcha: {
          500: '#4F7A5A',
          100: '#E3EDE5',
        },
        brand: {
          50: '#EEF1F8',
          100: '#DDE3F1',
          200: '#BCC6E2',
          500: '#3D5A97',
          600: '#2B3F73',
          700: '#1F2F5A',
        },
      },
      boxShadow: {
        card: '0 1px 0 rgba(28,31,43,0.04), 0 8px 24px -12px rgba(28,31,43,0.18)',
        lift: '0 2px 0 rgba(28,31,43,0.05), 0 24px 48px -18px rgba(24,37,74,0.28)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
};
