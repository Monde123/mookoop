import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
    extend: {
      fontFamily: {
        system: ["var(--font-system-ui)", "-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "Segoe UI", "Roboto", "system-ui", "sans-serif"],
        charter: ["var(--font-charter)", "Charter", "Source Serif Pro", "Lora", "Georgia", "serif"],
        mulish: ["var(--font-mulish)", "Mulish", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        paste: {
          blue: "#0088ff",
          blueHover: "#1c95ff",
          amber: "#f06413",
          honey: "#feab30",
          pureWhite: "#ffffff",
          snow: "#f5f5f7",
          mist: "#f0f0f0",
          silver: "#d0d0d3",
          pewter: "#ababb0",
          smoke: "#6e6e73",
          charcoal: "#272727",
          ink: "#101010",
          trueBlack: "#000000",
          green: "#34c759",
          magenta: "#cb30e0",
          red: "#ff383c",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
};
export default config;
