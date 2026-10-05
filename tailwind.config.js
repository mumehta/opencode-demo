/**
 * Design tokens — source of truth: DESIGN.md (frontmatter colors/typography/
 * rounded/spacing/components + "Xiloteca Trevigiana" sections).
 * Change DESIGN.md first, then mirror the change here.
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1032CF',
        secondary: '#141414',
        tertiary: '#F8F5F1',
        neutral: '#EDE5DB',
        surface: '#FFFFFF',
        border: '#00000012',
        'muted-border': '#E5E7EB',
        error: '#C81E1E',
      },
      fontFamily: {
        sans: ['"Uncut Sans"', '"Inter Tight"', 'system-ui', 'sans-serif'],
        heading: ['"Uncut Sans"', '"Inter Tight"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
