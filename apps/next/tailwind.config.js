/** @type {import('tailwindcss').Config} */

const { nextui } = require('@nextui-org/theme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/preline/preline.js',
    './node_modules/@nextui-org/theme/dist/components/(card|skeleton).{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      filter: {
        'red': 'invert(42%) sepia(95%) saturate(7496%) hue-rotate(357deg) brightness(95%) contrast(112%)',
        'yellow': 'invert(55%) sepia(100%) saturate(2000%) hue-rotate(20deg) brightness(95%) contrast(90%)',
      },
      fontSize: {
        'sm': ['1rem', { lineHeight: '1.25rem' }],
        'md': ['18px', { lineHeight: '1.25rem' }],
      },
      colors: {
        'custom-background': '#FFFFFF',
        'custom-background-section': '#FAFAFA',
        'custom-title': '#313131',
        'custom-subtitle': '#535353',
        'custom-text': '#6B7280',
        'custom-red-text': '#FD4F50',
        'custom-primary-button': '#FD4F50',
        'custom-secondary-button': 'rgba(253, 79, 80, 0.15)',
        'custom-gray': '#E7E7E7',
        'custom-green-text': "#00B67A",
        'custom-dark-gray': '#535353',
        'custom-red-75': 'rgba(253, 79, 80, 0.75)',
        'custom-subtext-grey': '#898989',
        'custom-grey-info': '#50555B',
        'custom-green-light': '#00B67A26',
        'custom-red-bg': 'rgba(253, 79, 80, 0.15)',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'custom-background': '#FFFFFF',
        'custom-primary-button': '#FD4F50',
        'custom-secondary-button': 'rgba(253, 79, 80, 0.15)',
        'custom-gray-bg': '#E7E7E7',
        'custom-red-bg-opacity' : '#FD4F500F',
        'custom-mob-bg': '#92929240',
        'custom-green-bg': '#00B67A26',
      }),
      borderColor: {
        'custom-red-opacity': '#FD4F5040',
        'custom-green-opacity': '#00B67A40',
        'custom-grey-border': '#E7E7E7',
      },
      backdropBlur: {
        '20%': '20%',
      },
    },
  },
  darkMode: false,
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('preline/plugin'),
    nextui(),
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      })
    },
  ],
};
