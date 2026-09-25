/** @type {import('tailwindcss').Config} */
// Merge the `theme.extend` block into your existing tailwind.config.js.
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        midnight: "#14163B",
        paper: "#F4F5FB",
        mist: "#E3E5F1",
        muted: "#5A5F85",
        dusk: {
          50: "#F0EFFE",
          100: "#E1DFFC",
          200: "#C6C2F8",
          300: "#A29BF1",
          400: "#7F75E8",
          500: "#5F53DE",
          600: "#4A3DCB",
          700: "#3B30A8",
          800: "#2E2683",
          900: "#1F1B5A",
        },
        marigold: { DEFAULT: "#FFB020", soft: "#FFF3D6", dark: "#7A4F00" },
        beacon: { DEFAULT: "#E42A40", dark: "#B81C33", soft: "#FFE9EC" },
        haven: { DEFAULT: "#12A38A", soft: "#DFF5F0", dark: "#0B6B5B" },
      },
      // Custom fonts have one family per weight in React Native,
      // so each weight gets its own class: font-display, font-bodyBold, ...
      fontFamily: {
        display: ["BricolageGrotesque_700Bold"],
        displaySemi: ["BricolageGrotesque_600SemiBold"],
        body: ["Figtree_400Regular"],
        bodyMedium: ["Figtree_500Medium"],
        bodyBold: ["Figtree_700Bold"],
      },
    },
  },
  plugins: [],
};
