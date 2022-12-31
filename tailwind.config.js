/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,jsx,ts,tsx}',
    './ui/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '32em',
        md: '48em',
        lg: '64em',
        xl: '80em',
        '2xl': '96em',
        'sm-max': {max: '48em'},
        'sm-only': {min: '32em', max: '48em'},
        'md-only': {min: '48em', max: '64em'},
        'lg-only': {min: '64em', max: '80em'},
        'xl-only': {min: '80em', max: '96em'},
        '2xl-only': {min: '96em'},
      },
    }
  },
  plugins: [
    require('rippleui')
  ],
  rippleui: {
    defaultStyle: false,
    themes: [{
      themeName: 'dark',
      themeClass: 'dark',
      colors: {
        primary: '#1f2937',
        secondary: '#4b5563',
        backgroundPrimary: '#111827',
        backgroundSecondary: '#374151',
      }
    }]
  }
}