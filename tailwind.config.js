/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      normal: "#289c00",
      medium: "yellow",
      high: "#a80000",
      transparent: "transparent",
      first: "#38404B",
      second: "#94ADCF",
    },
    extend: {
      boxShadow: {
        primary: "0px 0px 12px 4px rgba(148, 173, 207, 0.2)",
      },
      gridTemplateColumns: {
        form: "1fr 3fr 1fr",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};

