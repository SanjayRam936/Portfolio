/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0D1117',
        panel: '#161B22',
        'panel-hover': '#1C2128',
        border: '#30363D',
        'text-primary': '#E6EDF3',
        'text-muted': '#8B949E',
        'text-dim': '#6E7681',
        'accent-green': '#7EE787',
        'accent-blue': '#58A6FF',
        'accent-amber': '#E3B341',
        'accent-pink': '#F778BA',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
