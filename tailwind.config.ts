import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: '#6d8bff',
        surface: '#111827',
        surfaceMuted: '#141b2f',
        muted: '#94a3b8'
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.24)'
      }
    }
  },
  plugins: []
};

export default config;
