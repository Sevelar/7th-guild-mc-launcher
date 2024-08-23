const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/renderer/index.html',
    './src/renderer/src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      spacing: {
        1: '0.1rem',
        2: '0.2rem',
        3: '0.3rem',
        4: '0.4rem',
        5: '0.5rem',
        6: '0.6rem',
        7: '0.7rem',
        8: '0.8rem',
        9: '0.9rem',
        10: '1rem',
        15: '1.5rem',
        20: '2rem',
        25: '2.5rem',
        30: '3rem',
        35: '3.5rem',
        40: '4rem',
        45: '4.5rem',
        50: '5rem',
        55: '5.5rem',
        60: '6rem',
        65: '6.5rem',
        70: '7rem',
        75: '7.5rem',
        80: '8rem',
        85: '8.5rem',
        90: '9rem',
        95: '9.5rem',
        100: '10rem',
        150: '15rem',
        200: '20rem',
        300: '30rem',
        400: '40rem',
        500: '50rem',
        1000: '100rem'
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
}
