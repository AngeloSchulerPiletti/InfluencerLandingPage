/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      fontSize: {
        lg: ['24px', '32px'], // Large
        md: ['20px', '32px'], // Medium
        base: ['18px', '24px'], // Small
        sm: ['18px', '24px'], // Small
        xs: ['16px', '24px'], // Extra small
        xxs: ['14px', '20px'], // Extra Extra small
      },
      colors: {
        primary: {
          100: '#7698c2',
          200: '#6785aa',
          300: '#586f8c',
          400: '#4a617d',
          500: '#415977',
          600: '#394c63',
          700: '#303e50',
          800: '#293648',
        },
        secondary: {
          100: '#637b99',
          200: '#566a83',
          300: '#495b73',
          400: '#3c4c61',
          500: '#2f3c4d',
          600: '#26313f',
        },
        tertiary: {
          100: '#555555',
          200: '#454544',
          300: '#373736',
          400: '#262625',
        },
        neutral: {
          100: '#f5f5f5',
          200: '#e0e0e0',
          300: '#cdcdcd',
          400: '#b8b8b8',
          500: '#a6a6a6',
          600: '#909090',
          700: '#808080',
        },
      },
    },
  },
  plugins: [],
}
