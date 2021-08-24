const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.jsx', './src/**/*.tsx', './src/**/*.js', './src/**/*.ts'],
  theme: {
    extend: {
      height: {
        550: '550px',
      },
      colors: {},
      fontFamily: {
        sans: ['Overpass', 'Inter var', ...defaultTheme.fontFamily.sans],
      },

      height: {
        15: '3.75rem',
        21: '5.5rem',
        62: '15.5rem',
      },
      width: {
        84: '21rem',
        15: '3.75rem',
        120: '30rem', // 480px
      },
      padding: {
        0.75: '0.1875rem',
        '15px': '0.9375rem',
        13: '3.25rem',
        13.5: '3.375rem',
        15: '3.75rem',
        18: '4.5rem',
      },
      minWidth: {
        10: '2.5rem',
        15: '3.75rem',
        20: '5rem',
        25: '6.25rem',
        30: '7.5rem',
        40: '10rem',
        54: '13.5rem',
        60: '15rem',
        68: '17rem',
        80: '20rem',
        100: '30rem',
      },
      minHeight: {
        10: '2.5rem',
        12: '3rem',
        15: '3.75rem',
        20: '5rem',
        25: '6.25rem',
        30: '7.5rem',
        40: '10rem',
        60: '15rem',
        68: '17rem',
        80: '20rem',
        100: '30rem',
      },
      margin: {
        0.75: '0.1875rem',
        13.5: '3.375rem',
        15: '3.75rem',
        18: '4.5rem',
        22: '5.5rem',
      },
      maxWidth: {
        10: '2.5rem',
        15: '3.75rem',
        20: '5rem',
        25: '6.25rem',
        30: '7.5rem',
        40: '10rem',
        48: '12rem',
        52: '13rem',
        60: '15rem',
        64: '16rem',
        80: '20rem',
        login: '28rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
