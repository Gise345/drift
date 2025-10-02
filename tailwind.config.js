/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Ocean & Island Primary Colors
        ocean: {
          50: '#E6F7FF',
          100: '#B3E5FF',
          200: '#80D4FF',
          300: '#4DC2FF',
          400: '#1AB1FF',
          500: '#00A0E3',  // Main ocean blue
          600: '#0086C3',
          700: '#006BA3',
          800: '#005083',
          900: '#003563',
        },
        coral: {
          50: '#FFF5F3',
          100: '#FFE5E0',
          200: '#FFCCC2',
          300: '#FFB3A3',
          400: '#FF9A85',
          500: '#FF8166',  // Main coral
          600: '#FF6847',
          700: '#E65533',
          800: '#CC4429',
          900: '#B3331F',
        },
        sand: {
          50: '#FFFEF9',
          100: '#FFF9E6',
          200: '#FFF3CC',
          300: '#FFECB3',
          400: '#FFE699',
          500: '#FFE080',
          600: '#FFD966',
          700: '#E6C34D',
          800: '#CCAD33',
          900: '#B3971A',
        },
        palm: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',  // Palm green
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },
        // Functional colors with island twist
        island: {
          background: '#F8FBFD',
          card: '#FFFFFF',
          text: '#1E293B',
          'text-light': '#64748B',
          border: '#E2E8F0',
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
        },
      },
      fontFamily: {
        // Will add custom fonts later
        sans: ['System'],
        display: ['System'],
      },
      animation: {
        'wave': 'wave 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.3s ease-out',
        'fade-in': 'fade-in 0.2s ease-in',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'island': '0 4px 20px rgba(0, 160, 227, 0.15)',
        'coral': '0 4px 20px rgba(255, 129, 102, 0.15)',
        'soft': '0 2px 10px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}