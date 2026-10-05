/**
 * Design tokens — source of truth: Designs/DESIGN_WarmHeritage.md (§2 Colors).
 * Warm Heritage palette: cream page, olive primary, gold highlights, charcoal text.
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: '#FCF0DA',
        olive: '#AEAC78',
        gold: '#F2C46A',
        charcoal: '#4C4541',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
