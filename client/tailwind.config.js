/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        crt_BB_lightBlue: 'rgb(123, 175, 212)',
        crt_BB_darkBlue: 'rgb(11, 11, 69)',
        crt_BB_white: 'rgb(255, 255, 255)',
        crt_BB_black: 'rgb(0,0,0)',
        crt_BB_grey: 'rgb(178, 190, 181)'
      }
    }
  },
  plugins: [],
}
