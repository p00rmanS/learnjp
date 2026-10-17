/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ui: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Newsreader', '"Noto Serif JP"', 'Georgia', 'serif'],
        jp: ['"Noto Sans JP"', '"Hiragino Sans"', 'sans-serif'],
        kanji: ['"Noto Serif JP"', 'serif'],
      },
      colors: {
        paper: {
          DEFAULT: '#F4F1EA',
          deep: '#E9E4D8',
          card: '#FBFAF6',
        },
        ink: {
          DEFAULT: '#16171B',
          2: '#4D515C',
          3: '#8A8E98',
          line: '#D9D2C2',
        },
        ai: {
          50: '#EEF1F7',
          100: '#DCE3F0',
          200: '#B7C5DF',
          400: '#5674AE',
          500: '#3A5A99',
          600: '#2A4A8A',
          700: '#213A6E',
          800: '#1A2E57',
        },
        shu: {
          500: '#B8432F',
          600: '#9E3725',
        },
        matcha: {
          500: '#4B7152',
          100: '#E2EBE2',
        },
        brand: {
          50: '#EEF1F7',
          100: '#DCE3F0',
          200: '#B7C5DF',
          500: '#3A5A99',
          600: '#2A4A8A',
          700: '#213A6E',
        },
      },
      letterSpacing: {
        eyebrow: '0.2em',
      },
    },
  },
  plugins: [],
};
