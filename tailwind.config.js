/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  daisyui: {
    themes: [
      {
        cupcake: {
          ...require("daisyui/src/theming/themes")["cupcake"],
          ".btn-cv": {
            "border-radius": "1rem",
          },
          ".menu-btn": {
            "border-radius": "1rem",
          },
        },
        sunset: {
          ...require("daisyui/src/theming/themes")["sunset"],
          ".app": {
            "color": "#FFFFFF",
          },
        },
      },
    ],
  },

  theme: {
    extend: {},
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
