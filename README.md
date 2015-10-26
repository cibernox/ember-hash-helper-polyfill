# Ember-hash-helper-polyfill

This is a polyfill to backport Ember's new `hash` helper introduced in [Ember 2.3](https://github.com/emberjs/ember.js/blob/master/packages/ember-htmlbars/lib/helpers/hash.js)
into Ember 1.13, 2.0, 2.1 and 2.2.

## Installation

In your project run:

`ember install ember-hash-helper-polyfill`

If you want to use this helper inside an addon remember to move it from the `devDependencies` to
the `dependencies` group of your package.json

## Usage


 ```handlebars
 {{yield (hash
    name='Sarah'
    title=office
 )}}
 ```



