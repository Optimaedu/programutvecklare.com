/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat",
      },
      backgroundImage: {
        custom: ["-webkit-linear-gradient(#ffffff, #000000)"],
      },
    },
  },
  plugins: [],
};
