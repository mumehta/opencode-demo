/**
 * Design tokens — source of truth: Designs/kamdalej.sk-design.md (WhereNext).
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#c14000',
        'primary-70': '#e25a12',
        'primary-40': '#f39b1a',
        secondary: '#756c66',
        tertiary: '#e0dbd7',
        neutral: '#ffffff',
        surface: '#f7f3ef',
        'on-surface': '#1a1716',
        border: '#e5e7eb',
        muted: '#f1ede9',
        error: '#d64545',
      },
      fontFamily: {
        sans: ['"Mark Offc For MC"', '"Fraunces"', 'Georgia', 'serif'],
        heading: ['"Mark Offc For MC"', '"Fraunces"', 'Georgia', 'serif'],
      },
      borderRadius: {
        xl: '32px',
      },
    },
  },
  plugins: [],
}
