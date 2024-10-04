/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,jsx}', 
    './components/**/*.{js,jsx}',
  ],
  theme: {
    colors: {
      primary: '#0d0c16',
      secondary: '#141221',
      accent: '#a06af8',
      light: '#f4f3ff',
      dark: '#3f3a5b',
    },
    fontFamily: {
      display: ['Greycliff CF', 'sans-serif'],
      serif: ['Bely Display', 'sans-serif'],
      accent: ['Bely', 'serif'],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    },
    keyframes: {
      halo: {
        '0%': { boxShadow: '0 0 10px rgba(160, 106, 248, 0.6), 0 0 30px rgba(160, 106, 248, 0.4), 0 0 60px rgba(160, 106, 248, 0.2)' },
        '25%': { boxShadow: '0 0 15px rgba(160, 106, 248, 0.8), 0 0 35px rgba(160, 106, 248, 0.5), 0 0 65px rgba(160, 106, 248, 0.3)' },
        '50%': { boxShadow: '0 0 20px rgba(160, 106, 248, 1), 0 0 40px rgba(160, 106, 248, 0.6), 0 0 70px rgba(160, 106, 248, 0.4)' },
        '75%': { boxShadow: '0 0 15px rgba(160, 106, 248, 0.8), 0 0 35px rgba(160, 106, 248, 0.5), 0 0 65px rgba(160, 106, 248, 0.3)' },
        '100%': { boxShadow: '0 0 10px rgba(160, 106, 248, 0.6), 0 0 30px rgba(160, 106, 248, 0.4), 0 0 60px rgba(160, 106, 248, 0.2)' },
      },
    },
    animation: {
      halo: 'halo 2s infinite',
    },
    extend: {
      spacing: {
        102: '102px',
        118: '118px',
      },
      borderRadius: {
        full: '9999px',
        lg: '12px',
      },
    },
  },
  plugins: [],
};