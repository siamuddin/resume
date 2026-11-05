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
        background: {
          DEFAULT: '#09090B',
          secondary: '#111114',
          card: '#18181D',
          hover: '#22222A',
          subtle: '#272730',
        },
        surface: {
          light: '#F8F9FA',
          'light-secondary': '#F1F3F5',
          'light-card': '#FFFFFF',
          'light-border': 'rgba(0, 0, 0, 0.08)',
        },
        accent: {
          purple: '#8B5CF6',
          'purple-dark': '#7C3AED',
          'purple-light': '#A78BFA',
          'purple-glow': 'rgba(139, 92, 246, 0.25)',
          blue: '#38BDF8',
          'blue-dark': '#0284C7',
          'blue-light': '#7DD3FC',
          emerald: '#10B981',
          amber: '#F59E0B',
          rose: '#F43F5E',
        },
        text: {
          primary: '#FAFAFA',
          secondary: '#A1A1AA',
          muted: '#71717A',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          highlight: 'rgba(255, 255, 255, 0.16)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Plus Jakarta Sans', 'Cabinet Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'glow-purple': '0 0 25px -5px rgba(139, 92, 246, 0.3)',
        'glow-blue': '0 0 25px -5px rgba(56, 189, 248, 0.3)',
        'card-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.06)',
        'card-hover': '0 12px 32px -4px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(139, 92, 246, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
