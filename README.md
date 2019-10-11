# README

## Prerequisites

* Node runtime for use with npm / webpack

## Initial setup

```bash
npm install

# OR

yarn install
```

## Dependencies

* Cross-env
* Webpack
* Postcss
* TailwindCSS
* PurgeCSS
* Multiple webpack / Postcss plugins listed in config files

## Local environment w/ auto reload

```bash
npm run dev
```

Open up localhost:8080 in a web browser

## Deployment

To create production ready code via PurgeCSS, run the following command:

```bash
npm run prod
```

This will create a production ready dist/ directory<br>
Every time this command is run, it will rebuild the dist directory using
webpack-clean-plugin

## Making changes

The <strong>tailwind.config.js</strong> has multiple configurations to include the primary
and secondary colors as well as the text color for the site.

To add a new HTML page, go into <strong>webpack.config.js</strong> and add the
following lines of code in the plugins section:

```javascript
// Above code omitted for brevity
// ...
plugins: [
  // ...
  new HtmlWebpackPlugin({
    // Where to pull the html file from
    template: './src/new.html'
    // What to name the html file in the dist/ directory
    filename: 'new.html'
  }),
// ...
// Below code omitted for brevity
]

```


