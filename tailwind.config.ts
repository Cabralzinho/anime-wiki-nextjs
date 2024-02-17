import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  theme: {
    extend: {
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
      colors: {
        dark10: "#13131F",
        dark20: "#282830",
        dark30: "#C4C4C4",
        dark40: "#FEFBFB",
        message: "#2962FF",
        success: "#0BB07B",
        warning: "#FFCE52",
        error: "#F03D3D",
        information: "#E0E0E0",
        brand: "#8257E6",
      },
    },
  },
  plugins: [],
};
export default config;
