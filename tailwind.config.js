const colors = require('tailwindcss/colors')

module.exports = {
  purge: [`_site/**/*.html`],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('autoprefixer'),
  ],
};