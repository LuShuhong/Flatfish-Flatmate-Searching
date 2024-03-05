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
      backgroundImage: {
        mediaCity: "url('/src/img/mainPageBg.jpeg')",
      },
    },
  },
  plugins: [],
};
