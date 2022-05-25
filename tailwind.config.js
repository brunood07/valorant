module.exports = {
  content: [
    "./src/**/*.tsx",
    "./src/**/*.stories.tsx",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#FF5953'
        }
      },
      screens: {
        'sm': '320px',
        'lm': '414px',
        'tablet': '834px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
    },
  },
  plugins: [],
}
