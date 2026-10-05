/**
 * Design tokens — source of truth: Designs/onyx.doctor-design.md
 * (Onyx Doctor: calm boutique medical identity, Verdana system stack).
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#2C3552',
        secondary: '#6B756F',
        tertiary: '#E8EEF2',
        neutral: '#F7F4EF',
        surface: '#FFFFFF',
        'on-surface': '#2C3552',
        'muted-surface': '#E8EEF2',
        border: '#E5E7EB',
        error: '#B91C1C',
      },
      fontFamily: {
        sans: ['Verdana', 'Geneva', 'Tahoma', 'sans-serif'],
        heading: ['Verdana', 'Geneva', 'Tahoma', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
