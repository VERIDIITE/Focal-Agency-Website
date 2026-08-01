/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        focal: {
          dark: '#07080b',
          surface: '#0f1118',
          card: '#161924',
          border: 'rgba(255, 255, 255, 0.08)',
          lightBg: '#FAF8F5',
          pink: '#F43F5E',
          purple: '#8B5CF6',
          blue: '#3B82F6',
          orange: '#FF5C00',
        }
      },
      fontFamily: {
        sans: ['Albert Sans', 'sans-serif'],
        display: ['Bricolage Grotesque', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
      },
    },
  },
  plugins: [],
}
