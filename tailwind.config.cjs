/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#091242",
        morning: "#FFBE34",
        esclipe: "#F4F4F4",
      },
      boxShadow: {
        "3xl": "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },
      fontFamily: {
        spaceMono: ["space Mono"],
      },
      screens: {
        mobile: "320px",
        tablet: "768px",
        // => @media (min-width: 640px) { ... }

        laptop: "1025px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1279px",
        // => @media (min-width: 1280px) { ... }
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
