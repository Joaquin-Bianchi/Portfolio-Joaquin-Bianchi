/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        text: "text 3.2s ease infinite",
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
      },
      colors: {
        gris: "#FDFFFC",
        "semi-slate": "#EEF1EF",
        violeta: "#011627",
        "black-opaque": "#0f172a",
      },
      fontFamily: {
        "Hind Madurai": ["Hind Madurai", "sans-serif"],
        Lusitana: ["Lusitana", "serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
// font-family: 'Hind Madurai', sans-serif;
// font-family: 'Lusitana', serif;
// font-family: 'Montserrat', sans-serif;
// 'text': '#232323',
// 'background': '#f0fffd',
// 'primary': '#dd031d',
// 'secondary': '#9effec',
// 'accent': '#c9031a',
