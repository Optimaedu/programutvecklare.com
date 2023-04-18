/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat",
      },
      backgroundImage: {
        custom: ["-webkit-linear-gradient(#edbf91, #db7d12)"],
        bg: "url('/background.webp')",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    function ({ addUtilities }) {
      addUtilities({
        ".bg-clip-text": {
          "-webkit-background-clip": "text",
          "-moz-background-clip": "text",
        },
        ".text-transparent": {
          "-webkit-text-fill-color": "transparent",
          "-moz-text-fill-color": "transparent",
        },
      });
    },
  ],
};
