/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideFadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideFadeRight: {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideFadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
         slideFadeUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        slideFadeDown: 'slideFadeDown 0.9s ease-out forwards',
        slideFadeRight: 'slideFadeRight 0.9s ease-out forwards',
        slideFadeLeft: 'slideFadeLeft 0.9s ease-out forwards',
        slideFadeUp: 'slideFadeUp 0.9s ease-out forwards'
      },
    },
  },
  plugins: [],
}

