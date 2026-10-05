/**
 * Design tokens — source of truth: Designs/dribbble.com-design.md
 * (Dribbble Modern: creator-first marketplace, pink-orange accent).
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0D0C22',
        secondary: '#6E6D7A',
        tertiary: '#EA4C89',
        neutral: '#F3F3F4',
        surface: '#FFFFFF',
        'on-surface': '#0D0C22',
        accent: '#FFAD48',
        border: '#E7E7E9',
        'muted-border': '#E5E7EB',
        'border-subtle': '#E5E7EB',
        inputfill: '#F5F5F7',
        success: '#48A868',
        error: '#D92D20',
      },
      fontFamily: {
        sans: ['"Mona Sans"', '"Inter Tight"', 'system-ui', 'sans-serif'],
        heading: ['"Mona Sans"', '"Inter Tight"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
