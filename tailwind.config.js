/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        grayColor: '#787486',
        blackColor: '#0D062D'
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
