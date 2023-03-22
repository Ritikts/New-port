/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6C757D",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#343A40",
          "base-100": "#CED4DA",
        },
      },

    ],
  },
  plugins: [require("daisyui")],
}