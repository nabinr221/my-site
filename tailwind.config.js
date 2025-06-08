/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        titleColor: "#42446E", // Replace with your custom color
        titleSubColor: "#666666", // Replace with your custom color
        titleLightColor: "#A7A7A7", // Replace with your custom color
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "blue",
          "primary-focus": "mediumblue",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
