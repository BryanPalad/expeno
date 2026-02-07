import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#fafafa",
        panel: "#0f172a",
        brand: "#3b82f6",
        "brand-dark": "#2563eb",
        "text-primary": "#f8fafc",
        "text-secondary": "#94a3b8",
        "text-muted": "#64748b",
        "border-subtle": "#334155",
        "input-text": "#0f172a",
        "input-placeholder": "#64748b",
      },
    },
  },
  plugins: [],
} satisfies Config;