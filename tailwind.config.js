/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'ps146': {
          'navy': {
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
          },
          // Map legacy 'coral' token to the new PRIMARY blue
          'coral': {
            50: '#eef7fd',
            100: '#d5eefb',
            200: '#adddf6',
            300: '#7fc8f0',
            400: '#51b4ea',
            500: '#31a3dd',
            600: '#238bc1',
            700: '#1d72a0',
            800: '#1a5d82',
            900: '#164b68',
          },
          // New SECONDARY gold palette
          'gold': {
            50: '#fff8e6',
            100: '#feefc2',
            200: '#fee38b',
            300: '#fed44f',
            400: '#fec71f',
            500: '#febe06',
            600: '#d9a504',
            700: '#ad8203',
            800: '#876503',
            900: '#6a4f02',
          },
          'neutral': {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#e5e5e5',
            300: '#d4d4d4',
            400: '#a3a3a3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
          }
        }
      },
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

