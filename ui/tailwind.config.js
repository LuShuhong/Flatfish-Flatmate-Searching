/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "serif-display": ["DM Serif Display", "serif"],
        "playfair-display": ["Playfair Display", "serif"],
        "roboto-condensed": ["Roboto Condensed", "sans serif"],
      },
      height: {
        navBarHeight: "8%",
        "90%": "83%",
        "92%": "92%",
      },
      width: {
        profileImgWidth: "22%",
        "95%": "95%",
        "70%": "70%",
      },
      borderRadius: {
        profileBR: "2rem",
        "1/2": "50%",
      },
      backgroundColor: {
        formElementColor: "#535150",
      },
      backgroundImage: {
        bg1: "url('/src/img/mainBackground1.jpeg')",
        bg2: "url('/src/img/mainBackground2.jpeg')",
        bg3: "url('/src/img/mainBackground3.webp')",
        bg4: "url('/src/img/mainBackground4.jpeg')",
      },
      backgroundColor: {
        "sea-green": "#9BBFBB",
        "pastel-blue": "#C6E2FF",
        "light-tan": "#D7CEC7",
        "grey-darker": "#D9D9D9",
        "grey-lighter": "#E5E5E5",
        "lighter-grean": "#DBDED2",
      },
    },
  },
  plugins: [],
};
