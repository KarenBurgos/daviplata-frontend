/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        primary: "#BF0019",
        white: "#FFF3F4",
        placeholder: "#BDBDBD",
      },
      fontFamily: {
        'comfortaa': ["Comfortaa", "sans-serif"],
      },
    },
  },
  plugins: [],
}

