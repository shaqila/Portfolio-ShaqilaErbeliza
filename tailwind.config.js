/** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         borel: ["Borel", "cursive"],
//         nunito: ["Nunito", "sans-serif"],
//       },
//     },
//   },
//   plugins: [],
// };

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        flying: {
          "0%": { transform: "translateY(25rem)", opacity: 0.3 },
          "50%": { transform: "translateY(0rem)", opacity: 1 },
          "100%": { transform: "translateY(-25rem)", opacity: 0 },
        },
        badge: {
          "100%": {
            transform: "scaleY(1.7) scaleX(1.25)",
            opacity: "0",
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
        "flying-card": "flying 5s linear infinite",
        "badge-pulse": "badge 1.5s ease-out infinite",
        blob: "blob 7s infinite",
      },
    },
  },
  plugins: [],
};
