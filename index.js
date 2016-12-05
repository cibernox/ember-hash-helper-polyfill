/* jshint node: true */
'use strict';

var VersionChecker = require('ember-cli-version-checker');

module.exports = {
  name: 'ember-hash-helper-polyfill',
  init: function() {
    this._super.init && this._super.init.apply(this, arguments);

    var checker = new VersionChecker(this);
    this._checkerForEmber = checker.forEmber();
  },

  treeFor: function() {
    if (this._checkerForEmber.lt('2.3.0')) {
      return this._super.treeFor.apply(this, arguments);
    } else if (this.parent === this.project) {
      console.warn('ember-hash-helper-polyfill is not required for Ember 2.3.0 and later, please remove from your `package.json`.');
    }
  }
};
