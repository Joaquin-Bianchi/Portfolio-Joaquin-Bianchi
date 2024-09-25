import animations from "@midudev/tailwind-animations";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ,
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        text: "text 7.2s ease infinite",
        wave: "wave 0.5s ease-in-out infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
      },
      colors: {
        bg: "#f5f5f4",
        "semi-slate": "#EEF1EF",
        violeta: "#011627",
        "black-opaque": "#0f172a",
      },
      fontFamily: {
        "Hind-Madurai": ["Hind Madurai", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [addVariablesForColors],
};
// font-family: 'Hind Madurai', sans-serif;
// font-family: 'Lusitana', serif;
// font-family: 'Montserrat', sans-serif;
// 'text': '#232323',
// 'background': '#f0fffd',
// 'primary': '#dd031d',
// 'secondary': '#9effec',
// 'accent': '#c9031a',
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
