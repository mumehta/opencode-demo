/**
 * Design tokens — source of truth: Designs/smc.co-design.md
 * (SMC Green Precision: white canvas, vivid green accent #009900).
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#009900',
        'primary-60': '#00CC00',
        secondary: '#000000',
        tertiary: '#6F6F6F',
        neutral: '#FFFFFF',
        surface: '#FFFFFF',
        'on-surface': '#000000',
        'muted-surface': '#F5F5F5',
        border: '#E8E8E8',
        success: '#00CC00',
        error: '#D92D20',
      },
      fontFamily: {
        sans: ['Aeonik', '"Inter Tight"', 'system-ui', 'sans-serif'],
        heading: ['Aeonik', '"Inter Tight"', 'system-ui', 'sans-serif'],
        mono: ['"Aeonik Mono"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        sm: '4px',
        md: '10px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        card: '0 8px 24px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}
