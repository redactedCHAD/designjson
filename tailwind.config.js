/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // semantic brand palette from the screenshots
        brand: {
          50: "#F7F4FF",
          100: "#EEE7FF",
          300: "#C6A7FF",
          500: "#6C4CF4", // primarySolid
          600: "#5B3DE0",
          700: "#4C33C2"
        },
        accent: {
          DEFAULT: "#4D9EFF"
        },
        coral: "#FF7F50",
        magenta: "#FF3CAC",
        lavender: "#C84FF1",
        success: "#60D46B",
        warning: "#FFB14D",
        ui: {
          bg: "#FFFFFF",
          subtle: "#F9FAFB",
          input: "#F7F8FA",
          card: "#FFFFFF"
        },
        text: {
          primary: "#0F1720",
          secondary: "#4A4A4A",
          muted: "#7E7E7E"
        },
        border: {
          light: "rgba(0,0,0,0.06)",
          medium: "rgba(0,0,0,0.12)"
        }
      },

      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },

      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "24px",
        pill: "999px"
      },

      boxShadow: {
        "card-light": "0px 1px 3px rgba(0,0,0,0.06), 0px 4px 10px rgba(0,0,0,0.04)",
        "card-medium": "0px 4px 12px rgba(0,0,0,0.10)",
        "hover-lift": "0px 8px 20px rgba(0,0,0,0.15)",
        "cta-glow": "0 0 12px rgba(108,76,244,0.6)",
        "cta-glow-strong": "0 0 18px rgba(108,76,244,0.9)"
      },

      spacing: {
        "8px": "8px",
        "14px": "14px"
      },

      fontSize: {
        displayxl: ["64px", { lineHeight: "0.9", letterSpacing: "-0.02em" }],
        displaylg: ["48px", { lineHeight: "1.02" }],
        h1: ["40px", { lineHeight: "1.02" }],
        h2: ["32px", { lineHeight: "1.05" }]
      },

      // animated gradient for the cta glow
      keyframes: {
        "shift-gradient": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" }
        },
        "subtle-float": {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-4px)" },
          "100%": { transform: "translateY(0px)" }
        }
      },
      animation: {
        "shift-gradient": "shift-gradient 4s ease-in-out infinite",
        "float-slow": "subtle-float 6s ease-in-out infinite"
      },

      backgroundImage: {
        // CTA gradient shimmer (matching screenshots)
        "cta-multi":
          "linear-gradient(90deg, #FF7F50 0%, #FF3CAC 20%, #784BA0 60%, #2B86C5 100%)",
        "brand-primary": "linear-gradient(90deg,#6C4CF4 0%,#C84FF1 100%)"
      }
    }
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio")
  ]
};
