/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F8C8DC', // Replace with your desired color value
        secondary: '#8B4A65',
        // Add more custom colors as needed
      },
      fontFamily: {
        'berlin-rounded': ['Berlin Round', 'sans-serif'],
        'sloopscript': ['sloop_script', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui"), require('tailwindcss-gradients')],
}

