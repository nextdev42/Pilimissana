const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        notoserif: ["Noto Serif", "serif"],
      },
      colors: {
        black: colors.black,
        purple: "#827fb9",
        pink: "#aaafeb",
        darkpurple: "#634880",
        white: colors.white,
        lightblack: "#141414",
        bg: "hsla(243, 60%, 95%, 1)",
        dp: "#525074",
        gray: colors.gray,
        transparent: "transparent",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
      screens: {
        xxs: "320px",
        xs: "425px",
        sm: "640px",
        md: "920px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [],
}
