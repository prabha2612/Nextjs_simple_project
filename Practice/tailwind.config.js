/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{jsx,tsx}", "./components/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ultra: ["var(--font - ultra)", "san-serif"],
      },
      // colors: {
      //   primary: {
      //     DEFAULT: "#000000",
      //   },
      //   secondary: {
      //     DEFAULT: "#000000",
      //   },
      // },
    },
  },
  plugins: [],
};
