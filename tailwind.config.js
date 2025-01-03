const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#151515",
        accent: "#FF3811",
        dark1: "#151515",
        dark2: "#444444",
        dark3: "#737373",
        dark6: "#E8E8E8",
        dark7: "#F3F3F3",
        "overlay-dark": "rgba(0, 0, 0, 0.6)",
      },
      container: {
        center: true,
        padding: "1rem",
      }
    },
  },
  plugins: [],
});