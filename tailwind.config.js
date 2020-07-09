module.exports = {
  purge: {
    mode: 'production',
    options: {
      whitelist: ['pb-12', 'pt-8', 'text-indigo-700', 'bg-green-400']
    },
    content: ['./output/**/*.html', './output/**/*.liquid']
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
