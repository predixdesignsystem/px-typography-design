# px-typography-design

The Predix UI Typography module defines styles for basic typography.

## Dependencies

The `px-typography-design` module depends on three other Px modules:

* [px-colors-design](https://github.com/predixdesignsystem/px-colors-design)
* [px-defaults-design](https://github.com/predixdesignsystem/px-defaults-design)
* [px-mixins-design](https://github.com/predixdesignsystem/px-mixins-design)

## Upstream dependencies

The `px-typography-design` module is also an upstream dependency in this meta kit:

* [px-starter-kit-design](https://github.com/predixdesignsystem/px-starter-kit-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save px-typography-design

Once installed, `@import` into your project's Sass file in its **Base** layer:

    @import "px-typography-design/_base.typography.scss";

## Usage

Individual webfont files should be included in a `type` directory. Files must be present in the following filetypes:

* `eot`
* `svg`
* `ttf`
* `woff`

These classes are available to adjust font-weight:

* `.weight--[light|normal|semibold]`

View the full API [here](https://www.predix-ui.com/#/css/utilities/px-typography-design).
