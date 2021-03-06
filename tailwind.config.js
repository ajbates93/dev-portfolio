module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif']
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
