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
        'custom-1': '0.1rem',
        'custom-2': '0.2rem',
        'custom-3': '0.3rem',
        'custom-4': '0.4rem',
        'custom-5': '0.5rem',
        'custom-6': '0.6rem',
        'custom-7': '0.7rem',
        'custom-8': '0.8rem',
        'custom-9': '0.9rem',
        'custom-10': '1rem',
        'custom-15': '1.5rem',
        'custom-20': '2rem',
        'custom-25': '2.5rem',
        'custom-30': '3rem',
        'custom-35': '3.5rem',
        'custom-40': '4rem',
        'custom-45': '4.5rem',
        'custom-50': '5rem',
        'custom-55': '5.5rem',
        'custom-60': '6rem',
        'custom-65': '6.5rem',
        'custom-70': '7rem',
        'custom-75': '7.5rem',
        'custom-80': '8rem',
        'custom-85': '8.5rem',
        'custom-90': '9rem',
        'custom-95': '9.5rem',
        'custom-100': '10rem',
        'custom-150': '15rem',
        'custom-200': '20rem',
        'custom-300': '30rem',
        'custom-400': '40rem',
        'custom-500': '50rem',
        'custom-1000': '100rem'
      },
      fontSize: {
        'custom-1': '0.1rem',
        'custom-2': '0.2rem',
        'custom-3': '0.3rem',
        'custom-4': '0.4rem',
        'custom-5': '0.5rem',
        'custom-6': '0.6rem',
        'custom-7': '0.7rem',
        'custom-8': '0.8rem',
        'custom-9': '0.9rem',
        'custom-10': '1rem',
        'custom-11': '1.1rem',
        'custom-12': '1.2rem',
        'custom-13': '1.3rem',
        'custom-14': '1.4rem',
        'custom-15': '1.5rem',
        'custom-20': '2rem',
        'custom-25': '2.5rem',
        'custom-30': '3rem',
        'custom-35': '3.5rem',
        'custom-40': '4rem',
        'custom-45': '4.5rem',
        'custom-50': '5rem'
      }
    }
  },
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: 'nextui',
      defaultTheme: 'dark'
    })
  ]
}
