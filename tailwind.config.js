/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
        open: "open 0.25s ease-out 1",
      },
      keyframes: {
        open: {
          "0%": { transform: "translateX(-50px)", opacity: "0" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
