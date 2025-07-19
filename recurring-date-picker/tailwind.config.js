/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out both",
      },
    },
  },
  plugins: [],
};
