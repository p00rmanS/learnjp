/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
        jp: ['Noto Sans JP', 'Hiragino Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f3f5fa',
          100: '#e3e8f3',
          200: '#c8d2e8',
          500: '#4a63a8',
          600: '#37508f',
          700: '#2b406f',
        },
        paper: '#faf8f4',
        ink: '#1c1b19',
        vermilion: '#c8452f',
      },
    },
  },
  plugins: [],
};
