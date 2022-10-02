/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    namedGroups: ["btn3b"],
    extend: {
      zIndex: {
        "-1": "-1",
      },
      maxHeight: {
        "550px": "550px",
      },
    },
  },
  plugins: [require("daisyui"), [require("@tailwindcss/aspect-ratio")]],

  daisyui: {
    styled: true,
    themes: false,
  },
};
