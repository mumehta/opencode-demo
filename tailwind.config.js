/**
 * Design tokens — source of truth: Designs/intelligence-ai-design.md
 * ("Archival Cream Ledger": warm off-white editorial + data-dashboard accents).
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3A3F4B',
        secondary: '#484A2E',
        tertiary: '#F5F3ED',
        neutral: '#E8E3DA',
        surface: '#FFFFFF',
        tint: '#F0EDE4',
        stone: '#C8CECC',
        muted: '#837975',
        ink: '#292C33',
        heading: '#000000',
        teal: '#A0C3C4',
        border: '#E2DDD0',
        'border-strong': '#B8B0AA',
        'muted-border': '#E2DDD0',
        error: '#FB2C36',
        warning: '#FE9A00',
        success: '#00D492',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Libre Baskerville"', 'Georgia', 'serif'],
        display: ['Concrette', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Libre Baskerville"', 'Georgia', 'serif'],
      },
      maxWidth: {
        ledger: '1130px',
      },
    },
  },
  plugins: [],
}
