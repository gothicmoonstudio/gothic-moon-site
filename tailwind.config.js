// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
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
