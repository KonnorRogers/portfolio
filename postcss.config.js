const postcssImport = require('postcss-import')
const tailwindcss = require('tailwindcss')('./tailwind.config.js')
const colorMod = require('postcss-color-mod-function')
const autoprefixer = require('autoprefixer')
const nested = require('postcss-nested')
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    postcssImport,
    tailwindcss,
    autoprefixer,
    nested,
    colorMod,
    purgecss({
      content: ['./**/*.html']
    })
  ]
}
