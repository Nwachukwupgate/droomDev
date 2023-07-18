/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      colors: {
        primary: '#001935',
      },
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
};
