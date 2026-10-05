/**
 * Design tokens — source of truth: Designs/taylorhare.com-design.md
 * Taylor Hare: editorial, sunlit, warm paper canvas, forest ink, coral accent.
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#132019',
        secondary: '#e4644b',
        tertiary: '#e5e7eb',
        neutral: '#f3eee8',
        surface: '#f3eee8',
        'on-surface': '#132019',
        border: '#e5e7eb',
        'muted-border': '#e5e7eb',
        error: '#b42318',
      },
      fontFamily: {
        sans: ['"Isola Book"', '"Fraunces"', 'Georgia', 'Garamond', 'serif'],
        heading: ['"Isola Book"', '"Fraunces"', 'Georgia', 'Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
