/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      screens: {
        xs: '375px',
        sm: '375px',
        md: '744px',
        lg: '1024px',
        xl: '1440px',
      },
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
          100: '#ebf3f9',
          200: '#b1d0e7',
          300: '#76acd5',
          400: '#3c89c3',
          500: '#306d9c',
          600: '#1e4462',
          700: '#12293b',
          800: '#060e14',
        },
        secondary: {
          100: '#edf1f7',
          200: '#c9d4e8',
          300: '#a6b7d9',
          400: '#829ac9',
          500: '#5e7dba',
          600: '#4563a1',
          700: '#364d7d',
          800: '#263759',
          900: '#172136',
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
