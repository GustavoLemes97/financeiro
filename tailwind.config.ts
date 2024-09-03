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
  			yellow: '#F6BE25',
  			'soft-yellow': '#F6BE25E5',
  			blue: '#317FB5',
  			white: '#FFFFFF',
  			grey: '#4D4E4C',
  			'grey-2': '#91968F',
  			'soft-grey': '#E9E9E9',
  			'soft-grey-2': '#D3CCCC',
  			green: '#2B9B35',
  			red: '#BD4040',
  			'red-2': '#FFCCCC'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
