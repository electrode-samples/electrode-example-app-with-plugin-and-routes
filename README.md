# Electrode Example App [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Electrode example application

## Build With Us
This Electrode example app is created by following our [Getting Started](https://electrode-io.github.io/docs/quick_guide.html): Quick Start and Intermediate Guide. We start with our out-the-box Electrode App generator, create and publish an awesome standalone component and add a custom Hapi server plugin, routes and CSS modules.

![screencast](./img/screencast.gif)


## Installation

```sh
$ git clone your-forked-version-of-this app
$ npm install
```

Note: You will need to [generate a GitHup Api oAuth token](https://github.com/settings/tokens/new) to remove the preset limit for API requests. We have already added the code to accept and use the token in our Hapi server plugin above `const AUTH_TOKEN = process.env.token`.

Click [here](https://github.com/settings/tokens/new) to set a new personal access token (you may be prompted to login to your GitHub account if you have not already). Create your own `token description` in the form given and for `Select scopes` simply check: `public repo`. Then hit the green `Generate token` button.

You will be redirected to the next page where your new token is. Keep your token private and secure; do not copy and paste it directly into your app. Instead, we will set your token as a Node [environment variable](https://nodejs.org/api/process.html#process_process_env).
Copy and save this token in a secure place; we will use it several times. Use this token in your command line as follows:

Set the token locally:

```bash
$ token='your-token-here' gulp dev
```

Navigate to your browser and run `localhost:3000` and have fun. Open this application in your favorite text editor to examine the code, personalize the application and add more [Electrode components](https://electrode-io.github.io/docs/create_reusable_component.html). You can view the Heroku deployed version of this [example app here](https://electrode-example-app.herokuapp.com/).

##Features
This example app is built on the [Electrode Boilerplate](https://github.com/electrode-io/electrode-boilerplate-universal-react-node) and contains the following technologies:

*  [React](https://facebook.github.io/react/index.html) is an awesome JavaScript library for building user interfaces, created by Facebook.

*  [Redux](http://redux.js.org/docs/basics/UsageWithReact.html) a predictable state container for JavaScript apps. #game-changer.

*  [React Router](https://github.com/ReactTraining/react-router/tree/master/docs) is a powerful routing library built on top of React.

*  [CSS Modules](https://github.com/css-modules/css-modules) a CSS file in which all class names and animation names are scoped locally by default. Fixes the problem of the global scope in CSS. #winning

*  [Universal rendering](https://medium.com/@mjackson/universal-javascript-4761051b7ae9#.xjxr5yj5z) built in.

*  [Webpack](https://webpack.github.io/docs/motivation.html) a powerful module bundler.

*  [Webpack Isomorphic Loader](https://github.com/jchip/isomorphic-loader) a powerful tool that makes NodeJS `require` understand files such as images for SSR.

*  [Babel](https://babeljs.io/) transpiles ES6 + 7.

*  [ESLint](http://eslint.org/) a pluggable linting utility for Javascript.

*  [Mocha](https://mochajs.org/) a feature-rich Javascript testing framework.

*  [Enzyme](https://github.com/airbnb/enzyme) a Javascript testing utility for React, created by airbnb.

*  [TravisCI](https://travis-ci.org/) a continuous integration service to build and test software projects.

*  [Gulp](http://gulpjs.com/) a Javascript build tool that lets us automate tasks.

*  [Yeoman](http://yeoman.io/) a Scaffolding tool for modern webapps.

*  [History](https://www.npmjs.com/package/history) a Javascript library for managing session history.

*  [Bluebird](http://bluebirdjs.com/docs/why-promises.html) a great Javascript promise library.

*  [Electrode Confippet](https://github.com/electrode-io/electrode-confippet) Confippet is a versatile, flexible utility for managing configurations of Node.js applications.

*  [Electrode JWT CSRF](https://github.com/electrode-io/electrode-csrf-jwt) Cross-Site Request Forgery (CSRF) protection with JWT.

*  [Electrode-Redux-Router-Engine](https://github.com/electrode-io/redux-router-engine) An Electrode routing and rendering engine for react-router and redux.

*  [Component Caching](https://github.com/electrode-io/electrode-react-ssr-caching) Optimize React SSR with profiling and component caching.

*  [Electrode-Server](https://github.com/electrode-io/electrode-server) A configurable web server using Hapi.js on top of Node.js.

*  [Electrify](https://github.com/electrode-io/electrify) Tool for analyzing the module tree of webpack projects.

*  [Electrode-Docgen](https://github.com/electrode-io/electrode-docgen) A custom metadata extractor for the Electrode framework, automates component documentation.

## License

Apache-2.0 © [tiffine-koch](https://github.com/tiffine-koch)


[npm-image]: https://badge.fury.io/js/electrode-example-app-with-plugin-and-routes.svg
[npm-url]: https://npmjs.org/package/electrode-example-app-with-plugin-and-routes
[travis-image]: https://travis-ci.org/electrode-io/electrode-example-app-with-plugin-and-routes.svg?branch=master
[travis-url]: https://travis-ci.org/electrode-io/electrode-example-app-with-plugin-and-routes
[daviddm-image]: https://david-dm.org/electrode-io/electrode-example-app-with-plugin-and-routes.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/electrode-io/electrode-example-app-with-plugin-and-routes
