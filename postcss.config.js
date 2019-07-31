// Allows @import "" statements
const postcssImport = require('postcss-import')

// pulls in tailwind
const tailwindcss = require('tailwindcss')('./tailwind.config.js')

// allows color-mod() to be called in place of rgba / hsla
const colorMod = require('postcss-color-mod-function')

// Adds ::before & ::after and other useful prefixes
const autoprefixer = require('autoprefixer')

// Allows nesting
const nested = require('postcss-nested')

// Removes unused css
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./**/*.html'],
  // Whitelist any patterns css that is dynamically loaded
  whitelistPatternsChildren: [/rotate/, /translate/, /block/],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
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
