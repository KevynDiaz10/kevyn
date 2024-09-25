import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#f5741c",
        darkBg: "#131424"
      },
      backgroundImage: {
        "gradient-cover":"bg-gradient-to-r from-blue-400 to-blue-500"
      },
    },
  },
  plugins: [],
};
export default config;
