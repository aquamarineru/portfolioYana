/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        tomatoes: "#d93333",
        dark: "#242424",
        light: "#f5f5f5",
        hover: "#FFA395",
      },
      fontFamily: {
        tomatoes: ["Tomatoes", "sans-serif"],
        ricordi: ["Ricordi", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'main': "url('../../public/cover.jpg')"
      },
      boxShadow: {
        custom: "0 -1px 4px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
}
