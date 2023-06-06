/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      translate: {
        "-full": "-100%",
        full: "100%",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
