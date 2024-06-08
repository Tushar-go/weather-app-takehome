/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        primaryBgLight: '#FFFFFF',
        secondaryBgLight: '#F8F9FA',
        primaryTextLight: '#212529',
        secondaryTextLight: '#495057',
        primaryAccentLight: '#0D6EFD',
        secondaryAccentLight: '#6C757D',
        primaryBorderLight: '#DEE2E6',
        buttonBgLight: '#0D6EFD',
        buttonHoverBgLight: '#0A58CA',
        buttonTextLight: '#FFFFFF',

        primaryBgDark: '#121212',
        secondaryBgDark: '#1E1E1E',
        primaryTextDark: '#E0E0E0',
        secondaryTextDark: '#B0B0B0',
        primaryAccentDark: '#BB86FC',
        secondaryAccentDark: '#03DAC6',
        primaryBorderDark: '#333333',
        buttonBgDark: '#BB86FC',
        buttonHoverBgDark: '#9A67EA',
        buttonTextDark: '#121212',
      }
    }
  },
  darkMode:"class",
  plugins: [],
}

