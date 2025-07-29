/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#e6e6ff",
          "100": "#ccccff",
          "200": "#9999ff",
          "300": "#6666ff",
          "400": "#3333ff",
          "500": "#0000ff", // Main blue color
          "600": "#0000cc",
          "700": "#000099",
          "800": "#000066",
          "900": "#000033",
          "950": "#000019"
        }
      }
    },
  },
  plugins: [],
}