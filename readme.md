<p align="center">
  <a href="https://www.npmjs.com/package/react-jss-grid">
    <img alt="cssinjs" src="https://avatars3.githubusercontent.com/u/9503099?v=4&s=200" width="200">
  </a>
</p>

<p align="center">
  React JSS Grid a flexbox grid.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-jss-grid" title="downloads"><img src="https://img.shields.io/npm/v/react-jss-grid.svg?maxAge=2592000&style=flat-square"/></a>
  <a href="https://npm-stat.com/charts.html?package=react-jss-grid" title="downloads"><img src="https://img.shields.io/npm/dt/react-jss-grid.svg?maxAge=2592000&style=flat-square"/></a>
  <a href="https://travis-ci.org/TriPSs/react-jss-grid" title="build status"><img src="https://travis-ci.org/TriPSs/react-jss-grid.svg?branch=master&style=flat-square"/></a>
  <a href="https://codecov.io/gh/TriPSs/react-jss-grid" title="codecov"><img src="https://codecov.io/gh/TriPSs/react-jss-grid/branch/master/graph/badge.svg?style=flat-square" alt="Codecov" /></a>
  <a href="https://david-dm.org/tripss/react-jss-grid" title="dependencies status"><img src="https://david-dm.org/tripss/react-jss-grid/status.svg?style=flat-square"/></a>
  <a href="https://david-dm.org/tripss/react-jss-grid?type=dev" title="devDependencies status"><img src="https://david-dm.org/tripss/react-jss-grid/dev-status.svg?style=flat-square"/></a>
</p>

---

> This project is inspired / based on the grid of [material-ui](https://github.com/callemall/material-ui).

## Installation
```shell
$ npm install --save react-jss-grid
```

## Development
If you'd like to contribute to this project, all you need to do is clone
this project and run:

```shell
$ npm install
$ npm run build
$ npm run build:watch // To recompile files on file change
```

## Examples
##### Custom breakpoints

When creating your theme you can define custom breakpoints the following way:
```js
import generateBreakPoints from 'react-jss-grid/utils/breakpoints'

const theme = {
  breakpoints: generateBreakPoints({
    values: {
      xs: 360,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  }),
  ...
}
```

### Using development version in local project
You can use `npm link` to use your development version in your own project:
- Go to `react-jss-grid` directory and execute command `npm link`
- Go to your project directory and execute command `npm link react-jss-grid`

## [License](https://github.com/tripss/react-jss-grid/blob/master/LICENSE)

React Jss Grid is [MIT licensed](./LICENSE).

## Collaboration

If you have questions or issues, please [open an issue](https://github.com/TriPSs/react-jss-grid/issues)!
