/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandYellow: "#D3E97A",
      },
      fontFamily :{
        manrope: ["Manrope", 'serif'],
        bebasneue: ["Bebas Neue", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

