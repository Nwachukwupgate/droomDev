/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#001935',
        secondary: '#F58800',
        'divider-grey': '#8D8989',
        input: '#B7B3B3',
        grey: '#575555',
      },
      boxShadow: {
        card: '0px 20px 25px -5px rgba(0, 0, 0, 0.25)',
        'card-sm': '0px 4px 10px -5px rgba(0, 0, 0, 0.25)',
        header: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)',
        table: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
