/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        blue: "#5175FF",
        lightblue: "#829CFF",
      },
      neutral: {
        darkgrey: "#25293A",
        lightgrey: "#333950",
        verylgrey: "#747B95",
        title: "#333950",
      },
      white: "#ffff",
      tomato: "#F05B5B",
    },
    fontFamily: { sans: "Kumbh Sans, sans-serif" },
    screens: { tablet: "768px", desktop: "1440px" },
    extend: {
      boxShadow: {
        "3xl": "3px 9px 55px -11px rgb(60, 60, 60)",
      },
      backgroundImage: {
        header: "url('/images/bg-pattern-header.svg')",
        footer: "url('/images/bg-pattern-footer.svg')",
        pricing: "url('/images/bg-pattern-pricing.svg')",
        card: "url('/images/bg-pattern-card.svg')",
      },
      backgroundPosition: { bottom4: "center bottom 10rem" },
      gridTemplateRows: {
        mobile: "auto 1fr 1fr/2 1fr",
        tabletheader: "150px 1fr",
        tabletcards: "1fr 1fr",
        desktopsignup: "auto 1fr .5fr auto",
      },
      gridTemplateColumns: {
        mobile: "",
        tabletheader: "1fr 1fr",
        desktopsignup: "45% 5vw 5vw 10vw 10vw 1fr",
      },
    },
  },
  plugins: [],
};
