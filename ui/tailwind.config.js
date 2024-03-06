/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        navBarHeight: "8%",
        "90%": "83%",
        "92%": "92%",
      },
      width: {
        profileImgWidth: "22%",
        "95%": "95%",
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
    },
  },
  plugins: [],
};
