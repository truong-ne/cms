/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}",
    "./*.vue"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5981FA",
        secondary: "#2b318a",
        colorCDDEFF: "#CDDEFF",
        color1C6AA3: "#1C6AA3",
        colorDF9F1E: "#DF9F1E",
        color009DC7: "#009DC7",
        color9D4B6C: "#9D4B6C",
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar-hide'),
  ],

}

