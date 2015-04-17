# Typography

The Predix Experience Typography module defines styles for typography.

## Dependencies

Px's Typography module depends on three other Px modules:

* [px-defaults-design](https://github.sw.ge.com/PXd/px-defaults-design)
* [px-functions-design](https://github.sw.ge.com/PXd/px-functions-design)
* [px-mixins-design](https://github.sw.ge.com/PXd/px-mixins-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save https://github.sw.ge.com/PXd/px-typography-design.git

Once installed, `@import` into your project's Sass file in its Base layer:

    @import "../px-typography-design/base.typography";

See [px-getting-started](https://github.sw.ge.com/PXd/px-getting-started#a-note-about-relative-import-paths) for an explanation of the `../`

## Import once

All rulesets are wrapped in the following `@if` statement:

    @if import-once('base.typography') { ... }

## Usage

Individual webfont files should be included in a `type` directory. Files must be present in the following filetypes:

* `eot`
* `svg`
* `ttf`
* `woff`
