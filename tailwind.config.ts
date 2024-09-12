import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#F6BE25",
        "soft-yellow": "#F6BE25E5",
        blue: "#317FB5",
        white: "#FFFFFF",
        grey: "#4D4E4C",
        "grey-2": "#91968F",
        "soft-grey": "#E9E9E9",
        "soft-grey-2": "#D3CCCC",
        green: "#2B9B35",
        red: "#BD4040",
        "red-2": "#FFCCCC",
      },
      screens: {
        md: "50rem",
        lg: "85.375rem",
        xl: "120rem",
      },
      backgroundImage: {
        "yellow-card-1": "url('../../public/profit-card-1.png')",
        "yellow-card-2": "url('../../public/profit-card-2.png')",
        "grey-card-1": "url('../../public/profit-card-3.png')",
        "grey-card-2": "url('../../public/profit-card-4.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
