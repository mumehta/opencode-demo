/**
 * Design tokens — source of truth: Designs/rulebase.co-design.md
 * (Rulebase: dark editorial B2B system, bright utility accents).
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#F7F7F4',
        secondary: '#C8C4BE',
        tertiary: '#8C827A',
        neutral: '#1A1716',
        surface: '#221D1B',
        'on-surface': '#F7F7F4',
        accent: '#CC3542',
        border: '#374151',
        muted: '#EDEAE5',
        success: '#2F7D57',
        error: '#CC3542',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"ABC Diatype"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
