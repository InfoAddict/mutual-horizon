/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 10s linear infinite',
        'spin-reverse-slow': 'spin-reverse 15s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(0, 170, 255, 0.5)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#b3d1ff',
            h1: { color: '#ffffff' },
            h2: { color: '#ffffff' },
            h3: { color: '#ffffff' },
            h4: { color: '#ffffff' },
            strong: { color: '#ffffff' },
            code: { color: '#00aaff' },
            blockquote: { color: '#8ba4c6' },
            'ul > li::before': { backgroundColor: '#00aaff' },
            'ol > li::before': { color: '#00aaff' },
            hr: { borderColor: '#2c4766' },
            table: {
              width: '100%',
              borderCollapse: 'collapse',
              thead: {
                borderBottomColor: '#2c4766',
              },
              'tbody tr': {
                borderBottomColor: '#153654',
              },
              th: {
                color: '#ffffff',
                padding: '0.75rem',
                backgroundColor: '#153654',
              },
              td: {
                padding: '0.75rem',
                color: '#b3d1ff',
              },
              'tr:nth-child(even)': {
                backgroundColor: '#0a1a2f',
              },
            },
            a: { 
              color: '#00aaff',
              '&:hover': {
                color: '#33bbff',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};