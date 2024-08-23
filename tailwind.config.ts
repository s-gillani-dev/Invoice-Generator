import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        // => @media (min-width: 320px) { ... }
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1376px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        'dark': '#101828',
        'white': '#FFFFFF',
        'purple': '#7F56D9',
        'gray': {
          '100': '#F5F5F5',
          '200': '#8E8E8E',
          '300': '#76787D',
          '400': '#667085',
          '500': '#555555',
          '600': '#344054'
        }
      }
    },
  },
  plugins: [],
};
export default config;
