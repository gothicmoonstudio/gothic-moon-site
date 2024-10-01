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
      display: ['Greycliff CF', 'Inter', 'Avenir', 'Helvetica Neue', 'Arial', 'sans-serif'],
      // Secondary font stack for serif text
      serif: ['Bely Display', 'Georgia', 'Times New Roman', 'serif'],
      // Tertiary font stack for system-based UI elements
      system: ['Greycliff CF', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      // Additional fonts
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
