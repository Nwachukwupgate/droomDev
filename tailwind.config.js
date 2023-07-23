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
      boxShadow: {
        card: '0px 20px 25px -5px rgba(0, 0, 0, 0.25)',
        'card-sm': '0px 4px 10px -5px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
