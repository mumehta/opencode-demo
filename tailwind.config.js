/**
 * Design tokens — source of truth: Designs/www.context.dev-DESIGN.md
 * Context.dev system: lavender primary, electric-blue accent, purple surfaces.
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#EDE8F9',
        accent: '#2563EB',
        brand: '#222222',
        canvas: '#FFFFFF',
        surface: '#7041B5',
        surfacedeep: '#6524CC',
        ink: '#030712',
        link: '#111827',
        body: '#444444',
        muted: '#4B5563',
        faint: '#6B7280',
        hairline: '#1B44B8',
        lavtext: '#5C418B',
        navy: '#0A2E66',
        teal: '#18C386',
        dark: '#0D0D0F',
        midblue: '#4A6FD4',
        error: '#C81E1E',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        heading: ['"IBM Plex Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"IBM Plex Mono"', '"Courier New"', 'monospace'],
      },
      borderRadius: {
        xl: '21.6px',
        xxl: '23px',
      },
      boxShadow: {
        featured: 'rgba(77, 43, 123, 0.12) 0px 6px 24px 0px',
        micro: 'rgba(0, 0, 0, 0.1) 0px 9px 13.5px -2.7px, rgba(0, 0, 0, 0.1) 0px 3.6px 5.4px -3.6px',
        btn: 'rgba(0, 0, 0, 0.16) 0px 1px 2px 0px',
        'btn-sm': 'rgba(0, 0, 0, 0.05) 0px 0.9px 1.8px 0px',
      },
      maxWidth: {
        content: '1350px',
      },
    },
  },
  plugins: [],
}
