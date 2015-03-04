# Typography

The Predix Experience Typography module defines styles for typography.

## Dependencies

Px's Typography module depends on one other Px module:

* [px-functions-design](https://github.sw.ge.com/pxc/px-functions-design)

If you are using webfonts, an additional dependency is required:

* [px-mixins-design](https://github.sw.ge.com/pxc/px-mixins-design)

## Installation

Install this module and its dependency using bower

    bower install --save https://github.sw.ge.com/pxc/px-typography-design.git

Once installed, `@import` into your project's Sass file in its Base layer:

    @import "../px-typography-design/base.typography";

See [px-getting-started](https://github.sw.ge.com/pxc/px-getting-started#a-note-about-relative-import-paths) for an explanation of the `../`

## Import once

All rulesets are wrapped in the following `@if` statement:

    @if import-once('base.typography') { ... }

## Usage

Individual webfont files should be included in a `type` directory. Files must be present in the following filetypes:

* `eot`
* `svg`
* `ttf`
* `woff`
