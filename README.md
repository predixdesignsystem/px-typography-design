# Typography

The Predix Experience Typography module defines styles for basic typography.

## Sass Docs

You can review Sass Documentation here: https://github.build.ge.com/pages/PXd/px-typography-design/sassdoc

## Dependencies

Px's Typography module depends on three other Px modules:

* [px-colors-design](https://github.build.ge.com/PXd/px-colors-design)
* [px-defaults-design](https://github.build.ge.com/PXd/px-defaults-design)
* [px-mixins-design](https://github.build.ge.com/PXd/px-mixins-design)

## Upstream dependency

The Typography module is also an upstream dependency in this meta kit:

* [px-starter-kit-design](https://github.build.ge.com/PXd/px-starter-kit-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save https://github.build.ge.com/PXd/px-typography-design.git

Once installed, `@import` into your project's Sass file in its Base layer:

    @import "px-typography-design/_base.typography.scss";

## Usage

Individual webfont files should be included in a `type` directory. Files must be present in the following filetypes:

* `eot`
* `svg`
* `ttf`
* `woff`

These classes are available to adjust font-weight:

* `.weight--[light|normal|semibold]`