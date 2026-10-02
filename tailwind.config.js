/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        deepteal: {
          50: '#f0f9f9',
          100: '#daf1f2',
          200: '#b8e3e5',
          300: '#86cfd3',
          400: '#4fb2b8',
          500: '#2c939a',
          600: '#14696c', // Exact user screenshot hex
          700: '#125a5d',
          800: '#12494c',
          900: '#133e40',
          950: '#062426',
        },
        terracotta: {
          50: '#fdf8f5',
          100: '#f9eee8',
          200: '#f3dccf',
          300: '#e7c0aa',
          400: '#d89c7d',
          500: '#c2744d',
          600: '#a75a32',
          700: '#8e4827',
          800: '#743d23',
          900: '#603520',
          950: '#351a0e',
        },
        cream: {
          50: '#fdfcf9',
          100: '#fbf7f1', // Card background
          200: '#f5eee3',
          300: '#eae0cf',
          400: '#dacbba',
          500: '#c5b19b',
        },
        warmgold: {
          200: '#f3e3ce',
          300: '#e7cca9',
          400: '#d4ad7c',
          500: '#c08e54',
          600: '#a5733f',
        },
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        signature: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 20px -2px rgba(88, 41, 16, 0.08), 0 2px 6px -1px rgba(88, 41, 16, 0.04)',
        'card-hover': '0 20px 35px -5px rgba(88, 41, 16, 0.14), 0 10px 15px -5px rgba(88, 41, 16, 0.08)',
        'deck-card': '0 10px 30px -4px rgba(45, 18, 5, 0.22), 0 4px 12px -2px rgba(45, 18, 5, 0.15)',
        'deck-card-hover': '0 25px 45px -5px rgba(45, 18, 5, 0.35), 0 12px 20px -4px rgba(45, 18, 5, 0.2)',
      }
    },
  },
  plugins: [],
}
