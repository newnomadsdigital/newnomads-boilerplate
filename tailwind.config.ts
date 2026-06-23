import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        // Luna brand palette (mapped from the Figma design tokens)
        luna: {
          orange: "#f15822", // top bar / brand accent
          foreground: "#ff7100", // service cards
          peach: "#ff9b4c", // contact background
          slate: "#4d5252", // dark CTA background
          ink: "#020808", // darkest text
          line: "#d9d9d9", // neutral divider
        },
      },
      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
      },
      fontSize: {
        // Luna type scale from Figma (size / line-height / tracking)
        h1: ["56px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h2: ["48px", { lineHeight: "1.2", letterSpacing: "-0.48px" }],
        h3: ["40px", { lineHeight: "1.2", letterSpacing: "-0.4px" }],
        h5: ["24px", { lineHeight: "1.4", letterSpacing: "-0.24px" }],
        "body-lg": ["18px", { lineHeight: "1.5" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        soft: "0 12px 40px -20px rgb(0 0 0 / 0.25)",
        "luna-card": "0 30px 60px -36px rgb(2 8 8 / 0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
