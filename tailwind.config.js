/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tc: ['Open Sans', 'sans-serif'],
        zkk: ['Cabin', 'sans-serif'],
        tci: ['IBM Plex Sans', 'sans-serif'],
        bcm: ['Urbanist', 'sans-serif'],
      },
      spacing: {
        'xxxs': '4px',
        'xxs': '8px',
        'xs': '12px',
        's': '16px',
        'm': '20px',
        'l': '24px',
        'xl': '32px',
        'xxl': '40px',
        'xxxl': '48px',
        'xxxxl': '64px',
      },
      borderRadius: {
        'xxxs': '4px',
        'xxs': '8px',
        'xs': '12px',
        's': '16px',
        'm': '20px',
        'l': '24px',
        'xl': '32px',
        'xxl': '40px',
        'xxxl': '48px',
        'xxxxl': '64px',
      },
    },
  },
  plugins: [],
}
