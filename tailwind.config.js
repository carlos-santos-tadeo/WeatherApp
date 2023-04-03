/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lato": ['Lato', "sans-serif"]
      },
      gridTemplateColumns:{
        //cada columna va ocupar lo que el contenedor requiera de ella
        "two": "auto auto"
      }
    },
  },
  plugins: [],
}

