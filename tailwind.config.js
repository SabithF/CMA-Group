/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        messiri: ["El Messiri", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
        cursiveFont: ["cursiveFont", "cursive"],
      },
      colors: {
        yellowPrimary: "#d2ae6d"
      },
      
      
    },
  },
  plugins: [],
}

