/** @type {import('tailwindcss').Config} */
// Palette inspired by Tokyo signage and station maps: concrete paper, near-black ink,
// one vermilion accent (like a subway sign), and muted green for "done".
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ui: ['"Hanken Grotesk"', 'Archivo', 'system-ui', 'sans-serif'],
        display: ['Archivo', '"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        jp: ['"Zen Kaku Gothic New"', '"Noto Sans JP"', '"Hiragino Sans"', 'sans-serif'],
        kanji: ['"Shippori Mincho"', '"Noto Serif JP"', 'serif'],
      },
      colors: {
        paper: {
          DEFAULT: '#ECE9E3',
          deep: '#DEDAD2',
          card: '#F6F4F0',
        },
        ink: {
          DEFAULT: '#151515',
          2: '#4A4A48',
          3: '#7B7A76',
          line: '#CBC6BC',
        },
        // Accent: subway-sign vermilion.
        ai: {
          50: '#FBEDE9',
          100: '#F4D2C9',
          200: '#E9A393',
          400: '#E4553A',
          500: '#D9401F',
          600: '#B8331A',
          700: '#8F2713',
          800: '#65190B',
        },
        shu: {
          500: '#D9401F',
          600: '#B8331A',
        },
        // Muted green for done states.
        matcha: {
          500: '#2F6B4F',
          100: '#DCE8E0',
        },
        sakura: {
          100: '#F4D2C9',
          400: '#E4553A',
          500: '#D9401F',
        },
        sky: {
          100: '#DCE6EC',
          400: '#5E7F92',
          500: '#3F6578',
        },
        sun: {
          100: '#EFE6C8',
          400: '#D9B44A',
          500: '#B8912C',
        },
        brand: {
          50: '#FBEDE9',
          100: '#F4D2C9',
          200: '#E9A393',
          500: '#D9401F',
          600: '#B8331A',
          700: '#8F2713',
        },
      },
      letterSpacing: {
        eyebrow: '0.14em',
      },
      boxShadow: {
        // Flat, offset "poster" shadows instead of soft glows.
        pop: '3px 3px 0 0 #151515',
        soft: '0 1px 0 0 rgba(21, 21, 21, 0.12)',
      },
    },
  },
  plugins: [],
};
