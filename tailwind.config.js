/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  variants: {
    opacity: ['hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
};
