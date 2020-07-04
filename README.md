# Purpose

To create a portfolio showcasing...myself

## Usage

To start using this locally run the following:

```bash
git clone git@github.com:ParamagicDev/portfolio.git
cd portfolio
bundle install
yarn install
yarn start
```

This will open a browser to `localhost:8080` where you should
see my portfolio landing page.

## Testing

For headed browser testing:

```bash
yarn cy:test
```

For headless browser testing:

```bash
yarn cy:test:ci
```
