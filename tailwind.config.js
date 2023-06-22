/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dashboard: "#F3F2F7",
        lightGrey: "#D0D6DE",
        secondary: "#00f6ff",
        hintGrey: "#969BA0",

        // notification color
        blue_faded: "rgba(45, 156, 219, 0.15)",
        blue: "#2D9CDB",

        // gifts color
        grey: "#5E6C93",
        grey_faded: "rgba(94, 108, 147, 0.15)",

        // settings color
        red_faded: "rgba(255, 91, 91, 0.15)",
        red: "#FF5B5B",

        green_faded : "rgba(0, 176, 116, 0.15)",
        green: "#00B074",

        titleBlack: "#464255",
        filterdates: "#3E4954",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
