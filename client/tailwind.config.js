/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "admin-white": "#f7f7f7",
        "admin-dark": "#393e46",
        "admin-light-gray": "#eeeeee",
        "admin-gray": "#929aab"
      }
    },
  },
  plugins: [],
}
