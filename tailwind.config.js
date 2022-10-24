/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        crvsblue: {
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        crvsgreen: {
          300: "#86efac",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        crvsicon: {
          100: "#e2e8f0",
          900: "#0f172a",
        },
      },
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
      robot: ["Roboto Mono", "monospace"],
    },
  },
  plugins: [],
};
