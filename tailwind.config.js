module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': '#444',
        'secondary': '#eece1a',
        'primary-text': '#fff'
      },
      fontSize: {
        '8xl': '6rem'
      },
      zIndex: {
        '2': 2,
        '-1': '-1'
      },
      margin: {
        '20vh': '20vh'
      },
      inset: {
        '2': '2rem'
      },
      height: {
        'tiny': '3px',
        '50px': '50px',
        '75vh': '75vh',
        '25vh': '25vh',
        '72': '18rem',
        '3/4': '75%',
        '1/2': '50%',
        '1/3': '33%'
      },
      opacity: {
        '90': '.9'
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover']
  },
  plugins: []
}
