/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        shabnam: ["shabnam"],
      },
      boxShadow:{
        1:"0px 0px 25px 5px rgba(0,0,0,0.07)",
      },
    },
  },
  plugins: [],
};
