module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      listStyleType: {
        circle: 'circle',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
