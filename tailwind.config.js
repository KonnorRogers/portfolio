module.exports = {
  purge: {
    mode: 'production',
    content: ['./src/**/*.html', './src/**/*.liquid', './output/**/*.html', './output/**/*.liquid']
  },
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
        "-20": "-20",
        "-30": "-30",
      },

      height: {
        "1/2": "50%",
        "75": "75vh",
      },

      width: {
        "75": "75vw",
      },
    },
  },
  variants: {},
  plugins: [],
};
