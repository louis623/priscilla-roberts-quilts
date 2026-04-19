import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          default: "#0f0a1a",
          black: "#070309",
          warm: "#15100f",
        },
        surface: {
          1: "#1a1228",
          2: "#241932",
        },
        lavender: "#c4a0e8",
        purple: "#7f57c2",
        sage: "#7dcea0",
        emerald: "#5dca88",
        cream: {
          DEFAULT: "#f5f0e8",
          muted: "#a89f94",
          dim: "#6b6258",
        },
      },
      fontFamily: {
        serif: ["var(--serif-display)"],
        body: ["var(--serif-text)"],
        sans: ["var(--sans)"],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        md: "19px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "72px",
        "4xl": "112px",
        "5xl": "160px",
      },
      spacing: {
        "sp-1": "4px",
        "sp-2": "8px",
        "sp-3": "12px",
        "sp-4": "16px",
        "sp-5": "24px",
        "sp-6": "32px",
        "sp-7": "48px",
        "sp-8": "64px",
        "sp-9": "96px",
        "sp-10": "128px",
        "sp-11": "160px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
