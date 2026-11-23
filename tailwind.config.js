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
        brand: {
          blue: '#0300e1',
          'blue-hover': '#0200b5',
          'blue-light': '#F3F4FF',
          'blue-surface': '#EBEDFF',
          text: '#111111',
          muted: '#666666',
          border: '#E8E8EE',
          darkBg: '#090A0F',
          darkCard: '#121420',
          darkBorder: '#1F2438'
        }
      },
      fontFamily: {
        heading: ['"Outfit"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.05)',
        'elevated': '0 10px 30px -5px rgba(3, 0, 225, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04)',
        'blue-glow': '0 0 25px rgba(3, 0, 225, 0.25)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
}
