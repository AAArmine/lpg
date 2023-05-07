/* eslint-disable prettier/prettier */
/* eslint-disable global-require */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f5f7',
          100: '#eaeaf0',
          200: '#cacbd9',
          300: '#aaacc1',
          400: '#6a6d93',
          500: '#2A2F65',
          600: '#262a5b',
          700: '#20234c',
          800: '#191c3d',
          900: '#151731',
        },
      },
      padding: {
        '1/3': '33.3333%',
        '2/3': '66.6667%',
      },
      fontFamily: {
        sans: ['Rubik', ...fontFamily.sans],
      },
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
