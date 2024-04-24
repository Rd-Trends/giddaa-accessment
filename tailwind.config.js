/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        red_hart_display: ["Red Hat Display Variable", "sans-serif"],
        millik: ["Millik", "sans-serif"],
        default: ["Red Hat Display Variable", "sans-serif"],
      },
      colors: {
        "yellow-primary": "#C3B40A",
        "yellow-tertiary": "#F5F5DE",
        "mid-grey": "#DEDEDE",
        "mid-accent-green": "#E9F5E7",
        "light-accent-green": "#F3FAF2",
        "offer-letter-template": "#0089D1",
        purple: "#640164",
        orange: "#EA6C10",
        "red-alert": "#D10808",
        secondary: "#0A7E32",
        "dark-grey": "#4B4B4B",
        primary: "#335F32",
        "light-grey": "#F0F0F0",
        "grey-f2": "#F2F2F2",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          sm: "820px",
          md: "1024px",
          lg: "1280px",
          xl: "1468px",
          "2xl": "1536px",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
