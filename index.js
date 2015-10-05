/* jshint node: true */
'use strict';

module.exports = {
    name: 'ember-cli-sanitize',

    included: function(app) {
        this._super.included(app);
        this.app.import('bower_components/sanitize.js/lib/sanitize.js');
    }
};
