/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
         scaleIn: "scaleIn 0.3s ease-out",
         blinkLight: "blinkLight 1.5s infinite ease-in-out",
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
         blinkLight: {
        "0%, 100%": { opacity: "1", transform: "scale(1)" },
        "50%": { opacity: "0.3", transform: "scale(0.9)" },
      },
      },
    },
  },
  plugins: [],
}

