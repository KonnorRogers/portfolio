# README

## Initial setup

```bash
npm install

# OR

yarn install
```

## Building Tailwind / SASS

```bash
npm run build:all
```

## Local environment w/ auto reload

```bash
npm run watch:all
```

Your site will now be viewable @ http://127.0.0.1:8080/dist/

## All commands

```bash
npm run build:tailwind # Builds tailwind into dist/tailwind.css
npm run build:sass # Builds sass directory into dist/css
npm run build:all # Combines tailwind & sass build commands
npm run watch:sass # Watches for changes to sass files
npm run watch:server # Auto reloads the server via live-server

# Combines watching sass changes and hot reloading
# Does so via npm-run-all -p (runs them in parallel)
npm run watch:all 
```
