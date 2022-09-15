/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        opens: ["'Open Sans'", "sans-serif"],
      },
      h1: {
        fontsize: "2.5rem",
      },
      colors: {
        primary: "#FF874F",
        primaryHover: "#FE6C23",
        secondary: "#4457FF",
        primaryDark: "#21222D",
        secondaryDark: "#7B7B81",
        error: "#EE6F6E",
        warning: "#FCD969",
      },
      boxShadow: {
        hoverButton: "0px 0px 6px 0px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
