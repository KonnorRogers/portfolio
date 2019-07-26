// https://tailwindcss.com/docs/controlling-file-size#setting-up-purgecss
// const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project 
  // content: [
    // './dist/**/*.html'
  // ],

  // Include any special characters you're using in this regular expression
  // defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
// })

// module.exports = {
//   plugins: [
//     require('postcss-import'),
//     require('tailwindcss')('./tailwind.config.js'),
//     require('autoprefixer'),
//     require('postcss-color-function'),
//     ...process.env.NODE_ENV === 'production'
//     ? [purgecss]
//     : []
//   ]
// }
module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer")
  ]
}
