/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        ballone: {
          "0%": { transform: "translate(0%, 0%)" },
          "25%": { transform: "translate(150%, 100%)" },
          "50%": { transform: "translate(350%, 150%)" },
          "75%": { transform: "translate(150%, 100%)" },
          "100%": { transform: "translate(0%, 0%)" },
        },
        balltwo: {
          "0%": { transform: "translate(0%, 0%)" },
          "25%": { transform: "translate(-150%, 100%)" },
          "50%": { transform: "translate(-350%, 150%)" },
          "75%": { transform: "translate(-150%, 100%)" },
          "100%": { transform: "translate(0%, 0%)" },
        },
      },
      animation: {
        ballone: "ballone 20s linear infinite",
        balltwo: "balltwo 30s linear infinite",
      },
    },
  },
  plugins: [],
};
