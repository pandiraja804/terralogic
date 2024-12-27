/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#15151b",
      silver: "#8e1717 ",
      "bubble-gum": "#ff77e9",
      black1: "#7d8985",
      black2: "#050511",
      black: "#000"
    },
    extend: {

      fontFamily: {
        roboto: ["cursive", "font-mono"],
      },
      fontSize: {
        20: "20px", // Custom font size
        16: "16px",
      },
      spacing: {
        "pt-2": "2rem",
        "pt-4": "4rem",
        "h-34": "34px",
        "w-34px": "34px",

        // 'px-4': '4rem',
      },
      minWidth: {
        "screen-xs": "475px", // Custom min width for xs
        "screen-sm": "640px", // Custom min width for sm
      },
      maxWidth: {
        "screen-lg": "1024px", // Custom max width for lg
        "screen-xl": "1280px", // Custom max width for xl
      },
      minHeight: {
        300: "300px", // Custom min-height
      },
      scrollBehavior: ["smooth"],
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
