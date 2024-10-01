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
      // Additional colors
    },
    fontFamily: {
      sans: ['Greycliff CF', 'sans-serif'],
      display: ['Greycliff CF', 'sans-serif'],
      serif: ['Bely Display', 'serif'],
      // Additional fonts
    },
    extend: {
      spacing: {
        102: '102px',
        118: '118px',
        // Additional spacing values
      },
      borderRadius: {
        full: '9999px',
        lg: '12px',
        // Additional border radius values
      },
    },
  },
  plugins: [],
};
