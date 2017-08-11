# Grokking GraphQL Boilerplate
This repository contains everything you need to get a small Express GraphQL server up and running.

## Install
```sh
git clone https://github.com/ggql/ggql-boilerplate.git
cd ggql-boilerplate
yarn install
```

## Commands
- `watch` - Starts a `nodemon` instance that will watch for changes as we build the API. Node then executes what's in `src/index.js` though a few babel filters that allows us to write in a more modern syntax.
- `build` - Compiles the `src` directory into EcmaScript5 compatible JavaScript inside of the `dist` directory.
- `start` - Executes the code in `dist`
- `test` - Tests the code in `src` and make it conforms to our `eslint` rules. *This will be replaced with a proper testing solution later in the course*
