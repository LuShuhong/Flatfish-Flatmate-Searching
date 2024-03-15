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
        "18%": "18%",
        "55%": "55%",
        "70%": "70%",
        "90%": "83%",
        "92%": "92%",
        "1/8": "12.5%",
      },
      width: {
        profileImgWidth: "22%",
        "30%": "30%",
        "40%": "40%",
        "43%": "43%",
        "45%": "45%",
        "95%": "95%",
        "97.5%": "97.5%",
        "70%": "70%",
        "60%": "60%",
      },
      borderRadius: {
        profileBR: "2rem",
        "1/2": "50%",
      },
      backgroundColor: {
        formElementColor: "#535150",
      },
      backgroundImage: {
        // bg1: "url('/src/img/mainBackground1.jpeg')",
        // bg2: "url('/src/img/mainBackground2.jpeg')",
        // bg3: "url('/src/img/mainBackground3.webp')",
        // bg4: "url('/src/img/mainBackground4.jpeg')",
      },
      backgroundColor: {
        "sea-green": "#9BBFBB",
        "pastel-blue": "#C6E2FF",
        "light-tan": "#D7CEC7",
        "grey-darker": "#D9D9D9",
        "grey-lighter": "#E5E5E5",
        "lighter-grean": "#DBDED2",
      },
      boxShadow: {
        matchButton: "0 0.2rem 0.1rem 0.1rem rgba(0, 0, 0, 0.3)",
        defaultButton: "0 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.3)",
      },
      padding: {
        agePadding: "0.67rem",
      },
    },
  },
  plugins: [],
};
