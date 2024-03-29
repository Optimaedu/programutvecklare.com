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
        behind: "url('/background.webp')",
      },
      animation: {
        custom: "custom 5s ease infinite",
      },
      keyframes: {
        custom: {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    function ({ addUtilities, addBase }) {
      addBase({
        'input[type="range"]': {
          "box-shadow": "inset 0 0 3px rgba(0, 0, 0, 1)",
          "&::-webkit-slider-thumb": {
            appearance: "none",
            width: "48px",
            height: "48px",
            border: "3px solid #a8a8a8",
            "border-radius": "50%",
            "background-color": "#1d1c25",
            "box-shadow": "-425px 0 0 400px #fb923c",
          },
          "&::-moz-range-thumb": {
            width: "42px",
            height: "42px",
            border: "3px solid #a8a8a8",
            "border-radius": "50%",
            "background-color": "#1d1c25",
            "box-shadow": "-420px 0 0 400px #fb923c",
          },
        },
      });
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
