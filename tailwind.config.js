/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      listStyleType: {
        circle: 'circle',
      },
    },
  },
  plugins: [],
}
