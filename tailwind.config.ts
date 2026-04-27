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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "var(--bg-card)",
          foreground: "var(--text-primary)",
        },
        popover: {
          DEFAULT: "var(--bg-panel)",
          foreground: "var(--text-primary)",
        },
        primary: {
          DEFAULT: "var(--green)",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "var(--gold)",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "var(--bg-dark)",
          foreground: "var(--text-muted)",
        },
        accent: {
          DEFAULT: "var(--green-light)",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "var(--red)",
          foreground: "#ffffff",
        },
        border: "var(--border)",
        input: "var(--bg-dark)",
        ring: "var(--green)",
        "bg-dark": "var(--bg-dark)",
        "bg-panel": "var(--bg-panel)",
        "bg-card": "var(--bg-card)",
        "text-primary": "var(--text-primary)",
        "text-muted": "var(--text-muted)",
        green: "var(--green)",
        "green-light": "var(--green-light)",
        gold: "var(--gold)",
        red: "var(--red)",
        blue: "var(--blue)",
        purple: "var(--purple)",
        teal: "var(--teal)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
