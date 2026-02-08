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
        yellowPrimary: "#d2ae6d",
        teaGreen: "#7cbb7c",
        aboutGreen: "#51a8b1",
        grayBg: "#868686",
        lightGrayBg: "#dddddd",
        grayBlue : "#a6b8b8",
        specialBlue : "#4c9db2",
        specialOrange : "#b3624d",
        specialSBrow: "#574748",
        spicePink: "#a46080",
        spiceGreen: "#51a8b1",
        
      },
      
      
    },
  },
  plugins: [],
}

