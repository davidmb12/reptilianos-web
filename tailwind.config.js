/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      fontFamily:{
        Montserrat:['Montserrat Alternate','sans-serif'],
        Pangolin:['Pangolin','cursive'],
        Rubik:['Rubik Spray Paint','cursive'],
        RubikMicrobe:['Rubik Microbe','cursive'],
        Grandiflora:['Grandiflora One','serif'],
      },
      colors:{
        lightGreen:'#4caf50'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'snake-01':"url('/snake-02.jpg')",
      },
      
      
    },
  },
  plugins: [],
}
