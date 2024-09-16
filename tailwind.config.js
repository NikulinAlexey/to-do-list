/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "task-active":
          "-40px -40px 40px -20px rgba(174, 197, 214, 0.2), 40px 40px 40px -20px rgba(6, 23, 36, 0.2)",
      },
    },
  },
  plugins: [],
};

