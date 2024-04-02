import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        rollingstone: ["rolling-stone", 'sans-serif'],
      },
      colors: {
        "azul-escuro-forte": "#001520",
        "azul-escuro-medio": "#022a40",
        "azul-claro": "#00a2bc",
        "bege": "#f2efe6",
        "vermelho": "#bb241d",
        'vermelho-escuro': '#8f1b16',
        "vermelho-claro": "#FB3231",
        "cinza": "#222222",

      },
    },
  },
  plugins: [],
};
export default config;
