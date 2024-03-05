/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        navBarHeight: "8%",
      },
      colors: {
        bgTan: "#D7CEC7",
      },
    },
  },
  plugins: [],
};
