const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
      },
      textColor: {
        inherit: 'inherit',
      },
      fontSize: {
        inherit: 'inherit',
      },
      fontFamily: {
        sans: ['Mulish'],
        barlow: ['Barlow'],
      },
      colors: {
        white: {
          DEFAULT: colors.white,
          smoke: '#f5f5f5',
        },
        orange: {
          DEFAULT: '#f96229',
          'fade-min': '#f96229',
          'fade-max': '#ff9100',
        },
        grey: {
          dark: '#7c839b',
          light: '#a5aab8',
        },
        blue: {
          DEFAULT: "#161a2b",
          header: '#171A2B'
        },
        pink: {
          polkadot: '#e6017a',
        },
        black: {
          polkadot: '#231f20',
        },
      },
      borderWidth: {
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      maxWidth: {
        590: '36.875rem',
        780: '48.75rem',
        940: '58.75rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
