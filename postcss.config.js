const config = require('./tailwind.config')

module.exports = () => ({
  plugins: [
    require('tailwindcss')({
      important: true,
      theme: {
        ...config.theme
      }
    })
  ]
})