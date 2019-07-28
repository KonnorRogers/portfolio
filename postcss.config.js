const postcssImport = require('postcss-import')
const tailwindcss = require('tailwindcss')('./tailwind.config.js')
const colorMod = require('postcss-color-mod-function')
const autoprefixer = require('autoprefixer')
const nested = require('postcss-nested')
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./**/*.html'],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  plugins: [
    postcssImport,
    tailwindcss,
    autoprefixer,
    nested,
    colorMod,

    // if its production, purge it, if its not, leave it alone
    ...process.env.NODE_ENV === 'production' ? [purgecss] : []
  ]
}
