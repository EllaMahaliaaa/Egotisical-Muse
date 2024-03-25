/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ff007f",
        secondary: "#ff69b4",
        brandRed: "#ff69b4",
        brandPink: "#ffb6c1",
        brandWhite: "#eeeeee",
        brandBlack: "#000000",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        }
      }
    },
  },
  plugins: [],
};