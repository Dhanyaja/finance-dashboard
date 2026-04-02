/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        success: "#22C55E",
        danger: "#F87171",
        bg: "#F8FAFC",
        card: "#FFFFFF",
        textPrimary: "#0F172A",
        textSecondary: "#64748B",
        border: "#E2E8F0",
        accent: "#A78BFA"
      }
    }
  },
  plugins: [],
}