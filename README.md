# Pearson Elements 
[![Build Status](https://travis-ci.org/Pearson-Higher-Ed/elements.svg?branch=v0)](https://travis-ci.org/Pearson-Higher-Ed/elements)

This module provides the foundational styling for Pearson web user experiences, written in 
[SCSS](http://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html). Executing the build task compiles to CSS, 
including the minified asset.

For full documentation, please visit https://pearson-higher-ed.github.io/elements.

## Consuming this Module

We recommend that you install Elements in your project using [npm](https://npmjs.org):

    npm install --save pearson-elements

If Elements is not currently published or available on npm, then install directly from the repository:

    npm install github:Pearson-Higher-Ed/elements#v0
        
## Getting Started on Development

Please review the [guidelines](CONTRIBUTING.md) for contributing before getting started.

You must have [Node.js](https://nodejs.org/en/) `4+` installed first.

Clone the project and install the dependencies:

    git clone https://github.com/Pearson-Higher-Ed/elements.git
    cd elements
    npm install

### Building the documentation

We use [Metalsmith](http://www.metalsmith.io/) to generate the documentation. 

    npm start 

This will give you a browser-sync served copy of the docs on http://localhost:3000, and build the latest version of 
elements.min.css to /dist.

## Test
 
The unit tests are run by Karma configured to use webpack to transpile and bundle the Mocha tests (ES6).
 
    npm test
     
## Acknowledgements

This project was inspired by other popular front-end frameworks published under the MIT license:

- [Bootstrap](https://getbootstrap.com) copyright 2011-2015 Twitter, Inc.
- [Foundation](http://foundation.zurb.com/) copyright 2015 ZURB, inc.

## License

Copyright 2015 Pearson Education. This software is published under the [MIT](LICENSE) license.
