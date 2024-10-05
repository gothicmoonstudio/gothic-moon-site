/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,jsx}', 
    './components/**/*.{js,jsx}',
  ],
  theme: {
    colors: {
      light: {
        primary: '#141221', 
        background: '#f4f3ff', 
      },
      dark: {
        primary: '#f4f3ff',
        background: '#141221',
      },
      lilac: {
        primary: '#141221',
        secondary: '#f4f3ff',
        background: '#e9cdff',
      },
      glow: {
        primary: '#141221',
        secondary: '#f4f3ff',
        background: '#f8ffce',
      },
    },
    fontFamily: {
      header: ['Greycliff CF', 'Poppins', 'sans-serif'],
      serif: ['Bely Display', 'Gloock', 'serif'],
      body: ['Alegreya', 'serif'], 
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
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '8rem',
        '5xl': '16rem',
        102: '102px',
        118: '118px',
      },
      borderRadius: {
        full: '9999px',
        lg: '16px',
        md: '8px',
        sm: '2px'
      },
      backgroundImage: {
        'light-gradient': 'linear-gradient(to top, #cdafff, #ffe9e9)',
        'dark-gradient': 'linear-gradient(to top left, #3b1ae5, #e1303a)',
        'lilac-gradient': 'linear-gradient(to top, #cdafff, #ffe9e9)',
        'glow-gradient': 'linear-gradient(to bottom left, #f6ffbc, #ffe9e9)',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
};