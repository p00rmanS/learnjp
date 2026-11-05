/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ui: ['Nunito', 'ui-rounded', 'system-ui', 'sans-serif'],
        display: ['Fredoka', 'Nunito', 'system-ui', 'sans-serif'],
        jp: ['"Zen Maru Gothic"', '"Noto Sans JP"', '"Hiragino Sans"', 'sans-serif'],
        kanji: ['"Noto Serif JP"', '"Zen Maru Gothic"', 'serif'],
      },
      colors: {
        // Warm cream base and tinted cards, so the app never reads as plain white.
        paper: {
          DEFAULT: '#FFF3E4',
          deep: '#FFE3CC',
          card: '#FFF9F1',
        },
        ink: {
          DEFAULT: '#2A2456',
          2: '#5B5680',
          3: '#8C87AE',
          line: '#EAD9C8',
        },
        // Primary accent: violet-blue.
        ai: {
          50: '#F1EDFF',
          100: '#E2D9FF',
          200: '#C4B5FF',
          400: '#8A6CFF',
          500: '#6B4BFF',
          600: '#5532E6',
          700: '#4224B8',
          800: '#321B8A',
        },
        // Sakura coral, used for the hanko seal and warm highlights.
        shu: {
          500: '#FF6B6B',
          600: '#EC4F62',
        },
        // Fresh green for done, streak, and success states.
        matcha: {
          500: '#1FB27A',
          100: '#D6F6E7',
        },
        sakura: {
          100: '#FFE0EC',
          400: '#FF8FB8',
          500: '#FF6FA3',
        },
        sky: {
          100: '#DDF0FF',
          400: '#5BB8FF',
          500: '#2F9BFF',
        },
        sun: {
          100: '#FFF1BF',
          400: '#FFCB3D',
          500: '#FFB000',
        },
        brand: {
          50: '#F1EDFF',
          100: '#E2D9FF',
          200: '#C4B5FF',
          500: '#6B4BFF',
          600: '#5532E6',
          700: '#4224B8',
        },
      },
      letterSpacing: {
        eyebrow: '0.16em',
      },
      boxShadow: {
        pop: '0 12px 28px -14px rgba(85, 50, 230, 0.45)',
        soft: '0 10px 30px -18px rgba(42, 36, 86, 0.35)',
      },
    },
  },
  plugins: [],
};
