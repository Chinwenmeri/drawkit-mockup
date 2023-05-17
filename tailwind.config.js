/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        'xs':'480px'
      },
      width: {
        128: "60vw",
      },
      height: {
        128: "89vh",
      },
      fontFamily: {
        myfont: ["Rubik", "sans-serif"],
      },
      colors: {
        "main-back-100": "#f2e3db",
        "main-back-200": "#eef2ed",
        "mine-1000": "F9F9F9",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
