const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-color-function'),
    require('autoprefixer'),
    require('postcss-nested'),
    purgecss({
      content: ['./**/*.html']
    })
  ]
}
