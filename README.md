# DTA frontend exercise

Solution to the [DTA frontend exercise](http://frontend-exercise.apps.staging.digital.gov.au/).

## tl;dr

This app was set up using [Create React App](https://github.com/facebookincubator/create-react-app)
and offers a standard set of `npm` commands to start the dev server, run tests and build for production (see `package.json`).

After checking out the code, the following commands will get the dev server
running locally.

```sh
npm install
REACT_APP_BARS_ENDPOINT="http://frontend-exercise.apps.staging.digital.gov.au/bars" \
    npm run start
```