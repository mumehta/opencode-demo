/**
 * Design tokens — source of truth: Designs/DESIGN_CoLabsLightEditorial.md
 * (frontmatter colors/typography/rounded/spacing/components).
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#66662A',
        tertiary: '#E5B97E',
        neutral: '#F9F8F6',
        surface: '#FFFFFF',
        'on-surface': '#000000',
        accent: '#38C98A',
        border: '#E5E7EB',
        muted: '#C8B08A',
        error: '#D64C4C',
      },
      fontFamily: {
        sans: ['"Matter SQ"', '"Space Grotesk"', 'system-ui', 'sans-serif'],
        heading: ['"Matter SQ"', '"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
      },
      spacing: {
        xs: '10px',
        sm: '20px',
        md: '40px',
        lg: '70px',
        xl: '102px',
      },
    },
  },
  plugins: [],
}
