/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f7',
          100: '#fde6ef',
          200: '#fcc9de',
          300: '#faa5c8',
          400: '#f570a7',
          500: '#f4068b', // Rosa principal de la marca
          600: '#dd0577',
          700: '#b8065f',
          800: '#99084f',
          900: '#7f0d44',
        },
        secondary: {
          50: '#f0f4fe',
          100: '#dde6fc',
          200: '#c2d4f9',
          300: '#83c7ed', // Azul claro de la marca
          400: '#5ba5e3',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          purple: '#6f28d0', // Morado de la marca
          yellow: '#fed801', // Amarillo de la marca
          cyan: '#1adede',   // Cyan de la marca
        },
        brand: {
          blue: '#83c7ed',
          purple: '#6f28d0',
          yellow: '#fed801',
          pink: '#f4068b',
          cyan: '#1adede',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
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
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}