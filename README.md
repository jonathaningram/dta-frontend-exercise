# DTA frontend exercise

Solution to the [DTA frontend exercise](http://frontend-exercise.apps.staging.digital.gov.au/).

## tl;dr

This app was set up using [Create React App](https://github.com/facebookincubator/create-react-app) and offers a standard set of `npm` commands to start the dev server, run tests and build for production (see `package.json`).

It has also been deployed to Google App Engine at [https://dta-frontend-exercise.appspot.com/](https://dta-frontend-exercise.appspot.com/).

## Develop

After checking out the code, the following commands will get the dev server running locally.

```sh
npm install
REACT_APP_BARS_ENDPOINT="http://frontend-exercise.apps.staging.digital.gov.au/bars" \
npm run start
```

## Test

Start the runner.

```sh
npm test
```

Generate coverage.

```sh
npm test -- --coverage
```

## Deploy

Build the optimised production distribution passing across the required environment variables.

```sh
REACT_APP_BARS_ENDPOINT="https://frontend-exercise.apps.staging.digital.gov.au/bars" \
npm run build
```

Deploy to Google App Engine (assumes that GAE tools and SDKs are installed).

```sh
appcfg.py -A "dta-frontend-exercise" update .
```

## Code style, linting

- `eslint` is used for linting. The configuration used is an extension of `create-react-app`s eslint config, plus the prettier plugin.
- `prettier` is used for automatically formatting JS code (thus giving the closest `go fmt` equivalent that seems to exist).
- `stylelint` is used for the CSS reset/normalize/reboot in `index.css`.

## Notes

- Avoided using frameworks like Bootstrap or 3rd party libraries for grids and form components, even though such libraries have tried and tested CSS and would be useful for things like the controls layout.
- Avoided splitting all tiny components into their own file. If the app was larger, components like the simple loading indicator would probably be their own component and reused elsewhere.
- Used [`styled-components`](https://github.com/styled-components/styled-components) for styling instead of other options like SASS, LESS, CSS modules, Aphrodite or inline styles.
- Does not really need to be deployed to Google App Engine in this way (that is, using Go) since it's just a simple static website.
- It's not ideal that `create-react-app` requires its env vars to be prefixed with `REACT_APP_`, but that's how it works.
