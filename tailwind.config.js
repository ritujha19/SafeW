/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#67a2e1",
        primaryDark: "#0f4e92",
        primaryLight: "#dcecff",
        background: "#f5f8fb",
        surface: "#ffffff",
        text: "#09325f",
        muted: "#555555",
        accent: "#e8f4f8",
        warning: "#f4b942",
      },
      fontFamily: {
        sans: ["Figtree", "sans-serif"],
        display: ["Bricolage Grotesque", "sans-serif"],
      },
    },
  },
  plugins: [],
};
