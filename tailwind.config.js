/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./assets/Headerbackground.jpg')",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 20s linear infinite",
        'horizontal-scroll': 'horizontal-scroll 30s linear infinite',
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "horizontal-scroll": {
          from: { transform: "translateX(100%)" },
          to: { transform: " translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
