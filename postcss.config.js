module.exports = {
  parser: 'sugarss',
  plugins: {
    'postcss-import': {},
    tailwindcss: require('tailwindcss'),
    autoprefixer: require('autoprefixer'),
    'postcss-preset-env': {},
    cssnano: {},
  },
};
