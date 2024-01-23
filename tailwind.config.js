/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  daisyui: {
    themes: [
      {
        cupcake: {
          ...require("daisyui/src/theming/themes")["cupcake"],
          "background-color": "#ffffff",
          "text-color": "#0A0C10",
          "color": "#0A0C10",
          "primary": "#4433FF",
          "secondary": "#E60067",
          "accent": "#CAE4F5",
          "neutral": "#333940",
          "base-100": "#ffffff",
          "--rounded-btn": '0.5rem', // scale transform of button when you focus on it
          ".btn-cv": {
            "border-radius": "1rem",
          },
        },
        night: {
          ...require("daisyui/src/theming/themes")["night"],
          "color": "#FFFFFF",
          "background-color": "#151515",
          "primary": "#617BFF",
          "secondary": "#FF0A78",
          "accent": "#2B4555",
          "base-100": "#151515",
        },
      },
    ],
  },

  theme: {
    extend: {},
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
