/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary" :"#01e0c3",
        // "secondary" : "#ff285e",
        "secondary" : "#fc537e",
      }
    },
  },
  plugins: [],
};
