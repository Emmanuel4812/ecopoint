const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      colors:{
        greenEco: '#50D130',
        blueEco: '#0E4BEF',
        blueEcoLight:'#98afed'
      },
      fontFamily:{
        elegant: ['Nanum Gothic']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
