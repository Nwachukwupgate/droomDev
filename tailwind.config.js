/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#001935',
        'divider-grey': '#8D8989',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
