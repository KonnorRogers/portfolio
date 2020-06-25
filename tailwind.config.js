module.exports = {
  purge: {
    mode: "production",
    content: ["./src/**/*.html"],
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
      },
    },
  },
  variants: {},
  plugins: [],
};
