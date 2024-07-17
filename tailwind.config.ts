import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "button": '#003498',
        "home": "#F6F6F6",
        "page2": "#1D1D1D",
        "page3": "#1D1D1D",
        "page5": "#F9F9F9"
      },

    },

  },
  plugins: [],
};
export default config;
