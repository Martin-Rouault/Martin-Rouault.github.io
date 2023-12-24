/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  daisyui: {
    themes: [
      {
        cupcake: {
          ...require("daisyui/src/theming/themes")["cupcake"],
          "background-color": "#ffffff",
          "color": "#0A0C10",
          "primary": "#4433FF",
          "secondary": "#E60067",
          "accent": "#CAE4F5",
          ".btn-cv": {
            "border-radius": "1rem",
          },
        },
        night: {
          ...require("daisyui/src/theming/themes")["night"],
          "color": "#FFFFFF",
          "background-color": "#0E141B",
          "primary": "#617BFF",
          "secondary": "#FF0A78",
          "accent": "#2B4555",
        },
      },
    ],
  },

  theme: {
    extend: {},
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
