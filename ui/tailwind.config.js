/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "18%": "18%",
        "70%": "70%",
        "90%": "83%",
        "92%": "92%",
        "1/8": "12.5%",
      },
      width: {
        profileImgWidth: "22%",
        "30%": "30%",
        "40%": "40%",
        "45%": "45%",
        "95%": "95%",
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
      backgroundImage: {},
      colors: {
        bgTan: "#D7CEC7",
      },
      fontFamily: {
        abril: ["Abril Fatface"],
      },
      boxShadow: {
        matchButton: "0 0.2rem 0.1rem 0.1rem rgba(0, 0, 0, 0.3)",
        defaultButton: "0 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
