/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0a0a0a",
        "dark-gray": "#121212",
        "neon-blue": "#00f2ff",
        "neon-pink": "#ff00ff",
        "neon-green": "#00ff66",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%": {
            textShadow:
              "0 0 5px rgba(0, 242, 255, 0.7), 0 0 10px rgba(0, 242, 255, 0.5)",
          },
          "100%": {
            textShadow:
              "0 0 10px rgba(0, 242, 255, 0.9), 0 0 20px rgba(0, 242, 255, 0.7), 0 0 30px rgba(0, 242, 255, 0.5)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
