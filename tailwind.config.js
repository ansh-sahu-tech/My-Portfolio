/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        background: '#FEFAE0',
        card: '#FFFFFF',
        surface: {
          DEFAULT: '#FFFFFF',
          secondary: '#E9EDC9',
          alt: '#FAEDCD',
        },
        sage: '#CCD5AE',
        lightgreen: '#E9EDC9',
        cream: '#FEFAE0',
        warmbeige: '#FAEDCD',
        earthy: '#D4A373',
        charcoal: '#24211D',
        accent: {
          DEFAULT: '#D4A373',
          hover: '#BD8C5C',
        },
        border: {
          DEFAULT: '#CCD5AE',
          subtle: '#CCD5AE',
        },
        brand: {
          50: '#FEFAE0',
          100: '#FAEDCD',
          200: '#E9EDC9',
          300: '#CCD5AE',
          400: '#D4A373',
          500: '#BD8C5C',
          600: '#24211D',
          700: '#24211D',
          800: '#1B1916',
          900: '#141210',
          950: '#0E0D0B',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        signature: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(36, 33, 29, 0.08), 0 1px 2px -1px rgba(36, 33, 29, 0.06)',
        'card': '0 4px 20px -2px rgba(36, 33, 29, 0.08), 0 2px 6px -1px rgba(36, 33, 29, 0.04)',
        'card-hover': '0 16px 32px -4px rgba(36, 33, 29, 0.12), 0 6px 16px -2px rgba(212, 163, 115, 0.2)',
        'warm-glow': '0 0 25px rgba(212, 163, 115, 0.25)',
      }
    },
  },
  plugins: [],
}
