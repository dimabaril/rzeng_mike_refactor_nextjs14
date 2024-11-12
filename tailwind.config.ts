import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        aside: "url('/images/aside.png')",
        center_line: "url('/images/center_line.png')",
        main: "url('/images/main.png')",
        vertical_white: "url('/images/vertical_white.png')",
        vertical_bw: "url('/images/vertical_bw.png')",
        photo_duo: "url('/images/photo_duo.jpg')",
        photo_duo_bottom: "url('/images/photo_duo_bottom.png')",
        ring: "url('/images/ring.png')",
      },
    },
  },
  plugins: [],
};
export default config;
