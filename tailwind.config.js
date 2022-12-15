/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/*.html", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        'beeda': {
          primary: '#163BDE',
          secondary: '#FFEF04',
          neutral: '#2E3A59',
          inverted: '#C4C4C4',
          tertiary: '#979797',
          neonblue: '#CED7FF',
          gray: '#2F2F2F',
          light: '#f2f3f8',
          link: '#2F80ED',
          success: '#04C600',
          
        }
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tw-elements/dist/plugin')
  ],
}
