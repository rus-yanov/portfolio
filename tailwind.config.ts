import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#0b0d10",
        panel: "#0f1217",
        grid: "rgba(148, 163, 184, 0.08)",
        accent: "rgb(184 106 46 / <alpha-value>)",
        accentHover: "rgb(204 122 58 / <alpha-value>)",
        accentMuted: "rgb(138 78 34 / <alpha-value>)",
        ink: "#e6e9ef",
        muted: "#98a2b3"
      },
      boxShadow: {
        glow: "0 0 34px rgba(184, 106, 46, 0.14)",
        card: "0 0 0 1px rgba(138, 78, 34, 0.22), 0 10px 30px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
