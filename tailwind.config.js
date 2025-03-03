/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",flowbite.content(),],
  theme: {
    extend: {
      colors: {
        'mainColor': '#40C1BD',
        'secondColor': '#4A4A4A',
        'thirdColor': '#ABABAB',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

