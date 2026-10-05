/**
 * Design tokens — source of truth: Designs/wealthsimple.com-design.md
 * (Wealthsimple Dark Prestige).
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#fcfcfc',
        secondary: '#c9c6c4',
        tertiary: '#eee3b1',
        neutral: '#080f16',
        surface: '#0d1722',
        'on-surface': '#fcfcfc',
        'muted-surface': '#111c29',
        border: '#374151',
        text: '#fcfcfc',
        accent: '#eee3b1',
        error: '#d85c5c',
        inverse: '#1c1b1b',
      },
      fontFamily: {
        sans: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        heading: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        md: '8px',
      },
    },
  },
  plugins: [],
}
