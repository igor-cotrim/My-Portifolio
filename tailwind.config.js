module.exports = {
  purge: [
    './pages/**/*.tsx}', './components/**/*.tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      swash: ['Berkshire Swash'],
      marker: ['Permanent Marker'],
     },
    extend: {
      colors: {
        indigo: {
          DEFAULT: '#6366f1',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
