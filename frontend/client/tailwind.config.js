export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F1A",
        card: "rgba(17, 24, 39, 0.85)",
        border: "rgba(255,255,255,0.08)",
        accent: "#6366F1",

        critical: "#EF4444",
        high: "#F59E0B",
        medium: "#38BDF8",
        low: "#10B981",
      },
      boxShadow: {
        soft: "0 20px 40px rgba(0,0,0,0.45)",
        glow: "0 0 30px rgba(99,102,241,0.25)",
      },
      backdropBlur: {
        glass: "12px",
      },
    },
  },
  plugins: [],
};
