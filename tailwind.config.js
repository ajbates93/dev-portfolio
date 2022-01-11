module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Amaranth', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        'mint-green': '#76c1b2',
        'pastel-blue': '#76abc1',
        'dark-pink': '#c176ab'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
