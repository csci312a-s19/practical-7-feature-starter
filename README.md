# Film Explorer Client

The film-explorer client was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) (CRA) and includes all of capabilities provided by CRA. Some built-in functionality of that skeleton was stripped out, specifically the [offline caching](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app#docsNav).

## Setup

Run `npm install` to install the dependencies.

The development server will attempt to proxy API requests to the server specified in the `package.json` "proxy" field. Update that field to point a running server.

## Development

### Testing

The tests use both Jest and Enzyme has described in the [CRA documentation](https://facebook.github.io/create-react-app/docs/running-tests).

Enzyme was installed with:

```
npm install --save-dev enzyme enzyme-adapter-react-16 react-test-renderer
```

## Linting

To ensure consistent style we use the CRA-recommended [Prettier](https://github.com/prettier/prettier) package. We installed it with

```
npm install --save-dev husky lint-staged prettier
```

and added the recommended configuration to automatically reformat code during the commit. That is whenever you commit your code, Prettier will automatically reformat your code during the commit process (as a "hook"). The hook is specified in the top-level `package.json` file. The client and each of the servers has its own ESLint configuration.

We added custom ESLint rules to capture common errors. To ensure compatibility with Prettier, we also installed the `eslint-config-prettier` package to disable styling rules that conflict with Prettier.

```
npm install --save-dev eslint-config-prettier
```

and added an `"extends"` entry to `.eslintrc.json`.

The linter is run automatically by the CRA development server, or can be run manually with `npx eslint .` (or via `npm run lint`). Include the `--fix` option to `eslint` to automatically fix many formatting errors.
