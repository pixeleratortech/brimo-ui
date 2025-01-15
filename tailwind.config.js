/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "brineue-bold": ["BRINeueFaceBold", "sans-serif"],
        "brineue-regular": ["BRINeueFaceRegular", "sans-serif"],
      },
      colors: {
        primary: {
          blue: "#06549D",
          white: "#FAFAFA",
          black: "#161627",
          grey: "#AAAAAA",
        },
        secondary: {
          blue: "#15A6DF",
        },
        accent: {
          orange: "#F7821B",
        },
        tertiary: {
          blue: "#DDEFFC",
        },
      },
      boxShadow: {
        faq: "0px 10px 30px 0px rgba(0, 0, 0, 0.05)",
      },
      backgroundImage: {
        "hero-banner": "url('/images/qlola_hero_banner.svg')",
        "giro-banner": "url('/images/background_giro.svg')",
      },
    },
  },
  plugins: [],
};
