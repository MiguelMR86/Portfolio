/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn .3s forwards;",
        "fade-out": "fadeOut .3s forwards",
      },
      keyframes: {
        fadeIn: { to: { opacity: "1" } },
        fadeOut: { to: { display: "none", opacity: "0" } },
      },
    },
    colors: {
      primary: "#ffffff",
      button: "#ebeeff",
      "button-focus": "#0b73e1",
      "button-hover": "#d1d5fd",
      default: "#141416",
      focus: "#f4f7f6",
      settings: "#f1eeee",
    },
  },
  plugins: [],
}

