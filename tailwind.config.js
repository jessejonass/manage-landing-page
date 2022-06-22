/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    screens: {
      mobile: '375px',
      tablet: '640px',
      laptop: '1024px',
      desktop: '1440px',
    },
    extend: {
      colors: {
        'manage-red': {
          700: 'hsl(12, 88%, 59%)',
          100: 'hsl(13, 100%, 96%)',
        },
        'manage-slate': {
          900: 'hsl(228, 39%, 23%)',
        },
        'manage-zinc': {
          900: 'hsl(233, 12%, 13%)',
          500: 'hsl(227, 12%, 61%)',
          100: 'hsl(0, 0%, 98%)',
        },
      },
      fontFamily: {
        sans: ['Be Vietnam', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
