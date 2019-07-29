# README

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

This will create a production ready dist/ directory
