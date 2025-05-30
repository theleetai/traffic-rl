/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'traffic': {
          'red': '#ef4444',
          'yellow': '#f59e0b',
          'green': '#10b981',
        },
        'rl': {
          'primary': '#3b82f6',
          'secondary': '#6366f1',
          'success': '#10b981',
          'warning': '#f59e0b',
          'danger': '#ef4444',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-light': 'bounce 1s infinite',
      },
      boxShadow: {
        'traffic': '0 4px 14px 0 rgba(0, 0, 0, 0.1)',
        'intersection': '0 8px 32px 0 rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}