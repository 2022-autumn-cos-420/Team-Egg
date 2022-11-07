/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        crt_darkGrey: 'rgb(40,40,40)',
        crt_amber: 'rgb(255,176,0)',
        crt_lightAmber: 'rgb(255,204,0)',
        crt_green: 'rgb(51,255,0)',
        crt_apple: 'rgb(51,255,51',
        crt_green2: 'rgb(0,255,51)',
        crt_lightApple: 'rgb(102,255,102',
        crt_lightGreen: 'rgb(0,255,102)'
      }
    }
  },
  plugins: [],
}
