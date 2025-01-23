import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "my-blue": "#1E40AF",
        "my-bg": "#E5E5E9",
        "my-shadow": "#A5A2A2",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
