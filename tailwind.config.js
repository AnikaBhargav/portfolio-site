/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mauve: '#b66373',
        beige: '#e4d6d6',
        beigeDark: '#e0c7c8',

      },
      fontFamily: {
        waterfall: ["Waterfall", "Serif"]
      }
    },
  },
  plugins: [],
}